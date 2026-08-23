import Link from "next/link";
import {
  Zap,
  ArrowRight,
  ChevronLeft,
  ShieldAlert,
  Database,
  Users,
  Send,
  CheckCircle2,
  RefreshCw,
  RadioTower,
  FileCheck,
} from "lucide-react";

interface ArchitectureSectionProps {
  portalHref: string;
  portalLabel: string;
  onBackToHome: () => void;
}

export function ArchitectureSection({
  portalHref,
  portalLabel,
  onBackToHome,
}: ArchitectureSectionProps) {
  const steps = [
    {
      step: "01",
      title: "Distress Ingestion",
      tag: "INGESTION",
      tagColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
      icon: ShieldAlert,
      iconColor: "text-cyan-400",
      description:
        "Emergencies are triggered via User SOS button, voice recording, acoustic sensor detection (Audio Engine), or manual controller entry.",
    },
    {
      step: "02",
      title: "Atlas Persistence",
      tag: "PERSISTENCE",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      icon: Database,
      iconColor: "text-emerald-400",
      description:
        "The incident record is immediately created in MongoDB Atlas in PENDING status with GPS coordinates, audio transcripts, and priority levels.",
    },
    {
      step: "03",
      title: "Tactical Matching",
      tag: "COMMAND",
      tagColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
      icon: Users,
      iconColor: "text-sky-400",
      description:
        "Controllers review incident location on operations map, select specialized responder unit (Paramedic, Security, Fire), and mark incident ACCEPTED (Active).",
    },
    {
      step: "04",
      title: "Telegram Field Dispatch",
      tag: "NOTIFY",
      tagColor: "text-violet-400 border-violet-400/30 bg-violet-400/10",
      icon: Send,
      iconColor: "text-violet-400",
      description:
        "Automated Telegram webhook notifies on-duty field teams with GPS location link, distress details, and direct one-tap scene resolution buttons.",
    },
    {
      step: "05",
      title: "Real-Time Sync",
      tag: "SSE STREAM",
      tagColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      icon: RefreshCw,
      iconColor: "text-amber-400",
      description:
        "Server-Sent Events (SSE) broadcast the state transition to the User Portal, Live Response, GeoPulse, and Controller consoles simultaneously.",
    },
    {
      step: "06",
      title: "Scene Resolution & Audit",
      tag: "RESOLVED",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      icon: FileCheck,
      iconColor: "text-emerald-400",
      description:
        "Upon securing the threat, the incident transitions to RESOLVED status. An immutable audit log entry is saved in Atlas with complete event timestamps.",
    },
  ];

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
              <span>End-to-End System Design</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              System Architecture
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-xl">
              From distress signal trigger to field responder resolution and immutable compliance logging.
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

      {/* STEP-BY-STEP PIPELINE */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="rounded-3xl border border-white/[0.08] bg-[#07111e]/90 p-6 backdrop-blur-xl relative group hover:border-cyan-500/30 transition shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] border border-white/[0.08] ${item.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-mono border px-2 py-0.5 rounded-md font-bold ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-black text-slate-500">
                      #{item.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>Verified in MongoDB Atlas</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ARCHITECTURE SUMMARY CARD */}
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/[0.07] to-transparent p-8 backdrop-blur-2xl">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="h-5 w-5 text-yellow-400" />
          <h3 className="text-base font-bold text-white">Fault-Tolerant, Distributed Monorepo</h3>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
          The SCER architecture guarantees continuous uptime by decoupling the central controller portal (`scer`) from edge engines (`audio-engine`, `geopulse`, `notification-engine`, `live-response`). All systems synchronize state through MongoDB Atlas and real-time SSE event channels.
        </p>
      </div>
    </div>
  );
}
