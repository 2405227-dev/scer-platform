// Real-time WebSocket server for live event streaming
import { Server } from 'ws';
import { Event, EventType, subscribe, publish } from './events';

export interface ClientConnection {
  id: string;
  ws: any;
  subscribedEvents: Set<EventType>;
  lastHeartbeat: Date;
}

const connections = new Map<string, ClientConnection>();
let wsServer: Server | null = null;

export function initializeWebSocketServer(httpServer: any): Server {
  wsServer = new Server({ server: httpServer });

  wsServer.on('connection', (ws: any) => {
    const clientId = Math.random().toString(36).substr(2, 9);
    const connection: ClientConnection = {
      id: clientId,
      ws,
      subscribedEvents: new Set(),
      lastHeartbeat: new Date(),
    };

    connections.set(clientId, connection);

    ws.on('message', (data: string) => {
      try {
        const message = JSON.parse(data);
        handleClientMessage(clientId, message);
      } catch (err) {
        console.error('Invalid message received:', err);
      }
    });

    ws.on('close', () => {
      connections.delete(clientId);
    });

    ws.on('error', (err: any) => {
      console.error(`WebSocket error for ${clientId}:`, err);
    });

    // Send welcome message
    ws.send(JSON.stringify({
      type: 'connection.established',
      clientId,
      timestamp: new Date().toISOString(),
    }));
  });

  return wsServer;
}

function handleClientMessage(clientId: string, message: any): void {
  const connection = connections.get(clientId);
  if (!connection) return;

  switch (message.type) {
    case 'subscribe':
      if (message.eventTypes && Array.isArray(message.eventTypes)) {
        message.eventTypes.forEach((type: EventType) => {
          connection.subscribedEvents.add(type);
        });
      }
      connection.ws.send(JSON.stringify({
        type: 'subscription.confirmed',
        eventTypes: Array.from(connection.subscribedEvents),
      }));
      break;

    case 'unsubscribe':
      if (message.eventTypes && Array.isArray(message.eventTypes)) {
        message.eventTypes.forEach((type: EventType) => {
          connection.subscribedEvents.delete(type);
        });
      }
      break;

    case 'ping':
      connection.lastHeartbeat = new Date();
      connection.ws.send(JSON.stringify({ type: 'pong', timestamp: new Date().toISOString() }));
      break;

    default:
      console.warn(`Unknown message type: ${message.type}`);
  }
}

export function broadcastEvent(event: Event): void {
  const message = JSON.stringify({
    type: 'event',
    event,
    timestamp: new Date().toISOString(),
  });

  connections.forEach((connection) => {
    if (connection.subscribedEvents.has(event.type) && connection.ws.readyState === 1) {
      try {
        connection.ws.send(message);
      } catch (err) {
        console.error(`Failed to send event to ${connection.id}:`, err);
      }
    }
  });
}

export function broadcastSystemStatus(status: 'connected' | 'reconnecting' | 'offline'): void {
  const message = JSON.stringify({
    type: 'system.status',
    status,
    timestamp: new Date().toISOString(),
    connectedClients: connections.size,
  });

  connections.forEach((connection) => {
    if (connection.ws.readyState === 1) {
      try {
        connection.ws.send(message);
      } catch (err) {
        console.error(`Failed to send status to ${connection.id}:`, err);
      }
    }
  });
}

export function getConnectionCount(): number {
  return connections.size;
}

export function getConnections(): ClientConnection[] {
  return Array.from(connections.values());
}

// Subscribe to all events and broadcast via WebSocket
export function attachEventBroadcaster(): void {
  const eventTypes: EventType[] = [
    'detection.audio.alert',
    'incident.created',
    'incident.assigned',
    'incident.acknowledged',
    'incident.updated',
    'incident.resolved',
    'responder.location.updated',
    'responder.status.changed',
    'notification.sent',
    'notification.delivered',
    'resource.available',
    'resource.unavailable',
    'system.health.check',
  ];

  eventTypes.forEach((eventType) => {
    subscribe(eventType, (event: Event) => {
      broadcastEvent(event);
    });
  });
}
