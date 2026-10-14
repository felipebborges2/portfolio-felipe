// Shared types for the typed content layer under src/data/.
// Keeping this independent from src/i18n avoids a circular import between
// the translation dictionary and the data files that reference languages.

export type Lang = "en" | "pt";

export type Localized<T> = Record<Lang, T>;

/** A string that is either the same in every language or translated. */
export type MaybeLocalized = string | Localized<string>;

export function localize(value: MaybeLocalized, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}
