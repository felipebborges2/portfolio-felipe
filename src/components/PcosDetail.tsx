"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { projects } from "@/data/projects";
import { pcosDatasets, pcosDetail } from "@/data/pcos";
import { formatGraduationLong, profile } from "@/data/profile";
import { localize } from "@/data/shared";

// TODO: results (metrics, figures, any performance statement) go here only
// after TCC 2 is complete — see the note in src/data/pcos.ts.

const project = projects.find((p) => p.id === "pcos-generalization")!;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-white mb-3">{children}</h2>;
}

export default function PcosDetail() {
  const { t, lang, href } = useI18n();
  const d = pcosDetail[lang];

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
          {project.eyebrow && (
            <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
              {project.eyebrow[lang]}
            </p>
          )}
          <h1 className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">{d.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            {project.status && (
              <span className="font-semibold text-accent-fg bg-[#9b2242]/10 border border-[#9b2242]/30 rounded-md px-2 py-1">
                {project.status[lang]}
              </span>
            )}
            {!profile.graduated && (
              <span className="text-[#9b9b9b]">
                {t("projectDetail.expected")}: {formatGraduationLong(lang)}
              </span>
            )}
          </div>

          <p className="mt-6 rounded-lg border border-[#2a2a2a] bg-[#151515] px-4 py-3 text-sm text-[#b0b0b0] leading-relaxed">
            {t("projectDetail.preliminary")}
          </p>
        </header>

        <div className="mt-10 space-y-10 text-[#b0b0b0] leading-relaxed">
          <section>
            <SectionTitle>{t("projectDetail.problem")}</SectionTitle>
            <p>{d.problem}</p>
          </section>

          <section>
            <SectionTitle>{t("projectDetail.approach")}</SectionTitle>
            <div className="space-y-3">
              {d.approach.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>{t("projectDetail.datasets")}</SectionTitle>
            <div className="overflow-x-auto rounded-lg border border-[#1f1f1f]">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#151515] text-[#9b9b9b]">
                  <tr>
                    <th scope="col" className="px-4 py-2 font-semibold">{t("projectDetail.dataset")}</th>
                    <th scope="col" className="px-4 py-2 font-semibold">{t("projectDetail.role")}</th>
                    <th scope="col" className="px-4 py-2 font-semibold">{t("projectDetail.images")}</th>
                  </tr>
                </thead>
                <tbody>
                  {pcosDatasets.map((row) => (
                    <tr key={row.name} className="border-t border-[#1f1f1f]">
                      <th scope="row" className="px-4 py-2 font-medium text-white">{row.name}</th>
                      <td className="px-4 py-2">{row.role[lang]}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{row.images[lang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm text-[#9b9b9b]">{d.totalImages}</p>
          </section>

          <section>
            <SectionTitle>{t("projectDetail.training")}</SectionTitle>
            <ul className="flex flex-wrap gap-2">
              {d.training.map((item) => (
                <li
                  key={item}
                  className="text-sm text-white bg-[#1f1f1f] border border-[#2a2a2a] rounded-md px-3 py-1.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>{t("projectDetail.result")}</SectionTitle>
            <p>{d.resultsPending}</p>
          </section>

          <section>
            <SectionTitle>{t("projectDetail.limitations")}</SectionTitle>
            <p>{d.limitations}</p>
          </section>

          <section>
            <SectionTitle>{t("projectDetail.nextStep")}</SectionTitle>
            <p>{d.nextStep}</p>
          </section>

          <section>
            <SectionTitle>{t("projectDetail.tags")}</SectionTitle>
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
    </article>
  );
}
