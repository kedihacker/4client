import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images :{
    loader : "custom",
loaderFile: "src/app/opti.ts"
  }
  /* config options here */
};

export default nextConfig;
