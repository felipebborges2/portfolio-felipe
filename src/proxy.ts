import { NextResponse, type NextRequest } from "next/server";

/**
 * Route-only language rewrite. English is served at the root ("/",
 * "/projects/…") from app/[lang] with lang = "en"; Portuguese lives under
 * "/pt" and is matched by the [lang] route directly, so it never reaches
 * this function.
 *
 * Done here rather than in next.config.ts rewrites because on Vercel the
 * config rewrite of "/" was not applied to the router's segment-prefetch
 * requests (/?_rsc=…), which returned 404 and forced full reloads.
 *
 * No language detection and no cookies: the URL alone decides the language.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/en${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Only English page URLs at the root. Excluded:
     * - _next/ (static chunks, image optimizer, RSC internals)
     * - en/ and pt/ (already language-prefixed, incl. OpenGraph images)
     * - favicon.ico, robots.txt, sitemap.xml
     * - any path with a file extension: public/ assets (images, SVGs, PDFs)
     */
    "/((?!_next/|en(?:/|$)|pt(?:/|$)|favicon\\.ico$|robots\\.txt$|sitemap\\.xml$|.*\\.[A-Za-z0-9]+$).*)",
  ],
};
