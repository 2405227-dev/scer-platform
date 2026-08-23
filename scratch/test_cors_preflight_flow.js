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

async function runCorsTest() {
  console.log("===============================================================");
  console.log("TESTING CORS & STATUS TRANSITIONS: Port 3004 -> Port 3000");
  console.log("===============================================================");

  // 1. Create Incident
  console.log("\n[1] Creating Incident on Port 3000 with Origin: http://localhost:3004 ...");
  const createRes = await request(3000, "POST", "/api/incidents", {
    type: "Campus Gas Leak Alert",
    severity: "HIGH",
    location: "Science Building Basement",
    description: "Gas sensor alarm active.",
    status: "pending",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Create Status: ${createRes.status}`);
  console.log(`✓ Access-Control-Allow-Origin: ${createRes.headers["access-control-allow-origin"]}`);
  const incidentId = createRes.data.incident.id;

  // 2. Preflight OPTIONS request for status endpoint
  console.log(`\n[2] Sending Browser OPTIONS Preflight to /api/incidents/${incidentId}/status ...`);
  const optionsRes = await request(3000, "OPTIONS", `/api/incidents/${incidentId}/status`, null, {
    Origin: "http://localhost:3004",
    "Access-Control-Request-Method": "POST",
    "Access-Control-Request-Headers": "content-type",
  });
  console.log(`✓ OPTIONS Status Code: ${optionsRes.status}`);
  console.log(`✓ Access-Control-Allow-Origin: ${optionsRes.headers["access-control-allow-origin"]}`);
  console.log(`✓ Access-Control-Allow-Methods: ${optionsRes.headers["access-control-allow-methods"]}`);
  console.log(`✓ Access-Control-Allow-Headers: ${optionsRes.headers["access-control-allow-headers"]}`);

  if (!optionsRes.headers["access-control-allow-origin"]) {
    throw new Error("Missing Access-Control-Allow-Origin header in OPTIONS response!");
  }

  // 3. Test Accept Incident (pending -> accepted)
  console.log(`\n[3] Testing 'Accept Incident' (pending -> accepted) with Origin: http://localhost:3004 ...`);
  const acceptRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "accepted",
    assignedTo: "resp-hazmat-01",
    assignedToName: "Capt. Reynolds",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Accept Status: ${acceptRes.status}`);
  console.log(`✓ Access-Control-Allow-Origin: ${acceptRes.headers["access-control-allow-origin"]}`);
  console.log(`✓ Incident Status: ${acceptRes.data.incident.status}`);
  if (acceptRes.data.incident.status !== "accepted") throw new Error("Status was not updated to accepted");

  // 4. Test Start Response (accepted -> in_progress)
  console.log(`\n[4] Testing 'Start Response' (accepted -> in_progress) with Origin: http://localhost:3004 ...`);
  const progressRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "in_progress",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Start Response Status: ${progressRes.status}`);
  console.log(`✓ Access-Control-Allow-Origin: ${progressRes.headers["access-control-allow-origin"]}`);
  console.log(`✓ Incident Status: ${progressRes.data.incident.status}`);
  if (progressRes.data.incident.status !== "in_progress") throw new Error("Status was not updated to in_progress");

  // 5. Test Mark as Resolved (in_progress -> resolved)
  console.log(`\n[5] Testing 'Mark as Resolved' (in_progress -> resolved) with Origin: http://localhost:3004 ...`);
  const resolveRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "resolved",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Mark as Resolved Status: ${resolveRes.status}`);
  console.log(`✓ Access-Control-Allow-Origin: ${resolveRes.headers["access-control-allow-origin"]}`);
  console.log(`✓ Incident Status: ${resolveRes.data.incident.status}`);
  console.log(`✓ Resolved At: ${resolveRes.data.incident.resolvedAt}`);
  if (resolveRes.data.incident.status !== "resolved") throw new Error("Status was not updated to resolved");

  // 6. Test Invalid Transition (resolved -> in_progress -> 400)
  console.log(`\n[6] Testing Server State Machine Rejection (resolved -> in_progress) ...`);
  const invalidRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "in_progress",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Invalid Transition Status: ${invalidRes.status} (Expected 400)`);
  if (invalidRes.status !== 400) throw new Error("State machine allowed invalid transition!");

  console.log("\n===============================================================");
  console.log("🎉 ALL CORS & CROSS-ORIGIN STATUS WORKFLOW TESTS PASSED!");
  console.log("===============================================================\n");
}

runCorsTest().catch((err) => {
  console.error("❌ TEST FAILED:", err);
  process.exit(1);
});
