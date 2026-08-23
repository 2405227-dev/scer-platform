import { geoEngine } from "@/lib/geoEngine";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Send initial snapshot immediately
      const initialData = `data: ${JSON.stringify(geoEngine.getSnapshot())}\n\n`;
      controller.enqueue(encoder.encode(initialData));

      // Subscribe to engine ticks
      const unsubscribe = geoEngine.subscribe((snapshot) => {
        try {
          const data = `data: ${JSON.stringify(snapshot)}\n\n`;
          controller.enqueue(encoder.encode(data));
        } catch (err) {
          unsubscribe();
        }
      });

      req.signal.addEventListener("abort", () => {
        unsubscribe();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
