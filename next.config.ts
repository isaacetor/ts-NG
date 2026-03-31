// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export', 
//   assetPrefix: './', 
// //  basePath: '/uk',
//   /* config options here */
//     allowedDevOrigins: [
//     "http://192.168.68.101:3000",
//   ],
//     typescript: {
//     ignoreBuildErrors: true,
//   },

//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  assetPrefix: './', 
//  basePath: '/uk',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;