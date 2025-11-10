"use client";
import AnimatedCard from "@/components/AnimatedCard";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider"; // 👈 import necessário

export default function About() {
  const { t } = useI18n(); // 👈 acesso às traduções

  return (
    <section id="about" className="section flex flex-col items-center text-center">
      <Reveal>
        <div className="mb-10">
          <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
            {t("about.heading")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            About <span className="text-[#9b2242]">Me</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <AnimatedCard className="max-w-4xl mx-auto p-8 md:p-10 text-left leading-relaxed">
          <p className="text-[#9b9b9b] mb-4">{t("about.p1")}</p>
          <p className="text-[#9b9b9b] mb-4">{t("about.p2")}</p>
          <p className="text-[#9b9b9b] mb-4">{t("about.p3")}</p>
          <p className="text-[#9b9b9b] mb-4">{t("about.p4")}</p>
          <p className="text-[#9b9b9b] mb-4">{t("about.p5")}</p>
          <p className="text-[#9b9b9b]">{t("about.p6")}</p>

          {/* Botões de download do currículo */}
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
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
        </AnimatedCard>
      </Reveal>
    </section>
  );
}
