import { db as prisma } from '../index';
import { publish } from '@scer/db-scer/src/events';

export interface NotificationTarget {
  id: string;
  email?: string;
  phone?: string;
  channel: 'email' | 'sms' | 'push';
}

export class NotificationEngine {
  async routeIncidentNotification(incidentId: string, severity: string, urgency: 'immediate' | 'normal'): Promise<void> {
    // Get escalation policy for this severity
    const policy = await this.getEscalationPolicy(severity);
    if (!policy) {
      console.log(`No escalation policy found for severity: ${severity}`);
      return;
    }

    // Get targets based on policy
    const targets = await this.getTargetsForPolicy(policy);

    // Create notifications
    for (const target of targets) {
      await this.createNotification({
        incidentId,
        target,
        severity,
        urgent: urgency === 'immediate',
      });
    }
  }

  async createNotification(options: {
    incidentId: string;
    target: NotificationTarget;
    severity: string;
    urgent: boolean;
  }): Promise<any> {
    const template = await this.getTemplate(options.severity);
    const message = template ? template.body.replace(/\{incidentId\}/g, options.incidentId) : `Incident ${options.incidentId} requires attention`;

    const notification = await prisma.notification.create({
      data: {
        incidentId: options.incidentId,
        recipientEmail: options.target.email || '',
        recipientPhone: options.target.phone,
        message,
        severity: options.severity,
        channel: options.target.channel,
        status: 'PENDING',
        maxAttempts: options.urgent ? 5 : 3,
      },
    });

    // Publish event
    publish({
      id: `notification-${notification.id}`,
      type: 'notification.sent',
      timestamp: new Date(),
      source: 'notification-engine',
      data: {
        notificationId: notification.id,
        incidentId: options.incidentId,
        recipient: options.target.email || options.target.phone,
        channel: options.target.channel,
      },
      severity: (options.severity as any),
      incidentId: options.incidentId,
    });

    // Attempt delivery
    this.scheduleDelivery(notification.id);

    return notification;
  }

  async updateDeliveryStatus(notificationId: string, status: 'DELIVERED' | 'FAILED' | 'PENDING'): Promise<void> {
    const notification = await prisma.notification.update({
      where: { id: notificationId },
      data: {
        status,
        sentAt: status === 'DELIVERED' ? new Date() : undefined,
        attempts: { increment: 1 },
      },
    });

    if (status === 'DELIVERED') {
      publish({
        id: `event-${Date.now()}`,
        type: 'notification.delivered',
        timestamp: new Date(),
        source: 'notification-engine',
        data: { notificationId, incidentId: notification.incidentId },
        severity: (notification.severity as any),
        incidentId: notification.incidentId || undefined,
      });
    }

    // Retry logic
    if (status === 'FAILED' && notification.attempts < notification.maxAttempts) {
      const delay = Math.pow(2, notification.attempts) * 1000; // Exponential backoff
      setTimeout(() => this.scheduleDelivery(notificationId), delay);
    }
  }

  private async scheduleDelivery(notificationId: string): Promise<void> {
    // In production, this would integrate with actual notification services
    // For now, simulate delivery
    setTimeout(() => {
      this.updateDeliveryStatus(notificationId, Math.random() > 0.1 ? 'DELIVERED' : 'FAILED');
    }, 1000 + Math.random() * 2000);
  }

  private async getEscalationPolicy(severity: string): Promise<any> {
    return await prisma.escalationPolicy.findFirst({
      where: { enabled: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  private async getTargetsForPolicy(policy: any): Promise<NotificationTarget[]> {
    // In a real system, this would parse policy rules
    // For now, return mock responders
    return [
      { id: "res-1", email: "admin@scer.local", channel: "email" },
      { id: "res-2", email: "oncall@scer.local", channel: "email" }
    ];
  }

  private async getTemplate(severity: string): Promise<any> {
    return await prisma.notificationTemplate.findFirst({
      where: { type: severity },
    });
  }
}

export const notificationEngine = new NotificationEngine();
