"use client";
import { useState } from "react";
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-5xl">
        {projects.map((p) => {
          const content = p.content[lang];
          return (
            <AnimatedCard key={p.id} className="p-6 flex flex-col items-start gap-3 w-full h-full text-left">
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
                  <dd className="text-[#9b9b9b] leading-relaxed">{content.problem}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b]/70 font-semibold">
                    {t("projects.approachLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed">{content.approach}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b]/70 font-semibold">
                    {t("projects.resultLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed">{content.result}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#9b9b9b] bg-[#1f1f1f] rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#9b2242] transition"
                  >
                    {t("projects.live")}
                  </a>
                )}
                <a
                  href={p.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#9b2242] transition"
                >
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
