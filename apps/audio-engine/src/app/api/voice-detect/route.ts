import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-audio";

export async function POST(req: Request) {
  try {
    const { keyword, transcript, confidence, location, audioLevel } = await req.json();

    const normalizedKeyword = (keyword || "HELP").toUpperCase();
    const loc = location || "Block C (Academic)";
    const conf = confidence || 0.96;

    // 1. Store detection event in db-audio
    const event = await prisma.audioDetectionEvent.create({
      data: {
        keyword: normalizedKeyword,
        confidence: conf,
        location: loc,
        severity:
          normalizedKeyword.includes("GUNSHOT") ||
          normalizedKeyword.includes("FIRE") ||
          normalizedKeyword.includes("SHOOTER")
            ? "CRITICAL"
            : "HIGH",
      },
    });

    // 2. Identify target station
    let targetAgency = "Campus Emergency Command & Police";
    if (normalizedKeyword.includes("FIRE") || normalizedKeyword.includes("SMOKE")) {
      targetAgency = "Fire Station Dispatch";
    } else if (
      normalizedKeyword.includes("HELP") ||
      normalizedKeyword.includes("SAVE") ||
      normalizedKeyword.includes("MEDICAL") ||
      normalizedKeyword.includes("AMBULANCE")
    ) {
      targetAgency = "Central Hospital & Paramedics";
    } else if (
      normalizedKeyword.includes("GUNSHOT") ||
      normalizedKeyword.includes("POLICE") ||
      normalizedKeyword.includes("INTRUDER")
    ) {
      targetAgency = "Police Department Headquarters";
    }

    // 3. Fire webhook to SCER Command Center
    let webhookResult = null;
    try {
      const scerRes = await fetch("http://localhost:3000/api/webhooks/audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "audio.distress.detected",
          data: {
            keyword: normalizedKeyword,
            transcript: transcript || `Acoustic trigger: ${normalizedKeyword}`,
            confidence: conf,
            location: loc,
            audioLevel,
            timestamp: event.createdAt,
          },
        }),
      });
      if (scerRes.ok) {
        webhookResult = await scerRes.json();
      }
    } catch (e) {
      console.error("Failed to forward webhook to SCER:", e);
    }

    // 4. Send direct notification via Notification Engine to the station
    try {
      await fetch("http://localhost:3003/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "LIVE_VOICE_ALERT",
          severity: "CRITICAL",
          recipient: targetAgency,
          message: `LIVE VOICE EMERGENCY: Keyword '${normalizedKeyword}' detected from sensor at ${loc}. Immediate response requested for: "${transcript || normalizedKeyword}"`,
        }),
      });
    } catch (e) {
      console.error("Failed to notify station:", e);
    }

    return NextResponse.json({
      success: true,
      eventId: event.id,
      keyword: normalizedKeyword,
      targetAgency,
      location: loc,
      webhookResult,
    });
  } catch (error) {
    console.error("voice-detect error:", error);
    return NextResponse.json({ error: "Failed to process voice detection" }, { status: 500 });
  }
}
