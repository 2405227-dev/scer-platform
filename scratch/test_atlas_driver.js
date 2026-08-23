import { MongoClient } from "mongodb";
import fs from "fs";

const env = fs.readFileSync("packages/db-scer/prisma/.env", "utf-8");
let url = "";
for (const line of env.split("\n")) {
  const match = line.match(/^\s*DATABASE_URL\s*=\s*(.*)?\s*$/);
  if (match && match[1]) {
    url = match[1].trim().replace(/^["']|["']$/g, "");
    break;
  }
}

console.log("Testing connection to MongoDB Atlas with official mongodb driver...");

const client = new MongoClient(url, {
  serverSelectionTimeoutMS: 5000,
});

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas cluster!");
    const dbs = await client.db().admin().listDatabases();
    console.log("Databases on cluster:", dbs.databases.map(d => d.name));
  } catch (err) {
    console.error("Atlas Connection Error Details:");
    console.error("- Name:", err.name);
    console.error("- Message:", err.message);
    console.error("- Code:", err.code);
    console.error("- CodeName:", err.codeName);
  } finally {
    await client.close();
  }
}

run();
