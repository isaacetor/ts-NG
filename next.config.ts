import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */
    allowedDevOrigins: [
    "http://192.168.68.101:3000",
  ],
    typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;


