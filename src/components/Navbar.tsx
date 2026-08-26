"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider"; // 👈 import adicionado

const items = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#skills", labelKey: "nav.skills" },
  { href: "#languages", labelKey: "nav.languages" },
  { href: "#journey", labelKey: "nav.journey" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n(); // 👈 hook para tradução

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <div className="container-p h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Felipe <span className="text-accent">Borges</span>
        </Link>

        {/* Navbar Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="link-subtle">
              {t(i.labelKey)} {/* 👈 traduz label */}
            </a>
          ))}

          {/* Botão principal */}
          <a href="#contact" className="btn btn-accent">
            {t("nav.contactMe")} {/* 👈 traduz "Contact Me" */}
          </a>

          {/* Switch de idioma estilo iPhone (EN à esquerda, PT à direita) */}
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "pt" : "en")}
            aria-label={t("nav.toggle")}
            className="flex items-center gap-3 select-none"
          >
            <span
              className={`text-sm font-medium transition-colors ${
                lang === "en" ? "text-[#9b2242]" : "text-[#9b9b9b]"
              }`}
            >
              EN
            </span>

            <span
              aria-hidden="true"
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                lang === "pt" ? "bg-[#9b2242]" : "bg-gray-500"
              }`}
            >
              <span
                className={`absolute top-[2px] left-[2px] w-[22px] h-[22px] bg-white rounded-full shadow-md block transform transition-transform duration-300 ease-out ${
                  lang === "pt" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </span>

            <span
              className={`text-sm font-medium transition-colors ${
                lang === "pt" ? "text-[#9b2242]" : "text-[#9b9b9b]"
              }`}
            >
              PT
            </span>
          </button>
        </nav>

        {/* Menu Mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden btn p-2"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-bg">
          <div className="container-p py-4 flex flex-col gap-3">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="link-subtle"
              >
                {t(i.labelKey)} {/* 👈 traduz label */}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-accent"
            >
              {t("nav.contactMe")}
            </a>

            {/* 👇 Botão de idioma no menu mobile */}
            <button
              onClick={() => {
                setLang(lang === "en" ? "pt" : "en");
                setOpen(false);
              }}
              className="border border-border text-sm px-3 py-1 rounded-md hover:border-accent hover:text-accent transition mt-2"
            >
              {t("nav.toggle")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
