import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable Fast Refresh
  reactStrictMode: true,
  // Improve HMR and file watching, especially for WSL2
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding once the first file changed
        ignored: /node_modules/,
      };
    }
    return config;
  },
  turbopack: {
  }
};


export default nextConfig;
