/**
 * Migration helper to copy data from SQLite backups into MongoDB Atlas
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import Database from "better-sqlite3";
import { PrismaClient as ScerPrismaClient } from "../packages/db-scer/src/generated/client/index.js";

async function runMigration() {
  console.log("=== SCER SQLite to MongoDB Atlas Data Migration ===");
  
  const scerDbPath = path.resolve("packages/db-scer/prisma/dev.db.sqlite.backup");
  if (!fs.existsSync(scerDbPath)) {
    console.log("No SQLite backup found at:", scerDbPath);
    return;
  }

  const sqlite = new Database(scerDbPath, { readonly: true });
  const prisma = new ScerPrismaClient();

  try {
    console.log("1. Checking connection to MongoDB Atlas...");
    await prisma.$connect();
    console.log(" Connected to MongoDB Atlas successfully!");

    // Organizations
    const orgs = sqlite.prepare("SELECT * FROM Organization").all();
    console.log(`Found ${orgs.length} organizations in SQLite.`);
    for (const org of orgs) {
      await prisma.organization.upsert({
        where: { id: org.id },
        update: {},
        create: {
          name: org.name,
          type: org.type,
          createdAt: org.createdAt ? new Date(org.createdAt) : new Date(),
        },
      });
    }

    // Users
    const users = sqlite.prepare("SELECT * FROM User").all();
    console.log(`Found ${users.length} users in SQLite.`);
    const firstOrg = await prisma.organization.findFirst();
    for (const user of users) {
      const existing = await prisma.user.findUnique({ where: { email: user.email } });
      if (!existing && firstOrg) {
        await prisma.user.create({
          data: {
            organizationId: firstOrg.id,
            name: user.name,
            email: user.email,
            passwordHash: user.passwordHash || "",
            role: user.role || "USER",
            isRootController: Boolean(user.isRootController),
            isActive: user.isActive !== undefined ? Boolean(user.isActive) : true,
            isTempPassword: Boolean(user.isTempPassword),
            mustChangePassword: Boolean(user.mustChangePassword),
            phone: user.phone || null,
            department: user.department || null,
          },
        });
      }
    }

    // Responders
    const responders = sqlite.prepare("SELECT * FROM Responder").all();
    console.log(`Found ${responders.length} responders in SQLite.`);
    for (const r of responders) {
      const existing = await prisma.responder.findUnique({ where: { email: r.email } });
      if (!existing) {
        await prisma.responder.create({
          data: {
            name: r.name,
            email: r.email,
            status: r.status || "AVAILABLE",
            phone: r.phone || null,
            skills: r.skills || "[]",
            availability: r.availability !== undefined ? Boolean(r.availability) : true,
            telegramChatId: r.telegramChatId || null,
            telegramUsername: r.telegramUsername || null,
          },
        });
      }
    }

    // Resources
    const resources = sqlite.prepare("SELECT * FROM Resource").all();
    console.log(`Found ${resources.length} resources in SQLite.`);
    for (const res of resources) {
      await prisma.resource.create({
        data: {
          name: res.name,
          type: res.type,
        },
      });
    }

    console.log("✅ Data migration completed successfully!");
  } catch (err) {
    console.error("Migration error / connection issue:", err.message);
  } finally {
    sqlite.close();
    await prisma.$disconnect();
  }
}

runMigration().catch(console.error);
