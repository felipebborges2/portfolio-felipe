"use client";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import { useI18n } from "@/i18n/I18nProvider"; // 👈 import adicionado

export default function Hero() {
  const { t } = useI18n(); // 👈 acesso às traduções

  return (
    <section id="home" className="section pt-32 md:pt-36">
      <Reveal delay={0}>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t("hero.title")}
            </motion.h1>

            <p className="text-[#9b9b9b] max-w-xl mt-2">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-accent">
                {t("hero.ctaContact")}
              </a>
              <a href="#projects" className="btn">
                {t("hero.ctaProjects")}
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                className="link-subtle"
                href="https://github.com/felipebborges2"
                target="_blank"
              >
                <Github />
              </a>
              <a
                className="link-subtle"
                href="https://www.linkedin.com/in/felipebborges"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                className="link-subtle"
                href="mailto:felipe.borges@ufcspa.edu.br"
              >
                <Mail />
              </a>
            </div>
          </div>

          <motion.div
            className="justify-self-center w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-[#1f1f1f] shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px #9b2242" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Coloque uma foto em /public/felipe.jpg */}
            <img
              src="/felipe.jpeg"
              alt="Felipe Borges"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
