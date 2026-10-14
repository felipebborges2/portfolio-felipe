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
  // English is served at the root from app/[lang] with lang = "en"
  // ("/" → "/en", "/projects/…" → "/en/projects/…"); Portuguese lives under
  // "/pt". These run after static files and routes (robots.txt, sitemap.xml,
  // images, PDFs) but before the dynamic [lang] route, so any other root URL —
  // including unknown ones like "/foo" — is served by the English tree and
  // gets the English 404 inside the normal layout.
  async rewrites() {
    return [
      { source: "/", destination: "/en" },
      { source: "/:path((?!en(?:/|$)|pt(?:/|$)|_next/).+)", destination: "/en/:path" },
    ];
  },
};

export default nextConfig;
