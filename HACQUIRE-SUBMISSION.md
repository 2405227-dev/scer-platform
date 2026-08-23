# HACQUIRE 2026 — Official Submission Document

Use the data below to fill the official HACQUIRE Google Form submission.

---

## 🏛️ Main Application Submission

* **Application Name:** SCER — Smart Campus Emergency Response
* **Tagline:** Real-Time Zero-Latency Emergency Intelligence, Acoustic Distress Sensing & Spatial Incident Command Platform
* **Main GitHub Repository:** [https://github.com/2405227-dev/scer-platform](https://github.com/2405227-dev/scer-platform)
* **Primary Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS, Leaflet Geographic Vector Maps, Web Audio API, Web Speech API, Server-Sent Events (SSE), Prisma ORM, SQLite.

---

## 💎 Tradable Software Assets Table

| Asset # | Asset Name | Deliverable Description | Proposed Asking Price | Standalone GitHub Repository |
|:---:|---|---|:---:|---|
| **1** | **GeoPulse Intelligence** | Standalone high-frequency GPS vector telemetry engine, multi-tier geofence containment solver, anomaly detector, and satellite Leaflet map UI. | **₹5.00 Cr** | [https://github.com/2405227-dev/geopulse-hacquire](https://github.com/2405227-dev/geopulse-hacquire) |
| **2** | **Audio Intelligence Engine** | Standalone acoustic sentry module with continuous Web Audio FFT visualizer, speech keyword extraction (`HELP`, `FIRE`, `POLICE`, `GUNSHOT`), and automated multi-agency dispatch. | **₹4.00 Cr** | [https://github.com/2405227-dev/audio-engine-hacquire](https://github.com/2405227-dev/audio-engine-hacquire) |
| **3** | **Smart Notification Engine** | Standalone multi-channel emergency alert gateway with priority severity matrix, verified recipient resolution, and immutable delivery ledger. | **₹3.00 Cr** | [https://github.com/2405227-dev/notification-engine-hacquire](https://github.com/2405227-dev/notification-engine-hacquire) |

---

## 📦 Asset Deliverable Details

### Asset 1: GeoPulse Intelligence
* **Marketplace Pitch (1-Line):** Autonomous vector GPS tracking & multi-tier geofence anomaly detector streaming sub-second spatial telemetry over SSE.
* **30-Second Pitch:** GeoPulse transforms any campus or security map into an active spatial sentry. It tracks mobile units with heading angles and velocity, evaluates polygon containment against Safe, Event, Restricted, and Biohazard zones, and automatically triggers critical alarms upon unauthorized entry or speed violations.
* **What Buyer Receives:**
  - Full source code + Next.js App Router standalone UI
  - Real-time Server-Sent Events (SSE) telemetry stream (`/api/geopulse/stream`)
  - Snapshot REST endpoint (`/api/geopulse/devices`)
  - Multi-criteria spatial resource recommendation solver (`/api/geopulse/recommend`)
  - Automated 5-stage live demo sequence (`/api/geopulse/demo`)
  - Leaflet satellite, dark tactical, and street map component
  - Independent SQLite Prisma database & seed scripts
* **Integration Complexity:** Low (Drop-in SSE stream or REST call)
* **Demo Video Target:** `demo_geopulse_hacquire.mp4`

### Asset 2: Audio Intelligence Engine
* **Marketplace Pitch (1-Line):** Continuous microphone voice distress processor with real-time FFT spectrum analysis and autonomous agency dispatch.
* **30-Second Pitch:** When emergencies occur, victims cannot always operate a keyboard or phone. Audio Intelligence Engine runs continuous acoustic listening on edge sensors, visualizes sound frequencies across a 24-band spectrum, extracts critical keywords (`HELP`, `FIRE`, `POLICE`, `GUNSHOT`), and dispatches targeted alerts directly to Fire, Police, or Hospital units.
* **What Buyer Receives:**
  - Full source code + Next.js App Router standalone UI
  - Continuous Web Audio API AnalyserNode + Web Speech API listener component
  - REST voice ingestion endpoint (`/api/voice-detect`)
  - Acoustic distress simulation sandbox (`/api/simulate`)
  - Automated webhook dispatcher forwarding to notification gateways and dashboards
  - Independent SQLite Prisma database & schema
* **Integration Complexity:** Low (Standard JSON POST / Webhook)
* **Demo Video Target:** `demo_audio_engine_hacquire.mp4`

### Asset 3: Smart Notification Engine
* **Marketplace Pitch (1-Line):** High-throughput emergency alert delivery gateway with multi-channel routing (SMS, Push, Radio) and verified audit trails.
* **30-Second Pitch:** Eliminate communication bottlenecks during disasters. Smart Notification Engine centralizes emergency alerting into a single reliable REST API, enforcing severity-based delivery rules, routing messages to SMS, Push, and tactical radio channels with sub-second delivery confirmation.
* **What Buyer Receives:**
  - Full source code + Next.js App Router standalone UI
  - Ingestion REST endpoint (`/api/notify`)
  - Multi-channel broadcast simulator sandbox
  - Live immutable delivery and dispatch audit ledger
  - Priority severity policy matrix (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`)
  - Independent SQLite Prisma database & schema
* **Integration Complexity:** Minimal (Single POST request)
* **Demo Video Target:** `demo_notification_engine_hacquire.mp4`
