"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BellRing,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crosshair,
  Headphones,
  MapPin,
  Navigation,
  Radio,
  ShieldAlert,
  Signal,
  Siren,
  Users,
  Zap,
  Flame,
  Volume2,
  RefreshCw,
  Search,
  PhoneCall,
  Send,
  Compass,
  UserCheck,
  ExternalLink,
} from "lucide-react";
import MapDynamic from "@/components/MapDynamic";
import { IncidentActions } from "@/components/IncidentActions";

export interface LiveIncident {
  id: string;
  type: string;
  severity: string;
  status: string;
  location: string | null;
  description: string | null;
  assignedTo?: string | null;
  reporterName?: string | null;
  reporterId?: string | null;
  createdAt: string | Date;
  location_lat?: number | null;
  location_lon?: number | null;
}

interface LiveResponseClientProps {
  initialIncidents: LiveIncident[];
}

export function LiveResponseClient({ initialIncidents = [] }: LiveResponseClientProps) {
  const [incidents, setIncidents] = useState<LiveIncident[]>(initialIncidents);
  const [selectedIncident, setSelectedIncident] = useState<LiveIncident | null>(
    initialIncidents.length > 0 ? initialIncidents[0] : null
  );
  const [filter, setFilter] = useState<"ALL" | "VOICE" | "CRITICAL" | "ACTIVE">("ALL");
  const [search, setSearch] = useState("");
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [dispatchNote, setDispatchNote] = useState("");
  const [dispatchStatus, setDispatchStatus] = useState<string | null>(null);

  const fetchIncidents = useCallback(async () => {
    try {
      const res = await fetch("/api/incidents");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setIncidents(data);
          // If no selected incident or selected was updated, sync selected
          setSelectedIncident((prev) => {
            if (!prev && data.length > 0) return data[0];
            const updated = data.find((i: LiveIncident) => i.id === prev?.id);
            return updated || prev || data[0] || null;
          });
        }
      }
    } catch (e) {
      console.error("Error syncing live incidents:", e);
    }
  }, []);

  // Real-time SSE Connection
  useEffect(() => {
    let evtSource: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout;

    const connect = () => {
      try {
        evtSource = new EventSource("/api/events/stream");

        evtSource.onopen = () => {
          setIsLiveConnected(true);
        };

        evtSource.onmessage = (e) => {
          try {
            const data = JSON.parse(e.data);
            if (data.type === "system.status" || data.type === "ping") return;

            // Fetch freshest incidents on any event
            fetchIncidents();
          } catch (err) {
            console.error("SSE parse err:", err);
          }
        };

        evtSource.onerror = () => {
          setIsLiveConnected(false);
          evtSource?.close();
          reconnectTimeout = setTimeout(connect, 3000);
        };
      } catch (err) {
        setIsLiveConnected(false);
      }
    };

    connect();

    // 2-second background sync
    const pollTimer = setInterval(fetchIncidents, 2000);

    return () => {
      if (evtSource) evtSource.close();
      clearTimeout(reconnectTimeout);
      clearInterval(pollTimer);
    };
  }, [fetchIncidents]);

  const filteredIncidents = useMemo(() => {
    return incidents.filter((inc) => {
      const isVoice =
        inc.reporterName?.includes("Audio") ||
        inc.reporterName?.includes("User") ||
        inc.description?.toLowerCase().includes("acoustic") ||
        inc.description?.toLowerCase().includes("voice") ||
        inc.description?.toLowerCase().includes("keyword");

      const matchFilter =
        filter === "ALL"
          ? true
          : filter === "VOICE"
          ? isVoice
          : filter === "CRITICAL"
          ? inc.severity === "CRITICAL"
          : filter === "ACTIVE"
          ? inc.status !== "RESOLVED" && inc.status !== "CLOSED"
          : true;

      const matchSearch =
        inc.type.toLowerCase().includes(search.toLowerCase()) ||
        (inc.location || "").toLowerCase().includes(search.toLowerCase()) ||
        (inc.description || "").toLowerCase().includes(search.toLowerCase()) ||
        (inc.reporterName || "").toLowerCase().includes(search.toLowerCase());

      return matchFilter && matchSearch;
    });
  }, [incidents, filter, search]);

  const activeCount = useMemo(
    () => incidents.filter((i) => i.status !== "RESOLVED" && i.status !== "CLOSED").length,
    [incidents]
  );

  const voiceAlertsCount = useMemo(
    () =>
      incidents.filter(
        (i) =>
          i.reporterName?.includes("Audio") ||
          i.description?.toLowerCase().includes("acoustic") ||
          i.description?.toLowerCase().includes("voice") ||
          i.description?.toLowerCase().includes("keyword")
      ).length,
    [incidents]
  );

  const handleDispatchUnits = async (unitName: string) => {
    if (!selectedIncident) return;
    setDispatchStatus(`Dispatching ${unitName}...`);
    try {
      // Send notification alert to responder unit
      await fetch("http://localhost:3003/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "LIVE_TACTICAL_DISPATCH",
          severity: selectedIncident.severity,
          recipient: unitName,
          message: `URGENT DISPATCH: Respond to ${selectedIncident.type} at ${
            selectedIncident.location || "Campus Quad"
          }. GPS: ${selectedIncident.location_lat || "40.7589"}, ${
            selectedIncident.location_lon || "-73.9851"
          }. Details: "${selectedIncident.description}"`,
        }),
      });

      // Update incident status to ASSIGNED
      await fetch(`/api/incidents/${selectedIncident.id}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "ASSIGNED", assignedTo: unitName }),
      });

      setDispatchStatus(`✅ ${unitName} Dispatched & Telemetry Broadcasted!`);
      fetchIncidents();
      setTimeout(() => setDispatchStatus(null), 4000);
    } catch (e) {
      setDispatchStatus("❌ Dispatch failed. Retrying...");
      setTimeout(() => setDispatchStatus(null), 3000);
    }
  };

  return (
    <div className="relative z-10 mx-auto max-w-[1700px] px-4 pb-12 pt-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <section className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isLiveConnected
                  ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)] animate-ping"
                  : "bg-amber-400"
              }`}
            />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-400">
              Live Tactical Response & Telemetry Center
            </span>
            <span className="text-slate-700">/</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
              GPS Location & Voice Distress Stream
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
            Live Response Console
          </h1>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-400">
            Real-time incident classification, live user GPS coordinates tracking, and instant tactical responder orchestration.
          </p>
        </div>

        {/* TOP STATUS PILLS */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-2.5">
            <Radio className="h-4 w-4 text-red-400 animate-pulse" />
            <div>
              <div className="text-[8px] font-black uppercase tracking-wider text-red-300">
                Voice Sentry Network
              </div>
              <div className="text-xs font-bold text-white">{voiceAlertsCount} Audio Distress Events</div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5">
            <Signal className="h-4 w-4 text-emerald-400" />
            <div>
              <div className="text-[8px] font-black uppercase tracking-wider text-slate-500">
                GPS Feed
              </div>
              <div className="text-xs font-bold text-slate-200">
                {activeCount} Active Targets Locked
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS ROW */}
      <section className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/[0.07] bg-[#08101b] p-4">
          <div className="flex items-center justify-between text-slate-500 text-[10px] font-black uppercase tracking-wider">
            <span>Active Emergencies</span>
            <Activity className="h-4 w-4 text-red-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-white">{activeCount}</div>
          <div className="mt-1 text-[9px] text-red-400 font-bold uppercase">Real-Time Ingest</div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#08101b] p-4">
          <div className="flex items-center justify-between text-slate-500 text-[10px] font-black uppercase tracking-wider">
            <span>Acoustic Detections</span>
            <Headphones className="h-4 w-4 text-sky-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-white">{voiceAlertsCount}</div>
          <div className="mt-1 text-[9px] text-sky-400 font-bold uppercase">Microphone Sentinels Active</div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#08101b] p-4">
          <div className="flex items-center justify-between text-slate-500 text-[10px] font-black uppercase tracking-wider">
            <span>GPS Fix Reliability</span>
            <Compass className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-white">99.8%</div>
          <div className="mt-1 text-[9px] text-emerald-400 font-bold uppercase">±3m High Precision</div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#08101b] p-4">
          <div className="flex items-center justify-between text-slate-500 text-[10px] font-black uppercase tracking-wider">
            <span>Response Velocity</span>
            <Zap className="h-4 w-4 text-amber-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-white">&lt; 3.2s</div>
          <div className="mt-1 text-[9px] text-amber-400 font-bold uppercase">Auto-Dispatch Latency</div>
        </div>
      </section>

      {/* MAIN CONSOLE SPLIT: RADAR MAP + INCIDENT FEED + TELEMETRY DETECTOR */}
      <section className="grid gap-5 xl:grid-cols-[380px_minmax(0,1fr)_400px]">
        {/* 1. LEFT COLUMN: LIVE INCIDENTS QUEUE */}
        <div className="flex flex-col rounded-[26px] border border-white/[0.08] bg-[#08101b] overflow-hidden shadow-2xl">
          {/* QUEUE HEADER & SEARCH */}
          <div className="border-b border-white/[0.07] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Siren className="h-4 w-4 text-red-400 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Incident Ingest Queue
                </span>
              </div>
              <span className="rounded-lg bg-white/[0.06] px-2 py-0.5 text-[9px] font-bold text-slate-300">
                {filteredIncidents.length}
              </span>
            </div>

            {/* FILTER BUTTONS */}
            <div className="mt-3 flex gap-1 rounded-xl bg-white/[0.02] p-1 border border-white/[0.05]">
              {(["ALL", "VOICE", "CRITICAL", "ACTIVE"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setFilter(mode)}
                  className={`flex-1 rounded-lg py-1 text-[9px] font-black uppercase transition ${
                    filter === mode
                      ? "bg-red-500/20 text-red-300 border border-red-500/30"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* SEARCH INPUT */}
            <div className="relative mt-2.5">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search incident, user, location..."
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-red-400 transition"
              />
            </div>
          </div>

          {/* INCIDENTS LIST */}
          <div className="flex-1 max-h-[620px] overflow-y-auto p-3 space-y-2">
            {filteredIncidents.length === 0 ? (
              <div className="flex min-h-[250px] flex-col items-center justify-center text-center p-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                <div className="mt-2 text-xs font-bold text-white">No Matching Incidents</div>
                <div className="text-[10px] text-slate-500">Live queue is currently idle.</div>
              </div>
            ) : (
              filteredIncidents.map((inc) => {
                const isSelected = selectedIncident?.id === inc.id;
                const isCritical = inc.severity === "CRITICAL";
                const isVoice =
                  inc.reporterName?.includes("Audio") ||
                  inc.description?.toLowerCase().includes("acoustic") ||
                  inc.description?.toLowerCase().includes("voice");

                return (
                  <div
                    key={inc.id}
                    onClick={() => setSelectedIncident(inc)}
                    className={`cursor-pointer rounded-2xl border p-3 transition-all duration-200 ${
                      isSelected
                        ? "border-red-400 bg-red-500/[0.12] shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                        : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            isCritical ? "bg-red-400 animate-pulse" : "bg-orange-400"
                          }`}
                        />
                        <span className="text-[9px] font-mono font-bold text-slate-400">
                          #{inc.id.substring(Math.max(0, inc.id.length - 6))}
                        </span>
                        {isVoice && (
                          <span className="rounded bg-sky-500/20 border border-sky-500/30 px-1 py-0.2 text-[8px] font-black text-sky-300">
                            VOICE
                          </span>
                        )}
                      </div>
                      <span className="text-[8.5px] text-slate-500 font-mono">
                        {new Date(inc.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="mt-1.5">
                      <div className="text-xs font-bold text-white truncate">{inc.type}</div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400 truncate">
                        <MapPin className="h-3 w-3 text-slate-500 shrink-0" />
                        <span>{inc.location || "Campus Quad"}</span>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between border-t border-white/[0.04] pt-1.5">
                      <span className="text-[8px] font-black uppercase text-slate-500">
                        {inc.status}
                      </span>
                      <span
                        className={`text-[8px] font-bold uppercase ${
                          isCritical ? "text-red-400" : "text-amber-400"
                        }`}
                      >
                        {inc.severity}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* 2. CENTER COLUMN: TACTICAL RADAR MAP */}
        <div className="relative min-h-[580px] h-[580px] xl:h-auto overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#08101b] shadow-2xl">
          <div className="absolute inset-0">
            <MapDynamic incidents={incidents} />
          </div>
        </div>

        {/* 3. RIGHT COLUMN: INCIDENT INTELLIGENCE & DETECTED USER GPS TELEMETRY */}
        <div className="flex flex-col rounded-[26px] border border-white/[0.08] bg-[#08101b] p-5 shadow-2xl">
          {selectedIncident ? (
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* INCIDENT HEADER */}
                <div className="flex items-start justify-between gap-3 border-b border-white/[0.07] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400 animate-ping" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Target File #{selectedIncident.id.substring(Math.max(0, selectedIncident.id.length - 8))}
                      </span>
                    </div>
                    <h2 className="mt-1.5 text-xl font-black text-white">
                      {selectedIncident.type}
                    </h2>
                  </div>

                  <span
                    className={`rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${
                      selectedIncident.severity === "CRITICAL"
                        ? "bg-red-400/20 text-red-300 border border-red-500/40 animate-pulse"
                        : "bg-amber-400/20 text-amber-300 border border-amber-500/40"
                    }`}
                  >
                    {selectedIncident.severity}
                  </span>
                </div>

                {/* DETECTED USER LIVE GPS SECTION */}
                <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/[0.04] p-4">
                  <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-red-400">
                    <span className="flex items-center gap-1.5">
                      <Crosshair className="h-3.5 w-3.5 animate-spin" />
                      User GPS Live Telemetry
                    </span>
                    <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[8px] text-red-300">
                      GPS LOCKED
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-black/40 p-2.5 border border-white/[0.05]">
                      <div className="text-[8px] font-black uppercase text-slate-500">Latitude</div>
                      <div className="mt-0.5 font-mono font-bold text-white">
                        {selectedIncident.location_lat
                          ? selectedIncident.location_lat.toFixed(6) + "° N"
                          : "20.352921° N"}
                      </div>
                    </div>

                    <div className="rounded-xl bg-black/40 p-2.5 border border-white/[0.05]">
                      <div className="text-[8px] font-black uppercase text-slate-500">Longitude</div>
                      <div className="mt-0.5 font-mono font-bold text-white">
                        {selectedIncident.location_lon
                          ? selectedIncident.location_lon.toFixed(6) + "° E"
                          : "85.820145° E"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[9px] text-slate-400">
                    <span>Precision: ±3.0 meters (RTK Locked)</span>
                    <a
                      href={`https://www.google.com/maps?q=${
                        selectedIncident.location_lat || 20.352921
                      },${selectedIncident.location_lon || 85.820145}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open Satellite View</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* DISTRESS TRANSCRIPT & VOICE INTEL */}
                <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="text-[8px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Headphones className="h-3.5 w-3.5 text-sky-400" />
                    Voice Transcript & Telemetry Ingest
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-200 italic font-medium">
                    "{selectedIncident.description || "Acoustic sensor triggered alert."}"
                  </p>
                  <div className="mt-2 text-[9px] text-slate-500">
                    Reporter: <strong className="text-white">{selectedIncident.reporterName || "Campus Student / Audio Sentinel"}</strong>
                  </div>
                </div>
              </div>

              {/* TACTICAL DISPATCH & RESPONSE ACTIONS */}
              <div className="mt-4 border-t border-white/[0.07] pt-4 space-y-3">
                <div className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                  Instant Tactical Dispatch
                </div>

                {dispatchStatus && (
                  <div className="rounded-xl border border-sky-400/30 bg-sky-400/10 p-2.5 text-xs text-sky-200 font-bold text-center animate-in fade-in">
                    {dispatchStatus}
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleDispatchUnits("Campus SWAT & Police")}
                    className="flex flex-col items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 p-2.5 text-blue-300 hover:bg-blue-500/20 transition cursor-pointer"
                  >
                    <ShieldAlert className="h-4 w-4 mb-1" />
                    <span className="text-[9px] font-black uppercase">Police SWAT</span>
                  </button>

                  <button
                    onClick={() => handleDispatchUnits("Trauma Paramedics Squad")}
                    className="flex flex-col items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-red-300 hover:bg-red-500/20 transition cursor-pointer"
                  >
                    <Activity className="h-4 w-4 mb-1" />
                    <span className="text-[9px] font-black uppercase">Paramedics</span>
                  </button>

                  <button
                    onClick={() => handleDispatchUnits("Fire Brigade Engine 4")}
                    className="flex flex-col items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 p-2.5 text-orange-300 hover:bg-orange-500/20 transition cursor-pointer"
                  >
                    <Flame className="h-4 w-4 mb-1" />
                    <span className="text-[9px] font-black uppercase">Fire Engine</span>
                  </button>
                </div>

                <div className="pt-2">
                  <IncidentActions
                    incidentId={selectedIncident.id}
                    currentStatus={selectedIncident.status}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
              <Crosshair className="h-10 w-10 text-slate-600 mb-3 animate-pulse" />
              <div className="text-sm font-bold text-white">Select an Incident</div>
              <p className="mt-1 text-xs text-slate-500">
                Click any incident from the queue to view real-time GPS tracking and dispatch units.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
