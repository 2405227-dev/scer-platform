"use client";

import { useState } from "react";
import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  Shield,
  CheckCircle2,
  Clock,
  X,
  RefreshCw,
  UserCheck,
  Award,
} from "lucide-react";


interface Responder {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  status: string;
  skills?: string;
  availability?: boolean;
  createdAt: string | Date;
}

export function RespondersClient({ initialResponders = [] }: { initialResponders: Responder[] }) {
  const [responders, setResponders] = useState<Responder[]>(initialResponders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "AVAILABLE",
    skills: ["First Aid", "Rapid Response"],
  });

  const refreshResponders = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/responders");
      if (res.ok) {
        const data = await res.json();
        setResponders(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateResponder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/responders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          status: "AVAILABLE",
          skills: ["First Aid", "Rapid Response"],
        });
        await refreshResponders();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredResponders = responders.filter((r) => {
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      (r.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (r.skills || "").toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "ALL" || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <Users className="h-7 w-7 text-sky-400" />
              Emergency Responders & Tactical Units
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Active personnel roster, capability profiles, and live availability tracking.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refreshResponders}
              disabled={loading}
              title="Refresh Responders"
              className="flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 text-xs font-bold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-sky-500/20 transition hover:from-sky-600 hover:to-blue-700 active:scale-95"
            >
              <Plus className="h-4 w-4" />
              Add Responder
            </button>
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by responder name, skill, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-sky-400/50 focus:outline-none"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter responders by status"
            className="rounded-xl border border-white/[0.08] bg-[#0c1829] px-3 py-2.5 text-xs text-slate-300 focus:border-sky-400/50 focus:outline-none"
          >
            <option value="ALL">All Statuses ({responders.length})</option>
            <option value="AVAILABLE">🟢 Available Only</option>
            <option value="DISPATCHED">🟠 Dispatched / In Action</option>
            <option value="ON_BREAK">⚪ Standby</option>
          </select>
        </div>

        {/* RESPONDERS ROSTER GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResponders.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-white/[0.08] bg-[#08101b] p-12 text-center text-slate-500">
              No responders match your search criteria.
            </div>
          ) : (
            filteredResponders.map((responder) => {
              const isAvailable = responder.status === "AVAILABLE";
              let skillsList: string[] = [];
              try {
                skillsList = JSON.parse(responder.skills || "[]");
              } catch (e) {
                skillsList = [responder.skills || "Tactical Response"];
              }

              return (
                <div
                  key={responder.id}
                  className="rounded-2xl border border-white/[0.08] bg-[#08101b] p-5 shadow-xl transition hover:border-white/[0.15]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-sky-400/20 bg-sky-400/[0.08] text-sky-300 font-black">
                        {responder.name.slice(0, 2).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="font-bold text-white text-sm">{responder.name}</h3>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                          <span>ID: {responder.id.slice(0, 8)}</span>
                        </div>
                      </div>
                    </div>

                    <span
                      className={`rounded-md px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${
                        isAvailable
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {responder.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-slate-500" />
                      <span className="truncate">{responder.email}</span>
                    </div>
                    {responder.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-slate-500" />
                        <span>{responder.phone}</span>
                      </div>
                    )}
                  </div>

                  {skillsList.length > 0 && (
                    <div className="mt-4 border-t border-white/[0.06] pt-3">
                      <div className="flex flex-wrap gap-1">
                        {skillsList.map((skill, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[9px] font-semibold text-slate-300 border border-white/[0.06]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* ADD RESPONDER MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="w-full max-w-lg rounded-2xl border border-white/[0.12] bg-[#0a1220] p-6 shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-500/20 border border-sky-500/30 text-sky-300">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Add Emergency Responder</h3>
                    <p className="text-xs text-slate-400">Register new personnel to the active roster</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl p-1.5 text-slate-400 hover:bg-white/[0.08] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleCreateResponder} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Responder Full Name / Unit Call-Sign
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sarah Connor / Medical Rapid 3"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@campus.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Emergency Phone
                    </label>
                    <input
                      type="text"
                      placeholder="+1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Initial Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#060c16] px-3 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option value="AVAILABLE">AVAILABLE (Ready for Dispatch)</option>
                    <option value="DISPATCHED">DISPATCHED (In Field)</option>
                    <option value="ON_BREAK">ON_BREAK (Standby)</option>
                  </select>
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
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-sky-500/25 transition hover:from-sky-600 hover:to-blue-700 active:scale-95"
                  >
                    {loading ? "Registering..." : "Save Responder"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
  );
}
