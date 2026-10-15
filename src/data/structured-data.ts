import { SITE_URL } from "@/i18n/paths";
import { doiUrl, publications } from "./publications";

const PERSON_ID = `${SITE_URL}/#person`;

/** schema.org Person — only facts that appear on the site. */
export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Felipe Borges",
    url: SITE_URL,
    image: `${SITE_URL}/felipe-borges.jpeg`,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)",
    },
    knowsAbout: ["Deep Learning", "Machine Learning", "Data Science", "Medical Physics", "Software Development"],
    sameAs: ["https://github.com/felipebborges2", "https://www.linkedin.com/in/felipebborges"],
  };
}

/**
 * schema.org ScholarlyArticle for each publication, built only from the
 * verified fields in src/data/publications.ts (plain-text title, so
 * "CDTIvol" stays as published).
 */
export function publicationsJsonLd() {
  return publications.map((pub) => ({
    "@type": "ScholarlyArticle",
    "@id": doiUrl(pub.doi),
    headline: pub.title,
    name: pub.title,
    inLanguage: "en",
    url: doiUrl(pub.doi),
    datePublished: pub.date,
    identifier: { "@type": "PropertyValue", propertyID: "DOI", value: pub.doi },
    author: pub.authors.map((a) =>
      a.self ? { "@id": PERSON_ID } : { "@type": "Person", name: a.name }
    ),
    isPartOf: {
      "@type": "PublicationVolume",
      volumeNumber: pub.volume,
      isPartOf: { "@type": "Periodical", name: pub.journal },
    },
  }));
}
