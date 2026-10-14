"use client";
import AnimatedCard from "@/components/AnimatedCard";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider"; // 👈 import necessário

export default function Languages() {
  const { t } = useI18n(); // 👈 hook de tradução

  const languages = [
    {
      name: t("langs.list.pt.name"),
      level: t("langs.list.pt.level"),
      flag: "/flags/br.svg",
    },
    {
      name: t("langs.list.en.name"),
      level: t("langs.list.en.level"),
      flag: "/flags/uk.svg",
    },
    {
      name: t("langs.list.es.name"),
      level: t("langs.list.es.level"),
      flag: "/flags/sp.svg",
    },
    {
      name: t("langs.list.de.name"),
      level: t("langs.list.de.level"),
      flag: "/flags/de.svg",
    },
  ];

  return (
    <section
      id="languages"
      className="section flex flex-col items-center text-center"
    >
      <SectionHeading
        eyebrow={t("langs.heading")}
        title={t("langs.title")}
        highlight={t("langs.highlight")}
      />

      {/* Cards */}
      <Reveal delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
          {languages.map((lang, i) => (
            <AnimatedCard
              key={i}
              className="p-5 flex flex-col items-center justify-center text-center gap-3"
            >
              <div className="flex justify-center items-center h-12">
                <Image
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  width={48}
                  height={48}
                  className="rounded-md object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {lang.name}
                </h3>
                <p className="text-[#9b9b9b] text-sm">{lang.level}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
