#!/usr/bin/env python3
"""
E2E Integration Verification Test for PunePravah.
Validates the complete user warning flow:
1. Receipt of live weather telemetry.
2. Coordinate geofence routing.
3. Attributed guidance retrieval.
"""

import sys
import os
import pytest
from fastapi.testclient import TestClient

# Add src to python path
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src"))

from main import app

client = TestClient(app)

def test_full_user_flow_e2e():
    """Validates the full user flow (Alert Receipt -> Navigation -> Guidance Retrieval)."""
    print("\n--- Starting PunePravah E2E Integration Flow Test ---")
    
    # 1. Receive Alert/Weather metrics from Live API
    print("Step 1: Pinging live weather telemetry feed...")
    res_weather = client.get("/api/weather")
    assert res_weather.status_code == 200
    
    weather_data = res_weather.json()
    assert "alert_level" in weather_data
    assert "precipitation_mm" in weather_data
    assert "wind_speed_kmh" in weather_data
    assert "temperature_c" in weather_data
    
    print(f"--> Live weather check successful. Status: {weather_data['raw_status']}")
    print(f"--> Live precipitation: {weather_data['precipitation_mm']} mm/hr (Alert Level: {weather_data['alert_level']})")

    # 2. Navigation / Coordinate geofence lookup check
    # Check geofenced warning status for Sinhagad Road coordinates
    print("\nStep 2: Checking geofenced path advisory for Sinhagad Road coordinates...")
    route_payload = {
        "latitude": 18.4770,
        "longitude": 73.8224
    }
    
    res_route = client.post("/api/check-route", json=route_payload)
    assert res_route.status_code == 200
    
    route_data = res_route.json()
    assert "alert_level" in route_data
    assert "ward_resolved" in route_data
    assert "localized_advice" in route_data
    assert "source_attribution" in route_data
    
    assert "Sinhagad Road" in route_data["ward_resolved"]
    print(f"--> Ward geofence resolved successfully: {route_data['ward_resolved']}")

    # 3. Guidance Retrieval Validation (Verification Loop & official contacts)
    print("\nStep 3: Checking localization safety guidance and human-in-the-loop contacts...")
    
    # Verify forecast statement formatting
    assert "Summary of official meteorological forecast" in route_data["localized_advice"]
    
    # Verify attribution references exist
    assert "meteorological_source" in route_data["source_attribution"]
    assert "pune_disaster_management_cell" in route_data["source_attribution"]
    
    print("--> Verification loop summaries and emergency cells are correctly populated in response.")
    print("E2E Integration Verification Flow Completed successfully!")

if __name__ == "__main__":
    pytest.main([__file__, "-v"])
