import type { Lang } from "./shared";

/**
 * Single source of truth for academic status.
 *
 * - `graduation` is only the expected graduation month (YYYY-MM), shown as
 *   "December 2026" / "dezembro de 2026" wherever the site mentions it.
 * - `graduated` controls the wording ("final-year student / expected" vs.
 *   "B.Sc."). It never flips on its own: set it to `true` by hand only after
 *   the degree has actually been conferred (colação de grau).
 */
export const profile = {
  graduation: "2026-12",
  graduated: false,
} as const;

const LOCALES: Record<Lang, string> = { en: "en-US", pt: "pt-BR" };

function graduationDate(): Date {
  const [year, month] = profile.graduation.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

/** "December 2026" / "dezembro de 2026". */
export function formatGraduationLong(lang: Lang): string {
  return new Intl.DateTimeFormat(LOCALES[lang], { month: "long", year: "numeric" }).format(
    graduationDate()
  );
}

/** "Dec 2026" / "dez/2026" — compact form for the timeline. */
export function formatGraduationShort(lang: Lang): string {
  const date = graduationDate();
  const month = new Intl.DateTimeFormat(LOCALES[lang], { month: "short" })
    .format(date)
    .replace(".", "");
  return lang === "pt" ? `${month}/${date.getFullYear()}` : `${month} ${date.getFullYear()}`;
}
