// Live detection simulation engine for demo mode
import { publish } from './events';
import { Event, EventType } from './events';

export interface SimulationConfig {
  isActive: boolean;
  frequency: number; // milliseconds between events
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  locations: Array<{ name: string; lat: number; lon: number }>;
  keywords: string[];
  confidenceRange: [number, number];
}

const DEFAULT_LOCATIONS = [
  { name: 'North Gate', lat: 40.7128, lon: -74.006 },
  { name: 'Central Hub', lat: 40.758, lon: -73.9855 },
  { name: 'East Sector', lat: 40.7589, lon: -73.9851 },
  { name: 'South District', lat: 40.7489, lon: -74.0025 },
  { name: 'West Wing', lat: 40.7614, lon: -74.0012 },
];

const DEFAULT_KEYWORDS = [
  'HELP',
  'FIRE',
  'GUNSHOT',
  'MEDICAL',
  'ACCIDENT',
  'EMERGENCY',
];

export class DetectionSimulator {
  private config: SimulationConfig = {
    isActive: false,
    frequency: 5000,
    severity: 'MEDIUM',
    locations: DEFAULT_LOCATIONS,
    keywords: DEFAULT_KEYWORDS,
    confidenceRange: [0.75, 0.99],
  };

  private intervalId: NodeJS.Timeout | null = null;
  private eventCount: number = 0;
  private startTime: Date | null = null;

  startSimulation(config?: Partial<SimulationConfig>): void {
    if (this.config.isActive) {
      console.log('Simulation already running');
      return;
    }

    if (config) {
      this.config = { ...this.config, ...config };
    }

    this.config.isActive = true;
    this.startTime = new Date();
    this.eventCount = 0;

    this.intervalId = setInterval(() => {
      this.generateDetectionEvent();
    }, this.config.frequency);

    console.log('Detection simulation started', this.config);
  }

  stopSimulation(): void {
    if (!this.config.isActive) {
      console.log('Simulation not running');
      return;
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.config.isActive = false;
    console.log(`Detection simulation stopped. Generated ${this.eventCount} events`);
  }

  toggleSimulation(config?: Partial<SimulationConfig>): boolean {
    if (this.config.isActive) {
      this.stopSimulation();
      return false;
    } else {
      this.startSimulation(config);
      return true;
    }
  }

  private generateDetectionEvent(): void {
    const location = this.config.locations[Math.floor(Math.random() * this.config.locations.length)];
    const keyword = this.config.keywords[Math.floor(Math.random() * this.config.keywords.length)];
    const confidence =
      this.config.confidenceRange[0] +
      Math.random() * (this.config.confidenceRange[1] - this.config.confidenceRange[0]);

    const event: Event = {
      id: `detection-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      type: 'detection.audio.alert',
      timestamp: new Date(),
      source: 'audio-engine',
      data: {
        keyword,
        confidence: parseFloat(confidence.toFixed(2)),
        location: location.name,
        latitude: location.lat,
        longitude: location.lon,
        deviceId: `device-${Math.floor(Math.random() * 10)}`,
        duration: Math.floor(Math.random() * 2000) + 500,
      },
      severity: this.mapKeywordToSeverity(keyword),
    };

    fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    }).catch(console.error);

    this.eventCount++;

    if (this.eventCount % 10 === 0) {
      console.log(`[Simulation] Generated ${this.eventCount} detection events`);
    }
  }

  private mapKeywordToSeverity(keyword: string): 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' {
    switch (keyword.toUpperCase()) {
      case 'GUNSHOT':
        return 'CRITICAL';
      case 'FIRE':
      case 'MEDICAL':
        return 'HIGH';
      case 'ACCIDENT':
        return 'MEDIUM';
      default:
        return 'LOW';
    }
  }

  getStatus(): { isActive: boolean; eventCount: number; uptime: number | null; config: SimulationConfig } {
    return {
      isActive: this.config.isActive,
      eventCount: this.eventCount,
      uptime: this.startTime ? Date.now() - this.startTime.getTime() : null,
      config: this.config,
    };
  }

  reconfigure(config: Partial<SimulationConfig>): void {
    const wasActive = this.config.isActive;
    if (wasActive) {
      this.stopSimulation();
    }

    this.config = { ...this.config, ...config };

    if (wasActive) {
      this.startSimulation();
    }

    console.log('Simulation reconfigured', this.config);
  }
}

export const simulator = new DetectionSimulator();
