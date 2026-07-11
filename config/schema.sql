-- SQL Schema initialization for Pune Monsoon Preparedness AI Agent

-- 1. Users Profile & Preference Table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    preferred_language TEXT DEFAULT 'en',
    push_notifications INTEGER DEFAULT 1, -- 1 = True, 0 = False
    sms_notifications INTEGER DEFAULT 0    -- 1 = True, 0 = False
);

-- 2. Emergency SOS Contacts Table
CREATE TABLE IF NOT EXISTS emergency_contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    number TEXT NOT NULL,
    region TEXT NOT NULL,
    is_official INTEGER DEFAULT 1 -- 1 = Official Municipal, 0 = Crowdsourced/User Custom
);
