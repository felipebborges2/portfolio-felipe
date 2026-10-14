import type { Publication } from "@/data/publications";

/** Renders a publication title, with the subscripted term (e.g. CDTI<sub>vol</sub>) where needed. */
export default function PublicationTitle({ pub }: { pub: Publication }) {
  const s = pub.subscriptTerm;
  if (!s || !pub.title.includes(s.term)) return <>{pub.title}</>;
  const [before, after] = pub.title.split(s.term);
  return (
    <>
      {before}
      {s.base}
      <sub>{s.sub}</sub>
      {after}
    </>
  );
}
