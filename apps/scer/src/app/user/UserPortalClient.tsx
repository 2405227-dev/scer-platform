"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldAlert,
  Mic,
  MicOff,
  MapPin,
  Send,
  Radio,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Activity,
  User,
  LogOut,
  MessageSquare,
  Sparkles,
  PhoneCall,
  Volume2,
  RefreshCw,
} from "lucide-react";

interface UserPortalClientProps {
  initialUser: {
    userId: string;
    email: string;
    name: string;
    role: string;
    department?: string;
  };
}

const campusLocations = [
  "Main Campus Library - 2nd Floor",
  "Engineering Block C - Lab 304",
  "Student Residence Hall A",
  "Science & Tech Complex",
  "Central Dining Hall",
  "Campus Sports Arena",
  "North Parking Lot 4",
  "Administration Building - Lobby",
];

const quickKeywords = [
  { label: "🚨 EMERGENCY HELP", keyword: "HELP", type: "General Distress", severity: "CRITICAL" },
  { label: "🔥 FIRE OUTBREAK", keyword: "FIRE", type: "Fire Emergency", severity: "CRITICAL" },
  { label: "🩺 MEDICAL AID", keyword: "MEDICAL", type: "Medical Emergency", severity: "HIGH" },
  { label: "🛡️ SECURITY THREAT", keyword: "SECURITY", type: "Security Incident", severity: "HIGH" },
];

export function UserPortalClient({ initialUser }: UserPortalClientProps) {
  const router = useRouter();
  const [incidents, setIncidents] = useState<any[]>([]);
  const [loadingIncidents, setLoadingIncidents] = useState(true);
  const [location, setLocation] = useState(campusLocations[0]);
  const [customLocation, setCustomLocation] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [emergencyNotes, setEmergencyNotes] = useState("");
  const [selectedEmergencyType, setSelectedEmergencyType] = useState(quickKeywords[0]);
  const [transmitting, setTransmitting] = useState(false);
  const [activeChatIncidentId, setActiveChatIncidentId] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState("");
  const [sendingChat, setSendingChat] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  const recognitionRef = useRef<any>(null);
  const animationFrameRef = useRef<any>(null);

  // 1. Fetch User's Own Incidents
  const fetchMyIncidents = async () => {
    try {
      setLoadingIncidents(true);
      const res = await fetch(`/api/incidents?reporterId=${initialUser.userId}`);
      if (res.ok) {
        const data = await res.json();
        setIncidents(data);
      }
    } catch (err) {
      console.error("Failed to load user incidents:", err);
    } finally {
      setLoadingIncidents(false);
    }
  };

  useEffect(() => {
    fetchMyIncidents();

    // 2. Real-time SSE Stream listener
    const eventSource = new EventSource("/api/events/stream");

    eventSource.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (
          payload.type === "incident.created" ||
          payload.type === "incident.assigned" ||
          payload.type === "incident.updated" ||
          payload.type === "incident.resolved" ||
          payload.type === "incident.acknowledged"
        ) {
          // Refresh user's incidents
          fetchMyIncidents();
        }
      } catch (err) {
        // Ping or malformed payload
      }
    };

    return () => {
      eventSource.close();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [initialUser.userId]);

  // 3. Web Speech Recognition & Audio visualizer simulator
  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setAudioLevel(0);
    } else {
      setIsRecording(true);
      setTranscript("");

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event: any) => {
          let currentText = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentText += event.results[i][0].transcript;
          }
          setTranscript(currentText);
        };

        recognition.onerror = (err: any) => {
          console.warn("Speech recognition error:", err);
        };

        recognition.start();
        recognitionRef.current = recognition;
      }

      // Simulate mic audio frequency levels
      const simulateVisualizer = () => {
        setAudioLevel(Math.floor(Math.random() * 80) + 20);
        animationFrameRef.current = requestAnimationFrame(simulateVisualizer);
      };
      simulateVisualizer();
    }
  };

  // 4. Transmit Emergency Voice / Incident
  const handleSendEmergency = async () => {
    const finalLocation = customLocation.trim() || location;
    const finalDescription = transcript
      ? `[VOICE DISTRESS]: "${transcript}" ${emergencyNotes ? `| Note: ${emergencyNotes}` : ""}`
      : emergencyNotes || `Voice Emergency Signal: ${selectedEmergencyType.label} triggered by ${initialUser.name}`;

    setTransmitting(true);

    try {
      // Create real incident in shared SCER database
      const res = await fetch("/api/incidents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: selectedEmergencyType.type,
          severity: selectedEmergencyType.severity,
          status: "pending",
          location: finalLocation,
          description: finalDescription,
          reporterName: initialUser.name,
          reporterId: initialUser.userId,
        }),
      });

      if (res.ok) {
        setTranscript("");
        setEmergencyNotes("");
        if (isRecording) toggleRecording();
        await fetchMyIncidents();
      }
    } catch (err) {
      console.error("Failed to transmit emergency:", err);
    } finally {
      setTransmitting(false);
    }
  };

  // 5. Send Live Chat Message to Responders
  const handleSendChatMessage = async (incidentId: string) => {
    if (!chatMessage.trim()) return;

    setSendingChat(true);
    try {
      const res = await fetch(`/api/incidents/${incidentId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderType: "STUDENT",
          senderName: initialUser.name,
          senderId: initialUser.userId,
          content: chatMessage.trim(),
        }),
      });

      if (res.ok) {
        setChatMessage("");
        await fetchMyIncidents();
      }
    } catch (err) {
      console.error("Failed to send chat message:", err);
    } finally {
      setSendingChat(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#050a12] text-white flex flex-col selection:bg-red-500 selection:text-white">
      {/* USER PORTAL HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07111e]/90 backdrop-blur-xl px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              <ShieldAlert className="h-5 w-5 text-red-400" />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#07111e] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-wider text-white">
                  SCER USER PORTAL
                </span>
                <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[9px] font-black uppercase text-emerald-300 border border-emerald-500/30">
                  Online
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Personal Campus Emergency & Live Distress Transmitter
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-bold text-slate-200">{initialUser.name}</span>
              <span className="text-[9px] font-mono text-slate-500">
                {initialUser.department || "Student Account"} • ({initialUser.role})
              </span>
            </div>

            <button
              onClick={handleLogout}
              title="Sign Out"
              className="flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300 active:scale-95"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN BODY */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: EMERGENCY TRANSMITTER (5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-red-500/30 bg-[#08121f]/95 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-600/10 blur-2xl" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-red-400 animate-pulse" />
                <h2 className="text-sm font-black uppercase tracking-wider text-white">
                  Send Voice Emergency
                </h2>
              </div>
              <span className="rounded-full bg-red-500/20 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-red-300 border border-red-500/30">
                Direct Dispatch
              </span>
            </div>

            {/* LOCATION SELECTOR */}
            <div className="space-y-2 mb-5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                <span>Your Location / Sector</span>
              </label>
              <select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setCustomLocation("");
                }}
                className="w-full rounded-2xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2.5 text-xs text-white outline-none focus:border-cyan-400"
              >
                {campusLocations.map((loc) => (
                  <option key={loc} value={loc} className="bg-[#0b1626] text-white">
                    {loc}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                placeholder="Or specify exact room / building details..."
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-[11px] text-white placeholder-slate-500 outline-none focus:border-cyan-400"
              />
            </div>

            {/* EMERGENCY TYPE SELECTOR */}
            <div className="space-y-2 mb-5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Select Distress Category:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {quickKeywords.map((item) => {
                  const isSelected = selectedEmergencyType.label === item.label;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setSelectedEmergencyType(item)}
                      className={`p-2.5 rounded-2xl border text-left transition flex flex-col justify-between ${
                        isSelected
                          ? "border-red-500 bg-red-500/20 text-white shadow-lg shadow-red-500/20"
                          : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:border-white/[0.2] hover:text-white"
                      }`}
                    >
                      <span className="text-[11px] font-black">{item.label}</span>
                      <span className="text-[8px] font-mono opacity-70 mt-1 uppercase">
                        Severity: {item.severity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MICROPHONE VOICE RECORDER */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-center space-y-3 mb-5">
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`relative flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 shadow-2xl ${
                    isRecording
                      ? "bg-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.7)] animate-pulse scale-105"
                      : "bg-white/[0.06] text-slate-300 hover:bg-white/[0.12] hover:text-white border border-white/[0.15]"
                  }`}
                >
                  {isRecording ? <Mic className="h-9 w-9" /> : <MicOff className="h-8 w-8 text-slate-400" />}
                </button>
              </div>

              <div>
                <p className="text-xs font-black text-white">
                  {isRecording ? "Listening to Your Voice..." : "Tap Mic to Speak Emergency"}
                </p>
                <p className="text-[9px] text-slate-400 mt-0.5">
                  {isRecording
                    ? "Say your emergency distress keywords clearly"
                    : "Live speech recognition will transcribe your distress"}
                </p>
              </div>

              {/* LIVE AUDIO WAVEFORM VISUALIZER */}
              {isRecording && (
                <div className="flex items-center justify-center gap-1 h-6">
                  {[40, 70, 100, 60, 90, 45, 80, 50, 95, 30].map((h, i) => (
                    <span
                      key={i}
                      style={{
                        height: `${Math.max(4, (audioLevel * h) / 100)}px`,
                      }}
                      className="w-1 bg-red-400 rounded-full transition-all duration-75"
                    />
                  ))}
                </div>
              )}

              {transcript && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-2.5 text-left text-xs text-red-200">
                  <span className="text-[9px] font-bold uppercase text-red-400 block mb-0.5">
                    Live Transcript:
                  </span>
                  "{transcript}"
                </div>
              )}
            </div>

            {/* ADDITIONAL MESSAGE / NOTES */}
            <div className="space-y-2 mb-5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Additional Notes / Details (Optional)
              </label>
              <textarea
                value={emergencyNotes}
                onChange={(e) => setEmergencyNotes(e.target.value)}
                placeholder="E.g., 2 people trapped near north exit door..."
                rows={2}
                className="w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-red-400 resize-none"
              />
            </div>

            {/* TRANSMIT BUTTON */}
            <button
              type="button"
              disabled={transmitting}
              onClick={handleSendEmergency}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 p-4 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-red-600/30 transition hover:from-red-500 hover:to-rose-600 active:scale-95 disabled:opacity-50"
            >
              {transmitting ? (
                <span className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Transmitting Alert to Response Team...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Broadcast Emergency Signal
                </span>
              )}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: USER'S PERSONAL INCIDENTS & LIVE TRACKING (7 COLS) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl border border-white/[0.08] bg-[#07111e]/90 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
              <div>
                <h2 className="text-base font-black tracking-tight text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-cyan-400" />
                  <span>My Emergency Incidents & Live Tracking</span>
                </h2>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Showing exclusively your submitted emergencies with real-time responder updates.
                </p>
              </div>

              <button
                onClick={fetchMyIncidents}
                className="p-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] transition"
                title="Refresh Status"
              >
                <RefreshCw className={`h-4 w-4 ${loadingIncidents ? "animate-spin" : ""}`} />
              </button>
            </div>

            {loadingIncidents && incidents.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500">
                Loading your incident history...
              </div>
            ) : incidents.length === 0 ? (
              <div className="py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-400/40 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-300">No Active Emergencies</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                  You currently have no pending or active emergency calls. Use the voice transmitter on the left if you require assistance.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {incidents.map((inc) => {
                  const isPending = inc.status === "pending" || inc.status === "new";
                  const isActive = inc.status === "accepted" || inc.status === "in_progress";
                  const isResolved = inc.status === "resolved" || inc.status === "closed";

                  const isChatOpen = activeChatIncidentId === inc.id;

                  return (
                    <div
                      key={inc.id}
                      className={`rounded-2xl border transition-all p-5 ${
                        isPending
                          ? "border-amber-500/40 bg-amber-500/[0.04]"
                          : isActive
                          ? "border-cyan-500/40 bg-cyan-500/[0.04] ring-1 ring-cyan-500/20"
                          : "border-white/[0.08] bg-white/[0.02]"
                      }`}
                    >
                      {/* INCIDENT TOP BAR */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold text-slate-400">
                              #{inc.id.slice(-6).toUpperCase()}
                            </span>
                            <span className="text-xs font-black text-white">{inc.type}</span>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wider ${
                                inc.severity === "CRITICAL"
                                  ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              }`}
                            >
                              {inc.severity}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-slate-500" />
                            <span>{inc.location}</span>
                          </p>
                        </div>

                        {/* STATUS BADGE */}
                        <div>
                          {isPending && (
                            <span className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-amber-300 animate-pulse">
                              <span className="h-2 w-2 rounded-full bg-amber-400" />
                              Pending Dispatch
                            </span>
                          )}
                          {isActive && (
                            <span className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-cyan-300">
                              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                              Team En Route
                            </span>
                          )}
                          {isResolved && (
                            <span className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-300">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Resolved
                            </span>
                          )}
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-xs text-slate-300 mb-3 bg-black/20 p-3 rounded-xl border border-white/[0.04]">
                        {inc.description || "Emergency call logged."}
                      </p>

                      {/* ASSIGNED RESPONDER INFO */}
                      {inc.assignedToName || inc.responder ? (
                        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/[0.08] p-3 text-xs flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-400/20 text-cyan-300 font-bold">
                              R
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-400">Assigned Team:</div>
                              <div className="font-bold text-cyan-200">
                                {inc.assignedToName || inc.responder?.name || "Campus Response Unit"}
                              </div>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono text-cyan-300/80">
                            Status: {inc.status.toUpperCase()}
                          </span>
                        </div>
                      ) : (
                        <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-2.5 text-[10px] text-slate-400 flex items-center gap-2 mb-3">
                          <Clock className="h-3.5 w-3.5 text-amber-400" />
                          <span>Dispatching nearest available emergency unit...</span>
                        </div>
                      )}

                      {/* ACTIONS & CHAT TOGGLE */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                        <span className="text-[9px] font-mono text-slate-500">
                          Reported: {new Date(inc.createdAt).toLocaleTimeString()}
                        </span>

                        <button
                          type="button"
                          onClick={() => setActiveChatIncidentId(isChatOpen ? null : inc.id)}
                          className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                            isChatOpen
                              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                              : "bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:bg-white/[0.08]"
                          }`}
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>{isChatOpen ? "Close Chat" : "Live Chat with Responder"}</span>
                          {inc.messages?.length > 0 && (
                            <span className="ml-1 rounded-full bg-cyan-400/30 px-1.5 py-0.2 text-[9px] text-cyan-200">
                              {inc.messages.length}
                            </span>
                          )}
                        </button>
                      </div>

                      {/* TWO-WAY LIVE CHAT ACCORDION */}
                      {isChatOpen && (
                        <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-3">
                          <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                            {inc.messages && inc.messages.length > 0 ? (
                              inc.messages.map((msg: any) => {
                                const isMe = msg.senderType === "STUDENT";
                                return (
                                  <div
                                    key={msg.id}
                                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                                  >
                                    <div
                                      className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs ${
                                        isMe
                                          ? "bg-cyan-500/20 text-cyan-100 border border-cyan-500/30"
                                          : "bg-white/[0.08] text-slate-200 border border-white/[0.1]"
                                      }`}
                                    >
                                      <div className="text-[8px] font-bold text-slate-400 mb-0.5">
                                        {isMe ? "You" : msg.senderName || "Responder"}
                                      </div>
                                      {msg.content}
                                    </div>
                                    <span className="text-[7.5px] font-mono text-slate-500 mt-0.5">
                                      {new Date(msg.createdAt).toLocaleTimeString()}
                                    </span>
                                  </div>
                                );
                              })
                            ) : (
                              <p className="text-[10px] text-slate-500 text-center py-2">
                                No messages yet. Send direct updates to the responders below.
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={chatMessage}
                              onChange={(e) => setChatMessage(e.target.value)}
                              onKeyDown={(e) => e.key === "Enter" && handleSendChatMessage(inc.id)}
                              placeholder="Type message to response team..."
                              className="flex-1 rounded-xl border border-white/[0.1] bg-white/[0.04] px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400"
                            />
                            <button
                              type="button"
                              disabled={sendingChat || !chatMessage.trim()}
                              onClick={() => handleSendChatMessage(inc.id)}
                              className="rounded-xl bg-cyan-500 px-3.5 py-2 text-xs font-bold text-black shadow-md hover:bg-cyan-400 transition disabled:opacity-40"
                            >
                              <Send className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
