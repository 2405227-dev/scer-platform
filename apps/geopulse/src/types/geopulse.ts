export type ResponderType =
  | "MEDICAL"
  | "SECURITY"
  | "FIRE"
  | "EMERGENCY_RESPONSE"
  | "GENERAL";

export type ResponderStatus =
  | "AVAILABLE"
  | "BUSY"
  | "OFFLINE"
  | "EN_ROUTE"
  | "ON_SCENE";

export type AssignmentStatus =
  | "DISPATCHED"
  | "ACCEPTED"
  | "EN_ROUTE"
  | "ON_SCENE"
  | "COMPLETED"
  | "CANCELLED";

export type IncidentSeverity =
  | "CRITICAL"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "RESOLVED";

export type IncidentStatus =
  | "REPORTED"
  | "ANALYZING"
  | "ASSIGNED"
  | "DISPATCHED"
  | "EN_ROUTE"
  | "ON_SCENE"
  | "RESOLVED"
  | "CLOSED";

export interface CapabilityItem {
  id: string;
  name: string;
  description?: string | null;
  geoResourceId?: string;
}

export interface ResponderItem {
  id: string;
  name: string;
  type: ResponderType | string;
  status: ResponderStatus | string;
  latitude: number;
  longitude: number;
  phone?: string | null;
  email?: string | null;
  speedKmH: number;
  currentAssignmentId?: string | null;
  capabilities: CapabilityItem[];
  assignments?: AssignmentItem[];
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface IncidentItem {
  id: string;
  externalId?: string | null;
  title: string;
  type: string;
  severity: IncidentSeverity | string;
  status: IncidentStatus | string;
  location: string;
  latitude: number;
  longitude: number;
  requiredCapability: string;
  description?: string | null;
  assignedResponderId?: string | null;
  assignedResponder?: ResponderItem | null;
  assignments?: AssignmentItem[];
  recommendations?: RecommendationItem[];
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export interface AssignmentItem {
  id: string;
  incidentId: string;
  responderId: string;
  distanceKm: number;
  estimatedTimeMinutes: number;
  status: AssignmentStatus | string;
  assignedAt: string | Date;
  acceptedAt?: string | Date | null;
  arrivedAt?: string | Date | null;
  completedAt?: string | Date | null;
  responder?: ResponderItem;
  incident?: IncidentItem;
}

export interface RecommendationItem {
  id: string;
  incidentId?: string | null;
  responderId?: string | null;
  score: number;
  distanceKm?: number | null;
  etaMinutes?: number | null;
  capabilityScore?: number | null;
  availabilityScore?: number | null;
  proximityScore?: number | null;
  speedScore?: number | null;
  severityPriorityScore?: number | null;
  breakdownJson?: string | null;
  rationale?: string | null;
  createdAt: string | Date;
}

export interface ZoneItem {
  id: string;
  name: string;
  type: "SAFE" | "HIGH_RISK" | "CRITICAL" | "SERVICE" | "RESTRICTED" | string;
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | string;
  latitude: number;
  longitude: number;
  radiusMeters: number;
  coordinatesJson?: string | null;
}

export interface ScoreBreakdown {
  capabilityScore: number;       // Weight 0.40 (Max 40 pts)
  availabilityScore: number;     // Weight 0.25 (Max 25 pts)
  proximityScore: number;        // Weight 0.20 (Max 20 pts)
  speedScore: number;            // Weight 0.10 (Max 10 pts)
  severityPriorityScore: number; // Weight 0.05 (Max 5 pts)
  totalScore: number;            // Max 100
}

export interface CandidateRanking {
  responder: ResponderItem;
  distanceKm: number;
  etaMinutes: number;
  etaFormatted: string;
  score: number;
  rank: number;
  isBest: boolean;
  breakdown: ScoreBreakdown;
  rationale: string;
}

export interface RecommendationResponse {
  incidentId?: string;
  recommendation: CandidateRanking | null;
  alternatives: CandidateRanking[];
  evaluatedCount: number;
  generatedAt: string;
}

export interface GeoPulseStats {
  activeIncidents: number;
  criticalIncidents: number;
  availableResponders: number;
  dispatchedResponders: number;
  totalResponders: number;
  avgEtaFormatted: string;
  activeZones: number;
}
