"use client";

import { useState } from "react";
import { Navigation, MapPin, Zap, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function GeoPulseSimulator() {
  const [incidentType, setIncidentType] = useState("Medical Assistance");
  const [location, setLocation] = useState("Block C (Academic)");
  const [severity, setSeverity] = useState("CRITICAL");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleRunRecommendation = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/geopulse/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          incidentType,
          incidentLocation: location,
          severity,
        }),
      });
      const data = await res.json();
      if (data.recommendedResponder || data.recommendedResource) {
        setResult(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-400" />
          <h3 className="text-sm font-black uppercase tracking-wider text-white">
            Spatial AI Match Simulator
          </h3>
        </div>
        <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold uppercase text-emerald-300 border border-emerald-500/30">
          Live Solver
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Emergency Type
          </label>
          <select
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2 text-xs text-white focus:border-emerald-400 focus:outline-none"
          >
            <option value="Medical Assistance">Medical Assistance</option>
            <option value="Critical Care Rescue">Critical Care Rescue</option>
            <option value="Fire Hazard">Fire Hazard</option>
            <option value="Security Rapid Intervention">Security Rapid Intervention</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Sector Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2 text-xs text-white focus:border-emerald-400 focus:outline-none"
          >
            <option value="Block C (Academic)">Block C (Academic)</option>
            <option value="North Gate">North Gate (Sector N)</option>
            <option value="Central Hub">Central Hub (Sector HUB)</option>
            <option value="Hostel Zone">Hostel Zone</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Urgency Level
          </label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2 text-xs text-white focus:border-emerald-400 focus:outline-none"
          >
            <option value="CRITICAL">🔴 CRITICAL (Immediate)</option>
            <option value="HIGH">🟠 HIGH</option>
            <option value="MEDIUM">🟡 MEDIUM</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleRunRecommendation}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-emerald-500/25 transition hover:from-emerald-600 hover:to-teal-700 active:scale-95 disabled:opacity-50"
      >
        <Navigation className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        <span>{loading ? "Computing Isochrone Matrix..." : "Calculate Optimal Responder Route"}</span>
      </button>

      {result && (
        <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 animate-in fade-in">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span className="font-bold text-sm text-white">
                Assigned Team: {result.recommendedResponder || result.recommendedResource}
              </span>
            </div>
            <span className="rounded-md bg-emerald-400/20 px-2 py-0.5 text-[10px] font-black text-emerald-300 border border-emerald-400/30">
              Match Score: {result.score}%
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mt-3 pt-3 border-t border-emerald-500/20">
            <div>
              <span className="text-slate-400">Estimated ETA: </span>
              <strong className="text-emerald-300">{result.eta}</strong>
            </div>
            <div>
              <span className="text-slate-400">Transit Distance: </span>
              <strong className="text-emerald-300">{result.distance}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
