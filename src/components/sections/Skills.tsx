"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import AnimatedCard from "@/components/AnimatedCard";
import { useI18n } from "@/i18n/I18nProvider"; // 👈 import necessário

export default function Skills() {
  const { t } = useI18n(); // 👈 hook de tradução

  const skillGroups = [
    {
      title: t("skills.groups.frontend"),
      color: "text-[#9b2242]",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: t("skills.groups.backend"),
      color: "text-[#9b2242]",
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "GraphQL"],
    },
    {
      title: t("skills.groups.dbcloud"),
      color: "text-[#9b2242]",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: t("skills.groups.tools"),
      color: "text-[#9b2242]",
      skills: ["Git", "Figma", "Jest", "Vercel"],
    },
  ];

  const extraSkills = [
    "Agile Methodologies",
    "Design Patterns",
    "Clean Code",
    "API REST",
    "Microservices",
    "DevOps",
    "UI/UX Design",
    "Testing",
    "Performance Optimization",
  ];

  return (
    <section
      id="skills"
      className="section flex flex-col items-center text-center"
    >
      {/* Cabeçalho */}
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

      {/* Grupos de habilidades */}
      <Reveal delay={0.2}>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          {skillGroups.map((group, i) => (
            <AnimatedCard
              key={i}
              className="p-6 flex flex-col items-center text-center gap-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <h3
                  className={`text-lg font-semibold text-white mb-4 ${group.color}`}
                >
                  {group.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={j}
                      className="bg-[#1f1f1f] text-[#9b9b9b] text-sm px-4 py-2 rounded-full border border-[#2a2a2a] hover:border-[#9b2242] hover:text-white transition"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: j * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </Reveal>

      {/* Outras Competências */}
      <Reveal delay={0.4}>
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl">
          {extraSkills.map((skill, i) => (
            <motion.span
              key={i}
              className="bg-[#1f1f1f] text-[#9b9b9b] text-sm px-4 py-2 rounded-full border border-[#2a2a2a] hover:border-[#9b2242] hover:text-white transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
