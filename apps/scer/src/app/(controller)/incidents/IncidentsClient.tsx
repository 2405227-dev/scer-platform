"use client";

import { useState } from "react";
import {
  ShieldAlert,
  AlertTriangle,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  MapPin,
  X,
  RefreshCw,
} from "lucide-react";


interface Incident {
  id: string;
  type: string;
  severity: string;
  status: string;
  location: string;
  description?: string | null;
  createdAt: string | Date;
  assignedTo?: string | null;
}

export function IncidentsClient({ initialIncidents = [] }: { initialIncidents: Incident[] }) {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    type: "Medical Emergency",
    severity: "CRITICAL",
    location: "Block C (Academic)",
    description: "",
  });

  const refreshIncidents = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/incidents");
      if (res.ok) {
        const data = await res.json();
        setIncidents(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateIncident = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/incidents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({
          type: "Medical Emergency",
          severity: "CRITICAL",
          location: "Block C (Academic)",
          description: "",
        });
        await refreshIncidents();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/incidents/${id}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setIncidents((prev) =>
          prev.map((inc) => (inc.id === id ? { ...inc, status: newStatus } : inc))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredIncidents = incidents.filter((inc) => {
    const matchSearch =
      inc.type.toLowerCase().includes(search.toLowerCase()) ||
      (inc.location || "").toLowerCase().includes(search.toLowerCase()) ||
      inc.id.toLowerCase().includes(search.toLowerCase());
    const matchSeverity = severityFilter === "ALL" || inc.severity === severityFilter;
    const matchStatus = statusFilter === "ALL" || inc.status === statusFilter;
    return matchSearch && matchSeverity && matchStatus;
  });

  return (
      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <ShieldAlert className="h-7 w-7 text-red-400" />
              Incident Management System
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Live emergency telemetry, incident reporting, and real-time lifecycle tracking.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refreshIncidents}
              disabled={loading}
              title="Refresh Incidents"
              className="flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 text-xs font-bold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-red-500/20 transition hover:from-red-600 hover:to-rose-700 active:scale-95"
            >
              <Plus className="h-4 w-4" />
              Report Incident
            </button>
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by ID, type, or sector..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-red-400/50 focus:outline-none"
            />
          </div>

          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            aria-label="Filter incidents by severity"
            className="rounded-xl border border-white/[0.08] bg-[#0c1829] px-3 py-2.5 text-xs text-slate-300 focus:border-red-400/50 focus:outline-none"
          >
            <option value="ALL">All Severities</option>
            <option value="CRITICAL">🔴 Critical Only</option>
            <option value="HIGH">🟠 High Only</option>
            <option value="MEDIUM">🟡 Medium Only</option>
            <option value="LOW">🔵 Low Only</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter incidents by status"
            className="rounded-xl border border-white/[0.08] bg-[#0c1829] px-3 py-2.5 text-xs text-slate-300 focus:border-red-400/50 focus:outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="REPORTED">REPORTED</option>
            <option value="OPEN">OPEN</option>
            <option value="ASSIGNED">ASSIGNED</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="RESOLVED">RESOLVED</option>
          </select>
        </div>

        {/* INCIDENTS TABLE */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08101b] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] text-[10px] font-black uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3.5">ID / Type</th>
                  <th className="px-4 py-3.5">Severity</th>
                  <th className="px-4 py-3.5">Status</th>
                  <th className="px-4 py-3.5">Location</th>
                  <th className="px-4 py-3.5">Timestamp</th>
                  <th className="px-4 py-3.5 text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredIncidents.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      No incidents match your search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredIncidents.map((incident) => {
                    const isCritical = incident.severity === "CRITICAL";
                    const isResolved = incident.status === "RESOLVED" || incident.status === "CLOSED";

                    return (
                      <tr
                        key={incident.id}
                        className="transition hover:bg-white/[0.02]"
                      >
                        <td className="px-4 py-4">
                          <div className="font-bold text-white text-sm">{incident.type}</div>
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5">{incident.id}</div>
                          {incident.description && (
                            <div className="text-[11px] text-slate-400 mt-1 max-w-xs truncate">
                              {incident.description}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${
                              isCritical
                                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                : incident.severity === "HIGH"
                                ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                                : "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                            }`}
                          >
                            {isCritical && <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />}
                            {incident.severity}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`rounded-md px-2 py-0.5 text-[9px] font-extrabold uppercase ${
                              isResolved
                                ? "bg-emerald-500/20 text-emerald-300"
                                : incident.status === "IN_PROGRESS" || incident.status === "ASSIGNED"
                                ? "bg-amber-500/20 text-amber-300"
                                : "bg-slate-500/20 text-slate-300"
                            }`}
                          >
                            {incident.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                            <MapPin className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                            <span>{incident.location || "Campus Central"}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-slate-500" />
                            <span>{new Date(incident.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                          </div>
                          <div className="text-[10px] text-slate-600 mt-0.5">{new Date(incident.createdAt).toLocaleDateString()}</div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {incident.status !== "RESOLVED" && (
                              <button
                                onClick={() => handleUpdateStatus(incident.id, "RESOLVED")}
                                className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300 transition hover:bg-emerald-500/20"
                              >
                                Resolve
                              </button>
                            )}
                            {incident.status === "REPORTED" && (
                              <button
                                onClick={() => handleUpdateStatus(incident.id, "IN_PROGRESS")}
                                className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold text-amber-300 transition hover:bg-amber-500/20"
                              >
                                In Progress
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* REPORT INCIDENT MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="w-full max-w-lg rounded-2xl border border-white/[0.12] bg-[#0a1220] p-6 shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-red-500/20 border border-red-500/30 text-red-300">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Report New Incident</h3>
                    <p className="text-xs text-slate-400">Broadcasts live across Command Center & GeoPulse</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl p-1.5 text-slate-400 hover:bg-white/[0.08] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleCreateIncident} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Incident Type / Category
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] px-3 py-2.5 text-xs text-white focus:border-red-400 focus:outline-none"
                  >
                    <option value="Medical Emergency">Medical Emergency</option>
                    <option value="Fire Alarm / Smoke">Fire Alarm / Smoke</option>
                    <option value="Audio Distress Detected">Audio Distress Detected</option>
                    <option value="Unauthorized Intrusion">Unauthorized Intrusion</option>
                    <option value="Chemical Hazard">Chemical Hazard</option>
                    <option value="Power Grid Failure">Power Grid Failure</option>
                    <option value="Suspicious Activity">Suspicious Activity</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Severity Level
                    </label>
                    <select
                      value={formData.severity}
                      onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] px-3 py-2.5 text-xs text-white focus:border-red-400 focus:outline-none"
                    >
                      <option value="CRITICAL">🔴 CRITICAL</option>
                      <option value="HIGH">🟠 HIGH</option>
                      <option value="MEDIUM">🟡 MEDIUM</option>
                      <option value="LOW">🔵 LOW</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Campus Sector / Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] px-3 py-2.5 text-xs text-white focus:border-red-400 focus:outline-none"
                    >
                      <option value="North Gate">North Gate (SEC-N)</option>
                      <option value="Block C (Academic)">Block C (SEC-C)</option>
                      <option value="Central Hub">Central Hub (SEC-HUB)</option>
                      <option value="East Sector">East Sector (SEC-E)</option>
                      <option value="Hostel Zone">Hostel Zone (SEC-H)</option>
                      <option value="South District">South District (SEC-S)</option>
                      <option value="West Wing">West Wing (SEC-W)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Incident Description & Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about casualties, hazards, or immediate assistance needed..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] p-3 text-xs text-white placeholder-slate-500 focus:border-red-400 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-slate-300 hover:bg-white/[0.08]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition hover:from-red-600 hover:to-rose-700 active:scale-95"
                  >
                    {loading ? "Transmitting..." : "Dispatch Incident"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
  );
}
