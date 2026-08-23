"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mic,
  MicOff,
  Radio,
  AlertTriangle,
  Flame,
  ShieldAlert,
  HeartPulse,
  Send,
  CheckCircle2,
  Volume2,
  Activity,
  Zap,
} from "lucide-react";

const EMERGENCY_KEYWORDS: Record<string, { type: string; agency: string; icon: string; color: string }> = {
  help: { type: "Medical & Trauma Distress", agency: "Central Hospital & Paramedics", icon: "🚑", color: "from-red-500 to-rose-600" },
  fire: { type: "Structure Fire & Smoke Hazard", agency: "Campus Fire Station Brigade", icon: "🚒", color: "from-orange-500 to-amber-600" },
  police: { type: "Crime & Armed Security Threat", agency: "Police Station & SWAT Unit", icon: "🚓", color: "from-blue-600 to-indigo-700" },
  gunshot: { type: "Ballistic Discharge / Active Shooter", agency: "Police Department Rapid Response", icon: "🚨", color: "from-red-600 to-red-800" },
  emergency: { type: "General Distress Call", agency: "Central Emergency Command", icon: "⚠️", color: "from-yellow-500 to-orange-600" },
  smoke: { type: "Smoke & Combustion Detected", agency: "Campus Fire Station Brigade", icon: "🚒", color: "from-orange-500 to-red-600" },
  ambulance: { type: "Critical Medical Emergency", agency: "Emergency Trauma Hospital", icon: "🚑", color: "from-red-500 to-rose-600" },
  doctor: { type: "Medical Assistance Required", agency: "Campus Health Care Center", icon: "🩺", color: "from-teal-500 to-emerald-600" },
  intruder: { type: "Perimeter Security Intrusion", agency: "Police Station & Security Patrol", icon: "🚓", color: "from-blue-600 to-cyan-600" },
  save: { type: "Life-Threatening Distress", agency: "Central Police & Medical Rescue", icon: "🆘", color: "from-red-500 to-rose-600" },
};

export function LiveVoiceDistressDetector() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [audioLevel, setAudioLevel] = useState(0);
  const [location, setLocation] = useState("Block C (Academic)");
  const [lastAlert, setLastAlert] = useState<any>(null);
  const [recentDetections, setRecentDetections] = useState<any[]>([]);
  const [micSupported, setMicSupported] = useState(true);

  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMicSupported(false);
    }
  }, []);

  const triggerDispatch = async (detectedKeyword: string, fullSpeech: string, conf = 0.98) => {
    const config = EMERGENCY_KEYWORDS[detectedKeyword.toLowerCase()] || {
      type: "Audio Emergency Distress",
      agency: "Campus Emergency Command",
      icon: "🚨",
      color: "from-red-500 to-rose-600",
    };

    const newAlert = {
      keyword: detectedKeyword.toUpperCase(),
      speech: fullSpeech,
      agency: config.agency,
      type: config.type,
      icon: config.icon,
      location,
      time: new Date().toLocaleTimeString(),
    };

    setLastAlert(newAlert);
    setRecentDetections((prev) => [newAlert, ...prev.slice(0, 4)]);

    try {
      await fetch("/api/voice-detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: detectedKeyword.toUpperCase(),
          transcript: fullSpeech,
          confidence: conf,
          location,
          audioLevel,
        }),
      });
    } catch (e) {
      console.error("Failed to transmit voice detection:", e);
    }
  };

  const startListening = async () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    try {
      // 1. Start audio visualizer via Web Audio API
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioCtx.createAnalyser();
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);
      analyser.fftSize = 64;

      audioContextRef.current = audioCtx;
      analyserRef.current = analyser;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const updateAudioVisuals = () => {
        analyser.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((p, c) => p + c, 0) / dataArray.length;
        setAudioLevel(Math.min(100, Math.round((avg / 128) * 100)));
        animFrameRef.current = requestAnimationFrame(updateAudioVisuals);
      };
      updateAudioVisuals();

      // 2. Start Speech Recognition if supported
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event: any) => {
          let currentTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            currentTranscript += event.results[i][0].transcript;
          }
          setTranscript(currentTranscript);

          const lower = currentTranscript.toLowerCase();
          for (const key of Object.keys(EMERGENCY_KEYWORDS)) {
            if (lower.includes(key)) {
              triggerDispatch(key, currentTranscript, event.results[0][0].confidence || 0.95);
              break;
            }
          }
        };

        recognition.onerror = (e: any) => {
          console.warn("Speech recognition error:", e);
        };

        recognition.onend = () => {
          // Auto restart if still in listening mode
          if (isListening && recognitionRef.current) {
            try {
              recognition.start();
            } catch (err) {
              console.log(err);
            }
          }
        };

        recognition.start();
        recognitionRef.current = recognition;
      }

      setIsListening(true);
    } catch (err) {
      console.error("Microphone access denied or error:", err);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    setIsListening(false);
    setAudioLevel(0);

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div className="rounded-2xl border border-sky-500/20 bg-[#081220] p-6 shadow-2xl backdrop-blur-xl">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-3">
          <div
            className={`grid h-12 w-12 place-items-center rounded-2xl border transition-all duration-300 ${
              isListening
                ? "border-red-500/40 bg-red-500/20 text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                : "border-sky-500/30 bg-sky-500/10 text-sky-400"
            }`}
          >
            {isListening ? (
              <Mic className="h-6 w-6 animate-pulse" />
            ) : (
              <MicOff className="h-6 w-6 text-slate-400" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">
                Live Acoustic Voice & Distress Listener
              </h3>
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                  isListening
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-slate-500/20 text-slate-400 border border-white/[0.06]"
                }`}
              >
                {isListening ? "● Real-Time Listening Active" : "Standby"}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Say or cheer <strong className="text-white">"HELP"</strong>, <strong className="text-white">"FIRE"</strong>, or <strong className="text-white">"POLICE"</strong> to automatically trigger instant station dispatch.
            </p>
          </div>
        </div>

        {/* SENSOR SECTOR */}
        <div className="flex items-center gap-2">
          <label className="text-[10px] font-bold uppercase text-slate-400">Sensor:</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-xl border border-white/[0.1] bg-[#050a12] px-3 py-1.5 text-xs text-white focus:border-sky-400 focus:outline-none"
          >
            <option value="Block C (Academic)">Block C (Academic)</option>
            <option value="North Gate">North Gate (Perimeter)</option>
            <option value="Central Hub">Central Hub (Admin)</option>
            <option value="Hostel Zone">Hostel Zone (Residential)</option>
            <option value="East Sector">East Sector (Sports)</option>
          </select>
        </div>
      </div>

      {/* AUDIO VISUALIZER & MIC CONTROLS */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* BIG START/STOP BUTTON */}
        <div>
          {!isListening ? (
            <button
              onClick={startListening}
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 p-4 font-black uppercase tracking-wider text-white shadow-xl shadow-sky-500/25 transition hover:scale-[1.02] active:scale-95"
            >
              <Mic className="h-5 w-5 animate-bounce" />
              <span>Enable Microphone Listening</span>
            </button>
          ) : (
            <button
              onClick={stopListening}
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 p-4 font-black uppercase tracking-wider text-white shadow-xl shadow-red-500/25 transition hover:scale-[1.02] active:scale-95"
            >
              <MicOff className="h-5 w-5" />
              <span>Mute / Stop Listening</span>
            </button>
          )}
        </div>

        {/* DECIBEL / AUDIO LEVEL GRAPHIC */}
        <div className="lg:col-span-2 rounded-2xl border border-white/[0.08] bg-[#040811] p-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-slate-300">
              <Activity className="h-3.5 w-3.5 text-sky-400" />
              Microphone Spectrum ({audioLevel} dB)
            </span>
            <span className="text-[10px] text-slate-500">
              {isListening ? "Listening continuously..." : "Press button to activate"}
            </span>
          </div>

          {/* AUDIO BARS */}
          <div className="flex h-10 items-end gap-1 overflow-hidden rounded-xl bg-white/[0.02] p-1.5">
            {Array.from({ length: 32 }).map((_, i) => {
              const height = isListening
                ? Math.max(10, (audioLevel * ((i % 5) + 1) * 1.5) % 100)
                : 6;
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-all duration-75 ${
                    audioLevel > 50
                      ? "bg-gradient-to-t from-orange-500 to-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                      : "bg-gradient-to-t from-sky-500 to-blue-400"
                  }`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>

          {/* REAL TIME SPEECH TRANSCRIPT */}
          <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-[10px] font-bold uppercase text-slate-500">Live Transcript:</span>
            <span className="italic text-sky-300 font-mono truncate">
              {transcript ? `"${transcript}"` : isListening ? "Speak or cheer an emergency keyword..." : "Mic paused."}
            </span>
          </div>
        </div>
      </div>

      {/* QUICK CHEER BUTTONS (ONE-CLICK SIMULATION FOR DEMO) */}
      <div className="mt-6 border-t border-white/[0.08] pt-4">
        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
          <span>Quick Cheer Simulator (One-Click Emergency Audio Triggers):</span>
          <span className="text-slate-500">Click any button to simulate acoustic detection</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={() => triggerDispatch("fire", "FIRE! Smoke detected in second floor labs!", 0.99)}
            className="flex items-center justify-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 p-3 text-xs font-bold text-orange-300 transition hover:bg-orange-500/20 active:scale-95"
          >
            <Flame className="h-4 w-4 text-orange-400" />
            <span>Cheer "FIRE!" 🚒</span>
          </button>

          <button
            onClick={() => triggerDispatch("help", "HELP! Student collapsed and needs immediate medical assistance!", 0.98)}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-300 transition hover:bg-red-500/20 active:scale-95"
          >
            <HeartPulse className="h-4 w-4 text-red-400" />
            <span>Cheer "HELP!" 🚑</span>
          </button>

          <button
            onClick={() => triggerDispatch("police", "POLICE! Armed intruder spotted at perimeter gate!", 0.99)}
            className="flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 p-3 text-xs font-bold text-blue-300 transition hover:bg-blue-500/20 active:scale-95"
          >
            <ShieldAlert className="h-4 w-4 text-blue-400" />
            <span>Cheer "POLICE!" 🚓</span>
          </button>

          <button
            onClick={() => triggerDispatch("gunshot", "GUNSHOT! Loud ballistic report heard near parking sector!", 0.99)}
            className="flex items-center justify-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs font-bold text-rose-300 transition hover:bg-rose-500/20 active:scale-95"
          >
            <Radio className="h-4 w-4 text-rose-400" />
            <span>Cheer "GUNSHOT!" 🚨</span>
          </button>
        </div>
      </div>

      {/* LIVE DISPATCH BANNER ON KEYWORD MATCH */}
      {lastAlert && (
        <div className="mt-5 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent p-5 shadow-2xl animate-in slide-in-from-top-3 duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="text-3xl">{lastAlert.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-red-500/30 px-2 py-0.5 text-[9px] font-black uppercase text-red-200 border border-red-500/40">
                    KEYWORD IDENTIFIED: "{lastAlert.keyword}"
                  </span>
                  <span className="text-xs text-slate-400">at {lastAlert.time}</span>
                </div>
                <h4 className="mt-1 text-sm font-black text-white">
                  {lastAlert.type} → <span className="text-emerald-300">{lastAlert.agency}</span>
                </h4>
                <p className="mt-1 text-xs text-slate-300 italic">
                  "{lastAlert.speech}"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:self-center">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/20 px-3 py-2 text-center text-[10px] font-bold text-emerald-200">
                ✓ Dispatched to SCER & Station
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
