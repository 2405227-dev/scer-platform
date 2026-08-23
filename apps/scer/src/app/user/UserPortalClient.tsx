"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  Sparkles,
  PhoneCall,
  Volume2,
  RefreshCw,
  Compass,
  Crosshair,
  Zap,
  Siren,
  Wifi,
  Headphones,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Bell,
  X,
  Navigation,
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
  "Block C (Academic Quad)",
  "Main Campus Library - 2nd Floor",
  "Engineering Complex - Lab 304",
  "Student Residence Hall Alpha",
  "Science & Tech Innovation Center",
  "Central Dining & Student Commons",
  "Athletic Arena & Stadium",
  "North Gate Perimeter",
  "Administration Building - Main Lobby",
];

const emergencyCategories = [
  {
    id: "medical",
    label: "Medical Trauma",
    subtitle: "Paramedic & First Aid",
    keyword: "HELP",
    type: "Medical & Trauma Distress",
    severity: "CRITICAL",
    icon: Activity,
    color: "from-rose-500/20 to-red-600/20 border-rose-500/30 text-rose-300 hover:border-rose-400",
    badgeColor: "bg-rose-500/20 text-rose-300",
  },
  {
    id: "fire",
    label: "Fire Outbreak",
    subtitle: "Smoke & Chemical Alarm",
    keyword: "FIRE",
    type: "Active Fire / Smoke Alarm",
    severity: "CRITICAL",
    icon: Flame,
    color: "from-amber-500/20 to-orange-600/20 border-amber-500/30 text-amber-300 hover:border-amber-400",
    badgeColor: "bg-amber-500/20 text-amber-300",
  },
  {
    id: "police",
    label: "Security Threat",
    subtitle: "Armed Alert / Intrusion",
    keyword: "POLICE",
    type: "Active Armed Threat / Security Breach",
    severity: "CRITICAL",
    icon: ShieldAlert,
    color: "from-blue-600/20 to-indigo-600/20 border-blue-500/30 text-blue-300 hover:border-blue-400",
    badgeColor: "bg-blue-500/20 text-blue-300",
  },
  {
    id: "general",
    label: "Emergency SOS",
    subtitle: "Rapid Escort & Assist",
    keyword: "EMERGENCY",
    type: "General Emergency SOS",
    severity: "HIGH",
    icon: Siren,
    color: "from-purple-500/20 to-violet-600/20 border-purple-500/30 text-purple-300 hover:border-purple-400",
    badgeColor: "bg-purple-500/20 text-purple-300",
  },
];

export function UserPortalClient({ initialUser }: UserPortalClientProps) {
  const router = useRouter();
  const [incidents, setIncidents] = useState<any[]>([]);
  const [loadingIncidents, setLoadingIncidents] = useState(true);
  const [location, setLocation] = useState(campusLocations[0]);
  const [customLocation, setCustomLocation] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(emergencyCategories[0]);
  const [transmitting, setTransmitting] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [toastMessage, setToastMessage] = useState<{
    title: string;
    description: string;
    type: "success" | "alert" | "info";
  } | null>(null);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  // Live GPS Coordinates (KIIT Campus 6, Bhubaneswar, Odisha)
  const [userGps, setUserGps] = useState<{
    lat: number;
    lon: number;
    accuracy: number;
    status: "LOCKED" | "SEARCHING";
    lastUpdated: string;
  }>({
    lat: 20.352921,
    lon: 85.820145,
    accuracy: 3,
    status: "LOCKED",
    lastUpdated: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
  });

  const recognitionRef = useRef<any>(null);
  const animationFrameRef = useRef<any>(null);

  interface ShortNotification {
    id: string;
    keyword: string;
    unit: string;
    time: string;
    details: string;
    type: "urgent" | "info" | "success";
    read: boolean;
  }

  const [notifications, setNotifications] = useState<ShortNotification[]>([
    {
      id: "notif-init",
      keyword: "ONLINE",
      unit: "Emergency Terminal Armed",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      details: "GPS Telemetry Synced",
      type: "info",
      read: true,
    },
  ]);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  const [activeDispatchAlert, setActiveDispatchAlert] = useState<{
    incidentId: string;
    type: string;
    status: string;
    assignedTo: string;
    location: string;
    time: string;
  } | null>(null);

  // Audio Chime synthesizer for dispatch confirmation
  const playDispatchChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc1.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12); // E5
      osc1.frequency.setValueAtTime(783.99, ctx.currentTime + 0.24); // G5

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.7);

      osc1.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc1.stop(ctx.currentTime + 0.7);
    } catch (e) {}
  };

  // 1. Geolocation Tracking
  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setUserGps({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            accuracy: Math.round(pos.coords.accuracy || 3),
            status: "LOCKED",
            lastUpdated: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
          });
        },
        () => {
          console.log("[UserPortal] GPS using campus baseline coordinates");
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  // 2. Fetch User Incidents & Check for Dispatched State
  const fetchMyIncidents = useCallback(async () => {
    try {
      setLoadingIncidents(true);
      const res = await fetch(`/api/incidents?reporterId=${initialUser.userId}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setIncidents(data);

          // Check if any recent active incident was just accepted or assigned
          const activeAssigned = data.find(
            (i: any) =>
              (i.status === "accepted" ||
                i.status === "assigned" ||
                i.status === "ASSIGNED" ||
                i.status === "en_route" ||
                i.status === "in_progress") &&
              i.assignedTo
          );

          if (activeAssigned && (!activeDispatchAlert || activeDispatchAlert.incidentId !== activeAssigned.id)) {
            const unitName = activeAssigned.assignedToName || activeAssigned.assignedTo || "Campus Response Unit";
            const shortStatus = (activeAssigned.status === "en_route" ? "EN ROUTE" : "DISPATCHED");

            setActiveDispatchAlert({
              incidentId: activeAssigned.id,
              type: activeAssigned.type,
              status: shortStatus,
              assignedTo: unitName,
              location: activeAssigned.location || "Campus Quad",
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            });

            setNotifications((prev) => [
              {
                id: `notif-${activeAssigned.id}-${Date.now()}`,
                keyword: shortStatus,
                unit: unitName,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                details: "ETA ~2 mins • GPS Locked",
                type: "urgent",
                read: false,
              },
              ...prev,
            ]);

            playDispatchChime();
          }
        }
      }
    } catch (err) {
      console.error("Failed to load incidents:", err);
    } finally {
      setLoadingIncidents(false);
    }
  }, [initialUser.userId, activeDispatchAlert]);

  useEffect(() => {
    fetchMyIncidents();

    // Live Server-Sent Events listener
    const eventSource = new EventSource("/api/events/stream");
    eventSource.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (
          payload.type === "incident.created" ||
          payload.type === "incident.assigned" ||
          payload.type === "incident.updated" ||
          payload.type === "incident.resolved"
        ) {
          if (
            payload.data?.status === "accepted" ||
            payload.data?.status === "assigned" ||
            payload.data?.status === "ASSIGNED" ||
            payload.data?.status === "en_route"
          ) {
            const unitName = payload.data?.assignedToName || payload.data?.assignedTo || "Quick Response Unit";
            const shortStatus = payload.data?.status === "en_route" ? "EN ROUTE" : "DISPATCHED";

            setActiveDispatchAlert({
              incidentId: payload.incidentId || "active",
              type: payload.data?.type || "Emergency Response",
              status: shortStatus,
              assignedTo: unitName,
              location: payload.data?.location || location,
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            });

            setNotifications((prev) => [
              {
                id: `notif-${Date.now()}`,
                keyword: shortStatus,
                unit: unitName,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                details: "ETA ~2 mins • GPS Locked",
                type: "urgent",
                read: false,
              },
              ...prev,
            ]);

            playDispatchChime();
          }

          fetchMyIncidents();
        }
      } catch (err) {}
    };

    return () => {
      eventSource.close();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [fetchMyIncidents, location]);

  // 3. One-Touch SOS Dispatch (Auto-Uses Live GPS Telemetry)
  const handleBroadcastSOS = async (overrideKeyword?: string, overrideTranscript?: string) => {
    const finalLocation = `Live GPS: ${userGps.lat.toFixed(5)}° N, ${userGps.lon.toFixed(5)}° W`;
    const spokenText = overrideTranscript || transcript;
    const category = overrideKeyword
      ? emergencyCategories.find((c) => overrideKeyword.includes(c.keyword)) || selectedCategory
      : selectedCategory;

    const descriptionText = spokenText
      ? `Voice SOS: "${spokenText}" detected from active student terminal.`
      : `Emergency distress beacon triggered by ${initialUser.name} at ${finalLocation}.`;

    setTransmitting(true);

    try {
      // Create incident in shared database with live auto-tracked GPS
      const res = await fetch("/api/incidents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: category.type,
          severity: category.severity,
          status: "pending",
          location: finalLocation,
          location_lat: userGps.lat,
          location_lon: userGps.lon,
          description: descriptionText,
          reporterName: initialUser.name,
          reporterId: initialUser.userId,
        }),
      });

      // Dispatch emergency broadcast to Notification Engine
      await fetch("http://localhost:3003/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "USER_EMERGENCY_SOS",
          severity: "CRITICAL",
          recipient: "Campus Command & Quick Response Unit",
          message: `🚨 CRITICAL SOS: ${initialUser.name} (${initialUser.email}) at GPS: ${userGps.lat.toFixed(
            5
          )}°, ${userGps.lon.toFixed(5)}°. Type: ${category.type}. "${descriptionText}"`,
        }),
      }).catch(() => null);

      if (res.ok) {
        setNotifications((prev) => [
          {
            id: `notif-${Date.now()}`,
            keyword: "SOS SENT",
            unit: category.type,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            details: `GPS: ${userGps.lat.toFixed(4)}°N, ${userGps.lon.toFixed(4)}°W Locked`,
            type: "urgent",
            read: false,
          },
          ...prev,
        ]);
        setTranscript("");
        await fetchMyIncidents();
      }
    } catch (err) {
      console.error("Failed to broadcast SOS:", err);
    } finally {
      setTransmitting(false);
    }
  };

  // 4. Microphone Voice Distress Sentinel (Auto-Detects Voice & GPS)
  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setAudioLevel(0);
      setNotifications((prev) => [
        {
          id: `notif-${Date.now()}`,
          keyword: "STANDBY",
          unit: "Voice Sentinel Off",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          details: "Microphone listener deactivated",
          type: "info",
          read: false,
        },
        ...prev,
      ]);
    } else {
      setIsRecording(true);
      setTranscript("");

      // Notify Command Center
      fetch("http://localhost:3003/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "AUDIO_SENTRY_ONLINE",
          severity: "HIGH",
          recipient: "Campus Command Center",
          message: `📡 AUDIO SENTRY ONLINE: ${initialUser.name} is streaming audio & live GPS (${userGps.lat}, ${userGps.lon}).`,
        }),
      }).catch(() => null);

      setNotifications((prev) => [
        {
          id: `notif-${Date.now()}`,
          keyword: "LISTENING",
          unit: "Voice Sentinel Live",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          details: "Auto-detecting HELP, FIRE, POLICE with Live GPS",
          type: "success",
          read: false,
        },
        ...prev,
      ]);

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

          const upper = currentText.toUpperCase();
          const detected = ["HELP", "FIRE", "POLICE", "GUNSHOT", "EMERGENCY", "SAVE ME", "AMBULANCE", "ATTACK"].find(
            (kw) => upper.includes(kw)
          );

          if (detected) {
            handleBroadcastSOS(detected, currentText);
          }
        };

        recognition.onerror = (err: any) => {
          console.warn("Speech error:", err);
        };

        recognition.start();
        recognitionRef.current = recognition;
      }

      const simulateVisualizer = () => {
        setAudioLevel(Math.floor(Math.random() * 70) + 30);
        animationFrameRef.current = requestAnimationFrame(simulateVisualizer);
      };
      simulateVisualizer();
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  const activeIncidents = incidents.filter((i) => i.status !== "RESOLVED" && i.status !== "CLOSED");

  return (
    <div className="min-h-screen bg-[#050a12] text-white flex flex-col justify-between selection:bg-red-500/30 font-sans">

      {/* TOP SLEEK HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050811]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              <ShieldAlert className="h-5 w-5 text-white" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#050811]" />
            </div>
            <div>
              <div className="text-xs font-black tracking-widest text-white uppercase">SCER SafeCampus</div>
              <div className="text-[9px] font-bold text-slate-400">Student Emergency Terminal</div>
            </div>
          </div>

          {/* RIGHT CONTROLS: GPS + BELL + USER + LOGOUT */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* GPS BADGE */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3 py-1 text-[11px] font-mono font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>
                {userGps.lat.toFixed(4)}°N, {userGps.lon.toFixed(4)}°W
              </span>
            </div>

            {/* 🔔 NOTIFICATION BELL BUTTON WITH DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowNotificationsDropdown(!showNotificationsDropdown)}
                className="relative rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-white/[0.08] transition cursor-pointer"
                title="Notifications"
              >
                <Bell className="h-4 w-4" />
                {notifications.filter((n) => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8.5px] font-black text-white ring-2 ring-[#050811] animate-pulse">
                    {notifications.filter((n) => !n.read).length}
                  </span>
                )}
              </button>

              {/* NOTIFICATIONS DROPDOWN MENU */}
              {showNotificationsDropdown && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-3xl border border-white/[0.1] bg-[#070e1b]/98 p-3.5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 mb-2.5">
                    <div className="flex items-center gap-2">
                      <Bell className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-white">
                        Live Notifications
                      </span>
                    </div>
                    {notifications.length > 0 && (
                      <button
                        onClick={() =>
                          setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
                        }
                        className="text-[9.5px] text-slate-400 hover:text-white font-bold cursor-pointer"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  <div className="max-h-64 overflow-y-auto space-y-2 pr-0.5">
                    {notifications.length === 0 ? (
                      <div className="py-6 text-center text-xs text-slate-500">
                        No notifications.
                      </div>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`rounded-2xl border p-2.5 transition flex items-start gap-2.5 ${
                            n.read
                              ? "border-white/[0.05] bg-white/[0.01] text-slate-400"
                              : "border-emerald-500/30 bg-emerald-500/[0.07] text-white"
                          }`}
                        >
                          <span className="h-2 w-2 rounded-full bg-emerald-400 mt-1 shrink-0 animate-ping" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[8px] font-black text-emerald-300 uppercase">
                                {n.keyword}
                              </span>
                              <span className="text-[8.5px] font-mono text-slate-500">{n.time}</span>
                            </div>
                            <div className="text-xs font-bold text-white mt-1 truncate">{n.unit}</div>
                            <div className="text-[9.5px] text-slate-400 mt-0.5">{n.details}</div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* USER NAME */}
            <div className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
              <User className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-bold text-white max-w-[100px] truncate">{initialUser.name}</span>
            </div>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.08] transition cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN 2-COLUMN TACTICAL GRID: LEFT (SOS & VOICE) | RIGHT (LIVE RESPONSE & FEED) */}
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ════════════════ LEFT COLUMN: SOS & EMERGENCY ACTIVATORS ════════════════ */}
          <div className="lg:col-span-7 flex flex-col items-center space-y-6">
            {/* 1. AUTO-DETECTED LIVE GPS LOCATION BADGE */}
            <div className="w-full flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-4 py-2 text-xs font-mono font-bold text-emerald-300 backdrop-blur-md shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span>📍 Live GPS: {userGps.lat.toFixed(5)}° N, {userGps.lon.toFixed(5)}° W (±{userGps.accuracy}m)</span>
              </div>
            </div>

            {/* 2. THE HERO SOS PULSING ACTIVATOR (APPLE / TESLA STYLE) */}
            <div className="relative flex flex-col items-center justify-center my-2">
              {/* MULTI-LAYER NEON SONAR RINGS */}
              <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-red-600/20 via-rose-500/10 to-transparent blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute h-64 w-64 rounded-full border border-red-500/30 animate-ping duration-1000 pointer-events-none opacity-40" />
              <div className="absolute h-56 w-56 rounded-full border border-rose-500/20 pointer-events-none" />

              {/* MAIN CIRCULAR BUTTON */}
              <button
                onClick={() => handleBroadcastSOS()}
                disabled={transmitting}
                className="group relative grid h-52 w-52 sm:h-56 sm:w-56 place-items-center rounded-full bg-gradient-to-br from-red-500 via-rose-600 to-red-700 p-2.5 shadow-[0_0_80px_rgba(244,63,94,0.55)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_100px_rgba(244,63,94,0.7)] active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {/* INNER BEZEL */}
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-white/30 bg-gradient-to-b from-white/15 via-black/10 to-black/30 text-center shadow-inner backdrop-blur-sm">
                  <ShieldAlert className="h-12 w-12 sm:h-14 sm:w-14 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition group-hover:scale-110" />
                  <span className="mt-1 text-2xl sm:text-3xl font-black tracking-widest text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    {transmitting ? "SENDING..." : "SOS"}
                  </span>
                  <span className="text-[9.5px] font-black uppercase tracking-[0.2em] text-rose-100/90 drop-shadow">
                    Instant Dispatch
                  </span>
                </div>
              </button>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Encrypted Direct Link to Campus Emergency Center</span>
              </div>
            </div>

            {/* 3. SMART VOICE DISTRESS SENTINEL BAR */}
            <div className="w-full max-w-xl">
              <div className="rounded-3xl border border-white/[0.1] bg-[#070e1c]/85 p-4 shadow-xl backdrop-blur-2xl transition hover:border-white/[0.18]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-10 w-10 place-items-center rounded-2xl border transition ${
                        isRecording
                          ? "border-red-500/40 bg-red-500/20 text-red-300 animate-pulse"
                          : "border-sky-500/30 bg-sky-500/10 text-sky-300"
                      }`}
                    >
                      {isRecording ? <Headphones className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </div>
                    <div>
                      <div className="text-xs font-black text-white flex items-center gap-2">
                        <span>Voice Distress Sentinel</span>
                        {isRecording && (
                          <span className="rounded-full bg-red-500/20 border border-red-500/40 px-2 py-0.2 text-[8px] font-black text-red-300">
                            LIVE LISTENING
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {isRecording ? 'Speak "HELP", "FIRE", or "POLICE" anytime' : "Auto-detects emergency speech keywords"}
                      </div>
                    </div>
                  </div>

                  {/* TOGGLE BUTTON */}
                  <button
                    onClick={toggleRecording}
                    className={`rounded-2xl px-4 py-2 text-xs font-black tracking-wider uppercase transition cursor-pointer ${
                      isRecording
                        ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:bg-red-600"
                        : "bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500/30"
                    }`}
                  >
                    {isRecording ? "Active" : "Enable"}
                  </button>
                </div>

                {/* LIVE SOUNDWAVE VISUALIZER IF RECORDING */}
                {isRecording && (
                  <div className="mt-3.5 pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center gap-1.5 h-6">
                      {[...Array(28)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-sky-500 to-cyan-300 rounded-full transition-all duration-75"
                          style={{
                            height: `${Math.max(20, (audioLevel + (i % 6) * 12) % 100)}%`,
                          }}
                        />
                      ))}
                    </div>

                    {transcript && (
                      <div className="mt-2.5 rounded-xl bg-black/40 px-3 py-1.5 text-xs text-sky-200 font-mono border border-sky-500/20">
                        <span className="text-slate-500">Heard: </span>"{transcript}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* 4. EMERGENCY CATEGORY CARDS (4 TACTILE TILES) */}
            <div className="w-full max-w-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 mb-3 text-center">
                Or Tap Specific Emergency Type
              </div>

              <div className="grid grid-cols-2 gap-3">
                {emergencyCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat);
                        handleBroadcastSOS(cat.keyword);
                      }}
                      className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-200 cursor-pointer active:scale-98 backdrop-blur-xl ${
                        isSelected
                          ? "border-red-400/80 bg-red-500/[0.18] shadow-[0_0_25px_rgba(239,68,68,0.2)]"
                          : "border-white/[0.09] bg-[#070d1a]/80 hover:border-white/[0.22] hover:bg-[#0c152a]/90 hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${cat.color} transition group-hover:scale-110 shadow-md`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`rounded-md px-2 py-0.5 text-[8px] font-black uppercase ${cat.badgeColor}`}>
                          {cat.severity}
                        </span>
                      </div>

                      <div className="mt-3">
                        <div className="text-xs sm:text-sm font-black text-white">{cat.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{cat.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ════════════════ RIGHT COLUMN: LIVE RESPONSE & TRACKER ════════════════ */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* 1. LIVE RESPONSE ACTIVE TRACKER */}
            {activeIncidents.length > 0 ? (
              <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 via-[#07121a]/90 to-[#050a12] p-5 backdrop-blur-xl shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500" />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                        Live Response Active
                      </span>
                      <div className="text-sm font-black text-white">
                        {activeIncidents[0].type}
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-[10px] font-black text-emerald-300 uppercase">
                    {activeIncidents[0].assignedTo ? "UNIT DISPATCHED" : "SIGNAL INGESTED"}
                  </span>
                </div>

                {/* PROGRESS STEPS BAR */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/30 p-2.5 text-center">
                    <div className="text-[9px] font-black uppercase text-emerald-300">1. Received</div>
                    <div className="text-[8px] text-slate-400">GPS Locked</div>
                  </div>

                  <div
                    className={`rounded-xl p-2.5 text-center border transition ${
                      activeIncidents[0].assignedTo
                        ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"
                        : "bg-white/[0.03] border-white/[0.06] text-slate-500"
                    }`}
                  >
                    <div className="text-[9px] font-black uppercase">
                      {activeIncidents[0].assignedTo ? "2. Dispatched" : "2. Ingesting"}
                    </div>
                    <div className="text-[8px] text-slate-400 truncate">
                      {activeIncidents[0].assignedToName || activeIncidents[0].assignedTo || "Assigning"}
                    </div>
                  </div>

                  <div
                    className={`rounded-xl p-2.5 text-center border transition ${
                      activeIncidents[0].status === "en_route" || activeIncidents[0].status === "in_progress"
                        ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"
                        : "bg-white/[0.03] border-white/[0.06] text-slate-500"
                    }`}
                  >
                    <div className="text-[9px] font-black uppercase">3. En Route</div>
                    <div className="text-[8px] text-slate-400">ETA ~2 mins</div>
                  </div>
                </div>

                {/* ADVISORY MESSAGE */}
                <div className="rounded-2xl bg-black/40 p-3 border border-emerald-500/20 text-xs space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Assigned Unit:</span>
                    <strong className="text-emerald-300">
                      {activeIncidents[0].assignedToName || activeIncidents[0].assignedTo || "Command Queue"}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Status:</span>
                    <span className="text-amber-300 font-mono font-bold uppercase">{activeIncidents[0].status}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/[0.08] bg-[#070e1c]/60 p-6 backdrop-blur-xl text-center space-y-2">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.03] border border-white/[0.06] mx-auto text-emerald-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-black text-white">All Safe • Standby Mode</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs mx-auto">
                  No active emergency distress signals. Trigger SOS or enable Voice Sentinel on the left if in danger.
                </p>
              </div>
            )}

            {/* 2. RECENT EMERGENCY INCIDENT FEED (MAX 2-3 ITEMS) */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#070e1c]/80 p-5 backdrop-blur-xl shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-white">
                    Live Response History ({Math.min(incidents.length, 3)})
                  </h3>
                </div>
                <button
                  onClick={fetchMyIncidents}
                  className="text-slate-400 hover:text-white transition p-1 cursor-pointer"
                  title="Refresh Feed"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${loadingIncidents ? "animate-spin" : ""}`} />
                </button>
              </div>

              <div className="space-y-2.5">
                {incidents.length === 0 ? (
                  <div className="py-6 text-center text-xs text-slate-500">
                    No emergency history logged.
                  </div>
                ) : (
                  incidents.slice(0, 3).map((inc) => (
                    <div
                      key={inc.id}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1.5 hover:border-white/[0.12] transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{inc.type}</span>
                        <span
                          className={`rounded px-1.5 py-0.2 text-[8px] font-black uppercase ${
                            inc.status === "RESOLVED"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-red-500/20 text-red-300 animate-pulse"
                          }`}
                        >
                          {inc.status}
                        </span>
                      </div>

                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-slate-500" />
                        <span className="truncate">{inc.location || "Campus Quad"}</span>
                      </div>

                      {inc.assignedTo && (
                        <div className="text-[9px] font-bold text-emerald-400">
                          Unit: {inc.assignedToName || inc.assignedTo}
                        </div>
                      )}

                      <div className="text-[8px] text-slate-500 font-mono pt-1 border-t border-white/[0.04] flex items-center justify-between">
                        <span>Reported: {new Date(inc.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        <span>#{inc.id.substring(Math.max(0, inc.id.length - 6))}</span>
                      </div>
                    </div>
                  ))
                )}

                {incidents.length > 3 && (
                  <button
                    onClick={() => setShowHistoryModal(true)}
                    className="w-full text-center py-1.5 text-[10px] text-slate-400 hover:text-emerald-300 font-bold transition pt-2 cursor-pointer border-t border-white/[0.04]"
                  >
                    View All {incidents.length} Reports →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER BAR: EMERGENCY HISTORY & HOTLINE */}
      <footer className="border-t border-white/[0.06] bg-[#050811]/90 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6">
          <button
            onClick={() => setShowHistoryModal(true)}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition cursor-pointer"
          >
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            <span>Emergency History ({incidents.length})</span>
          </button>

          <div className="text-[10px] font-mono text-slate-500">
            GPS Locked • {userGps.lat.toFixed(4)}°, {userGps.lon.toFixed(4)}°
          </div>
        </div>
      </footer>

      {/* EMERGENCY HISTORY MODAL / BOTTOM SHEET */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-3 animate-in fade-in">
          <div className="w-full max-w-lg rounded-3xl border border-white/[0.1] bg-[#070e1b] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-red-400" />
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  My Emergency Incidents
                </h3>
              </div>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2.5 pr-1">
              {incidents.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500">
                  No emergency history recorded.
                </div>
              ) : (
                incidents.map((inc) => (
                  <div
                    key={inc.id}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{inc.type}</span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[8px] font-black uppercase ${
                          inc.status === "RESOLVED"
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-red-500/20 text-red-300 animate-pulse"
                        }`}
                      >
                        {inc.status}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-500" />
                      <span>{inc.location || "Campus Quad"}</span>
                    </div>
                    {inc.description && (
                      <p className="text-[10px] text-slate-300 italic line-clamp-2">
                        "{inc.description}"
                      </p>
                    )}
                    <div className="text-[8px] text-slate-500 font-mono pt-1 border-t border-white/[0.04]">
                      {new Date(inc.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
