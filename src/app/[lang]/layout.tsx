import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { I18nProvider } from "@/i18n/I18nProvider";
import { translations } from "@/i18n/translations";
import { HTML_LANG, LANGS, SITE_URL, isLang } from "@/i18n/paths";

type Params = { params: Promise<{ lang: string }> };

// Only /en (served at "/") and /pt are prerendered; any other first segment
// is rejected below with notFound().
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Site-wide defaults only. canonical, hreflang, OpenGraph and Twitter are set
// per page (src/i18n/metadata.ts), so the 404 doesn't inherit the home's.
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return { metadataBase: new URL(SITE_URL) };
  const meta = translations[lang].meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: Params & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={HTML_LANG[lang]}>
      <body className="bg-bg text-white">
        <a href="#main" className="skip-link">
          {translations[lang].nav.skip}
        </a>
        <I18nProvider lang={lang}>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
