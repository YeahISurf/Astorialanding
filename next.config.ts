import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Remove env config as it's not needed for Vercel deployment
  experimental: {
    // Enable modern features
    typedRoutes: true
  }
};

export default nextConfig;
