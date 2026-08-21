const { PrismaClient } = require("./node_modules/@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding GeoPulse Database...");

  // Clean up existing data
  await prisma.geoAssignment.deleteMany();
  await prisma.geoRecommendation.deleteMany();
  await prisma.capability.deleteMany();
  await prisma.geoResource.deleteMany();
  await prisma.geoIncident.deleteMany();
  await prisma.geoZone.deleteMany();

  // 1. Seed Responders
  const respondersData = [
    {
      name: "Medical Unit 01",
      type: "MEDICAL",
      status: "AVAILABLE",
      latitude: 20.2975,
      longitude: 85.8230,
      speedKmH: 45.0,
      phone: "+1-555-0101",
      email: "med01@scer.campus.edu",
      capabilities: [
        { name: "Medical", description: "Standard trauma triage and life support" },
        { name: "Critical Care", description: "Paramedic-level respiratory & cardiac resuscitation" },
        { name: "First Aid", description: "Basic wound management and stabilization" },
        { name: "Triage", description: "Mass casualty rapid incident assessment" }
      ]
    },
    {
      name: "Medical Unit 02",
      type: "MEDICAL",
      status: "AVAILABLE",
      latitude: 20.2940,
      longitude: 85.8260,
      speedKmH: 40.0,
      phone: "+1-555-0102",
      email: "med02@scer.campus.edu",
      capabilities: [
        { name: "Medical", description: "Standard trauma triage and life support" },
        { name: "First Aid", description: "Basic wound management and stabilization" },
        { name: "Triage", description: "Rapid diagnostic patient triage" }
      ]
    },
    {
      name: "Medical Unit 04",
      type: "MEDICAL",
      status: "AVAILABLE",
      latitude: 20.2968,
      longitude: 85.8238,
      speedKmH: 45.0,
      phone: "+1-555-0104",
      email: "med04@scer.campus.edu",
      capabilities: [
        { name: "Medical", description: "Advanced clinical emergency response" },
        { name: "Critical Care", description: "ALS defibrillation and emergency airway management" },
        { name: "Advanced Life Support", description: "ICU-grade mobile response equipment" },
        { name: "Ambulance", description: "High-speed patient transit vehicle" }
      ]
    },
    {
      name: "Security Patrol 01",
      type: "SECURITY",
      status: "AVAILABLE",
      latitude: 20.2980,
      longitude: 85.8210,
      speedKmH: 30.0,
      phone: "+1-555-0201",
      email: "sec01@scer.campus.edu",
      capabilities: [
        { name: "Security", description: "Perimeter enforcement and access security" },
        { name: "Crowd Control", description: "Tactical gathering containment" },
        { name: "Perimeter Defense", description: "Checkpoint interception and lockdown" }
      ]
    },
    {
      name: "Security Patrol 02",
      type: "SECURITY",
      status: "BUSY",
      latitude: 20.2930,
      longitude: 85.8220,
      speedKmH: 30.0,
      phone: "+1-555-0202",
      email: "sec02@scer.campus.edu",
      capabilities: [
        { name: "Security", description: "Patrol and escort services" },
        { name: "Access Control", description: "Gate inspection and credential validation" }
      ]
    },
    {
      name: "Security Unit 04",
      type: "SECURITY",
      status: "AVAILABLE",
      latitude: 20.2955,
      longitude: 85.8250,
      speedKmH: 30.0,
      phone: "+1-555-0204",
      email: "sec04@scer.campus.edu",
      capabilities: [
        { name: "Security", description: "High-readiness tactical response" },
        { name: "Crowd Control", description: "Civil containment protocols" },
        { name: "Rapid Intervention", description: "Immediate breach response" },
        { name: "First Aid", description: "Basic responder medical stabilization" }
      ]
    },
    {
      name: "Security Patrol 07",
      type: "SECURITY",
      status: "AVAILABLE",
      latitude: 20.2915,
      longitude: 85.8205,
      speedKmH: 30.0,
      phone: "+1-555-0207",
      email: "sec07@scer.campus.edu",
      capabilities: [
        { name: "Security", description: "Night-vision area monitoring" },
        { name: "Night Watch", description: "Low-light perimeter patrol" },
        { name: "Surveillance", description: "CCTV relay & aerial drone coordination" }
      ]
    },
    {
      name: "Fire Response 01",
      type: "FIRE",
      status: "AVAILABLE",
      latitude: 20.3000,
      longitude: 85.8270,
      speedKmH: 40.0,
      phone: "+1-555-0301",
      email: "fire01@scer.campus.edu",
      capabilities: [
        { name: "Fire Suppression", description: "Heavy foam and dry-chemical fire fighting" },
        { name: "Hazardous Material", description: "Toxic chemical containment & neutralization" },
        { name: "Search & Rescue", description: "Confined space extrication" },
        { name: "Structural Extrication", description: "Hydraulic entry equipment" }
      ]
    },
    {
      name: "Emergency Response 01",
      type: "EMERGENCY_RESPONSE",
      status: "EN_ROUTE",
      latitude: 20.2920,
      longitude: 85.8290,
      speedKmH: 35.0,
      phone: "+1-555-0401",
      email: "ert01@scer.campus.edu",
      capabilities: [
        { name: "Search & Rescue", description: "Campus-wide emergency search" },
        { name: "General Response", description: "Multi-hazard logistics coordination" },
        { name: "First Aid", description: "Immediate trauma support" },
        { name: "Evacuation", description: "Building evacuation orchestration" }
      ]
    }
  ];

  for (const r of respondersData) {
    const { capabilities, ...rest } = r;
    const responder = await prisma.geoResource.create({
      data: rest
    });

    for (const cap of capabilities) {
      await prisma.capability.create({
        data: {
          name: cap.name,
          description: cap.description,
          geoResourceId: responder.id
        }
      });
    }
  }

  // 2. Seed Incidents
  const inc1 = await prisma.geoIncident.create({
    data: {
      title: "Severe Respiratory Distress & Asthma Attack",
      type: "MEDICAL_EMERGENCY",
      severity: "CRITICAL",
      status: "REPORTED",
      location: "Block C - Science Wing Lab 3",
      latitude: 20.2961,
      longitude: 85.8245,
      requiredCapability: "MEDICAL",
      description: "Student experiencing acute respiratory distress and severe wheezing. Inhaler depleted. Immediate ALS unit required."
    }
  });

  const inc2 = await prisma.geoIncident.create({
    data: {
      title: "Chemical Spill & Fire Risk",
      type: "FIRE_HAZARD",
      severity: "HIGH",
      status: "REPORTED",
      location: "Chemistry Annex Warehouse B",
      latitude: 20.2990,
      longitude: 85.8265,
      requiredCapability: "FIRE",
      description: "Volatile organic solvent canister punctured in storage bay. Vapors spreading. Fire suppression team requested for containment."
    }
  });

  const inc3 = await prisma.geoIncident.create({
    data: {
      title: "Perimeter Gate Security Breach",
      type: "SECURITY_BREACH",
      severity: "MEDIUM",
      status: "REPORTED",
      location: "North Gate Entrance Gate 4",
      latitude: 20.2982,
      longitude: 85.8205,
      requiredCapability: "SECURITY",
      description: "Unauthorized vehicle bypassed automated barrier and refused checkpoint clearance. Security patrol intercept requested."
    }
  });

  const inc4 = await prisma.geoIncident.create({
    data: {
      title: "Sports Complex Knee Fracture",
      type: "MEDICAL_EMERGENCY",
      severity: "LOW",
      status: "RESOLVED",
      location: "Outdoor Athletic Complex",
      latitude: 20.2925,
      longitude: 85.8280,
      requiredCapability: "MEDICAL",
      description: "Athlete suffered compound knee dislocation during practice. Triage applied and patient transferred to health center."
    }
  });

  // 3. Seed GeoZones
  await prisma.geoZone.createMany({
    data: [
      { name: "Zone A: Science & Research Quad", type: "HIGH_RISK", riskLevel: "HIGH", latitude: 20.2965, longitude: 85.8245, radiusMeters: 250 },
      { name: "Zone B: North Gate & Logistics Hub", type: "SERVICE", riskLevel: "MEDIUM", latitude: 20.2985, longitude: 85.8210, radiusMeters: 200 },
      { name: "Zone C: Central Student Concourse", type: "SAFE", riskLevel: "LOW", latitude: 20.2950, longitude: 85.8255, radiusMeters: 300 },
      { name: "Zone D: Athletic & Recreation Fields", type: "SERVICE", riskLevel: "LOW", latitude: 20.2920, longitude: 85.8285, radiusMeters: 350 }
    ]
  });

  console.log("GeoPulse DB seeded successfully with 9 responders, 4 incidents, and 4 zones.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
