export type DistressSeverity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

export interface SpeechAnalysisResult {
  isEmergency: boolean;
  detectedKeywords: string[];
  primaryKeyword: string;
  severity: DistressSeverity;
  isBenign: boolean;
  benignReason?: string;
  contextSummary: string;
  urgencyScore: number;
}

/**
 * Common non-emergency phrases that include "help" but represent everyday conversational speech.
 */
const BENIGN_HELP_PATTERNS = [
  /\bcan you help me with\b/i,
  /\bcould you help me with\b/i,
  /\bwould you help me with\b/i,
  /\bhelp me with my\b/i,
  /\bhelp me with this\b/i,
  /\bhelp me with that\b/i,
  /\bneed help with\b/i,
  /\bneed some help with\b/i,
  /\basking for help with\b/i,
  /\bhelp me do\b/i,
  /\bhelp me fix\b/i,
  /\bhelp me solve\b/i,
  /\bhelp me understand\b/i,
  /\bhelp me find\b/i,
  /\bhelp me learn\b/i,
  /\bhelp me study\b/i,
  /\bhomework help\b/i,
  /\bassignment help\b/i,
  /\bcustomer help\b/i,
  /\bhelp desk\b/i,
  /\btech help\b/i,
  /\bself help\b/i,
];

/**
 * Words that indicate genuine urgency or physical danger in spoken speech.
 */
const URGENCY_MODIFIERS = [
  /\bsomeone\b/i,
  /\bplease\b/i,
  /\bnow\b/i,
  /\bhurry\b/i,
  /\bquick\b/i,
  /\bcall 911\b/i,
  /\bcall police\b/i,
  /\bcall an ambulance\b/i,
  /\btrapped\b/i,
  /\bdanger\b/i,
  /\battack\b/i,
  /\battacked\b/i,
  /\bbleeding\b/i,
  /\bhurt\b/i,
  /\binjured\b/i,
  /\bgas leak\b/i,
  /\bgun\b/i,
  /\bweapon\b/i,
  /\bsave me\b/i,
  /\bcan't breathe\b/i,
  /\bdrowning\b/i,
  /\bchoking\b/i,
];

/**
 * Analyzes spoken transcript against configured distress keywords and surrounding linguistic context.
 */
export function analyzeDistressSpeech(
  transcript: string,
  configuredKeywords: string[] = ["HELP", "FIRE", "EMERGENCY", "SHOOTER"]
): SpeechAnalysisResult {
  const normalizedText = transcript.trim().toLowerCase();

  if (!normalizedText) {
    return {
      isEmergency: false,
      detectedKeywords: [],
      primaryKeyword: "",
      severity: "LOW",
      isBenign: false,
      contextSummary: "Empty speech transcript.",
      urgencyScore: 0,
    };
  }

  // 1. Identify which configured distress keywords are present in the transcript
  const detectedKeywords: string[] = [];
  for (const rawKeyword of configuredKeywords) {
    const kw = rawKeyword.trim().toLowerCase();
    // Word boundary match to prevent false partial matching inside unrelated words
    const regex = new RegExp(`\\b${kw}\\b`, "i");
    if (regex.test(normalizedText)) {
      detectedKeywords.push(rawKeyword.toUpperCase().trim());
    }
  }

  if (detectedKeywords.length === 0) {
    return {
      isEmergency: false,
      detectedKeywords: [],
      primaryKeyword: "",
      severity: "LOW",
      isBenign: false,
      contextSummary: "No distress keywords detected in speech.",
      urgencyScore: 0,
    };
  }

  // 2. Check if this is an explicit high-urgency keyword like FIRE or SHOOTER
  const hasSevereKeyword = detectedKeywords.some(
    (kw) => kw === "FIRE" || kw === "SHOOTER" || kw === "EMERGENCY"
  );

  // 3. Count urgency modifiers in the surrounding transcript
  let urgencyModifierCount = 0;
  for (const modifier of URGENCY_MODIFIERS) {
    if (modifier.test(normalizedText)) {
      urgencyModifierCount++;
    }
  }

  // 4. Benign context filter: check if the speech contains non-emergency conversational patterns
  // Only apply benign filter if no severe keywords (e.g. FIRE, SHOOTER) are present
  if (!hasSevereKeyword) {
    for (const benignPattern of BENIGN_HELP_PATTERNS) {
      if (benignPattern.test(normalizedText) && urgencyModifierCount === 0) {
        return {
          isEmergency: false,
          detectedKeywords,
          primaryKeyword: detectedKeywords.join(", "),
          severity: "LOW",
          isBenign: true,
          benignReason: `Spoken in benign conversational context ("${transcript}").`,
          contextSummary: "Filtered non-emergency conversational speech.",
          urgencyScore: 0,
        };
      }
    }
  }

  // 5. Calculate urgency score
  // - Keyword count weight: 2 points per keyword
  // - Severe keyword bonus: 3 points
  // - Urgency modifiers: 1.5 points each
  // - Short exclamatory isolated cry bonus: 2 points if transcript length <= 15 chars (e.g. "HELP!", "FIRE!")
  let urgencyScore = detectedKeywords.length * 2;
  if (hasSevereKeyword) urgencyScore += 3;
  urgencyScore += urgencyModifierCount * 1.5;
  if (normalizedText.length <= 15) urgencyScore += 2;

  // 6. Determine severity based on contextual indicators
  let severity: DistressSeverity = "MEDIUM";
  if (
    detectedKeywords.length >= 2 ||
    detectedKeywords.includes("SHOOTER") ||
    detectedKeywords.includes("FIRE") ||
    urgencyScore >= 5
  ) {
    severity = "CRITICAL";
  } else if (detectedKeywords.includes("EMERGENCY") || urgencyScore >= 3.5) {
    severity = "HIGH";
  } else {
    severity = "MEDIUM";
  }

  const primaryKeyword = detectedKeywords.join(", ");
  const contextSummary =
    detectedKeywords.length >= 2
      ? `Multi-keyword distress detected (${primaryKeyword}) with urgency context.`
      : `Distress keyword "${primaryKeyword}" recognized with urgency score ${urgencyScore.toFixed(1)}.`;

  return {
    isEmergency: true,
    detectedKeywords,
    primaryKeyword,
    severity,
    isBenign: false,
    contextSummary,
    urgencyScore,
  };
}
