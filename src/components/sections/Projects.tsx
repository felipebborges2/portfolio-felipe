"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import AnimatedCard from "@/components/AnimatedCard";
import Lightbox from "@/components/Lightbox";
import { useI18n } from "@/i18n/I18nProvider";

export default function Projects() {
  const { t } = useI18n(); // acesso às traduções
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const projects = [
    {
      title: "Europedia - Find Your Destination",
      description: t("projects.europediaDesc"),
        image: "/projects/europedia.jpeg",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://europedia.vercel.app",
      repo: "https://github.com/felipebborges2/europedia",
    },
    {
      title: "CourtView — NBA Explorer",
      description: t("projects.courtviewDesc"),
        image: "/projects/courtview.jpeg",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
      link: "https://courtview.vercel.app",
      repo: "https://github.com/felipebborges2/courtview",
    },
    {
  title: "FinZeit – Finance Manager",
  description: t("projects.finzeitDesc"),
  image: "/projects/finzeit.jpeg",
  tags: ["Next.js", "Tailwind", "Recharts", "MongoDB", "React"],
  link: "https://finzeit.vercel.app",
  repo: "https://github.com/felipebborges2/finzeit",
},
  ];

  return (
    <section id="projects" className="section flex flex-col items-center text-center">
      <div className="mb-10">
        <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
          {t("projects.heading")}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          {t("projects.title")}{" "}
          <span className="text-[#9b2242]">{t("projects.highlight")}</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-4xl">
        {projects.map((p, i) => (
          <AnimatedCard
            key={i}
            className="p-6 flex flex-col items-start gap-3 w-full h-full"
          >
            {p.image && (
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer"
                onClick={() => {
                  setSelectedImage(p.image ?? null);
                  setSelectedAlt(p.title);
                }}
              />
            )}
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="text-[#9b9b9b] leading-relaxed text-sm">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {p.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs text-[#9b9b9b] bg-[#1f1f1f] rounded-md px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9b2242] transition"
              >
                {t("projects.live")}
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9b2242] transition"
              >
                {t("projects.github")}
              </a>
            </div>
          </AnimatedCard>
        ))}
      </div>
      {selectedImage && (
        <Lightbox
          src={selectedImage}
          alt={selectedAlt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
