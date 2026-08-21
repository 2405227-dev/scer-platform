"use client";

import React, { useState } from "react";
import {
  IncidentItem,
  ResponderItem,
  ResponderStatus,
} from "@/types/geopulse";
import { calculateETA, calculateHaversineDistanceKm } from "@/lib/geo-engine";
import {
  Check,
  ChevronDown,
  Filter,
  MoreVertical,
  Navigation,
  Radio,
  Search,
  Send,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

interface ResponderIntelligenceTableProps {
  responders: ResponderItem[];
  selectedIncident: IncidentItem | null;
  onDispatch?: (incidentId: string, responderId: string) => Promise<void>;
  onStatusChange?: (responderId: string, newStatus: ResponderStatus) => Promise<void>;
  onSelectResponder: (responder: ResponderItem) => void;
  selectedResponderId?: string;
  isDispatching?: boolean;
}

export default function ResponderIntelligenceTable({
  responders,
  selectedIncident,
  onDispatch,
  onStatusChange,
  onSelectResponder,
  selectedResponderId,
  isDispatching = false,
}: ResponderIntelligenceTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [openStatusMenuId, setOpenStatusMenuId] = useState<string | null>(null);

  // Compute live distance and ETA for each responder relative to selected incident
  const enrichedResponders = responders.map((r) => {
    let distanceKm: number | null = null;
    let etaFormatted = "N/A";

    if (selectedIncident) {
      distanceKm = calculateHaversineDistanceKm(
        selectedIncident.latitude,
        selectedIncident.longitude,
        r.latitude,
        r.longitude
      );
      const etaCalc = calculateETA(distanceKm, r.speedKmH);
      etaFormatted = etaCalc.formatted;
    }

    return {
      ...r,
      distanceKm,
      etaFormatted,
    };
  });

  // Filter responders based on search, status, type
  const filteredResponders = enrichedResponders.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.capabilities.some((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesStatus =
      statusFilter === "ALL" ||
      r.status.toUpperCase() === statusFilter.toUpperCase();

    const matchesType =
      typeFilter === "ALL" ||
      r.type.toUpperCase().includes(typeFilter.toUpperCase());

    return matchesSearch && matchesStatus && matchesType;
  });

  // Sort by distance if incident is selected
  filteredResponders.sort((a, b) => {
    if (a.distanceKm !== null && b.distanceKm !== null) {
      return a.distanceKm - b.distanceKm;
    }
    return a.name.localeCompare(b.name);
  });

  const statuses: ResponderStatus[] = [
    "AVAILABLE",
    "BUSY",
    "EN_ROUTE",
    "ON_SCENE",
    "OFFLINE",
  ];

  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-[#081220] overflow-hidden shadow-2xl">
      {/* Header & Controls Bar */}
      <div className="flex flex-col gap-4 border-b border-white/10 p-5 lg:flex-row lg:items-center lg:justify-between bg-[#091526]">
        <div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-emerald-400" />
            <h2 className="text-base font-black text-white tracking-tight">
              Responder Intelligence & Telemetry
            </h2>
          </div>
          <p className="mt-0.5 text-xs text-slate-400">
            Live availability, geospatial proximity, capability indexing and lifecycle management
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search units or capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-52 rounded-xl border border-white/10 bg-white/5 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#0c192c] px-3 py-1.5 text-xs font-bold text-slate-300 focus:border-emerald-500 focus:outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="AVAILABLE">Available</option>
            <option value="BUSY">Busy</option>
            <option value="EN_ROUTE">En Route</option>
            <option value="ON_SCENE">On Scene</option>
            <option value="OFFLINE">Offline</option>
          </select>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#0c192c] px-3 py-1.5 text-xs font-bold text-slate-300 focus:border-emerald-500 focus:outline-none"
          >
            <option value="ALL">All Specializations</option>
            <option value="MEDICAL">Medical Teams</option>
            <option value="SECURITY">Security Patrols</option>
            <option value="FIRE">Fire & Hazmat</option>
            <option value="EMERGENCY">Emergency Response</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-white/5 bg-white/[0.01] text-[10px] font-black uppercase tracking-wider text-slate-500">
            <tr>
              <th className="py-3.5 px-4">#</th>
              <th className="py-3.5 px-4">Responder Unit</th>
              <th className="py-3.5 px-4">Type</th>
              <th className="py-3.5 px-4">Proximity (Haversine)</th>
              <th className="py-3.5 px-4">Speed / ETA</th>
              <th className="py-3.5 px-4">Status Lifecycle</th>
              <th className="py-3.5 px-4">Capabilities</th>
              <th className="py-3.5 px-4 text-right">Dispatch Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredResponders.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-500">
                  No responders match the current search or filter criteria.
                </td>
              </tr>
            ) : (
              filteredResponders.map((resp, index) => {
                const isSelected = selectedResponderId === resp.id;

                let statusBadge = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
                if (resp.status === "BUSY") statusBadge = "bg-amber-500/10 text-amber-400 border-amber-500/30";
                else if (resp.status === "EN_ROUTE") statusBadge = "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
                else if (resp.status === "ON_SCENE") statusBadge = "bg-purple-500/10 text-purple-400 border-purple-500/30";
                else if (resp.status === "OFFLINE") statusBadge = "bg-slate-700/20 text-slate-400 border-slate-700/40";

                const isDispatchable =
                  selectedIncident &&
                  resp.status !== "OFFLINE" &&
                  selectedIncident.status !== "RESOLVED" &&
                  selectedIncident.status !== "CLOSED";

                return (
                  <tr
                    key={resp.id}
                    onClick={() => onSelectResponder(resp)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-emerald-500/10"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <td className="py-3 px-4 font-mono text-slate-500 font-bold">
                      {index + 1}
                    </td>

                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-100 flex items-center gap-2">
                        <span>{resp.name}</span>
                        {index === 0 && selectedIncident && resp.status === "AVAILABLE" && (
                          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-black uppercase px-1.5 py-0.2 rounded">
                            BEST
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        ID: {resp.id.slice(-6)} {resp.phone ? `• ${resp.phone}` : ""}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <span className="rounded-lg bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase text-slate-300">
                        {resp.type}
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      {resp.distanceKm !== null ? (
                        <div className="font-mono font-bold text-emerald-400">
                          {resp.distanceKm} km
                        </div>
                      ) : (
                        <span className="text-slate-500 font-mono">--</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      {selectedIncident ? (
                        <div>
                          <div className="font-mono font-semibold text-slate-200">
                            ~{resp.etaFormatted}
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            @{resp.speedKmH || 30} km/h
                          </div>
                        </div>
                      ) : (
                        <span className="font-mono text-slate-400">{resp.speedKmH || 30} km/h</span>
                      )}
                    </td>

                    <td className="py-3 px-4 relative">
                      <div className="relative inline-block">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenStatusMenuId(
                              openStatusMenuId === resp.id ? null : resp.id
                            );
                          }}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-black uppercase tracking-wider ${statusBadge} transition hover:brightness-125`}
                        >
                          <span>{resp.status}</span>
                          <ChevronDown className="h-3 w-3 opacity-60" />
                        </button>

                        {/* Status Change Dropdown */}
                        {openStatusMenuId === resp.id && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute left-0 top-8 z-50 min-w-[140px] rounded-xl border border-white/10 bg-[#0a1424] p-1 shadow-2xl backdrop-blur-xl"
                          >
                            <div className="px-2 py-1 text-[9px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5 mb-1">
                              Update Status
                            </div>
                            {statuses.map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={async () => {
                                  if (onStatusChange) {
                                    await onStatusChange(resp.id, s);
                                  }
                                  setOpenStatusMenuId(null);
                                }}
                                className={`w-full flex items-center justify-between px-2 py-1.5 text-[10px] font-bold rounded-lg text-left transition ${
                                  resp.status === s
                                    ? "bg-emerald-500/20 text-emerald-300"
                                    : "text-slate-300 hover:bg-white/5"
                                }`}
                              >
                                <span>{s}</span>
                                {resp.status === s && (
                                  <Check className="h-3 w-3 text-emerald-400" />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {resp.capabilities.slice(0, 2).map((c) => (
                          <span
                            key={c.id}
                            className="rounded bg-slate-800 border border-white/5 px-1.5 py-0.5 text-[9px] text-slate-300"
                          >
                            {c.name}
                          </span>
                        ))}
                        {resp.capabilities.length > 2 && (
                          <span className="rounded bg-slate-800/60 text-[9px] px-1 py-0.5 text-slate-500">
                            +{resp.capabilities.length - 2}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4 text-right">
                      {isDispatchable && onDispatch ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDispatch(selectedIncident.id, resp.id);
                          }}
                          disabled={isDispatching}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[10px] font-black transition disabled:opacity-50 inline-flex items-center gap-1"
                        >
                          <Send className="h-3 w-3" />
                          <span>Dispatch</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectResponder(resp);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 text-[10px] font-bold transition border border-white/5"
                        >
                          Inspect
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
