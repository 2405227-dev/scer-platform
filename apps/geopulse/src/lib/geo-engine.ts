import {
  CandidateRanking,
  IncidentItem,
  IncidentSeverity,
  RecommendationResponse,
  ResponderItem,
  ScoreBreakdown,
} from "../types/geopulse";

/**
 * Configurable multi-factor ranking weights.
 * Total sums to 1.0 (100% / 100 points).
 */
export const SCORING_WEIGHTS = {
  capabilityMatch: 0.40, // 40 points max
  availability: 0.25,    // 25 points max
  proximity: 0.20,       // 20 points max
  responseSpeed: 0.10,   // 10 points max
  severityPriority: 0.05 // 5 points max
};

/**
 * Calculates the Haversine distance between two coordinates in kilometers.
 * Uses exact spherical trigonometry on Earth radius R = 6371 km.
 */
export function calculateHaversineDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  }

  const R = 6371; // Earth radius in km
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance * 100) / 100;
}

/**
 * Returns default estimated response speed in km/h based on responder type.
 */
export function getDefaultSpeedForType(type: string): number {
  const normalized = (type || "").toUpperCase();
  if (normalized.includes("MEDICAL") || normalized.includes("AMBULANCE")) return 45.0;
  if (normalized.includes("FIRE")) return 40.0;
  if (normalized.includes("EMERGENCY")) return 35.0;
  if (normalized.includes("SECURITY")) return 30.0;
  if (normalized.includes("FOOT") || normalized.includes("WALKING")) return 12.0;
  return 30.0;
}

/**
 * Calculates dynamic Estimated Time of Arrival (ETA) based on distance and responder speed profile.
 */
export function calculateETA(
  distanceKm: number,
  speedKmH: number = 30
): {
  totalMinutes: number;
  totalSeconds: number;
  formatted: string;
} {
  const effectiveSpeed = Math.max(5, speedKmH || 30);
  const hours = distanceKm / effectiveSpeed;
  const totalSeconds = Math.max(15, Math.round(hours * 3600));
  const totalMinutes = Math.round((totalSeconds / 60) * 10) / 10;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let formatted = "";
  if (minutes === 0) {
    formatted = `${seconds}s`;
  } else if (seconds === 0) {
    formatted = `${minutes}m`;
  } else {
    formatted = `${minutes}m ${seconds}s`;
  }

  return {
    totalMinutes,
    totalSeconds,
    formatted,
  };
}

/**
 * Evaluates capability match between incident requirements and responder capabilities.
 * Returns score between 0 and 40 points, and matched capability descriptors.
 */
export function evaluateCapabilityMatch(
  requiredCapability: string,
  incidentType: string,
  severity: IncidentSeverity | string,
  responder: ResponderItem
): { rawPoints: number; matchDescription: string } {
  const reqCap = (requiredCapability || "").toLowerCase().trim();
  const incType = (incidentType || "").toLowerCase().trim();
  const respType = (responder.type || "").toLowerCase().trim();

  const capNames = (responder.capabilities || []).map((c) => c.name.toLowerCase());
  const capString = capNames.join(" ");
  const isCritical = (severity || "").toUpperCase() === "CRITICAL";

  // Check specific domain matches
  const isMedicalReq = reqCap.includes("med") || incType.includes("med") || incType.includes("asthma") || incType.includes("injur") || incType.includes("respir");
  const isFireReq = reqCap.includes("fire") || incType.includes("fire") || incType.includes("chem") || incType.includes("hazmat") || incType.includes("spill");
  const isSecurityReq = reqCap.includes("sec") || incType.includes("sec") || incType.includes("breach") || incType.includes("suspicious") || incType.includes("crowd");

  // Medical match evaluation (Max 40)
  if (isMedicalReq) {
    if (respType.includes("medical")) {
      if (capString.includes("critical care") || capString.includes("advanced life support")) {
        return { rawPoints: 40, matchDescription: "Critical-care capability matched (ALS & Airway)" };
      }
      return { rawPoints: 34, matchDescription: "Standard medical response capability matched" };
    }
    if (capString.includes("first aid") || capString.includes("triage")) {
      return { rawPoints: isCritical ? 12 : 20, matchDescription: "Basic first-aid & triage support" };
    }
    return { rawPoints: 0, matchDescription: "Lacks required medical equipment/skills" };
  }

  // Fire / Hazmat match evaluation (Max 40)
  if (isFireReq) {
    if (respType.includes("fire") || capString.includes("fire suppression") || capString.includes("hazmat")) {
      if (capString.includes("hazardous material") || capString.includes("structural")) {
        return { rawPoints: 40, matchDescription: "Hazmat & heavy fire suppression capability matched" };
      }
      return { rawPoints: 34, matchDescription: "Standard fire response capability matched" };
    }
    if (capString.includes("evacuation") || capString.includes("search & rescue")) {
      return { rawPoints: 16, matchDescription: "Evacuation & perimeter search support" };
    }
    return { rawPoints: 0, matchDescription: "Lacks fire/hazmat suppression gear" };
  }

  // Security match evaluation (Max 40)
  if (isSecurityReq) {
    if (respType.includes("security")) {
      if (capString.includes("rapid intervention") || capString.includes("perimeter defense") || capString.includes("crowd control")) {
        return { rawPoints: 40, matchDescription: "Tactical security & intervention capability matched" };
      }
      return { rawPoints: 34, matchDescription: "Standard patrol security capability matched" };
    }
    if (respType.includes("emergency") || capString.includes("surveillance")) {
      return { rawPoints: 18, matchDescription: "Emergency surveillance support" };
    }
    return { rawPoints: 0, matchDescription: "Lacks security enforcement credentials" };
  }

  // General fallback match evaluation
  const anyNameMatch = capNames.some((c) => reqCap.includes(c) || incType.includes(c));
  if (anyNameMatch || respType.includes(reqCap)) {
    return { rawPoints: 34, matchDescription: "Direct capability tag matched" };
  }

  if (respType.includes("emergency") || capString.includes("general response") || capString.includes("first aid")) {
    return { rawPoints: 20, matchDescription: "General emergency response support" };
  }

  return { rawPoints: 5, matchDescription: "General assistance only" };
}

/**
 * Multi-factor Candidate Ranking Algorithm.
 * Evaluates, scores, and ranks all candidate responders for an emergency incident.
 */
export function rankResponders(
  incident: {
    id?: string;
    latitude: number;
    longitude: number;
    type: string;
    severity: IncidentSeverity | string;
    requiredCapability?: string;
    location?: string;
  },
  responders: ResponderItem[]
): RecommendationResponse {
  const reqCap = incident.requiredCapability || incident.type || "GENERAL";
  const severity = incident.severity || "MEDIUM";

  const evaluated: CandidateRanking[] = [];

  for (const resp of responders) {
    // 1. Calculate Real Haversine Distance (km)
    const distanceKm = calculateHaversineDistanceKm(
      incident.latitude,
      incident.longitude,
      resp.latitude,
      resp.longitude
    );

    // 2. Calculate Speed-Adjusted Dynamic ETA
    const speed = resp.speedKmH || getDefaultSpeedForType(resp.type);
    const eta = calculateETA(distanceKm, speed);

    // 3. Multi-Factor Scoring

    // Factor A: Capability Match (Weight 0.40 -> 40 points max)
    const capabilityEval = evaluateCapabilityMatch(
      reqCap,
      incident.type,
      severity,
      resp
    );
    const capabilityScore = capabilityEval.rawPoints;

    // Factor B: Availability Status (Weight 0.25 -> 25 points max)
    let availabilityScore = 0;
    const status = (resp.status || "AVAILABLE").toUpperCase();
    if (status === "AVAILABLE") {
      availabilityScore = 25;
    } else if (status === "BUSY" || status === "EN_ROUTE") {
      availabilityScore = 6;
    } else if (status === "ON_SCENE") {
      availabilityScore = 3;
    } else {
      // OFFLINE
      availabilityScore = 0;
    }

    // Factor C: Proximity Score (Weight 0.20 -> 20 points max)
    // 0km = 20pts, 1km = 16pts, 5km = 0pts
    const proximityScore = Math.max(0, Math.round((20 - distanceKm * 4) * 10) / 10);

    // Factor D: Response Speed Score (Weight 0.10 -> 10 points max)
    // Fast transit / fast ETA gives up to 10 points
    const speedScore = Math.max(0, Math.round((10 - (eta.totalMinutes * 1.2)) * 10) / 10);

    // Factor E: Severity Priority & Workload (Weight 0.05 -> 5 points max)
    const activeAssignments = (resp.assignments || []).filter(
      (a) => a.status === "DISPATCHED" || a.status === "ACCEPTED" || a.status === "EN_ROUTE" || a.status === "ON_SCENE"
    ).length;
    let severityPriorityScore = 5;
    if (activeAssignments === 1) severityPriorityScore = 2.5;
    else if (activeAssignments > 1) severityPriorityScore = 0;

    // Total Weighted Score (0 - 100)
    let totalScore =
      capabilityScore +
      availabilityScore +
      proximityScore +
      speedScore +
      severityPriorityScore;

    // Strict penalties
    if (status === "OFFLINE") {
      totalScore = 0;
    } else if (severity === "CRITICAL" && capabilityScore === 0) {
      totalScore = Math.min(totalScore, 15);
    }

    totalScore = Math.max(0, Math.min(100, Math.round(totalScore * 10) / 10));

    // Construct human-readable bulleted rationale
    const bullets: string[] = [];
    bullets.push(`• ${capabilityEval.matchDescription}`);
    bullets.push(`• ${distanceKm.toFixed(2)} km from incident`);
    bullets.push(`• Estimated arrival ~${eta.formatted} (@${speed} km/h)`);
    bullets.push(`• Responder currently ${status}`);
    if (activeAssignments === 0) {
      bullets.push("• 0 active workloads");
    } else {
      bullets.push(`• ${activeAssignments} active task(s)`);
    }

    const rationale = bullets.join("\n");

    const breakdown: ScoreBreakdown = {
      capabilityScore,
      availabilityScore,
      proximityScore,
      speedScore,
      severityPriorityScore,
      totalScore,
    };

    evaluated.push({
      responder: resp,
      distanceKm,
      etaMinutes: eta.totalMinutes,
      etaFormatted: eta.formatted,
      score: totalScore,
      rank: 0,
      isBest: false,
      breakdown,
      rationale,
    });
  }

  // Sort candidates: highest score first; tie breaker: lowest distance
  evaluated.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.distanceKm - b.distanceKm;
  });

  // Assign ranks
  evaluated.forEach((item, index) => {
    item.rank = index + 1;
    if (index === 0 && item.score > 0) {
      item.isBest = true;
    }
  });

  const recommendation = evaluated.length > 0 && evaluated[0].score > 0 ? evaluated[0] : null;
  const alternatives = recommendation ? evaluated.slice(1) : evaluated;

  return {
    incidentId: incident.id,
    recommendation,
    alternatives,
    evaluatedCount: evaluated.length,
    generatedAt: new Date().toISOString(),
  };
}
