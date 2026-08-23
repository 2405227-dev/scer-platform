async function runFinalVerification() {
  console.log("================================================================================");
  console.log("🚀 STARTING FINAL ROLE-BASED ACCESS ARCHITECTURE VERIFICATION (ALL 9 TESTS)");
  console.log("================================================================================\n");

  const baseUrl = "http://localhost:3000";

  // ==========================================================================
  // TEST 1: LOGIN AS ROOT CONTROLLER
  // ==========================================================================
  console.log("--------------------------------------------------------------------------------");
  console.log("TEST 1: Login as Root Controller (admin@scer.campus)");
  console.log("--------------------------------------------------------------------------------");
  const rootLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@scer.campus", password: "Admin@SCER2026!" }),
  });
  const rootLoginData = await rootLoginRes.json();
  const rootCookie = rootLoginRes.headers.get("set-cookie")?.split(";")[0] || "";

  console.log("-> Root Controller Session:", {
    role: rootLoginData.user?.role,
    isRootController: rootLoginData.user?.isRootController,
    isActive: rootLoginData.user?.isActive,
  });

  if (
    !rootLoginData.success ||
    rootLoginData.user?.role !== "CONTROLLER" ||
    !rootLoginData.user?.isRootController
  ) {
    throw new Error("TEST 1 FAILED: Root controller role verification failed");
  }

  // Verify Account Management API accessible for Root Controller
  const rootUsersRes = await fetch(`${baseUrl}/api/admin/users`, {
    headers: { Cookie: rootCookie },
  });
  const rootUsersData = await rootUsersRes.json();
  if (!rootUsersRes.ok || !Array.isArray(rootUsersData.users)) {
    throw new Error("TEST 1 FAILED: Root controller could not access Account Management API");
  }
  console.log("✅ TEST 1 PASSED: Root Controller has full access to Controller modules & Account Management.");

  // ==========================================================================
  // TEST 2: LOGIN AS NORMAL CONTROLLER
  // ==========================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 2: Login as Normal Controller (controller@scer.campus)");
  console.log("--------------------------------------------------------------------------------");
  const normalCtrlLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "controller@scer.campus", password: "Controller@SCER2026!" }),
  });
  const normalCtrlData = await normalCtrlLoginRes.json();
  const normalCtrlCookie = normalCtrlLoginRes.headers.get("set-cookie")?.split(";")[0] || "";

  console.log("-> Normal Controller Session:", {
    role: normalCtrlData.user?.role,
    isRootController: normalCtrlData.user?.isRootController,
  });

  if (
    !normalCtrlData.success ||
    normalCtrlData.user?.role !== "CONTROLLER" ||
    normalCtrlData.user?.isRootController !== false
  ) {
    throw new Error("TEST 2 FAILED: Normal controller session invalid");
  }

  // Attempt to access Account Management API as Normal Controller (Must be 403 Forbidden)
  const normalCtrlAdminRes = await fetch(`${baseUrl}/api/admin/users`, {
    headers: { Cookie: normalCtrlCookie },
  });
  console.log("-> Normal Controller Access to /api/admin/users Status Code:", normalCtrlAdminRes.status);
  if (normalCtrlAdminRes.status !== 403) {
    throw new Error("TEST 2 FAILED: Normal Controller was NOT blocked from Account Management API!");
  }
  console.log("✅ TEST 2 PASSED: Normal Controller has Command access but is strictly blocked from Account Management.");

  // ==========================================================================
  // TEST 3: LOGIN AS USER
  // ==========================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 3: Login as User (student@scer.campus)");
  console.log("--------------------------------------------------------------------------------");
  const userLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "student@scer.campus", password: "Student@SCER2026!" }),
  });
  const userLoginData = await userLoginRes.json();
  const userCookie = userLoginRes.headers.get("set-cookie")?.split(";")[0] || "";

  console.log("-> User Session:", {
    role: userLoginData.user?.role,
    isRootController: userLoginData.user?.isRootController,
    redirectUrl: userLoginData.redirectUrl,
  });

  if (userLoginData.user?.role !== "USER" || userLoginData.redirectUrl !== "/user") {
    throw new Error("TEST 3 FAILED: User role or redirect URL mismatch");
  }

  // User attempting to access Account Management (Must be 403)
  const userAdminRes = await fetch(`${baseUrl}/api/admin/users`, {
    headers: { Cookie: userCookie },
  });
  if (userAdminRes.status !== 403) {
    throw new Error("TEST 3 FAILED: User was not blocked from admin endpoints");
  }
  console.log("✅ TEST 3 PASSED: User redirected to /user and blocked from Controller admin routes.");

  // ==========================================================================
  // TEST 4: ROOT CONTROLLER CREATES A USER & FORCES PASSWORD CHANGE
  // ==========================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 4: Root Controller creates a User & tests temporary password flow");
  console.log("--------------------------------------------------------------------------------");
  const newStudentEmail = `student_${Date.now()}@scer.campus`;
  const createUserRes = await fetch(`${baseUrl}/api/admin/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: rootCookie },
    body: JSON.stringify({
      name: "Temp Flow Student",
      email: newStudentEmail,
      role: "USER",
      department: "Physics Block",
    }),
  });
  const createUserData = await createUserRes.json();
  console.log("-> User Created with Temporary Password:", {
    name: createUserData.user?.name,
    email: createUserData.user?.email,
    tempPassword: createUserData.tempPassword,
    mustChangePassword: createUserData.user?.mustChangePassword,
  });

  if (!createUserData.tempPassword || createUserData.user?.mustChangePassword !== true) {
    throw new Error("TEST 4 FAILED: Temporary password not generated properly");
  }

  // New User logs in with temporary password
  const tempUserLogin = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: newStudentEmail, password: createUserData.tempPassword }),
  });
  const tempUserData = await tempUserLogin.json();
  const tempUserCookie = tempUserLogin.headers.get("set-cookie")?.split(";")[0] || "";

  if (tempUserData.redirectUrl !== "/change-password" || !tempUserData.user?.mustChangePassword) {
    throw new Error("TEST 4 FAILED: User was not forced to /change-password");
  }

  // User sets permanent password
  const changePassRes = await fetch(`${baseUrl}/api/auth/change-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: tempUserCookie },
    body: JSON.stringify({
      currentPassword: createUserData.tempPassword,
      newPassword: "PermanentPass2026!",
    }),
  });
  const changePassData = await changePassRes.json();
  console.log("-> Password Changed Result:", {
    success: changePassData.success,
    mustChangePassword: changePassData.user?.mustChangePassword,
    redirectUrl: changePassData.redirectUrl,
  });

  if (!changePassData.success || changePassData.user?.mustChangePassword !== false) {
    throw new Error("TEST 4 FAILED: Permanent password update failed");
  }
  console.log("✅ TEST 4 PASSED: User created, temporary password issued, and permanent change enforced.");

  // ==========================================================================
  // TEST 5: ROOT CONTROLLER CREATES A NORMAL CONTROLLER
  // ==========================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 5: Root Controller creates a Normal Controller");
  console.log("--------------------------------------------------------------------------------");
  const newCtrlEmail = `controller_${Date.now()}@scer.campus`;
  const createCtrlRes = await fetch(`${baseUrl}/api/admin/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: rootCookie },
    body: JSON.stringify({
      name: "Tactical Unit Officer",
      email: newCtrlEmail,
      role: "CONTROLLER",
      department: "Security Dispatch",
    }),
  });
  const createCtrlData = await createCtrlRes.json();
  console.log("-> Created Controller:", {
    role: createCtrlData.user?.role,
    isRootController: createCtrlData.user?.isRootController,
    tempPassword: createCtrlData.tempPassword,
  });

  if (
    createCtrlData.user?.role !== "CONTROLLER" ||
    createCtrlData.user?.isRootController !== false
  ) {
    throw new Error("TEST 5 FAILED: Created controller should have isRootController = false");
  }

  // Login as this new normal controller
  const newCtrlLogin = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: newCtrlEmail, password: createCtrlData.tempPassword }),
  });
  const newCtrlCookie = newCtrlLogin.headers.get("set-cookie")?.split(";")[0] || "";

  // Attempt to access Account Management API
  const newCtrlAdminCheck = await fetch(`${baseUrl}/api/admin/users`, {
    headers: { Cookie: newCtrlCookie },
  });
  if (newCtrlAdminCheck.status !== 403) {
    throw new Error("TEST 5 FAILED: New normal controller was not blocked from Account Management");
  }
  console.log("✅ TEST 5 PASSED: Normal Controller created with isRootController = false and 403 enforcement.");

  // ==========================================================================
  // TEST 6: DISABLE AND ENABLE A USER
  // ==========================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 6: Disable and Enable account enforcement");
  console.log("--------------------------------------------------------------------------------");
  const targetUserId = createUserData.user.id;

  // 1. Root Controller disables the user
  const disableRes = await fetch(`${baseUrl}/api/admin/users/${targetUserId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Cookie: rootCookie },
    body: JSON.stringify({ isActive: false }),
  });
  const disableData = await disableRes.json();
  console.log("-> Disable Account Response:", disableData.message);

  // 2. Disabled User attempts to log in (Must be rejected with 403)
  const disabledLogin = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: newStudentEmail, password: "PermanentPass2026!" }),
  });
  console.log("-> Disabled User Login Attempt Status:", disabledLogin.status);
  if (disabledLogin.status !== 403) {
    throw new Error("TEST 6 FAILED: Disabled user was able to log in!");
  }

  // 3. Root Controller re-enables the user
  const enableRes = await fetch(`${baseUrl}/api/admin/users/${targetUserId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Cookie: rootCookie },
    body: JSON.stringify({ isActive: true }),
  });
  const enableData = await enableRes.json();
  console.log("-> Enable Account Response:", enableData.message);

  // 4. Enabled user logs in successfully
  const reEnabledLogin = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: newStudentEmail, password: "PermanentPass2026!" }),
  });
  if (!reEnabledLogin.ok) {
    throw new Error("TEST 6 FAILED: Re-enabled user could not log in");
  }
  console.log("✅ TEST 6 PASSED: Disabled account login blocked; re-enabled account successfully restored.");

  // ==========================================================================
  // TEST 7: ATTEMPT TO DELETE OR DISABLE ROOT CONTROLLER
  // ==========================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 7: Attempt to delete or disable Root Controller (Protection verification)");
  console.log("--------------------------------------------------------------------------------");
  const rootUserId = rootLoginData.user.id;

  // 1. Attempt to disable Root Controller
  const disableRootRes = await fetch(`${baseUrl}/api/admin/users/${rootUserId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Cookie: rootCookie },
    body: JSON.stringify({ isActive: false }),
  });
  console.log("-> Disable Root Controller Attempt Status:", disableRootRes.status);
  if (disableRootRes.status !== 403) {
    throw new Error("TEST 7 FAILED: Server allowed disabling the Root Controller!");
  }

  // 2. Attempt to delete Root Controller
  const deleteRootRes = await fetch(`${baseUrl}/api/admin/users/${rootUserId}`, {
    method: "DELETE",
    headers: { Cookie: rootCookie },
  });
  console.log("-> Delete Root Controller Attempt Status:", deleteRootRes.status);
  if (deleteRootRes.status !== 403) {
    throw new Error("TEST 7 FAILED: Server allowed deleting the Root Controller!");
  }
  console.log("✅ TEST 7 PASSED: Root Controller is completely protected against deletion and disabling.");

  // ==========================================================================
  // TEST 8: COMPLETE EMERGENCY WORKFLOW
  // ==========================================================================
  console.log("\n--------------------------------------------------------------------------------");
  console.log("TEST 8: Complete User -> Controller Emergency Workflow");
  console.log("--------------------------------------------------------------------------------");

  // User submits emergency
  const studentPermCookie = reEnabledLogin.headers.get("set-cookie")?.split(";")[0] || "";
  const emergencyRes = await fetch(`${baseUrl}/api/incidents`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: studentPermCookie },
    body: JSON.stringify({
      type: "Medical Emergency",
      severity: "HIGH",
      status: "pending",
      location: "East Dormitory 204",
      description: "[VOICE DISTRESS]: \"Student unconscious in East Dorm 204!\"",
      reporterName: "Temp Flow Student",
      reporterId: targetUserId,
    }),
  });
  const emergencyData = await emergencyRes.json();
  const incidentId = emergencyData.incident.id;
  console.log("-> Incident Created in Pending State:", { id: incidentId, status: emergencyData.incident.status });

  // Controller accepts incident
  const acceptRes = await fetch(`${baseUrl}/api/incidents/${incidentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Cookie: normalCtrlCookie },
    body: JSON.stringify({
      status: "accepted",
      assignedTo: "resp-medical-01",
      assignedToName: "Campus Paramedic Squad",
    }),
  });
  const acceptData = await acceptRes.json();
  console.log("-> Controller Accepted Incident:", { id: acceptData.id, status: acceptData.status, assignedToName: acceptData.assignedToName });

  // User queries own incidents (isolated query)
  const userQueryRes = await fetch(`${baseUrl}/api/incidents`, {
    headers: { Cookie: studentPermCookie },
  });
  const userIncidents = await userQueryRes.json();
  const userMatch = userIncidents.find((i) => i.id === incidentId);
  console.log("-> User Views Updated Incident Status:", { id: userMatch?.id, status: userMatch?.status });
  if (userMatch?.status !== "accepted") {
    throw new Error("TEST 8 FAILED: User did not see accepted status");
  }

  // Controller resolves incident
  const resolveRes = await fetch(`${baseUrl}/api/incidents/${incidentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Cookie: rootCookie },
    body: JSON.stringify({
      status: "resolved",
      resolvedBy: "Campus Paramedic Squad",
    }),
  });
  const resolveData = await resolveRes.json();
  console.log("-> Controller Resolved Incident:", { id: resolveData.id, status: resolveData.status, resolvedBy: resolveData.resolvedBy });

  // User verifies resolved status
  const finalUserQuery = await fetch(`${baseUrl}/api/incidents`, {
    headers: { Cookie: studentPermCookie },
  });
  const finalUserIncidents = await finalUserQuery.json();
  const finalMatch = finalUserIncidents.find((i) => i.id === incidentId);
  console.log("-> User Final Status:", { id: finalMatch?.id, status: finalMatch?.status });
  if (finalMatch?.status !== "resolved") {
    throw new Error("TEST 8 FAILED: User did not see resolved status");
  }
  console.log("✅ TEST 8 PASSED: Emergency workflow (User -> Pending -> Accepted -> Resolved) verified end-to-end.");

  console.log("\n================================================================================");
  console.log("🎉 ALL TESTS 1 THROUGH 8 PASSED WITH 100% SUCCESS!");
  console.log("================================================================================");
}

runFinalVerification().catch((err) => {
  console.error("❌ VERIFICATION SUITE FAILED:", err);
  process.exit(1);
});
