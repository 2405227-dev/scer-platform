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
  severity: string;
  transcript: string;
  timestamp: Date;
  summary: string;
  language: string;
  emergencyType: string;
}

export function LiveMicrophoneListener({ keywords }: LiveMicrophoneListenerProps) {
  const router = useRouter();

  const [isListening, setIsListening] = useState(false);
  const [permissionState, setPermissionState] = useState<"prompt" | "granted" | "denied" | "unsupported">("prompt");
  const [liveTranscript, setLiveTranscript] = useState<string>("");
  const [filteredBenign, setFilteredBenign] = useState<string | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);
  const [lastDispatched, setLastDispatched] = useState<LastDispatchedInfo | null>(null);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>("Microphone standby. Click to activate live monitoring.");

  const recognitionRef = useRef<any>(null);
  const desiredListeningRef = useRef<boolean>(false);
  const recognitionActiveRef = useRef<boolean>(false);
  const transcriptBufferRef = useRef<string>("");
  const highestConfidenceRef = useRef<number>(0);
  const detectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const queueRef = useRef<{id: string, transcript: string, confidence: number, startTime: number}[]>([]);
  const isProcessingQueueRef = useRef<boolean>(false);
  const reqIdCounterRef = useRef<number>(1);
  const lastDetectionTimeRef = useRef<number>(0);
  const lastKeywordRef = useRef<string>("");
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const recentTranscriptsRef = useRef<Map<string, number>>(new Map());

  const configuredKeywords = keywords.length > 0
    ? keywords.map((k) => k.keyword)
    : ["HELP", "FIRE", "EMERGENCY", "SHOOTER"];

  // Update ref when state changes
  useEffect(() => {
    // We don't bind isListening to the ref anymore, we use desiredListeningRef
  }, []);

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

  // Process the queue asynchronously
  const processQueue = useCallback(async () => {
    if (isProcessingQueueRef.current || queueRef.current.length === 0) return;
    isProcessingQueueRef.current = true;
    
    while (queueRef.current.length > 0) {
      const item = queueRef.current.shift();
      if (!item) continue;
      
      const { id, transcript, confidence, startTime } = item;
      
      // Transcript Deduplication (10s cache)
      const now = Date.now();
      const normalized = transcript.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
      const lastSeen = recentTranscriptsRef.current.get(normalized);
      
      if (lastSeen && now - lastSeen < 10000) {
        console.log(`[Mic][${id}] Duplicate transcript detected, ignoring.`);
        continue;
      }
      recentTranscriptsRef.current.set(normalized, now);

      console.log(`[Queue][${id}] processing started`);
      console.log(`[API][${id}] request received`);
      console.log(`[AI][${id}] request started`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      
      try {
        const apiStart = performance.now();
        const res = await fetch("/api/detections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            transcript,
            confidence, // browser recognition confidence
            location: "North Gate - Sector A (Live Microphone)",
            source: "AUDIO_ENGINE_MIC",
            requestId: id
          }),
          signal: controller.signal
        });

        const apiEnd = performance.now();
        const data = await res.json();
        const uiStart = performance.now();

        if (res.ok && data.success) {
          console.log(`[AI][${id}] Analysis result:`, data);
          if (data.isEmergency && data.aiResult) {
            // Immediately update UI local state
            setLastDispatched({
              keyword: data.aiResult.detectedIntent,
              confidence: data.aiResult.confidence ?? confidence,
              severity: data.aiResult.severity,
              transcript: transcript,
              timestamp: new Date(),
              summary: `AI classified as ${data.aiResult.emergencyType} (${data.aiResult.language})`,
              language: data.aiResult.language,
              emergencyType: data.aiResult.emergencyType,
            });
            setFilteredBenign(null);
            
            console.log(`[Detection][${id}] database completed`);
            console.log(`[UI][${id}] detection rendered`);
            router.refresh(); // Background sync for detection history list
          } else if (data.isEmergency === false && data.aiResult) {
            setFilteredBenign(
              `Filtered benign conversation: "${transcript}" (${data.aiResult.detectedIntent})`
            );
            console.log(`[Detection][${id}] database completed (benign)`);
            console.log(`[UI][${id}] detection rendered (benign)`);
          }
          setAiError(null);
        } else {
          console.error(`[AI][${id}] Analyzer error: ${data.error}`);
          setAiError(data.error || "AI Analyzer unavailable.");
        }
        
        const uiEnd = performance.now();
        const totalMs = uiEnd - startTime;
        const apiMs = apiEnd - apiStart;
        const flushMs = apiStart - startTime;
        const uiMs = uiEnd - uiStart;
        
        console.log(`[Performance][${id}]`);
        console.log(`speech flush: ${flushMs.toFixed(0)} ms`);
        console.log(`API/AI: ${apiMs.toFixed(0)} ms`);
        console.log(`UI update: ${uiMs.toFixed(0)} ms`);
        console.log(`total: ${totalMs.toFixed(0)} ms`);

      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.error(`[AI][${id}] Request timed out (8s limit).`);
          setAiError("AI Request timed out (8s limit).");
        } else {
          console.error(`[AI][${id}] Network error:`, err);
          setAiError("Network error connecting to AI backend.");
        }
      } finally {
        clearTimeout(timeoutId);
      }
    }
    
    isProcessingQueueRef.current = false;
  }, [router]);

  // Initialize Speech Recognition
  const startListening = useCallback(async () => {
    if (typeof window === "undefined") return;

    const win = window as unknown as IWindow;
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setPermissionState("unsupported");
      return;
    }

    console.log("[Mic] Starting recognition");

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
          if (!desiredListeningRef.current) return;
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
      // Set language to navigator.language or fallback to en-US for multilingual support
      recognition.lang = navigator.language || "en-US";
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log("[Mic] Recognition started");
        recognitionActiveRef.current = true;
        setIsListening(true);
        setStatusMessage("Listening continuously for emergency keywords...");

        // Inject debug hook for runtime verification
        (window as any).simulateSpeech = (text: string) => {
          if (recognition.onresult) {
            console.log(`[Mic] (simulate) final segment received: ${text}`);
            recognition.onresult({
              resultIndex: 0,
              results: {
                length: 1,
                0: {
                  isFinal: true,
                  0: { transcript: text, confidence: 0.99 }
                }
              }
            });
          }
        };
      };

      const flushTranscript = () => {
        const cleanTranscript = transcriptBufferRef.current.trim();
        const finalConfidence = highestConfidenceRef.current;
        
        if (!cleanTranscript) return;
        
        // Clear buffer immediately for next phrase
        transcriptBufferRef.current = "";
        highestConfidenceRef.current = 0;
        
        const timestampIso = new Date().toISOString();
        const reqId = `MIC-${String(reqIdCounterRef.current++).padStart(3, "0")}`;
        
        console.log(`[Mic][${timestampIso}] complete transcript ready`);
        console.log(`[Mic][${reqId}] accumulated transcript:`, cleanTranscript);
        console.log(`[Mic][${reqId}] complete statement flushed:`, cleanTranscript);
        console.log(`[Queue][${reqId}] queued`);
        
        // Push to async queue without blocking recognition
        queueRef.current.push({
          id: reqId,
          transcript: cleanTranscript,
          confidence: finalConfidence,
          startTime: performance.now()
        });
        
        processQueue();
      };

      recognition.onresult = (event: any) => {
        let currentInterim = "";
        let newFinalText = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const result = event.results[i];
          const transcriptPiece = result[0].transcript;

          if (result.isFinal) {
            newFinalText += transcriptPiece + " ";
            if (result[0].confidence && result[0].confidence > 0) {
              highestConfidenceRef.current = Math.max(highestConfidenceRef.current, result[0].confidence);
            }
          } else {
            currentInterim += transcriptPiece;
          }
        }

        if (newFinalText.trim()) {
          console.log(`[Mic] final segment received:`, newFinalText.trim());
          transcriptBufferRef.current += newFinalText;
          console.log(`[Mic] accumulated transcript:`, transcriptBufferRef.current.trim());

          if (detectionTimeoutRef.current) {
            clearTimeout(detectionTimeoutRef.current);
          }
          
          console.log(`[Mic] debounce started`);
          detectionTimeoutRef.current = setTimeout(() => {
            flushTranscript();
          }, 1200); // Wait for ~1.2s silence
        }

        const displayTranscript = (transcriptBufferRef.current + currentInterim).trim();
        if (displayTranscript) {
          setLiveTranscript(displayTranscript);
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === "no-speech") {
          // Normal when silent, keep listening
          return;
        }
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
          setPermissionState("denied");
          desiredListeningRef.current = false;
          setIsListening(false);
          setStatusMessage("Microphone permission denied. Please allow microphone access.");
        } else {
          console.warn("Speech recognition notice:", event.error);
        }
      };

      let isRestarting = false;
      recognition.onend = () => {
        console.log("[Mic] Recognition ended");
        recognitionActiveRef.current = false;
        
        // Automatically restart speech recognition safely if we want to keep listening
        if (desiredListeningRef.current && !isRestarting) {
          isRestarting = true;
          setTimeout(() => {
            if (desiredListeningRef.current) {
              try {
                console.log("[Mic] recognition ended, restarting");
                recognition.start();
              } catch (e) {
                // Ignore InvalidStateError
              }
            }
            isRestarting = false;
          }, 250);
        } else if (!desiredListeningRef.current) {
          // If we intentionally stopped, flush any remaining transcript
          if (detectionTimeoutRef.current) {
            clearTimeout(detectionTimeoutRef.current);
          }
          flushTranscript();
          setIsListening(false);
          setStatusMessage("Microphone monitoring paused.");
        }
      };

      recognitionRef.current = recognition;
      desiredListeningRef.current = true;
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
  }, [configuredKeywords, processQueue]);

  // Stop listening
  const stopListening = useCallback(() => {
    setIsListening(false);
    desiredListeningRef.current = false;

    if (detectionTimeoutRef.current) {
      clearTimeout(detectionTimeoutRef.current);
    }
    
    // Attempt final flush manually if there's anything left
    if (transcriptBufferRef.current.trim()) {
      const cleanTranscript = transcriptBufferRef.current.trim();
      const finalConfidence = highestConfidenceRef.current;
      transcriptBufferRef.current = "";
      highestConfidenceRef.current = 0;
      const timestampIso = new Date().toISOString();
      const reqId = `MIC-${String(reqIdCounterRef.current++).padStart(3, "0")}`;
      
      console.log(`[Mic][${timestampIso}] complete transcript ready (manual flush)`);
      console.log(`[Mic][${reqId}] sending to queue:`, cleanTranscript);
      
      queueRef.current.push({
        id: reqId,
        transcript: cleanTranscript,
        confidence: finalConfidence,
        startTime: performance.now()
      });
      processQueue();
    }

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

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs pt-1 border-t border-red-200/60">
              <div>
                <span className="text-red-600 font-semibold block">Detected Intent</span>
                <span className="font-bold text-red-950 text-sm truncate block" title={lastDispatched.keyword}>{lastDispatched.keyword}</span>
              </div>
              <div>
                <span className="text-red-600 font-semibold block">Type & Lang</span>
                <span className="font-bold text-red-950 text-sm">{lastDispatched.emergencyType} ({lastDispatched.language})</span>
              </div>
              <div>
                <span className="text-red-600 font-semibold block">Confidence</span>
                <span className="font-bold text-red-950 text-sm">
                  {lastDispatched.confidence > 0 ? `${(lastDispatched.confidence * 100).toFixed(1)}%` : "N/A"}
                </span>
              </div>
              <div className="col-span-2">
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

        {/* AI Analyzer Error Banner */}
        {aiError && isListening && (
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center gap-2.5 text-xs text-orange-800 animate-in fade-in">
            <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0" />
            <span><strong>AI Engine Notice:</strong> {aiError} (Microphone remains active)</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
