import type { Lang, Localized } from "./shared";
import { formatGraduationShort, profile } from "./profile";

export type JourneyActivity = {
  id: string;
  /** Years only, as documented — no invented months. */
  period?: Localized<string>;
  title: Localized<string>;
  /** Only confirmed facts — no invented periods or outcomes. */
  text: Localized<string>;
  href?: string;
  /** Links a resulting publication (see src/data/publications.ts). */
  publicationId?: string;
};

export type JourneyItem = {
  id: string;
  period: Localized<string>;
  institution: Localized<string>;
  role: Localized<string>;
  /** One-line summary shown collapsed. */
  summary: Localized<string>;
  /** Full text revealed on expand. */
  detail: Localized<string>;
  /** Academic activities listed under the item, always visible. */
  activities?: JourneyActivity[];
};

const graduated = profile.graduated;

function ufcspaPeriod(lang: Lang): string {
  const end = formatGraduationShort(lang);
  if (graduated) return lang === "pt" ? `2021 a ${end}` : `2021 to ${end}`;
  return lang === "pt" ? `2021 a ${end} (previsto)` : `2021 to ${end} (expected)`;
}

export const journeyItems: JourneyItem[] = [
  {
    id: "uni",
    period: { en: ufcspaPeriod("en"), pt: ufcspaPeriod("pt") },
    institution: {
      en: "UFCSPA, Federal University of Health Sciences of Porto Alegre",
      pt: "UFCSPA, Universidade Federal de Ciências da Saúde de Porto Alegre",
    },
    role: graduated
      ? { en: "B.Sc. in Medical Physics", pt: "Bacharel em Física Médica" }
      : { en: "Medical Physics undergraduate (final year)", pt: "Formando em Física Médica" },
    summary: {
      en: "Undergraduate thesis in deep learning for medical imaging, a scientific initiation in pediatric CT dosimetry with a published article, and coordination of a teaching-initiation podcast.",
      pt: "TCC em deep learning para imagem médica, iniciação científica em dosimetria de TC pediátrica com artigo publicado e coordenação de um podcast de iniciação à docência.",
    },
    detail: {
      en: "During my degree, I've been part of research projects aimed at optimizing medical imaging and radiation protection. These experiences strengthened my skills in research, scientific communication, and problem-solving: the same analytical mindset I apply today in data science and software development.",
      pt: "Durante a graduação, participei de projetos de pesquisa voltados à otimização de imagens médicas e proteção radiológica. Essas experiências fortaleceram minhas habilidades de pesquisa, comunicação científica e resolução de problemas, a mesma lógica analítica que hoje aplico em ciência de dados e desenvolvimento de software.",
    },
    activities: [
      {
        id: "tcc",
        title: {
          en: "Undergraduate thesis (TCC): deep learning generalization for PCOS detection",
          pt: "TCC: generalização de deep learning na detecção de PCOS",
        },
        text: {
          en: "ResNet-50 evaluated across ultrasound datasets from different sources, with a federated approach. TCC 1 presented, TCC 2 underway.",
          pt: "ResNet-50 avaliada em bases de ultrassom de fontes distintas, com abordagem federada. TCC 1 apresentado, TCC 2 em execução.",
        },
        href: "/projects/pcos-generalization",
      },
      {
        id: "ic",
        period: { en: "2023 to 2025", pt: "2023 a 2025" },
        title: {
          en: "Scientific initiation: dose reference levels in pediatric CT",
          pt: "Iniciação científica: níveis de dose de referência em TC pediátrica",
        },
        text: {
          en: "Research project “Análise dos níveis de dose de referência em TC pediátrica”, supervised by Mirko Alva Sánchez. It resulted in a co-authored article published in Radiation Measurements (2024):",
          pt: "Projeto “Análise dos níveis de dose de referência em TC pediátrica”, com orientação de Mirko Alva Sánchez. Resultou em coautoria de artigo publicado na Radiation Measurements (2024):",
        },
        publicationId: "radmeas-2024",
      },
      {
        id: "pid",
        period: { en: "2023 to 2025", pt: "2023 a 2025" },
        title: {
          en: "Teaching Initiation Project (PID): PodRadiation",
          pt: "Projeto de Iniciação à Docência (PID): PodRadiation",
        },
        text: {
          en: "Coordinator of PodRadiation, a podcast bringing radiation and radiological protection topics to the academic community and the general public.",
          pt: "Coordenador do PodRadiation, podcast que leva temas de radiação e proteção radiológica à comunidade acadêmica e ao público geral.",
        },
      },
    ],
  },
  {
    id: "intern",
    period: { en: "2023 to 2024", pt: "2023 a 2024" },
    institution: {
      en: "CEVS, State Center for Health Surveillance",
      pt: "CEVS, Centro Estadual de Vigilância em Saúde",
    },
    role: { en: "Internship", pt: "Estágio" },
    summary: {
      en: "Radiological protection engineering, plus SQL, Power BI and JavaScript in a real health-system data pipeline.",
      pt: "Engenharia de proteção radiológica, além de SQL, Power BI e JavaScript em um pipeline real de dados do sistema de saúde.",
    },
    detail: {
      en: "I worked on radiation shielding calculations, radiological protection, and equipment evaluation/licensing. I also contributed to the development of the system used to analyze medical imaging across the state, where I learned and applied SQL, Power BI, and JavaScript in practical routines.",
      pt: "Atuei com cálculos de blindagem radiológica, proteção radiológica e avaliação/licenciamento de equipamentos. Também contribuí para o desenvolvimento do sistema utilizado para análise de imagens médicas em todo o estado, onde aprendi e apliquei SQL, Power BI e JavaScript em rotinas práticas.",
    },
  },
  {
    id: "school",
    period: { en: "2017 to 2020", pt: "2017 a 2020" },
    institution: { en: "Colégio Helyos", pt: "Colégio Helyos" },
    role: { en: "High-School Student", pt: "Ensino Médio" },
    summary: {
      en: "Bilingual education with strong academic English: TOEFL, Cambridge and SAT prep at a nationally top-ranked school.",
      pt: "Educação bilíngue com inglês acadêmico forte: preparação para TOEFL, Cambridge e SAT em escola ranqueada nacionalmente.",
    },
    detail: {
      en: "I graduated from a bilingual school, the same one I attended throughout my life, with long-term exposure to the English language and culture. I regularly took TOEFL, Cambridge and SAT mock exams, which strengthened my fluency and academic English. The institution is well-recognized locally and nationally, ranking 31st in Brazil in 2014.",
      pt: "Me graduei em uma escola bilíngue com contato contínuo com a língua e a cultura inglesa. Realizei simulados de TOEFL, Cambridge e SAT, o que fortaleceu minha fluência e o inglês acadêmico. A instituição é reconhecida na cidade, no estado e no país, tendo ficado em 31º lugar nacional em 2014.",
    },
  },
];
