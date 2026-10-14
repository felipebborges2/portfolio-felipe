import type { Metadata } from "next";
import type { Lang } from "@/data/shared";
import { localePath } from "./paths";

type PageMeta = {
  /** Path in English form, e.g. "/" or "/projects/pcos-generalization". */
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
};

/**
 * Full per-page metadata: canonical (self, never the other language),
 * reciprocal hreflang with x-default → English, OpenGraph and Twitter card.
 * Built in one place because a page-level `openGraph` replaces the layout's
 * entirely — including the generated image — so every page sets all of it.
 */
export function pageMetadata(lang: Lang, { path, title, description, type = "website" }: PageMeta): Metadata {
  const url = localePath(lang, path);
  const image = `/${lang}/opengraph-image`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: localePath("en", path), "pt-BR": localePath("pt", path), "x-default": localePath("en", path) },
    },
    openGraph: {
      type,
      siteName: "Felipe Borges",
      url,
      title,
      description,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      alternateLocale: lang === "pt" ? "en_US" : "pt_BR",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
