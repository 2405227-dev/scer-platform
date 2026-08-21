"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

interface KeywordItem {
  id: string;
  keyword: string;
}

interface SimulateDetectionProps {
  keywords: KeywordItem[];
}

export function SimulateDetection({ keywords }: SimulateDetectionProps) {
  const router = useRouter();
  const [selectedKeyword, setSelectedKeyword] = useState<string>("HELP");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastDispatched, setLastDispatched] = useState<string | null>(null);

  const availableKeywords = keywords.length > 0
    ? keywords.map((k) => k.keyword)
    : ["HELP", "FIRE", "EMERGENCY", "SHOOTER"];

  const handleSimulate = async (keywordToUse?: string) => {
    const keyword = keywordToUse || selectedKeyword;
    setLoading(true);
    setError(null);
    setLastDispatched(null);

    try {
      const response = await fetch("/api/detections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword,
          location: "North Gate - Audio Sensor 01",
          source: "AUDIO_ENGINE_SIMULATOR",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || `HTTP error ${response.status}`);
      }

      setLastDispatched(keyword);
      router.refresh();
    } catch (err) {
      console.error("Simulation error:", err);
      setError(err instanceof Error ? err.message : "Failed to execute simulation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Keyword Selector if multiple keywords exist */}
      {availableKeywords.length > 1 && (
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Distress Trigger Keyword
          </label>
          <div className="grid grid-cols-2 gap-2">
            {availableKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => setSelectedKeyword(kw)}
                disabled={loading}
                className={`px-3 py-1.5 text-xs font-bold rounded-md border transition-all ${
                  selectedKeyword === kw
                    ? "bg-red-50 border-red-500 text-red-700 shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Simulate Action Button */}
      <Button
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => handleSimulate(selectedKeyword)}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Detecting & Dispatching...</span>
          </>
        ) : (
          <span>Simulate &quot;{selectedKeyword}&quot;</span>
        )}
      </Button>

      {/* Error Feedback */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-xs text-red-700 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Detection Failed</p>
            <p className="text-red-600 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Success Feedback */}
      {lastDispatched && !error && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs text-emerald-800 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Successfully created &quot;{lastDispatched}&quot; event and dispatched emergency alert!
          </span>
        </div>
      )}
    </div>
  );
}
