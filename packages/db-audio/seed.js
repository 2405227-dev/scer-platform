
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  await prisma.audioConfiguration.create({ data: { isActive: true } });
  await prisma.audioKeyword.createMany({
    data: [
      { keyword: "HELP" },
      { keyword: "FIRE" },
      { keyword: "EMERGENCY" },
      { keyword: "SHOOTER" }
    ]
  });
  await prisma.audioWebhook.create({
    data: { url: "http://localhost:3000/api/webhooks/audio" }
  });
  console.log("Audio DB seeded successfully.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

