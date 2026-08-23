"use client";

import { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  Clock,
  Activity,
  CheckCircle2,
  Radio,
  BellRing,
  Volume2,
  Send,
  ShieldAlert,
  Search,
  Filter,
  Check,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";


const trendData = [
  { name: "00:00", incidents: 1 },
  { name: "04:00", incidents: 0 },
  { name: "08:00", incidents: 4 },
  { name: "12:00", incidents: 7 },
  { name: "16:00", incidents: 5 },
  { name: "20:00", incidents: 9 },
  { name: "23:00", incidents: 3 },
];

const zoneData = [
  { name: "North Gate", risk: 85, incidents: 8 },
  { name: "Block C", risk: 70, incidents: 6 },
  { name: "Hostel Zone", risk: 45, incidents: 4 },
  { name: "Central Hub", risk: 20, incidents: 2 },
  { name: "East Sector", risk: 30, incidents: 3 },
  { name: "South District", risk: 15, incidents: 1 },
];

const mockAudioLogs = [
  {
    id: "AUD-9021",
    timestamp: "Just now",
    source: "Microphone Array #4 (Block C)",
    keyword: "HELP",
    confidence: "98.4%",
    decibel: "84 dB",
    status: "INCIDENT_DISPATCHED",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    message: "Voice distress trigger: 'Help, medical emergency in lab room 204'",
  },
  {
    id: "AUD-9018",
    timestamp: "12 mins ago",
    source: "User Voice Portal (Mobile)",
    keyword: "FIRE",
    confidence: "94.2%",
    decibel: "79 dB",
    status: "INCIDENT_DISPATCHED",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    message: "Smoke alert reported near North Gate Cafeteria",
  },
  {
    id: "AUD-9012",
    timestamp: "34 mins ago",
    source: "Perimeter Sensor Array #2",
    keyword: "INTRUDER",
    confidence: "91.0%",
    decibel: "72 dB",
    status: "RESOLVED",
    statusColor: "text-slate-400 bg-white/5 border-white/10",
    message: "Acoustic glass breakage pattern registered at East Annex",
  },
  {
    id: "AUD-9005",
    timestamp: "1 hour ago",
    source: "Acoustic Station #7 (Hostel Quad)",
    keyword: "DISTRESS",
    confidence: "88.6%",
    decibel: "81 dB",
    status: "RESOLVED",
    statusColor: "text-slate-400 bg-white/5 border-white/10",
    message: "High-decibel vocal surge detected during sports event",
  },
];

const mockNotificationLogs = [
  {
    id: "NOTIF-4102",
    timestamp: "Just now",
    channel: "Telegram & In-App Push",
    recipient: "Campus Paramedic Squad",
    event: "EMERGENCY_BROADCAST",
    latency: "142 ms",
    status: "DELIVERED",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    details: "Interactive accept alert dispatched with GPS coordinates",
  },
  {
    id: "NOTIF-4098",
    timestamp: "12 mins ago",
    channel: "Telegram Webhook",
    recipient: "Fire & Safety Response Team",
    event: "INCIDENT_ACCEPTED",
    latency: "98 ms",
    status: "ACKNOWLEDGED",
    statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    details: "Responder accepted incident #cmt5imgwn0007vn2slv5v5l3c",
  },
  {
    id: "NOTIF-4091",
    timestamp: "25 mins ago",
    channel: "User Real-Time Stream (SSE)",
    recipient: "Reporting Student (student@scer.campus)",
    event: "STATUS_UPDATE",
    latency: "45 ms",
    status: "DELIVERED",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    details: "Live response ETA broadcasted: Team arriving in 2.4 min",
  },
  {
    id: "NOTIF-4085",
    timestamp: "50 mins ago",
    channel: "SMS / Radio Relay",
    recipient: "Campus Security Patrol",
    event: "INCIDENT_RESOLVED",
    latency: "210 ms",
    status: "ARCHIVED",
    statusColor: "text-slate-400 bg-white/5 border-white/10",
    details: "Incident closed and safety audit record updated",
  },
];

export function AnalyticsClient({ stats }: { stats: any }) {
  const [activeTab, setActiveTab] = useState<"overview" | "audio" | "notify">("overview");
  const [searchTerm, setSearchTerm] = useState("");

  return (
      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <Activity className="h-7 w-7 text-purple-400" />
              Safety Intelligence & Background Telemetry
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Operational analytics, acoustic distress monitoring, and automated notification delivery logs.
            </p>
          </div>

          {/* TAB NAVIGATION */}
          <div className="flex items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-[#07101b] p-1.5 self-start md:self-auto shadow-xl">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                activeTab === "overview"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-inner"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Overview & Risk Models</span>
            </button>

            <button
              onClick={() => setActiveTab("audio")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                activeTab === "audio"
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-inner"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Radio className="h-3.5 w-3.5" />
              <span>Audio Distress Logs</span>
            </button>

            <button
              onClick={() => setActiveTab("notify")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                activeTab === "notify"
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/30 shadow-inner"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <BellRing className="h-3.5 w-3.5" />
              <span>Notification Logs</span>
            </button>
          </div>
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <>
            {/* TOP KPI CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                    Top Risk Sector
                  </span>
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                </div>
                <div className="mt-2 text-2xl font-black text-white">North Gate</div>
                <p className="mt-1 text-[11px] text-slate-400">38% of acoustic distress alerts</p>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                    Peak Incident Hours
                  </span>
                  <Clock className="h-4 w-4 text-amber-400" />
                </div>
                <div className="mt-2 text-2xl font-black text-white">8 PM - 11 PM</div>
                <p className="mt-1 text-[11px] text-slate-400">Evening transition peak</p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                    Mean Response Time
                  </span>
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="mt-2 text-2xl font-black text-white">2.4 min</div>
                <p className="mt-1 text-[11px] text-emerald-400 font-semibold">↓ 32% faster with GeoPulse AI</p>
              </div>

              <div className="rounded-2xl border border-sky-500/20 bg-sky-500/[0.04] p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                    Resolution Rate
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-sky-400" />
                </div>
                <div className="mt-2 text-2xl font-black text-white">96.8%</div>
                <p className="mt-1 text-[11px] text-slate-400">Zero unacknowledged escalations</p>
              </div>
            </div>

            {/* CHARTS GRID */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
              {/* INCIDENT VELOCITY */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#08101b] p-5 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">24-Hour Incident Velocity</h3>
                    <p className="text-xs text-slate-500">Real-time incident ingestion distribution</p>
                  </div>
                  <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[10px] font-mono text-slate-400">
                    Live Telemetry
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0a1220",
                          borderColor: "rgba(255,255,255,0.1)",
                          borderRadius: "12px",
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="incidents"
                        stroke="#ef4444"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorIncidents)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* SECTOR RISK INDEX */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#08101b] p-5 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Sector Vulnerability Index</h3>
                    <p className="text-xs text-slate-500">Calculated risk score by campus sector</p>
                  </div>
                  <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[10px] font-mono text-slate-400">
                    Spatial AI
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={zoneData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0a1220",
                          borderColor: "rgba(255,255,255,0.1)",
                          borderRadius: "12px",
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="risk" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </>
        )}

        {/* AUDIO DISTRESS LOGS TAB */}
        {activeTab === "audio" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#08101b] p-5 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Radio className="h-5 w-5 text-sky-400" />
                    Automatic Acoustic Distress & Voice Ingestion Logs
                  </h3>
                  <p className="text-xs text-slate-400">
                    Background microservice automatically transcribes user voices, detects distress triggers, and raises pending incidents.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-xl border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    Audio Engine Active
                  </div>
                </div>
              </div>

              {/* LOG TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-white/[0.08] text-[10px] font-black uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="pb-3">Event ID</th>
                      <th className="pb-3">Timestamp</th>
                      <th className="pb-3">Audio Source</th>
                      <th className="pb-3">Detected Keyword</th>
                      <th className="pb-3">Confidence</th>
                      <th className="pb-3">Decibels</th>
                      <th className="pb-3">Incident Pipeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {mockAudioLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-white/[0.02] transition">
                        <td className="py-3 font-mono font-bold text-sky-400">{log.id}</td>
                        <td className="py-3 text-slate-400">{log.timestamp}</td>
                        <td className="py-3 text-white font-medium">{log.source}</td>
                        <td className="py-3">
                          <span className="rounded-md border border-red-500/30 bg-red-500/10 px-2 py-0.5 font-mono font-bold text-red-400">
                            {log.keyword}
                          </span>
                        </td>
                        <td className="py-3 font-mono text-emerald-400">{log.confidence}</td>
                        <td className="py-3 font-mono text-slate-300">{log.decibel}</td>
                        <td className="py-3">
                          <span className={`rounded-md border px-2 py-0.5 text-[9px] font-black tracking-wider ${log.statusColor}`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* NOTIFICATION LOGS TAB */}
        {activeTab === "notify" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#08101b] p-5 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <BellRing className="h-5 w-5 text-violet-400" />
                    Automated Multichannel Notification Dispatch Logs
                  </h3>
                  <p className="text-xs text-slate-400">
                    Background microservice coordinates Telegram broadcasts, responder dispatch pings, and live user status updates.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-bold text-violet-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                    </span>
                    Notify Engine Active
                  </div>
                </div>
              </div>

              {/* LOG TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-white/[0.08] text-[10px] font-black uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="pb-3">Dispatch ID</th>
                      <th className="pb-3">Timestamp</th>
                      <th className="pb-3">Channel</th>
                      <th className="pb-3">Recipient</th>
                      <th className="pb-3">Event Type</th>
                      <th className="pb-3">Latency</th>
                      <th className="pb-3">Delivery Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {mockNotificationLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-white/[0.02] transition">
                        <td className="py-3 font-mono font-bold text-violet-400">{log.id}</td>
                        <td className="py-3 text-slate-400">{log.timestamp}</td>
                        <td className="py-3 text-white font-medium">{log.channel}</td>
                        <td className="py-3 text-slate-300">{log.recipient}</td>
                        <td className="py-3 font-mono text-cyan-300">{log.event}</td>
                        <td className="py-3 font-mono text-slate-400">{log.latency}</td>
                        <td className="py-3">
                          <span className={`rounded-md border px-2 py-0.5 text-[9px] font-black tracking-wider ${log.statusColor}`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
  );
}
