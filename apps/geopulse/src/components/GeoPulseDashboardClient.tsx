"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  CandidateRanking,
  IncidentItem,
  IncidentSeverity,
  RecommendationResponse,
  ResponderItem,
  ResponderStatus,
  ZoneItem,
} from "@/types/geopulse";
import { rankResponders } from "@/lib/geo-engine";
import GeoPulseMap from "./map/GeoPulseMap";
import IncidentDetailPanel from "./IncidentDetailPanel";
import ResponderIntelligenceTable from "./ResponderIntelligenceTable";
import CreateIncidentModal from "./CreateIncidentModal";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowUpRight,
  Clock,
  Crosshair,
  Filter,
  Flame,
  Globe,
  Layers,
  MapPin,
  Navigation,
  Plus,
  Radio,
  RefreshCw,
  Search,
  Shield,
  ShieldAlert,
  Signal,
  Siren,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

interface GeoPulseDashboardClientProps {
  initialIncidents: IncidentItem[];
  initialResponders: ResponderItem[];
  initialZones: ZoneItem[];
}

export default function GeoPulseDashboardClient({
  initialIncidents,
  initialResponders,
  initialZones,
}: GeoPulseDashboardClientProps) {
  const [incidents, setIncidents] = useState<IncidentItem[]>(initialIncidents);
  const [responders, setResponders] = useState<ResponderItem[]>(initialResponders);
  const [zones] = useState<ZoneItem[]>(initialZones);

  const [selectedIncidentId, setSelectedIncidentId] = useState<string | null>(
    initialIncidents.length > 0 ? initialIncidents[0].id : null
  );
  const [selectedResponderId, setSelectedResponderId] = useState<string | null>(null);

  const [severityFilter, setSeverityFilter] = useState<string>("ALL");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [notificationToast, setNotificationToast] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  // Auto-dismiss toast
  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setNotificationToast({ type, message });
    setTimeout(() => setNotificationToast(null), 4500);
  };

  // Currently selected incident object
  const selectedIncident = useMemo(() => {
    return incidents.find((i) => i.id === selectedIncidentId) || null;
  }, [incidents, selectedIncidentId]);

  // Currently selected responder object
  const selectedResponder = useMemo(() => {
    return responders.find((r) => r.id === selectedResponderId) || null;
  }, [responders, selectedResponderId]);

  // Calculate live multi-factor recommendations for selected incident
  const recommendationData: RecommendationResponse | null = useMemo(() => {
    if (!selectedIncident) return null;
    return rankResponders(selectedIncident, responders);
  }, [selectedIncident, responders]);

  // Fetch updated data from API
  const refreshData = async () => {
    setIsRefreshing(true);
    try {
      const [incRes, respRes] = await Promise.all([
        fetch("/api/geopulse/incidents"),
        fetch("/api/geopulse/responders"),
      ]);

      if (incRes.ok && respRes.ok) {
        const newIncidents: IncidentItem[] = await incRes.json();
        const newResponders: ResponderItem[] = await respRes.json();
        setIncidents(newIncidents);
        setResponders(newResponders);

        // Maintain selection if possible, otherwise pick first
        if (newIncidents.length > 0 && !newIncidents.some((i) => i.id === selectedIncidentId)) {
          setSelectedIncidentId(newIncidents[0].id);
        }
      }
    } catch (err) {
      console.error("Error refreshing GeoPulse telemetry:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Background sync polling every 12 seconds
  useEffect(() => {
    const interval = setInterval(refreshData, 12000);
    return () => clearInterval(interval);
  }, [selectedIncidentId]);

  // Handle Dispatch Action
  const handleDispatch = async (incidentId: string, responderId: string) => {
    setIsDispatching(true);
    try {
      const res = await fetch("/api/geopulse/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ incidentId, responderId }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Dispatch failed.");
      }

      showToast(
        data.message || `Unit successfully dispatched! En route to incident.`,
        "success"
      );

      // Refresh immediately
      await refreshData();
    } catch (err: any) {
      showToast(err.message || "Failed to dispatch unit.", "error");
      throw err;
    } finally {
      setIsDispatching(false);
    }
  };

  // Handle Responder Status Lifecycle Change
  const handleStatusChange = async (
    responderId: string,
    newStatus: ResponderStatus
  ) => {
    try {
      const res = await fetch(`/api/geopulse/responders/${responderId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to update status.");
      }

      showToast(`Status updated to ${newStatus}`, "info");
      await refreshData();
    } catch (err: any) {
      showToast(err.message || "Error updating status.", "error");
    }
  };

  // Filtered incidents for queue
  const filteredIncidents = useMemo(() => {
    if (severityFilter === "ALL") return incidents;
    return incidents.filter(
      (i) => i.severity.toUpperCase() === severityFilter.toUpperCase()
    );
  }, [incidents, severityFilter]);

  // KPIs
  const activeIncidentsCount = incidents.filter(
    (i) => i.status !== "RESOLVED" && i.status !== "CLOSED"
  ).length;

  const criticalIncidentsCount = incidents.filter(
    (i) =>
      i.severity === "CRITICAL" &&
      i.status !== "RESOLVED" &&
      i.status !== "CLOSED"
  ).length;

  const availableRespondersCount = responders.filter(
    (r) => r.status === "AVAILABLE"
  ).length;

  const dispatchedCount = responders.filter(
    (r) => r.status === "EN_ROUTE" || r.status === "DISPATCHED"
  ).length;

  return (
    <div className="min-h-screen bg-[#050a12] text-slate-100 selection:bg-emerald-500/30">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[15%] top-[-10%] h-[550px] w-[550px] rounded-full bg-emerald-500/[0.03] blur-[150px]" />
        <div className="absolute right-[5%] top-[25%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1720px] px-4 pb-12 pt-4 sm:px-6 lg:px-8 space-y-5">
        {/* ========================================================
            1. TOP HEADER & SYSTEM STATUS BAR
            ======================================================== */}
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center border-b border-white/[0.07] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-400">
                GeoPulse System Online
              </span>
              <span className="text-slate-700">/</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                SCER Geospatial Engine
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] text-white flex items-center gap-3">
              <Navigation className="h-7 w-7 text-emerald-400" />
              <span>GeoPulse Operations</span>
            </h1>
          </div>

          {/* Action Header Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sync / Refresh Button */}
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-slate-300 hover:bg-white/[0.06] hover:text-white transition"
              title="Poll latest GPS coordinates and assignments"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 text-emerald-400 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
              />
              <span>{isRefreshing ? "Syncing..." : "Sync Radar"}</span>
            </button>

            {/* Back to SCER Command Center */}
            <a
              href="http://localhost:3000"
              className="flex items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-slate-300 hover:bg-white/[0.06] hover:text-white transition"
            >
              <Shield className="h-3.5 w-3.5 text-blue-400" />
              <span>SCER Command</span>
            </a>

            {/* Log New Incident Modal Trigger */}
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-98 px-4 py-2 text-xs font-black text-slate-950 transition shadow-lg shadow-emerald-500/20"
            >
              <Plus className="h-4 w-4" />
              <span>Report Incident</span>
            </button>
          </div>
        </header>

        {/* Global Toast Notification */}
        {notificationToast && (
          <div
            className={`flex items-center justify-between rounded-2xl border p-3.5 text-xs font-bold shadow-2xl animate-in slide-in-from-top-2 duration-200 ${
              notificationToast.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-200"
                : notificationToast.type === "error"
                ? "bg-red-950/90 border-red-500/40 text-red-200"
                : "bg-blue-950/90 border-blue-500/40 text-blue-200"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>{notificationToast.message}</span>
            </div>
            <button
              onClick={() => setNotificationToast(null)}
              className="text-slate-400 hover:text-white text-xs ml-4"
            >
              &times;
            </button>
          </div>
        )}

        {/* ========================================================
            2. KPI OVERVIEW BAR
            ======================================================== */}
        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {/* Active Incidents */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#081220] p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Active Incidents
              </span>
              <Activity className="h-4 w-4 text-red-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tight text-white font-mono">
                {activeIncidentsCount.toString().padStart(2, "0")}
              </span>
              {criticalIncidentsCount > 0 && (
                <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-md border border-red-500/20">
                  {criticalIncidentsCount} Critical
                </span>
              )}
            </div>
          </div>

          {/* Available Responders */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#081220] p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Available Units
              </span>
              <Users className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tight text-white font-mono">
                {availableRespondersCount.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                / {responders.length} total
              </span>
            </div>
          </div>

          {/* Dispatched / En Route */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#081220] p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Units Dispatched
              </span>
              <Siren className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tight text-white font-mono">
                {dispatchedCount.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                En Route
              </span>
            </div>
          </div>

          {/* Average Response ETA */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#081220] p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Avg Response ETA
              </span>
              <Clock className="h-4 w-4 text-yellow-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tight text-white font-mono">
                {recommendationData?.recommendation?.etaFormatted || "3m 15s"}
              </span>
              <span className="text-[10px] font-bold text-emerald-400">
                Derived Live
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. INCIDENT SELECTOR / QUEUE HORIZONTAL BAR
            ======================================================== */}
        <section className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-[#081220]/80 p-3 backdrop-blur-xl">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 shrink-0 pl-1">
              Active Incidents:
            </span>

            {filteredIncidents.map((inc) => {
              const isSelected = selectedIncidentId === inc.id;
              const isCrit = inc.severity === "CRITICAL";
              return (
                <button
                  key={inc.id}
                  onClick={() => setSelectedIncidentId(inc.id)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-bold transition shrink-0 ${
                    isSelected
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-md"
                      : "bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] border border-white/5"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isCrit ? "bg-red-400 animate-pulse" : "bg-orange-400"
                    }`}
                  />
                  <span className="max-w-[140px] truncate">{inc.title || inc.type}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-black uppercase ${
                      isCrit ? "bg-red-500/20 text-red-300" : "bg-slate-700/50 text-slate-400"
                    }`}
                  >
                    {inc.severity}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Severity Filter */}
          <div className="shrink-0 flex items-center gap-1.5 pl-3 border-l border-white/10">
            <Filter className="h-3.5 w-3.5 text-slate-500" />
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="rounded-lg border border-white/10 bg-[#0c192c] px-2.5 py-1 text-[11px] font-bold text-slate-300 focus:border-emerald-500 focus:outline-none"
            >
              <option value="ALL">All Severities</option>
              <option value="CRITICAL">Critical Only</option>
              <option value="HIGH">High Only</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </div>
        </section>

        {/* ========================================================
            4. MAIN OPERATIONS WORKSPACE (MAP + DISPATCH PANEL)
            ======================================================== */}
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_460px] min-h-[580px]">
          {/* Left Column: Interactive Leaflet Geospatial Radar Map */}
          <div className="h-[580px] lg:h-auto">
            <GeoPulseMap
              incidents={incidents}
              responders={responders}
              zones={zones}
              selectedIncident={selectedIncident}
              onSelectIncident={(inc) => {
                setSelectedIncidentId(inc.id);
              }}
              selectedResponder={selectedResponder}
              onSelectResponder={(resp) => {
                setSelectedResponderId(resp.id);
              }}
              topRecommendation={recommendationData?.recommendation || null}
              onDispatch={handleDispatch}
            />
          </div>

          {/* Right Column: Incident Intelligence & Dispatch Action Panel */}
          <div className="h-full">
            <IncidentDetailPanel
              selectedIncident={selectedIncident}
              topRecommendation={recommendationData?.recommendation || null}
              alternatives={recommendationData?.alternatives || []}
              onDispatch={handleDispatch}
              isDispatching={isDispatching}
              onSelectResponder={(resp) => setSelectedResponderId(resp.id)}
            />
          </div>
        </section>

        {/* ========================================================
            5. RESPONDER INTELLIGENCE TELEMETRY & LIFECYCLE TABLE
            ======================================================== */}
        <section className="mt-6">
          <ResponderIntelligenceTable
            responders={responders}
            selectedIncident={selectedIncident}
            onDispatch={handleDispatch}
            onStatusChange={handleStatusChange}
            onSelectResponder={(resp) => setSelectedResponderId(resp.id)}
            selectedResponderId={selectedResponderId || undefined}
            isDispatching={isDispatching}
          />
        </section>
      </div>

      {/* Create Incident Modal */}
      <CreateIncidentModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onIncidentCreated={async (newInc) => {
          showToast(`Incident #${newInc.id.slice(-6)} logged to GeoPulse`, "success");
          setSelectedIncidentId(newInc.id);
          await refreshData();
        }}
      />
    </div>
  );
}
