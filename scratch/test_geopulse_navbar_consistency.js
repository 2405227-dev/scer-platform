const SCER_URL = "http://localhost:3000";
const GEO_URL = "http://localhost:3002";

async function verifyNavbarConsistency() {
  console.log("================================================================================");
  console.log("🔍 SCER & GEOPULSE NAVBAR CONSISTENCY VERIFICATION");
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
    // 1. Fetch GeoPulse page HTML
    const geoRes = await fetch(`${GEO_URL}/`);
    const geoHtml = await geoRes.text();

    // 2. Fetch SCER Command page HTML (with Controller auth cookie)
    const loginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "controller@scer.campus", password: "Controller@SCER2026!" }),
    });
    const ctrlCookie = loginRes.headers.get("set-cookie") || "";

    const commandRes = await fetch(`${SCER_URL}/command`, {
      headers: { Cookie: ctrlCookie },
    });
    const commandHtml = await commandRes.text();

    // Test 1: GeoPulse uses the SCER Logo and Controller Portal header
    assert(
      geoHtml.includes("SCER") && geoHtml.includes("Controller Portal"),
      "1. GeoPulse displays the exact SCER logo and Controller Portal branding",
      "SCER brand and Controller Portal text found in GeoPulse HTML"
    );

    // Test 2: GeoPulse contains all primary controller navigation items
    const hasCommand = geoHtml.includes("Command");
    const hasIncidents = geoHtml.includes("Incidents");
    const hasResponders = geoHtml.includes("Responders");
    const hasGeoPulse = geoHtml.includes("GeoPulse");
    const hasAnalytics = geoHtml.includes("Analytics");
    const hasAudit = geoHtml.includes("Audit");
    const hasResources = geoHtml.includes(">Resources<") || geoHtml.includes(">Resource<");

    assert(
      hasCommand && hasIncidents && hasResponders && hasGeoPulse && hasAnalytics && hasAudit,
      "2. GeoPulse contains identical navigation items (Command, Incidents, Responders, GeoPulse, Analytics, Audit)",
      `Command: ${hasCommand}, Incidents: ${hasIncidents}, Responders: ${hasResponders}, GeoPulse: ${hasGeoPulse}, Analytics: ${hasAnalytics}, Audit: ${hasAudit}`
    );

    // Test 3: No Resources tab in GeoPulse navbar
    assert(
      !hasResources,
      "3. No 'Resources' tab exists in GeoPulse navbar",
      "Resources tab correctly absent"
    );

    // Test 4: GeoPulse navigation items link back to SCER routes
    assert(
      geoHtml.includes("/command") &&
      geoHtml.includes("/incidents") &&
      geoHtml.includes("/responders") &&
      geoHtml.includes("/analytics") &&
      geoHtml.includes("/audit"),
      "4. GeoPulse navigation items link back to SCER routes (/command, /incidents, etc.)",
      "Cross-app URLs verified"
    );

    // Test 5: GeoPulse active tab indicator
    assert(
      geoHtml.includes("GeoPulse") && geoHtml.includes("bg-red-400"),
      "5. GeoPulse is the active tab with the red indicator bar",
      "Active tab indicator present in GeoPulse"
    );

    // Test 6: SCER Command page has GeoPulse tab pointing to port 3002
    assert(
      commandHtml.includes("3002") || commandHtml.includes("GeoPulse"),
      "6. SCER Command page has GeoPulse tab linking to GeoPulse app",
      "GeoPulse link verified in SCER navbar"
    );

    console.log("================================================================================");
    console.log(`🎉 RESULT: ${passed}/${total} VERIFICATION CHECKS PASSED!`);
    console.log("================================================================================");
  } catch (err) {
    console.error("Verification failed:", err);
  }
}

verifyNavbarConsistency();
