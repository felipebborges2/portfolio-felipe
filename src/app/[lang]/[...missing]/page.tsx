import { notFound } from "next/navigation";

// Any unknown path under a language (e.g. /pt/foo, or /foo via the fallback
// rewrite to /en/foo) renders that language's not-found page, inside the
// normal layout — header, language switch and <html lang> included.
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export default function MissingPage() {
  notFound();
}
