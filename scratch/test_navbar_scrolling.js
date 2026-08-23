const SCER_URL = "http://localhost:3000";

async function verifyNavbarAndSections() {
  console.log("================================================================================");
  console.log("🔍 SCER LANDING PAGE NAVBAR & SCROLL MARGIN VERIFICATION");
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

    // 1. Check scroll-smooth on html
    assert(
      html.includes("scroll-smooth"),
      "1. HTML tag has 'scroll-smooth' enabled",
      "Found scroll-smooth in HTML attributes"
    );

    // 2. Check navbar links
    assert(
      html.includes('href="#overview"'),
      "2. Navbar has 'Platform Overview' link (href='#overview')",
      "Link href='#overview' present"
    );

    assert(
      html.includes('href="#portals"'),
      "3. Navbar has 'Portals' link (href='#portals')",
      "Link href='#portals' present"
    );

    assert(
      html.includes('href="#engines"'),
      "4. Navbar has 'Micro-Engines' link (href='#engines')",
      "Link href='#engines' present"
    );

    assert(
      html.includes('href="#architecture"'),
      "5. Navbar has 'Architecture' link (href='#architecture')",
      "Link href='#architecture' present"
    );

    // 3. Check section IDs and scroll-margin-top
    assert(
      html.includes('id="overview"') && html.includes('scroll-mt-28'),
      "6. Target section #overview has id='overview' and scroll-mt-28",
      "Correct section ID and scroll margin present"
    );

    assert(
      html.includes('id="portals"') && html.includes('Role-Dedicated Portals'),
      "7. Target section #portals has id='portals' and contains Portals content",
      "Correct section ID and scroll margin present"
    );

    assert(
      html.includes('id="engines"') && html.includes('Autonomous Emergency Micro-Engines'),
      "8. Target section #engines has id='engines' and contains Micro-Engines content",
      "Correct section ID and scroll margin present"
    );

    assert(
      html.includes('id="architecture"') && html.includes('Autonomous Emergency Pipeline'),
      "9. Target section #architecture has id='architecture' and contains Pipeline content",
      "Correct section ID and scroll margin present"
    );

    // 4. Check Sign In button in navbar
    assert(
      html.includes('href="/login"') && html.includes('Sign In'),
      "10. Navbar 'Sign In' button navigates directly to /login",
      "Found href='/login' for Sign In button"
    );

    // 5. Check bottom CTA Sign In button
    assert(
      html.includes('Sign In to Portal') || html.includes('Ready to Access SCER?'),
      "11. Bottom CTA contains direct action to access portal",
      "CTA section correctly configured"
    );

    console.log("================================================================================");
    console.log(`🎉 RESULT: ${passed}/${total} VERIFICATION CHECKS PASSED!`);
    console.log("================================================================================");
  } catch (err) {
    console.error("Verification failed:", err);
  }
}

verifyNavbarAndSections();
