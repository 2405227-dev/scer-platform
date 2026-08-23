"use client";

import { useState, useEffect, useMemo } from "react";
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Clock,
  MapPin,
  User,
  Activity,
  Filter,
  Sparkles,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Plus,
  Radio,
  Check,
  Send,
  Zap,
  Flame,
  Volume2,
  MessageSquare,
  ExternalLink,
  Bot,
  Copy,
  PhoneCall,
  LayoutDashboard,
} from "lucide-react";

interface TimelineEntry {
  id: string;
  action: string;
  actor: string;
  details?: string | null;
  createdAt: string | Date;
}

interface IncidentMessage {
  id: string;
  senderType: "STUDENT" | "RESPONDER" | "SYSTEM";
  senderName: string;
  content: string;
  createdAt: string | Date;
}

interface Incident {
  id: string;
  type: string;
  severity: string;
  status: string;
  location: string;
  description?: string | null;
  reporterId?: string | null;
  reporterName?: string | null;
  assignedTo?: string | null;
  assignedToName?: string | null;
  assignedAt?: string | Date | null;
  acknowledgedAt?: string | Date | null;
  resolvedAt?: string | Date | null;
  resolvedBy?: string | null;
  priority: number;
  aiAnalysisStatus?: string | null;
  aiAnalysisSummary?: string | null;
  aiActionPlan?: string | null;
  telegramChatId?: string | null;
  telegramMessageId?: string | null;
  createdAt: string | Date;
  timeline?: TimelineEntry[];
  messages?: IncidentMessage[];
}

interface Responder {
  id: string;
  name: string;
  email: string;
  status: string;
  skills?: string;
  availability?: boolean;
  telegramChatId?: string | null;
  telegramUsername?: string | null;
  telegramConnectedAt?: string | Date | null;
}

type IncidentFilter = "ALL" | "PENDING" | "ACTIVE" | "RESOLVED";

const SCER_API_BASE = process.env.NEXT_PUBLIC_SCER_API_URL || "http://localhost:3000";

const DEFAULT_DEMO_RESPONDERS: Responder[] = [
  {
    id: "resp-alpha-01",
    name: "Response Team Alpha",
    email: "alpha@campusresq.org",
    status: "AVAILABLE",
    availability: true,
  },
  {
    id: "resp-bravo-02",
    name: "Campus Fire & Hazmat Brigade",
    email: "hazmat@campusresq.org",
    status: "AVAILABLE",
    availability: true,
  },
  {
    id: "resp-charlie-03",
    name: "Tactical Security Unit",
    email: "security@campusresq.org",
    status: "AVAILABLE",
    availability: true,
  },
];

export function LiveResponseClient({
  initialIncidents = [],
  initialResponders = [],
}: {
  initialIncidents: Incident[];
  initialResponders: Responder[];
}) {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [responders, setResponders] = useState<Responder[]>(
    initialResponders.length > 0 ? initialResponders : DEFAULT_DEMO_RESPONDERS
  );
  const [selectedFilter, setSelectedFilter] = useState<IncidentFilter>("ALL");
  const [selectedResponderId, setSelectedResponderId] = useState<string>("resp-alpha-01");
  const [loading, setLoading] = useState(false);
  const [expandedAiIncidentIds, setExpandedAiIncidentIds] = useState<Record<string, boolean>>({});
  const [expandedChatIncidentIds, setExpandedChatIncidentIds] = useState<Record<string, boolean>>({});
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  // Telegram Linking Modal State
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
  const [telegramLinkData, setTelegramLinkData] = useState<{
    token?: string;
    deepLink?: string;
    botUsername?: string;
  } | null>(null);
  const [generatingLink, setGeneratingLink] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // In-card chat inputs
  const [chatInputs, setChatInputs] = useState<Record<string, string>>({});
  const [chatSendingId, setChatSendingId] = useState<string | null>(null);

  // Quick Simulation Modal State
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportForm, setReportForm] = useState({
    type: "Campus Intrusion / Unauthorized Access",
    severity: "CRITICAL",
    location: "High-Voltage Power Utility Vault (Sector 4)",
    description: "Motion detected near restricted substation perimeter. Immediate tactical verification required.",
    reporterName: "Student Security Watch / Central Gate",
  });

  // Effective responder list ensuring non-empty fallback
  const effectiveResponders = responders.length > 0 ? responders : DEFAULT_DEMO_RESPONDERS;

  // Current active responder object
  const activeResponder = useMemo(() => {
    const found = effectiveResponders.find((r) => r.id === selectedResponderId);
    return found || effectiveResponders[0] || DEFAULT_DEMO_RESPONDERS[0];
  }, [selectedResponderId, effectiveResponders]);

  // Sync / Refresh data from SCER Core backend (Port 3000)
  const refreshData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${SCER_API_BASE}/api/response-team`);
      if (res.ok) {
        const data = await res.json();
        if (data.incidents) setIncidents(data.incidents);
        if (data.responders && data.responders.length > 0) {
          setResponders(data.responders);
        }
      }
    } catch (e) {
      console.error("Failed to refresh live response:", e);
    } finally {
      setLoading(false);
    }
  };

  // SSE Live Event listener for real-time synchronization from Port 3000
  useEffect(() => {
    const eventSource = new EventSource(`${SCER_API_BASE}/api/events/stream`);
    eventSource.onmessage = (e) => {
      try {
        const event = JSON.parse(e.data);
        if (
          event.type === "incident.created" ||
          event.type === "incident.updated" ||
          event.type === "responder.status.changed"
        ) {
          refreshData();
        }
      } catch (err) {
        // ignore parse error
      }
    };
    return () => {
      eventSource.close();
    };
  }, []);

  // Filter & Sort Logic matching CampusResQ & SCER priority hierarchy
  const filteredIncidents = useMemo(() => {
    return incidents
      .filter((incident) => {
        // Status filter
        const s = (incident.status || "pending").toLowerCase();
        switch (selectedFilter) {
          case "ALL":
            return true;
          case "PENDING":
            return s === "pending" || s === "reported" || s === "new" || s === "open";
          case "ACTIVE":
            return (
              s === "accepted" ||
              s === "in_progress" ||
              s === "assigned" ||
              s === "acknowledged" ||
              s === "active"
            );
          case "RESOLVED":
            return s === "resolved" || s === "closed";
          default:
            return true;
        }
      })
      .sort((a, b) => {
        // Severity Rank: CRITICAL (1) > HIGH (2) > MEDIUM (3) > LOW (4)
        const getRank = (sev?: string) => {
          const s = (sev || "").toUpperCase();
          if (s === "CRITICAL") return 1;
          if (s === "HIGH") return 2;
          if (s === "MEDIUM") return 3;
          if (s === "LOW") return 4;
          return 5;
        };
        const rankDiff = getRank(a.severity) - getRank(b.severity);
        if (rankDiff !== 0) return rankDiff;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [incidents, selectedFilter]);

  // Metric counts
  const criticalCount = incidents.filter(
    (i) => (i.severity || "").toUpperCase() === "CRITICAL"
  ).length;
  const highCount = incidents.filter(
    (i) => (i.severity || "").toUpperCase() === "HIGH"
  ).length;
  const activeCount = incidents.filter((i) => {
    const s = (i.status || "").toLowerCase();
    return (
      s === "accepted" ||
      s === "in_progress" ||
      s === "assigned" ||
      s === "acknowledged" ||
      s === "active"
    );
  }).length;
  const pendingCount = incidents.filter((i) => {
    const s = (i.status || "").toLowerCase();
    return s === "pending" || s === "reported" || s === "new" || s === "open";
  }).length;

  // Status transition handler (server-validated on Port 3000 with immediate optimistic UI update)
  const handleUpdateStatus = async (
    incidentId: string,
    targetStatus: "accepted" | "in_progress" | "resolved",
    responderName?: string,
    responderId?: string
  ) => {
    setActionLoadingId(incidentId);
    const respName = responderName || activeResponder?.name || "Response Team Alpha";
    const respId = responderId || activeResponder?.id || "resp-alpha-01";

    // Optimistic UI update
    setIncidents((prev) =>
      prev.map((inc) => {
        if (inc.id === incidentId) {
          return {
            ...inc,
            status: targetStatus,
            assignedTo: targetStatus === "accepted" ? respId : inc.assignedTo,
            assignedToName: targetStatus === "accepted" ? respName : (inc.assignedToName || respName),
            assignedAt: targetStatus === "accepted" ? new Date().toISOString() : inc.assignedAt,
            acknowledgedAt: targetStatus === "accepted" ? new Date().toISOString() : inc.acknowledgedAt,
            resolvedAt: targetStatus === "resolved" ? new Date().toISOString() : inc.resolvedAt,
            resolvedBy: targetStatus === "resolved" ? respName : inc.resolvedBy,
          };
        }
        return inc;
      })
    );

    try {
      const res = await fetch(`${SCER_API_BASE}/api/incidents/${incidentId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: targetStatus,
          assignedTo: respId,
          assignedToName: respName,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.incident) {
          setIncidents((prev) =>
            prev.map((inc) => (inc.id === incidentId ? { ...inc, ...data.incident } : inc))
          );
        }
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Server status transition error:", errorData);
        // Rollback via refresh if rejected
        await refreshData();
      }
    } catch (err) {
      console.error("Status transition failed:", err);
      await refreshData();
    } finally {
      setActionLoadingId(null);
    }
  };

  // Generate Telegram link token for responder
  const handleGenerateTelegramLink = async (responderId: string) => {
    setGeneratingLink(true);
    try {
      const res = await fetch(`${SCER_API_BASE}/api/responders/${responderId}/telegram-link`, {
        method: "POST",
      });
      if (res.ok) {
        const data = await res.json();
        setTelegramLinkData(data);
        setIsTelegramModalOpen(true);
      }
    } catch (err) {
      console.error("Failed to generate Telegram link:", err);
    } finally {
      setGeneratingLink(false);
    }
  };

  // Unlink Telegram account
  const handleUnlinkTelegram = async (responderId: string) => {
    if (!confirm("Are you sure you want to disconnect this Telegram account?")) return;
    try {
      await fetch(`${SCER_API_BASE}/api/responders/${responderId}/telegram-link`, { method: "DELETE" });
      await refreshData();
    } catch (err) {
      console.error(err);
    }
  };

  // Send message to Telegram responder from dashboard
  const handleSendCardMessage = async (incidentId: string) => {
    const text = chatInputs[incidentId]?.trim();
    if (!text) return;

    setChatSendingId(incidentId);
    try {
      const res = await fetch(`${SCER_API_BASE}/api/incidents/${incidentId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: text,
          senderName: "Responder Dispatch",
          senderType: "SYSTEM",
        }),
      });

      if (res.ok) {
        setChatInputs((prev) => ({ ...prev, [incidentId]: "" }));
        await refreshData();
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setChatSendingId(null);
    }
  };

  // Quick report submission
  const handleCreateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${SCER_API_BASE}/api/incidents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: reportForm.type,
          severity: reportForm.severity,
          location: reportForm.location,
          description: reportForm.description,
          reporterName: reportForm.reporterName,
          status: "pending",
        }),
      });
      if (res.ok) {
        setIsReportModalOpen(false);
        await refreshData();
      }
    } catch (err) {
      console.error("Failed to report incident:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleAiAccordion = (id: string) => {
    setExpandedAiIncidentIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleChatAccordion = (id: string) => {
    setExpandedChatIncidentIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#050a12] text-white selection:bg-cyan-500 selection:text-black">
      {/* BACKGROUND AMBIENCE */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[5%] top-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />
        <div className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.035] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-[1550px] px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        {/* TOP CONTROLS & BREADCRUMB */}
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-400">
                SCER Live Response Center
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Dedicated Responder UI (Port 3004)
              </span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Live Response &amp; Incident Coordination
            </h1>
          </div>

          {/* ACTIONS & RESPONDER SELECTOR */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* ACTIVE RESPONDER PROFILE SWITCHER */}
            <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md">
              <User className="h-4 w-4 text-cyan-400" />
              <div className="text-left">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Active Responder Profile
                </div>
                <select
                  value={selectedResponderId}
                  onChange={(e) => setSelectedResponderId(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer"
                >
                  <option value="ALL" className="bg-slate-900 text-white">
                    All Responders (Global Queue)
                  </option>
                  {responders.map((r) => (
                    <option key={r.id} value={r.id} className="bg-slate-900 text-white">
                      {r.name} {r.telegramChatId ? "✈️ (Telegram Linked)" : "(No Telegram)"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* TELEGRAM LINK BUTTON FOR SELECTED RESPONDER */}
            {activeResponder && (
              <button
                onClick={() => handleGenerateTelegramLink(activeResponder.id)}
                disabled={generatingLink}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-black transition ${
                  activeResponder.telegramChatId
                    ? "border border-sky-500/30 bg-sky-500/15 text-sky-300 hover:bg-sky-500/25"
                    : "border border-amber-500/30 bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                }`}
              >
                <Bot className="h-4 w-4" />
                <span>
                  {activeResponder.telegramChatId
                    ? `✈️ Telegram: @${activeResponder.telegramUsername || "Linked"}`
                    : "Connect Telegram Bot"}
                </span>
              </button>
            )}

            {/* REFRESH */}
            <button
              onClick={refreshData}
              disabled={loading}
              title="Refresh Queue"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-300 transition hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>

            {/* QUICK REPORT BUTTON */}
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition hover:bg-cyan-500/20 hover:text-white active:scale-95"
            >
              <Plus className="h-4 w-4" />
              <span>Report New Incident</span>
            </button>
          </div>
        </div>

        {/* PRIORITY & STATUS METRIC TILES */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                Critical Threats
              </span>
              <ShieldAlert className="h-4 w-4 text-red-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-black text-white sm:text-3xl">
                {criticalCount}
              </span>
              <span className="text-[10px] font-semibold text-red-300">
                Immediate Action
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                High Priority
              </span>
              <AlertTriangle className="h-4 w-4 text-amber-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-black text-white sm:text-3xl">
                {highCount}
              </span>
              <span className="text-[10px] font-semibold text-amber-300">
                Elevated Risk
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                Active Responses
              </span>
              <Radio className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-black text-white sm:text-3xl">
                {activeCount}
              </span>
              <span className="text-[10px] font-semibold text-cyan-300">
                Units Handling
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/[0.04] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                Telegram Responders
              </span>
              <Bot className="h-4 w-4 text-sky-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-black text-white sm:text-3xl">
                {responders.filter((r) => r.telegramChatId).length} / {responders.length}
              </span>
              <span className="text-[10px] font-semibold text-sky-300">
                Bot Linked
              </span>
            </div>
          </div>
        </div>

        {/* FILTER CHIPS (CAMPUSRESQ FILTER BAR) */}
        <div className="mb-6 flex flex-wrap items-center gap-2 rounded-2xl border border-white/[0.06] bg-[#07111e]/70 p-2 backdrop-blur-xl">
          <button
            onClick={() => setSelectedFilter("ALL")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
              selectedFilter === "ALL"
                ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span>All Incidents</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[9px] font-black ${
                selectedFilter === "ALL" ? "bg-black/20 text-black" : "bg-white/[0.08] text-slate-300"
              }`}
            >
              {incidents.length}
            </span>
          </button>

          <button
            onClick={() => setSelectedFilter("PENDING")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
              selectedFilter === "PENDING"
                ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span>Pending</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[9px] font-black ${
                selectedFilter === "PENDING" ? "bg-black/20 text-black" : "bg-white/[0.08] text-slate-300"
              }`}
            >
              {pendingCount}
            </span>
          </button>

          <button
            onClick={() => setSelectedFilter("ACTIVE")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
              selectedFilter === "ACTIVE"
                ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span>Active (In Progress)</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[9px] font-black ${
                selectedFilter === "ACTIVE" ? "bg-black/20 text-black" : "bg-white/[0.08] text-slate-300"
              }`}
            >
              {activeCount}
            </span>
          </button>

          <button
            onClick={() => setSelectedFilter("RESOLVED")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
              selectedFilter === "RESOLVED"
                ? "bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span>Resolved</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[9px] font-black ${
                selectedFilter === "RESOLVED" ? "bg-black/20 text-white" : "bg-white/[0.08] text-slate-300"
              }`}
            >
              {incidents.filter((i) => (i.status || "").toLowerCase() === "resolved").length}
            </span>
          </button>
        </div>

        {/* INCIDENTS LIST */}
        <div className="space-y-4">
          {filteredIncidents.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/[0.06] bg-[#07111e]/40 py-16 text-center backdrop-blur-xl">
              <CheckCircle2 className="h-12 w-12 text-emerald-400/50 mb-3" />
              <h3 className="text-lg font-bold text-white">No Incidents in this Category</h3>
              <p className="mt-1 text-xs text-slate-400 max-w-md">
                All campus sectors are stable. Click &quot;Report New Incident&quot; or change your filter criteria.
              </p>
            </div>
          ) : (
            filteredIncidents.map((incident) => {
              const statusNormalized = (incident.status || "pending").toLowerCase();
              const severityNormalized = (incident.severity || "MEDIUM").toUpperCase();
              const isAiExpanded = expandedAiIncidentIds[incident.id];
              const isChatExpanded = expandedChatIncidentIds[incident.id];
              const isActionLoading = actionLoadingId === incident.id;
              const incidentMessages = incident.messages || [];

              return (
                <div
                  key={incident.id}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    severityNormalized === "CRITICAL"
                      ? "border-red-500/30 bg-[#0d1624]/90 hover:border-red-500/50 shadow-[0_4px_30px_rgba(239,68,68,0.05)]"
                      : severityNormalized === "HIGH"
                      ? "border-amber-500/25 bg-[#0a1422]/90 hover:border-amber-500/40 shadow-[0_4px_30px_rgba(245,158,11,0.05)]"
                      : "border-white/[0.08] bg-[#07111e]/90 hover:border-white/[0.18]"
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* CARD TOP ROW */}
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-base font-black text-white sm:text-lg">
                          {incident.type}
                        </span>

                        {/* SEVERITY BADGE */}
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                            severityNormalized === "CRITICAL"
                              ? "bg-red-500/20 text-red-400 border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                              : severityNormalized === "HIGH"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                              : severityNormalized === "MEDIUM"
                              ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          }`}
                        >
                          {severityNormalized}
                        </span>

                        {/* STATUS BADGE */}
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                            statusNormalized === "resolved"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : statusNormalized === "in_progress" || statusNormalized === "accepted"
                              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse"
                              : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          }`}
                        >
                          {statusNormalized === "in_progress"
                            ? "IN PROGRESS"
                            : statusNormalized.toUpperCase()}
                        </span>

                        {/* TELEGRAM DISPATCH STATUS BADGE */}
                        <span className="rounded-full bg-sky-500/15 border border-sky-500/30 px-2.5 py-0.5 text-[9px] font-bold text-sky-300 flex items-center gap-1">
                          <Bot className="h-3 w-3" />
                          <span>Telegram Synced</span>
                        </span>
                      </div>

                      {/* TIMESTAMP */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <Clock className="h-3.5 w-3.5 text-slate-500" />
                        <span>
                          {new Date(incident.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>

                    {/* ASSIGNED RESPONDER BANNER (IF ASSIGNED) */}
                    {incident.assignedToName && (
                      <div className="mt-3.5 flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1.5 text-xs text-cyan-300">
                        <User className="h-3.5 w-3.5 text-cyan-400" />
                        <span className="font-semibold">
                          Assigned to: <strong className="font-black text-white">{incident.assignedToName}</strong>
                        </span>
                        {incident.assignedAt && (
                          <span className="text-[10px] text-slate-400 font-mono ml-auto">
                            Assigned {new Date(incident.assignedAt).toLocaleTimeString()}
                          </span>
                        )}
                      </div>
                    )}

                    {/* DETAILS & LOCATION */}
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                        <MapPin className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>📍 {incident.location}</span>
                      </div>

                      {incident.reporterName && (
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                          <User className="h-4 w-4 text-slate-500 shrink-0" />
                          <span>Reported by: <strong className="text-slate-300">{incident.reporterName}</strong></span>
                        </div>
                      )}
                    </div>

                    {/* DESCRIPTION BODY */}
                    {incident.description && (
                      <p className="mt-3 text-xs leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                        {incident.description}
                      </p>
                    )}

                    {/* TWO-WAY TELEGRAM LIVE CHAT ACCORDION */}
                    <div className="mt-4">
                      <button
                        onClick={() => toggleChatAccordion(incident.id)}
                        className="flex w-full items-center justify-between rounded-xl border border-sky-500/25 bg-sky-500/[0.08] px-3.5 py-2 text-xs font-bold text-sky-200 transition hover:bg-sky-500/15"
                      >
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-sky-400" />
                          <span>Two-Way Telegram Conversation Thread</span>
                          <span className="rounded bg-sky-500/30 px-1.5 py-0.2 text-[9px] font-black uppercase text-sky-100">
                            {incidentMessages.length} Messages
                          </span>
                        </div>
                        {isChatExpanded ? (
                          <ChevronUp className="h-4 w-4 text-sky-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-sky-400" />
                        )}
                      </button>

                      {isChatExpanded && (
                        <div className="mt-2 rounded-xl border border-sky-500/20 bg-[#081324] p-4 text-xs text-slate-300 space-y-3">
                          <div className="max-h-[220px] overflow-y-auto space-y-2 pr-1">
                            {incidentMessages.length === 0 ? (
                              <p className="text-[11px] text-slate-500 italic text-center py-2">
                                No messages yet. Responders can reply directly in Telegram or you can send updates below.
                              </p>
                            ) : (
                              incidentMessages.map((msg) => (
                                <div
                                  key={msg.id}
                                  className={`p-2.5 rounded-xl text-xs ${
                                    msg.senderType === "RESPONDER"
                                      ? "bg-sky-950/70 border border-sky-500/30 text-sky-100"
                                      : msg.senderType === "STUDENT"
                                      ? "bg-cyan-950/70 border border-cyan-500/30 text-cyan-100"
                                      : "bg-white/[0.04] text-slate-400 font-mono text-[10px]"
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <span className="font-bold text-[10px] uppercase">
                                      {msg.senderType === "RESPONDER" ? "✈️ Telegram Responder" : msg.senderName}
                                    </span>
                                    <span className="text-[9px] opacity-60">
                                      {new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </span>
                                  </div>
                                  <p>{msg.content}</p>
                                </div>
                              ))
                            )}
                          </div>

                          {/* SEND MESSAGE FORM */}
                          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                            <input
                              type="text"
                              value={chatInputs[incident.id] || ""}
                              onChange={(e) =>
                                setChatInputs({ ...chatInputs, [incident.id]: e.target.value })
                              }
                              placeholder="Send update (delivers directly to responder's Telegram)..."
                              className="flex-1 rounded-xl border border-white/[0.1] bg-white/[0.04] px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-sky-400"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleSendCardMessage(incident.id);
                                }
                              }}
                            />
                            <button
                              onClick={() => handleSendCardMessage(incident.id)}
                              disabled={chatSendingId === incident.id || !chatInputs[incident.id]?.trim()}
                              className="flex items-center gap-1.5 rounded-xl bg-sky-500 px-3.5 py-2 text-xs font-black text-black shadow-md hover:bg-sky-400 disabled:opacity-50"
                            >
                              <Send className="h-3.5 w-3.5" />
                              <span>Send</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* AI ANALYSIS SECTION */}
                    <div className="mt-3">
                      <button
                        onClick={() => toggleAiAccordion(incident.id)}
                        className="flex w-full items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/[0.06] px-3.5 py-2 text-xs font-bold text-purple-300 transition hover:bg-purple-500/10"
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-purple-400" />
                          <span>AI Emergency Triage &amp; Analysis</span>
                          <span className="rounded bg-purple-500/30 px-1.5 py-0.2 text-[9px] font-black uppercase text-purple-200">
                            {incident.aiAnalysisStatus || "COMPLETED"}
                          </span>
                        </div>
                        {isAiExpanded ? (
                          <ChevronUp className="h-4 w-4 text-purple-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-purple-400" />
                        )}
                      </button>

                      {isAiExpanded && (
                        <div className="mt-2 rounded-xl border border-purple-500/20 bg-[#0c1220] p-4 text-xs text-slate-300 space-y-3">
                          <div>
                            <div className="font-bold text-purple-300 uppercase text-[10px] tracking-wider mb-1">
                              Threat Assessment &amp; Context
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                              {incident.aiAnalysisSummary ||
                                `Automated AI risk model evaluated location '${incident.location}' with severity score calculated at ${severityNormalized}. High-confidence response dispatch recommended.`}
                            </p>
                          </div>

                          <div>
                            <div className="font-bold text-cyan-300 uppercase text-[10px] tracking-wider mb-1.5">
                              Recommended Immediate Actions
                            </div>
                            <ul className="space-y-1 text-slate-300">
                              <li className="flex items-center gap-2">
                                <Check className="h-3.5 w-3.5 text-emerald-400" />
                                <span>Dispatch authorized response personnel with rapid perimeter lockdown kits.</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-3.5 w-3.5 text-emerald-400" />
                                <span>Broadcast safety alert via Smart Notification Engine to adjacent sector units.</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-3.5 w-3.5 text-emerald-400" />
                                <span>Maintain active telemetry via GeoPulse satellite radar.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* INTERACTIVE WORKFLOW BUTTONS */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                      <div className="text-[11px] font-bold text-slate-400">
                        Workflow Action State (or update directly via Telegram reply):
                      </div>

                      <div className="flex items-center gap-2">
                        {/* PENDING / REPORTED / NEW / OPEN -> ACCEPT INCIDENT */}
                        {(statusNormalized === "pending" ||
                          statusNormalized === "reported" ||
                          statusNormalized === "new" ||
                          statusNormalized === "open") && (
                          <button
                            id={`btn-accept-${incident.id}`}
                            onClick={() =>
                              handleUpdateStatus(
                                incident.id,
                                "accepted",
                                activeResponder?.name || "Response Team Alpha",
                                activeResponder?.id || "resp-alpha-01"
                              )
                            }
                            disabled={isActionLoading}
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] transition hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95 disabled:opacity-50"
                          >
                            <Zap className="h-4 w-4" />
                            <span>{isActionLoading ? "Assigning..." : "ACCEPT INCIDENT"}</span>
                          </button>
                        )}

                        {/* ACCEPTED / ASSIGNED / ACKNOWLEDGED / ACTIVE -> START RESPONSE */}
                        {(statusNormalized === "accepted" ||
                          statusNormalized === "assigned" ||
                          statusNormalized === "acknowledged" ||
                          statusNormalized === "active") && (
                          <button
                            id={`btn-start-${incident.id}`}
                            onClick={() =>
                              handleUpdateStatus(incident.id, "in_progress")
                            }
                            disabled={isActionLoading}
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[0_0_20px_rgba(245,158,11,0.35)] transition hover:from-amber-400 hover:to-orange-500 active:scale-95 disabled:opacity-50"
                          >
                            <Radio className="h-4 w-4" />
                            <span>{isActionLoading ? "Starting..." : "START RESPONSE"}</span>
                          </button>
                        )}

                        {/* IN_PROGRESS -> MARK AS RESOLVED */}
                        {statusNormalized === "in_progress" && (
                          <button
                            id={`btn-resolve-${incident.id}`}
                            onClick={() =>
                              handleUpdateStatus(
                                incident.id,
                                "resolved",
                                activeResponder?.name || incident.assignedToName || "Response Team Alpha"
                              )
                            }
                            disabled={isActionLoading}
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] transition hover:from-emerald-400 hover:to-teal-500 active:scale-95 disabled:opacity-50"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            <span>{isActionLoading ? "Resolving..." : "MARK AS RESOLVED"}</span>
                          </button>
                        )}

                        {/* RESOLVED / CLOSED -> STATUS BADGE */}
                        {(statusNormalized === "resolved" || statusNormalized === "closed") && (
                          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-black text-emerald-300">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            <span>✓ Incident Fully Resolved &amp; Logged</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      {/* TELEGRAM LINK MODAL */}
      {isTelegramModalOpen && telegramLinkData && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl border border-sky-500/30 bg-[#091526] p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="h-6 w-6 text-sky-400" />
              <h3 className="text-lg font-black text-white">Connect Telegram Bot</h3>
            </div>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Connect your Telegram account for <strong>{activeResponder?.name}</strong> to receive high-priority dispatches and reply to emergency incidents in real-time.
            </p>

            <div className="space-y-3 bg-black/30 p-4 rounded-2xl border border-white/[0.08]">
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">
                  1-Click Connection Deep Link:
                </div>
                <a
                  href={telegramLinkData.deepLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-black text-black shadow-md hover:bg-sky-400 transition"
                >
                  <span>Open @{telegramLinkData.botUsername} in Telegram</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">
                  Or Send This Link Code to the Bot:
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-white/[0.06] p-2.5 rounded-xl font-mono text-xs text-cyan-300 font-bold">
                    /start {telegramLinkData.token}
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`/start ${telegramLinkData.token}`);
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 2000);
                    }}
                    className="p-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-slate-300 hover:text-white"
                  >
                    {copiedLink ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              {activeResponder?.telegramChatId && (
                <button
                  type="button"
                  onClick={() => {
                    handleUnlinkTelegram(activeResponder.id);
                    setIsTelegramModalOpen(false);
                  }}
                  className="text-xs font-bold text-red-400 hover:underline"
                >
                  Disconnect Telegram
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsTelegramModalOpen(false)}
                className="ml-auto rounded-xl px-4 py-2 text-xs font-bold text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REPORT INCIDENT MODAL */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/[0.12] bg-[#091322] p-6 shadow-2xl">
            <h3 className="text-lg font-black text-white">Report Campus Emergency Incident</h3>
            <p className="mt-1 text-xs text-slate-400">
              Submit emergency parameters to the dispatch queue and Telegram bot channel.
            </p>

            <form onSubmit={handleCreateReport} className="mt-5 space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Incident Type / Category
                </label>
                <input
                  type="text"
                  required
                  value={reportForm.type}
                  onChange={(e) => setReportForm({ ...reportForm, type: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Severity Level
                  </label>
                  <select
                    value={reportForm.severity}
                    onChange={(e) => setReportForm({ ...reportForm, severity: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#0c1626] px-3 py-2.5 text-xs font-bold text-white outline-none focus:border-cyan-400"
                  >
                    <option value="CRITICAL">CRITICAL</option>
                    <option value="HIGH">HIGH</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="LOW">LOW</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Reporter Name / Source
                  </label>
                  <input
                    type="text"
                    required
                    value={reportForm.reporterName}
                    onChange={(e) => setReportForm({ ...reportForm, reporterName: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Campus Location
                </label>
                <input
                  type="text"
                  required
                  value={reportForm.location}
                  onChange={(e) => setReportForm({ ...reportForm, location: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Description / Situation Details
                </label>
                <textarea
                  rows={3}
                  value={reportForm.description}
                  onChange={(e) => setReportForm({ ...reportForm, description: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] p-3 text-xs text-white outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-cyan-500 px-5 py-2 text-xs font-black text-black shadow-[0_0_15px_rgba(34,211,238,0.4)] transition hover:bg-cyan-400 active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Dispatching..." : "Transmit Incident"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
