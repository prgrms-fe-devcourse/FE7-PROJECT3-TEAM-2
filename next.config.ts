import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lfkxloulmqeonuzaudtt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img1.kakaocdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "img1.kakaocdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
