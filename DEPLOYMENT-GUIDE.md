# 🚀 SCER Platform — Deployment & Hosting Guide

This guide explains how to deploy the **SCER Platform** and its microservices for the **HACQUIRE 2026** competition.

---

## 🌟 Method 1: Instant 1-Click Vercel Deployment (Recommended)

Since the project is hosted on GitHub at `https://github.com/2405227-dev/scer-platform`, you can deploy directly to Vercel in 2 minutes:

### Steps:
1. Go to **[vercel.com/new](https://vercel.com/new)** and sign in with your GitHub account.
2. Select **`2405227-dev/scer-platform`** and click **Import**.
3. Under **Project Settings**:
   * **Framework Preset:** `Next.js`
   * **Root Directory:** Edit $\rightarrow$ Choose `apps/scer` (or `apps/geopulse`)
4. Under **Environment Variables**, add:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="scer-secret-key-2026-super-secure"
   NEXTAUTH_URL="https://your-deployment-name.vercel.app"
   ```
5. Click **Deploy**. Vercel will automatically build and assign a live production URL (`https://scer-platform.vercel.app`).

---

## 🐳 Method 2: 1-Command Docker Deployment (Full Microservices Mesh)

To launch all 5 engines simultaneously with a single command:

```bash
# Clone the repository
git clone https://github.com/2405227-dev/scer-platform.git
cd scer-platform

# Build and start all 5 services
docker compose up -d --build
```

### Live Ports Exposed:
* **Port 3000:** SCER Command Center & Student Portal (`http://localhost:3000`)
* **Port 3001:** Audio Intelligence Engine (`http://localhost:3001`)
* **Port 3002:** GeoPulse 3D Campus & Indoor Incident Navigator (`http://localhost:3002`)
* **Port 3003:** Smart Notification & Telegram Dispatch Engine (`http://localhost:3003`)
* **Port 3004:** Live Tactical Response HUD (`http://localhost:3004`)

---

## 🚂 Method 3: Railway / Render / Fly.io

1. Connect your GitHub repository `https://github.com/2405227-dev/scer-platform`.
2. Select **Docker Deployment** (it will auto-detect `Dockerfile` and `docker-compose.yml`).
3. Set public port to `3000`.

---

## ⚡ Method 4: Local Production Run

```bash
# 1. Install dependencies
npm install

# 2. Start full concurrent development / production mesh
npm run dev
```
