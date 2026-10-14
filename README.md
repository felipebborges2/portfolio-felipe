# Felipe Borges — Portfolio

> **⚠️ Not ready to publish.** Pending before any deploy:
>
> - [ ] Replace `public/curriculo-felipe-borges-pt.pdf` (Portuguese CV)
> - [ ] Replace `public/curriculum-felipe-borges-en.pdf` (English CV)
> - [ ] Only then consider the site publishable
>
> Both PDFs are Lattes exports from 2025 that still describe the acoustic
> neuroma project, which is no longer mine, and predate the TCC, the
> graduation date and OncoPredict. Removing that project from the site is
> not complete while these files are served.

Personal portfolio built with Next.js (App Router), React, TypeScript,
Tailwind CSS v3, framer-motion and lucide-react. Deployed on Vercel.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Structure

- `src/app/` — routes, layout and global styles
- `src/components/` — shared components and page sections
- `src/data/` — typed content (projects, skills, journey, about)
- `src/i18n/` — UI strings in English and Portuguese

Every user-facing string exists in both English and Portuguese.

## Notes

- `src/data/profile.ts` holds the expected graduation month and an explicit
  `graduated` flag. The flag is changed by hand after the degree is
  conferred; nothing switches automatically.
- `public/projects/oncopredict.jpeg` is intentionally unused. It is kept as a
  reference until it is replaced by an exported ROC curve.
- TCC (`src/data/pcos.ts`): no results — not even qualitative ones — until
  TCC 2 is complete.
