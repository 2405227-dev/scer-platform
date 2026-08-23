import { MongoClient } from "mongodb";
import fs from "fs";

const env = fs.readFileSync("packages/db-scer/prisma/.env", "utf-8");
let baseUri = "";
for (const line of env.split("\n")) {
  const match = line.match(/^\s*DATABASE_URL\s*=\s*(.*)?\s*$/);
  if (match && match[1]) {
    baseUri = match[1].trim().replace(/^["']|["']$/g, "");
    break;
  }
}

async function tryConnect(label, uri, options = {}) {
  console.log(`Testing variant [${label}]...`);
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 4000,
    ...options
  });
  try {
    await client.connect();
    console.log(` SUCCESS with [${label}]! Connected to MongoDB Atlas!`);
    const dbs = await client.db().admin().listDatabases();
    console.log("Databases:", dbs.databases.map(d => d.name));
    return true;
  } catch (err) {
    console.log(` FAILED [${label}]: ${err.name} - ${err.message} (${err.codeName || err.code})`);
    return false;
  } finally {
    try { await client.close(); } catch (_) {}
  }
}

async function main() {
  // Variant 1: As-is in .env
  await tryConnect("As-is in .env", baseUri);

  // Variant 2: Without authSource
  const withoutAuthSource = baseUri.replace("authSource=admin&", "").replace("&authSource=admin", "");
  await tryConnect("Without authSource", withoutAuthSource);

  // Variant 3: authMechanism SCRAM-SHA-1
  await tryConnect("authMechanism=SCRAM-SHA-1", withoutAuthSource, { authMechanism: "SCRAM-SHA-1" });

  // Variant 4: authMechanism SCRAM-SHA-256
  await tryConnect("authMechanism=SCRAM-SHA-256", withoutAuthSource, { authMechanism: "SCRAM-SHA-256" });

  // Variant 5: authSource=scer
  const authSourceScer = withoutAuthSource.replace("?", "?authSource=scer&");
  await tryConnect("authSource=scer", authSourceScer);
}

main();
