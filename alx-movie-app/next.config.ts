import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // ...
    },
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
