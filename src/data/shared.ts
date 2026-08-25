// Shared types for the typed content layer under src/data/.
// Keeping this independent from src/i18n avoids a circular import between
// the translation dictionary and the data files that reference languages.

export type Lang = "en" | "pt";

export type Localized<T> = Record<Lang, T>;
