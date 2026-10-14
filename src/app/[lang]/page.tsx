import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Skills from "@/components/sections/Skills";
import Languages from "@/components/sections/Languages";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { personJsonLd, publicationsJsonLd } from "@/data/structured-data";
import { isLang } from "@/i18n/paths";
import { pageMetadata } from "@/i18n/metadata";
import { translations } from "@/i18n/translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const meta = translations[lang].meta;
  return pageMetadata(lang, { path: "/", title: meta.title, description: meta.description });
}

export default function Page() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personJsonLd(), ...publicationsJsonLd()] }} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Skills />
        <Languages />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
