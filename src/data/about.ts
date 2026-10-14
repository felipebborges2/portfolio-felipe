import type { Localized } from "./shared";
import { projects } from "./projects";

export type Highlight = {
  value: Localized<string>;
  label: Localized<string>;
};

const deployedCount = String(projects.filter((p) => p.links.live).length);

export const highlights: Highlight[] = [
  {
    value: { en: "Thesis", pt: "TCC" },
    label: {
      en: "Deep learning in medical imaging: how well a ResNet-50 generalizes to ultrasound data from other sources",
      pt: "Deep learning em imagem médica: o quanto uma ResNet-50 generaliza para ultrassons de outras fontes",
    },
  },
  {
    value: { en: deployedCount, pt: deployedCount },
    label: {
      en: "Full-stack web products deployed to production, from AI travel planning to financial dashboards",
      pt: "Produtos web full-stack em produção, de planejamento de viagens com IA a painéis financeiros",
    },
  },
  {
    value: { en: "UFCSPA", pt: "UFCSPA" },
    label: {
      en: "Medical Physics foundation: scientific rigor and hands-on experience with healthcare data",
      pt: "Base em Física Médica: rigor científico e experiência prática com dados de saúde",
    },
  },
  {
    value: { en: "4", pt: "4" },
    label: {
      en: "Languages spoken: native Portuguese, fluent English, working Spanish, beginner German",
      pt: "Idiomas falados: português nativo, inglês fluente, espanhol intermediário, alemão iniciante",
    },
  },
];
