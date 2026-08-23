"use client";

import { useState } from "react";
import { BellRing, Send, CheckCircle2, ShieldAlert, Smartphone, Mail, Radio } from "lucide-react";

export function NotificationSimulator() {
  const [recipient, setRecipient] = useState("Medical Team 1");
  const [severity, setSeverity] = useState("CRITICAL");
  const [channel, setChannel] = useState("ALL");
  const [message, setMessage] = useState("High-priority emergency distress alert dispatched.");
  const [loading, setLoading] = useState(false);
  const [lastDelivered, setLastDelivered] = useState<any>(null);

  const handleDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLastDelivered(null);
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "EMERGENCY_BROADCAST",
          severity,
          recipient,
          message: `[${channel}] ${message}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setLastDelivered({
          id: data.notificationId,
          recipient,
          severity,
          time: new Date().toLocaleTimeString(),
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-5 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BellRing className="h-5 w-5 text-violet-400" />
          <h3 className="text-sm font-black uppercase tracking-wider text-white">
            Multi-Channel Broadcast Simulator
          </h3>
        </div>
        <span className="rounded-md bg-violet-500/20 px-2 py-0.5 text-[9px] font-bold uppercase text-violet-300 border border-violet-500/30">
          Escalation Engine
        </span>
      </div>

      <form onSubmit={handleDispatch} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Target Recipient / Unit
            </label>
            <select
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2 text-xs text-white focus:border-violet-400 focus:outline-none"
            >
              <option value="Medical Team 1">Medical Team 1</option>
              <option value="Campus Security Lead">Campus Security Lead</option>
              <option value="Fire Marshal Brigade">Fire Marshal Brigade</option>
              <option value="All Active Responders">All Active Responders (Broadcast)</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Severity Level
            </label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2 text-xs text-white focus:border-violet-400 focus:outline-none"
            >
              <option value="CRITICAL">🔴 CRITICAL (Instant Radio/SMS)</option>
              <option value="HIGH">🟠 HIGH</option>
              <option value="MEDIUM">🟡 MEDIUM</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Delivery Channel
            </label>
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2 text-xs text-white focus:border-violet-400 focus:outline-none"
            >
              <option value="ALL">Omni-Channel (SMS + App + Radio)</option>
              <option value="SMS">Emergency SMS Gateway</option>
              <option value="PUSH">Tactical Push Notification</option>
              <option value="RADIO">PMR Digital Radio Dispatch</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Dispatch Directive Message
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-white/[0.1] bg-[#07101b] px-3 py-2 text-xs text-white focus:border-violet-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-600 hover:to-purple-700 active:scale-95 disabled:opacity-50"
        >
          <Send className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          <span>{loading ? "Routing through multi-channel gateways..." : "Transmit Emergency Dispatch Alert"}</span>
        </button>

        {lastDelivered && (
          <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 text-xs text-violet-200 flex items-center gap-2.5 animate-in fade-in">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
            <div>
              <div className="font-bold">Alert Delivered & Logged!</div>
              <div className="text-[10px] text-violet-300/80">
                Dispatched to {lastDelivered.recipient} [{lastDelivered.severity}] at {lastDelivered.time} (ID: {lastDelivered.id})
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
