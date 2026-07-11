#!/usr/bin/env python3
"""
PunePravah: Production-level Dev Server.
Boots the FastAPI application using uvicorn on port 8000.
"""

import os
import sys
import uvicorn

import sqlite3

def init_database():
    """Initializes the SQLite tables and seeds starting data."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(base_dir, "config", "pune_monsoon.db")
    schema_path = os.path.join(base_dir, "config", "schema.sql")
    
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    with open(schema_path, "r", encoding="utf-8") as f:
        schema_sql = f.read()
        cursor.executescript(schema_sql)
    conn.commit()
    
    # Seed default user if none exist
    cursor.execute("SELECT COUNT(*) FROM users")
    if cursor.fetchone()[0] == 0:
        cursor.execute(
            "INSERT INTO users (name, phone, preferred_language, push_notifications, sms_notifications) VALUES (?, ?, ?, ?, ?)",
            ("Pune Resident", "+91 98765 43210", "en", 1, 0)
        )
        conn.commit()
        print("Seeded default SQL user record.")
        
    # Seed default emergency contacts if none exist
    cursor.execute("SELECT COUNT(*) FROM emergency_contacts")
    if cursor.fetchone()[0] == 0:
        default_contacts = [
            ("PMC Control Room", "020-25501269", "Pune City", 1),
            ("PMC Control Room (Backup)", "020-25506800", "Pune City", 1),
            ("PCMC Control Room", "020-67333333", "Pimpri-Chinchwad", 1),
            ("District Disaster Cell", "020-26123371", "Pune District", 1),
            ("Pune Police", "112", "Pune Generic", 1),
            ("Fire Brigade", "101", "Pune Generic", 1)
        ]
        cursor.executemany(
            "INSERT INTO emergency_contacts (name, number, region, is_official) VALUES (?, ?, ?, ?)",
            default_contacts
        )
        conn.commit()
        print("Seeded default official SQL emergency contacts.")
        
    conn.close()

if __name__ == "__main__":
    # Add src/ folder to Python path
    src_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "src")
    sys.path.insert(0, src_dir)
    
    # Setup and seed the SQLite database
    init_database()
    
    print("Starting PunePravah FastAPI Dev Server on port 8000...")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
