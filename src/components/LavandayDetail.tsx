"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { useI18n } from "@/i18n/I18nProvider";
import { projects } from "@/data/projects";
import { lavandayDetail, LAVANDAY_URL, type CaseImage } from "@/data/lavanday";
import { localize } from "@/data/shared";

// Only verifiable facts and no business results: see the note in
// src/data/lavanday.ts.

const project = projects.find((p) => p.id === "lavanday-express")!;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-white mb-3">{children}</h2>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent-fg" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Shot({
  image,
  sizes,
  enlargeLabel,
  onOpen,
}: {
  image: CaseImage;
  sizes: string;
  enlargeLabel: string;
  onOpen: (image: CaseImage) => void;
}) {
  return (
    <figure>
      <button
        type="button"
        aria-label={`${enlargeLabel} ${image.caption}`}
        onClick={() => onOpen(image)}
        className="block w-full overflow-hidden rounded-md border border-[#2a2a2a] cursor-zoom-in"
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          sizes={sizes}
          alt={image.alt}
          className="w-full h-auto"
        />
      </button>
      <figcaption className="mt-2 text-sm text-[#9b9b9b]">{image.caption}</figcaption>
    </figure>
  );
}

export default function LavandayDetail() {
  const { t, lang, href } = useI18n();
  const d = lavandayDetail[lang];
  const [selected, setSelected] = useState<CaseImage | null>(null);
  const closeImage = useCallback(() => setSelected(null), []);
  const enlarge = t("caseStudy.enlarge");

  return (
    <article className="section pt-24 md:pt-28">
      <div className="prose-measure">
        <Link
          href={href("/#projects")}
          className="inline-flex items-center gap-1.5 text-sm text-[#9b9b9b] hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          {t("projectDetail.back")}
        </Link>

        <header className="mt-6">
          <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">{t("caseStudy.eyebrow")}</p>
          <h1 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
            {localize(project.title, lang)}
          </h1>
          <p className="mt-4 text-[#b0b0b0] leading-relaxed">{d.summary}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            {project.status && (
              <span className="font-semibold text-accent-fg bg-[#9b2242]/10 border border-[#9b2242]/30 rounded-md px-2 py-1">
                {project.status[lang]}
              </span>
            )}
            <a href={LAVANDAY_URL} target="_blank" rel="noopener noreferrer" className="link-btn">
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              {t("caseStudy.live")}
            </a>
          </div>
        </header>

        <section className="mt-10" aria-labelledby="screenshots-title">
          <h2 id="screenshots-title" className="sr-only">
            {t("caseStudy.screenshots")}
          </h2>
          <Shot image={d.images.desktop} sizes="(min-width: 768px) 640px, 100vw" enlargeLabel={enlarge} onOpen={setSelected} />
          <div className="mt-6 grid grid-cols-2 gap-4 items-start">
            <Shot image={d.images.mobile} sizes="(min-width: 768px) 320px, 50vw" enlargeLabel={enlarge} onOpen={setSelected} />
            <Shot image={d.images.support} sizes="(min-width: 768px) 320px, 50vw" enlargeLabel={enlarge} onOpen={setSelected} />
          </div>
          <p className="mt-3 text-xs text-[#9b9b9b]">{d.capturedOn}</p>
        </section>

        <div className="mt-12 space-y-10 text-[#b0b0b0] leading-relaxed">
          <section>
            <SectionTitle>{t("caseStudy.context")}</SectionTitle>
            <div className="space-y-3">
              {d.context.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>{t("caseStudy.role")}</SectionTitle>
            <div className="space-y-3">
              {d.role.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>{t("caseStudy.decisions")}</SectionTitle>
            <div className="space-y-5">
              {d.decisions.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>{t("caseStudy.flow")}</SectionTitle>
            <ol className="space-y-3">
              {d.flow.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2rem_1fr] gap-x-3 rounded-lg border border-[#2a2a2a] bg-[#151515] px-4 py-3"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[#9b2242]/50 text-sm font-semibold text-accent-fg tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-4 space-y-3">
              {d.flowNote.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>{t("caseStudy.publishing")}</SectionTitle>
            <Bullets items={d.publishing} />
          </section>

          <section>
            <SectionTitle>{t("caseStudy.metrics")}</SectionTitle>
            <Bullets items={d.metrics} />
          </section>

          <section>
            <SectionTitle>{t("caseStudy.deliverables")}</SectionTitle>
            <ul className="divide-y divide-[#1f1f1f] rounded-lg border border-[#1f1f1f] text-sm">
              {d.deliverables.map((item) => (
                <li key={item.label} className="px-4 py-3">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 break-all font-medium text-white hover:text-accent-fg hover:underline underline-offset-2"
                    >
                      {item.label}
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="font-medium text-white">{item.label}</span>
                  )}
                  <p className="mt-0.5 text-[#9b9b9b]">{item.note}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>{t("caseStudy.techs")}</SectionTitle>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => {
                const label = localize(tag, lang);
                return (
                  <li key={label} className="text-xs text-[#9b9b9b] bg-[#1f1f1f] rounded-md px-2 py-1">
                    {label}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
      {selected && (
        <Lightbox
          src={selected.src}
          width={selected.width}
          height={selected.height}
          alt={selected.alt}
          closeLabel={t("projects.close")}
          onClose={closeImage}
        />
      )}
    </article>
  );
}
