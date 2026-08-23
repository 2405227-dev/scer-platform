import { PrismaClient } from "../packages/db-scer/src/generated/client/index.js";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Connecting to MongoDB Atlas via Prisma Client...");
    await prisma.$connect();
    console.log("SUCCESS: Prisma Client connected to MongoDB Atlas!");
    
    const count = await prisma.user.count();
    console.log("Current User count in Atlas:", count);
  } catch (err) {
    console.error("Prisma Client connection error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
