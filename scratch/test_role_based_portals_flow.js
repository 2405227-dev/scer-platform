async function runTest() {
  console.log("==================================================");
  console.log("TESTING SCER USER & CONTROLLER ROLE-BASED PORTALS");
  console.log("==================================================\n");

  const baseUrl = "http://localhost:3000";

  // STEP 1: LOGIN AS ROOT CONTROLLER
  console.log("1. Logging in as ROOT CONTROLLER (admin@scer.campus)...");
  const rootLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@scer.campus", password: "Admin@SCER2026!" }),
  });
  const rootLoginData = await rootLoginRes.json();
  console.log("   Root Login Result:", {
    success: rootLoginData.success,
    role: rootLoginData.user?.role,
    mustChangePassword: rootLoginData.user?.mustChangePassword,
  });
  if (!rootLoginData.success || rootLoginData.user?.role !== "ROOT_CONTROLLER") {
    throw new Error("Root controller login failed");
  }

  const rootCookie = rootLoginRes.headers.get("set-cookie")?.split(";")[0] || "";

  // STEP 2: ROOT CONTROLLER CREATES A NEW USER WITH TEMPORARY PASSWORD
  const studentEmail = `student_${Date.now()}@scer.campus`;
  console.log(`\n2. Root Controller creating new user: ${studentEmail}...`);
  const createUserRes = await fetch(`${baseUrl}/api/admin/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: rootCookie,
    },
    body: JSON.stringify({
      name: "Test Campus Student",
      email: studentEmail,
      role: "USER",
      department: "Science Complex - Hall 2",
      phone: "+1 555-0188",
    }),
  });
  const createUserData = await createUserRes.json();
  console.log("   User Created:", {
    name: createUserData.user?.name,
    email: createUserData.user?.email,
    tempPassword: createUserData.tempPassword,
    mustChangePassword: createUserData.user?.mustChangePassword,
  });
  if (!createUserData.success || !createUserData.tempPassword) {
    throw new Error("Failed to create user with temporary password");
  }

  const tempPassword = createUserData.tempPassword;
  const newUserId = createUserData.user.id;

  // STEP 3: NEW USER LOGS IN WITH TEMPORARY PASSWORD
  console.log("\n3. New user logging in with temporary password...");
  const tempLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: studentEmail, password: tempPassword }),
  });
  const tempLoginData = await tempLoginRes.json();
  console.log("   Temp Login Result:", {
    success: tempLoginData.success,
    mustChangePassword: tempLoginData.user?.mustChangePassword,
    redirectUrl: tempLoginData.redirectUrl,
  });
  if (!tempLoginData.user?.mustChangePassword || tempLoginData.redirectUrl !== "/change-password") {
    throw new Error("Temporary password flow did not force change-password redirect!");
  }

  const userCookie = tempLoginRes.headers.get("set-cookie")?.split(";")[0] || "";

  // STEP 4: NEW USER CHANGES TEMPORARY PASSWORD TO PERMANENT PASSWORD
  console.log("\n4. New user setting permanent password via /api/auth/change-password...");
  const newPermanentPass = "MySecurePass2026!";
  const changePassRes = await fetch(`${baseUrl}/api/auth/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: userCookie,
    },
    body: JSON.stringify({
      currentPassword: tempPassword,
      newPassword: newPermanentPass,
    }),
  });
  const changePassData = await changePassRes.json();
  console.log("   Password Change Result:", {
    success: changePassData.success,
    mustChangePassword: changePassData.user?.mustChangePassword,
    redirectUrl: changePassData.redirectUrl,
  });
  if (!changePassData.success || changePassData.user?.mustChangePassword !== false) {
    throw new Error("Password change failed");
  }

  const userPermCookie = changePassRes.headers.get("set-cookie")?.split(";")[0] || "";

  // STEP 5: STUDENT SENDS A VOICE EMERGENCY FROM USER PORTAL
  console.log("\n5. Student submitting emergency from User Portal...");
  const emergencyRes = await fetch(`${baseUrl}/api/incidents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: userPermCookie,
    },
    body: JSON.stringify({
      type: "Fire Emergency",
      severity: "CRITICAL",
      status: "pending",
      location: "Science Complex - Hall 2 Lab 101",
      description: "[VOICE DISTRESS]: \"FIRE IN CHEMICAL STORAGE LAB 101!\"",
      reporterName: "Test Campus Student",
      reporterId: newUserId,
    }),
  });
  const emergencyData = await emergencyRes.json();
  const incidentId = emergencyData.incident?.id;
  console.log("   Incident Created in Database:", {
    id: incidentId,
    status: emergencyData.incident?.status,
    reporterId: emergencyData.incident?.reporterId,
    location: emergencyData.incident?.location,
  });
  if (!incidentId || emergencyData.incident?.status !== "pending") {
    throw new Error("Emergency incident creation failed");
  }

  // STEP 6: CONTROLLER VIEWS INCIDENT IN PENDING STATUS
  console.log("\n6. Controller inspecting Pending Incidents queue...");
  const controllerAllRes = await fetch(`${baseUrl}/api/incidents`);
  const allIncidents = await controllerAllRes.json();
  const pendingMatch = allIncidents.find((i) => i.id === incidentId);
  console.log("   Pending Match in Controller View:", {
    found: !!pendingMatch,
    status: pendingMatch?.status,
    reporterName: pendingMatch?.reporterName,
  });
  if (!pendingMatch || pendingMatch.status !== "pending") {
    throw new Error("Incident not found in controller pending list");
  }

  // STEP 7: CONTROLLER / DISPATCH ACCEPTS INCIDENT
  console.log(`\n7. Controller accepting Incident #${incidentId}...`);
  const acceptRes = await fetch(`${baseUrl}/api/incidents/${incidentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: "accepted",
      assignedTo: "Campus Tactical Alpha",
      assignedToName: "Campus Tactical Alpha",
    }),
  });
  const acceptData = await acceptRes.json();
  console.log("   Accept Result:", {
    id: acceptData.id,
    status: acceptData.status,
    assignedToName: acceptData.assignedToName,
  });

  // STEP 8: STUDENT VIEWS PERSONAL INCIDENT STATUS TRACKER (ISOLATED QUERY)
  console.log(`\n8. Student querying own incident list: /api/incidents?reporterId=${newUserId}...`);
  const studentIncidentsRes = await fetch(`${baseUrl}/api/incidents?reporterId=${newUserId}`);
  const studentIncidents = await studentIncidentsRes.json();
  console.log("   Student's Isolated Incidents Count:", studentIncidents.length);
  const studentIncident = studentIncidents.find((i) => i.id === incidentId);
  console.log("   Student's Live Status:", {
    id: studentIncident?.id,
    status: studentIncident?.status,
    assignedToName: studentIncident?.assignedToName,
  });
  if (studentIncident?.status !== "accepted") {
    throw new Error("Student did not see ACCEPTED status update!");
  }

  // STEP 9: VERIFY DATA ISOLATION (Another random reporter ID gets 0 of this user's incidents)
  console.log("\n9. Testing User Data Isolation for another student...");
  const otherUserRes = await fetch(`${baseUrl}/api/incidents?reporterId=non_existent_student_id`);
  const otherIncidents = await otherUserRes.json();
  console.log("   Other Student's Incidents Count (Expected 0):", otherIncidents.length);
  if (otherIncidents.length !== 0) {
    throw new Error("Data isolation violation! Other user saw incidents.");
  }

  // STEP 10: CONTROLLER RESOLVES INCIDENT
  console.log(`\n10. Controller resolving Incident #${incidentId}...`);
  const resolveRes = await fetch(`${baseUrl}/api/incidents/${incidentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: "resolved",
      resolvedBy: "Controller Command",
    }),
  });
  const resolveData = await resolveRes.json();
  console.log("   Resolve Result:", {
    id: resolveData.id,
    status: resolveData.status,
    resolvedBy: resolveData.resolvedBy,
  });

  // STEP 11: STUDENT SEES RESOLVED STATUS
  console.log("\n11. Student verifying final RESOLVED status in User Portal...");
  const finalStudentRes = await fetch(`${baseUrl}/api/incidents?reporterId=${newUserId}`);
  const finalStudentIncidents = await finalStudentRes.json();
  const finalIncident = finalStudentIncidents.find((i) => i.id === incidentId);
  console.log("   Final Student Status:", {
    id: finalIncident?.id,
    status: finalIncident?.status,
    resolvedBy: finalIncident?.resolvedBy,
  });
  if (finalIncident?.status !== "resolved") {
    throw new Error("Incident not marked as resolved in user portal view");
  }

  console.log("\n==================================================");
  console.log("✅ ALL TESTS PASSED! ROLE-BASED ARCHITECTURE VERIFIED");
  console.log("==================================================");
}

runTest().catch((err) => {
  console.error("❌ TEST FAILED:", err);
  process.exit(1);
});
