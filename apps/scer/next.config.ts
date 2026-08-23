
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@scer/ui"],
  serverExternalPackages: ["@prisma/client", "prisma", "@scer/db-scer"],
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, PATCH, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization, X-Requested-With, X-Telegram-Bot-Api-Secret-Token" },
          { key: "Access-Control-Max-Age", value: "86400" },
        ],
      },
    ];
  },
};

export default nextConfig;

