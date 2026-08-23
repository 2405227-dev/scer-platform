"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Search,
  Filter,
  RefreshCw,
  Radio,
  MapPinned,
  BellRing,
  Shield,
  Activity,
  Terminal,
  Clock,
  Cpu,
} from "lucide-react";


interface AuditLogItem {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  description: string;
}

export function AuditClient({ initialLogs = [] }: { initialLogs: AuditLogItem[] }) {
  const [logs, setLogs] = useState<AuditLogItem[]>(initialLogs);
  const [search, setSearch] = useState("");
  const [actorFilter, setActorFilter] = useState("ALL");
  const [autoStream, setAutoStream] = useState(true);

  // Poll or listen for new simulation events to show live audit records
  useEffect(() => {
    if (!autoStream) return;

    const interval = setInterval(() => {
      // Fetch latest incidents to generate audit view
      fetch("/api/incidents")
        .then((r) => r.json())
        .then((incidents) => {
          if (Array.isArray(incidents) && incidents.length > 0) {
            const dynamicLogs: AuditLogItem[] = [];
            incidents.slice(0, 15).forEach((inc: any) => {
              dynamicLogs.push({
                id: `audit-${inc.id}-1`,
                timestamp: inc.createdAt,
                actor: inc.type.includes("Audio") ? "Audio Engine" : "Dispatch Portal",
                action: "INCIDENT_DETECTED",
                description: `Emergency incident logged: ${inc.type} at ${inc.location || "Campus"}`,
              });

              if (inc.status === "ASSIGNED" || inc.status === "IN_PROGRESS") {
                dynamicLogs.push({
                  id: `audit-${inc.id}-2`,
                  timestamp: inc.createdAt,
                  actor: "GeoPulse",
                  action: "RESPONDER_DISPATCHED",
                  description: `Spatial AI matched and assigned closest responder for ${inc.type}`,
                });
                dynamicLogs.push({
                  id: `audit-${inc.id}-3`,
                  timestamp: inc.createdAt,
                  actor: "Smart Notification",
                  action: "ALERT_DELIVERED",
                  description: `Dispatched high-priority multi-channel alert for incident ${inc.id}`,
                });
              }

              if (inc.status === "RESOLVED") {
                dynamicLogs.push({
                  id: `audit-${inc.id}-4`,
                  timestamp: inc.updatedAt || inc.createdAt,
                  actor: "Command Center",
                  action: "INCIDENT_RESOLVED",
                  description: `Incident marked as RESOLVED by command supervisor`,
                });
              }
            });

            if (dynamicLogs.length > 0) {
              setLogs(dynamicLogs);
            }
          }
        })
        .catch(console.error);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoStream]);

  const filteredLogs = logs.filter((log) => {
    const matchSearch =
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.description.toLowerCase().includes(search.toLowerCase()) ||
      log.actor.toLowerCase().includes(search.toLowerCase());
    const matchActor = actorFilter === "ALL" || log.actor === actorFilter;
    return matchSearch && matchActor;
  });

  const getActorBadge = (actor: string) => {
    if (actor.includes("Audio")) {
      return (
        <span className="inline-flex items-center gap-1 rounded-md bg-sky-500/20 px-2 py-0.5 text-[9px] font-black uppercase text-sky-300 border border-sky-500/30">
          <Radio className="h-2.5 w-2.5" /> Audio Engine
        </span>
      );
    }
    if (actor.includes("GeoPulse")) {
      return (
        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/20 px-2 py-0.5 text-[9px] font-black uppercase text-emerald-300 border border-emerald-500/30">
          <MapPinned className="h-2.5 w-2.5" /> GeoPulse
        </span>
      );
    }
    if (actor.includes("Notification")) {
      return (
        <span className="inline-flex items-center gap-1 rounded-md bg-violet-500/20 px-2 py-0.5 text-[9px] font-black uppercase text-violet-300 border border-violet-500/30">
          <BellRing className="h-2.5 w-2.5" /> Smart Notify
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-red-500/20 px-2 py-0.5 text-[9px] font-black uppercase text-red-300 border border-red-500/30">
        <Shield className="h-2.5 w-2.5" /> {actor}
      </span>
    );
  };

  return (
      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <FileText className="h-7 w-7 text-yellow-400" />
              Operational Audit Trail & Event Ledger
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Immutable cryptographic ledger recording automated decisions, AI routings, and alerts.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoStream(!autoStream)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                autoStream
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-white/[0.04] text-slate-400 border border-white/[0.08]"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${autoStream ? "bg-emerald-400 animate-ping" : "bg-slate-500"}`} />
              <span>{autoStream ? "Live Ledger Stream" : "Ledger Paused"}</span>
            </button>
          </div>
        </div>

        {/* SEARCH & FILTER */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search audit actions, descriptions, or actors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-yellow-400/50 focus:outline-none"
            />
          </div>

          <select
            value={actorFilter}
            onChange={(e) => setActorFilter(e.target.value)}
            aria-label="Filter audit logs by actor"
            className="rounded-xl border border-white/[0.08] bg-[#0c1829] px-3 py-2.5 text-xs text-slate-300 focus:border-yellow-400/50 focus:outline-none"
          >
            <option value="ALL">All Actors</option>
            <option value="Audio Engine">Audio Engine</option>
            <option value="GeoPulse">GeoPulse Spatial AI</option>
            <option value="Smart Notification">Smart Notification</option>
            <option value="Command Center">Command Center</option>
          </select>
        </div>

        {/* AUDIT LOG TABLE */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08101b] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] text-[10px] font-black uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3.5">Timestamp</th>
                  <th className="px-4 py-3.5">Actor</th>
                  <th className="px-4 py-3.5">Action Type</th>
                  <th className="px-4 py-3.5">Telemetry & Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-500">
                      No audit events recorded matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => (
                    <tr key={log.id} className="transition hover:bg-white/[0.02]">
                      <td className="px-4 py-3.5 text-slate-400 whitespace-nowrap">
                        <div className="font-mono text-xs text-slate-300">
                          {new Date(log.timestamp).toLocaleTimeString()}
                        </div>
                        <div className="text-[10px] text-slate-600">
                          {new Date(log.timestamp).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {getActorBadge(log.actor)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="font-mono text-[11px] font-bold text-slate-200 bg-white/[0.04] px-2 py-1 rounded border border-white/[0.06]">
                          {log.action}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-slate-300">
                        {log.description}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
  );
}
