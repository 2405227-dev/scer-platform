import { prisma } from "./prisma";
import { analyzeDistressSpeech, DistressSeverity } from "./context-analyzer";

export type { DistressSeverity };

export interface DistressDetectionInput {
  keyword?: string;
  confidence?: number;
  location?: string;
  source?: string;
  severity?: DistressSeverity;
  transcript?: string;
}

export interface AudioDistressEmergencyEvent {
  event: "audio.distress.detected";
  eventType: "AUDIO_DISTRESS";
  data: {
    id: string;
    keyword: string;
    confidence: number;
    severity: DistressSeverity;
    timestamp: string;
    location: string;
    source: string;
    status: "DISPATCHED";
    transcript?: string;
  };
}

export interface DetectionResult {
  success: boolean;
  detection: {
    id: string;
    keyword: string;
    confidence: number;
    createdAt: Date;
  };
  emergencyEvent: AudioDistressEmergencyEvent;
  webhooksDispatched: number;
  webhooksFailed: number;
}

/**
 * Computes severity based on keyword urgency and detection confidence.
 */
export function computeSeverity(keyword: string, confidence: number): DistressSeverity {
  const upper = keyword.toUpperCase().trim();
  if (upper.includes("SHOOTER") || upper.includes("FIRE")) {
    return "CRITICAL";
  }
  if (upper.includes(",") || upper.includes("+")) {
    // Multi-keyword combination
    return "CRITICAL";
  }
  if (confidence >= 0.90) {
    return "CRITICAL";
  }
  if (confidence >= 0.75) {
    return "HIGH";
  }
  if (confidence >= 0.50) {
    return "MEDIUM";
  }
  return "LOW";
}

/**
 * Dispatches emergency event payload to registered webhooks.
 */
export async function dispatchEmergencyWebhooks(
  emergencyPayload: AudioDistressEmergencyEvent
): Promise<{ dispatched: number; failed: number }> {
  const webhooks = await prisma.audioWebhook.findMany();
  let dispatched = 0;
  let failed = 0;

  await Promise.all(
    webhooks.map(async (webhook) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const response = await fetch(webhook.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "SCER-Audio-Engine/1.0",
          },
          body: JSON.stringify(emergencyPayload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          dispatched++;
        } else {
          console.warn(
            `[AudioEngine] Webhook ${webhook.url} responded with status: ${response.status}`
          );
          failed++;
        }
      } catch (err) {
        console.warn(
          `[AudioEngine] Failed to dispatch webhook to ${webhook.url}:`,
          err instanceof Error ? err.message : err
        );
        failed++;
      }
    })
  );

  return { dispatched, failed };
}

/**
 * Core engine detection processor.
 * Processes detections originating from real browser microphone or simulator triggers.
 */
export async function processDistressDetection(
  input: DistressDetectionInput = {}
): Promise<DetectionResult> {
  // 1. Check audio configuration state
  const config = await prisma.audioConfiguration.findFirst();
  if (config && !config.isActive) {
    throw new Error("Audio Engine is currently DISABLED. Detections are suspended.");
  }

  // 2. Fetch and validate against registered keywords
  const registeredKeywords = await prisma.audioKeyword.findMany();
  const keywordList = registeredKeywords.map((k) => k.keyword.toUpperCase().trim());

  let targetKeyword = (input.keyword || "HELP").trim().toUpperCase();

  // If compound keyword (e.g. "HELP, FIRE" or "HELP FIRE"), validate tokens
  if (registeredKeywords.length > 0) {
    const tokens = targetKeyword
      .split(/[,+\s]+/)
      .map((t) => t.trim().toUpperCase())
      .filter(Boolean);

    const validTokens = tokens.filter((t) => keywordList.includes(t));

    if (validTokens.length > 0) {
      targetKeyword = Array.from(new Set(validTokens)).join(", ");
    } else {
      // Check partial match
      const match = keywordList.find(
        (k) => k === targetKeyword || targetKeyword.includes(k) || k.includes(targetKeyword)
      );
      if (match) {
        targetKeyword = match;
      } else {
        throw new Error(
          `Keyword "${input.keyword}" is not in the active distress keyword registry (${keywordList.join(", ")})`
        );
      }
    }
  }

  // 3. Validate or use confidence
  let confidence = input.confidence;
  if (confidence === undefined || confidence === null) {
    // Generate realistic detection confidence between 0.93 and 0.98 for simulations without speech model input
    confidence = Math.round((0.93 + Math.random() * 0.05) * 100) / 100;
  } else {
    if (typeof confidence !== "number" || isNaN(confidence) || confidence < 0 || confidence > 1) {
      throw new Error("Confidence must be a valid float number between 0.0 and 1.0.");
    }
    // Round to 4 decimal places for clean storage
    confidence = Math.round(confidence * 10000) / 10000;
  }

  // 4. Compute or use passed severity
  const severity = input.severity || computeSeverity(targetKeyword, confidence);

  // 5. Determine location and hardware source
  const location = (input.location || "North Gate - Audio Sensor 01").trim();
  const source = (input.source || "AUDIO_ENGINE").trim();
  const transcript = input.transcript?.trim() || undefined;

  // 6. Save detection record to SQLite via Prisma
  const detectionEvent = await prisma.audioDetectionEvent.create({
    data: {
      keyword: targetKeyword,
      confidence: confidence,
    },
  });

  // 7. Structure emergency event for SCER
  const emergencyEvent: AudioDistressEmergencyEvent = {
    event: "audio.distress.detected",
    eventType: "AUDIO_DISTRESS",
    data: {
      id: detectionEvent.id,
      keyword: detectionEvent.keyword,
      confidence: detectionEvent.confidence,
      severity: severity,
      timestamp: detectionEvent.createdAt.toISOString(),
      location: location,
      source: source,
      status: "DISPATCHED",
      transcript: transcript,
    },
  };

  // 8. Broadcast to webhooks
  const { dispatched, failed } = await dispatchEmergencyWebhooks(emergencyEvent);

  return {
    success: true,
    detection: detectionEvent,
    emergencyEvent,
    webhooksDispatched: dispatched,
    webhooksFailed: failed,
  };
}
