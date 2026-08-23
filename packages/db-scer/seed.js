
const { PrismaClient } = require("./src/generated/client");
const prisma = new PrismaClient();
async function main() {
  const org = await prisma.organization.create({ data: { name: "Acme University", type: "Campus" } });
  await prisma.user.create({ data: { organizationId: org.id, name: "Admin User", email: "admin@acme.edu", role: "ADMIN" } });
  await prisma.incident.createMany({
    data: [
      { organizationId: org.id, type: "Medical Assistance", severity: "CRITICAL", status: "IN_PROGRESS", location: "Block C", description: "Student fainted" },
      { organizationId: org.id, type: "Suspicious Activity", severity: "MEDIUM", status: "REPORTED", location: "North Gate", description: "Unauthorized vehicle" }
    ]
  });
  console.log("Database seeded successfully.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

