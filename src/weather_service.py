#!/usr/bin/env python3
"""
PunePravah: Weather Service and Data Aggregator.
Implements the WeatherService interface and PunePravahAggregator pattern.
Concurrently fetches from IMD, OpenWeather, and PMC APIs with caching and robust error safety.
"""

import os
import re
import time
import logging
import asyncio
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional, List
import httpx

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - [%(levelname)s] - %(message)s")
logger = logging.getLogger("PunePravahAggregator")

def load_env_file():
    """Manually reads env keys from the root .env configuration."""
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    env_path = os.path.join(base_dir, ".env")
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, val = line.split("=", 1)
                    os.environ[key.strip()] = val.strip()

# Run environment loading
load_env_file()

# ==================================================
# SECURITY: PII SCRUBBING UTILITY
# ==================================================
def scrub_pii(text: str) -> str:
    """Filters email patterns, phone numbers, and raw IP addresses from log feeds."""
    if not text:
        return ""
    text = re.sub(r"\b(?:\+?\d{1,3}[- ]?)?\d{10}\b", "[PHONE_SCRUBBED]", text)
    text = re.sub(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b", "[EMAIL_SCRUBBED]", text)
    text = re.sub(r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b", "[IP_SCRUBBED]", text)
    return text

# ==================================================
# CACHING: LIGHTWEIGHT TTL CACHE
# ==================================================
class AsyncTTLCache:
    """Async-safe lightweight in-memory cache to prevent rate-limit exhaustion."""
    def __init__(self, ttl_seconds: int = 300):
        self.ttl = ttl_seconds
        self.cache: Dict[str, Tuple[Any, float]] = {}

    def get(self, key: str) -> Optional[Any]:
        if key in self.cache:
            val, expiry = self.cache[key]
            if time.time() < expiry:
                return val
            del self.cache[key]
        return None

    def set(self, key: str, val: Any) -> None:
        self.cache[key] = (val, time.time() + self.ttl)

# ==================================================
# WEATHER SERVICE INTERFACE
# ==================================================
class WeatherService(ABC):
    """Abstract interface defining required behaviors for weather data retrieval."""
    
    @abstractmethod
    async def get_unified_alert(self) -> Dict[str, Any]:
        """Gathers, aggregates, and validates telemetry from all authorized streams."""
        pass

# ==================================================
# CONCRETE AGGREGATOR IMPLEMENTATION
# ==================================================
class PunePravahAggregator(WeatherService):
    """
    Data Aggregator patterns mapping IMD, OpenWeather, and PMC portals.
    Enforces caching, concurrent fetching, and graceful degradation.
    """
    def __init__(self):
        # Load API endpoints from environment variables (Zero hardcoding)
        self.imd_url = os.getenv("IMD_API_URL")
        self.ow_url = os.getenv("OPENWEATHER_API_URL")
        self.ow_key = os.getenv("OPENWEATHER_API_KEY")
        self.pmc_url = os.getenv("PMC_OPEN_DATA_URL")
        
        self.cache = AsyncTTLCache(ttl_seconds=300) # 5-minute TTL Cache
        self.timeout = httpx.Timeout(5.0)

    async def _fetch_imd_data(self, client: httpx.AsyncClient) -> Dict[str, Any]:
        """Queries weather alerts asynchronously from IMD."""
        if not self.imd_url:
            raise ValueError("IMD_API_URL env variable is not set")
            
        try:
            logger.info("Fetching live telemetry from IMD API...")
            res = await client.get(self.imd_url)
            if res.status_code != 200:
                raise httpx.HTTPStatusError(f"HTTP {res.status_code}", request=res.request, response=res)
            return res.json()
        except Exception as e:
            clean_err = scrub_pii(str(e))
            logger.error(f"IMD connection failure: {clean_err}")
            raise

    async def _fetch_openweather_data(self, client: httpx.AsyncClient) -> Dict[str, Any]:
        """Queries nowcast forecasts asynchronously from OpenWeather."""
        if not self.ow_url:
            raise ValueError("OPENWEATHER_API_URL env variable is not set")
            
        try:
            logger.info("Fetching nowcasts from OpenWeather API...")
            res = await client.get(self.ow_url)
            if res.status_code != 200:
                raise httpx.HTTPStatusError(f"HTTP {res.status_code}", request=res.request, response=res)
            return res.json()
        except Exception as e:
            clean_err = scrub_pii(str(e))
            logger.error(f"OpenWeather connection failure: {clean_err}")
            raise

    async def _fetch_pmc_data(self, client: httpx.AsyncClient) -> Dict[str, Any]:
        """Queries waterlogging and dam level metrics asynchronously from PMC Open Data."""
        if not self.pmc_url:
            raise ValueError("PMC_OPEN_DATA_URL env variable is not set")
            
        try:
            # Bypass local loopback requests to avoid concurrent ASGI deadlocks
            if "localhost" in self.pmc_url or "127.0.0.1" in self.pmc_url or "dams.json" in self.pmc_url:
                logger.info("Reading PMC telemetry directly from local filesystem dams.json...")
                base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
                local_path = os.path.join(base_dir, "public", "dams.json")
                if os.path.exists(local_path):
                    import json
                    with open(local_path, "r", encoding="utf-8") as f:
                        return json.load(f)
            
            logger.info("Fetching municipal telemetry from PMC Open Data portal...")
            res = await client.get(self.pmc_url)
            if res.status_code != 200:
                raise httpx.HTTPStatusError(f"HTTP {res.status_code}", request=res.request, response=res)
            return res.json()
        except Exception as e:
            clean_err = scrub_pii(str(e))
            logger.error(f"PMC Open Data connection failure: {clean_err}")
            raise

    async def get_unified_alert(self) -> Dict[str, Any]:
        """
        Concurrently queries weather and municipal feeds.
        Aggregates output data and handles partial source outages gracefully.
        """
        # 1. Cache lookup
        cached_result = self.cache.get("unified_alert")
        if cached_result:
            logger.info("Serving aggregated weather data from memory cache...")
            return cached_result

        # 2. Concurrently fetch all three sources to minimize latency
        status_dict = {"imd_api": "OFFLINE", "openweather_api": "OFFLINE", "pmc_open_data": "OFFLINE"}
        weather_block = {}
        map_block = {"precipitation_tile_url": None}
        municipal_block = {"dam_storage": None, "waterlogging_reports": None}
        
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            # Setup concurrent async calls
            tasks = [
                self._fetch_imd_data(client),
                self._fetch_openweather_data(client),
                self._fetch_pmc_data(client)
            ]
            
            # Run concurrently; return exceptions to handle partial outages gracefully
            results = await asyncio.gather(*tasks, return_exceptions=True)
            
            # Process IMD Alert stream
            imd_res = results[0]
            if isinstance(imd_res, Exception):
                logger.warning("IMD service offline. Alert stream degraded.")
                weather_block["alert_level"] = "UNKNOWN"
                weather_block["nowcast_summary"] = "IMD weather alert feed currently offline."
            else:
                status_dict["imd_api"] = "ONLINE"
                # Parse Open-Meteo current or standard IMD alert values
                # Support both Open-Meteo and mock alert payloads
                current = imd_res.get("current", {})
                precip = current.get("precipitation", 0.0)
                temp = current.get("temperature_2m", 28.0)
                
                alert_level = "GREEN"
                if precip >= 50.0:
                    alert_level = "RED"
                elif precip >= 15.0:
                    alert_level = "ORANGE"
                elif precip >= 2.0:
                    alert_level = "YELLOW"
                
                weather_block["temperature_c"] = temp
                weather_block["precipitation_rate_mm_hr"] = precip
                weather_block["alert_level"] = alert_level
                weather_block["nowcast_summary"] = (
                    f"Forecast summary: Current telemetry calculates precipitation rate at {precip} mm/hr. "
                    f"Status designated as {alert_level} Alert."
                )

            # Process OpenWeather stream (Map Overlays)
            ow_res = results[1]
            if isinstance(ow_res, Exception):
                logger.warning("OpenWeather service offline. Visual maps degraded.")
            else:
                status_dict["openweather_api"] = "ONLINE"
                # Parse OpenWeather tile templates
                map_block["precipitation_tile_url"] = (
                    f"https://tile.openweathermap.org/map/precipitation_new/{{z}}/{{x}}/{{y}}.png?appid={self.ow_key}"
                )
                # If temperature was offline in IMD, fall back to OpenWeather parsed values
                if "temperature_c" not in weather_block and "main" in ow_res:
                    temp_k = ow_res["main"].get("temp", 300.0)
                    weather_block["temperature_c"] = round(temp_k - 273.15, 1)

            # Process PMC Open Data stream (Dam levels & waterlogging)
            pmc_res = results[2]
            if isinstance(pmc_res, Exception):
                logger.warning("PMC Portal offline. Municipal telemetry degraded.")
                # Graceful degradation showing 'Data Unavailable' instead of crashing
                municipal_block["dam_storage"] = "Data Unavailable"
                municipal_block["waterlogging_reports"] = "Data Unavailable"
            else:
                status_dict["pmc_open_data"] = "ONLINE"
                
                # Check for missing Pune ward detail keys (No Hallucinations constraint)
                # If ward key is absent in the data payload, return null and log diagnostic error
                dams = pmc_res.get("dams", [])
                reports = pmc_res.get("waterlogging", [])
                
                parsed_dams = []
                for d in dams:
                    parsed_dams.append({
                        "dam_name": d.get("name"),
                        "storage_percentage": d.get("level_percent"),
                        "discharge_cusecs": d.get("discharge"),
                        "status": "HIGH_DISCHARGE" if d.get("discharge", 0.0) > 10000 else "NORMAL"
                    })
                
                parsed_reports = []
                for r in reports:
                    ward = r.get("ward")
                    if not ward:
                        # Log diagnostic error for missing ward detail
                        logger.error("Diagnostic Error: PMC waterlogging report missing critical 'ward' identifier.")
                        ward = None # Return null
                        
                    parsed_reports.append({
                        "ward_resolved": ward,
                        "severity": r.get("severity", "MEDIUM"),
                        "description": r.get("desc", ""),
                        "status": r.get("status", "ACTIVE")
                    })
                
                municipal_block["dam_storage"] = parsed_dams
                municipal_block["waterlogging_reports"] = parsed_reports

        # 3. Assemble unified output
        unified_alert = {
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "source_status": status_dict,
            "weather": weather_block,
            "map_visualizations": map_block,
            "municipal_telemetry": municipal_block
        }
        
        # Save cache entry
        self.cache.set("unified_alert", unified_alert)
        return unified_alert
