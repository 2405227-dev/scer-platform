import Link from "next/link";
import {
  Users,
  ShieldAlert,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  ChevronLeft,
  UserCheck,
  Radio,
  FileText,
} from "lucide-react";

interface PortalsSectionProps {
  portalHref: string;
  portalLabel: string;
  onBackToHome: () => void;
}

export function PortalsSection({
  portalHref,
  portalLabel,
  onBackToHome,
}: PortalsSectionProps) {
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
              <span>Role-Dedicated Access</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Role-Dedicated Portals
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-xl">
              Tailored interfaces built for fast student distress reporting and robust controller response operations.
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

      {/* 3 PORTALS CARDS */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* USER PORTAL */}
        <div className="rounded-3xl border border-cyan-500/30 bg-[#07111e]/90 p-6 sm:p-8 backdrop-blur-xl relative group hover:border-cyan-400/50 transition shadow-lg shadow-cyan-500/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-md font-bold">
                ROLE: USER
              </span>
            </div>

            <h2 className="text-xl font-black text-white">Dedicated User Portal</h2>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              Students and campus personnel can trigger one-tap emergency SOS, record voice distress messages, transmit real-time GPS coordinates, and chat live with controllers.
            </p>

            <div className="my-6 border-t border-white/[0.06]" />

            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3">Key Capabilities</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>One-tap SOS dispatch with immediate GPS capture</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Voice emergency recording with speech-to-text processing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Live status tracking: PENDING → ACCEPTED → RESOLVED</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Two-way emergency chat with responding controllers</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.06]">
            <Link
              href="/login"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition"
            >
              <span>Access User Portal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* CONTROLLER COMMAND CENTER */}
        <div className="rounded-3xl border border-red-500/30 bg-[#07111e]/90 p-6 sm:p-8 backdrop-blur-xl relative group hover:border-red-400/50 transition shadow-lg shadow-red-500/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10">
                <ShieldAlert className="h-6 w-6 text-red-400" />
              </div>
              <span className="text-[10px] font-mono text-red-400 bg-red-400/10 border border-red-400/20 px-2 py-0.5 rounded-md font-bold">
                ROLE: CONTROLLER
              </span>
            </div>

            <h2 className="text-xl font-black text-white">Controller Command Center</h2>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              Controllers manage the active emergency queue, view real-time operations maps, assign specialized tactical teams, and oversee scene resolutions.
            </p>

            <div className="my-6 border-t border-white/[0.06]" />

            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3">Key Capabilities</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>Live incident queue with instant status updates</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>Tactical responder team selection &amp; Telegram dispatch</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>Full incident message logs and audit trail generation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>Root Controller: Centralized account governance</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.06]">
            <Link
              href="/login"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 py-2.5 text-xs font-bold text-red-300 hover:bg-red-500/20 transition"
            >
              <span>Access Command Center</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* LIVE RESPONSE */}
        <div className="rounded-3xl border border-emerald-500/30 bg-[#07111e]/90 p-6 sm:p-8 backdrop-blur-xl relative group hover:border-emerald-400/50 transition shadow-lg shadow-emerald-500/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                <Zap className="h-6 w-6 text-emerald-400" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-md font-bold">
                PORT 3004
              </span>
            </div>

            <h2 className="text-xl font-black text-white">Live Operations Grid</h2>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              High-velocity SSE event synchronization provides real-time state mirroring across command consoles, mobile field teams, and automated micro-engines.
            </p>

            <div className="my-6 border-t border-white/[0.06]" />

            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3">Key Capabilities</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero-delay Server-Sent Events (SSE) stream</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Sub-second state synchronization without polling</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Multi-department simultaneous coordination</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Automated audio emergency event injection</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.06]">
            <a
              href="http://localhost:3004"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 py-2.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition"
            >
              <span>Open Live Response</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
