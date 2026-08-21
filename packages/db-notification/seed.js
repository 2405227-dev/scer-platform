
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  await prisma.notificationRule.createMany({
    data: [
      { condition: "Severity = Critical", action: "Notify Primary Responder" },
      { condition: "No acknowledgement > 60s", action: "Escalate to Supervisor" }
    ]
  });

  await prisma.escalationPolicy.create({
    data: { name: "Default Campus Escalation" }
  });

  console.log("Notification DB seeded successfully.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

