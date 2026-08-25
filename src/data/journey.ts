import type { Localized } from "./shared";

export type JourneyItem = {
  id: string;
  period: Localized<string>;
  institution: Localized<string>;
  role: Localized<string>;
  /** One-line summary shown collapsed. */
  summary: Localized<string>;
  /** Full text revealed on expand. */
  detail: Localized<string>;
};

export const journeyItems: JourneyItem[] = [
  {
    id: "uni",
    period: { en: "2021 – Current", pt: "2021 – Atual" },
    institution: {
      en: "UFCSPA — Federal University of Health Sciences of Porto Alegre",
      pt: "UFCSPA — Universidade Federal de Ciências da Saúde de Porto Alegre",
    },
    role: { en: "Medical Physics Student", pt: "Graduando em Física Médica" },
    summary: {
      en: "Volunteer ML research predicting tumor progression from MRI data, plus dose-optimization and science outreach.",
      pt: "Pesquisa voluntária em ML para prever progressão tumoral a partir de dados de ressonância, além de otimização de dose e divulgação científica.",
    },
    detail: {
      en: "During my degree, I've been part of research projects aimed at optimizing medical imaging and radiation protection, including a scientific initiation focused on dose reduction in pediatric CT scans. I also participated in a teaching outreach project (PID), co-creating the PodRadiation podcast to make topics on radiation and radiological safety accessible to the academic community and the general public. Currently, I volunteer in a research project that develops and validates a machine-learning model based on MRI radiomic features to predict tumor progression in patients with acoustic neuroma under an initial watch-and-wait strategy. These experiences strengthened my skills in research, scientific communication, and problem-solving — the same analytical mindset I apply today in software development and data science.",
      pt: "Durante a graduação, participei de projetos de pesquisa voltados à otimização de imagens médicas e proteção radiológica, incluindo uma iniciação científica focada na redução de dose em tomografias pediátricas. Também integrei um projeto de iniciação à docência (PID), co-criando o podcast PodRadiation para tornar acessíveis temas de radiação e segurança radiológica à comunidade acadêmica e ao público geral. Atualmente, sou voluntário em um projeto que desenvolve e valida um modelo de machine learning baseado em características radiômicas de ressonância magnética para prever a progressão tumoral em pacientes com neurinoma acústico em estratégia inicial de observação. Essas experiências fortaleceram minhas habilidades de pesquisa, comunicação científica e resolução de problemas — a mesma lógica analítica que hoje aplico no desenvolvimento de software e em ciência de dados.",
    },
  },
  {
    id: "intern",
    period: { en: "2023 – 2024", pt: "2023 – 2024" },
    institution: {
      en: "CEVS — State Center for Health Surveillance",
      pt: "CEVS — Centro Estadual de Vigilância em Saúde",
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
    period: { en: "2017 – 2020", pt: "2017 – 2020" },
    institution: { en: "Colégio Helyos", pt: "Colégio Helyos" },
    role: { en: "High-School Student", pt: "Ensino Médio" },
    summary: {
      en: "Bilingual education with strong academic English — TOEFL, Cambridge and SAT prep at a nationally top-ranked school.",
      pt: "Educação bilíngue com inglês acadêmico forte — preparação para TOEFL, Cambridge e SAT em escola ranqueada nacionalmente.",
    },
    detail: {
      en: "I graduated from a bilingual school — the same school I attended throughout my life — with long-term exposure to the English language and culture. I regularly took TOEFL, Cambridge and SAT mock exams, which strengthened my fluency and academic English. The institution is well-recognized locally and nationally, ranking 31st in Brazil in 2014.",
      pt: "Me graduei em uma escola bilíngue com contato contínuo com a língua e a cultura inglesa. Realizei simulados de TOEFL, Cambridge e SAT, o que fortaleceu minha fluência e o inglês acadêmico. A instituição é reconhecida na cidade, no estado e no país, tendo ficado em 31º lugar nacional em 2014.",
    },
  },
];
