import type { Lang } from "@/data/shared";

export const LANGS: Lang[] = ["en", "pt"];

export const SITE_URL = "https://felipebborges.vercel.app";

/** BCP 47 tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Lang, string> = { en: "en", pt: "pt-BR" };

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}

/**
 * English lives at the root ("/", "/projects/…"); Portuguese under "/pt".
 * Accepts paths with a hash, e.g. "/#about".
 */
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  if (path === "/") return "/pt";
  if (path.startsWith("/#")) return `/pt${path.slice(1)}`;
  return `/pt${path}`;
}

/** Same page in the other language, computed from a browser pathname. */
export function switchLanguagePath(target: Lang, pathname: string, hash = ""): string {
  const bare = pathname.replace(/^\/(en|pt)(?=\/|$)/, "") || "/";
  const base = localePath(target, bare);
  return hash ? `${base}${hash}` : base;
}
