import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "favicon.vemetric.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  allowedDevOrigins: [
    'enquiries-tub-march-heaven.trycloudflare.com',
  ],
};

export default nextConfig;