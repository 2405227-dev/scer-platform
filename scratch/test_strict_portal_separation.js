async function runStrictSeparationTests() {
  console.log("================================================================================");
  console.log("🚀 TESTING STRICT PORTAL SEPARATION & ROUTE REDIRECTS (ALL 6 TESTS)");
  console.log("================================================================================\n");

  const baseUrl = "http://localhost:3000";

  // Login all 3 test accounts to obtain session cookies
  console.log("--> Authenticating Test Accounts...");
  
  // 1. Root Controller
  const rootLogin = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@scer.campus", password: "Admin@SCER2026!" }),
  });
  const rootCookie = rootLogin.headers.get("set-cookie")?.split(";")[0] || "";

  // 2. Normal Controller
  const normalCtrlLogin = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "controller@scer.campus", password: "Controller@SCER2026!" }),
  });
  const normalCtrlCookie = normalCtrlLogin.headers.get("set-cookie")?.split(";")[0] || "";

  // 3. User
  const userLogin = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "student@scer.campus", password: "Student@SCER2026!" }),
  });
  const userCookie = userLogin.headers.get("set-cookie")?.split(";")[0] || "";

  console.log("--> Cookies obtained successfully.\n");

  // TEST 1: USER -> /user works (200 OK)
  console.log("--------------------------------------------------------------------------------");
  console.log("TEST 1: USER -> /user");
  console.log("--------------------------------------------------------------------------------");
  const userPortalRes = await fetch(`${baseUrl}/user`, {
    headers: { Cookie: userCookie },
    redirect: "manual",
  });
  console.log("-> Status Code:", userPortalRes.status);
  if (userPortalRes.status !== 200) {
    throw new Error(`TEST 1 FAILED: Expected 200 OK for USER accessing /user, got ${userPortalRes.status}`);
  }
  console.log("✅ TEST 1 PASSED: USER successfully accesses /user.");

  // TEST 2: USER -> / redirects to /user
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 2: USER -> / (Command Center)");
  console.log("--------------------------------------------------------------------------------");
  const userRootRes = await fetch(`${baseUrl}/`, {
    headers: { Cookie: userCookie },
    redirect: "manual",
  });
  const userRedirectLocation = userRootRes.headers.get("location");
  console.log("-> Status Code:", userRootRes.status);
  console.log("-> Location Header:", userRedirectLocation);
  if (userRootRes.status !== 307 && userRootRes.status !== 308) {
    throw new Error(`TEST 2 FAILED: Expected redirect status 307/308, got ${userRootRes.status}`);
  }
  if (!userRedirectLocation || !userRedirectLocation.includes("/user")) {
    throw new Error(`TEST 2 FAILED: Expected redirect to /user, got ${userRedirectLocation}`);
  }
  console.log("✅ TEST 2 PASSED: USER visiting / is strictly redirected to /user.");

  // TEST 3: NORMAL CONTROLLER -> /user redirects to /
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 3: NORMAL CONTROLLER -> /user");
  console.log("--------------------------------------------------------------------------------");
  const normalCtrlUserPortalRes = await fetch(`${baseUrl}/user`, {
    headers: { Cookie: normalCtrlCookie },
    redirect: "manual",
  });
  const normalRedirectLocation = normalCtrlUserPortalRes.headers.get("location");
  console.log("-> Status Code:", normalCtrlUserPortalRes.status);
  console.log("-> Location Header:", normalRedirectLocation);
  if (normalCtrlUserPortalRes.status !== 307 && normalCtrlUserPortalRes.status !== 308) {
    throw new Error(`TEST 3 FAILED: Expected redirect status 307/308, got ${normalCtrlUserPortalRes.status}`);
  }
  if (normalRedirectLocation !== "/" && normalRedirectLocation !== "http://localhost:3000/") {
    throw new Error(`TEST 3 FAILED: Expected redirect to /, got ${normalRedirectLocation}`);
  }
  console.log("✅ TEST 3 PASSED: NORMAL CONTROLLER visiting /user is strictly redirected to /.");

  // TEST 4: ROOT CONTROLLER -> /user redirects to /
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 4: ROOT CONTROLLER -> /user");
  console.log("--------------------------------------------------------------------------------");
  const rootUserPortalRes = await fetch(`${baseUrl}/user`, {
    headers: { Cookie: rootCookie },
    redirect: "manual",
  });
  const rootRedirectLocation = rootUserPortalRes.headers.get("location");
  console.log("-> Status Code:", rootUserPortalRes.status);
  console.log("-> Location Header:", rootRedirectLocation);
  if (rootUserPortalRes.status !== 307 && rootUserPortalRes.status !== 308) {
    throw new Error(`TEST 4 FAILED: Expected redirect status 307/308, got ${rootUserPortalRes.status}`);
  }
  if (rootRedirectLocation !== "/" && rootRedirectLocation !== "http://localhost:3000/") {
    throw new Error(`TEST 4 FAILED: Expected redirect to /, got ${rootRedirectLocation}`);
  }
  console.log("✅ TEST 4 PASSED: ROOT CONTROLLER visiting /user is strictly redirected to /.");

  // TEST 5: NORMAL CONTROLLER -> /accounts returns 403 or redirects to /
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 5: NORMAL CONTROLLER -> /accounts");
  console.log("--------------------------------------------------------------------------------");
  const normalCtrlAccountsRes = await fetch(`${baseUrl}/accounts`, {
    headers: { Cookie: normalCtrlCookie },
    redirect: "manual",
  });
  const normalCtrlAccountsRedirect = normalCtrlAccountsRes.headers.get("location");
  console.log("-> Page Status Code:", normalCtrlAccountsRes.status);
  console.log("-> Page Location Header:", normalCtrlAccountsRedirect);
  
  // Also check the backend API
  const normalCtrlAdminApiRes = await fetch(`${baseUrl}/api/admin/users`, {
    headers: { Cookie: normalCtrlCookie },
  });
  console.log("-> Backend API Status Code:", normalCtrlAdminApiRes.status);

  if (normalCtrlAccountsRes.status !== 307 && normalCtrlAccountsRes.status !== 308 && normalCtrlAccountsRes.status !== 403) {
    throw new Error(`TEST 5 FAILED: Normal controller was not blocked from /accounts, got ${normalCtrlAccountsRes.status}`);
  }
  if (normalCtrlAdminApiRes.status !== 403) {
    throw new Error(`TEST 5 FAILED: Normal controller received ${normalCtrlAdminApiRes.status} instead of 403 on admin API`);
  }
  console.log("✅ TEST 5 PASSED: NORMAL CONTROLLER is strictly blocked from /accounts (redirects to /) and receives 403 on admin APIs.");

  // TEST 6: ROOT CONTROLLER -> /accounts works (200 OK)
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 6: ROOT CONTROLLER -> /accounts");
  console.log("--------------------------------------------------------------------------------");
  const rootAccountsRes = await fetch(`${baseUrl}/accounts`, {
    headers: { Cookie: rootCookie },
    redirect: "manual",
  });
  console.log("-> Page Status Code:", rootAccountsRes.status);

  const rootAdminApiRes = await fetch(`${baseUrl}/api/admin/users`, {
    headers: { Cookie: rootCookie },
  });
  const rootAdminData = await rootAdminApiRes.json();
  console.log("-> Backend API Users Count:", rootAdminData.users?.length);

  if (rootAccountsRes.status !== 200) {
    throw new Error(`TEST 6 FAILED: Expected 200 OK for Root Controller accessing /accounts, got ${rootAccountsRes.status}`);
  }
  if (!rootAdminApiRes.ok || !Array.isArray(rootAdminData.users)) {
    throw new Error("TEST 6 FAILED: Root Controller could not fetch users list");
  }
  console.log("✅ TEST 6 PASSED: ROOT CONTROLLER successfully accesses /accounts and administrative APIs.");

  console.log("\n================================================================================");
  console.log("🎉 ALL 6 STRICT PORTAL SEPARATION TESTS PASSED WITH 100% SUCCESS!");
  console.log("================================================================================");
}

runStrictSeparationTests().catch((err) => {
  console.error("❌ STRICT SEPARATION TEST FAILED:", err);
  process.exit(1);
});
