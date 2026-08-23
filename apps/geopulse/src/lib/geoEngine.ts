export interface GeoZone {
  id: string;
  name: string;
  code: string;
  type: "SAFE" | "EVENT" | "RESTRICTED" | "EMERGENCY";
  color: string;
  coords: [number, number][]; // Real geographic polygon [lat, lon]
  description: string;
}

export interface GeoDevice {
  id: string;
  name: string;
  callsign: string;
  type: "SECURITY" | "PARAMEDIC" | "FIRE_MARSHAL" | "VIP_ASSET" | "LOGISTICS";
  icon: string;
  lat: number;
  lon: number;
  speed: number; // km/h
  heading: number; // degrees 0-360
  status: "MOVING" | "STATIONARY" | "GPS_LOST" | "SPEED_ANOMALY" | "BREACH";
  battery: number; // %
  currentZone: string | null;
  zoneType: "SAFE" | "EVENT" | "RESTRICTED" | "EMERGENCY" | "OPEN";
  trail: { lat: number; lon: number; time: string }[];
  lastUpdate: string;
  alert: string | null;
}

export interface GeoAlert {
  id: string;
  deviceId: string;
  deviceName: string;
  type: "GEOFENCE_BREACH" | "SPEED_ANOMALY" | "GPS_LOST" | "ZONE_ENTRY" | "ZONE_EXIT";
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "INFO";
  message: string;
  zoneName: string;
  location: string;
  timestamp: string;
}

export const GEOFENCE_ZONES: GeoZone[] = [
  {
    id: "zone-safe",
    name: "Campus Quad & Academic Hub",
    code: "ZONE-SAFE",
    type: "SAFE",
    color: "#10b981",
    coords: [
      [40.7595, -73.9880],
      [40.7595, -73.9840],
      [40.7570, -73.9840],
      [40.7570, -73.9880],
    ],
    description: "Public pedestrian zone. Standard monitoring active.",
  },
  {
    id: "zone-event",
    name: "Athletic Arena & Stadium",
    code: "ZONE-EVENT",
    type: "EVENT",
    color: "#38bdf8",
    coords: [
      [40.7600, -73.9840],
      [40.7600, -73.9810],
      [40.7565, -73.9810],
      [40.7565, -73.9840],
    ],
    description: "High-density gathering sector. Crowd flow analysis.",
  },
  {
    id: "zone-restricted",
    name: "High-Voltage Power Utility Vault",
    code: "ZONE-RESTRICTED",
    type: "RESTRICTED",
    color: "#f59e0b",
    coords: [
      [40.7610, -73.9910],
      [40.7610, -73.9880],
      [40.7590, -73.9880],
      [40.7590, -73.9910],
    ],
    description: "RESTRICTED: Hazardous electrical switchgear. Level 4 clearance required.",
  },
  {
    id: "zone-emergency",
    name: "Biohazard & Chemical Storage Facility",
    code: "ZONE-EMERGENCY",
    type: "EMERGENCY",
    color: "#ef4444",
    coords: [
      [40.7560, -73.9840],
      [40.7560, -73.9810],
      [40.7540, -73.9810],
      [40.7540, -73.9840],
    ],
    description: "EMERGENCY QUARANTINE: Highly toxic reagent storage. Unauthorized entry triggers armed alarm.",
  },
];

// Point in polygon algorithm
function isPointInPolygon(point: [number, number], vs: [number, number][]) {
  const x = point[0], y = point[1];
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][0], yi = vs[i][1];
    const xj = vs[j][0], yj = vs[j][1];
    const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// Initial Device Fleet with real geographic coordinates
const INITIAL_DEVICES: GeoDevice[] = [
  {
    id: "DEV-101",
    name: "Tactical Guard Alpha",
    callsign: "PATROL-01",
    type: "SECURITY",
    icon: "🛡️",
    lat: 40.7582,
    lon: -73.9860,
    speed: 12,
    heading: 45,
    status: "MOVING",
    battery: 94,
    currentZone: "Campus Quad & Academic Hub",
    zoneType: "SAFE",
    trail: [{ lat: 40.7582, lon: -73.9860, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-204",
    name: "Paramedic Mobile Unit 2",
    callsign: "MEDIC-02",
    type: "PARAMEDIC",
    icon: "🚑",
    lat: 40.7575,
    lon: -73.9850,
    speed: 0,
    heading: 180,
    status: "STATIONARY",
    battery: 88,
    currentZone: "Campus Quad & Academic Hub",
    zoneType: "SAFE",
    trail: [{ lat: 40.7575, lon: -73.9850, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-305",
    name: "Fire Marshal Lead",
    callsign: "FIRE-05",
    type: "FIRE_MARSHAL",
    icon: "🚒",
    lat: 40.7585,
    lon: -73.9825,
    speed: 16,
    heading: 90,
    status: "MOVING",
    battery: 76,
    currentZone: "Athletic Arena & Stadium",
    zoneType: "EVENT",
    trail: [{ lat: 40.7585, lon: -73.9825, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-408",
    name: "VIP Student Asset 12",
    callsign: "BADGE-12",
    type: "VIP_ASSET",
    icon: "👤",
    lat: 40.7588,
    lon: -73.9870,
    speed: 4,
    heading: 270,
    status: "MOVING",
    battery: 62,
    currentZone: "Campus Quad & Academic Hub",
    zoneType: "SAFE",
    trail: [{ lat: 40.7588, lon: -73.9870, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-512",
    name: "Rapid Transport Cart 4",
    callsign: "LOGISTICS-04",
    type: "LOGISTICS",
    icon: "🚚",
    lat: 40.7550,
    lon: -73.9890,
    speed: 0,
    heading: 0,
    status: "STATIONARY",
    battery: 98,
    currentZone: null,
    zoneType: "OPEN",
    trail: [{ lat: 40.7550, lon: -73.9890, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
];

class GeoEngine {
  private devices: Map<string, GeoDevice> = new Map();
  private alerts: GeoAlert[] = [];
  private demoActive: boolean = false;
  private demoStep: number = 0;
  private tickInterval: NodeJS.Timeout | null = null;
  private subscribers: Set<(data: any) => void> = new Set();

  constructor() {
    INITIAL_DEVICES.forEach((d) => this.devices.set(d.id, { ...d }));
    this.startEngine();
  }

  public subscribe(cb: (data: any) => void) {
    this.subscribers.add(cb);
    return () => this.subscribers.delete(cb);
  }

  private broadcast() {
    const payload = this.getSnapshot();
    this.subscribers.forEach((cb) => {
      try {
        cb(payload);
      } catch (e) {
        console.error("Subscriber broadcast error", e);
      }
    });
  }

  private getZoneForPosition(lat: number, lon: number): GeoZone | null {
    for (const zone of GEOFENCE_ZONES) {
      if (isPointInPolygon([lat, lon], zone.coords)) {
        return zone;
      }
    }
    return null;
  }

  private async forwardAlertToEngines(alert: GeoAlert) {
    try {
      await fetch("http://localhost:3003/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: alert.type,
          severity: alert.severity,
          recipient: "Campus Police & Security Dispatch",
          message: `[GEOPULSE ALERT] ${alert.message} at ${alert.zoneName}`,
        }),
      });
    } catch (e) {}

    try {
      await fetch("http://localhost:3000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: alert.id,
          type: "geofence.violation",
          timestamp: alert.timestamp,
          source: "geopulse",
          severity: alert.severity,
          data: {
            deviceId: alert.deviceId,
            deviceName: alert.deviceName,
            zone: alert.zoneName,
            message: alert.message,
            latitude: 40.7580,
            longitude: -73.9855,
          },
        }),
      });
    } catch (e) {}
  }

  private createAlert(
    deviceId: string,
    deviceName: string,
    type: GeoAlert["type"],
    severity: GeoAlert["severity"],
    message: string,
    zoneName: string
  ) {
    const alert: GeoAlert = {
      id: `alert-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      deviceId,
      deviceName,
      type,
      severity,
      message,
      zoneName,
      location: "Campus Real Ground",
      timestamp: new Date().toISOString(),
    };

    this.alerts.unshift(alert);
    if (this.alerts.length > 30) this.alerts.pop();

    this.forwardAlertToEngines(alert);
  }

  private startEngine() {
    if (this.tickInterval) return;

    this.tickInterval = setInterval(() => {
      this.tick();
    }, 1200);
  }

  public tick() {
    if (this.demoActive) {
      this.stepDemo();
    } else {
      this.stepNormalSimulation();
    }
    this.broadcast();
  }

  private stepNormalSimulation() {
    this.devices.forEach((device) => {
      if (device.status === "STATIONARY" && Math.random() > 0.15) return;

      const angle = (device.heading + (Math.random() * 40 - 20)) * (Math.PI / 180);
      const step = device.speed > 0 ? 0.00012 : 0.00004;

      let newLat = device.lat + Math.sin(angle) * step;
      let newLon = device.lon + Math.cos(angle) * step;

      // Keep within campus bounds [40.7530, 40.7630] x [-73.9920, -73.9800]
      if (newLat < 40.7530 || newLat > 40.7630) {
        device.heading = (device.heading + 180) % 360;
        newLat = Math.max(40.7530, Math.min(40.7630, newLat));
      }
      if (newLon < -73.9920 || newLon > -73.9800) {
        device.heading = (device.heading + 180) % 360;
        newLon = Math.max(-73.9920, Math.min(-73.9800, newLon));
      }

      device.lat = +newLat.toFixed(6);
      device.lon = +newLon.toFixed(6);

      const prevZone = device.currentZone;
      const zone = this.getZoneForPosition(device.lat, device.lon);

      if (zone) {
        device.currentZone = zone.name;
        device.zoneType = zone.type;

        if (prevZone !== zone.name) {
          if (zone.type === "RESTRICTED") {
            device.status = "BREACH";
            device.alert = `BREACH: Entered ${zone.name}`;
            this.createAlert(
              device.id,
              device.name,
              "GEOFENCE_BREACH",
              "CRITICAL",
              `Unauthorized access detected: ${device.name} entered ${zone.name}`,
              zone.name
            );
          } else if (zone.type === "EMERGENCY") {
            device.status = "BREACH";
            device.alert = `HAZARD: Inside ${zone.name}`;
            this.createAlert(
              device.id,
              device.name,
              "GEOFENCE_BREACH",
              "CRITICAL",
              `Biohazard quarantine breach by ${device.name}`,
              zone.name
            );
          } else {
            device.alert = null;
            if (device.status === "BREACH") device.status = "MOVING";
          }
        }
      } else {
        device.currentZone = null;
        device.zoneType = "OPEN";
        if (device.status === "BREACH") device.status = "MOVING";
        device.alert = null;
      }

      device.trail.push({ lat: device.lat, lon: device.lon, time: new Date().toISOString() });
      if (device.trail.length > 12) device.trail.shift();
      device.lastUpdate = new Date().toISOString();
    });
  }

  public startLiveDemo(): { message: string; stages: number } {
    this.demoActive = true;
    this.demoStep = 0;

    const dev = this.devices.get("DEV-101");
    if (dev) {
      dev.lat = 40.7580;
      dev.lon = -73.9860;
      dev.speed = 18;
      dev.heading = 290;
      dev.status = "MOVING";
      dev.currentZone = "Campus Quad & Academic Hub";
      dev.zoneType = "SAFE";
      dev.alert = null;
      dev.trail = [{ lat: 40.7580, lon: -73.9860, time: new Date().toISOString() }];
    }

    this.broadcast();
    return { message: "Judge Demo Sequence Initiated", stages: 5 };
  }

  private stepDemo() {
    this.demoStep++;
    const dev = this.devices.get("DEV-101");
    if (!dev) return;

    if (this.demoStep === 1) {
      dev.lat = 40.7586;
      dev.lon = -73.9870;
      dev.speed = 22;
      dev.heading = 295;
      dev.status = "MOVING";
      dev.currentZone = "Campus Quad & Academic Hub";
    } else if (this.demoStep === 2) {
      dev.lat = 40.7592;
      dev.lon = -73.9882;
      dev.speed = 26;
      dev.heading = 300;
      dev.status = "MOVING";
      dev.currentZone = "Approaching Restricted Utility Vault";
      dev.zoneType = "OPEN";
    } else if (this.demoStep === 3) {
      // Enters Restricted Zone (Utility Vault)
      dev.lat = 40.7600;
      dev.lon = -73.9895;
      dev.speed = 34;
      dev.heading = 310;
      dev.status = "BREACH";
      dev.currentZone = "High-Voltage Power Utility Vault";
      dev.zoneType = "RESTRICTED";
      dev.alert = "CRITICAL: Level 4 Geofence Violation";

      this.createAlert(
        dev.id,
        dev.name,
        "GEOFENCE_BREACH",
        "CRITICAL",
        `🚨 LIVE BREACH: ${dev.name} (${dev.callsign}) penetrated High-Voltage Power Utility Vault!`,
        "High-Voltage Power Utility Vault"
      );
    } else if (this.demoStep === 4) {
      dev.lat = 40.7605;
      dev.lon = -73.9902;
      dev.speed = 58; // High speed
      dev.heading = 315;
      dev.status = "SPEED_ANOMALY";
      dev.alert = "SPEED ANOMALY: 58 km/h in Restricted Zone";

      this.createAlert(
        dev.id,
        dev.name,
        "SPEED_ANOMALY",
        "HIGH",
        `⚡ SPEED ANOMALY: ${dev.name} clocked at 58 km/h (Limit: 15 km/h) in Restricted Vault`,
        "High-Voltage Power Utility Vault"
      );
    } else if (this.demoStep === 5) {
      dev.lat = 40.7608;
      dev.lon = -73.9905;
      dev.speed = 0;
      dev.status = "BREACH";
      dev.alert = "SUSPECT SECURED IN UTILITY VAULT";

      setTimeout(() => {
        this.demoActive = false;
      }, 5000);
    }

    dev.trail.push({ lat: dev.lat, lon: dev.lon, time: new Date().toISOString() });
    if (dev.trail.length > 12) dev.trail.shift();
    dev.lastUpdate = new Date().toISOString();
  }

  public getSnapshot() {
    const devicesList = Array.from(this.devices.values());
    const movingCount = devicesList.filter((d) => d.status === "MOVING" || d.status === "SPEED_ANOMALY" || (d.status === "BREACH" && d.speed > 0)).length;
    const stationaryCount = devicesList.filter((d) => d.status === "STATIONARY" || (d.status === "BREACH" && d.speed === 0)).length;
    const alertCount = this.alerts.length;

    return {
      timestamp: new Date().toISOString(),
      demoActive: this.demoActive,
      demoStep: this.demoStep,
      stats: {
        total: devicesList.length,
        active: devicesList.length,
        moving: movingCount,
        stationary: stationaryCount,
        offline: 0,
        alerts: alertCount,
      },
      zones: GEOFENCE_ZONES,
      devices: devicesList,
      recentAlerts: this.alerts.slice(0, 10),
    };
  }
}

const globalForGeo = globalThis as unknown as { geoEngine: GeoEngine | undefined };
export const geoEngine = globalForGeo.geoEngine ?? new GeoEngine();
if (process.env.NODE_ENV !== "production") globalForGeo.geoEngine = geoEngine;
