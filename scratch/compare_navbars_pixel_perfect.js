const SCER_URL = "http://localhost:3000";
const GEOPULSE_URL = "http://localhost:3002";

async function compareNavbars() {
  console.log("================================================================================");
  console.log("🔍 COMPARING NAVBAR HTML: SCER (/responders) vs GEOPULSE (/)");
  console.log("================================================================================");

  // 1. Authenticate as Root Controller
  const loginRes = await fetch(`${SCER_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "admin@scer.campus",
      password: process.env.ROOT_CONTROLLER_PASSWORD || "Admin@SCER2026!",
    }),
  });

  const cookies = loginRes.headers.get("set-cookie") || "";
  const cookieHeader = cookies.split(",").map(c => c.split(";")[0]).join("; ");

  // 2. Fetch SCER /responders HTML
  const scerRes = await fetch(`${SCER_URL}/responders`, {
    headers: { Cookie: cookieHeader },
  });
  const scerHtml = await scerRes.text();

  // 3. Fetch GeoPulse / HTML
  const geoRes = await fetch(`${GEOPULSE_URL}/`, {
    headers: { Cookie: cookieHeader },
  });
  const geoHtml = await geoRes.text();

  // Extract <header ... </header> from both
  const scerHeaderMatch = scerHtml.match(/<header[\s\S]*?<\/header>/);
  const geoHeaderMatch = geoHtml.match(/<header[\s\S]*?<\/header>/);

  if (!scerHeaderMatch || !geoHeaderMatch) {
    console.error("Could not find <header> tag in one or both pages!");
    return;
  }

  const scerHeader = scerHeaderMatch[0];
  const geoHeader = geoHeaderMatch[0];

  console.log("\n--- SCER /responders Header Summary ---");
  console.log("Contains 'Root Administrator':", scerHeader.includes("Root Administrator"));
  console.log("Contains 'ROOT CONTROLLER':", scerHeader.includes("ROOT CONTROLLER"));
  console.log("Contains 'LIVE RESPONSE':", scerHeader.includes("Live Response"));
  console.log("Contains 'Geo':", scerHeader.includes("Geo"));
  console.log("Contains 'Sign In':", scerHeader.includes("Sign In"));

  console.log("\n--- GeoPulse Header Summary ---");
  console.log("Contains 'Root Administrator':", geoHeader.includes("Root Administrator"));
  console.log("Contains 'ROOT CONTROLLER':", geoHeader.includes("ROOT CONTROLLER"));
  console.log("Contains 'LIVE RESPONSE':", geoHeader.includes("Live Response"));
  console.log("Contains 'Geo':", geoHeader.includes("Geo"));
  console.log("Contains 'Sign In':", geoHeader.includes("Sign In"));

  // Check right-side user block classes
  console.log("\n--- User Block Inspection ---");
  const scerUserBlock = scerHeader.slice(scerHeader.indexOf("Root Administrator") - 100, scerHeader.indexOf("Root Administrator") + 250);
  const geoUserBlock = geoHeader.slice(geoHeader.indexOf("Root Administrator") - 100, geoHeader.indexOf("Root Administrator") + 250);

  console.log("\nSCER User Block:\n", scerUserBlock);
  console.log("\nGeoPulse User Block:\n", geoUserBlock);
}

compareNavbars();
