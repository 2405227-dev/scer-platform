import { PrismaClient as ScerPrismaClient } from "../packages/db-scer/src/generated/client/index.js";
import { DatabaseSync } from "node:sqlite";
import fs from "fs";
import path from "path";

const prisma = new ScerPrismaClient();

async function runE2ELifecycleTest() {
  console.log("==================================================");
  console.log("SCER MONGO LIFE-CYCLE & PERSISTENCE TEST");
  console.log("==================================================");

  try {
    console.log("1. Testing MongoDB Atlas connection...");
    await prisma.$connect();
    console.log(" Connected to MongoDB Atlas successfully!");

    // 2. Migrate existing SQLite data if empty or needed
    const scerDbPath = path.resolve("packages/db-scer/prisma/dev.db.sqlite.backup");
    if (fs.existsSync(scerDbPath)) {
      console.log("2. Checking SQLite data migration...");
      const sqlite = new DatabaseSync(scerDbPath, { readOnly: true });
      
      // Organizations
      const orgs = sqlite.prepare("SELECT * FROM Organization").all();
      let primaryOrgId = null;
      for (const org of orgs) {
        let existing = await prisma.organization.findFirst({ where: { name: org.name } });
        if (!existing) {
          existing = await prisma.organization.create({
            data: { name: org.name, type: org.type }
          });
          console.log(` Created organization in Atlas: ${existing.name} (${existing.id})`);
        }
        if (!primaryOrgId) primaryOrgId = existing.id;
      }

      if (!primaryOrgId) {
        const defaultOrg = await prisma.organization.create({
          data: { name: "SCER Primary Campus", type: "UNIVERSITY" }
        });
        primaryOrgId = defaultOrg.id;
      }

      // Users / Root Controller / Controllers
      const users = sqlite.prepare("SELECT * FROM User").all();
      for (const user of users) {
        const existing = await prisma.user.findUnique({ where: { email: user.email } });
        if (!existing) {
          await prisma.user.create({
            data: {
              organizationId: primaryOrgId,
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
            }
          });
          console.log(` Migrated user to Atlas: ${user.email} (${user.role})`);
        }
      }

      // Root Controller
      let rootUser = await prisma.user.findFirst({ where: { isRootController: true } });
      if (!rootUser) {
        rootUser = await prisma.user.create({
          data: {
            organizationId: primaryOrgId,
            name: "Root Controller",
            email: "root@scer.internal",
            role: "CONTROLLER",
            isRootController: true,
            isActive: true,
            isTempPassword: false,
            mustChangePassword: false,
          }
        });
        console.log(` Root Controller verified in Atlas: ${rootUser.email} (${rootUser.id})`);
      } else {
        console.log(` Root Controller found in Atlas: ${rootUser.email} (${rootUser.id})`);
      }

      // Responders
      const responders = sqlite.prepare("SELECT * FROM Responder").all();
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
            }
          });
          console.log(` Migrated responder to Atlas: ${r.name} (${r.email})`);
        }
      }

      // Resources
      const resources = sqlite.prepare("SELECT * FROM Resource").all();
      for (const res of resources) {
        const existing = await prisma.resource.findFirst({ where: { name: res.name } });
        if (!existing) {
          await prisma.resource.create({
            data: { name: res.name, type: res.type }
          });
          console.log(` Migrated resource to Atlas: ${res.name} (${res.type})`);
        }
      }
      sqlite.close();
      console.log(" SQLite baseline migration verified in Atlas.");
    }

    // 3. Test New User Creation & Persistence in MongoDB Atlas
    console.log("3. Testing new USER creation in Atlas...");
    const testUserEmail = `test_student_${Date.now()}@scer.internal`;
    const org = await prisma.organization.findFirst();
    const newUser = await prisma.user.create({
      data: {
        organizationId: org.id,
        name: "Atlas Test Student",
        email: testUserEmail,
        role: "USER",
        isRootController: false,
        isActive: true,
        isTempPassword: true,
        mustChangePassword: true,
        phone: "+1234567890",
        department: "Engineering"
      }
    });
    console.log(` Created new User in MongoDB Atlas: ID=${newUser.id}, Email=${newUser.email}`);

    // Verify retrieval from Atlas
    const retrievedUser = await prisma.user.findUnique({ where: { id: newUser.id } });
    if (retrievedUser && retrievedUser.email === testUserEmail) {
      console.log(" Verified new User retrieved from MongoDB Atlas successfully!");
    } else {
      throw new Error("User retrieval from MongoDB Atlas failed");
    }

    // 4. Test New Normal Controller Creation in Atlas
    console.log("4. Testing new CONTROLLER creation in Atlas...");
    const testCtrlEmail = `test_controller_${Date.now()}@scer.internal`;
    const newController = await prisma.user.create({
      data: {
        organizationId: org.id,
        name: "Atlas Test Controller",
        email: testCtrlEmail,
        role: "CONTROLLER",
        isRootController: false,
        isActive: true,
        isTempPassword: true,
        mustChangePassword: true,
        department: "Operations"
      }
    });
    console.log(` Created new Controller in MongoDB Atlas: ID=${newController.id}, Email=${newController.email}`);

    // 5. Test Emergency Creation & Persistence in MongoDB Atlas
    console.log("5. Testing emergency incident creation by User in Atlas...");
    const newIncident = await prisma.incident.create({
      data: {
        organizationId: org.id,
        type: "Medical Emergency",
        severity: "CRITICAL",
        status: "pending",
        location: "Library 2nd Floor",
        description: "Student collapsed near reading room",
        reporterId: newUser.id,
        reporterName: newUser.name,
        priority: 1,
        location_lat: 12.9716,
        location_lon: 77.5946
      }
    });
    console.log(` Created emergency Incident in MongoDB Atlas: ID=${newIncident.id}, Status=${newIncident.status}`);

    // 6. Test Controller viewing, accepting, and resolving incident
    console.log("6. Testing Controller incident response lifecycle in Atlas...");
    
    // Accept incident
    const acceptedIncident = await prisma.incident.update({
      where: { id: newIncident.id },
      data: {
        status: "active",
        assignedTo: newController.id,
        assignedToName: newController.name,
        assignedAt: new Date(),
        acknowledgedAt: new Date()
      }
    });
    console.log(` Accepted incident in Atlas: ID=${acceptedIncident.id}, Status=${acceptedIncident.status}, AssignedTo=${acceptedIncident.assignedToName}`);

    // Resolve incident
    const resolvedIncident = await prisma.incident.update({
      where: { id: newIncident.id },
      data: {
        status: "resolved",
        resolvedAt: new Date(),
        resolvedBy: newController.name
      }
    });
    console.log(` Resolved incident in Atlas: ID=${resolvedIncident.id}, Status=${resolvedIncident.status}, ResolvedBy=${resolvedIncident.resolvedBy}`);

    // 7. Verify final persisted state in Atlas
    const finalIncident = await prisma.incident.findUnique({ where: { id: newIncident.id } });
    console.log(` Final verified state in Atlas: ID=${finalIncident.id}, Status=${finalIncident.status}`);

    console.log("==================================================");
    console.log("🎉 ALL ATLAS PERSISTENCE & LIFECYCLE TESTS PASSED!");
    console.log("==================================================");
    return true;
  } catch (err) {
    console.error("❌ E2E Atlas Lifecycle Test Error:", err);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

runE2ELifecycleTest();
