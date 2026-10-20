import type { Metadata } from "next";
import LavandayDetail from "@/components/LavandayDetail";
import Footer from "@/components/Footer";
import { translations } from "@/i18n/translations";
import { isLang } from "@/i18n/paths";
import { pageMetadata } from "@/i18n/metadata";

const PATH = "/projects/lavanday-express";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const meta = translations[lang].meta;
  return pageMetadata(lang, {
    path: PATH,
    title: meta.lavandayTitle,
    description: meta.lavandayDescription,
    type: "article",
  });
}

export default function Page() {
  return (
    <>
      <main id="main">
        <LavandayDetail />
      </main>
      <Footer />
    </>
  );
}
