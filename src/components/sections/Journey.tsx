"use client";
import AnimatedCard from "@/components/AnimatedCard";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider"; // 👈 import necessário

export default function Journey() {
  const { t } = useI18n(); // 👈 hook de tradução

  const timeline = [
    {
      year: "2021 – Current",
      institution: t("journey.uni.institution"),
      function: t("journey.uni.function"),
      desc: t("journey.uni.desc"),
    },
    {
      year: "2023 – 2024",
      institution: t("journey.intern.institution"),
      function: t("journey.intern.function"),
      desc: t("journey.intern.desc"),
    },
    {
      year: "2017 – 2020",
      institution: t("journey.school.institution"),
      function: t("journey.school.function"),
      desc: t("journey.school.desc"),
    },
  ];

  return (
    <section
      id="journey"
      className="section flex flex-col items-center text-center"
    >
      <Reveal>
        <div className="mb-10">
          <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
            {t("journey.heading")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {t("journey.title")}{" "}
            <span className="text-[#9b2242]">{t("journey.highlight")}</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="space-y-6 max-w-3xl w-full">
          {timeline.map((step, i) => (
            <AnimatedCard key={i} className="p-6 md:p-8 text-left">
              <p className="text-sm text-[#9b2242] font-semibold mb-1">
                {step.year}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {step.institution}
              </h3>
              <p className="text-[#b0b0b0] text-sm mb-3">{step.function}</p>
              <p className="text-[#9b9b9b] leading-relaxed text-sm">
                {step.desc}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
