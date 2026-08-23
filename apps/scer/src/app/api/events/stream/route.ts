import { subscribe, Event, EventType } from "@scer/db-scer";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      // Send initial connection message
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: "system.status", status: "connected" })}\n\n`)
      );

      // Subscribe to all events using the db-scer event bus
      const eventTypes: EventType[] = [
        "detection.audio.alert",
        "incident.created",
        "incident.assigned",
        "incident.acknowledged",
        "incident.updated",
        "incident.resolved",
        "responder.location.updated",
        "responder.status.changed",
        "notification.sent",
        "notification.delivered",
        "system.health.check"
      ];

      const unsubscribers = eventTypes.map(type => 
        subscribe(type, (event: Event) => {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
          );
        })
      );

      // Keep connection alive with ping
      const pingInterval = setInterval(() => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "ping" })}\n\n`));
      }, 15000);

      req.signal.addEventListener("abort", () => {
        clearInterval(pingInterval);
        unsubscribers.forEach(unsub => unsub());
      });
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
