"use client";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border">
      <div className="container-p py-8 text-sm text-subtle">
        © {new Date().getFullYear()} Felipe Borges. {t("footer.rights")}
      </div>
    </footer>
  );
}
