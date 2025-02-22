import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enable modern features
    typedRoutes: true
  }
};

export default nextConfig;
