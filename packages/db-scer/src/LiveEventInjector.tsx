"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLiveEvents } from "./useLiveEvents";

export function LiveEventInjector({ scerCoreUrl = "http://localhost:3000" }: { scerCoreUrl?: string }) {
  const router = useRouter();
  const { events, isConnected } = useLiveEvents(scerCoreUrl);
  const prevEventsCount = useRef(events.length);

  useEffect(() => {
    if (events.length > prevEventsCount.current) {
      prevEventsCount.current = events.length;
      router.refresh();
    }
  }, [events, router]);

  // Optionally, we could render a small connection indicator here, but usually it's just invisible.
  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg transition-colors ${isConnected ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse'}`}>
        <span className={`h-2 w-2 rounded-full ${isConnected ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-red-400'}`}></span>
        {isConnected ? 'LIVE' : 'RECONNECTING'}
      </div>
    </div>
  );
}
