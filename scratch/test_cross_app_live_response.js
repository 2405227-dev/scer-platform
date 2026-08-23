const http = require("http");

function request(port, method, path, body = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : null;
    const req = http.request(
      {
        hostname: "localhost",
        port: port,
        path,
        method,
        headers: {
          "Content-Type": "application/json",
          ...(dataString ? { "Content-Length": Buffer.byteLength(dataString) } : {}),
          ...headers,
        },
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          let parsed;
          try {
            parsed = JSON.parse(raw);
          } catch {
            parsed = raw;
          }
          resolve({ status: res.statusCode, data: parsed });
        });
      }
    );
    req.on("error", reject);
    if (dataString) req.write(dataString);
    req.end();
  });
}

async function verifyCrossAppFlow() {
  console.log("==================================================================");
  console.log("CROSS-APPLICATION VERIFICATION: SCER (3000) <-> LIVE RESPONSE (3004)");
  console.log("==================================================================");

  // 1. Verify Port 3000 responds
  console.log("\n[TEST 1] Pinging SCER Main App on http://localhost:3000 ...");
  const scerHealth = await request(3000, "GET", "/");
  console.log(`✓ SCER (Port 3000) HTTP Status: ${scerHealth.status}`);
  if (scerHealth.status !== 200) throw new Error("Port 3000 failed to respond with 200");

  // 2. Verify Port 3004 responds
  console.log("\n[TEST 2] Pinging Live Response Center on http://localhost:3004 ...");
  const liveRespHealth = await request(3004, "GET", "/");
  console.log(`✓ Live Response Center (Port 3004) HTTP Status: ${liveRespHealth.status}`);
  if (liveRespHealth.status !== 200) throw new Error("Port 3004 failed to respond with 200");

  // 3. Create incident on Port 3000 (Main SCER app)
  console.log("\n[TEST 3] Creating emergency incident from SCER App (:3000)...");
  const createPayload = {
    type: "Campus Intrusion Alert - West Research Complex",
    severity: "CRITICAL",
    location: "Cleanroom Lab 202",
    description: "Door sensor triggered outside operating hours.",
    reporterName: "Automated Facility Security",
    status: "pending",
  };
  const createRes = await request(3000, "POST", "/api/incidents", createPayload);
  console.log("✓ Incident Creation Response Status:", createRes.status);
  const incident = createRes.data.incident;
  if (!incident || !incident.id) throw new Error("Incident creation failed");
  const incidentId = incident.id;
  console.log(`✓ Incident Created with ID: #${incidentId}, Initial Status: ${incident.status}`);

  // 4. Query incident from Live Response backend API (:3000)
  console.log("\n[TEST 4] Fetching incident list from Response Team API...");
  const teamRes = await request(3000, "GET", "/api/response-team");
  const teamIncident = teamRes.data.incidents.find((i) => i.id === incidentId);
  console.log(`✓ Live Response sees Incident #${incidentId} with Status: '${teamIncident?.status}'`);
  if (!teamIncident) throw new Error("Incident not visible in Response Team API");

  // 5. Responder Accepts Incident: pending -> accepted
  console.log("\n[TEST 5] Responder accepts incident (pending -> accepted)...");
  const acceptRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "accepted",
    assignedTo: "resp-tactical-01",
    assignedToName: "Officer J. Vance",
  });
  console.log("✓ Accept Status Code:", acceptRes.status);
  console.log("✓ Accept Response Body:", acceptRes.data);
  if (acceptRes.status !== 200) throw new Error("Failed to accept incident");

  // 6. Responder Starts Response: accepted -> in_progress
  console.log("\n[TEST 6] Responder starts response (accepted -> in_progress)...");
  const progressRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "in_progress",
    assignedTo: "resp-tactical-01",
    assignedToName: "Officer J. Vance",
  });
  console.log("✓ In-Progress Status Code:", progressRes.status);
  console.log("✓ In-Progress Response Body:", progressRes.data);
  if (progressRes.status !== 200) throw new Error("Failed to start response");

  // 7. Responder Resolves Incident: in_progress -> resolved
  console.log("\n[TEST 7] Responder resolves incident (in_progress -> resolved)...");
  const resolveRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "resolved",
    assignedTo: "resp-tactical-01",
    assignedToName: "Officer J. Vance",
  });
  console.log("✓ Resolve Status Code:", resolveRes.status);
  console.log("✓ Resolve Response Body:", resolveRes.data);
  if (resolveRes.status !== 200) throw new Error("Failed to resolve incident");

  // 8. Verify Invalid Transition is rejected: resolved -> in_progress (Expect 400)
  console.log("\n[TEST 8] Validating State Machine Rejection (resolved -> in_progress)...");
  const invalidRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "in_progress",
  });
  console.log(`✓ Invalid transition returned Status: ${invalidRes.status} (Expected: 400)`);
  if (invalidRes.status !== 400) throw new Error("State machine allowed invalid transition from resolved!");

  // 9. Verify SCER Core (:3000) sees final resolved state
  console.log("\n[TEST 9] Verifying SCER Core (:3000) sees updated resolved state...");
  const finalScerRes = await request(3000, "GET", "/api/incidents");
  const verifiedIncident = finalScerRes.data.find((i) => i.id === incidentId);
  console.log(`✓ Verified Incident #${incidentId} in SCER DB:`);
  console.log(`  - Status: ${verifiedIncident?.status}`);
  console.log(`  - Assigned To: ${verifiedIncident?.assignedToName} (${verifiedIncident?.assignedTo})`);
  console.log(`  - Assigned At: ${verifiedIncident?.assignedAt}`);
  console.log(`  - Resolved At: ${verifiedIncident?.resolvedAt}`);
  console.log(`  - Resolved By: ${verifiedIncident?.resolvedBy}`);

  console.log("\n==================================================================");
  console.log("🎉 ALL CROSS-APPLICATION INTEGRATION TESTS PASSED PERFECTLY!");
  console.log("==================================================================\n");
}

verifyCrossAppFlow().catch((err) => {
  console.error("❌ INTEGRATION TEST FAILED:", err);
  process.exit(1);
});
