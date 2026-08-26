"use client";
import AnimatedCard from "@/components/AnimatedCard";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { highlights } from "@/data/about";

export default function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="section flex flex-col items-center text-center">
      <Reveal>
        <div className="mb-10">
          <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
            {t("about.heading")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {t("about.title")} <span className="text-[#9b2242]">{t("about.highlight")}</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="prose-measure text-left space-y-4">
          <p className="text-[#9b9b9b] leading-relaxed">{t("about.p1")}</p>
          <p className="text-[#9b9b9b] leading-relaxed">{t("about.p2")}</p>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full">
          {highlights.map((h, i) => (
            <AnimatedCard key={i} className="p-5 flex flex-col items-center text-center gap-2">
              <p className="text-2xl font-bold text-[#9b2242]">{h.value}</p>
              <p className="text-[#9b9b9b] text-sm leading-snug">{h.label[lang]}</p>
            </AnimatedCard>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <AnimatedCard
            href="/curriculo-felipe-borges-pt.pdf"
            download
            showDownloadIcon
            label={t("about.cvPt")}
            className="bg-[#9b2242] hover:brightness-110 text-white px-6 py-4 rounded-lg"
          />

          <AnimatedCard
            href="/curriculum-felipe-borges-en.pdf"
            download
            showDownloadIcon
            label={t("about.cvEn")}
            className="bg-[#9b2242] border border-[#2a2a2a] hover:border-[#9b2242] hover:text-[#9b2242] text-white px-6 py-4 rounded-lg"
          />
        </div>
      </Reveal>
    </section>
  );
}
