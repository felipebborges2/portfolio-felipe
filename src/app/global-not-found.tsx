import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Felipe Borges",
};

// The root layout lives in app/[lang], so unmatched URLs render this page.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-bg text-white">
        <main id="main" className="container-p flex min-h-screen flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-3xl font-semibold">404</h1>
          <p className="text-[#b0b0b0]">
            Page not found. <span lang="pt-BR">Página não encontrada.</span>
          </p>
          <p className="flex gap-4">
            <Link href="/" className="btn btn-accent">
              Home
            </Link>
            <Link href="/pt" lang="pt-BR" className="btn">
              Início
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
