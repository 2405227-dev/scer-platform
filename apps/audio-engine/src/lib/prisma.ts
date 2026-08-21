import { PrismaClient } from "@scer/db-audio";

const globalForPrisma = globalThis as unknown as {
  prismaAudio: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prismaAudio ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prismaAudio = prisma;
}
