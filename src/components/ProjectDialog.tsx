"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import type { Project } from "@/data/projects";
import { localize } from "@/data/shared";

/** Full problem / approach / result for a project card, in a modal dialog. */
export default function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, lang } = useI18n();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const content = project.content[lang];
  const title = localize(project.title, lang);
  const titleId = `project-dialog-${project.id}`;

  useEffect(() => {
    // Focus moves into the dialog and returns to the trigger on close;
    // Tab stays inside, Escape closes, and the page behind doesn't scroll.
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);

  const sections = [
    { label: t("projects.problemLabel"), text: content.problem },
    { label: t("projects.approachLabel"), text: content.approach },
    { label: t("projects.resultLabel"), text: content.result },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 p-0 sm:p-6"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-[#2a2a2a] bg-[#151515] p-6 md:p-8 text-left shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("projects.closeDialog")}
          className="absolute right-4 top-4 rounded-full p-2 text-[#b0b0b0] hover:bg-white/10 hover:text-white transition"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {project.eyebrow && (
          <p className="pr-10 uppercase tracking-wide text-xs font-semibold text-[#9b9b9b]">
            {project.eyebrow[lang]}
          </p>
        )}
        <h3 id={titleId} className="mt-2 pr-10 text-2xl font-semibold text-white">
          {title}
        </h3>

        <dl className="mt-6 space-y-5">
          {sections.map((s) => (
            <div key={s.label}>
              <dt className="uppercase tracking-wide text-xs font-semibold text-[#9b9b9b]">{s.label}</dt>
              <dd className="mt-1 text-[#d0d0d0] leading-relaxed">{s.text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const label = localize(tag, lang);
            return (
              <li key={label} className="text-xs text-[#9b9b9b] bg-[#1f1f1f] rounded-md px-2 py-1">
                {label}
              </li>
            );
          })}
        </ul>

        {(project.links.live || project.links.repo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="link-btn">
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                {t("projects.live")}
              </a>
            )}
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="link-btn">
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                {t("projects.github")}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
