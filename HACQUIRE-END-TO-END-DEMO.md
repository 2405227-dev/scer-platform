# SCER Emergency Intelligence Platform — End-to-End Demonstration Guide

This document details the complete end-to-end integration and verification flow of the **SCER Platform** across all interconnected services.

---

## 🏗️ Architecture & Inter-Service Topology

```
                      ┌──────────────────────────────┐
                      │    SCER Command Center       │
                      │    (Port 3000 — Master UI)   │
                      └──────────────┬───────────────┘
                                     │
           ┌─────────────────────────┴────────────────────────┐
           │                                                  │
           ▼                                                  ▼
┌──────────────────────────────┐            ┌──────────────────────────────┐
│  Audio Intelligence Engine   │            │    GeoPulse Intelligence     │
│   (Port 3001 — Acoustic AI)  │            │  (Port 3002 — Spatial Radar) │
└──────────────┬───────────────┘            └──────────────┬───────────────┘
               │                                           │
               │   Distress Webhooks & Geofence Alerts     │
               └─────────────────────┬─────────────────────┘
                                     │
                                     ▼
                      ┌──────────────────────────────┐
                      │   Smart Notification Engine  │
                      │   (Port 3003 — Multi-Channel)│
                      └──────────────────────────────┘
```

---

## 🚀 Startup & Services Port Map

To start the entire monorepo with all 4 services running concurrently:

```bash
# In the root repository directory:
npm run dev
```

### Verified Port Allocations:
| Service | Port | Endpoint URL | Role |
|---|---|---|---|
| **SCER Command Center** | `3000` | `http://localhost:3000` | Central tactical radar map, incident CRUD, SSE event stream, responder dispatch |
| **Audio Intelligence Engine** | `3001` | `http://localhost:3001` | Continuous microphone listener, FFT spectrum visualizer, speech keyword detection |
| **GeoPulse Intelligence** | `3002` | `http://localhost:3002` | Real-time GPS fleet tracking, multi-tier geofencing, velocity anomaly detection |
| **Smart Notification Engine** | `3003` | `http://localhost:3003` | Unified multi-channel emergency alert gateway (SMS, Push, Tactical Radio) |

---

## 🔄 The End-to-End Live Demonstration Sequence

### Step 1: Voice Distress Detection (Acoustic Trigger)
1. Open **Audio Intelligence Engine** (`http://localhost:3001`).
2. Click **"Start Real-Time Mic"** and speak: *"Help! Fire in Academic Quad!"*.
3. **Internal Processing:**
   - Web Audio API analyzes spectrum intensity.
   - Web Speech API detects keyword `"FIRE"`.
   - Routes incident to **"Fire Station (Dispatch Unit 1)"**.
4. **Cross-Service Actions:**
   - Dispatches emergency notification to Notification Engine (`:3003`).
   - Forwards webhook to SCER Command Center (`:3000`).

### Step 2: Real-Time Spatial Perimeter Breach (GeoPulse Trigger)
1. Open **GeoPulse Intelligence** (`http://localhost:3002`).
2. Click **"START LIVE DEMO"**.
3. **Internal Processing:**
   - Tactical Guard Alpha (`DEV-101`) moves from Safe Quad into the **High-Voltage Power Utility Vault**.
   - Point-in-polygon engine detects **`GEOFENCE_BREACH`** and **`SPEED_ANOMALY`** (58 km/h).
4. **Cross-Service Actions:**
   - Automatically forwards critical breach alert to Notification Engine (`:3003`).
   - Broadcasts event to SCER Command Center (`:3000`).

### Step 3: Central Command Radar & Dispatch (SCER Dashboard)
1. Open **SCER Command Center** (`http://localhost:3000`).
2. Observe the **Satellite HD / Dark Tactical Leaflet Map**:
   - The new critical incident beacon appears automatically on the real map.
   - Click the pulsing beacon to view the full incident card with assigned responders and status options.
3. Check `/audit` (`http://localhost:3000/audit`) to view the immutable ledger recording both the Audio Engine and GeoPulse events.

### Step 4: Notification Verification (Notification Engine)
1. Open **Smart Notification Engine** (`http://localhost:3003`).
2. Inspect the **Live Dispatch & Delivery Ledger**:
   - Both the Voice Distress alert and the Geofence Breach alert are listed with `DELIVERED` status and timestamps.

---

## 🛠️ Troubleshooting & Health Checks

1. **Check all 4 service ports:**
   ```powershell
   Get-NetTCPConnection -LocalPort 3000,3001,3002,3003 -State Listen
   ```
2. **Verify endpoint responses:**
   ```powershell
   (Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing).StatusCode
   (Invoke-WebRequest -Uri "http://localhost:3001" -UseBasicParsing).StatusCode
   (Invoke-WebRequest -Uri "http://localhost:3002" -UseBasicParsing).StatusCode
   (Invoke-WebRequest -Uri "http://localhost:3003" -UseBasicParsing).StatusCode
   ```
   All should return `200`.
