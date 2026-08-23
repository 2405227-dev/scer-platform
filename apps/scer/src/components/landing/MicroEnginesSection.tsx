import Link from "next/link";
import {
  RadioTower,
  Navigation,
  BellRing,
  Zap,
  ArrowRight,
  ChevronLeft,
  Cpu,
  Radio,
  Server,
  Share2,
  CheckCircle2,
} from "lucide-react";

interface MicroEnginesSectionProps {
  portalHref: string;
  portalLabel: string;
  onBackToHome: () => void;
}

export function MicroEnginesSection({
  portalHref,
  portalLabel,
  onBackToHome,
}: MicroEnginesSectionProps) {
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
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Specialized Autonomous Subsystems</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Autonomous Micro-Engines
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-xl">
              Decoupled, high-performance microservices running concurrently on dedicated ports to power emergency response.
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

      {/* 4 ENGINES GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* AUDIO ENGINE */}
        <div className="rounded-3xl border border-cyan-500/30 bg-[#07111e]/90 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-cyan-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
              <Radio className="h-6 w-6 text-cyan-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-lg font-bold">
                PORT 3001
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <h2 className="text-xl font-black text-white">Audio Intelligence Engine</h2>
          <p className="mt-2 text-xs leading-6 text-slate-400">
            Continuously ingests voice distress feeds, performs AI acoustic threat pattern recognition, and automatically registers incidents in MongoDB Atlas with high-confidence priority tags.
          </p>

          <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Emergency keyword &amp; acoustic gunshot/scream classifier</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Automated webhook dispatch to SCER event pipeline</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Simulated distress audio generator for tactical drills</span>
            </div>
          </div>
        </div>

        {/* GEOPULSE SPATIAL ENGINE */}
        <div className="rounded-3xl border border-emerald-500/30 bg-[#07111e]/90 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-emerald-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <Navigation className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-lg font-bold">
                PORT 3002
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <h2 className="text-xl font-black text-white">GeoPulse Spatial Engine</h2>
          <p className="mt-2 text-xs leading-6 text-slate-400">
            Tracks real-time GPS coordinates of active responder units (Paramedics, Security Squads, Fire Marshals), computes dynamic isochrone buffers, and recommends closest available units.
          </p>

          <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Dynamic campus geofencing &amp; building boundary mapping</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Isochrone-based shortest ETA responder matching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Live unit telemetry simulator with path recalculation</span>
            </div>
          </div>
        </div>

        {/* NOTIFICATION ENGINE */}
        <div className="rounded-3xl border border-violet-500/30 bg-[#07111e]/90 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-violet-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/10 border border-violet-500/30">
              <BellRing className="h-6 w-6 text-violet-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-violet-300 bg-violet-500/10 border border-violet-500/30 px-2.5 py-1 rounded-lg font-bold">
                PORT 3003
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <h2 className="text-xl font-black text-white">Smart Notification Engine</h2>
          <p className="mt-2 text-xs leading-6 text-slate-400">
            Orchestrates multi-channel emergency alert delivery, SMS broadcasts, email advisories, and Telegram responder dispatch webhooks with tiered escalation policies.
          </p>

          <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
              <span>Multi-channel broadcast: Push, SMS, Email, Webhooks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
              <span>Telegram Bot integration for field responder notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
              <span>Multi-tier timeout escalation policies</span>
            </div>
          </div>
        </div>

        {/* LIVE RESPONSE ENGINE */}
        <div className="rounded-3xl border border-sky-500/30 bg-[#07111e]/90 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-sky-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-500/10 border border-sky-500/30">
              <Zap className="h-6 w-6 text-sky-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-sky-300 bg-sky-500/10 border border-sky-500/30 px-2.5 py-1 rounded-lg font-bold">
                PORT 3004
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <h2 className="text-xl font-black text-white">Live Response Coordination</h2>
          <p className="mt-2 text-xs leading-6 text-slate-400">
            Maintains ultra-low latency SSE pipelines for synchronized cross-portal updates, real-time audio distress feeds, and simultaneous controller collaboration.
          </p>

          <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
              <span>Zero-polling SSE stream architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
              <span>Live responder telemetry feed overlay</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
              <span>Cross-app state broadcast and synchronization</span>
            </div>
          </div>
        </div>
      </div>

      {/* HOW ENGINES COMMUNICATE */}
      <div className="rounded-3xl border border-white/[0.08] bg-[#07111e]/80 p-8 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-4">
          <Share2 className="h-5 w-5 text-emerald-400" />
          <h3 className="text-base font-bold text-white">Inter-Engine Event Pipeline</h3>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          Micro-engines operate independently and communicate asynchronously over high-speed HTTP Webhooks, Server-Sent Events (SSE), and a shared MongoDB Atlas persistence layer.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="text-[10px] font-mono text-cyan-400 mb-1">EVENT BUS</div>
            <div className="text-sm font-bold text-white">Server-Sent Events</div>
            <div className="text-xs text-slate-400 mt-1">Lightweight pub/sub streaming state changes across ports 3000-3004 in &lt; 50ms.</div>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="text-[10px] font-mono text-emerald-400 mb-1">TELEMETRY</div>
            <div className="text-sm font-bold text-white">REST &amp; Webhooks</div>
            <div className="text-xs text-slate-400 mt-1">Direct point-to-point webhook dispatching for emergency alerts and triggers.</div>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="text-[10px] font-mono text-violet-400 mb-1">DATA LAYER</div>
            <div className="text-sm font-bold text-white">MongoDB Atlas</div>
            <div className="text-xs text-slate-400 mt-1">Shared cloud database guaranteeing persistent transactional integrity.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
