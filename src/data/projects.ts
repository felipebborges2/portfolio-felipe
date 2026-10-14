import type { Localized } from "./shared";

export type ProjectMetric = {
  label: Localized<string>;
  value: string;
};

export type ProjectContent = {
  /** What problem the project addresses. */
  problem: string;
  /** How it was built / the technical approach. */
  approach: string;
  /** The outcome — what shipped, and the metric if one exists. */
  result: string;
};

export type Project = {
  id: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: Localized<string>;
  };
  tags: string[];
  links: {
    live?: string;
    repo: string;
  };
  /** Only set when there is a real, verifiable number to show. */
  metric?: ProjectMetric;
  content: Localized<ProjectContent>;
};

export const projects: Project[] = [
  {
    id: "oncopredict",
    title: "OncoPredict",
    image: {
      src: "/projects/oncopredict.jpeg",
      width: 1280,
      height: 805,
      alt: {
        en: "Screenshot of the OncoPredict machine learning project",
        pt: "Captura de tela do projeto de machine learning OncoPredict",
      },
    },
    tags: ["Python", "Machine Learning", "scikit-learn", "Pandas", "NumPy"],
    links: { repo: "https://github.com/felipebborges2/OncoPredict" },
    metric: { label: { en: "AUC", pt: "AUC" }, value: "0.99" },
    content: {
      en: {
        problem:
          "Predicting tumor progression in acoustic neuroma patients from MRI radiomic features, to support earlier, data-driven decisions in a watch-and-wait clinical strategy.",
        approach:
          "Built a full ML pipeline in Python: radiomic feature engineering, then model comparison (SVM, Logistic Regression, Random Forest) with GridSearchCV and 5-fold cross-validation.",
        result:
          "Best model (linear-kernel SVM) reached 0.99 AUC and 98.2% accuracy, with a well-calibrated decision threshold (Youden index ≈ 0.51).",
      },
      pt: {
        problem:
          "Prever a progressão tumoral em pacientes com neurinoma do acústico a partir de características radiômicas de ressonância magnética, apoiando decisões mais embasadas em uma estratégia clínica de observação (watch-and-wait).",
        approach:
          "Pipeline completo de ML em Python: engenharia de atributos radiômicos, seguida de comparação de modelos (SVM, Regressão Logística, Random Forest) com GridSearchCV e validação cruzada de 5 folds.",
        result:
          "O melhor modelo (SVM com kernel linear) atingiu AUC de 0,99 e acurácia de 98,2%, com limiar de decisão bem calibrado (índice de Youden ≈ 0,51).",
      },
    },
  },
  {
    id: "atlasmind",
    title: "AtlasMind",
    image: {
      src: "/projects/atlasmind.jpeg",
      width: 2940,
      height: 1850,
      alt: {
        en: "Screenshot of the AtlasMind travel planning app",
        pt: "Captura de tela do aplicativo de planejamento de viagens AtlasMind",
      },
    },
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "OpenAI API", "Node.js"],
    links: {
      live: "https://atlasmind.vercel.app",
      repo: "https://github.com/felipebborges2/atlasmind",
    },
    content: {
      en: {
        problem:
          "Planning a trip usually means juggling dozens of tabs and generic itineraries that ignore what the traveler actually wants.",
        approach:
          "Built a full-stack Next.js app that sends user preferences to the OpenAI API and structures the response into a day-by-day itinerary, with a typed API layer end to end.",
        result:
          "Shipped to production on Vercel — turns a short preference form into a complete, personalized itinerary in seconds.",
      },
      pt: {
        problem:
          "Planejar uma viagem normalmente significa lidar com dezenas de abas e roteiros genéricos que ignoram o que o viajante realmente quer.",
        approach:
          "Construí uma aplicação full-stack em Next.js que envia as preferências do usuário para a API da OpenAI e estrutura a resposta em um roteiro dia a dia, com uma camada de API tipada de ponta a ponta.",
        result:
          "Publicado em produção na Vercel — transforma um formulário curto de preferências em um roteiro completo e personalizado em segundos.",
      },
    },
  },
  {
    id: "europedia",
    title: "Europedia",
    image: {
      src: "/projects/europedia.jpeg",
      width: 2940,
      height: 1842,
      alt: {
        en: "Screenshot of the Europedia travel guide",
        pt: "Captura de tela do guia de viagens Europedia",
      },
    },
    tags: ["JavaScript", "HTML", "CSS"],
    links: {
      live: "https://europedia.vercel.app",
      repo: "https://github.com/felipebborges2/europedia",
    },
    content: {
      en: {
        problem:
          "Researching European destinations usually means scattered, ad-heavy sites instead of a clean, city-by-city view.",
        approach:
          "Built a lightweight, responsive guide in vanilla JavaScript, HTML and CSS — no framework overhead, focused on fast load times.",
        result:
          "A fast, fully static reference site deployed on Vercel, built as a hands-on exercise in DOM manipulation and UI fundamentals.",
      },
      pt: {
        problem:
          "Pesquisar destinos europeus normalmente significa sites cheios de anúncios e informação espalhada, em vez de uma visão limpa por cidade.",
        approach:
          "Construí um guia leve e responsivo em JavaScript, HTML e CSS puros — sem framework, focado em carregamento rápido.",
        result:
          "Um site de referência estático e rápido, publicado na Vercel, como exercício prático de manipulação de DOM e fundamentos de UI.",
      },
    },
  },
  {
    id: "courtview",
    title: "CourtView",
    image: {
      src: "/projects/courtview.jpeg",
      width: 2940,
      height: 1848,
      alt: {
        en: "Screenshot of the CourtView NBA explorer",
        pt: "Captura de tela do explorador de times CourtView",
      },
    },
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    links: {
      live: "https://courtview.vercel.app",
      repo: "https://github.com/felipebborges2/courtview",
    },
    content: {
      en: {
        problem:
          "NBA fans want a fast way to browse team identity — colors, logos, rosters — without a cluttered, stats-heavy dashboard.",
        approach:
          "Built a React/Next.js/TypeScript app with a strong UI/UX focus, structuring team and player data into a clean, navigable interface.",
        result:
          "A polished, fast-loading team explorer that turns raw team and player data into an at-a-glance visual reference.",
      },
      pt: {
        problem:
          "Torcedores da NBA querem uma forma rápida de explorar a identidade dos times — cores, logos, elenco — sem um painel cheio de estatísticas.",
        approach:
          "Construí uma aplicação em React/Next.js/TypeScript com foco forte em UI/UX, organizando dados de times e jogadores em uma interface limpa e navegável.",
        result:
          "Um explorador de times rápido e refinado, que transforma dados brutos em uma referência visual de fácil leitura.",
      },
    },
  },
  {
    id: "finzeit",
    title: "FinZeit",
    image: {
      src: "/projects/finzeit.jpeg",
      width: 2940,
      height: 1844,
      alt: {
        en: "Screenshot of the FinZeit finance dashboard",
        pt: "Captura de tela do painel financeiro FinZeit",
      },
    },
    tags: ["Next.js", "Tailwind", "Recharts", "MongoDB", "React"],
    links: {
      live: "https://finzeit.vercel.app",
      repo: "https://github.com/felipebborges2/finzeit",
    },
    content: {
      en: {
        problem:
          "Personal finance tracking usually means messy spreadsheets or apps that don't separate income and expenses clearly over time.",
        approach:
          "Built a full-stack dashboard with Next.js, MongoDB and Google OAuth, with categorized income/expenses and monthly analytics rendered via Recharts.",
        result:
          "A live, multi-user app with authenticated data, category breakdowns and month-over-month spending trends.",
      },
      pt: {
        problem:
          "O controle financeiro pessoal costuma virar planilhas bagunçadas ou apps que não separam bem receitas e despesas ao longo do tempo.",
        approach:
          "Construí um painel full-stack com Next.js, MongoDB e login Google, com receitas e despesas categorizadas e análises mensais via Recharts.",
        result:
          "Um app em produção multiusuário, com dados autenticados, categorização e comparação de gastos mês a mês.",
      },
    },
  },
];
