// Real-time event bus system for SCER platform
// Handles all inter-module communication via a unified event stream

export type EventType = 
  | 'detection.audio.alert'
  | 'incident.created'
  | 'incident.assigned'
  | 'incident.acknowledged'
  | 'incident.updated'
  | 'incident.resolved'
  | 'responder.location.updated'
  | 'responder.status.changed'
  | 'notification.sent'
  | 'notification.delivered'
  | 'system.health.check';

export interface Event {
  id: string;
  type: EventType;
  timestamp: Date;
  source: 'audio-engine' | 'geopulse' | 'notification-engine' | 'scer-core' | 'system' | 'live-response-portal' | 'dispatch-portal';
  data: Record<string, any>;
  severity?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  incidentId?: string;
  responderId?: string;
}

// In-memory event subscribers
const subscribers = new Map<EventType, Set<(event: Event) => void>>();

export function subscribe(eventType: EventType, handler: (event: Event) => void): () => void {
  if (!subscribers.has(eventType)) {
    subscribers.set(eventType, new Set());
  }
  subscribers.get(eventType)!.add(handler);
  
  // Return unsubscribe function
  return () => {
    subscribers.get(eventType)?.delete(handler);
  };
}

export function publish(event: Event): void {
  const handlers = subscribers.get(event.type);
  if (handlers) {
    handlers.forEach(handler => {
      try {
        handler(event);
      } catch (err) {
        console.error(`Error in event handler for ${event.type}:`, err);
      }
    });
  }
}

export function publishBatch(events: Event[]): void {
  events.forEach(publish);
}

// Clear all subscriptions (useful for testing)
export function clearSubscriptions(): void {
  subscribers.clear();
}

// Get all subscribers for a type (useful for debugging)
export function getSubscriberCount(eventType?: EventType): number {
  if (eventType) {
    return subscribers.get(eventType)?.size || 0;
  }
  return Array.from(subscribers.values()).reduce((sum, set) => sum + set.size, 0);
}
