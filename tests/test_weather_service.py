#!/usr/bin/env python3
"""
Mock Unit Test Suite for PunePravah weather_service.py Data Aggregator.
Verifies aggregation, cache bounds, boundary coordinates, and partial service degradation.
"""

import sys
import os

# Set mock environment variables BEFORE instantiating aggregator
os.environ["IMD_API_URL"] = "http://mock-imd.com"
os.environ["OPENWEATHER_API_URL"] = "http://mock-ow.com"
os.environ["OPENWEATHER_API_KEY"] = "mock_key"
os.environ["PMC_OPEN_DATA_URL"] = "http://mock-pmc.com"

from unittest.mock import AsyncMock, MagicMock, patch
import pytest
import httpx

# Add src folder to path
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src"))

from weather_service import PunePravahAggregator, scrub_pii

# ==================================================
# 1. SUCCESS INTEGRATION TEST (MOCKED ENDPOINTS)
# ==================================================
@pytest.mark.asyncio
@patch("httpx.AsyncClient.get", new_callable=AsyncMock)
async def test_aggregator_success(mock_get):
    """Verifies successful aggregation when all three API portals respond correctly."""
    
    # Configure mock response objects (sync json() method)
    mock_imd_res = MagicMock()
    mock_imd_res.status_code = 200
    mock_imd_res.json.return_value = {
        "current": {
            "temperature_2m": 29.5,
            "precipitation": 22.4, # Orange alert threshold
            "weather_code": 3
        }
    }

    mock_ow_res = MagicMock()
    mock_ow_res.status_code = 200
    mock_ow_res.json.return_value = {
        "main": {"temp": 302.65} # 29.5 C
    }

    mock_pmc_res = MagicMock()
    mock_pmc_res.status_code = 200
    mock_pmc_res.json.return_value = {
        "dams": [
            {"name": "Khadakwasla", "level_percent": 90.0, "discharge": 5000.0}
        ],
        "waterlogging": [
            {"ward": "Kothrud", "severity": "HIGH", "desc": "Karve Rd flooded", "status": "ACTIVE"}
        ]
    }

    # Set up mock side-effects for each concurrent fetch
    mock_get.side_effect = [mock_imd_res, mock_ow_res, mock_pmc_res]

    aggregator = PunePravahAggregator()
    
    # Ensure cache is empty initially
    aggregator.cache.cache.clear()
    
    alert = await aggregator.get_unified_alert()
    
    assert alert["source_status"]["imd_api"] == "ONLINE"
    assert alert["source_status"]["openweather_api"] == "ONLINE"
    assert alert["source_status"]["pmc_open_data"] == "ONLINE"
    
    assert alert["weather"]["alert_level"] == "ORANGE"
    assert alert["weather"]["temperature_c"] == 29.5
    
    assert len(alert["municipal_telemetry"]["dam_storage"]) == 1
    assert alert["municipal_telemetry"]["dam_storage"][0]["dam_name"] == "Khadakwasla"
    assert alert["municipal_telemetry"]["waterlogging_reports"][0]["ward_resolved"] == "Kothrud"

# ==================================================
# 2. GRACEFUL DEGRADATION FAILURE TEST
# ==================================================
@pytest.mark.asyncio
@patch("httpx.AsyncClient.get", new_callable=AsyncMock)
async def test_aggregator_pmc_outage(mock_get):
    """Verifies system degrades gracefully returning 'Data Unavailable' if PMC data portal goes offline."""
    
    # Mock IMD success
    mock_imd_res = MagicMock()
    mock_imd_res.status_code = 200
    mock_imd_res.json.return_value = {
        "current": {"temperature_2m": 24.0, "precipitation": 0.0, "weather_code": 1}
    }

    # Mock OpenWeather success
    mock_ow_res = MagicMock()
    mock_ow_res.status_code = 200
    mock_ow_res.json.return_value = {"main": {"temp": 297.15}}

    # Mock PMC outage (throws connection timeout)
    mock_get.side_effect = [
        mock_imd_res,
        mock_ow_res,
        httpx.ConnectTimeout("Connect to opendata.punecorporation.org failed. Timeout.")
    ]

    aggregator = PunePravahAggregator()
    aggregator.cache.cache.clear()
    
    alert = await aggregator.get_unified_alert()
    
    # Weather blocks should remain online
    assert alert["source_status"]["imd_api"] == "ONLINE"
    assert alert["source_status"]["openweather_api"] == "ONLINE"
    
    # PMC block should register as offline and return Data Unavailable without throwing 500 error
    assert alert["source_status"]["pmc_open_data"] == "OFFLINE"
    assert alert["municipal_telemetry"]["dam_storage"] == "Data Unavailable"
    assert alert["municipal_telemetry"]["waterlogging_reports"] == "Data Unavailable"

# ==================================================
# 3. NULL WARD IDENTIFIER / DIAGNOSTIC ERROR TEST
# ==================================================
@pytest.mark.asyncio
@patch("httpx.AsyncClient.get", new_callable=AsyncMock)
async def test_aggregator_missing_ward_hallucination(mock_get):
    """Checks that missing ward values are mapped to null instead of hallucinating values."""
    mock_imd_res = MagicMock()
    mock_imd_res.status_code = 200
    mock_imd_res.json.return_value = {
        "current": {"temperature_2m": 25.0, "precipitation": 1.0, "weather_code": 1}
    }

    mock_ow_res = MagicMock()
    mock_ow_res.status_code = 200
    mock_ow_res.json.return_value = {"main": {"temp": 298.15}}

    # Mock PMC returning a waterlogging incident missing the 'ward' key
    mock_pmc_res = MagicMock()
    mock_pmc_res.status_code = 200
    mock_pmc_res.json.return_value = {
        "dams": [],
        "waterlogging": [
            {"severity": "LOW", "desc": "Water pooling near subway", "status": "ACTIVE"} # Missing ward key!
        ]
    }

    mock_get.side_effect = [mock_imd_res, mock_ow_res, mock_pmc_res]

    aggregator = PunePravahAggregator()
    aggregator.cache.cache.clear()
    
    alert = await aggregator.get_unified_alert()
    
    reports = alert["municipal_telemetry"]["waterlogging_reports"]
    assert len(reports) == 1
    # Missing ward should map to None (null in JSON) rather than generating one
    assert reports[0]["ward_resolved"] is None

# ==================================================
# 4. SECURITY: PII LOG SANITIZER
# ==================================================
def test_pii_scrubber():
    """Confirms PII patterns like mobile numbers or raw IP coordinates are scrubbed."""
    raw_log = "Error connecting to server 192.168.12.1 for user deeptesha@gmail.com. Phone: +919876543210."
    scrubbed = scrub_pii(raw_log)
    
    assert "192.168.12.1" not in scrubbed
    assert "[IP_SCRUBBED]" in scrubbed
    
    assert "deeptesha@gmail.com" not in scrubbed
    assert "[EMAIL_SCRUBBED]" in scrubbed
    
    assert "9876543210" not in scrubbed
    assert "[PHONE_SCRUBBED]" in scrubbed
