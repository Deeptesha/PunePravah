# PunePravah 🌧️

**PunePravah** is a production-ready, hyper-local monsoon safety and preparedness dashboard built specifically for the Pune Metropolitan Area. The platform merges real-time meteorology warning states, Google Maps travel geolocation advisors, and municipal emergency control rooms under a clean, accessible interface.

---

## 🚀 Key Features

* **Data Aggregator Pattern**: Concurrently queries IMD Pune nowcasts (via Open-Meteo), OpenWeather geospatial maps, and PMC Open Data portals asynchronously using `asyncio.gather` and `httpx`.
* **Zero-Network Loopback & Offline Degradation**: Bypasses loopback connection bottlenecks by loading PMC dam releases and active waterlogging incidents directly from the filesystem if portals timeout.
* **Travel Geolocation & Routing**: Tracks HTML5 GPS positions to identify the closest municipal hub and displays dynamic detours, delays ($+15$ to $+45$ mins), and warnings across 12 distinct routes.
* **SQL settings Persistence**: Automatically saves user preferred configurations, notification preferences, and custom emergency SOS contacts into a local SQLite database (`config/pune_monsoon.db`).
* **Accessible UI (WCAG 2.1 compliant)**: Formatted with Outfit & Inter typography, semantic landmarks, aria focus tags, and a high-contrast style switcher.

---

## 📂 Repository Structure

```
punepravah/
├── config/
│   ├── schema.sql             # SQLite database schemas
│   └── pune_monsoon.db        # Seeding data stores
├── public/
│   ├── index.html             # Accessible layout
│   ├── index.css              # Custom themes
│   ├── app.js                 # Geolocation, tabs & routing
│   └── dams.json              # Local PMC open data backup
├── src/
│   ├── main.py                # FastAPI routing & SQL endpoints
│   └── weather_service.py     # Aggregator cache & PII log scrubbers
├── tests/
│   ├── test_e2e.py            # User end-to-end flow checks
│   └── test_weather_service.py# Mock backend integration suite
├── Dockerfile                 # Cloud Run container configs
├── env.yaml                   # Cloud Run environment variables
└── requirements.txt           # Python backend dependencies
```

---

## 🛠️ Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/Deeptesha/PunePravah.git
cd PunePravah
```

### 2. Configure Environment Keys
Create a `.env` file in the root directory:
```env
IMD_API_URL=https://api.open-meteo.com/v1/forecast?latitude=18.5204&longitude=73.8567&current=temperature_2m,precipitation,weather_code
OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
OPENWEATHER_API_KEY=YOUR_KEY
PMC_OPEN_DATA_URL=dams.json
```

### 3. Install & Start Server
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 serve.py
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser.

---

## 🧪 Test Suite

Run the full E2E and mock integration test runner to verify telemetry parsing and graceful degradation:
```bash
pip install pytest pytest-asyncio
pytest -v
```

---

## ☁️ Google Cloud Run Deployment

Deploy this project directly to **Google Cloud Run** using the `env.yaml` file to bypass command-line zsh escaping conflicts:

```bash
gcloud run deploy punepravah \
  --source . \
  --region asia-south1 \
  --allow-unauthenticated \
  --env-vars-file env.yaml
```
