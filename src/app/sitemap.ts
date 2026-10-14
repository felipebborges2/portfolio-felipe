import type { MetadataRoute } from "next";
import { SITE_URL, localePath } from "@/i18n/paths";

const PATHS = ["/", "/projects/pcos-generalization"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) => {
    const languages = {
      en: `${SITE_URL}${localePath("en", path)}`,
      "pt-BR": `${SITE_URL}${localePath("pt", path)}`,
    };
    return [
      { url: languages.en, alternates: { languages } },
      { url: languages["pt-BR"], alternates: { languages } },
    ];
  });
}
