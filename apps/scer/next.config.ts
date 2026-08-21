
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/api/notifications/:path*",
          destination: "http://localhost:3003/api/notifications/:path*",
        },
      ],
    };
  },
};

export default nextConfig;

