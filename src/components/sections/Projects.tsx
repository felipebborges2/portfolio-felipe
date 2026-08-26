"use client";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import Lightbox from "@/components/Lightbox";
import { useI18n } from "@/i18n/I18nProvider";
import { projects } from "@/data/projects";

export default function Projects() {
  const { t, lang } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

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

      {/*
        flex-wrap (not grid) so an incomplete last row centers itself
        instead of hanging left under a rigid column grid.
      */}
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full">
        {projects.map((p) => {
          const content = p.content[lang];
          return (
            <AnimatedCard
              key={p.id}
              align="start"
              className="p-6 flex flex-col gap-3 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <img
                src={p.image.src}
                alt={p.image.alt[lang]}
                className="w-full h-40 object-cover rounded-md mb-1 cursor-pointer"
                onClick={() => {
                  setSelectedImage(p.image.src);
                  setSelectedAlt(p.image.alt[lang]);
                }}
              />

              <div className="flex items-center justify-between w-full gap-2">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                {p.metric && (
                  <span className="shrink-0 text-xs font-semibold text-[#9b2242] bg-[#9b2242]/10 border border-[#9b2242]/30 rounded-md px-2 py-1">
                    {p.metric.label[lang]} {p.metric.value}
                  </span>
                )}
              </div>

              <dl className="text-sm space-y-2 w-full">
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b]/70 font-semibold">
                    {t("projects.problemLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed line-clamp-2">{content.problem}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b]/70 font-semibold">
                    {t("projects.approachLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed line-clamp-2">{content.approach}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b]/70 font-semibold">
                    {t("projects.resultLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed line-clamp-2">{content.result}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#9b9b9b] bg-[#1f1f1f] rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* mt-auto pins the link row to the card's bottom edge, so
                  cards with shorter copy still line up across a row. */}
              <div className="mt-auto pt-2 flex gap-3">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    {t("projects.live")}
                  </a>
                )}
                <a
                  href={p.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  <Github className="w-3.5 h-3.5" aria-hidden="true" />
                  {t("projects.github")}
                </a>
              </div>
            </AnimatedCard>
          );
        })}
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
