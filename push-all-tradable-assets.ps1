# HACQUIRE 2026 — Push All 3 Standalone Tradable Assets to GitHub
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  Pushing HACQUIRE 2026 Standalone Tradable Assets" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# 1. GeoPulse Intelligence
Write-Host "`n[1/3] Pushing GeoPulse Intelligence (geopulse-hacquire)..." -ForegroundColor Yellow
Set-Location "$baseDir\tradable-assets\geopulse-hacquire"
git remote remove origin 2>$null
git remote add origin https://github.com/2405227-dev/geopulse-hacquire.git
git branch -M main
git push -u origin main

# 2. Audio Intelligence Engine
Write-Host "`n[2/3] Pushing Audio Intelligence Engine (audio-engine-hacquire)..." -ForegroundColor Yellow
Set-Location "$baseDir\tradable-assets\audio-engine-hacquire"
git remote remove origin 2>$null
git remote add origin https://github.com/2405227-dev/audio-engine-hacquire.git
git branch -M main
git push -u origin main

# 3. Smart Notification Engine
Write-Host "`n[3/3] Pushing Smart Notification Engine (notification-engine-hacquire)..." -ForegroundColor Yellow
Set-Location "$baseDir\tradable-assets\notification-engine-hacquire"
git remote remove origin 2>$null
git remote add origin https://github.com/2405227-dev/notification-engine-hacquire.git
git branch -M main
git push -u origin main

Set-Location "$baseDir"
Write-Host "`n==================================================" -ForegroundColor Green
Write-Host "  All 3 Assets Pushed Successfully to GitHub!" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green
