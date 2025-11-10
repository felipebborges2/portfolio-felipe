import "./globals.css";
import Navbar from "@/components/Navbar";
import { I18nProvider } from "@/i18n/I18nProvider";

export const metadata = {
  title: "Felipe Borges • Portfolio",
  description: "Medical Physics Student & Full Stack Developer",
  icons: {
    icon: "/newfavicon.ico",
    shortcut: "/newfavicon.ico",
    apple: "/newfavicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        {/* 👇 Tudo que usa useI18n precisa estar dentro do Provider */}
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
