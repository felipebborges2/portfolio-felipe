/**
 * Skill groups and levels.
 *
 * Group titles and level labels are translated via i18n (see
 * `skills.groups.*` and `skills.levels.*` in src/i18n/translations.ts) —
 * `titleKey` / `level` here just select which translation to use, so the
 * skills themselves stay in one typed place regardless of language.
 */

export type SkillLevel = "advanced" | "intermediate" | "familiar";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  titleKey: "dataml" | "softwareeng" | "datacloud" | "tools";
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "dataml",
    titleKey: "dataml",
    skills: [
      { name: "Python", level: "advanced" },
      { name: "scikit-learn", level: "advanced" },
      { name: "Pandas", level: "advanced" },
      { name: "NumPy", level: "advanced" },
      { name: "Machine Learning", level: "advanced" },
      { name: "MRI Radiomics", level: "intermediate" },
      { name: "OpenAI API", level: "intermediate" },
    ],
  },
  {
    id: "softwareeng",
    titleKey: "softwareeng",
    skills: [
      { name: "TypeScript", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "Node.js", level: "intermediate" },
      { name: "FastAPI", level: "intermediate" },
      { name: "Express.js", level: "familiar" },
    ],
  },
  {
    id: "datacloud",
    titleKey: "datacloud",
    skills: [
      { name: "REST APIs", level: "advanced" },
      { name: "Vercel", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "SQL", level: "intermediate" },
      { name: "PostgreSQL", level: "familiar" },
      { name: "Power BI", level: "familiar" },
    ],
  },
  {
    id: "tools",
    titleKey: "tools",
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Responsive Design", level: "advanced" },
      { name: "API Integration", level: "advanced" },
      { name: "Data Visualization", level: "intermediate" },
      { name: "State Management", level: "intermediate" },
    ],
  },
];
