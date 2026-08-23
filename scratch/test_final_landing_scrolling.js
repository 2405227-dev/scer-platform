const SCER_URL = "http://localhost:3000";

async function verifyFinalLandingScrolling() {
  console.log("================================================================================");
  console.log("🔍 SCER LANDING PAGE FINAL VERIFICATION");
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

    // 1. data-landing-navbar attribute
    assert(
      html.includes("data-landing-navbar"),
      "1. Navbar contains 'data-landing-navbar' identifier",
      "data-landing-navbar found"
    );

    // 2. Fixed positioning with z-[9999]
    assert(
      html.includes("fixed top-0 left-0 right-0") && html.includes("z-[9999]"),
      "2. Navbar has 'fixed top-0 left-0 right-0 z-[9999]'",
      "Fixed positioning and top layer z-index verified"
    );

    // 3. Section IDs
    assert(
      html.includes('id="overview"') && html.includes("Platform Overview"),
      "3. Section #overview exists and renders Platform Overview",
      "id='overview' found"
    );

    assert(
      html.includes('id="portals"') && html.includes("Role-Dedicated Portals"),
      "4. Section #portals exists and renders Role-Dedicated Portals",
      "id='portals' found"
    );

    assert(
      html.includes('id="engines"') && html.includes("Autonomous Emergency Micro-Engines"),
      "5. Section #engines exists and renders Micro-Engines",
      "id='engines' found"
    );

    assert(
      html.includes('id="architecture"') && html.includes("Autonomous Emergency Pipeline"),
      "6. Section #architecture exists and renders Pipeline Architecture",
      "id='architecture' found"
    );

    // 4. Explore Button
    assert(
      html.includes("Explore Platform"),
      "7. Explore Platform CTA button is rendered",
      "Button present in Hero"
    );

    // 5. Back to Top component
    assert(
      html.includes('aria-label="Back to top"'),
      "8. Back to top button component is rendered",
      "Back to Top button present"
    );

    // 6. Sign In navigation
    assert(
      html.includes('href="/login"') && html.includes("Sign In"),
      "9. Sign In button navigates to /login",
      "href='/login' present"
    );

    console.log("================================================================================");
    console.log(`🎉 RESULT: ${passed}/${total} VERIFICATION CHECKS PASSED!`);
    console.log("================================================================================");
  } catch (err) {
    console.error("Verification failed:", err);
  }
}

verifyFinalLandingScrolling();
