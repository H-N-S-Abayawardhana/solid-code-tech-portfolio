import type { NextConfig } from "next";
import { LOGO_CACHE_BUST } from "./lib/site";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/solidcodelogo.png",
        search: `?v=${LOGO_CACHE_BUST}`,
      },
    ],
  },
};

export default nextConfig;
