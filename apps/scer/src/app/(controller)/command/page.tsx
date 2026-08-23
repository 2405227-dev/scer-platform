import { IncidentActions } from "@/components/IncidentActions";
import { LiveEventInjector } from '@scer/db-scer/src/LiveEventInjector';
import MapDynamic from "@/components/MapDynamic";
import { db } from "@scer/db-scer";
import { DemoControlPanel } from "@/components/DemoControlPanel";

import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BellRing,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crosshair,
  Headphones,
  MapPin,
  Navigation,
  Radio,
  ShieldAlert,
  Signal,
  Siren,
  Users,
  Zap,
} from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CommandCenter() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  if (session.mustChangePassword) {
    redirect("/change-password");
  }
  if (session.role === "USER") {
    redirect("/user");
  }

  const incidents = await db.incident.findMany({
    orderBy: { createdAt: "desc" },
  });

  const activeIncidents = incidents.filter(
    (i: { status: string; }) => i.status !== "RESOLVED" && i.status !== "CLOSED"
  ).length;

  const criticalIncidents = incidents.filter(
    (i: { severity: string }) => i.severity === "CRITICAL"
  ).length;

  const unacknowledged = incidents.filter(
    (i: { status: string }) =>
      i.status === "DETECTED" ||
      i.status === "PENDING" ||
      i.status === "pending" ||
      i.status === "UNACKNOWLEDGED"
  ).length;

  return (
    <>
      <LiveEventInjector />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-red-500/[0.035] blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <section className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

              <span className="text-[9px] font-black uppercase tracking-[0.24em] text-emerald-400">
                System Operational
              </span>

              <span className="text-slate-700">/</span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Live Command Network
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Command Center
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Real-time emergency intelligence, responder coordination and
              response orchestration.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3">
              <Signal className="h-4 w-4 text-emerald-400" />

              <div>
                <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Network
                </div>

                <div className="text-xs font-bold text-slate-200">
                  All systems connected
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
          <MetricCard
            title="Active incidents"
            value={activeIncidents}
            icon={<Activity />}
            accent="red"
          />

          <MetricCard
            title="Responders online"
            value="18"
            icon={<Users />}
            accent="blue"
          />

          <MetricCard
            title="Unacknowledged"
            value={unacknowledged}
            icon={<AlertCircle />}
            accent="orange"
          />

          <MetricCard
            title="Avg response"
            value="4m 12s"
            icon={<Clock3 />}
            accent="emerald"
          />

          <MetricCard
            title="Critical"
            value={criticalIncidents}
            icon={<ShieldAlert />}
            accent="red"
          />
        </section>

        {/* MAIN OPERATIONS GRID */}
        <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_390px]">

          {/* MAP */}
          <div className="group relative min-h-[570px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#08101b] shadow-[0_30px_100px_rgba(0,0,0,.35)]">

            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-[#050a12]/30 via-transparent to-[#050a12]/50" />

            {/* MAP HEADER */}
            <div className="absolute left-5 right-5 top-5 z-30 flex items-start justify-between">
              <div className="rounded-2xl border border-white/[0.08] bg-[#07101b]/85 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <Crosshair className="h-4 w-4 text-red-400" />

                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white">
                    Live Operations Map
                  </span>
                </div>

                <div className="mt-1 text-[9px] text-slate-500">
                  {activeIncidents} active locations tracked
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-[#07101b]/85 px-3 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />

                <span className="text-[8px] font-black uppercase tracking-[0.15em] text-emerald-300">
                  Live
                </span>
              </div>
            </div>

            {/* ACTUAL MAP */}
            <div className="absolute inset-0">
              <MapDynamic incidents={incidents} />
            </div>

            {/* MAP LEGEND */}
            <div className="absolute bottom-5 left-5 z-30 flex flex-wrap items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#07101b]/90 p-2 backdrop-blur-xl">
              <MapLegend color="bg-red-400" label="Critical" />
              <MapLegend color="bg-orange-400" label="Active" />
              <MapLegend color="bg-emerald-400" label="Resolved" />
            </div>
          </div>

          {/* INCIDENTS */}
          <aside className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#08101b] shadow-[0_30px_100px_rgba(0,0,0,.28)]">

            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <Siren className="h-4 w-4 text-red-400" />

                  <h2 className="text-sm font-black tracking-tight text-white">
                    Live Incidents
                  </h2>
                </div>

                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-slate-600">
                  Real-time response queue
                </p>
              </div>

              <div className="rounded-lg border border-red-400/10 bg-red-400/[0.05] px-2 py-1">
                <span className="text-[9px] font-black text-red-300">
                  {activeIncidents} ACTIVE
                </span>
              </div>
            </div>

            <div className="max-h-[510px] overflow-y-auto p-3">
              {incidents.length === 0 ? (
                <EmptyIncidents />
              ) : (
                <div className="space-y-2">
                  {incidents.map((incident) => (
                    <IncidentCard
                      key={incident.id}
                      incident={incident}
                    />
                  ))}
                </div>
              )}
            </div>
          </aside>
        </section>

        {/* MODULES */}
        <section className="mt-5">

          <div className="mb-3 flex items-end justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-600">
                Integrated Systems
              </div>

              <h2 className="mt-1 text-lg font-black tracking-tight text-white">
                Response Modules
              </h2>
            </div>

            <div className="hidden text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600 sm:block">
              3 services connected
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <ModuleCard
              title="Audio Engine"
              subtitle="Detection intelligence"
              description="Detects acoustic events and converts them into actionable incidents."
              icon={<Headphones />}
              accent="blue"
              href="http://localhost:3001"
            />

            <ModuleCard
              title="GeoPulse"
              subtitle="Spatial intelligence"
              description="Matches incidents with the most suitable available responders."
              icon={<Navigation />}
              accent="emerald"
              href="http://localhost:3002"
            />

            <ModuleCard
              title="Notification Engine"
              subtitle="Response communications"
              description="Dispatches alerts, tracks acknowledgement and manages escalation."
              icon={<BellRing />}
              accent="violet"
              href="http://localhost:3003"
            />
          </div>
        </section>

        {/* RESPONSE PIPELINE */}
        <section className="mt-5 rounded-[28px] border border-white/[0.08] bg-[#08101b] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                System Architecture
              </div>

              <h2 className="mt-1 text-lg font-black text-white">
                Emergency Response Pipeline
              </h2>
            </div>

            <Zap className="h-4 w-4 text-yellow-400" />
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            <PipelineStep
              number="01"
              title="Detect"
              subtitle="Audio Engine"
              icon={<Radio />}
              accent="blue"
            />

            <PipelineStep
              number="02"
              title="Analyze"
              subtitle="SCER Core"
              icon={<Activity />}
              accent="red"
            />

            <PipelineStep
              number="03"
              title="Match"
              subtitle="GeoPulse"
              icon={<MapPin />}
              accent="emerald"
            />

            <PipelineStep
              number="04"
              title="Dispatch"
              subtitle="Notification Engine"
              icon={<BellRing />}
              accent="violet"
            />
          </div>
        </section>
        <DemoControlPanel />
      </main>
    </>
  );
}

function MetricCard({
  title,
  value,
  icon,
  accent,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accent: "red" | "blue" | "orange" | "emerald";
}) {
  const styles = {
    red: "text-red-400 bg-red-400/[0.06] border-red-400/10",
    blue: "text-sky-400 bg-sky-400/[0.06] border-sky-400/10",
    orange: "text-orange-400 bg-orange-400/[0.06] border-orange-400/10",
    emerald:
      "text-emerald-400 bg-emerald-400/[0.06] border-emerald-400/10",
  };

  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-[#08101b] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-600">
          {title}
        </span>

        <span className={`rounded-lg border p-2 ${styles[accent]}`}>
          {icon}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <span className="text-2xl font-black tracking-tight text-white">
          {value}
        </span>

        <span className="text-[8px] font-bold uppercase tracking-wider text-slate-700">
          Live
        </span>
      </div>
    </div>
  );
}

function MapLegend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 px-2">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </span>
    </div>
  );
}

function EmptyIncidents() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04]">
        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
      </div>

      <h3 className="mt-4 text-sm font-bold text-white">
        No active incidents
      </h3>

      <p className="mt-1 max-w-[220px] text-xs leading-5 text-slate-600">
        The response network is currently clear.
      </p>
    </div>
  );
}

type Incident = {
  id: string;
  severity: string;
  status: string;
  createdAt: Date;
  type: string;
  location: string | null;
  description: string | null;
  assignedTo?: string | null;
};

function IncidentCard({ incident }: { incident: any }) {
  const isCritical = incident.severity === "CRITICAL";

  return (
    <Drawer>
      <DrawerTrigger className="w-full text-left">
        <div className="group cursor-pointer rounded-2xl border border-white/[0.06] bg-white/[0.018] p-3.5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  isCritical
                    ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,.8)] animate-pulse"
                    : incident.status === "RESOLVED"
                    ? "bg-emerald-400"
                    : "bg-orange-400"
                }`}
              />

              <span className="text-[8.5px] font-black uppercase tracking-[0.16em] text-slate-400 font-mono">
                {incident.id.substring(Math.max(0, incident.id.length - 8))}
              </span>
            </div>

            <span className="text-[9px] text-slate-500 font-mono">
              {new Date(incident.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          <div className="mt-2.5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="truncate text-xs sm:text-sm font-bold text-white">
                {incident.type}
              </h3>

              <span
                className={`shrink-0 rounded-md px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider ${
                  isCritical
                    ? "bg-red-400/20 text-red-300 border border-red-500/30"
                    : "bg-white/[0.06] text-slate-400"
                }`}
              >
                {incident.severity}
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-slate-400">
              <MapPin className="h-3 w-3 text-slate-500 shrink-0" />
              <span className="truncate">{incident.location || "Block C (Academic Quad)"}</span>
            </div>

            {incident.description && (
              <p className="mt-1 text-[10px] text-slate-500 line-clamp-1 italic">
                "{incident.description}"
              </p>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2">
            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.14em] text-slate-500">
                STATUS:{" "}
              </span>
              <span className="text-[9px] font-bold uppercase text-amber-400">
                {incident.status}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition">
              Inspect
              <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
            </div>
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent className="border-white/[0.08] bg-[#07101b] text-white">
        <div className="mx-auto w-full max-w-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isCritical ? "bg-red-400 animate-ping" : "bg-orange-400"
                  }`}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Incident {incident.id}
                </span>
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
                {incident.type}
              </h2>
            </div>

            <span
              className={`rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider ${
                isCritical
                  ? "bg-red-400/20 text-red-300 border border-red-500/30"
                  : "bg-white/[0.06] text-slate-400"
              }`}
            >
              {incident.severity}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <DetailItem label="Location" value={incident.location || "Block C (Academic Quad)"} />
            <DetailItem label="Status" value={incident.status.toUpperCase()} />
            <DetailItem label="Detected" value={new Date(incident.createdAt).toLocaleString()} />
            <DetailItem
              label="Source Channel"
              value={incident.reporterName || "SCER Audio Engine / Webhooks"}
            />
          </div>

          <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-500">
              Distress Transcript / Details
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              {incident.description || "Live distress telemetry recorded from sensor network."}
            </p>
          </div>

          <div className="mt-5">
            <IncidentActions incidentId={incident.id} currentStatus={incident.status} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5">
      <div className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-500">
        {label}
      </div>

      <div className="mt-1.5 break-words text-xs font-bold text-slate-200">
        {value}
      </div>
    </div>
  );
}

function ModuleCard({
  title,
  subtitle,
  description,
  icon,
  accent,
  href,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accent: "blue" | "emerald" | "violet";
  href: string;
}) {
  const styles = {
    blue: {
      icon: "text-sky-300 bg-sky-400/[0.07] border-sky-400/10",
      dot: "bg-sky-400",
      glow: "hover:shadow-[0_20px_70px_rgba(56,189,248,.06)]",
    },
    emerald: {
      icon: "text-emerald-300 bg-emerald-400/[0.07] border-emerald-400/10",
      dot: "bg-emerald-400",
      glow: "hover:shadow-[0_20px_70px_rgba(52,211,153,.06)]",
    },
    violet: {
      icon: "text-violet-300 bg-violet-400/[0.07] border-violet-400/10",
      dot: "bg-violet-400",
      glow: "hover:shadow-[0_20px_70px_rgba(167,139,250,.06)]",
    },
  };

  const style = styles[accent];

  return (
    <a
      href={href}
      className={`group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#08101b] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.13] ${style.glow}`}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.02] blur-3xl transition group-hover:bg-white/[0.04]" />

      <div className="relative flex items-start justify-between">
        <div
          className={`grid h-11 w-11 place-items-center rounded-2xl border ${style.icon}`}
        >
          {icon}
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.035] px-2 py-1">
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />

          <span className="text-[7px] font-black uppercase tracking-wider text-emerald-300">
            Online
          </span>
        </div>
      </div>

      <div className="relative mt-5">
        <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-600">
          {subtitle}
        </div>

        <h3 className="mt-1 text-base font-black text-white">{title}</h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-600 transition group-hover:text-slate-300">
          Open Module
        </span>

        <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.04] text-slate-600 transition group-hover:translate-x-1 group-hover:bg-white/[0.08] group-hover:text-white">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

function PipelineStep({
  number,
  title,
  subtitle,
  icon,
  accent,
}: {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: "blue" | "red" | "emerald" | "violet";
}) {
  const colors = {
    blue: "text-sky-300 bg-sky-400/[0.06] border-sky-400/10",
    red: "text-red-300 bg-red-400/[0.06] border-red-400/10",
    emerald: "text-emerald-300 bg-emerald-400/[0.06] border-emerald-400/10",
    violet: "text-violet-300 bg-violet-400/[0.06] border-violet-400/10",
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.018] p-3">
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${colors[accent]}`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-[7px] font-black tracking-[0.18em] text-slate-700">
          {number}
        </div>

        <div className="text-xs font-black text-white">{title}</div>

        <div className="truncate text-[9px] text-slate-600">{subtitle}</div>
      </div>
    </div>
  );
}
