import Link from "next/link";
import {
  Clock3,
  RadioTower,
  Navigation,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

interface PlatformOverviewSectionProps {
  portalHref: string;
  portalLabel: string;
  onBackToHome: () => void;
}

export function PlatformOverviewSection({
  portalHref,
  portalLabel,
  onBackToHome,
}: PlatformOverviewSectionProps) {
  return (
    <div className="space-y-12">
      {/* SECTION HEADER */}
      <div>
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-cyan-300 transition mb-4 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Platform Intelligence &amp; Performance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Platform Overview
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-xl">
              Comprehensive emergency telemetry, automated distress intelligence, and real-time response benchmarks.
            </p>
          </div>

          <Link
            href={portalHref}
            className="self-start sm:self-auto flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition active:scale-95"
          >
            <span>{portalLabel}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* 4 CORE METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-cyan-500/30 bg-[#07111e]/90 p-6 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-cyan-500/5">
          <div className="absolute top-0 right-0 h-24 w-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-2">
            <Clock3 className="h-4 w-4 text-cyan-400" />
            <span>Response Time</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white">&lt; 30s</div>
          <div className="text-xs text-cyan-300 font-semibold mt-1">Autonomous Dispatch SLA</div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            From the instant distress audio or SOS trigger is ingested, the engine matches and routes responders in under 30 seconds.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-[#07111e]/90 p-6 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-emerald-500/5">
          <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-2">
            <RadioTower className="h-4 w-4 text-emerald-400" />
            <span>Acoustic AI</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white">99.4%</div>
          <div className="text-xs text-emerald-300 font-semibold mt-1">Distress Audio Detection</div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            AI acoustic classification identifies emergency keywords, screams, and distress patterns across campus sensor nodes.
          </p>
        </div>

        <div className="rounded-2xl border border-sky-500/30 bg-[#07111e]/90 p-6 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-sky-500/5">
          <div className="absolute top-0 right-0 h-24 w-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-2">
            <Navigation className="h-4 w-4 text-sky-400" />
            <span>Spatial GeoPulse</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white">Dynamic</div>
          <div className="text-xs text-sky-300 font-semibold mt-1">Geofenced Isochrones</div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            Continuous real-time GPS telemetry tracks responder units and calculates ETA-optimized assignment zones.
          </p>
        </div>

        <div className="rounded-2xl border border-violet-500/30 bg-[#07111e]/90 p-6 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-violet-500/5">
          <div className="absolute top-0 right-0 h-24 w-24 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-2">
            <ShieldCheck className="h-4 w-4 text-violet-400" />
            <span>Storage Layer</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white">Atlas</div>
          <div className="text-xs text-violet-300 font-semibold mt-1">MongoDB Persistent Cloud</div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            Mission-critical data persistence with audit logging, multi-service concurrency, and zero-loss record integrity.
          </p>
        </div>
      </div>

      {/* PLATFORM PILLARS */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.08] bg-[#07111e]/70 p-6 backdrop-blur-xl">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Activity className="h-5 w-5 text-cyan-400" />
          </div>
          <h3 className="text-base font-bold text-white">Continuous Threat Monitoring</h3>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            24/7 background telemetry streams across acoustic sensors, emergency kiosks, and user distress beacons to ensure zero blindspots across campus.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>Real-time voice emergency parsing</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>Live incident status pipeline</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#07111e]/70 p-6 backdrop-blur-xl">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-4">
            <Cpu className="h-5 w-5 text-emerald-400" />
          </div>
          <h3 className="text-base font-bold text-white">Autonomous Microservices</h3>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            Decoupled micro-engines on dedicated ports handle acoustic detection, geographic tracking, smart notifications, and live response independently.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Fault-isolated service architecture</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Low-latency SSE event synchronization</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#07111e]/70 p-6 backdrop-blur-xl">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 border border-violet-500/30 mb-4">
            <Layers className="h-5 w-5 text-violet-400" />
          </div>
          <h3 className="text-base font-bold text-white">Unified Command &amp; Audit</h3>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            Controllers supervise active situations with interactive maps and responder management, with immutable audit logs recording every action.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-violet-400 shrink-0" />
              <span>Strict Role-Based Access Control</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-violet-400 shrink-0" />
              <span>Full compliance &amp; event traceability</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
