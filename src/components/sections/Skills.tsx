"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import AnimatedCard from "@/components/AnimatedCard";
import { useI18n } from "@/i18n/I18nProvider";
import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import { localize } from "@/data/shared";

export default function Skills() {
  const { t, lang } = useI18n();

  return (
    <section
      id="skills"
      className="section flex flex-col items-center text-center"
    >
      <SectionHeading
        eyebrow={t("skills.heading")}
        title={t("skills.title")}
        highlight={t("skills.highlight")}
        description={t("skills.description")}
      />

      <Reveal delay={0.2}>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full items-stretch">
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
                <h3 className="text-base font-semibold text-accent-fg">
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
