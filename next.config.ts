import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    PORT: '3000'
  },
  server: {
    port: 3000
  }
};

export default nextConfig;
