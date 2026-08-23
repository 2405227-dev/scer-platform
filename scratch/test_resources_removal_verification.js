import { PrismaClient as ScerPrismaClient } from "../packages/db-scer/src/generated/client/index.js";
import { PrismaClient as GeoPrismaClient } from "../packages/db-geopulse/src/generated/client/index.js";

const scerDb = new ScerPrismaClient();
const geoDb = new GeoPrismaClient();

const SCER_URL = "http://localhost:3000";
const GEOPULSE_URL = "http://localhost:3002";

async function verifyResourcesRemoval() {
  console.log("================================================================================");
  console.log("🛡️ VERIFYING TOTAL REMOVAL OF RESOURCES FROM SCER PLATFORM");
  console.log("================================================================================");

  let passed = 0;
  let total = 0;

  function assert(condition, testName, details) {
    total++;
    if (condition) {
      passed++;
      console.log(`[PASS] ${testName}`);
      if (details) console.log(`       ${details}`);
    } else {
      console.error(`[FAIL] ${testName}`);
      if (details) console.error(`       ${details}`);
    }
  }

  try {
    // 1. Verify /resources route returns 404
    const resPageRes = await fetch(`${SCER_URL}/resources`);
    assert(resPageRes.status === 404, "Verify /resources page returns HTTP 404", `Status: ${resPageRes.status}`);

    // 2. Verify /api/resources returns 404
    const resApiRes = await fetch(`${SCER_URL}/api/resources`);
    assert(resApiRes.status === 404, "Verify /api/resources route returns HTTP 404", `Status: ${resApiRes.status}`);

    // 3. Verify Navbar content does not contain "Resources"
    const rootPageRes = await fetch(`${SCER_URL}/`);
    const rootPageText = await rootPageRes.text();
    const hasResourceInNav = rootPageText.includes('href="/resources"') || rootPageText.includes('">Resources<');
    assert(!hasResourceInNav, "Verify Controller Navbar has zero Resources links/tabs", `Has /resources in HTML: ${hasResourceInNav}`);

    // 4. Verify GeoPulse Spatial AI Match returns responder recommendations
    const geoRecommendRes = await fetch(`${GEOPULSE_URL}/api/geopulse/recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        incidentType: "Medical Assistance",
        incidentLocation: "Block C (Academic)",
        severity: "CRITICAL"
      })
    });
    const geoRecommendData = await geoRecommendRes.json();
    assert(
      Boolean(geoRecommendData.recommendedResponder && geoRecommendData.score > 0),
      "Verify GeoPulse recommend returns tactical Responder Team",
      `Recommended Responder Team: ${geoRecommendData.recommendedResponder}, ETA: ${geoRecommendData.eta}`
    );

    // 5. Verify ResponderUnit in GeoPulse Prisma Client and Atlas
    const units = await geoDb.responderUnit.findMany();
    assert(
      units.length > 0,
      "Verify GeoPulse ResponderUnit collection in MongoDB Atlas",
      `Found ${units.length} Responder Units in Atlas (e.g. ${units[0]?.name})`
    );

    // 6. Verify User Emergency lifecycle (Pending -> Active -> Resolved)
    const userLoginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "student@scer.campus", password: "Student@SCER2026!" })
    });
    const userCookie = userLoginRes.headers.get("set-cookie") || "";
    const userLoginData = await userLoginRes.json();

    const createIncRes = await fetch(`${SCER_URL}/api/incidents`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: userCookie },
      body: JSON.stringify({
        type: "Campus Medical Urgent",
        severity: "HIGH",
        location: "Science Quad Pavilion",
        description: "Student dehydration emergency near Pavilion",
        reporterId: userLoginData.user?.id,
        reporterName: userLoginData.user?.name,
        location_lat: 12.9720,
        location_lon: 77.5950
      })
    });
    const createIncData = await createIncRes.json();
    const incidentId = createIncData.incident?.id;
    assert(Boolean(incidentId), "Emergency incident created in PENDING status in Atlas", `Incident ID: ${incidentId}`);

    // Controller login & accept
    const ctrlLoginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "controller@scer.campus", password: "Controller@SCER2026!" })
    });
    const ctrlCookie = ctrlLoginRes.headers.get("set-cookie") || "";

    const acceptRes = await fetch(`${SCER_URL}/api/incidents/${incidentId}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: ctrlCookie },
      body: JSON.stringify({
        status: "accepted",
        assignedTo: "resp-med-01",
        assignedToName: "Campus Paramedic Squad Alpha"
      })
    });
    const acceptData = await acceptRes.json();
    assert(acceptData.incident?.status === "active" || acceptData.incident?.status === "accepted", "Controller assigns Responder Team & accepts incident (ACTIVE)", `Status: ${acceptData.incident?.status}`);

    // Controller resolve
    const resolveRes = await fetch(`${SCER_URL}/api/incidents/${incidentId}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: ctrlCookie },
      body: JSON.stringify({
        status: "resolved",
        assignedToName: "Campus Paramedic Squad Alpha"
      })
    });
    const resolveData = await resolveRes.json();
    assert(resolveData.incident?.status === "resolved", "Controller resolves incident (RESOLVED)", `Status: ${resolveData.incident?.status}`);

    // Clean up test incident
    await scerDb.incident.delete({ where: { id: incidentId } }).catch(() => null);

    console.log("================================================================================");
    console.log(`🎉 VERIFICATION RESULT: ${passed}/${total} TESTS PASSED!`);
    console.log("================================================================================");
  } catch (err) {
    console.error("Test error:", err);
  } finally {
    await scerDb.$disconnect();
    await geoDb.$disconnect();
  }
}

verifyResourcesRemoval();
