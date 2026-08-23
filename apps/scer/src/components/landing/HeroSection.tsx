import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  RadioTower,
  Navigation,
  ShieldCheck,
  Zap,
  Activity,
  ShieldAlert,
  Users,
} from "lucide-react";

interface HeroSectionProps {
  portalHref: string;
  portalLabel: string;
  onExplore: () => void;
  onNavigate: (section: string) => void;
}

export function HeroSection({
  portalHref,
  portalLabel,
  onExplore,
  onNavigate,
}: HeroSectionProps) {
  return (
    <div className="space-y-16">
      {/* HERO HEADER */}
      <div className="text-center pt-4 sm:pt-6">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.15)] mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Campus Safety 2.0 • Autonomous Multi-Engine Coordination</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
          Next-Generation <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Smart Campus Emergency Response
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
          SCER integrates real-time acoustic distress intelligence, AI spatial geofencing,
          and instant multi-channel responder dispatching to protect campus lives 24/7.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={portalHref}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-cyan-500/30 transition hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>{portalLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={onExplore}
            className="flex items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200 transition hover:border-white/[0.25] hover:bg-white/[0.08] cursor-pointer"
          >
            <span>Explore Platform</span>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* QUICK HIGHLIGHT METRICS STRIP */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        <div
          onClick={() => onNavigate("overview")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/70 p-4 sm:p-5 backdrop-blur-xl hover:border-cyan-500/30 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold mb-1">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-cyan-400" />
              <span>Response Time</span>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">&lt; 30s</div>
          <div className="text-[10px] text-slate-500 mt-1">From distress trigger to dispatch</div>
        </div>

        <div
          onClick={() => onNavigate("engines")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/70 p-4 sm:p-5 backdrop-blur-xl hover:border-emerald-500/30 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold mb-1">
            <div className="flex items-center gap-2">
              <RadioTower className="h-4 w-4 text-emerald-400" />
              <span>Acoustic AI</span>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">99.4%</div>
          <div className="text-[10px] text-slate-500 mt-1">Keyword &amp; distress accuracy</div>
        </div>

        <div
          onClick={() => onNavigate("engines")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/70 p-4 sm:p-5 backdrop-blur-xl hover:border-sky-500/30 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold mb-1">
            <div className="flex items-center gap-2">
              <Navigation className="h-4 w-4 text-sky-400" />
              <span>Spatial GeoPulse</span>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">Dynamic</div>
          <div className="text-[10px] text-slate-500 mt-1">Isochrone-based routing</div>
        </div>

        <div
          onClick={() => onNavigate("architecture")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/70 p-4 sm:p-5 backdrop-blur-xl hover:border-violet-500/30 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold mb-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-violet-400" />
              <span>Storage Layer</span>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">Atlas</div>
          <div className="text-[10px] text-slate-500 mt-1">MongoDB persistent cloud</div>
        </div>
      </div>

      {/* QUICK EXPLORE NAVIGATION CARDS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
        <div
          onClick={() => onNavigate("overview")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/80 p-5 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-cyan-950/20 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <Activity className="h-4 w-4 text-cyan-400" />
            </div>
            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">Platform Overview</h3>
          <p className="text-xs text-slate-400 mt-1">Explore response metrics, capabilities, and system benchmarks.</p>
        </div>

        <div
          onClick={() => onNavigate("portals")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/80 p-5 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-cyan-950/20 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/10 border border-blue-500/30">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition" />
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition">Role-Dedicated Portals</h3>
          <p className="text-xs text-slate-400 mt-1">Discover User SOS reporting and Controller Command operations.</p>
        </div>

        <div
          onClick={() => onNavigate("engines")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/80 p-5 backdrop-blur-xl hover:border-emerald-500/40 hover:bg-emerald-950/20 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <RadioTower className="h-4 w-4 text-emerald-400" />
            </div>
            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition" />
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">Micro-Engines</h3>
          <p className="text-xs text-slate-400 mt-1">Audio Intelligence, GeoPulse Spatial, and Notification systems.</p>
        </div>

        <div
          onClick={() => onNavigate("architecture")}
          className="group rounded-2xl border border-white/[0.08] bg-[#07111e]/80 p-5 backdrop-blur-xl hover:border-violet-500/40 hover:bg-violet-950/20 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/10 border border-violet-500/30">
              <Zap className="h-4 w-4 text-violet-400" />
            </div>
            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition" />
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition">System Architecture</h3>
          <p className="text-xs text-slate-400 mt-1">End-to-end distress ingestion to scene resolution pipeline.</p>
        </div>
      </div>

      {/* BOTTOM CTA CARD */}
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/[0.07] to-transparent p-8 sm:p-12 backdrop-blur-2xl text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Ready to Access SCER?
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          Sign in with your campus credentials to access your designated User or Controller portal.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href={portalHref}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-cyan-500/30 transition hover:from-cyan-400 hover:to-blue-500 active:scale-95"
          >
            <span>{portalLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
