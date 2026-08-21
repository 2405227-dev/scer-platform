"use client";

import React, { useState } from "react";
import {
  AssignmentStatus,
  CandidateRanking,
  IncidentItem,
  ResponderItem,
} from "@/types/geopulse";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Crosshair,
  Flame,
  Info,
  Loader2,
  MapPin,
  Navigation,
  RotateCcw,
  Send,
  Shield,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Users,
  XCircle,
  Zap,
} from "lucide-react";

interface IncidentDetailPanelProps {
  selectedIncident: IncidentItem | null;
  selectedResponder: ResponderItem | null;
  topRecommendation: CandidateRanking | null;
  alternatives: CandidateRanking[];
  onDispatch: (incidentId: string, responderId: string) => Promise<void>;
  onUpdateAssignmentStatus?: (
    assignmentId: string,
    status: AssignmentStatus
  ) => Promise<void>;
  onCenterIncident: (incident: IncidentItem) => void;
  onCenterResponder: (responder: ResponderItem) => void;
  onSelectResponder: (responder: ResponderItem) => void;
  isDispatching: boolean;
}

export default function IncidentDetailPanel({
  selectedIncident,
  selectedResponder,
  topRecommendation,
  alternatives,
  onDispatch,
  onUpdateAssignmentStatus,
  onCenterIncident,
  onCenterResponder,
  onSelectResponder,
  isDispatching,
}: IncidentDetailPanelProps) {
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"incident" | "responder">("incident");

  const showSuccess = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(null), 4000);
  };

  if (!selectedIncident && !selectedResponder) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[24px] border border-white/[0.08] bg-[#081220] p-8 text-center shadow-2xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-500 mb-4">
          <Crosshair className="h-8 w-8 animate-pulse text-emerald-400" />
        </div>
        <h3 className="text-base font-black text-white">Select an Asset or Incident</h3>
        <p className="mt-2 max-w-xs text-xs leading-5 text-slate-400">
          Click any incident marker or responder pin on the geospatial radar to inspect telemetry and run multi-factor dispatch matching.
        </p>
      </div>
    );
  }

  const latestAssignment = selectedIncident?.assignments?.[0];
  const isCritical = selectedIncident?.severity === "CRITICAL";
  const isHigh = selectedIncident?.severity === "HIGH";
  const isResolved =
    selectedIncident?.status === "RESOLVED" ||
    selectedIncident?.status === "CLOSED";

  const handleAssignmentAction = async (status: AssignmentStatus) => {
    if (!latestAssignment || !onUpdateAssignmentStatus) return;
    try {
      await onUpdateAssignmentStatus(latestAssignment.id, status);
      showSuccess(`Assignment updated to ${status}`);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#081220] shadow-2xl">
      {/* Tab Switcher if both or responder selected */}
      <div className="flex items-center border-b border-white/10 bg-[#091526] px-4 pt-3">
        <button
          onClick={() => setActiveTab("incident")}
          className={`pb-2.5 px-3 text-xs font-black uppercase tracking-wider border-b-2 transition ${
            activeTab === "incident"
              ? "border-emerald-400 text-emerald-300"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          Incident Command
        </button>

        {selectedResponder && (
          <button
            onClick={() => setActiveTab("responder")}
            className={`pb-2.5 px-3 text-xs font-black uppercase tracking-wider border-b-2 transition ${
              activeTab === "responder"
                ? "border-emerald-400 text-emerald-300"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            Unit: {selectedResponder.name}
          </button>
        )}
      </div>

      {actionSuccess && (
        <div className="bg-emerald-500/20 border-b border-emerald-500/30 px-5 py-2 text-xs font-bold text-emerald-300 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {activeTab === "incident" && selectedIncident ? (
          <>
            {/* Incident Header Box */}
            <div className="rounded-2xl border border-white/10 bg-[#091424] p-4 shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isCritical
                          ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]"
                          : isHigh
                          ? "bg-orange-400"
                          : "bg-emerald-400"
                      }`}
                    />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      ID: #{selectedIncident.id.slice(-6)}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[10px] text-slate-400">
                      {new Date(selectedIncident.createdAt).toLocaleTimeString()}
                    </span>
                  </div>

                  <h2 className="text-base font-black text-white tracking-tight leading-snug">
                    {selectedIncident.title || selectedIncident.type}
                  </h2>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span
                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                      isCritical
                        ? "bg-red-500/20 text-red-300 border border-red-500/30"
                        : isHigh
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                        : isResolved
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {selectedIncident.severity}
                  </span>

                  <span className="text-[9px] font-mono uppercase font-bold text-slate-500">
                    Status: {selectedIncident.status}
                  </span>
                </div>
              </div>

              {/* Location & Metadata */}
              <div className="mt-3.5 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      Location
                    </span>
                    <button
                      type="button"
                      onClick={() => onCenterIncident(selectedIncident)}
                      title="Center on Incident"
                      className="text-slate-400 hover:text-white"
                    >
                      <Crosshair className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="font-semibold text-slate-200 truncate">
                    {selectedIncident.location}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {selectedIncident.latitude.toFixed(4)}, {selectedIncident.longitude.toFixed(4)}
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    <Zap className="h-3 w-3 text-yellow-400" />
                    Capability Req
                  </div>
                  <div className="font-semibold text-slate-200 truncate">
                    {selectedIncident.requiredCapability}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 capitalize">
                    {selectedIncident.type.replace(/_/g, " ").toLowerCase()}
                  </div>
                </div>
              </div>

              {selectedIncident.description && (
                <p className="mt-3 text-xs leading-relaxed text-slate-400 bg-white/[0.02] border border-white/5 p-2.5 rounded-xl">
                  {selectedIncident.description}
                </p>
              )}
            </div>

            {/* Active Deployment Lifecycle Box (If already assigned) */}
            {latestAssignment && latestAssignment.status !== "COMPLETED" && latestAssignment.status !== "CANCELLED" && (
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4 shadow-lg">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-cyan-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-400">
                      Active Deployment: {latestAssignment.responder?.name}
                    </span>
                  </div>
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded text-[10px] font-black uppercase">
                    {latestAssignment.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-2 text-slate-300 border-t border-b border-white/5">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Distance</span>
                    <span className="font-mono font-bold text-cyan-300">{latestAssignment.distanceKm} km</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Estimated Travel</span>
                    <span className="font-mono font-bold text-cyan-300">~{latestAssignment.estimatedTimeMinutes} min</span>
                  </div>
                </div>

                {/* Working Lifecycle Action Buttons */}
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {latestAssignment.status === "DISPATCHED" && (
                    <button
                      type="button"
                      onClick={() => handleAssignmentAction("ACCEPTED")}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[10px] font-black transition"
                    >
                      Accept
                    </button>
                  )}

                  {(latestAssignment.status === "DISPATCHED" || latestAssignment.status === "ACCEPTED") && (
                    <button
                      type="button"
                      onClick={() => handleAssignmentAction("EN_ROUTE")}
                      className="px-2.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[10px] font-black transition"
                    >
                      Mark En Route
                    </button>
                  )}

                  {latestAssignment.status === "EN_ROUTE" && (
                    <button
                      type="button"
                      onClick={() => handleAssignmentAction("ON_SCENE")}
                      className="px-2.5 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 text-[10px] font-black transition"
                    >
                      Mark On Scene
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleAssignmentAction("COMPLETED")}
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-[10px] transition shadow"
                  >
                    Complete
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAssignmentAction("CANCELLED")}
                    className="px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 text-[10px] font-bold transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Top Recommended Best Responder Card */}
            {topRecommendation ? (
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 shadow-xl">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400">
                      Recommended Best Responder
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-lg text-emerald-300 font-mono text-[10px] font-black">
                    <span>Score: {topRecommendation.score}/100</span>
                  </div>
                </div>

                {/* Identity */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-black text-white">
                      {topRecommendation.responder.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 uppercase">
                        {topRecommendation.responder.type}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                        {topRecommendation.responder.status}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-black font-mono text-emerald-300">
                      {topRecommendation.distanceKm} km
                    </div>
                    <div className="text-[11px] font-bold text-slate-400 flex items-center justify-end gap-1 mt-0.5">
                      <Clock className="h-3 w-3 text-emerald-400" />
                      <span>ETA ~{topRecommendation.etaFormatted}</span>
                    </div>
                  </div>
                </div>

                {/* Bulleted Rationale */}
                <div className="mt-3 rounded-xl bg-black/40 border border-white/5 p-2.5 text-[11px] font-mono leading-relaxed text-slate-300 whitespace-pre-line">
                  <span className="text-[9px] font-black font-sans uppercase tracking-wider text-slate-500 block mb-1">
                    Matching Rationale
                  </span>
                  {topRecommendation.rationale}
                </div>

                {/* Score Breakdown Bars (5 Factors) */}
                <div className="mt-3 space-y-1.5 pt-2 border-t border-white/5 text-[10px]">
                  <div className="flex justify-between font-bold text-slate-400">
                    <span>Capability Match (40%)</span>
                    <span className="font-mono text-emerald-400">
                      {topRecommendation.breakdown.capabilityScore}/40 pts
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{
                        width: `${(topRecommendation.breakdown.capabilityScore / 40) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="flex justify-between font-bold text-slate-400 pt-1">
                    <span>Availability (25%) + Proximity (20%)</span>
                    <span className="font-mono text-cyan-400">
                      {(
                        topRecommendation.breakdown.availabilityScore +
                        topRecommendation.breakdown.proximityScore
                      ).toFixed(1)}
                      /45 pts
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 rounded-full"
                      style={{
                        width: `${
                          ((topRecommendation.breakdown.availabilityScore +
                            topRecommendation.breakdown.proximityScore) /
                            45) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Primary Dispatch / Reassign Action */}
                {!isResolved && (
                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        onDispatch(
                          selectedIncident.id,
                          topRecommendation.responder.id
                        )
                      }
                      disabled={
                        isDispatching ||
                        topRecommendation.responder.status === "OFFLINE"
                      }
                      className="flex-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] text-slate-950 font-black text-xs py-3 px-4 transition shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isDispatching ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Dispatching Unit...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>
                            {latestAssignment ? "Reassign to " : "Assign "}
                            {topRecommendation.responder.name}
                          </span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onCenterResponder(topRecommendation.responder)
                      }
                      title="Center on Responder"
                      className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-3 text-slate-300 hover:text-white transition"
                    >
                      <Crosshair className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-xs text-yellow-300 flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0" />
                <span>No compatible responders currently available.</span>
              </div>
            )}

            {/* Alternative Candidates */}
            {alternatives.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Alternative Candidates ({alternatives.length})
                </div>

                <div className="space-y-2">
                  {alternatives.slice(0, 3).map((alt) => (
                    <div
                      key={alt.responder.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-slate-500">
                          #{alt.rank}
                        </span>
                        <div>
                          <div className="font-bold text-xs text-white">
                            {alt.responder.name}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {alt.responder.type} • Score {alt.score}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="text-xs font-mono font-bold text-slate-200">
                            {alt.distanceKm} km
                          </div>
                          <div className="text-[10px] text-slate-500">
                            ~{alt.etaFormatted}
                          </div>
                        </div>

                        {!isResolved && (
                          <button
                            type="button"
                            onClick={() =>
                              onDispatch(
                                selectedIncident.id,
                                alt.responder.id
                              )
                            }
                            disabled={
                              isDispatching ||
                              alt.responder.status === "OFFLINE"
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-white/10 text-[10px] font-bold transition disabled:opacity-40"
                          >
                            Assign
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : selectedResponder ? (
          /* Responder Telemetry View */
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#091424] p-4 shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    Emergency Asset Details
                  </span>
                  <h2 className="text-base font-black text-white mt-1">
                    {selectedResponder.name}
                  </h2>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    ID: {selectedResponder.id}
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {selectedResponder.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Unit Type</span>
                  <span className="font-semibold text-slate-200">{selectedResponder.type}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Transit Speed</span>
                  <span className="font-mono font-semibold text-slate-200">{selectedResponder.speedKmH} km/h</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Contact Phone</span>
                  <span className="font-mono text-slate-300">{selectedResponder.phone || "Radio Comm Only"}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Email / Relay</span>
                  <span className="font-mono text-slate-300">{selectedResponder.email || "N/A"}</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                  Unit Capabilities & Specializations
                </span>
                <div className="space-y-1.5">
                  {selectedResponder.capabilities.map((c) => (
                    <div
                      key={c.id}
                      className="p-2 rounded-lg bg-slate-900 border border-white/5 text-xs flex flex-col gap-0.5"
                    >
                      <div className="font-bold text-slate-200">{c.name}</div>
                      {c.description && (
                        <div className="text-[10px] text-slate-400">{c.description}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => onCenterResponder(selectedResponder)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 text-xs font-bold text-slate-200 transition"
                >
                  <Crosshair className="h-4 w-4" />
                  <span>Center On Unit</span>
                </button>

                {selectedIncident && selectedResponder.status !== "OFFLINE" && (
                  <button
                    type="button"
                    onClick={() =>
                      onDispatch(selectedIncident.id, selectedResponder.id)
                    }
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-2.5 text-xs transition"
                  >
                    <Send className="h-4 w-4" />
                    <span>Assign to Incident</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
