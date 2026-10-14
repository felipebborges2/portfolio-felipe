import { ImageResponse } from "next/og";
import { translations } from "@/i18n/translations";
import { LANGS, isLang } from "@/i18n/paths";

export const alt = "Felipe Borges: Deep Learning · Data Science · Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = translations[isLang(lang) ? lang : "en"].meta;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d0d0d",
          color: "#f5f5f5",
        }}
      >
        <div style={{ width: 96, height: 8, background: "#9b2242", borderRadius: 4, marginBottom: 40 }} />
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>Felipe Borges</div>
        <div style={{ fontSize: 40, color: "#d0738d", marginTop: 24 }}>{meta.ogTagline}</div>
        <div style={{ fontSize: 30, color: "#9b9b9b", marginTop: 16 }}>{meta.ogSubtitle}</div>
      </div>
    ),
    size
  );
}
