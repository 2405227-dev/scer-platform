"use client";

import { useState, useEffect } from "react";
import {
  Navigation,
  MapPin,
  ShieldAlert,
  Activity,
  Zap,
  Play,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Clock,
  RefreshCw,
  Gauge,
  Layers,
  ChevronRight,
} from "lucide-react";
import LiveGeoMap from "./LiveGeoMapDynamic";
import { GeoDevice, GeoZone, GeoAlert } from "@/lib/geoEngine";

interface GeoPulseClientProps {
  initialSnapshot: {
    stats: {
      total: number;
      active: number;
      moving: number;
      stationary: number;
      offline: number;
      alerts: number;
    };
    zones: GeoZone[];
    devices: GeoDevice[];
    recentAlerts: GeoAlert[];
  };
}

export function GeoPulseClient({ initialSnapshot }: GeoPulseClientProps) {
  const [devices, setDevices] = useState<GeoDevice[]>(initialSnapshot.devices || []);
  const [zones, setZones] = useState<GeoZone[]>(initialSnapshot.zones || []);
  const [alerts, setAlerts] = useState<GeoAlert[]>(initialSnapshot.recentAlerts || []);
  const [stats, setStats] = useState(initialSnapshot.stats);
  const [selectedDevice, setSelectedDevice] = useState<GeoDevice | null>(null);

  const [isConnected, setIsConnected] = useState(false);
  const [demoRunning, setDemoRunning] = useState(false);
  const [demoStage, setDemoStage] = useState(0);

  // SSE Stream Listener
  useEffect(() => {
    let eventSource: EventSource | null = null;

    const connectSSE = () => {
      eventSource = new EventSource("/api/geopulse/stream");

      eventSource.onopen = () => {
        setIsConnected(true);
      };

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.devices) {
            setDevices(data.devices);
            setStats(data.stats);
            if (data.zones) setZones(data.zones);
            if (data.recentAlerts) setAlerts(data.recentAlerts);
            if (data.demoActive) {
              setDemoRunning(true);
              setDemoStage(data.demoStep);
            } else if (demoRunning) {
              setDemoRunning(false);
            }
          }
        } catch (e) {
          console.error("SSE parse error", e);
        }
      };

      eventSource.onerror = () => {
        setIsConnected(false);
        if (eventSource) eventSource.close();
        setTimeout(connectSSE, 2000);
      };
    };

    connectSSE();

    return () => {
      if (eventSource) eventSource.close();
    };
  }, [demoRunning]);

  const handleStartDemo = async () => {
    setDemoRunning(true);
    setDemoStage(1);
    try {
      await fetch("/api/geopulse/demo", { method: "POST" });
    } catch (e) {
      console.error(e);
      setDemoRunning(false);
    }
  };

  return (
      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <section className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`flex h-2.5 w-2.5 rounded-full ${
                  isConnected
                    ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)] animate-pulse"
                    : "bg-amber-400"
                }`}
              />

              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-400">
                {isConnected ? "● LIVE / Stream Connected" : "Connecting..."}
              </span>

              <span className="text-slate-700">/</span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Spatial Location Intelligence
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              GeoPulse Real-Time Tracking Engine
            </h1>

            <p className="mt-1 max-w-xl text-xs sm:text-sm text-slate-400">
              Live vector GPS tracking, multi-tier geofence breach detection, and automated dispatch routing.
            </p>
          </div>

          {/* START LIVE DEMO BUTTON */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleStartDemo}
              disabled={demoRunning}
              className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-2xl transition ${
                demoRunning
                  ? "bg-gradient-to-r from-red-500 to-rose-600 shadow-red-500/30 animate-pulse cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 shadow-emerald-500/25 hover:scale-[1.02] active:scale-95"
              }`}
            >
              <Play className={`h-4 w-4 ${demoRunning ? "animate-spin" : ""}`} />
              <span>{demoRunning ? `Demo Active (Stage ${demoStage}/5)...` : "START LIVE DEMO"}</span>
            </button>
          </div>
        </section>

        {/* DEMO STAGE NOTIFICATION BANNER */}
        {demoRunning && (
          <div className="mb-6 rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-500/20 via-rose-500/10 to-transparent p-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-red-500/30 text-red-300 font-black text-sm">
                  {demoStage}
                </span>
                <div>
                  <div className="text-xs font-bold text-red-300 uppercase tracking-wider">
                    Judge Live Demonstration In Progress:
                  </div>
                  <div className="text-sm font-black text-white mt-0.5">
                    {demoStage === 1 && "Stage 1: Tactical Guard Alpha departs Safe Quad at 22 km/h"}
                    {demoStage === 2 && "Stage 2: Device approaches High-Voltage Restricted Perimeter"}
                    {demoStage === 3 && "Stage 3: 🚨 CRITICAL GEOFENCE BREACH in Power Utility Vault"}
                    {demoStage === 4 && "Stage 4: ⚡ SPEED ANOMALY detected (58 km/h inside Restricted Vault)"}
                    {demoStage >= 5 && "Stage 5: ✓ Alerts Dispatched to Notification Engine (:3003) & SCER (:3000)"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-red-300 font-mono font-bold bg-red-500/20 px-3 py-1.5 rounded-xl border border-red-500/30">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-ping" />
                Live Automated Sequence
              </div>
            </div>
          </div>
        )}

        {/* METRICS HUD CARDS */}
        <section className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-emerald-400">
              <span>Active GPS</span>
              <MapPin className="h-4 w-4" />
            </div>
            <div className="mt-2 text-2xl font-black text-white">{stats.active}</div>
            <div className="mt-1 text-[10px] text-slate-400">Online Transponders</div>
          </div>

          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/[0.04] p-4 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-sky-400">
              <span>In Motion</span>
              <Navigation className="h-4 w-4" />
            </div>
            <div className="mt-2 text-2xl font-black text-white">{stats.moving}</div>
            <div className="mt-1 text-[10px] text-slate-400">Speed &gt; 3 km/h</div>
          </div>

          <div className="rounded-2xl border border-slate-500/20 bg-slate-500/[0.04] p-4 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
              <span>Stationary</span>
              <Activity className="h-4 w-4" />
            </div>
            <div className="mt-2 text-2xl font-black text-white">{stats.stationary}</div>
            <div className="mt-1 text-[10px] text-slate-400">Holding Position</div>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-4 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-amber-400">
              <span>Geofence Zones</span>
              <Layers className="h-4 w-4" />
            </div>
            <div className="mt-2 text-2xl font-black text-white">{zones.length}</div>
            <div className="mt-1 text-[10px] text-slate-400">Monitored Sectors</div>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-4 shadow-xl col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-red-400">
              <span>Active Alerts</span>
              <ShieldAlert className="h-4 w-4" />
            </div>
            <div className="mt-2 text-2xl font-black text-white">{stats.alerts}</div>
            <div className="mt-1 text-[10px] text-red-400/80 font-bold">
              {stats.alerts > 0 ? "Breaches Recorded" : "All Clear"}
            </div>
          </div>
        </section>

        {/* MAIN CONTENT GRID: MAP & ALERT FEED */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* TACTICAL MAP */}
          <div className="lg:col-span-2">
            <LiveGeoMap
              devices={devices}
              zones={zones}
              selectedDevice={selectedDevice}
              onSelectDevice={setSelectedDevice}
            />
          </div>

          {/* REAL-TIME ALERTS & LOGS */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#08101b] p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-red-400" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-white">
                    Live Geofence Violations
                  </h3>
                </div>
                <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-[9px] font-bold text-red-300 border border-red-500/30">
                  {alerts.length} Events
                </span>
              </div>

              <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
                {alerts.length === 0 ? (
                  <div className="py-12 text-center text-xs text-slate-500">
                    No active geofence violations. All devices within safe boundaries.
                  </div>
                ) : (
                  alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs transition hover:bg-red-500/15 animate-in fade-in"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="rounded bg-red-500/30 px-1.5 py-0.2 text-[8px] font-black uppercase text-red-200">
                          {alert.type}
                        </span>
                        <span suppressHydrationWarning className="text-[10px] text-slate-400 font-mono">
                          {new Date(alert.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="font-bold text-white text-[11px]">{alert.message}</div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
                        <MapPin className="h-3 w-3 text-slate-500" />
                        <span>Zone: {alert.zoneName}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* DEVICE FLEET ROSTER TABLE */}
        <section className="mt-8 rounded-2xl border border-white/[0.08] bg-[#08101b] p-6 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-emerald-400" />
              <h3 className="text-base font-black text-white">Live Device Telemetry Roster</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Auto-syncing every 1.2s
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] text-[10px] font-black uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3">Unit / Device</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Speed</th>
                  <th className="px-4 py-3">Current Zone</th>
                  <th className="px-4 py-3">Coordinates</th>
                  <th className="px-4 py-3">Battery</th>
                  <th className="px-4 py-3 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {devices.map((device) => {
                  const isBreach = device.status === "BREACH";
                  const isSpeedAnomaly = device.status === "SPEED_ANOMALY";
                  const isMoving = device.status === "MOVING";

                  return (
                    <tr
                      key={device.id}
                      onClick={() => setSelectedDevice(device)}
                      className={`cursor-pointer transition hover:bg-white/[0.03] ${
                        selectedDevice?.id === device.id ? "bg-white/[0.04]" : ""
                      }`}
                    >
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">{device.icon}</span>
                          <div>
                            <div className="font-bold text-white text-sm">{device.name}</div>
                            <div className="text-[10px] font-mono text-slate-400">
                              {device.callsign} • {device.id}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3.5">
                        <span
                          className={`rounded-md px-2 py-0.5 text-[9px] font-black uppercase ${
                            isBreach
                              ? "bg-red-500/20 text-red-300 border border-red-500/30 animate-pulse"
                              : isSpeedAnomaly
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : isMoving
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-slate-500/20 text-slate-400"
                          }`}
                        >
                          {device.status}
                        </span>
                      </td>

                      <td className="px-4 py-3.5 font-bold text-white">
                        {device.speed} km/h
                      </td>

                      <td className="px-4 py-3.5">
                        <span
                          className={`text-xs font-bold ${
                            device.zoneType === "RESTRICTED"
                              ? "text-amber-400"
                              : device.zoneType === "EMERGENCY"
                              ? "text-red-400"
                              : "text-slate-300"
                          }`}
                        >
                          {device.currentZone || "Open Campus"}
                        </span>
                      </td>

                      <td className="px-4 py-3.5 font-mono text-slate-400 text-[11px]">
                        {device.lat}, {device.lon}
                      </td>

                      <td className="px-4 py-3.5">
                        <span className="font-bold text-emerald-300">{device.battery}%</span>
                      </td>

                      <td className="px-4 py-3.5 text-right">
                        <button className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold text-slate-300 hover:bg-white/[0.08] hover:text-white">
                          Track
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
  );
}
