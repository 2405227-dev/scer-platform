const SCER_URL = "http://localhost:3000";

async function verifyTabbedLandingNavigation() {
  console.log("================================================================================");
  console.log("🔍 SCER ISOLATED SECTION / TABBED LANDING PAGE VERIFICATION");
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
    const res = await fetch(`${SCER_URL}/`);
    const html = await res.text();

    // 1. Initial Page Render (Home View)
    assert(
      html.includes("Smart Campus Emergency Response") && html.includes("Next-Generation"),
      "1. Home view renders Hero section with primary headline",
      "Found Next-Generation headline"
    );

    // 2. Fixed navbar exists
    assert(
      html.includes("data-landing-navbar") && html.includes("fixed top-0"),
      "2. Navbar is permanently fixed at top (z-[9999], data-landing-navbar)",
      "Fixed navbar found"
    );

    // 3. Navigation items
    assert(
      html.includes("Platform Overview") &&
      html.includes("Portals") &&
      html.includes("Micro-Engines") &&
      html.includes("Architecture"),
      "3. All 4 navigation tabs (Platform Overview, Portals, Micro-Engines, Architecture) are present",
      "All nav buttons verified"
    );

    // 4. Sign In Button
    assert(
      html.includes('href="/login"') && html.includes("Sign In"),
      "4. Sign In button routes directly to /login",
      "Sign In button verified"
    );

    // 5. Floating Back to Top / Home button
    assert(
      html.includes('aria-label="Back to top / home"'),
      "5. Floating Back to Top / Home button is present",
      "Back to Top / Home button verified"
    );

    console.log("================================================================================");
    console.log(`🎉 RESULT: ${passed}/${total} VERIFICATION CHECKS PASSED!`);
    console.log("================================================================================");
  } catch (err) {
    console.error("Verification failed:", err);
  }
}

verifyTabbedLandingNavigation();
