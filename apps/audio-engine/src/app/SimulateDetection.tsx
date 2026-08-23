"use client";

import { useState } from "react";
import { Radio, AlertTriangle, CheckCircle2, Zap, Send } from "lucide-react";

export function SimulateDetection({ keywords = [] }: { keywords: any[] }) {
  const [keyword, setKeyword] = useState("HELP");
  const [location, setLocation] = useState("Block C (Academic)");
  const [loading, setLoading] = useState(false);
  const [lastDispatched, setLastDispatched] = useState<any>(null);

  const handleSimulate = async () => {
    setLoading(true);
    setLastDispatched(null);
    try {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword,
          location,
          confidence: 0.97,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setLastDispatched({
          keyword,
          location,
          time: new Date().toLocaleTimeString(),
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Distress Keyword
          </label>
          <select
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
          >
            <option value="HELP">🚨 "HELP" (Emergency Call)</option>
            <option value="FIRE">🔥 "FIRE" (Acoustic Smoke/Alarm)</option>
            <option value="GUNSHOT">💥 "GUNSHOT" (High Decibel Blast)</option>
            <option value="EMERGENCY">⚠️ "EMERGENCY" (Distress)</option>
            <option value="SHOOTER">🚨 "SHOOTER" (Critical Security)</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Sensor Sector
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
          >
            <option value="North Gate">North Gate (Sector N)</option>
            <option value="Block C (Academic)">Block C (Academic)</option>
            <option value="Central Hub">Central Hub (Sector HUB)</option>
            <option value="East Sector">East Sector (Sports)</option>
            <option value="Hostel Zone">Hostel Zone (Residential)</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSimulate}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition hover:from-red-600 hover:to-rose-700 active:scale-95 disabled:opacity-50"
      >
        <Radio className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        <span>{loading ? "Analyzing Acoustic Stream..." : `Transmit Acoustic Distress: "${keyword}"`}</span>
      </button>

      {lastDispatched && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300 flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <div>
            <div className="font-bold">Webhook Delivered & Incident Created!</div>
            <div className="text-[10px] text-emerald-400/80">
              Dispatched keyword &quot;{lastDispatched.keyword}&quot; at {lastDispatched.location} ({lastDispatched.time})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
