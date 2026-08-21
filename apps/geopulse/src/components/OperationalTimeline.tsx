"use client";

import React, { useState } from "react";
import {
  AssignmentItem,
  IncidentItem,
  ResponderItem,
  ResponderStatus,
} from "@/types/geopulse";
import ResponderIntelligenceTable from "./ResponderIntelligenceTable";
import {
  Activity,
  CheckCircle2,
  Clock,
  History,
  Navigation,
  Shield,
  Siren,
  Users,
} from "lucide-react";

interface OperationalTimelineProps {
  responders: ResponderItem[];
  incidents: IncidentItem[];
  selectedIncident: IncidentItem | null;
  onDispatch?: (incidentId: string, responderId: string) => Promise<void>;
  onStatusChange?: (
    responderId: string,
    newStatus: ResponderStatus
  ) => Promise<void>;
  onSelectResponder: (responder: ResponderItem) => void;
  selectedResponderId?: string;
  isDispatching?: boolean;
}

export default function OperationalTimeline({
  responders,
  incidents,
  selectedIncident,
  onDispatch,
  onStatusChange,
  onSelectResponder,
  selectedResponderId,
  isDispatching,
}: OperationalTimelineProps) {
  const [activeTab, setActiveTab] = useState<"responders" | "assignments">("responders");

  // Collect all assignments across incidents
  const allAssignments: (AssignmentItem & {
    incidentTitle?: string;
    responderName?: string;
  })[] = [];

  incidents.forEach((inc) => {
    (inc.assignments || []).forEach((a) => {
      allAssignments.push({
        ...a,
        incidentTitle: inc.title || inc.type,
        responderName: a.responder?.name || "Unit",
      });
    });
  });

  allAssignments.sort(
    (a, b) =>
      new Date(b.assignedAt).getTime() - new Date(a.assignedAt).getTime()
  );

  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-[#081220] overflow-hidden shadow-2xl">
      {/* Header with Tab Switcher */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#091526] px-5 pt-3">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab("responders")}
            className={`flex items-center gap-2 pb-3 text-xs font-black uppercase tracking-wider border-b-2 transition ${
              activeTab === "responders"
                ? "border-emerald-400 text-emerald-300"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Responder Intelligence & Telemetry ({responders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("assignments")}
            className={`flex items-center gap-2 pb-3 text-xs font-black uppercase tracking-wider border-b-2 transition ${
              activeTab === "assignments"
                ? "border-emerald-400 text-emerald-300"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <History className="h-4 w-4" />
            <span>Operational Dispatch Log ({allAssignments.length})</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-0">
        {activeTab === "responders" ? (
          <ResponderIntelligenceTable
            responders={responders}
            selectedIncident={selectedIncident}
            onDispatch={onDispatch}
            onStatusChange={onStatusChange}
            onSelectResponder={onSelectResponder}
            selectedResponderId={selectedResponderId}
            isDispatching={isDispatching}
          />
        ) : (
          /* Operational Dispatch Log Table */
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/5 text-[10px] font-black uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="py-2.5 px-3">Timestamp</th>
                  <th className="py-2.5 px-3">Incident</th>
                  <th className="py-2.5 px-3">Assigned Unit</th>
                  <th className="py-2.5 px-3">Distance / Travel</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3">Timestamps (Arrived / Completed)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {allAssignments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500">
                      No assignments have been recorded in the system yet.
                    </td>
                  </tr>
                ) : (
                  allAssignments.map((a) => (
                    <tr key={a.id} className="hover:bg-white/[0.02]">
                      <td className="py-2.5 px-3 font-mono text-slate-400">
                        {new Date(a.assignedAt).toLocaleTimeString()}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-white">
                        {a.incidentTitle}
                      </td>
                      <td className="py-2.5 px-3 text-emerald-400 font-semibold">
                        {a.responderName}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-slate-300">
                        {a.distanceKm} km • ~{a.estimatedTimeMinutes} min
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {a.status}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-[10px] text-slate-400">
                        {a.arrivedAt
                          ? `Arrived: ${new Date(a.arrivedAt).toLocaleTimeString()}`
                          : a.completedAt
                          ? `Completed: ${new Date(a.completedAt).toLocaleTimeString()}`
                          : "In Progress"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
