import { LiveEventInjector } from '@scer/db-scer/src/LiveEventInjector';
import { NotificationSimulator } from "@/components/NotificationSimulator";

import { db } from "@scer/db-notification";
import { Bell, ArrowRight, ShieldAlert, CheckCircle2, Signal, BellRing } from "lucide-react";

const prisma = db;
export const dynamic = "force-dynamic";

export default async function NotificationDashboard() {
  const notifications = await prisma.notification.findMany({ orderBy: { createdAt: "desc" }, take: 10 });
  const rules = await prisma.notificationRule.findMany();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#050a12] text-white">
      <LiveEventInjector />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.035] blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-pink-500/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <section className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,250,.8)]" />

              <span className="text-[9px] font-black uppercase tracking-[0.24em] text-purple-400">
                System Operational
              </span>

              <span className="text-slate-700">/</span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Alert Distribution Network
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Smart Notification Engine
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Intelligent alert routing, rule-based dispatch and multi-channel notification orchestration.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3">
              <Signal className="h-4 w-4 text-purple-400" />

              <div>
                <div className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Network
                </div>

                <div className="text-xs font-bold text-slate-200">
                  All channels active
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <MetricCard
            title="Total Notifications"
            value={notifications.length}
            icon={<BellRing />}
            accent="purple"
          />

          <MetricCard
            title="Active Rules"
            value={rules.length}
            icon={<ShieldAlert />}
            accent="pink"
          />

          <MetricCard
            title="Dispatch Success"
            value="100%"
            icon={<CheckCircle2 />}
            accent="purple"
          />

          <MetricCard
            title="Engine Status"
            value="Online"
            icon={<Bell />}
            accent="purple"
          />
        </section>

        {/* SIMULATOR & CONTENT GRID */}
        <div className="mb-8">
          <NotificationSimulator />
        </div>

        {/* CONTENT GRID */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Rule Builder */}
          <div className="lg:col-span-2 rounded-xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-purple-400" />
              <h2 className="text-lg font-bold text-white">Notification Rule Engine</h2>
            </div>
            
            {rules.length === 0 ? (
              <p className="text-center text-slate-500 py-8">No rules configured.</p>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {rules.map((rule) => (
                  <div key={rule.id} className="p-4 border border-purple-500/20 bg-purple-500/5 rounded-lg hover:bg-purple-500/10 transition">
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">IF Condition</div>
                        <div className="px-3 py-2 bg-purple-500/10 rounded border border-purple-500/20 text-sm text-slate-300 font-medium">
                          {rule.condition}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">THEN Action</div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 rounded border border-purple-500/20 text-sm font-medium text-slate-300">
                          <Bell className="w-4 h-4 text-purple-400" />
                          {rule.action}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dispatch Stats */}
          <div className="space-y-6">
            <div className="rounded-xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-400" />
                <h2 className="text-lg font-bold text-white">Performance</h2>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-purple-500/10 rounded-md border border-purple-500/20">
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Dispatched</p>
                  <div className="text-2xl font-black text-purple-300">{notifications.length}</div>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-md border border-purple-500/20">
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Rules Active</p>
                  <div className="text-2xl font-black text-purple-300">{rules.length}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DISPATCH LOG */}
        <section className="mt-8 rounded-xl border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-2">
            <BellRing className="h-5 w-5 text-purple-400" />
            <h2 className="text-lg font-bold text-white">Dispatch Log</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-300">
              <thead className="border-b border-white/[0.1]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Time</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Message</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.1]">
                {notifications.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-8 text-slate-500">No notifications dispatched.</td>
                  </tr>
                ) : (
                  notifications.map(notif => (
                    <tr key={notif.id} className="hover:bg-white/[0.05] transition">
                      <td className="px-4 py-3 text-slate-400">{new Date(notif.createdAt).toLocaleTimeString()}</td>
                      <td className="px-4 py-3 font-medium text-white">{notif.message}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-500/30">
                          {notif.status}
                        </span>
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
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-300" },
    pink: { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-300" },
  };

  const colors = accentMap[accent] || accentMap.purple;

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

