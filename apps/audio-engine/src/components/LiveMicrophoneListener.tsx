"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  MicOff,
  Radio,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Volume2,
  Sparkles,
} from "lucide-react";
import { analyzeDistressSpeech, DistressSeverity } from "@/lib/context-analyzer";

// Type definitions for Web Speech API
interface IWindow extends Window {
  webkitSpeechRecognition?: any;
  SpeechRecognition?: any;
}

interface KeywordItem {
  id: string;
  keyword: string;
}

interface LiveMicrophoneListenerProps {
  keywords: KeywordItem[];
}

interface LastDispatchedInfo {
  keyword: string;
  confidence: number;
  severity: DistressSeverity;
  transcript: string;
  timestamp: Date;
  summary: string;
}

export function LiveMicrophoneListener({ keywords }: LiveMicrophoneListenerProps) {
  const router = useRouter();

  const [isListening, setIsListening] = useState(false);
  const [permissionState, setPermissionState] = useState<"prompt" | "granted" | "denied" | "unsupported">("prompt");
  const [liveTranscript, setLiveTranscript] = useState<string>("");
  const [filteredBenign, setFilteredBenign] = useState<string | null>(null);
  const [lastDispatched, setLastDispatched] = useState<LastDispatchedInfo | null>(null);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>("Microphone standby. Click to activate live monitoring.");

  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef<boolean>(false);
  const lastDetectionTimeRef = useRef<number>(0);
  const lastKeywordRef = useRef<string>("");
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const configuredKeywords = keywords.length > 0
    ? keywords.map((k) => k.keyword)
    : ["HELP", "FIRE", "EMERGENCY", "SHOOTER"];

  // Update ref when state changes
  useEffect(() => {
    isListeningRef.current = isListening;
  }, [isListening]);

  // Check browser speech recognition support
  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as unknown as IWindow;
      if (!win.SpeechRecognition && !win.webkitSpeechRecognition) {
        setPermissionState("unsupported");
        setStatusMessage("Web Speech API is not supported in this browser. Please use Chrome, Edge, or Safari.");
      }
    }
  }, []);

  // Handle emergency dispatch to backend
  const handleEmergencyDetected = useCallback(
    async (
      keyword: string,
      confidence: number,
      severity: DistressSeverity,
      transcript: string,
      summary: string
    ) => {
      const now = Date.now();
      const timeSinceLast = now - lastDetectionTimeRef.current;
      const sameKeyword = lastKeywordRef.current === keyword;

      // 8-second cooldown/debounce for identical keywords to prevent duplicate flooding
      if (sameKeyword && timeSinceLast < 8000) {
        console.log(`[AudioEngine] Suppressed duplicate cry for "${keyword}" (cooldown: ${Math.round((8000 - timeSinceLast) / 1000)}s remaining).`);
        return;
      }

      lastDetectionTimeRef.current = now;
      lastKeywordRef.current = keyword;

      try {
        const res = await fetch("/api/detections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            keyword,
            confidence,
            severity,
            transcript,
            location: "North Gate - Sector A (Live Microphone)",
            source: "AUDIO_ENGINE_MIC",
          }),
        });

        const data = await res.json();

        if (res.ok && data.success) {
          setLastDispatched({
            keyword,
            confidence,
            severity,
            transcript,
            timestamp: new Date(),
            summary,
          });
          setFilteredBenign(null);
          router.refresh();
        } else {
          console.error("Failed to post detection:", data.error);
        }
      } catch (err) {
        console.error("Network error dispatching live detection:", err);
      }
    },
    [router]
  );

  // Initialize Speech Recognition
  const startListening = useCallback(async () => {
    if (typeof window === "undefined") return;

    const win = window as unknown as IWindow;
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setPermissionState("unsupported");
      return;
    }

    try {
      // 1. Request microphone access for audio visualizer & permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      setPermissionState("granted");

      // 2. Setup Audio Visualizer
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioCtx();
        audioContextRef.current = audioCtx;
        const sourceNode = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        sourceNode.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const updateLevel = () => {
          if (!isListeningRef.current) return;
          analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const avg = sum / dataArray.length;
          setAudioLevel(Math.min(100, Math.round((avg / 128) * 100)));
          animFrameRef.current = requestAnimationFrame(updateLevel);
        };
        updateLevel();
      } catch (audioErr) {
        console.warn("AudioContext visualizer not available:", audioErr);
      }

      // 3. Setup Web Speech Recognition
      const recognition = new SpeechRecognitionClass();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setStatusMessage("Listening continuously for emergency keywords...");
      };

      recognition.onresult = (event: any) => {
        let interimText = "";
        let finalConfidence = 0.94; // fallback standard acoustic confidence

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const result = event.results[i];
          const transcriptPiece = result[0].transcript;
          interimText += transcriptPiece;

          // Real recognition confidence from speech model (float 0.0 - 1.0)
          if (result[0].confidence && result[0].confidence > 0) {
            finalConfidence = result[0].confidence;
          }
        }

        const cleanTranscript = interimText.trim();
        if (!cleanTranscript) return;

        setLiveTranscript(cleanTranscript);

        // Run Natural Language Distress Context Analysis
        const analysis = analyzeDistressSpeech(cleanTranscript, configuredKeywords);

        if (analysis.isBenign) {
          setFilteredBenign(
            `Filtered benign conversation: "${cleanTranscript}" (${analysis.benignReason || "non-emergency context"})`
          );
        } else if (analysis.isEmergency) {
          handleEmergencyDetected(
            analysis.primaryKeyword,
            finalConfidence,
            analysis.severity,
            cleanTranscript,
            analysis.contextSummary
          );
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === "no-speech") {
          // Normal when silent, keep listening
          return;
        }
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
          setPermissionState("denied");
          setIsListening(false);
          setStatusMessage("Microphone permission denied. Please allow microphone access.");
        } else {
          console.warn("Speech recognition notice:", event.error);
        }
      };

      recognition.onend = () => {
        // Automatically restart speech recognition if operator kept listening active
        if (isListeningRef.current) {
          try {
            recognition.start();
          } catch (e) {
            // Already active or restarting
          }
        } else {
          setIsListening(false);
          setStatusMessage("Microphone monitoring paused.");
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
    } catch (err: any) {
      console.error("Error accessing microphone:", err);
      if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
        setPermissionState("denied");
        setStatusMessage("Microphone permission was denied. Please allow access in your browser bar.");
      } else {
        setStatusMessage(`Microphone error: ${err.message || "Unable to access audio device."}`);
      }
      setIsListening(false);
    }
  }, [configuredKeywords, handleEmergencyDetected]);

  // Stop listening
  const stopListening = useCallback(() => {
    setIsListening(false);
    isListeningRef.current = false;

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    setAudioLevel(0);
    setStatusMessage("Microphone monitoring stopped.");
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopListening();
    };
  }, [stopListening]);

  return (
    <Card className="border-2 border-blue-500/20 shadow-md bg-gradient-to-b from-white to-slate-50/50">
      <CardHeader className="pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg ${isListening ? "bg-red-500/10 text-red-600 animate-pulse" : "bg-slate-100 text-slate-600"}`}>
              {isListening ? <Radio className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-slate-900">
                Live Acoustic Distress Monitor
              </CardTitle>
              <p className="text-xs text-slate-500">
                Continuous autonomous microphone surveillance — no emergency buttons required
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isListening ? (
              <Badge className="bg-red-600 hover:bg-red-600 text-white font-semibold flex items-center gap-1.5 px-3 py-1 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                LISTENING
              </Badge>
            ) : permissionState === "denied" ? (
              <Badge variant="destructive">PERMISSION DENIED</Badge>
            ) : permissionState === "unsupported" ? (
              <Badge variant="secondary">UNSUPPORTED BROWSER</Badge>
            ) : (
              <Badge variant="secondary">STANDBY</Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        {/* Operator Toggle Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-slate-900 text-slate-100 rounded-xl">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-75 ${
                    isListening && audioLevel > i * 15
                      ? "bg-emerald-400 h-6"
                      : "bg-slate-700 h-2"
                  }`}
                />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">
                {isListening ? "Microphone Active & Listening" : "Microphone Inactive"}
              </p>
              <p className="text-[11px] text-slate-400">
                {statusMessage}
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex justify-end">
            {isListening ? (
              <Button
                variant="destructive"
                size="sm"
                onClick={stopListening}
                className="gap-2 font-semibold shadow-sm cursor-pointer"
              >
                <MicOff className="w-4 h-4" /> Stop Monitoring
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={startListening}
                className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 font-semibold shadow-sm cursor-pointer"
              >
                <Mic className="w-4 h-4" /> Start Live Monitoring
              </Button>
            )}
          </div>
        </div>

        {/* Live Speech Stream Display */}
        {isListening && (
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                Live Speech Stream
              </span>
              <span className="text-[10px] uppercase font-mono text-slate-400">
                Web Speech API Engine
              </span>
            </div>
            <p className="text-sm font-mono text-slate-800 bg-white p-2.5 rounded border border-slate-100 min-h-[40px] flex items-center">
              {liveTranscript ? (
                <span>&ldquo;{liveTranscript}&rdquo;</span>
              ) : (
                <span className="text-slate-400 italic">Listening to ambient speech... Try saying &ldquo;HELP! FIRE!&rdquo;</span>
              )}
            </p>
          </div>
        )}

        {/* Real-time Distress Incident Alert Banner */}
        {lastDispatched && (
          <div className="p-3.5 bg-red-50 border-2 border-red-300 rounded-xl space-y-2 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                <span className="font-bold text-sm text-red-900">
                  EMERGENCY DISTRESS DETECTED & DISPATCHED
                </span>
              </div>
              <Badge className="bg-red-600 text-white font-bold">
                {lastDispatched.severity}
              </Badge>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1 border-t border-red-200/60">
              <div>
                <span className="text-red-600 font-semibold block">Spoken Keyword(s)</span>
                <span className="font-bold text-red-950 text-sm">{lastDispatched.keyword}</span>
              </div>
              <div>
                <span className="text-red-600 font-semibold block">Recognition Confidence</span>
                <span className="font-bold text-red-950 text-sm">
                  {(lastDispatched.confidence * 100).toFixed(1)}%
                </span>
              </div>
              <div>
                <span className="text-red-600 font-semibold block">Context Assessment</span>
                <span className="text-red-900 truncate block" title={lastDispatched.summary}>
                  {lastDispatched.summary}
                </span>
              </div>
              <div>
                <span className="text-red-600 font-semibold block">SCER Dispatch</span>
                <span className="text-emerald-700 font-bold block">Dispatched via Webhook</span>
              </div>
            </div>

            <div className="text-[11px] text-red-700 italic bg-white/70 p-1.5 rounded border border-red-200">
              &ldquo;{lastDispatched.transcript}&rdquo;
            </div>
          </div>
        )}

        {/* Filtered Benign Speech Banner */}
        {filteredBenign && !lastDispatched && (
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg flex items-center gap-2.5 text-xs text-amber-800 animate-in fade-in">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{filteredBenign}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
