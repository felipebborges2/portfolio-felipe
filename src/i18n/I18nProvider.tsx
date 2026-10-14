"use client";
import React, { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { translations } from "./translations";
type Lang = keyof typeof translations;

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

// The chosen language lives in localStorage; useSyncExternalStore reads it
// without a setState-in-effect round trip, and falls back to "en" on the
// server so the prerendered HTML is stable.
const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "pt" || saved === "en" ? saved : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const t = useMemo(() => {
    const dict = translations[lang];
    return (path: string) => {
      const parts = path.split(".");
      let cur: unknown = dict;
      for (const p of parts) {
        cur = cur && typeof cur === "object" ? (cur as Record<string, unknown>)[p] : undefined;
      }
      return typeof cur === "string" ? cur : path;
    };
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        localStorage.setItem(STORAGE_KEY, l);
        listeners.forEach((notify) => notify());
      },
      t,
    }),
    [lang, t]
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
