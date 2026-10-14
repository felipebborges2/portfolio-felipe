"use client";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PublicationTitle from "@/components/PublicationTitle";
import { useI18n } from "@/i18n/I18nProvider";
import { doiUrl, publications } from "@/data/publications";

export default function Publications() {
  const { t } = useI18n();

  return (
    <section id="publications" className="section">
      <SectionHeading eyebrow={t("publications.heading")} title={t("publications.title")} />
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <ol className="space-y-6">
            {publications.map((pub) => (
              // References stay in English in both language versions.
              <li key={pub.id} lang="en" className="rounded-xl border border-[#1f1f1f] bg-[#151515] p-5">
                <a
                  href={doiUrl(pub.doi)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-base md:text-lg font-semibold text-white hover:text-[#d0738d] transition"
                >
                  <cite className="not-italic">
                    <PublicationTitle pub={pub} />
                  </cite>
                  <ExternalLink className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <p className="mt-2 text-sm text-[#b0b0b0] leading-relaxed">
                  {pub.authors.map((a, i) => (
                    <span key={a.name}>
                      {a.self ? <strong className="font-semibold text-white">{a.name}</strong> : a.name}
                      {i < pub.authors.length - 1 ? "; " : ""}
                    </span>
                  ))}
                </p>
                <p className="mt-2 text-sm text-[#9b9b9b]">
                  <i>{pub.journal}</i>, vol. {pub.volume}, art. {pub.articleNumber}, {pub.dateLabel}.
                  {pub.issue && <> Special issue: {pub.issue}.</>}
                </p>
                <p className="mt-1 text-sm text-[#9b9b9b]">DOI: {pub.doi}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
