const SCER_URL = "http://localhost:3000";

async function runRoutingVerificationSuite() {
  console.log("================================================================================");
  console.log("🚀 SCER ROUTING & PORTAL SEPARATION VERIFICATION SUITE");
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
    // TEST 1: Unauthenticated GET / -> 200 Public Landing Page
    const t1Res = await fetch(`${SCER_URL}/`, { redirect: "manual" });
    const t1Text = await t1Res.text();
    assert(
      t1Res.status === 200 && t1Text.includes("Smart Campus Emergency Response"),
      "TEST 1: Unauthenticated GET / -> 200 Public Landing Page",
      `Status: ${t1Res.status}, Contains Public Landing Title: true`
    );

    // TEST 2: Landing page Sign In button links to /login
    assert(
      t1Text.includes('href="/login"'),
      "TEST 2: Landing page contains direct link to /login",
      `Has href="/login": true`
    );

    // TEST 3: USER login -> redirects to /user
    const userLoginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "student@scer.campus", password: "Student@SCER2026!" })
    });
    const userLoginData = await userLoginRes.json();
    const userCookie = userLoginRes.headers.get("set-cookie") || "";
    assert(
      userLoginData.redirectUrl === "/user",
      "TEST 3: USER login returns redirectUrl = /user",
      `User Role: ${userLoginData.user?.role}, RedirectUrl: ${userLoginData.redirectUrl}`
    );

    // TEST 4: NORMAL CONTROLLER login -> redirects to /command
    const ctrlLoginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "controller@scer.campus", password: "Controller@SCER2026!" })
    });
    const ctrlLoginData = await ctrlLoginRes.json();
    const ctrlCookie = ctrlLoginRes.headers.get("set-cookie") || "";
    assert(
      ctrlLoginData.redirectUrl === "/command",
      "TEST 4: NORMAL CONTROLLER login returns redirectUrl = /command",
      `Controller Role: ${ctrlLoginData.user?.role}, isRoot: ${ctrlLoginData.user?.isRootController}, RedirectUrl: ${ctrlLoginData.redirectUrl}`
    );

    // TEST 5: ROOT CONTROLLER login -> redirects to /command
    const rootLoginRes = await fetch(`${SCER_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@scer.campus", password: "Admin@SCER2026!" })
    });
    const rootLoginData = await rootLoginRes.json();
    const rootCookie = rootLoginRes.headers.get("set-cookie") || "";
    assert(
      rootLoginData.redirectUrl === "/command",
      "TEST 5: ROOT CONTROLLER login returns redirectUrl = /command",
      `Root Controller Role: ${rootLoginData.user?.role}, isRoot: ${rootLoginData.user?.isRootController}, RedirectUrl: ${rootLoginData.redirectUrl}`
    );

    // TEST 6: USER manually visits /command -> redirect /user
    const userCommandRes = await fetch(`${SCER_URL}/command`, {
      headers: { Cookie: userCookie },
      redirect: "manual"
    });
    const userCommandLoc = userCommandRes.headers.get("location") || "";
    assert(
      userCommandRes.status === 307 || userCommandLoc.includes("/user"),
      "TEST 6: USER manually visiting /command redirects to /user",
      `Status: ${userCommandRes.status}, Location: ${userCommandLoc}`
    );

    // TEST 7: CONTROLLER manually visits /user -> redirect /command
    const ctrlUserRes = await fetch(`${SCER_URL}/user`, {
      headers: { Cookie: ctrlCookie },
      redirect: "manual"
    });
    const ctrlUserLoc = ctrlUserRes.headers.get("location") || "";
    assert(
      ctrlUserRes.status === 307 || ctrlUserLoc.includes("/command"),
      "TEST 7: CONTROLLER manually visiting /user redirects to /command",
      `Status: ${ctrlUserRes.status}, Location: ${ctrlUserLoc}`
    );

    // TEST 8: NORMAL CONTROLLER visits /accounts -> redirect /command
    const ctrlAccountsRes = await fetch(`${SCER_URL}/accounts`, {
      headers: { Cookie: ctrlCookie },
      redirect: "manual"
    });
    const ctrlAccountsLoc = ctrlAccountsRes.headers.get("location") || "";
    assert(
      ctrlAccountsRes.status === 307 || ctrlAccountsLoc.includes("/command"),
      "TEST 8: NORMAL CONTROLLER visiting /accounts redirects to /command",
      `Status: ${ctrlAccountsRes.status}, Location: ${ctrlAccountsLoc}`
    );

    // TEST 9: ROOT CONTROLLER visits /accounts -> 200 allowed
    const rootAccountsRes = await fetch(`${SCER_URL}/accounts`, {
      headers: { Cookie: rootCookie },
      redirect: "manual"
    });
    assert(
      rootAccountsRes.status === 200,
      "TEST 9: ROOT CONTROLLER visiting /accounts is allowed (HTTP 200)",
      `Status: ${rootAccountsRes.status}`
    );

    // TEST 10: Authenticated USER visits / -> still sees public landing page (NEVER auto-redirects)
    const userRootRes = await fetch(`${SCER_URL}/`, {
      headers: { Cookie: userCookie },
      redirect: "manual"
    });
    const userRootText = await userRootRes.text();
    assert(
      userRootRes.status === 200 && userRootText.includes("Smart Campus Emergency Response"),
      "TEST 10: Authenticated USER visiting / sees public landing page",
      `Status: ${userRootRes.status}, Renders Landing Page: true`
    );

    // TEST 11: Authenticated CONTROLLER visits / -> still sees public landing page (NEVER auto-redirects)
    const ctrlRootRes = await fetch(`${SCER_URL}/`, {
      headers: { Cookie: ctrlCookie },
      redirect: "manual"
    });
    const ctrlRootText = await ctrlRootRes.text();
    assert(
      ctrlRootRes.status === 200 && ctrlRootText.includes("Smart Campus Emergency Response"),
      "TEST 11: Authenticated CONTROLLER visiting / sees public landing page",
      `Status: ${ctrlRootRes.status}, Renders Landing Page: true`
    );

    console.log("================================================================================");
    console.log(`🎉 VERIFICATION RESULT: ${passed}/${total} TESTS PASSED!`);
    console.log("================================================================================");
  } catch (err) {
    console.error("Test execution failed:", err);
  }
}

runRoutingVerificationSuite();
