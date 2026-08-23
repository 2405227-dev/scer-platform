"use client";

import { useEffect, useState, useCallback } from "react";
import { Event } from "./events";

export function useLiveEvents(scerCoreUrl: string = "http://localhost:3000") {
  const [events, setEvents] = useState<Event[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let evtSource: EventSource | null = null;
    let reconnectTimer: NodeJS.Timeout;

    const connect = () => {
      console.log("[useLiveEvents] Connecting to", `${scerCoreUrl}/api/events/stream`);
      evtSource = new EventSource(`${scerCoreUrl}/api/events/stream`);

      evtSource.onopen = () => {
        setIsConnected(true);
      };

      evtSource.onmessage = (e) => {
        try {
          const data = JSON.parse(e.data);
          if (data.type === "system.status" || data.type === "ping") {
            return;
          }
          setEvents((prev) => [data as Event, ...prev].slice(0, 100)); // keep last 100
        } catch (err) {
          console.error("Failed to parse SSE event:", err);
        }
      };

      evtSource.onerror = () => {
        setIsConnected(false);
        evtSource?.close();
        reconnectTimer = setTimeout(connect, 3000); // reconnect after 3s
      };
    };

    connect();

    return () => {
      if (evtSource) evtSource.close();
      clearTimeout(reconnectTimer);
    };
  }, [scerCoreUrl]);

  const clearEvents = useCallback(() => setEvents([]), []);

  return { events, isConnected, clearEvents };
}

export async function publishLiveEvent(event: Partial<Event>, scerCoreUrl: string = "http://localhost:3000") {
  const fullEvent = {
    id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    timestamp: new Date().toISOString(),
    ...event
  };

  await fetch(`${scerCoreUrl}/api/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fullEvent)
  });
}
