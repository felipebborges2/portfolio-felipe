"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import Lightbox from "@/components/Lightbox";
import { useI18n } from "@/i18n/I18nProvider";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import { localize } from "@/data/shared";

export default function Projects() {
  const { t, lang, href } = useI18n();
  const [selected, setSelected] = useState<{ src: string; width: number; height: number; alt: string } | null>(null);

  return (
    <section id="projects" className="section flex flex-col items-center text-center">
      <SectionHeading
        eyebrow={t("projects.heading")}
        title={t("projects.title")}
        highlight={t("projects.highlight")}
      />

      {/*
        flex-wrap (not grid) so an incomplete last row centers itself
        instead of hanging left under a rigid column grid.
      */}
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full">
        {projects.map((p) => {
          const content = p.content[lang];
          const title = localize(p.title, lang);
          return (
            <AnimatedCard
              key={p.id}
              align="start"
              className="p-6 flex flex-col gap-3 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              {p.image ? (
                <button
                  type="button"
                  aria-label={`${t("projects.enlarge")} ${title}`}
                  onClick={() => setSelected({ ...p.image!, alt: p.image!.alt[lang] })}
                  className="block w-full mb-1 rounded-md cursor-zoom-in"
                >
                  <Image
                    src={p.image.src}
                    width={p.image.width}
                    height={p.image.height}
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    alt={p.image.alt[lang]}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </button>
              ) : (
                // Typographic header, same footprint as a screenshot so
                // cards stay aligned across the row. No invented imagery.
                <div className="w-full h-40 rounded-md mb-1 border border-[#2a2a2a] bg-[#1a1a1a] p-4 flex flex-col justify-between">
                  {p.eyebrow && (
                    <p className="uppercase tracking-wide text-[11px] font-semibold text-[#9b9b9b]">
                      {p.eyebrow[lang]}
                    </p>
                  )}
                  <h3 className="text-xl font-semibold leading-snug text-white">{title}</h3>
                </div>
              )}

              {p.image && p.eyebrow && (
                <p className="uppercase tracking-wide text-[11px] font-semibold text-[#9b9b9b]">
                  {p.eyebrow[lang]}
                </p>
              )}

              {p.image && <h3 className="text-lg font-semibold text-white">{title}</h3>}

              {p.status && (
                <span className="text-xs font-semibold text-accent-fg bg-[#9b2242]/10 border border-[#9b2242]/30 rounded-md px-2 py-1">
                  {p.status[lang]}
                </span>
              )}

              <dl className="text-sm space-y-2 w-full">
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b] font-semibold">
                    {t("projects.problemLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed line-clamp-2">{content.problem}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b] font-semibold">
                    {t("projects.approachLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed line-clamp-2">{content.approach}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[10px] text-[#9b9b9b] font-semibold">
                    {t("projects.resultLabel")}
                  </dt>
                  <dd className="text-[#9b9b9b] leading-relaxed line-clamp-2">{content.result}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => {
                  const label = localize(tag, lang);
                  return (
                    <span
                      key={label}
                      className="text-xs text-[#9b9b9b] bg-[#1f1f1f] rounded-md px-2 py-1"
                    >
                      {label}
                    </span>
                  );
                })}
              </div>

              {/* mt-auto pins the link row to the card's bottom edge, so
                  cards with shorter copy still line up across a row. */}
              <div className="mt-auto pt-2 flex flex-wrap gap-3">
                {p.links.detail && (
                  <Link href={href(p.links.detail)} className="link-btn">
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    {t("projects.details")}
                  </Link>
                )}
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
                {p.links.repo && (
                  <a
                    href={p.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    {t("projects.github")}
                  </a>
                )}
              </div>
            </AnimatedCard>
          );
        })}
      </div>
      {selected && (
        <Lightbox {...selected} closeLabel={t("projects.close")} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
