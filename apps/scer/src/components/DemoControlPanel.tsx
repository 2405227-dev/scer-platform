"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Square,
  AlertTriangle,
  ShieldAlert,
  Zap,
  ServerCrash,
  Radio,
  Flame,
  HeartPulse,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";

export function DemoControlPanel() {
  const [status, setStatus] = useState<any>(null);
  const [lastDispatched, setLastDispatched] = useState<string | null>(null);

  const fetchStatus = () => {
    fetch("/api/simulation").then((r) => r.json()).then(setStatus).catch(console.error);
  };

  useEffect(() => {
    fetchStatus();
    const int = setInterval(fetchStatus, 3000);
    return () => clearInterval(int);
  }, []);

  const toggleSim = async (action: "start" | "stop") => {
    await fetch(`/api/simulation/${action}`, { method: "POST" });
    fetchStatus();
  };

  const triggerVoiceEmergency = async (keyword: string, location: string, station: string) => {
    try {
      const res = await fetch("/api/webhooks/audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "audio.distress.detected",
          data: {
            keyword,
            confidence: 0.98,
            location,
            transcript: `Emergency voice command: "${keyword}" detected at ${location}`,
          },
        }),
      });
      if (res.ok) {
        setLastDispatched(`Cheered "${keyword}" -> Auto Dispatched to ${station}!`);
        setTimeout(() => setLastDispatched(null), 4000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#08101b] p-6 shadow-2xl mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-black text-white flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-400" />
          Tactical Command & Voice Distress Orchestrator
        </h2>
        <div className="flex items-center gap-2">
          {status?.isActive ? (
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              LIVE SIMULATION ACTIVE
            </span>
          ) : (
            <span className="text-[10px] font-black uppercase text-slate-500 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-xl">
              Simulation Standby
            </span>
          )}
        </div>
      </div>

      {lastDispatched && (
        <div className="mb-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-300 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{lastDispatched}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AUTOMATED SIMULATOR ENGINE */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Background Engine
          </h3>
          <div className="flex gap-2">
            <Button
              variant="default"
              className="flex-1 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-xl font-bold text-xs"
              onClick={() => toggleSim("start")}
              disabled={status?.isActive}
            >
              <Play className="w-3.5 h-3.5 mr-1.5" /> Start Auto Sim
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/30 rounded-xl font-bold text-xs"
              onClick={() => toggleSim("stop")}
              disabled={!status?.isActive}
            >
              <Square className="w-3.5 h-3.5 mr-1.5" /> Stop Auto Sim
            </Button>
          </div>
          {status?.isActive && (
            <p className="text-xs text-slate-400">
              Telemetry events generated: <strong className="text-white">{status.eventCount}</strong>
            </p>
          )}
        </div>

        {/* VOICE DISTRESS DIRECT STATION DISPATCH */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Radio className="h-3.5 w-3.5 text-sky-400" />
              Instant Voice Distress Dispatch (Auto-Alerts Station)
            </h3>
            <a
              href="http://localhost:3001"
              target="_blank"
              className="text-[10px] font-bold text-sky-400 hover:underline"
            >
              Open Live Mic Visualizer ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => triggerVoiceEmergency("FIRE", "North Gate", "Campus Fire Station")}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-orange-500/30 bg-orange-500/10 p-2.5 text-xs font-bold text-orange-300 transition hover:bg-orange-500/20 active:scale-95"
            >
              <Flame className="h-4 w-4 text-orange-400" />
              <span>Voice: "FIRE!" (🚒 Station)</span>
            </button>

            <button
              onClick={() => triggerVoiceEmergency("HELP", "Block C (Academic)", "Trauma Hospital")}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-xs font-bold text-red-300 transition hover:bg-red-500/20 active:scale-95"
            >
              <HeartPulse className="h-4 w-4 text-red-400" />
              <span>Voice: "HELP!" (🚑 Hospital)</span>
            </button>

            <button
              onClick={() => triggerVoiceEmergency("POLICE", "Central Hub", "Police Department")}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 p-2.5 text-xs font-bold text-blue-300 transition hover:bg-blue-500/20 active:scale-95"
            >
              <ShieldAlert className="h-4 w-4 text-blue-400" />
              <span>Voice: "POLICE!" (🚓 SWAT)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
