import { DistressSeverity } from "./context-analyzer";

export interface AIAnalysisResult {
  isEmergency: boolean;
  emergencyType: "FIRE" | "MEDICAL" | "ASSAULT" | "WEAPON_THREAT" | "SHOOTING" | "RESCUE" | "TRAPPED" | "ACCIDENT" | "DISASTER" | "DISTRESS" | "OTHER" | "NONE";
  severity: DistressSeverity;
  language: string; 
  detectedIntent: string;
  confidence: number | null; 
}

function parseAiJson(raw: string) {
  if (!raw || typeof raw !== "string") {
    throw new Error("AI_PARSE_ERROR: Empty or invalid AI response");
  }

  console.log("[AI] raw response:", raw);

  let cleaned = raw.trim();

  // 1. Clean markdown code fences which might confuse extraction
  cleaned = cleaned
    .replace(/```json\s*/gi, "")
    .replace(/```\s*/g, "");

  // 2. Extract the JSON object using brace counting
  let start = cleaned.indexOf("{");
  while (start !== -1) {
    let braceCount = 0;
    let end = -1;
    for (let i = start; i < cleaned.length; i++) {
      if (cleaned[i] === "{") braceCount++;
      else if (cleaned[i] === "}") braceCount--;

      if (braceCount === 0) {
        end = i;
        break;
      }
    }

    if (end !== -1) {
      const jsonString = cleaned.slice(start, end + 1);
      try {
        const parsed = JSON.parse(jsonString);
        console.log("[AI] successfully parsed JSON block:", jsonString);
        return parsed;
      } catch (e) {
        // If this JSON block fails to parse, try the next '{'
      }
    }

    // Try finding the next '{'
    start = cleaned.indexOf("{", start + 1);
  }

  console.error("[AI] JSON extraction failed:", { raw, cleaned });
  throw new Error("AI_PARSE_ERROR: No valid JSON object found in AI response. RAW: " + raw);
}

let requestCounter = 0;

/**
 * Analyzes the transcript using Groq AI to determine multilingual intent.
 */
export async function analyzeDistressIntent(
  transcript: string,
  configuredKeywords: string[],
  requestId?: string
): Promise<AIAnalysisResult> {
  let reqId = requestId;
  if (!reqId) {
    requestCounter++;
    reqId = `REQ-${String(requestCounter).padStart(3, "0")}`;
  }
  
  const groqKey = process.env.GROQ_API_KEY;
  if (!groqKey) {
    throw new Error("GROQ_API_KEY_MISSING");
  }

  const model = process.env.GROQ_MODEL?.trim() || "qwen/qwen3.6-27b";

  console.log(`[AI][${reqId}] transcript: "${transcript}"`);
  console.log(`[AI][${reqId}] model: ${model}`);

  const systemPrompt = `You are a multilingual AI semantic analyzer trained to detect emergency distress signals from raw spoken transcripts.
You MUST process diverse languages and mixed input (e.g., English, Hindi, Bengali, Hinglish, Spanish). Use semantic understanding of the meaning, not just exact keyword matching.

Your job is to determine the true intent of the speech, ignoring false positives like conversational requests for help (e.g., "Help me with my assignment", "Can you help me understand this?").

Evaluate the user's transcript and return ONLY a valid JSON object matching this schema exactly, with NO markdown formatting, NO backticks:
{
  "isEmergency": true, // or false
  "intent": "short human-readable semantic intent",
  "emergencyType": "FIRE", // MUST be ONE OF: FIRE, MEDICAL, ASSAULT, WEAPON_THREAT, SHOOTING, RESCUE, TRAPPED, ACCIDENT, DISASTER, DISTRESS, OTHER, NONE
  "severity": "CRITICAL", // MUST be ONE OF: LOW, MEDIUM, HIGH, CRITICAL
  "language": "Hindi" // The detected language name, e.g., "Hindi", "Hinglish", "Bengali", "English"
}

Remember:
- "bachao yahan aag lag gayi hai" -> language: "Hinglish", emergencyType: "FIRE", severity: "CRITICAL", isEmergency: true
- "मुझे कोई मार रहा है" -> language: "Hindi", emergencyType: "ASSAULT", severity: "HIGH", isEmergency: true
- "Aaj mausam bahut accha hai" -> language: "Hindi", emergencyType: "NONE", severity: "LOW", isEmergency: false
- If the phrase is conversational ("मुझे पढ़ाई में मदद चाहिए"), isEmergency MUST be false, severity LOW.
- Return ONLY raw JSON.`;

  try {
    console.log(`[AI][${new Date().toISOString()}] analysis started`);
    console.log(`[AI][${reqId}] request mode: standard prompt`);
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${groqKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Input Transcript: "${transcript}"` }
        ],
        temperature: 0,
        max_tokens: 600
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      let errorJson: any = {};
      try {
        errorJson = JSON.parse(errorText);
      } catch (e) {}

      console.error(`[AI][${reqId}] Groq request failed`, {
        status: res.status,
        statusText: res.statusText,
        body: errorText,
        model,
      });
      throw new Error(`Groq API Error: ${res.status} - ${errorText}`);
    }

    console.log(`[AI][${reqId}] response status: ${res.status}`);
    const data = await res.json();
    
    const responseText = data.choices?.[0]?.message?.content || "";
    const parsed = parseAiJson(responseText);

    const result: AIAnalysisResult = {
      isEmergency: Boolean(parsed.isEmergency),
      emergencyType: parsed.emergencyType || "NONE",
      severity: parsed.severity || "LOW",
      language: parsed.language || "unknown",
      detectedIntent: parsed.intent || parsed.detectedIntent || "Unknown intent",
      confidence: null,
    };
    
    console.log(`[AI][${reqId}] parsed result: ${JSON.stringify(result)}`);
    console.log(`[AI][${new Date().toISOString()}] analysis completed`);
    return result;
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`[${reqId}] ${errMessage}`);
  }
}
