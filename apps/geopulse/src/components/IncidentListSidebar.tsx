"use client";

import React, { useMemo, useState } from "react";
import { IncidentItem, IncidentSeverity, IncidentStatus } from "@/types/geopulse";
import {
  Activity,
  AlertCircle,
  Clock,
  Crosshair,
  Filter,
  Flame,
  MapPin,
  Plus,
  Search,
  ShieldAlert,
  Siren,
  Sparkles,
  Zap,
} from "lucide-react";

interface IncidentListSidebarProps {
  incidents: IncidentItem[];
  selectedIncidentId: string | null;
  onSelectIncident: (incident: IncidentItem) => void;
  onCenterIncident: (incident: IncidentItem) => void;
  onOpenCreateModal: () => void;
}

export default function IncidentListSidebar({
  incidents,
  selectedIncidentId,
  onSelectIncident,
  onCenterIncident,
  onOpenCreateModal,
}: IncidentListSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  const filteredIncidents = useMemo(() => {
    return incidents.filter((inc) => {
      const matchesSearch =
        inc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.requiredCapability.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSeverity =
        severityFilter === "ALL" ||
        inc.severity.toUpperCase() === severityFilter.toUpperCase();

      const matchesStatus =
        statusFilter === "ALL" ||
        (statusFilter === "ACTIVE"
          ? inc.status !== "RESOLVED" && inc.status !== "CLOSED"
          : statusFilter === "RESOLVED"
          ? inc.status === "RESOLVED" || inc.status === "CLOSED"
          : inc.status.toUpperCase() === statusFilter.toUpperCase());

      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }, [incidents, searchQuery, severityFilter, statusFilter]);

  const activeCount = incidents.filter(
    (i) => i.status !== "RESOLVED" && i.status !== "CLOSED"
  ).length;

  return (
    <div className="flex flex-col h-full rounded-[24px] border border-white/[0.08] bg-[#081220] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="border-b border-white/10 p-4 bg-[#091526]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Siren className="h-4 w-4 text-red-400" />
            <h2 className="text-sm font-black text-white tracking-tight">
              Incident Queue
            </h2>
          </div>
          <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase">
            {activeCount} Active
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-2.5">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Filter location or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px] font-bold">
          {["ALL", "CRITICAL", "HIGH", "ACTIVE", "RESOLVED"].map((f) => (
            <button
              key={f}
              onClick={() => {
                if (f === "ACTIVE" || f === "RESOLVED") {
                  setStatusFilter(f);
                } else {
                  setSeverityFilter(f);
                  if (f === "ALL") setStatusFilter("ALL");
                }
              }}
              className={`px-2 py-0.5 rounded-lg transition shrink-0 ${
                (severityFilter === f && statusFilter === "ALL") ||
                (statusFilter === f)
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Incidents List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredIncidents.length === 0 ? (
          <div className="p-6 text-center text-slate-500 text-xs">
            No incidents match your filter criteria.
          </div>
        ) : (
          filteredIncidents.map((inc) => {
            const isSelected = selectedIncidentId === inc.id;
            const isCritical = inc.severity === "CRITICAL";
            const isHigh = inc.severity === "HIGH";
            const isResolved =
              inc.status === "RESOLVED" || inc.status === "CLOSED";

            return (
              <div
                key={inc.id}
                onClick={() => onSelectIncident(inc)}
                className={`group relative flex flex-col p-3 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full shrink-0 ${
                        isCritical
                          ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]"
                          : isHigh
                          ? "bg-orange-400"
                          : isResolved
                          ? "bg-emerald-400"
                          : "bg-blue-400"
                      }`}
                    />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      #{inc.id.slice(-5)}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                      isCritical
                        ? "bg-red-500/20 text-red-300 border border-red-500/30"
                        : isHigh
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                        : isResolved
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {inc.severity}
                  </span>
                </div>

                <h3 className="mt-1.5 text-xs font-black text-white tracking-tight leading-snug">
                  {inc.title || inc.type}
                </h3>

                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-1 truncate max-w-[170px]" title={inc.location}>
                    <MapPin className="h-3 w-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{inc.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onCenterIncident(inc);
                      }}
                      title="Center map on this incident"
                      className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
                    >
                      <Crosshair className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[9px]">
                  <span className="font-semibold text-slate-400">
                    Req: <span className="text-slate-200">{inc.requiredCapability}</span>
                  </span>
                  <span className="font-mono text-slate-500 uppercase font-bold">
                    {inc.status}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer Add Incident Button */}
      <div className="p-3 border-t border-white/10 bg-[#091526]">
        <button
          type="button"
          onClick={onOpenCreateModal}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-white/10 py-2 text-xs font-bold transition"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Report New Incident</span>
        </button>
      </div>
    </div>
  );
}
