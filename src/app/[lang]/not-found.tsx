"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/I18nProvider";

export default function NotFound() {
  const { t, href } = useI18n();
  return (
    <>
      <main id="main" className="section pt-24 md:pt-28 flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-fg">404</p>
        <h1 className="text-3xl md:text-4xl font-semibold">{t("notFound.title")}</h1>
        <p className="text-[#b0b0b0]">{t("notFound.text")}</p>
        <Link href={href("/")} className="btn btn-accent mt-2">
          {t("notFound.home")}
        </Link>
      </main>
      <Footer />
    </>
  );
}
