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
    name: "KIIT Campus 6 Academic Quad & Convention Center",
    code: "KIIT-C6-ACAD",
    type: "SAFE",
    color: "#10b981",
    coords: [
      [20.3542, 85.8192],
      [20.3542, 85.8212],
      [20.3526, 85.8212],
      [20.3526, 85.8192],
    ],
    description: "KIIT Campus 6 School of Applied Sciences & Central Quad. Active student pedestrian zone.",
  },
  {
    id: "zone-event",
    name: "Campus 6 Sports Arena & Chintan Lawn",
    code: "KIIT-C6-SPORTS",
    type: "EVENT",
    color: "#38bdf8",
    coords: [
      [20.3545, 85.8212],
      [20.3545, 85.8230],
      [20.3522, 85.8230],
      [20.3522, 85.8212],
    ],
    description: "Auditorium, Open Athletics Field & Chintan Cultural Lawn. Crowd monitoring active.",
  },
  {
    id: "zone-restricted",
    name: "Campus 6 High-Voltage Substation & Lab Vault",
    code: "KIIT-C6-VAULT",
    type: "RESTRICTED",
    color: "#f59e0b",
    coords: [
      [20.3552, 85.8180],
      [20.3552, 85.8195],
      [20.3538, 85.8195],
      [20.3538, 85.8180],
    ],
    description: "RESTRICTED: Campus 6 Electrical Switchgear & Heavy Physics Vault. Clearance required.",
  },
  {
    id: "zone-emergency",
    name: "Campus 6 Chemical & Biohazard Storage Facility",
    code: "KIIT-C6-HAZARD",
    type: "EMERGENCY",
    color: "#ef4444",
    coords: [
      [20.3520, 85.8180],
      [20.3520, 85.8195],
      [20.3508, 85.8195],
      [20.3508, 85.8180],
    ],
    description: "EMERGENCY QUARANTINE: Highly toxic chemical reagent repository. Armed sensors.",
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

// Initial Device Fleet with KIIT Campus 6 geographic coordinates
const INITIAL_DEVICES: GeoDevice[] = [
  {
    id: "DEV-101",
    name: "KIIT Security Patrol Alpha",
    callsign: "PATROL-01",
    type: "SECURITY",
    icon: "🛡️",
    lat: 20.3532,
    lon: 85.8200,
    speed: 12,
    heading: 45,
    status: "MOVING",
    battery: 94,
    currentZone: "KIIT Campus 6 Academic Quad & Convention Center",
    zoneType: "SAFE",
    trail: [{ lat: 20.3532, lon: 85.8200, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-204",
    name: "Campus 6 Paramedic Ambulance 2",
    callsign: "MEDIC-02",
    type: "PARAMEDIC",
    icon: "🚑",
    lat: 20.3528,
    lon: 85.8198,
    speed: 0,
    heading: 180,
    status: "STATIONARY",
    battery: 88,
    currentZone: "KIIT Campus 6 Academic Quad & Convention Center",
    zoneType: "SAFE",
    trail: [{ lat: 20.3528, lon: 85.8198, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-305",
    name: "KIIT Fire Marshal Quick Unit",
    callsign: "FIRE-05",
    type: "FIRE_MARSHAL",
    icon: "🚒",
    lat: 20.3538,
    lon: 85.8218,
    speed: 16,
    heading: 90,
    status: "MOVING",
    battery: 76,
    currentZone: "Campus 6 Sports Arena & Chintan Lawn",
    zoneType: "EVENT",
    trail: [{ lat: 20.3538, lon: 85.8218, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-408",
    name: "VIP Student Asset (Campus 6)",
    callsign: "BADGE-12",
    type: "VIP_ASSET",
    icon: "👤",
    lat: 20.3534,
    lon: 85.8206,
    speed: 4,
    heading: 270,
    status: "MOVING",
    battery: 62,
    currentZone: "KIIT Campus 6 Academic Quad & Convention Center",
    zoneType: "SAFE",
    trail: [{ lat: 20.3534, lon: 85.8206, time: new Date().toISOString() }],
    lastUpdate: new Date().toISOString(),
    alert: null,
  },
  {
    id: "DEV-512",
    name: "Campus 6 Transit Cart 4",
    callsign: "LOGISTICS-04",
    type: "LOGISTICS",
    icon: "🚚",
    lat: 20.3518,
    lon: 85.8185,
    speed: 0,
    heading: 0,
    status: "STATIONARY",
    battery: 98,
    currentZone: null,
    zoneType: "OPEN",
    trail: [{ lat: 20.3518, lon: 85.8185, time: new Date().toISOString() }],
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

      // Keep within KIIT Campus 6 bounds [20.3500, 20.3565] x [85.8165, 85.8240]
      if (newLat < 20.3500 || newLat > 20.3565) {
        device.heading = (device.heading + 180) % 360;
        newLat = Math.max(20.3500, Math.min(20.3565, newLat));
      }
      if (newLon < 85.8165 || newLon > 85.8240) {
        device.heading = (device.heading + 180) % 360;
        newLon = Math.max(85.8165, Math.min(85.8240, newLon));
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
      dev.lat = 20.3530;
      dev.lon = 85.8200;
      dev.speed = 18;
      dev.heading = 290;
      dev.status = "MOVING";
      dev.currentZone = "KIIT Campus 6 Academic Quad & Convention Center";
      dev.zoneType = "SAFE";
      dev.alert = null;
      dev.trail = [{ lat: 20.3530, lon: 85.8200, time: new Date().toISOString() }];
    }

    this.broadcast();
    return { message: "Judge Demo Sequence Initiated", stages: 5 };
  }

  private stepDemo() {
    this.demoStep++;
    const dev = this.devices.get("DEV-101");
    if (!dev) return;

    if (this.demoStep === 1) {
      dev.lat = 20.3536;
      dev.lon = 85.8194;
      dev.speed = 22;
      dev.heading = 295;
      dev.status = "MOVING";
      dev.currentZone = "KIIT Campus 6 Academic Quad & Convention Center";
    } else if (this.demoStep === 2) {
      dev.lat = 20.3542;
      dev.lon = 85.8188;
      dev.speed = 26;
      dev.heading = 300;
      dev.status = "MOVING";
      dev.currentZone = "Approaching Campus 6 Substation Vault";
      dev.zoneType = "OPEN";
    } else if (this.demoStep === 3) {
      // Enters Restricted Zone (Substation Vault)
      dev.lat = 20.3546;
      dev.lon = 85.8186;
      dev.speed = 34;
      dev.heading = 310;
      dev.status = "BREACH";
      dev.currentZone = "Campus 6 High-Voltage Substation & Lab Vault";
      dev.zoneType = "RESTRICTED";
      dev.alert = "CRITICAL: Level 4 Geofence Violation";

      this.createAlert(
        dev.id,
        dev.name,
        "GEOFENCE_BREACH",
        "CRITICAL",
        `🚨 LIVE BREACH: ${dev.name} (${dev.callsign}) entered Campus 6 Substation Vault!`,
        "Campus 6 High-Voltage Substation & Lab Vault"
      );
    } else if (this.demoStep === 4) {
      dev.lat = 20.3549;
      dev.lon = 85.8184;
      dev.speed = 58; // High speed
      dev.heading = 315;
      dev.status = "SPEED_ANOMALY";
      dev.alert = "SPEED ANOMALY: 58 km/h in Campus 6 Vault";

      this.createAlert(
        dev.id,
        dev.name,
        "SPEED_ANOMALY",
        "HIGH",
        `⚡ SPEED ANOMALY: ${dev.name} clocked at 58 km/h (Limit: 15 km/h) in Substation 6`,
        "Campus 6 High-Voltage Substation & Lab Vault"
      );
    } else if (this.demoStep === 5) {
      dev.lat = 20.3551;
      dev.lon = 85.8182;
      dev.speed = 0;
      dev.status = "BREACH";
      dev.alert = "SUSPECT INTERCEPTED AT GATE 6";

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
