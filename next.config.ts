import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The design system ships TypeScript source rather than a compiled bundle:
  // it is consumed only by Next apps, so letting Next compile it avoids a
  // build step and a whole class of "use client" directive problems.
  transpilePackages: ["@farnazshahriari/design-system"],
  /* config options here */
};

export default nextConfig;
