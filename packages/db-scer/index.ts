import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { PrismaClient } from "./src/generated/client/index.js";

export { PrismaClient };

// Ensure DATABASE_URL is available from local prisma/.env if not present in process.env
if (!process.env.DATABASE_URL) {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const envPath = path.join(__dirname, "prisma", ".env");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const match = line.match(/^\s*DATABASE_URL\s*=\s*(.*)?\s*$/);
        if (match && match[1]) {
          process.env.DATABASE_URL = match[1].trim().replace(/^["']|["']$/g, "");
          break;
        }
      }
    }
  } catch (err) {
    // Ignore error
  }
}

if (!process.env.PRISMA_QUERY_ENGINE_LIBRARY) {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const enginePath = path.join(__dirname, "src", "generated", "client", "query_engine-windows.dll.node");
    if (fs.existsSync(enginePath)) {
      process.env.PRISMA_QUERY_ENGINE_LIBRARY = enginePath;
    }
  } catch (err) {}
}

export const db = new PrismaClient();
export * from "./src/auth";
export * from "./src/events";
export * from "./src/simulator";
export * from "./src/LiveEventInjector";
