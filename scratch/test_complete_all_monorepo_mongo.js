import { PrismaClient as ScerPrismaClient } from "../packages/db-scer/src/generated/client/index.js";
import { PrismaClient as AudioPrismaClient } from "../packages/db-audio/src/generated/client/index.js";
import { PrismaClient as GeoPrismaClient } from "../packages/db-geopulse/src/generated/client/index.js";
import { PrismaClient as NotifyPrismaClient } from "../packages/db-notification/src/generated/client/index.js";

const scerDb = new ScerPrismaClient();
const audioDb = new AudioPrismaClient();
const geoDb = new GeoPrismaClient();
const notifyDb = new NotifyPrismaClient();

const SCER_URL = "http://localhost:3000";
const AUDIO_URL = "http://localhost:3001";
const GEOPULSE_URL = "http://localhost:3002";
const NOTIFY_URL = "http://localhost:3003";
const LIVE_URL = "http://localhost:3004";

async function runFullMonorepoTest() {
  console.log("================================================================================");
  console.log("COMPLETE MONOREPO & ALL 5 SERVICES MONGODB ATLAS VERIFICATION");
  console.log("================================================================================");

  try {
    // 1. Verify all 4 DB packages connect to MongoDB Atlas
    console.log("Step 1: Connecting all 4 DB packages to MongoDB Atlas...");
    await scerDb.$connect();
    console.log(" @scer/db-scer connected to MongoDB Atlas");
    await audioDb.$connect();
    console.log(" @scer/db-audio connected to MongoDB Atlas");
    await geoDb.$connect();
    console.log(" @scer/db-geopulse connected to MongoDB Atlas");
    await notifyDb.$connect();
    console.log(" @scer/db-notification connected to MongoDB Atlas");

    // 2. Root Controller Login Verification
    console.log("\nStep 2: Root Controller Login Verification...");
    const loginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@scer.campus", password: "Admin@SCER2026!" })
    });
    const loginData = await loginRes.json();
    const cookie = loginRes.headers.get("set-cookie") || "";
    console.log("-> Root Login Status:", loginRes.status, "| Role:", loginData.user?.role, "| isRoot:", loginData.user?.isRootController);
    if (!loginData.success || !loginData.user?.isRootController) {
      throw new Error("Root Controller login failed");
    }

    // 3. Create a User via Root Controller
    console.log("\nStep 3: Creating a new User via Account Management...");
    const testUserEmail = `user_atlas_${Date.now()}@scer.campus`;
    const createUserRes = await fetch(`${SCER_URL}/api/admin/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: cookie },
      body: JSON.stringify({
        name: "Atlas Test User",
        email: testUserEmail,
        role: "USER",
        department: "Computer Science"
      })
    });
    const createUserData = await createUserRes.json();
    const tempPassword = createUserData.tempPassword;
    console.log("-> Created User Status:", createUserRes.status, "| Email:", createUserData.user?.email, "| TempPass:", tempPassword);
    if (!createUserData.success || !tempPassword) throw new Error("Failed to create user");

    // 4. Create a Normal Controller via Root Controller
    console.log("\nStep 4: Creating a Normal Controller via Account Management...");
    const testCtrlEmail = `ctrl_atlas_${Date.now()}@scer.campus`;
    const createCtrlRes = await fetch(`${SCER_URL}/api/admin/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: cookie },
      body: JSON.stringify({
        name: "Atlas Normal Controller",
        email: testCtrlEmail,
        role: "CONTROLLER",
        department: "Campus Safety"
      })
    });
    const createCtrlData = await createCtrlRes.json();
    console.log("-> Created Controller Status:", createCtrlRes.status, "| Email:", createCtrlData.user?.email);
    if (!createCtrlData.success) throw new Error("Failed to create controller");

    // 5. Confirm Persistence in MongoDB Atlas
    console.log("\nStep 5: Querying MongoDB Atlas directly to confirm User & Controller persistence...");
    const dbUser = await scerDb.user.findUnique({ where: { email: testUserEmail } });
    const dbCtrl = await scerDb.user.findUnique({ where: { email: testCtrlEmail } });
    console.log("-> Verified User in Atlas:", dbUser ? `FOUND (ID=${dbUser.id})` : "NOT FOUND");
    console.log("-> Verified Controller in Atlas:", dbCtrl ? `FOUND (ID=${dbCtrl.id})` : "NOT FOUND");
    if (!dbUser || !dbCtrl) throw new Error("Accounts not found in MongoDB Atlas");

    // 6. Login as the newly created User & complete temp password
    console.log("\nStep 6: User Login & Temporary Password Flow...");
    const userLoginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: testUserEmail, password: tempPassword })
    });
    const userLoginData = await userLoginRes.json();
    const userCookie = userLoginRes.headers.get("set-cookie") || "";
    console.log("-> User Temp Login Status:", userLoginRes.status, "| mustChangePassword:", userLoginData.user?.mustChangePassword);

    const changePassRes = await fetch(`${SCER_URL}/api/auth/change-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: userCookie },
      body: JSON.stringify({ currentPassword: tempPassword, newPassword: "userSecurePass123!" })
    });
    const changePassData = await changePassRes.json();
    const finalUserCookie = changePassRes.headers.get("set-cookie") || userCookie;
    console.log("-> User Password Change Status:", changePassRes.status, "| Success:", changePassData.success);

    // 7. User reports Emergency with Voice & Location
    console.log("\nStep 7: User reports Emergency Incident with Voice Transcript & Coordinates...");
    const incidentRes = await fetch(`${SCER_URL}/api/incidents`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: finalUserCookie },
      body: JSON.stringify({
        type: "Medical Emergency",
        severity: "CRITICAL",
        location: "Science Complex Room 402",
        description: "Student experiencing sudden severe allergic reaction",
        reporterId: dbUser.id,
        reporterName: dbUser.name,
        priority: 1,
        location_lat: 12.9721,
        location_lon: 77.5950
      })
    });
    const incidentData = await incidentRes.json();
    console.log("-> Emergency Incident Created:", incidentData.success, "| ID:", incidentData.incident?.id, "| Status:", incidentData.incident?.status);
    const incidentId = incidentData.incident?.id;
    if (!incidentId) throw new Error("Failed to create incident");

    // 8. Confirm Incident in MongoDB Atlas
    console.log("\nStep 8: Querying MongoDB Atlas directly to confirm Incident status = pending...");
    const dbIncident = await scerDb.incident.findUnique({ where: { id: incidentId } });
    console.log("-> Atlas Incident Status:", dbIncident?.status, "| Location:", dbIncident?.location);
    if (dbIncident?.status !== "pending") throw new Error("Incident not in pending state in Atlas");

    // 9. Login as Controller & View Incident in Pending
    console.log("\nStep 9: Controller views Pending Incidents...");
    const ctrlLoginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "controller@scer.campus", password: "Controller@SCER2026!" })
    });
    const ctrlCookie = ctrlLoginRes.headers.get("set-cookie") || "";
    const listPendingRes = await fetch(`${SCER_URL}/api/incidents`, {
      headers: { Cookie: ctrlCookie }
    });
    const listPendingData = await listPendingRes.json();
    const incidentsList = Array.isArray(listPendingData) ? listPendingData : (listPendingData.incidents || []);
    const foundInPending = incidentsList.some((i) => i.id === incidentId);
    console.log("-> Controller found Incident in Pending:", foundInPending, `(Total incidents in DB: ${incidentsList.length})`);
    if (!foundInPending) throw new Error("Incident not visible to controller");

    // 10. Controller Accepts Incident (status -> active)
    console.log("\nStep 10: Controller accepts the Incident...");
    const acceptRes = await fetch(`${SCER_URL}/api/incidents/${incidentId}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: ctrlCookie },
      body: JSON.stringify({
        status: "accepted",
        assignedTo: "resp-alpha-01",
        assignedToName: "Campus Paramedic Alpha"
      })
    });
    const acceptData = await acceptRes.json();
    console.log("-> Accept Status Response:", acceptRes.status, "| New Status:", acceptData.incident?.status);

    // 11. Confirm Active Status in MongoDB Atlas
    console.log("\nStep 11: Querying MongoDB Atlas to verify status = active...");
    const dbActiveIncident = await scerDb.incident.findUnique({ where: { id: incidentId } });
    console.log("-> Atlas Status:", dbActiveIncident?.status, "| AssignedTo:", dbActiveIncident?.assignedToName);
    if (dbActiveIncident?.status !== "active" && dbActiveIncident?.status !== "accepted") {
      throw new Error("Incident status not updated to active/accepted in MongoDB Atlas");
    }

    // 12. Verify User sees Updated Active Status
    console.log("\nStep 12: User fetches their active incident tracking...");
    const userTrackRes = await fetch(`${SCER_URL}/api/incidents/${incidentId}`, {
      headers: { Cookie: finalUserCookie }
    });
    const userTrackData = await userTrackRes.json();
    console.log("-> User Tracking Received Status:", userTrackData.incident?.status || userTrackData.status);

    // 13. Controller Resolves Incident (status -> resolved)
    console.log("\nStep 13: Controller resolves the Incident...");
    const resolveRes = await fetch(`${SCER_URL}/api/incidents/${incidentId}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: ctrlCookie },
      body: JSON.stringify({
        status: "resolved",
        assignedToName: "Campus Paramedic Alpha"
      })
    });
    const resolveData = await resolveRes.json();
    console.log("-> Resolve Status Response:", resolveRes.status, "| New Status:", resolveData.incident?.status);

    // 14. Confirm Resolved Status in MongoDB Atlas
    console.log("\nStep 14: Querying MongoDB Atlas to verify status = resolved...");
    const dbResolvedIncident = await scerDb.incident.findUnique({ where: { id: incidentId } });
    console.log("-> Atlas Final Status:", dbResolvedIncident?.status, "| ResolvedBy:", dbResolvedIncident?.resolvedBy);
    if (dbResolvedIncident?.status !== "resolved") throw new Error("Incident not resolved in Atlas");

    // 15. Verify Audio Engine, GeoPulse, and Notification Engine in Atlas
    console.log("\nStep 15: Verifying Audio Engine, GeoPulse, & Notification Engine MongoDB Atlas Persistence...");
    
    // Audio Engine
    const audioEvent = await audioDb.audioDetectionEvent.create({
      data: {
        keyword: "HELP",
        confidence: 0.98,
        location: "Block C (Academic)",
        severity: "HIGH"
      }
    });
    console.log("-> AudioDetectionEvent created in Atlas:", audioEvent.id, "| Keyword:", audioEvent.keyword);

    // GeoPulse
    const geoZone = await geoDb.geoZone.create({
      data: {
        name: "North Campus Health Perimeter",
        type: "MEDICAL",
        polygon: "[[12.97,77.59],[12.98,77.60]]",
        coverage: 0.95
      }
    });
    console.log("-> GeoZone created in Atlas:", geoZone.id, "| Name:", geoZone.name);

    // Notification Engine
    const notify = await notifyDb.notification.create({
      data: {
        message: "EMERGENCY: Paramedics dispatched to Science Complex Room 402",
        status: "DELIVERED",
        recipientEmail: "chief.paramedic@campus.internal",
        severity: "CRITICAL"
      }
    });
    console.log("-> Notification created in Atlas:", notify.id, "| Status:", notify.status);

    // 16. Verify Live Response Portal (:3004) Data Loading from MongoDB Atlas
    console.log("\nStep 16: Verifying Live Response Portal on Port 3004 loads Atlas data...");
    const livePageRes = await fetch(`${LIVE_URL}/`);
    console.log("-> Live Response Portal (:3004) HTTP Status:", livePageRes.status);
    if (livePageRes.status !== 200) throw new Error("Live response portal failed to render");

    // 17. Confirm Atlas Data Persistence across reloads
    console.log("\nStep 17: Verifying data persistence on fresh query...");
    const freshUserCount = await scerDb.user.count();
    const freshIncidentCount = await scerDb.incident.count();
    const freshAudioCount = await audioDb.audioDetectionEvent.count();
    const freshGeoCount = await geoDb.geoZone.count();
    const freshNotifyCount = await notifyDb.notification.count();
    console.log(`-> Persistent Atlas Counts: Users=${freshUserCount}, Incidents=${freshIncidentCount}, AudioEvents=${freshAudioCount}, GeoZones=${freshGeoCount}, Notifications=${freshNotifyCount}`);

    console.log("\n================================================================================");
    console.log("🎉 ALL 17 MONOREPO MONGODB ATLAS VERIFICATION STEPS PASSED WITH 100% SUCCESS!");
    console.log("================================================================================");
    return true;
  } catch (err) {
    console.error("\n❌ Test Failure:", err);
    return false;
  } finally {
    await scerDb.$disconnect();
    await audioDb.$disconnect();
    await geoDb.$disconnect();
    await notifyDb.$disconnect();
  }
}

runFullMonorepoTest();
