import { prisma } from "./prisma";
import { DistressSeverity } from "./context-analyzer";
import { analyzeDistressIntent, AIAnalysisResult } from "./ai-analyzer";

export type { DistressSeverity };

export interface DistressDetectionInput {
  keyword?: string; // used for simulator/fallback
  confidence?: number;
  location?: string;
  source?: string;
  severity?: DistressSeverity;
  transcript?: string;
  requestId?: string;
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
    language?: string;
    emergencyType?: string;
  };
}

export interface DetectionResult {
  success: boolean;
  isEmergency?: boolean; // Added so UI knows if it was filtered
  detection?: {
    id: string;
    keyword: string;
    confidence: number;
    createdAt: Date;
    language: string | null;
    emergencyType: string | null;
    severity: string | null;
    transcript: string | null;
  };
  emergencyEvent?: AudioDistressEmergencyEvent;
  webhooksDispatched: number;
  webhooksFailed: number;
  message?: string;
  aiResult?: AIAnalysisResult | null;
}

export function computeSeverity(keyword: string, confidence: number): DistressSeverity {
  const upper = keyword.toUpperCase().trim();
  if (upper.includes("SHOOTER") || upper.includes("FIRE")) {
    return "CRITICAL";
  }
  if (upper.includes(",") || upper.includes("+")) {
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
          console.warn(`[AudioEngine] Webhook ${webhook.url} responded with status: ${response.status}`);
          failed++;
        }
      } catch (err) {
        console.warn(`[AudioEngine] Failed to dispatch webhook to ${webhook.url}:`, err instanceof Error ? err.message : err);
        failed++;
      }
    })
  );

  return { dispatched, failed };
}

export async function processDistressDetection(
  input: DistressDetectionInput = {}
): Promise<DetectionResult> {
  const config = await prisma.audioConfiguration.findFirst();
  if (config && !config.isActive) {
    throw new Error("Audio Engine is currently DISABLED. Detections are suspended.");
  }

  const registeredKeywords = await prisma.audioKeyword.findMany();
  const keywordList = registeredKeywords.map((k) => k.keyword.toUpperCase().trim());

  let targetKeyword = input.keyword ? input.keyword.trim().toUpperCase() : "SIMULATOR_TEST";
  let confidence = input.confidence || 0;
  const transcript = input.transcript?.trim() || undefined;
  
  let aiResult: AIAnalysisResult | null = null;
  let isEmergency = true;
  let finalSeverity: DistressSeverity = input.severity || computeSeverity(targetKeyword, confidence);
  let finalLanguage = "unknown";
  let finalEmergencyType = "DISTRESS";
  
  // If we have a transcript (from live microphone), use the AI analyzer
  if (transcript && input.source === "AUDIO_ENGINE_MIC") {
    aiResult = await analyzeDistressIntent(transcript, keywordList, input.requestId);
    if (aiResult) {
      isEmergency = aiResult.isEmergency;
      if (!isEmergency) {
        // Log benign detection but don't dispatch
        return {
          success: true,
          isEmergency: false,
          webhooksDispatched: 0,
          webhooksFailed: 0,
          message: aiResult.detectedIntent,
          aiResult
        };
      }
      targetKeyword = aiResult.detectedIntent ?? aiResult.emergencyType ?? "UNKNOWN"; // Store the intent summary instead of rigid keyword
      finalSeverity = aiResult.severity as DistressSeverity;
      finalLanguage = aiResult.language ?? "unknown";
      finalEmergencyType = aiResult.emergencyType ?? "DISTRESS";
      if (aiResult.confidence !== null) {
        confidence = aiResult.confidence;
      }
    } else {
      // If AI fails for microphone input, do not default to HELP
      throw new Error("Analyzer unavailable or failed to return valid semantic result.");
    }
  }

  // Validate confidence range
  if (typeof confidence !== "number" || isNaN(confidence) || confidence < 0 || confidence > 1) {
    throw new Error("Confidence must be a valid float number between 0.0 and 1.0.");
  }
  confidence = Math.round(confidence * 10000) / 10000;

  const location = (input.location || "North Gate - Audio Sensor 01").trim();
  const source = (input.source || "AUDIO_ENGINE").trim();

  // Save to DB (using the new fields as loosely typed via any to bypass Prisma EPERM generation issue during dev)
  const createData: any = {
    keyword: targetKeyword,
    confidence: confidence,
    language: finalLanguage,
    emergencyType: finalEmergencyType,
    severity: finalSeverity,
    transcript: transcript,
  };
  
  console.log(`[Detection][${new Date().toISOString()}] database creation started`);
  console.log("[Detection] saving:", JSON.stringify(createData));
  const detectionEvent = await (prisma.audioDetectionEvent.create as any)({
    data: createData,
  });
  console.log(`[Detection][${new Date().toISOString()}] database creation completed`);
  console.log("[Detection] saved successfully: ID", detectionEvent.id);

  const emergencyEvent: AudioDistressEmergencyEvent = {
    event: "audio.distress.detected",
    eventType: "AUDIO_DISTRESS",
    data: {
      id: detectionEvent.id,
      keyword: detectionEvent.keyword,
      confidence: detectionEvent.confidence,
      severity: finalSeverity,
      timestamp: detectionEvent.createdAt.toISOString(),
      location: location,
      source: source,
      status: "DISPATCHED",
      transcript: transcript,
      language: finalLanguage,
      emergencyType: finalEmergencyType,
    },
  };

  const { dispatched, failed } = await dispatchEmergencyWebhooks(emergencyEvent);

  return {
    success: true,
    isEmergency: true,
    detection: detectionEvent,
    emergencyEvent,
    webhooksDispatched: dispatched,
    webhooksFailed: failed,
    aiResult,
  };
}
