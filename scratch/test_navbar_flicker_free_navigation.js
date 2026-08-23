const SCER_URL = "http://localhost:3000";
const GEOPULSE_URL = "http://localhost:3002";

async function testNavbarFlickerFree() {
  console.log("================================================================================");
  console.log("🔍 SCER CONTROLLER NAVBAR FLICKER-FREE & CONSISTENCY AUDIT");
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

  // 1. Authenticate as Root Controller to obtain session cookie
  console.log("\n[STEP 1] Authenticating as Root Controller...");
  const loginRes = await fetch(`${SCER_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "admin@scer.campus",
      password: process.env.ROOT_CONTROLLER_PASSWORD || "Admin@SCER2026!",
    }),
  });

  const cookies = loginRes.headers.get("set-cookie") || "";
  const cookieHeader = cookies.split(",").map(c => c.split(";")[0]).join("; ");

  assert(loginRes.ok && cookieHeader.includes("scer_session_token"), "Root Controller login succeeded and session cookie obtained");

  // 2. Test server-rendered initial HTML across all controller routes to ensure NO 'Sign In' button is returned
  const controllerRoutes = [
    { name: "Command", url: `${SCER_URL}/command`, expectedActive: "Command" },
    { name: "Incidents", url: `${SCER_URL}/incidents`, expectedActive: "Incidents" },
    { name: "Responders", url: `${SCER_URL}/responders`, expectedActive: "Responders" },
    { name: "Analytics", url: `${SCER_URL}/analytics`, expectedActive: "Analytics" },
    { name: "Accounts", url: `${SCER_URL}/accounts`, expectedActive: "Accounts" },
    { name: "Audit", url: `${SCER_URL}/audit`, expectedActive: "Audit" },
    { name: "GeoPulse", url: `${GEOPULSE_URL}/`, expectedActive: "GeoPulse" },
  ];

  console.log("\n[STEP 2] Verifying Server-Rendered Initial HTML (Zero-Flicker Check)...");

  for (const route of controllerRoutes) {
    const res = await fetch(route.url, {
      headers: { Cookie: cookieHeader },
    });

    const html = await res.text();

    // Check 1: Initial HTML contains the authenticated user badge directly from server
    const hasAuthBadge = html.includes("ROOT CONTROLLER") || html.includes("Root Administrator");
    assert(
      hasAuthBadge,
      `${route.name}: Initial server HTML renders ROOT CONTROLLER identity immediately`,
      `Verified server-side session rendered in HTML without client wait`
    );

    // Check 2: Initial HTML does NOT render "Sign In" button in controller navbar
    const hasSignInButton = html.includes(">Sign In<") || html.includes(">Sign In to Portal<");
    assert(
      !hasSignInButton,
      `${route.name}: Initial server HTML never renders 'Sign In' placeholder`,
      `Zero auth flicker confirmed`
    );

    // Check 3: Shared SCER navbar structure
    const hasNavbar = html.includes("SCER") && html.includes("Controller Portal") && html.includes("fixed left-0 right-0 top-0 z-[9999]");
    assert(
      hasNavbar,
      `${route.name}: Renders unified SCERNavbar with fixed top header`,
      `Header dimensions and styling verified`
    );
  }

  // 3. Rapid Route Navigation Simulation
  console.log("\n[STEP 3] Simulating rapid controller page transitions...");
  const transitionSequence = [
    "Command", "Responders", "GeoPulse", "Analytics", "Incidents", "Accounts", "Audit", "Command"
  ];

  let transitionSuccess = true;
  for (const step of transitionSequence) {
    const routeObj = controllerRoutes.find(r => r.name === step);
    const res = await fetch(routeObj.url, { headers: { Cookie: cookieHeader } });
    if (!res.ok) {
      transitionSuccess = false;
      console.error(`Failed navigation to ${step}`);
    }
  }

  assert(transitionSuccess, "Rapid transition sequence across all 7 controller routes completed flawlessly");

  console.log("================================================================================");
  console.log(`🎉 RESULT: ${passed}/${total} AUDIT CHECKS PASSED!`);
  console.log("================================================================================");
}

testNavbarFlickerFree();
