"use client";
import React, { createContext, useContext, useMemo } from "react";
import { MotionConfig } from "framer-motion";
import { translations } from "./translations";
import { localePath } from "./paths";
import type { Lang } from "@/data/shared";

type I18nCtx = {
  lang: Lang;
  t: (path: string) => string;
  /** Prefixes an internal path for the active language ("/#about" → "/pt#about"). */
  href: (path: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

/**
 * The active language comes from the URL (/ = English, /pt = Portuguese),
 * resolved by the [lang] layout on the server — so the prerendered HTML,
 * <html lang> and metadata are already in the right language.
 */
export function I18nProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const value = useMemo(() => {
    const dict = translations[lang];
    const t = (path: string) => {
      let cur: unknown = dict;
      for (const p of path.split(".")) {
        cur = cur && typeof cur === "object" ? (cur as Record<string, unknown>)[p] : undefined;
      }
      return typeof cur === "string" ? cur : path;
    };
    return { lang, t, href: (path: string) => localePath(lang, path) };
  }, [lang]);

  return (
    <I18nContext.Provider value={value}>
      {/* Honors prefers-reduced-motion for every framer-motion animation. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
