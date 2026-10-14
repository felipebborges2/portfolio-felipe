# Felipe Borges — Portfolio

Personal portfolio of Felipe Borges: deep learning and data science with a
Medical Physics background. Live at <https://felipebborges.vercel.app>
(English) and <https://felipebborges.vercel.app/pt> (Portuguese).

## Open items

- [ ] **Replace both CV PDFs in `public/`.** `curriculo-felipe-borges-pt.pdf`
      and `curriculum-felipe-borges-en.pdf` are 2025 Lattes exports. They still
      mention the acoustic neuroma project, which is no longer part of my work,
      and are otherwise outdated. The site was published with them on purpose;
      the new PDFs must:
  - not mention the acoustic neuroma project;
  - include the undergraduate thesis (TCC) on PCOS detection;
  - state the expected graduation: December 2026;
  - include OncoPredict;
  - include the Radiation Measurements (2024) publication.

  Keep the same file names so the download links keep working.
- [ ] **TCC results.** Nothing about results — metrics, figures or qualitative
      statements — goes on the site until TCC 2 is complete. See the TODOs in
      `src/data/pcos.ts` and `src/components/PcosDetail.tsx`.
- [ ] **OncoPredict image.** `public/projects/oncopredict.jpeg` is intentionally
      unused (an editor screenshot showing AUC values). It stays as a reference
      until it is replaced by an exported ROC curve.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) and React 19
- TypeScript
- Tailwind CSS v3
- framer-motion (animations, with `prefers-reduced-motion` respected)
- lucide-react (icons)
- Deployed on Vercel from the `main` branch

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000 (English) and /pt (Portuguese)
npm run lint
npm run build   # production build; `npm start` serves it
```

## Project structure

```
src/
  app/
    [lang]/                       routes and root layout, one tree per language
      layout.tsx                  <html lang>, site-wide metadata, header
      page.tsx                    home page + JSON-LD (Person, ScholarlyArticle)
      projects/pcos-generalization/page.tsx   TCC detail page
      [...missing]/page.tsx       unknown URLs → localized 404
      not-found.tsx               localized 404 page
      opengraph-image.tsx         generated OpenGraph card per language
    global-not-found.tsx          last-resort 404
  proxy.ts                        root URLs → English tree (route-only rewrite)
    robots.ts, sitemap.ts, favicon.ico, globals.css
  components/                     shared components and page sections
  data/                           typed content (see below)
  i18n/                           translations, URL helpers, metadata helper
```

### Content in `src/data`

All content lives in typed data files, not in JSX. Text that differs by
language is a `Localized<T>` (`{ en, pt }`).

| File | Contents |
|---|---|
| `profile.ts` | Expected graduation month and the `graduated` flag |
| `projects.ts` | Project cards: problem → approach → result, tags, links |
| `pcos.ts` | TCC detail page: problem, methodology, datasets, next steps |
| `publications.ts` | Peer-reviewed publications (references stay in English) |
| `journey.ts` | Timeline: institutions, roles, academic activities |
| `skills.ts` | Skill groups; each skill shows where it was applied, if documented |
| `about.ts` | Highlight tiles in the About section |
| `structured-data.ts` | JSON-LD built from the data above |
| `shared.ts` | `Lang`, `Localized<T>` and helpers |

## Internationalization

- English is served at the root (`/`, `/projects/…`); Portuguese under `/pt`
  (`/pt`, `/pt/projects/…`). Both are rendered from `src/app/[lang]`;
  `src/proxy.ts` rewrites root URLs to the `en` tree. It only maps routes:
  no language detection, no cookies.
- UI strings live in `src/i18n/translations.ts`; content strings live in
  `src/data`. Every user-facing string exists in both languages.
- Components read the language with `useI18n()`, which provides `t(key)`,
  `lang` and `href(path)` (prefixes internal links with `/pt` when needed).
- Each page sets its own canonical URL, reciprocal `hreflang` links
  (`x-default` → English), OpenGraph and Twitter card through
  `pageMetadata()` in `src/i18n/metadata.ts`.
- The EN/PT switch in the header opens the same page and anchor in the other
  language.

## Marking the degree as completed

`src/data/profile.ts` holds:

```ts
export const profile = {
  graduation: "2026-12", // expected month, shown as "December 2026"
  graduated: false,       // controls the wording
};
```

The site never switches on its own. After the degree is conferred (colação de
grau), set `graduated: true`: the Hero, About and timeline then read
"B.Sc. in Medical Physics" / "Bacharel em Física Médica" instead of
"final-year student / expected". If the date changes, update `graduation`.
