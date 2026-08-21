const { PrismaClient } = require("@scer/db-scer");
const prisma = new PrismaClient();
prisma.user.findMany().then(console.log).finally(() => prisma.$disconnect());
