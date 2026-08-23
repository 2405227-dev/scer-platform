"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
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
  Filter,
  X,
} from "lucide-react";

import MapDynamic from "@/components/MapDynamic";
import { DemoControlPanel } from "@/components/DemoControlPanel";
import { IncidentActions } from "@/components/IncidentActions";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export interface Incident {
  id: string;
  type: string;
  severity: string;
  status: string;
  location: string | null;
  description: string | null;
  assignedTo?: string | null;
  reporterName?: string | null;
  createdAt: string | Date;
  location_lat?: number | null;
  location_lon?: number | null;
}

interface CommandCenterClientProps {
  initialIncidents: Incident[];
}

export function CommandCenterClient({ initialIncidents = [] }: CommandCenterClientProps) {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [lastVoiceAlert, setLastVoiceAlert] = useState<{
    keyword: string;
    transcript: string;
    location: string;
    time: string;
  } | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch full live incidents snapshot
  const fetchIncidents = useCallback(async () => {
    try {
      const res = await fetch("/api/incidents");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setIncidents(data);
        }
      }
    } catch (e) {
      console.error("[CommandCenter] Error fetching incidents:", e);
    }
  }, []);

  // 1. Live SSE Stream Listener for Sub-Second Push Updates
  useEffect(() => {
    let evtSource: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout;

    const connectSSE = () => {
      try {
        evtSource = new EventSource("/api/events/stream");

        evtSource.onopen = () => {
          setIsLiveConnected(true);
        };

        evtSource.onmessage = (e) => {
          try {
            const parsed = JSON.parse(e.data);
            if (parsed.type === "system.status" || parsed.type === "ping") {
              return;
            }

            // Real-time voice alert or incident created
            if (
              parsed.type === "incident.created" ||
              parsed.type === "detection.audio.alert" ||
              parsed.source === "audio-engine"
            ) {
              const newInc: Incident = {
                id: parsed.incidentId || parsed.data?.id || `inc-${Date.now()}`,
                type: parsed.data?.type || parsed.type || "Audio Distress Alert",
                severity: parsed.severity || parsed.data?.severity || "CRITICAL",
                status: parsed.data?.status || "pending",
                location: parsed.data?.location || "Block C (Academic)",
                description: parsed.data?.description || parsed.data?.transcript || `Keyword: ${parsed.data?.keyword || "HELP"}`,
                assignedTo: parsed.data?.assignedTo || null,
                reporterName: parsed.data?.reporterName || "SCER Audio Engine (Voice/Acoustic)",
                createdAt: new Date().toISOString(),
                location_lat: parsed.data?.latitude || null,
                location_lon: parsed.data?.longitude || null,
              };

              // Flash Voice Alert Banner
              if (parsed.data?.keyword || parsed.source === "audio-engine") {
                setLastVoiceAlert({
                  keyword: (parsed.data?.keyword || "HELP").toUpperCase(),
                  transcript: parsed.data?.transcript || parsed.data?.description || "Acoustic Distress Triggered",
                  location: parsed.data?.location || "Block C (Academic)",
                  time: new Date().toLocaleTimeString(),
                });
              }

              // Prepend to incidents list immediately
              setIncidents((prev) => {
                const exists = prev.some((i) => i.id === newInc.id);
                if (exists) return prev;
                return [newInc, ...prev];
              });
            }

            // Sync with backend database
            fetchIncidents();
          } catch (err) {
            console.error("SSE parse error:", err);
          }
        };

        evtSource.onerror = () => {
          setIsLiveConnected(false);
          evtSource?.close();
          reconnectTimeout = setTimeout(connectSSE, 3000);
        };
      } catch (err) {
        setIsLiveConnected(false);
      }
    };

    connectSSE();

    // 2. Fallback live polling interval (every 2.5s) to guarantee zero desync
    const pollInterval = setInterval(() => {
      fetchIncidents();
    }, 2500);

    return () => {
      if (evtSource) evtSource.close();
      clearTimeout(reconnectTimeout);
      clearInterval(pollInterval);
    };
  }, [fetchIncidents]);

  // Derived metrics
  const activeIncidents = useMemo(
    () => incidents.filter((i) => i.status !== "RESOLVED" && i.status !== "CLOSED").length,
    [incidents]
  );

  const criticalIncidents = useMemo(
    () => incidents.filter((i) => i.severity === "CRITICAL").length,
    [incidents]
  );

  const unacknowledged = useMemo(
    () =>
      incidents.filter(
        (i) =>
          i.status === "DETECTED" ||
          i.status === "PENDING" ||
          i.status === "pending" ||
          i.status === "UNACKNOWLEDGED"
      ).length,
    [incidents]
  );

  // Filtered incidents for display
  const filteredIncidents = useMemo(() => {
    return incidents.filter((inc) => {
      const matchSearch =
        inc.type.toLowerCase().includes(search.toLowerCase()) ||
        (inc.location || "").toLowerCase().includes(search.toLowerCase()) ||
        inc.id.toLowerCase().includes(search.toLowerCase()) ||
        (inc.description || "").toLowerCase().includes(search.toLowerCase());
      const matchSeverity = severityFilter === "ALL" || inc.severity === severityFilter;
      const matchStatus =
        statusFilter === "ALL" ||
        inc.status.toUpperCase() === statusFilter.toUpperCase() ||
        (statusFilter === "ACTIVE" && inc.status !== "RESOLVED" && inc.status !== "CLOSED");
      return matchSearch && matchSeverity && matchStatus;
    });
  }, [incidents, search, severityFilter, statusFilter]);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await fetchIncidents();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <>
      {/* BACKGROUND AMBIENCE */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-red-500/[0.035] blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* LIVE EVENT FLASH TOAST / BANNER */}
      {lastVoiceAlert && (
        <div className="fixed top-24 right-6 z-50 max-w-md animate-in slide-in-from-top duration-300">
          <div className="rounded-2xl border border-red-500/50 bg-[#0c1322]/95 p-4 shadow-[0_10px_40px_rgba(239,68,68,0.3)] backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse">
                  <Siren className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                      Live Voice Distress Trigger
                    </span>
                    <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[9px] font-bold text-red-300">
                      KEYWORD: {lastVoiceAlert.keyword}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">{lastVoiceAlert.transcript}</div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-slate-500" />
                    <span>{lastVoiceAlert.location}</span>
                    <span>•</span>
                    <span>{lastVoiceAlert.time}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setLastVoiceAlert(null)}
                className="text-slate-500 hover:text-white p-1 rounded-lg hover:bg-white/[0.08]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-2 sm:px-6 lg:px-8">
        {/* HEADER */}
        <section className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`flex h-2 w-2 rounded-full ${
                  isLiveConnected
                    ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]"
                    : "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,.8)]"
                }`}
              />
              <span
                className={`text-[9px] font-black uppercase tracking-[0.24em] ${
                  isLiveConnected ? "text-emerald-400" : "text-amber-400"
                }`}
              >
                {isLiveConnected ? "Real-Time Telemetry Connected" : "Connecting Live Feed..."}
              </span>
              <span className="text-slate-700">/</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Live Command Network
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Command Center
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Real-time zero-latency emergency intelligence, acoustic voice distress sensing, and tactical responder dispatch.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleManualRefresh}
              title="Refresh Queue"
              className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3.5 py-3 text-slate-300 hover:text-white hover:bg-white/[0.08] transition"
            >
              <RefreshCw className={`h-4 w-4 text-slate-400 ${isRefreshing ? "animate-spin" : ""}`} />
              <span className="text-xs font-bold">Sync</span>
            </button>

            <div className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3">
              <Signal className={`h-4 w-4 ${isLiveConnected ? "text-emerald-400" : "text-amber-400"}`} />
              <div>
                <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Telemetry Feed
                </div>
                <div className="text-xs font-bold text-slate-200">
                  {isLiveConnected ? "SSE Active & Synchronized" : "Re-syncing SSE..."}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
          <MetricCard
            title="Active incidents"
            value={activeIncidents}
            icon={<Activity />}
            accent="red"
          />
          <MetricCard
            title="Responders online"
            value="18"
            icon={<Users />}
            accent="blue"
          />
          <MetricCard
            title="Unacknowledged"
            value={unacknowledged}
            icon={<AlertCircle />}
            accent="orange"
          />
          <MetricCard
            title="Avg response"
            value="4m 12s"
            icon={<Clock3 />}
            accent="emerald"
          />
          <MetricCard
            title="Critical"
            value={criticalIncidents}
            icon={<ShieldAlert />}
            accent="red"
          />
        </section>

        {/* MAIN OPERATIONS GRID */}
        <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_420px]">
          {/* MAP CONTAINER */}
          <div className="relative h-[620px] w-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#08101b] shadow-[0_30px_100px_rgba(0,0,0,.35)]">
            <MapDynamic incidents={incidents} />
          </div>

          {/* LIVE INCIDENTS ASIDE QUEUE */}
          <aside className="flex flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#08101b] shadow-[0_30px_100px_rgba(0,0,0,.28)]">
            {/* ASIDE HEADER */}
            <div className="border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Siren className="h-4 w-4 text-red-400" />
                    <h2 className="text-sm font-black tracking-tight text-white">
                      Live Incident Center
                    </h2>
                  </div>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-slate-500">
                    Real-time acoustic & sensor dispatch queue
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-lg border border-red-400/20 bg-red-400/[0.1] px-2.5 py-1 text-[9px] font-black text-red-300">
                    {incidents.length} TOTAL
                  </span>
                </div>
              </div>

              {/* SEARCH & FILTERS BAR */}
              <div className="mt-3 flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search incidents or keywords..."
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-red-400 focus:bg-white/[0.06] transition"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>

                <select
                  value={severityFilter}
                  onChange={(e) => setSeverityFilter(e.target.value)}
                  className="rounded-xl border border-white/[0.08] bg-[#0c1422] px-2 py-1.5 text-[10px] font-bold text-slate-300 outline-none"
                >
                  <option value="ALL">All Severity</option>
                  <option value="CRITICAL">Critical</option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                </select>
              </div>
            </div>

            {/* INCIDENTS SCROLL LIST */}
            <div className="flex-1 max-h-[540px] overflow-y-auto p-3 space-y-2.5">
              {filteredIncidents.length === 0 ? (
                <EmptyIncidents />
              ) : (
                filteredIncidents.map((incident) => (
                  <IncidentCard key={incident.id} incident={incident} />
                ))
              )}
            </div>
          </aside>
        </section>

        {/* RESPONSE MODULES */}
        <section className="mt-6">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-600">
                Integrated Emergency Assets
              </div>
              <h2 className="mt-1 text-lg font-black tracking-tight text-white">
                Autonomous Response Modules
              </h2>
            </div>
            <div className="hidden text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600 sm:block">
              3 microservices connected & synced
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <ModuleCard
              title="Audio Engine"
              subtitle="Acoustic Voice Distress Detection"
              description="Continuous microphone sentry detecting voice emergency keywords (HELP, FIRE, GUNSHOT) with instant webhook dispatch."
              icon={<Headphones />}
              accent="blue"
              href="http://localhost:3001"
            />

            <ModuleCard
              title="GeoPulse"
              subtitle="Spatial Geofencing Radar"
              description="Tracks real-time GPS telemetry, enforces containment polygons, and recommends optimal responder units."
              icon={<Navigation />}
              accent="emerald"
              href="http://localhost:3002"
            />

            <ModuleCard
              title="Notification Engine"
              subtitle="Multi-Channel Alert Gateway"
              description="Unified emergency notification dispatcher routing across SMS, Push, and Tactical Radio with verified audit trails."
              icon={<BellRing />}
              accent="violet"
              href="http://localhost:3003"
            />
          </div>
        </section>

        {/* RESPONSE PIPELINE */}
        <section className="mt-5 rounded-[28px] border border-white/[0.08] bg-[#08101b] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                System Architecture
              </div>
              <h2 className="mt-1 text-lg font-black text-white">
                Emergency Response Pipeline
              </h2>
            </div>
            <Zap className="h-4 w-4 text-yellow-400" />
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            <PipelineStep
              number="01"
              title="Detect"
              subtitle="Audio Voice Engine"
              icon={<Radio />}
              accent="blue"
            />
            <PipelineStep
              number="02"
              title="Analyze"
              subtitle="SCER Tactical Core"
              icon={<Activity />}
              accent="red"
            />
            <PipelineStep
              number="03"
              title="Match"
              subtitle="GeoPulse Spatial"
              icon={<MapPin />}
              accent="emerald"
            />
            <PipelineStep
              number="04"
              title="Dispatch"
              subtitle="Notification Gateway"
              icon={<BellRing />}
              accent="violet"
            />
          </div>
        </section>

        <DemoControlPanel />
      </main>
    </>
  );
}

function MetricCard({
  title,
  value,
  icon,
  accent,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accent: "red" | "blue" | "orange" | "emerald";
}) {
  const styles = {
    red: "text-red-400 bg-red-400/[0.06] border-red-400/10",
    blue: "text-sky-400 bg-sky-400/[0.06] border-sky-400/10",
    orange: "text-orange-400 bg-orange-400/[0.06] border-orange-400/10",
    emerald: "text-emerald-400 bg-emerald-400/[0.06] border-emerald-400/10",
  };

  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-[#08101b] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-600">
          {title}
        </span>
        <span className={`rounded-lg border p-2 ${styles[accent]}`}>{icon}</span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <span className="text-2xl font-black tracking-tight text-white">{value}</span>
        <span className="text-[8px] font-bold uppercase tracking-wider text-slate-700">Live</span>
      </div>
    </div>
  );
}

function MapLegend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </span>
    </div>
  );
}

function EmptyIncidents() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05]">
        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
      </div>
      <h3 className="mt-3 text-sm font-bold text-white">No Matching Incidents</h3>
      <p className="mt-1 max-w-[200px] text-xs leading-5 text-slate-500">
        Emergency queue is clear or no events match current filters.
      </p>
    </div>
  );
}

function IncidentCard({ incident }: { incident: Incident }) {
  const isCritical = incident.severity === "CRITICAL";
  const isResolved =
    incident.status.toUpperCase() === "RESOLVED" ||
    incident.status.toUpperCase() === "CLOSED";

  const isVoiceIncident =
    incident.reporterName?.includes("Audio") ||
    incident.type.toLowerCase().includes("audio") ||
    incident.description?.toLowerCase().includes("acoustic") ||
    incident.description?.toLowerCase().includes("voice") ||
    incident.description?.toLowerCase().includes("keyword");

  return (
    <Drawer>
      <DrawerTrigger>
        <div role="button" tabIndex={0} className="group block w-full text-left cursor-pointer">
          <div
            className={`rounded-2xl border p-3.5 transition-all duration-300 ${
              isCritical
                ? "border-red-500/25 bg-gradient-to-r from-red-500/[0.06] to-transparent hover:border-red-400/40"
                : "border-white/[0.06] bg-white/[0.018] hover:border-white/[0.12] hover:bg-white/[0.03]"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isCritical
                      ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,.8)] animate-pulse"
                      : isResolved
                      ? "bg-emerald-400"
                      : "bg-orange-400"
                  }`}
                />
                <span className="text-[8.5px] font-black uppercase tracking-[0.16em] text-slate-400 font-mono">
                  {incident.id.substring(Math.max(0, incident.id.length - 8))}
                </span>
                {isVoiceIncident && (
                  <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[8px] font-black uppercase text-blue-300 border border-blue-500/30 flex items-center gap-1">
                    <Headphones className="h-2.5 w-2.5" /> Voice
                  </span>
                )}
              </div>

              <span className="text-[9px] text-slate-500 font-mono">
                {new Date(incident.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            <div className="mt-2.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="truncate text-xs sm:text-sm font-bold text-white">
                  {incident.type}
                </h3>
                <span
                  className={`shrink-0 rounded-md px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider ${
                    isCritical
                      ? "bg-red-400/20 text-red-300 border border-red-500/30"
                      : "bg-white/[0.06] text-slate-400"
                  }`}
                >
                  {incident.severity}
                </span>
              </div>

              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-slate-400">
                <MapPin className="h-3 w-3 text-slate-500 shrink-0" />
                <span className="truncate">{incident.location || "Block C (Academic)"}</span>
              </div>

              {incident.description && (
                <p className="mt-1 text-[10px] text-slate-500 line-clamp-1 italic">
                  "{incident.description}"
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2">
              <div>
                <span className="text-[8px] font-black uppercase tracking-[0.14em] text-slate-500">
                  STATUS:{" "}
                </span>
                <span
                  className={`text-[9px] font-bold uppercase ${
                    isResolved ? "text-emerald-400" : "text-amber-400"
                  }`}
                >
                  {incident.status}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition">
                Inspect
                <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent className="border-white/[0.08] bg-[#07101b] text-white">
        <div className="mx-auto w-full max-w-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isCritical ? "bg-red-400 animate-ping" : "bg-orange-400"
                  }`}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Incident {incident.id}
                </span>
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
                {incident.type}
              </h2>
            </div>

            <span
              className={`rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider ${
                isCritical
                  ? "bg-red-400/20 text-red-300 border border-red-500/30"
                  : "bg-white/[0.06] text-slate-400"
              }`}
            >
              {incident.severity}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <DetailItem label="Location" value={incident.location || "Block C (Academic)"} />
            <DetailItem label="Status" value={incident.status.toUpperCase()} />
            <DetailItem label="Detected" value={new Date(incident.createdAt).toLocaleString()} />
            <DetailItem
              label="Source Channel"
              value={incident.reporterName || "Acoustic Voice Sentry"}
            />
          </div>

          <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-500">
              Distress Transcript / Notes
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              {incident.description || "Live sensor telemetry received without text payload."}
            </p>
          </div>

          <div className="mt-5">
            <IncidentActions incidentId={incident.id} currentStatus={incident.status} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5">
      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-500">{label}</div>
      <div className="mt-1.5 break-words text-xs font-bold text-slate-200">{value}</div>
    </div>
  );
}

function ModuleCard({
  title,
  subtitle,
  description,
  icon,
  accent,
  href,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accent: "blue" | "emerald" | "violet";
  href: string;
}) {
  const styles = {
    blue: {
      icon: "text-sky-300 bg-sky-400/[0.07] border-sky-400/10",
      dot: "bg-sky-400",
      glow: "hover:shadow-[0_20px_70px_rgba(56,189,248,.06)]",
    },
    emerald: {
      icon: "text-emerald-300 bg-emerald-400/[0.07] border-emerald-400/10",
      dot: "bg-emerald-400",
      glow: "hover:shadow-[0_20px_70px_rgba(52,211,153,.06)]",
    },
    violet: {
      icon: "text-violet-300 bg-violet-400/[0.07] border-violet-400/10",
      dot: "bg-violet-400",
      glow: "hover:shadow-[0_20px_70px_rgba(167,139,250,.06)]",
    },
  };

  const style = styles[accent];

  return (
    <a
      href={href}
      className={`group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#08101b] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.13] ${style.glow}`}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.02] blur-3xl transition group-hover:bg-white/[0.04]" />

      <div className="relative flex items-start justify-between">
        <div className={`grid h-11 w-11 place-items-center rounded-2xl border ${style.icon}`}>
          {icon}
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.035] px-2 py-1">
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          <span className="text-[7px] font-black uppercase tracking-wider text-emerald-300">
            Online
          </span>
        </div>
      </div>

      <div className="relative mt-5">
        <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-600">
          {subtitle}
        </div>
        <h3 className="mt-1 text-base font-black text-white">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-600 transition group-hover:text-slate-300">
          Open Module
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.04] text-slate-600 transition group-hover:translate-x-1 group-hover:bg-white/[0.08] group-hover:text-white">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

function PipelineStep({
  number,
  title,
  subtitle,
  icon,
  accent,
}: {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: "blue" | "red" | "emerald" | "violet";
}) {
  const colors = {
    blue: "text-sky-300 bg-sky-400/[0.06] border-sky-400/10",
    red: "text-red-300 bg-red-400/[0.06] border-red-400/10",
    emerald: "text-emerald-300 bg-emerald-400/[0.06] border-emerald-400/10",
    violet: "text-violet-300 bg-violet-400/[0.06] border-violet-400/10",
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.018] p-3">
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${colors[accent]}`}>
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-[7px] font-black tracking-[0.18em] text-slate-700">{number}</div>
        <div className="text-xs font-black text-white">{title}</div>
        <div className="truncate text-[9px] text-slate-600">{subtitle}</div>
      </div>
    </div>
  );
}
