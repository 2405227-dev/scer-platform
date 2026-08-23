# 🚨 SCER Platform — Smart Campus Emergency Response System

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.19.3-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)
[![Telegram Bot](https://img.shields.io/badge/Telegram-Bot%20API-2CA5E0?style=for-the-badge&logo=telegram)](https://telegram.org/)

**SCER (Smart Campus Emergency Response)** is a mission-critical, real-time emergency dispatch and incident management platform designed for universities, corporate campuses, and smart facilities. It unifies **3D Indoor Floor Navigation**, **Voice Distress Acoustic AI**, **Live GPS Geofencing (KIIT Campus 6)**, **Instant SOS Citizen Dispatch**, and **Bidirectional Telegram Responder Integration**.

---

## 🔐 Default Access Credentials

The system automatically initializes default accounts on launch. You can log in at `/login` with the following credentials:

| Role | Name | Email (Login ID) | Password | Access Privileges |
| :--- | :--- | :--- | :--- | :--- |
| **Root Administrator** 👑 | Root Administrator | `admin@scer.campus` | `Admin@SCER2026!` | Full System Control, Command Center, Account Management (Create/Delete/Deactivate Controllers), Audit Logs, Analytics, Live Response |
| **Campus Controller** 🛡️ | Campus Controller | `controller@scer.campus` | `Controller@SCER2026!` | Command Center Incident Dispatch, Live Map Telemetry, Responder Assignment, Broadcast Feeds |
| **Student / Citizen** 🎓 | Alex Johnson | `student@scer.campus` | `Student@SCER2026!` | Citizen User Portal (`/user`), 1-Tap SOS Dispatch, Real-Time Emergency Audio Uplink, Incident Tracking |

> **Note**: Custom admin credentials can also be configured via environment variables: `ROOT_CONTROLLER_EMAIL`, `ROOT_CONTROLLER_PASSWORD`, and `ROOT_CONTROLLER_NAME`.

---

## 🤖 Telegram Responder Bot Integration

Emergency dispatches are broadcast instantly to field response teams via Telegram:

* **Bot Name**: `SCER Emergency Response Bot`
* **Bot Username**: [`@SohamSCER_EmergencyBot`](https://t.me/SohamSCER_EmergencyBot)
* **Bot Token**: `8307223388:AAGxUu2j0K8u6p69_D-y5i4t4XpD5M6Gv4Y`
* **Webhook Route**: `/api/webhooks/telegram`
* **Features**:
  * `/start [token]` — Direct responder authentication and account linking.
  * Instant interactive inline buttons to **Accept Dispatch (ACK)** or mark **En Route / Resolved**.
  * Real-time GPS coordinate dispatch with Google Maps directions.

---

## 🌟 Key Platform Capabilities

### 1. 🏢 ATLAS 3D Campus Building & Indoor Room Navigator (`/geopulse`)
* **3D Multi-Floor Elevation**: Interactive 3D building model (Wings A/B/C, Levels 1, 2, 3) built with Three.js canvas.
* **Indoor Distress Pinpointing**: Displays exact distressed room locations (e.g., *Server Room 302*, *Chemistry Lab 204*, *Dean Office 101*) when outdoor GPS alone is insufficient.
* **Turn-by-Turn Responder Route**: Renders direct indoor emergency corridors and staircase paths for fire/police/medical responders.

### 2. 🗺️ Command Center & Live Geographical Map (`/command`)
* **KIIT Campus 6 Survey Coordinates**: Centered at `20.3530° N, 85.8202° E` with geofenced sectors (Academic Quad, Sports Arena, Substation Vault, Hostels).
* **Google Maps-Style "🎯 Locate Me"**: Live high-accuracy HTML5 geolocation tracking with a pulsing blue radar beacon, accuracy ring, and live latitude/longitude telemetry.
* **Layer Switcher**: Toggle seamlessly between Street View, Dark Tactical Map, Satellite Hybrid, and Topographic views.

### 3. 🎙️ Acoustic AI Voice Distress Detection (`/audio-engine`)
* **Real-time WebAudio Analyzer**: Decibels, frequency harmonics, and scream/distress acoustic pattern classifier.
* **Auto-Trigger**: Instant SOS escalation when confidence threshold $\ge 85\%$.

### 4. 🚨 Instant Dispatch & Live Response Portal (`/user` & `/live-response`)
* **One-Tap SOS Matrix**: Immediate dispatch for Medical, Fire, Security, Lab Hazard, and Active Threats.
* **Sub-second Server-Sent Events (SSE)**: Synchronous event propagation across all connected controller dashboards.

---

## 🏗️ Monorepo Architecture

```
scer-platform/
├── apps/
│   ├── scer/                 # Primary Command Center & User Portal (Port 3000)
│   ├── geopulse/             # ATLAS 3D Indoor & Vector Map Engine (Port 3002)
│   ├── audio-engine/         # Acoustic Distress AI Analyzer (Port 3001)
│   ├── notification-engine/  # Multi-Channel Alert & SMS Simulator (Port 3003)
│   └── live-response/        # Responder Field Telemetry HUD (Port 3004)
├── packages/
│   ├── db-scer/              # Core Prisma DB & Event Bus (@scer/db-scer)
│   ├── db-geopulse/          # Spatial & Unit Fleet DB (@scer/db-geopulse)
│   ├── db-audio/             # Audio Telemetry Schema (@scer/db-audio)
│   ├── db-notification/      # Notification Audit Schema (@scer/db-notification)
│   └── ui/                   # Shared UI Components & Tailwind Tokens (@scer/ui)
├── vercel.json               # Monorepo Deployment Config for Vercel
├── Dockerfile                # Production Multi-Stage Container Build
└── docker-compose.yml        # Multi-Service Orchestration
```

---

## ⚡ Quickstart & Local Setup

### 1. Prerequisites
* **Node.js**: `v20.x` or higher
* **npm**: `v10.x` or higher
* **MongoDB**: Local or Atlas connection URI

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/2405227-dev/scer-platform.git
cd scer-platform

# Install dependencies across all workspaces
npm install
```

### 3. Database Generation
```bash
# Generate Prisma clients for all database packages
npm run postinstall
```

### 4. Running the Platform
```bash
# Start all 5 micro-services concurrently
npm run dev
```

* **Command Center**: [http://localhost:3000](http://localhost:3000)
* **GeoPulse 3D Map**: [http://localhost:3002](http://localhost:3002)
* **Audio Engine**: [http://localhost:3001](http://localhost:3001)
* **Notification Engine**: [http://localhost:3003](http://localhost:3003)
* **Live Response HUD**: [http://localhost:3004](http://localhost:3004)

---

## ☁️ Deployment

### Deploying to Vercel
1. Import `scer-platform` into Vercel.
2. In Project Settings, ensure the Root Directory is set to `.` (Repository root).
3. Set the Environment Variables:
   * `DATABASE_URL`: `mongodb+srv://...`
   * `TELEGRAM_BOT_TOKEN`: `8307223388:AAGxUu2j0K8u6p69_D-y5i4t4XpD5M6Gv4Y`
   * `TELEGRAM_BOT_USERNAME`: `SohamSCER_EmergencyBot`
   * `ROOT_CONTROLLER_EMAIL`: `admin@scer.campus`
   * `ROOT_CONTROLLER_PASSWORD`: `Admin@SCER2026!`
4. Click **Deploy**. `vercel.json` will automatically build the `scer` workspace and route requests.

---

## 🛡️ License & Contributors
Built with ❤️ for Campus Safety and Emergency Operations.
Developed by **2405227-dev** (KIIT University).
