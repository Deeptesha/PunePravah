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

def test_user_profile_endpoints():
    """Verifies that user profile configuration settings can be fetched and updated successfully."""
    # 1. Fetch current profile
    res_get = client.get("/api/user")
    assert res_get.status_code == 200
    p = res_get.json()
    assert "name" in p
    assert "phone" in p

    # 2. Update profile details
    payload = {
        "name": "Jane Doe Test",
        "phone": "9876543210",
        "preferred_language": "mr",
        "push_notifications": True,
        "sms_notifications": False
    }
    res_post = client.post("/api/user", json=payload)
    assert res_post.status_code == 200
    assert res_post.json()["status"] == "SUCCESS"

    # 3. Re-fetch and confirm persistence
    res_get2 = client.get("/api/user")
    p2 = res_get2.json()
    assert p2["name"] == "Jane Doe Test"
    assert p2["phone"] == "9876543210"
    assert p2["preferred_language"] == "mr"
    assert p2["push_notifications"] is True
    assert p2["sms_notifications"] is False

def test_chat_assistant_security_and_context():
    """Verifies the AI Safety Chat assistant sanitizes inputs and makes logical decisions based on location context."""
    from main import clean_input
    
    # 1. Test XSS HTML input sanitization
    dirty_string = "<script>alert('xss')</script>Hello safe text"
    clean_string = clean_input(dirty_string)
    assert "script" not in clean_string
    assert "Hello safe text" in clean_string

    # 2. Test chat route matching for dams
    res_dam = client.post("/api/chat", json={"message": "What is the status of Khadakwasla dam?"})
    assert res_dam.status_code == 200
    assert "dam" in res_dam.json()["response"].lower()

    # 3. Test chat route matching with geofence context (Sinhagad Road)
    res_geo = client.post("/api/chat", json={
        "message": "Is my area safe?",
        "latitude": 18.4770,
        "longitude": 73.8224
    })
    assert res_geo.status_code == 200
    resp_text = res_geo.json()["response"]
    assert "Sinhagad Road" in resp_text
    assert "risk" in resp_text.lower() or "capacity" in resp_text.lower() or "resolved" in resp_text.lower()

if __name__ == "__main__":
    pytest.main([__file__, "-v"])
