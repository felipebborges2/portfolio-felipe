"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import AnimatedCard from "@/components/AnimatedCard";
import { useI18n } from "@/i18n/I18nProvider";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const { t } = useI18n();

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
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          {skillGroups.map((group, i) => (
            <AnimatedCard
              key={group.id}
              className="p-6 flex flex-col items-center text-center gap-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <h3 className="text-lg font-semibold text-[#9b2242] mb-4">
                  {t(`skills.groups.${group.titleKey}`)}
                </h3>

                <div className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 bg-[#1f1f1f] text-sm px-3 py-2 rounded-md border border-[#2a2a2a] hover:border-[#9b2242] transition"
                    >
                      <span className="text-white">{skill.name}</span>
                      <span className="text-[10px] uppercase tracking-wide text-[#9b9b9b]">
                        {t(`skills.levels.${skill.level}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
