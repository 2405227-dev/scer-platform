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
          ...(dataString ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(dataString) } : {}),
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
          resolve({ status: res.statusCode, headers: res.headers, data: parsed });
        });
      }
    );
    req.on("error", reject);
    if (dataString) req.write(dataString);
    req.end();
  });
}

async function runCompleteLiveResponseWorkflow() {
  console.log("===============================================================================");
  console.log("STEP 9 & 10: COMPLETE LIVE RESPONSE WORKFLOW VERIFICATION");
  console.log("===============================================================================");

  // 1. Create Test Incident
  console.log("\n[1] Creating Test Incident in SCER on Port 3000:");
  console.log("    Title: 'TEST EMERGENCY — Live Response'");
  console.log("    Severity: 'CRITICAL'");
  console.log("    Status: 'pending'");
  
  const createRes = await request(3000, "POST", "/api/incidents", {
    type: "TEST EMERGENCY — Live Response",
    severity: "CRITICAL",
    location: "Campus Library 2nd Floor",
    description: "Automated test incident to verify full Live Response state transitions.",
    reporterName: "Student Reporter",
    status: "pending",
  }, {
    Origin: "http://localhost:3004",
  });

  if (createRes.status !== 200 || !createRes.data.incident) {
    throw new Error(`Failed to create incident: ${JSON.stringify(createRes.data)}`);
  }

  const incident = createRes.data.incident;
  const incidentId = incident.id;
  console.log(`✓ Incident Created Successfully! ID: ${incidentId}`);
  console.log(`✓ Initial Status: ${incident.status}`);

  // 2. Verify Live Response Queue & Responders
  console.log("\n[2] Fetching Live Response Queue (/api/response-team)...");
  const queueRes = await request(3000, "GET", "/api/response-team", null, {
    Origin: "http://localhost:3004",
  });
  
  const foundInQueue = queueRes.data.incidents.find((i) => i.id === incidentId);
  if (!foundInQueue) throw new Error("Incident not returned in /api/response-team queue!");
  console.log(`✓ Incident present in Live Response queue with status: '${foundInQueue.status}'`);
  console.log(`✓ Available Responders: ${queueRes.data.responders.map((r) => r.name).join(", ")}`);

  // 3. Step 5: Test [ ACCEPT INCIDENT ]
  console.log("\n[3] Testing [ ACCEPT INCIDENT ] (pending -> accepted)...");
  const acceptRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "accepted",
    assignedTo: "resp-alpha-01",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });

  console.log(`✓ Accept HTTP Status: ${acceptRes.status}`);
  console.log(`✓ Updated Incident Status: ${acceptRes.data.incident?.status}`);
  console.log(`✓ Assigned To: ${acceptRes.data.incident?.assignedToName} (${acceptRes.data.incident?.assignedTo})`);
  console.log(`✓ Assigned At: ${acceptRes.data.incident?.assignedAt}`);
  if (acceptRes.data.incident?.status !== "accepted") throw new Error("Status failed to update to accepted!");

  // 4. Step 6: Test [ START RESPONSE ]
  console.log("\n[4] Testing [ START RESPONSE ] (accepted -> in_progress)...");
  const progressRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "in_progress",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });

  console.log(`✓ Start Response HTTP Status: ${progressRes.status}`);
  console.log(`✓ Updated Incident Status: ${progressRes.data.incident?.status}`);
  if (progressRes.data.incident?.status !== "in_progress") throw new Error("Status failed to update to in_progress!");

  // 5. Step 7: Test [ MARK AS RESOLVED ]
  console.log("\n[5] Testing [ MARK AS RESOLVED ] (in_progress -> resolved)...");
  const resolveRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "resolved",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });

  console.log(`✓ Mark as Resolved HTTP Status: ${resolveRes.status}`);
  console.log(`✓ Updated Incident Status: ${resolveRes.data.incident?.status}`);
  console.log(`✓ Resolved At: ${resolveRes.data.incident?.resolvedAt}`);
  console.log(`✓ Resolved By: ${resolveRes.data.incident?.resolvedBy}`);
  if (resolveRes.data.incident?.status !== "resolved") throw new Error("Status failed to update to resolved!");

  // 6. Verify synchronization with SCER Core (Port 3000)
  console.log("\n[6] Verifying Synchronization with SCER Core on Port 3000...");
  const scerIncRes = await request(3000, "GET", "/api/incidents");
  const list = Array.isArray(scerIncRes.data) ? scerIncRes.data : (scerIncRes.data.incidents || []);
  const scerIncident = list.find((i) => i.id === incidentId);
  if (!scerIncident) throw new Error("Incident not found in SCER Core list!");
  console.log(`✓ SCER Core Incident ID: ${scerIncident.id}`);
  console.log(`✓ SCER Core Status: ${scerIncident.status}`);
  console.log(`✓ SCER Core Resolved By: ${scerIncident.resolvedBy}`);
  console.log(`✓ SCER Core Resolved At: ${scerIncident.resolvedAt}`);

  console.log("\n===============================================================================");
  console.log("🎉 ALL TESTS PASSED: COMPLETE LIVE RESPONSE WORKFLOW CONFIRMED!");
  console.log("===============================================================================\n");
}

runCompleteLiveResponseWorkflow().catch((err) => {
  console.error("❌ TEST FAILED:", err);
  process.exit(1);
});
