
import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-audio";

const prisma = new PrismaClient();

export async function POST() {
  try {
    const event = await prisma.audioDetectionEvent.create({
      data: {
        keyword: "HELP",
        confidence: 0.94
      }
    });

    const webhooks = await prisma.audioWebhook.findMany();
    
    // Fire webhooks
    for (const webhook of webhooks) {
      try {
        await fetch(webhook.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "audio.distress.detected",
            data: {
              keyword: "HELP",
              confidence: 0.94,
              timestamp: event.createdAt,
              location: "North Gate", // Mock hardware location
            }
          })
        });
      } catch (err) {
        console.error("Failed to call webhook", webhook.url);
      }
    }

    return NextResponse.json({ success: true, event });
  } catch (error) {
    return NextResponse.json({ error: "Failed to simulate" }, { status: 500 });
  }
}

