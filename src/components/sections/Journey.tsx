"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { journeyItems } from "@/data/journey";
import { doiUrl, publications } from "@/data/publications";
import PublicationTitle from "@/components/PublicationTitle";

export default function Journey() {
  const { t, lang } = useI18n();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="journey"
      className="section flex flex-col items-center text-center"
    >
      <Reveal>
        <div className="mb-10">
          <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
            {t("journey.heading")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {t("journey.title")}{" "}
            <span className="text-[#9b2242]">{t("journey.highlight")}</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="relative max-w-3xl w-full text-left">
          {/* connecting line, spans behind every marker */}
          <div
            className="absolute left-[5px] top-3 bottom-3 w-px bg-[#2a2a2a]"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {journeyItems.map((step) => {
              const isOpen = expanded.has(step.id);
              return (
                <li key={step.id} className="relative pl-8">
                  <span
                    className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-[#9b2242] ring-4 ring-[#0d0d0d]"
                    aria-hidden="true"
                  />

                  <div className="prose-measure">
                    <p className="text-sm text-[#9b2242] font-semibold mb-1">
                      {step.period[lang]}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {step.institution[lang]}
                    </h3>
                    <p className="text-[#b0b0b0] text-sm mb-3">{step.role[lang]}</p>
                    <p className="text-[#9b9b9b] leading-relaxed text-sm">
                      {isOpen ? step.detail[lang] : step.summary[lang]}
                    </p>
                    {step.activities && (
                      <div className="mt-4">
                        <p className="uppercase tracking-wide text-[11px] font-semibold text-[#9b9b9b]/80 mb-2">
                          {t("journey.activities")}
                        </p>
                        <ul className="space-y-3 border-l border-[#2a2a2a] pl-4">
                          {step.activities.map((a) => {
                            const pub = publications.find((p) => p.id === a.publicationId);
                            return (
                            <li key={a.id}>
                              {a.period && (
                                <p className="text-xs font-semibold text-[#d0738d]">{a.period}</p>
                              )}
                              <p className="text-sm font-medium text-white">{a.title[lang]}</p>
                              <p className="text-sm text-[#9b9b9b] leading-relaxed">{a.text[lang]}</p>
                              {pub && (
                                <a
                                  href={doiUrl(pub.doi)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  lang="en"
                                  className="mt-1 inline-block text-sm italic text-[#d0738d] underline-offset-2 hover:underline"
                                >
                                  <PublicationTitle pub={pub} />
                                </a>
                              )}
                              {a.href && (
                                <Link
                                  href={a.href}
                                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[#d0738d] hover:brightness-110 transition"
                                >
                                  {t("journey.viewProject")}
                                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                </Link>
                              )}
                            </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => toggle(step.id)}
                      aria-expanded={isOpen}
                      className="mt-3 text-sm font-medium text-[#9b2242] hover:brightness-110 transition"
                    >
                      {isOpen ? t("journey.readLess") : t("journey.readMore")}
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
