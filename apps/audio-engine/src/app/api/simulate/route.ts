import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-audio";

export async function POST(req: Request) {
  try {
    let body: any = {};
    try {
      body = await req.json();
    } catch (e) {
      body = {};
    }

    const keyword = body.keyword || "HELP";
    const location = body.location || "Block C (Academic)";
    const confidence = body.confidence || 0.96;

    const event = await prisma.audioDetectionEvent.create({
      data: {
        keyword,
        confidence,
        location,
        severity: keyword === "GUNSHOT" || keyword === "FIRE" ? "CRITICAL" : "HIGH",
      },
    });

    let webhooks = await prisma.audioWebhook.findMany();
    if (webhooks.length === 0) {
      webhooks = [{ id: "wh-1", url: "http://localhost:3000/api/webhooks/audio" }];
    }

    // Fire webhooks
    for (const webhook of webhooks) {
      try {
        await fetch(webhook.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "audio.distress.detected",
            data: {
              keyword,
              transcript: body.transcript || `Acoustic distress triggered: "${keyword}"`,
              confidence,
              timestamp: event.createdAt,
              location,
            },
          }),
        });
      } catch (err) {
        console.error("Failed to call webhook", webhook.url);
      }
    }

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error("Simulate error:", error);
    return NextResponse.json({ error: "Failed to simulate" }, { status: 500 });
  }
}
