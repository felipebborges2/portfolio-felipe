import type { Metadata } from "next";
import PcosDetail from "@/components/PcosDetail";
import Footer from "@/components/Footer";
import { translations } from "@/i18n/translations";
import { isLang } from "@/i18n/paths";
import { pageMetadata } from "@/i18n/metadata";

const PATH = "/projects/pcos-generalization";

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
    title: meta.pcosTitle,
    description: meta.pcosDescription,
    type: "article",
  });
}

export default function Page() {
  return (
    <>
      <main id="main">
        <PcosDetail />
      </main>
      <Footer />
    </>
  );
}
