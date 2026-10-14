import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    // Root layout lives in app/[lang]; this renders app/global-not-found.tsx
    // for URLs that don't match any route.
    globalNotFound: true,
  },
  // Language routing (English at the root, Portuguese under /pt) lives in
  // src/proxy.ts.
};

export default nextConfig;
