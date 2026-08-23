
const { PrismaClient } = require("./src/generated/client");
const prisma = new PrismaClient();
async function main() {
  const geo1 = await prisma.geoResource.create({ data: { name: "Medical Team 1", location_lat: 12.9716, location_lon: 77.5946, zone: "Block C" } });
  const geo2 = await prisma.geoResource.create({ data: { name: "Medical Team 2", location_lat: 12.9720, location_lon: 77.5950, zone: "North Gate" } });
  
  await prisma.capability.createMany({
    data: [
      { name: "Medical", geoResourceId: geo1.id },
      { name: "Medical", geoResourceId: geo2.id },
      { name: "Critical Care", geoResourceId: geo2.id } // Team 2 has better capability
    ]
  });

  await prisma.geoZone.createMany({
    data: [
      { name: "Block C", type: "SAFE", polygon: "[]", coverage: 100 },
      { name: "North Gate", type: "SERVICE", polygon: "[]", coverage: 85 }
    ]
  });

  console.log("GeoPulse DB seeded successfully.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

