import { db as prisma } from '../index';
import { publish } from './events';

export interface ServiceHealthStatus {
  service: string;
  status: 'healthy' | 'degraded' | 'unavailable';
  lastCheck: Date;
  responseTime: number;
  version?: string;
}

const SERVICE_ENDPOINTS = {
  'audio-engine': 'http://localhost:3001/api/health',
  'geopulse': 'http://localhost:3002/api/health',
  'notification-engine': 'http://localhost:3003/api/health',
};

export class HealthMonitor {
  private checkInterval: NodeJS.Timer | null = null;
  private healthStatuses = new Map<string, ServiceHealthStatus>();

  startMonitoring(intervalMs: number = 30000): void {
    // Initial check
    this.checkAllServices();

    // Recurring checks
    this.checkInterval = setInterval(() => {
      this.checkAllServices();
    }, intervalMs);

    console.log('Health monitoring started');
  }

  stopMonitoring(): void {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    console.log('Health monitoring stopped');
  }

  private async checkAllServices(): Promise<void> {
    for (const [service, endpoint] of Object.entries(SERVICE_ENDPOINTS)) {
      try {
        const startTime = Date.now();
        const response = await fetch(endpoint, { timeout: 5000 });
        const responseTime = Date.now() - startTime;

        const status: ServiceHealthStatus = {
          service,
          status: response.ok ? 'healthy' : 'degraded',
          lastCheck: new Date(),
          responseTime,
        };

        // Save to database
        await prisma.serviceConnection.upsert({
          where: { service },
          create: {
            service,
            status: status.status,
            health: status.status,
            lastCheck: status.lastCheck,
          },
          update: {
            status: status.status,
            health: status.status,
            lastCheck: status.lastCheck,
          },
        });

        this.healthStatuses.set(service, status);
      } catch (error) {
        const status: ServiceHealthStatus = {
          service,
          status: 'unavailable',
          lastCheck: new Date(),
          responseTime: -1,
        };

        // Save to database
        await prisma.serviceConnection.upsert({
          where: { service },
          create: {
            service,
            status: 'unavailable',
            health: 'unhealthy',
          },
          update: {
            status: 'unavailable',
            health: 'unhealthy',
            lastCheck: new Date(),
          },
        });

        this.healthStatuses.set(service, status);

        publish({
          id: `health-${Date.now()}`,
          type: 'system.health.check',
          timestamp: new Date(),
          source: 'system',
          data: {
            service,
            status: 'unavailable',
            error: (error as any).message,
          },
        });
      }
    }

    // Log overall system health
    this.logSystemHealth();
  }

  private async logSystemHealth(): Promise<void> {
    const statuses = Array.from(this.healthStatuses.values());
    const healthy = statuses.filter((s) => s.status === 'healthy').length;
    const degraded = statuses.filter((s) => s.status === 'degraded').length;
    const unavailable = statuses.filter((s) => s.status === 'unavailable').length;

    const systemHealth = unavailable > 0 ? 'warning' : degraded > 0 ? 'degraded' : 'healthy';

    // Save metrics
    await prisma.systemMetrics.create({
      data: {
        timestamp: new Date(),
        activeIncidents: await this.getActiveIncidentCount(),
        responseTime: this.getAverageResponseTime(),
        successRate: this.calculateSuccessRate(),
        systemHealth,
        uptime: process.uptime(),
      },
    });
  }

  async getHealthStatus(): Promise<Record<string, ServiceHealthStatus>> {
    return Object.fromEntries(this.healthStatuses);
  }

  async getSystemMetrics(): Promise<any> {
    return await prisma.systemMetrics.findFirst({
      orderBy: { timestamp: 'desc' },
    });
  }

  private async getActiveIncidentCount(): Promise<number> {
    return await (prisma as any).incident.count({
      where: {
        status: { in: ['DETECTED', 'ASSIGNED', 'ACKNOWLEDGED', 'INVESTIGATING'] },
      },
    });
  }

  private getAverageResponseTime(): number {
    if (this.healthStatuses.size === 0) return 0;
    const times = Array.from(this.healthStatuses.values())
      .filter((s) => s.responseTime > 0)
      .map((s) => s.responseTime);
    return times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : 0;
  }

  private calculateSuccessRate(): number {
    if (this.healthStatuses.size === 0) return 0;
    const healthy = Array.from(this.healthStatuses.values()).filter((s) => s.status === 'healthy').length;
    return (healthy / this.healthStatuses.size) * 100;
  }
}

export const healthMonitor = new HealthMonitor();
