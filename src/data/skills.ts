/**
 * Skill groups.
 *
 * No self-declared levels. A skill shows a short `context` line only when
 * there is a concrete, documented place where it was applied (a project or
 * experience on this site). Without one, only the name is shown — never
 * invent context to fill the gap.
 *
 * Group titles are translated via i18n (`skills.groups.*` in
 * src/i18n/translations.ts).
 */
import type { Localized, MaybeLocalized } from "./shared";

export type Skill = {
  name: MaybeLocalized;
  /** Where it was applied, e.g. "TCC: ResNet-50 fine-tuning". */
  context?: Localized<string>;
};

export type SkillGroup = {
  id: string;
  titleKey: "dataml" | "softwareeng" | "datacloud" | "tools";
  skills: Skill[];
};

const same = (text: string): Localized<string> => ({ en: text, pt: text });

export const skillGroups: SkillGroup[] = [
  {
    id: "dataml",
    titleKey: "dataml",
    skills: [
      { name: "Python", context: same("TCC, OncoPredict") },
      {
        name: "PyTorch",
        context: { en: "TCC: ResNet-50 fine-tuning", pt: "TCC: fine-tuning de ResNet-50" },
      },
      {
        name: "Deep Learning",
        context: {
          en: "TCC: ultrasound image classification",
          pt: "TCC: classificação de imagens de ultrassom",
        },
      },
      {
        name: "Transfer Learning",
        context: { en: "TCC: ImageNet weights", pt: "TCC: pesos ImageNet" },
      },
      {
        name: { en: "External validation", pt: "Validação externa" },
        context: { en: "TCC: multi-dataset evaluation", pt: "TCC: avaliação multibase" },
      },
      {
        name: "scikit-learn",
        context: {
          en: "OncoPredict: pipelines and GridSearchCV",
          pt: "OncoPredict: pipelines e GridSearchCV",
        },
      },
      {
        name: "Machine Learning",
        context: {
          en: "OncoPredict: Logistic Regression, Random Forest and SVM",
          pt: "OncoPredict: Regressão Logística, Random Forest e SVM",
        },
      },
      { name: "Pandas", context: same("OncoPredict") },
      { name: "NumPy", context: same("OncoPredict") },
      {
        name: "OpenAI API",
        context: { en: "AtlasMind: itinerary generation", pt: "AtlasMind: geração de roteiros" },
      },
    ],
  },
  {
    id: "softwareeng",
    titleKey: "softwareeng",
    skills: [
      { name: "TypeScript", context: same("AtlasMind, CourtView") },
      { name: "React", context: same("AtlasMind, CourtView, FinZeit") },
      {
        name: "Next.js",
        context: {
          en: "AtlasMind, CourtView, FinZeit, this site",
          pt: "AtlasMind, CourtView, FinZeit, este site",
        },
      },
      { name: "Node.js", context: same("AtlasMind") },
      { name: "FastAPI" },
      { name: "Express.js" },
    ],
  },
  {
    id: "datacloud",
    titleKey: "datacloud",
    skills: [
      {
        name: "Vercel",
        context: {
          en: "Deploys: AtlasMind, Europedia, CourtView, FinZeit",
          pt: "Deploy: AtlasMind, Europedia, CourtView, FinZeit",
        },
      },
      { name: "MongoDB", context: same("FinZeit") },
      { name: "SQL", context: { en: "CEVS internship", pt: "Estágio no CEVS" } },
      { name: "Power BI", context: { en: "CEVS internship", pt: "Estágio no CEVS" } },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
    ],
  },
  {
    id: "tools",
    titleKey: "tools",
    skills: [
      { name: "Data Visualization", context: same("FinZeit: Recharts") },
      { name: "Responsive Design", context: same("Europedia") },
      { name: "API Integration", context: same("AtlasMind: OpenAI API") },
      { name: "Git" },
      { name: "State Management" },
    ],
  },
];
