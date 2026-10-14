"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { localePath, switchLanguagePath } from "@/i18n/paths";

const items = [
  { href: "/#home", labelKey: "nav.home" },
  { href: "/#about", labelKey: "nav.about" },
  { href: "/#projects", labelKey: "nav.projects" },
  { href: "/#skills", labelKey: "nav.skills" },
  { href: "/#languages", labelKey: "nav.languages" },
  { href: "/#journey", labelKey: "nav.journey" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, href } = useI18n();
  const router = useRouter();
  const other = lang === "en" ? "pt" : "en";

  // The link points at the other language's home page (works without JS);
  // with JS it goes to the same page in the other language instead.
  const switchLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    router.push(switchLanguagePath(other, window.location.pathname, window.location.hash));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <div className="container-p h-16 flex items-center justify-between">
        <Link href={href("/")} className="font-semibold tracking-tight">
          Felipe <span className="text-accent-fg">Borges</span>
        </Link>

        <nav aria-label={t("nav.main")} className="hidden lg:flex items-center gap-6 text-sm">
          {items.map((i) => (
            <Link key={i.href} href={href(i.href)} className="link-subtle">
              {t(i.labelKey)}
            </Link>
          ))}

          <Link href={href("/#contact")} className="btn btn-accent">
            {t("nav.contactMe")}
          </Link>

          {/* Language switch (EN left, PT right) */}
          <a
            href={localePath(other, "/")}
            hrefLang={other === "pt" ? "pt-BR" : "en"}
            onClick={switchLanguage}
            aria-label={t("nav.switchTo")}
            className="flex items-center gap-3 select-none rounded-md"
          >
            <span
              className={`text-sm font-medium transition-colors ${
                lang === "en" ? "text-accent-fg" : "text-[#9b9b9b]"
              }`}
            >
              EN
            </span>

            <span
              aria-hidden="true"
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                lang === "pt" ? "bg-accent" : "bg-gray-500"
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
                lang === "pt" ? "text-accent-fg" : "text-[#9b9b9b]"
              }`}
            >
              PT
            </span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden btn p-2"
        >
          {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={t("nav.main")} className="lg:hidden border-t border-border bg-bg">
          <div className="container-p py-3 flex flex-col gap-1">
            {items.map((i) => (
              <Link
                key={i.href}
                href={href(i.href)}
                onClick={() => setOpen(false)}
                className="link-subtle py-2"
              >
                {t(i.labelKey)}
              </Link>
            ))}

            <Link href={href("/#contact")} onClick={() => setOpen(false)} className="btn btn-accent">
              {t("nav.contactMe")}
            </Link>

            <a
              href={localePath(other, "/")}
              hrefLang={other === "pt" ? "pt-BR" : "en"}
              lang={other === "pt" ? "pt-BR" : "en"}
              onClick={switchLanguage}
              className="mt-2 border border-border text-sm text-center px-3 py-2 rounded-md hover:border-accent hover:text-accent-fg transition"
            >
              {t("nav.switchTo")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
