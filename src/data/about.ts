import type { Localized } from "./shared";

export type Highlight = {
  value: string;
  label: Localized<string>;
};

export const highlights: Highlight[] = [
  {
    value: "0.99 AUC",
    label: {
      en: "Best model in OncoPredict, an ML project predicting tumor progression from MRI data",
      pt: "Melhor modelo do OncoPredict, projeto de ML para prever progressão tumoral a partir de dados de ressonância",
    },
  },
  {
    value: "5",
    label: {
      en: "Full-stack & ML products shipped — from AI travel planning to financial dashboards",
      pt: "Produtos full-stack e de ML publicados — de planejamento de viagens com IA a painéis financeiros",
    },
  },
  {
    value: "UFCSPA",
    label: {
      en: "Medical Physics foundation — real healthcare data and scientific rigor most developers don't have",
      pt: "Base em Física Médica — rigor científico e experiência real com dados de saúde que a maioria dos devs não tem",
    },
  },
  {
    value: "4",
    label: {
      en: "Languages spoken — native Portuguese, fluent English, working Spanish, beginner German",
      pt: "Idiomas falados — português nativo, inglês fluente, espanhol intermediário, alemão iniciante",
    },
  },
];
