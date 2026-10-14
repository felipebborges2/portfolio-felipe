"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import AnimatedCard from "@/components/AnimatedCard";
import { useI18n } from "@/i18n/I18nProvider";
import { skillGroups } from "@/data/skills";
import { localize } from "@/data/shared";

export default function Skills() {
  const { t, lang } = useI18n();

  return (
    <section
      id="skills"
      className="section flex flex-col items-center text-center"
    >
      <Reveal>
        <div className="mb-10">
          <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
            {t("skills.heading")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            {t("skills.title")}{" "}
            <span className="text-[#9b2242]">{t("skills.highlight")}</span>
          </h2>
          <p className="text-[#9b9b9b] mt-3 text-sm md:text-base max-w-2xl">
            {t("skills.description")}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full items-stretch">
          {skillGroups.map((group, i) => (
            <AnimatedCard
              key={group.id}
              align="start"
              className="p-6 flex flex-col gap-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="w-full flex flex-col gap-3"
              >
                <h3 className="text-base font-semibold text-[#9b2242]">
                  {t(`skills.groups.${group.titleKey}`)}
                </h3>

                <ul className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={localize(skill.name, lang)}
                      className="bg-[#1f1f1f] text-sm px-3 py-2 rounded-md border border-[#2a2a2a] hover:border-[#9b2242] transition"
                    >
                      <span className="text-white">{localize(skill.name, lang)}</span>
                      {/* Where it was applied — shown only when documented. */}
                      {skill.context && (
                        <span className="block text-xs text-[#9b9b9b] leading-snug mt-0.5">
                          {skill.context[lang]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
