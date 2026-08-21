
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const geo1 = await prisma.geoResource.create({ data: { name: "Medical Team 1" } });
  const geo2 = await prisma.geoResource.create({ data: { name: "Medical Team 2" } });
  
  await prisma.capability.createMany({
    data: [
      { name: "Medical", geoResourceId: geo1.id },
      { name: "Medical", geoResourceId: geo2.id },
      { name: "Critical Care", geoResourceId: geo2.id } // Team 2 has better capability
    ]
  });

  await prisma.geoZone.createMany({
    data: [
      { name: "Block C", type: "SAFE" },
      { name: "North Gate", type: "SERVICE" }
    ]
  });

  console.log("GeoPulse DB seeded successfully.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

