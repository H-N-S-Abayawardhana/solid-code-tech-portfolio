import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/solidcodelogo.png" },
      { pathname: "/logo.PNG" },
      { pathname: "/logo-dark.PNG" },
      { pathname: "/projects/**" },
      { pathname: "/*.png" },
      { pathname: "/*.jpg" },
      { pathname: "/*.PNG" },
    ],
  },
};

export default nextConfig;
