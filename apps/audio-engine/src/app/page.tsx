import { LiveEventInjector } from '@scer/db-scer';
import { LiveVoiceDistressDetector } from "@/components/LiveVoiceDistressDetector";

import { db } from "@scer/db-audio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mic, Activity, Webhook, Settings, Volume2, Signal } from "lucide-react";
import { SimulateDetection } from "./SimulateDetection";

const prisma = db;
export const dynamic = "force-dynamic";

export default async function AudioEngineDashboard() {
  const events = await prisma.audioDetectionEvent.findMany({
    orderBy: { createdAt: "desc" },
    take: 10
  });
  const webhooks = await prisma.audioWebhook.findMany();
  const config = await prisma.audioConfiguration.findFirst();
  const keywords = await prisma.audioKeyword.findMany();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#050a12] text-white">
      <LiveEventInjector />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <section className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,.8)]" />

              <span className="text-[9px] font-black uppercase tracking-[0.24em] text-blue-400">
                System Operational
              </span>

              <span className="text-slate-700">/</span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Audio Distress Network
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Audio Engine
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Real-time audio detection, keyword monitoring and emergency alert orchestration.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3">
              <Signal className="h-4 w-4 text-blue-400" />

              <div>
                <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-600">
                  System
                </div>

                <div className="text-xs font-bold text-slate-200">
                  {config?.isActive ? "Listening" : "Standby"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <MetricCard
            title="Detection Events"
            value={events.length}
            icon={<Activity />}
            accent="blue"
          />

          <MetricCard
            title="Active Keywords"
            value={keywords.length}
            icon={<Mic />}
            accent="cyan"
          />

          <MetricCard
            title="Webhooks Active"
            value={webhooks.length}
            icon={<Webhook />}
            accent="blue"
          />

          <MetricCard
            title="Recording Mode"
            value={config?.isActive ? "ON" : "OFF"}
            icon={<Volume2 />}
            accent="blue"
          />
        </section>

        {/* LIVE REAL-TIME MICROPHONE LISTENER */}
        <div className="mb-8">
          <LiveVoiceDistressDetector />
        </div>

        {/* CONTENT GRID */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Demo Detection */}
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <Mic className="h-5 w-5 text-blue-400" />
              <h2 className="text-lg font-bold text-white">Demo Detection</h2>
            </div>
            <p className="mb-4 text-sm text-slate-400">Simulate an audio distress detection event.</p>
            <SimulateDetection keywords={keywords} />
          </div>

          {/* Configuration */}
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-400" />
              <h2 className="text-lg font-bold text-white">Configuration</h2>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Privacy Mode</span>
                <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30">Private</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Active Keywords</span>
                <span className="text-slate-200">{keywords.length}</span>
              </div>
            </div>
          </div>

          {/* Webhooks */}
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <Webhook className="h-5 w-5 text-blue-400" />
              <h2 className="text-lg font-bold text-white">Webhooks</h2>
            </div>
            {webhooks.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {webhooks.slice(0, 3).map(w => (
                  <li key={w.id} className="p-2 bg-blue-500/10 rounded border border-blue-500/20 text-slate-300 text-xs truncate">{w.url}</li>
                ))}
                {webhooks.length > 3 && (
                  <li className="text-slate-400 text-xs">+ {webhooks.length - 3} more</li>
                )}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">No active webhooks.</p>
            )}
          </div>
        </section>

        {/* DETECTION HISTORY */}
        <section className="mt-8 rounded-xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-bold text-white">Detection History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-300">
              <thead className="border-b border-white/[0.1]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Time</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Keyword</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Confidence</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.1]">
                {events.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-slate-500">No events recorded.</td>
                  </tr>
                ) : (
                  events.map((event) => (
                    <tr key={event.id} className="hover:bg-white/[0.05] transition">
                      <td className="px-4 py-3 text-slate-400">{new Date(event.createdAt).toLocaleTimeString()}</td>
                      <td className="px-4 py-3 font-medium text-white">{event.keyword}</td>
                      <td className="px-4 py-3">{(event.confidence * 100).toFixed(1)}%</td>
                      <td className="px-4 py-3">
                        <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30">Active</Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

interface MetricCard {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accent: string;
}

function MetricCard({ title, value, icon, accent }: MetricCard) {
  const accentMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-300" },
    cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-300" },
  };

  const colors = accentMap[accent] || accentMap.blue;

  return (
    <div className={`rounded-lg border ${colors.border} ${colors.bg} p-4 backdrop-blur-sm`}>
      <div className={`flex items-center gap-2 ${colors.text} mb-2`}>{icon}</div>
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
        {title}
      </div>
      <div className="text-2xl font-black text-white">{value}</div>
    </div>
  );
}

