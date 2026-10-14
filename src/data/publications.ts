/**
 * Peer-reviewed publications. References stay in English in both language
 * versions of the site; only surrounding labels are translated.
 *
 * The title is reproduced exactly as published — including "CDTIvol"
 * (the usual spelling of the quantity is CTDIvol, but this is the published
 * title, so it must not be "corrected").
 */

export type Author = {
  name: string;
  /** Marks the site owner so the name can be shown in bold. */
  self?: boolean;
};

export type Publication = {
  id: string;
  title: string;
  /** Substring of `title` rendered with "vol" as a subscript in HTML. */
  subscriptTerm?: { term: string; base: string; sub: string };
  authors: Author[];
  journal: string;
  volume: string;
  articleNumber: string;
  /** ISO year-month of publication. */
  date: string;
  /** Human-readable date, kept in English like the rest of the reference. */
  dateLabel: string;
  issue?: string;
  doi: string;
};

export const publications: Publication[] = [
  {
    id: "radmeas-2024",
    title:
      "In vivo measurements in pediatric computed tomography with TLD: A correlation between CDTIvol values",
    subscriptTerm: { term: "CDTIvol", base: "CDTI", sub: "vol" },
    authors: [
      { name: "Alexsandro Guimarães" },
      { name: "Felipe Borges", self: true },
      { name: "Carlos Ubeda" },
      { name: "Cassiana Viccari" },
      { name: "Carmen Sandra Guzmán Calcina" },
      { name: "Thatiane Pianoschi" },
      { name: "Mirko Salomón Alva-Sánchez" },
    ],
    journal: "Radiation Measurements",
    volume: "177",
    articleNumber: "107275",
    date: "2024-09",
    dateLabel: "September 2024",
    issue: "Proceedings of the 20th International Solid State Dosimetry Conference",
    doi: "10.1016/j.radmeas.2024.107275",
  },
];

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}
