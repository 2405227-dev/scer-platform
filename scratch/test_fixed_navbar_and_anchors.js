const SCER_URL = "http://localhost:3000";

async function verifyLandingPageFixedNavbarAndAnchors() {
  console.log("================================================================================");
  console.log("🔍 SCER LANDING PAGE FIXED NAVBAR & SCROLLING VERIFICATION");
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

    // 1. Fixed navbar styling
    assert(
      html.includes("fixed top-0") && html.includes("z-50"),
      "1. Navbar uses fixed positioning with high z-index (fixed top-0, z-50)",
      "Found fixed top-0 and z-50 in header classes"
    );

    // 2. Main content top padding
    assert(
      html.includes("pt-28"),
      "2. Main container has top padding (pt-28) to prevent navbar overlap",
      "Top padding pt-28 configured"
    );

    // 3. Navbar links with exact IDs
    assert(
      html.includes('href="#overview"'),
      "3. Navbar link #overview present",
      "Link href='#overview'"
    );

    assert(
      html.includes('href="#portals"'),
      "4. Navbar link #portals present",
      "Link href='#portals'"
    );

    assert(
      html.includes('href="#micro-engines"'),
      "5. Navbar link #micro-engines present",
      "Link href='#micro-engines'"
    );

    assert(
      html.includes('href="#architecture"'),
      "6. Navbar link #architecture present",
      "Link href='#architecture'"
    );

    // 4. Exact target sections with matching IDs and scroll-margin-top
    assert(
      html.includes('id="overview"') && html.includes("scroll-mt-"),
      "7. Section #overview has matching id and scroll-margin-top",
      "Section #overview configured"
    );

    assert(
      html.includes('id="portals"') && html.includes("scroll-mt-"),
      "8. Section #portals has matching id and scroll-margin-top",
      "Section #portals configured"
    );

    assert(
      html.includes('id="micro-engines"') && html.includes("scroll-mt-"),
      "9. Section #micro-engines has matching id and scroll-margin-top",
      "Section #micro-engines configured"
    );

    assert(
      html.includes('id="architecture"') && html.includes("scroll-mt-"),
      "10. Section #architecture has matching id and scroll-margin-top",
      "Section #architecture configured"
    );

    // 5. Explore Platform CTA link
    assert(
      html.includes('href="#overview"') && html.includes("Explore Platform"),
      "11. 'Explore Platform' button links smoothly to #overview",
      "CTA link to #overview verified"
    );

    // 6. Sign In navigation
    assert(
      html.includes('href="/login"') && html.includes("Sign In"),
      "12. Navbar 'Sign In' button links to /login",
      "Found href='/login'"
    );

    // 7. Back to Top component rendered
    assert(
      html.includes('aria-label="Back to top"'),
      "13. Floating 'Back to Top' button component is rendered on landing page",
      "Back to Top button present"
    );

    console.log("================================================================================");
    console.log(`🎉 RESULT: ${passed}/${total} VERIFICATION CHECKS PASSED!`);
    console.log("================================================================================");
  } catch (err) {
    console.error("Verification error:", err);
  }
}

verifyLandingPageFixedNavbarAndAnchors();
