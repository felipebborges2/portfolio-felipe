"use client";
import AnimatedCard from "@/components/AnimatedCard";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { highlights } from "@/data/about";
import SectionHeading from "@/components/SectionHeading";
import { formatGraduationLong, profile } from "@/data/profile";

export default function About() {
  const { t, lang } = useI18n();
  const p1 = t(profile.graduated ? "about.p1Graduated" : "about.p1").replace(
    "{graduation}",
    formatGraduationLong(lang)
  );

  return (
    <section id="about" className="section flex flex-col items-center text-center">
      <SectionHeading
        eyebrow={t("about.heading")}
        title={t("about.title")}
        highlight={t("about.highlight")}
      />

      <Reveal delay={0.2}>
        <div className="prose-measure text-left space-y-4">
          <p className="text-[#9b9b9b] leading-relaxed">{p1}</p>
          <p className="text-[#9b9b9b] leading-relaxed">{t("about.p2")}</p>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full">
          {highlights.map((h, i) => (
            <AnimatedCard key={i} className="p-5 flex flex-col items-center text-center gap-2">
              <p className="text-2xl font-bold text-[#9b2242]">{h.value[lang]}</p>
              <p className="text-[#9b9b9b] text-sm leading-snug">{h.label[lang]}</p>
            </AnimatedCard>
          ))}
        </div>
      </Reveal>

      {/*
        TODO (blocks publishing): both CV PDFs in public/ still describe the
        acoustic neuroma project and predate the TCC, graduation date and
        OncoPredict. Replace curriculo-felipe-borges-pt.pdf and
        curriculum-felipe-borges-en.pdf before the site is published.
      */}
      <Reveal delay={0.4}>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-stretch gap-4 w-full sm:w-auto">
          <AnimatedCard
            href="/curriculo-felipe-borges-pt.pdf"
            download
            showDownloadIcon
            label={t("about.cvPt")}
            className="bg-[#9b2242] hover:brightness-110 text-white px-6 py-4 rounded-lg sm:w-64"
          />

          <AnimatedCard
            href="/curriculum-felipe-borges-en.pdf"
            download
            showDownloadIcon
            label={t("about.cvEn")}
            className="bg-[#9b2242] hover:brightness-110 text-white px-6 py-4 rounded-lg sm:w-64"
          />
        </div>
      </Reveal>
    </section>
  );
}
