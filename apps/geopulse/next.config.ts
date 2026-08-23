import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@scer/db-geopulse", "@scer/db-scer", "@scer/ui"],
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;
