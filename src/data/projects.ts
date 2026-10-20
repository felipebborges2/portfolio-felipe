import type { Localized, MaybeLocalized } from "./shared";

export type ProjectContent = {
  /** What problem the project addresses. */
  problem: string;
  /** How it was built / the technical approach. */
  approach: string;
  /** The outcome in plain language. Numbers belong on the detail page, not here. */
  result: string;
};

export type Project = {
  id: string;
  title: MaybeLocalized;
  /** Short context line shown above the title, e.g. "Undergraduate thesis". */
  eyebrow?: Localized<string>;
  /** Shown as a badge for work that is still ongoing. */
  status?: Localized<string>;
  /**
   * Screenshot of the product. Optional: projects without a real, legible
   * visual get a typographic card instead of a made-up image.
   */
  image?: {
    src: string;
    width: number;
    height: number;
    alt: Localized<string>;
  };
  tags: MaybeLocalized[];
  links: {
    live?: string;
    repo?: string;
    /** Internal detail page. */
    detail?: string;
  };
  content: Localized<ProjectContent>;
};

export const projects: Project[] = [
  {
    id: "pcos-generalization",
    title: {
      en: "Deep Learning Generalization for PCOS Detection",
      pt: "Generalização de Deep Learning na Detecção de PCOS",
    },
    eyebrow: {
      en: "Undergraduate thesis · UFCSPA",
      pt: "TCC · Física Médica · UFCSPA",
    },
    status: {
      en: "In progress: TCC 1 presented, TCC 2 underway",
      pt: "Em andamento: TCC 1 apresentado, TCC 2 em execução",
    },
    tags: [
      "Deep Learning",
      "PyTorch",
      "ResNet-50",
      "Transfer Learning",
      { en: "External Validation", pt: "Validação Externa" },
      "Domain Shift",
      "Federated Learning",
      { en: "Medical Imaging", pt: "Imagem Médica" },
    ],
    links: { detail: "/projects/pcos-generalization" },
    // No results of any kind until TCC 2 is complete (see src/data/pcos.ts).
    content: {
      en: {
        problem:
          "Deep learning models in medical imaging are usually validated only on data from the same source they were trained on, which overestimates how well they generalize.",
        approach:
          "Fine-tuned an ImageNet-pretrained ResNet-50 in PyTorch to detect PCOS in ultrasound images, training on one public dataset and testing on two others from different sources.",
        result:
          "Results will be released after TCC 2 is complete.",
      },
      pt: {
        problem:
          "Modelos de deep learning em imagem médica costumam ser validados só com dados da mesma fonte do treino, o que superestima sua capacidade de generalização.",
        approach:
          "Fine-tuning de uma ResNet-50 pré-treinada na ImageNet, em PyTorch, para detectar PCOS em ultrassom: treino em uma base pública e teste em outras duas, de fontes distintas.",
        result:
          "Os resultados serão divulgados após a conclusão do TCC 2.",
      },
    },
  },
  {
    id: "oncopredict",
    title: "OncoPredict",
    eyebrow: {
      en: "Educational ML project",
      pt: "Projeto educacional de ML",
    },
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "SHAP", "Machine Learning"],
    links: { repo: "https://github.com/felipebborges2/OncoPredict" },
    // Deliberately no metrics or threshold/calibration claims until the
    // evaluation issues in the OncoPredict repo are fixed.
    // No image on purpose: public/projects/oncopredict.jpeg (an editor
    // screenshot showing AUC values) is kept unused as a reference until it
    // is replaced by an exported ROC curve.
    content: {
      en: {
        problem:
          "Practice a complete supervised ML workflow on a classic clinical tabular problem: classifying breast tumors as malignant or benign.",
        approach:
          "On the Breast Cancer Wisconsin Diagnostic dataset (569 samples, 30 numeric features), compared Logistic Regression, Random Forest and SVM using preprocessing pipelines and GridSearchCV, with feature-importance analysis and SHAP on the Random Forest.",
        result:
          "A reproducible pipeline from exploration to model comparison and explainability, with CSV-based inference on new tabular samples. Educational project, not for clinical use.",
      },
      pt: {
        problem:
          "Praticar um fluxo completo de ML supervisionado em um problema clínico tabular clássico: classificar tumores de mama como malignos ou benignos.",
        approach:
          "Com o Breast Cancer Wisconsin Diagnostic (569 amostras, 30 características numéricas), comparei Regressão Logística, Random Forest e SVM usando pipelines de pré-processamento e GridSearchCV, com análise de importância das características e SHAP no Random Forest.",
        result:
          "Um pipeline reprodutível da exploração à comparação de modelos e explicabilidade, com inferência por CSV em novas amostras tabulares. Projeto educacional, sem uso clínico.",
      },
    },
  },
  {
    id: "lavanday-express",
    title: "Lavanday Express",
    eyebrow: {
      en: "Website for a local business",
      pt: "Site para negócio local",
    },
    status: {
      en: "Live · custom domain",
      pt: "Publicado · domínio próprio",
    },
    image: {
      src: "/projects/lavanday-home.jpeg",
      width: 2880,
      height: 1800,
      alt: {
        en: "Lavanday Express home page on desktop, with the price per cycle, directions and WhatsApp buttons, and opening hours",
        pt: "Página inicial da Lavanday Express no computador, com o preço por ciclo, os botões de rota e WhatsApp e o horário de funcionamento",
      },
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Cloudflare Pages", "GoatCounter"],
    // No `repo` link on purpose: the repository is private.
    links: {
      live: "https://lavandayexpress.com.br",
      detail: "/projects/lavanday-express",
    },
    // Facts only: published, tested, metrics configured. No business results
    // until there is data (see src/data/lavanday.ts).
    content: {
      en: {
        problem:
          "Customers of a self-service laundromat need the price, opening hours and directions before they visit, and a quick way to ask for help about a specific machine once they are in the store.",
        approach:
          "Responsive Next.js site with the price and directions on the first mobile screen, plus a support page reached by QR code where the customer picks the machine and the reason and opens WhatsApp with the message already written.",
        result:
          "Live on its own domain on Cloudflare Pages, with the support flow tested end to end and visit and click metrics in place.",
      },
      pt: {
        problem:
          "Clientes de uma lavanderia de autoatendimento precisam saber preço, horário e como chegar antes da visita e, já na loja, ter um jeito rápido de pedir ajuda sobre uma máquina específica.",
        approach:
          "Site responsivo em Next.js com preço e rota na primeira tela do celular, e uma página de suporte acessada por QR code em que o cliente escolhe a máquina e o motivo e abre o WhatsApp com a mensagem pronta.",
        result:
          "Publicado em domínio próprio no Cloudflare Pages, com o fluxo de suporte testado de ponta a ponta e métricas de visitas e cliques configuradas.",
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
          "Shipped to production on Vercel. It turns a short preference form into a complete, personalized itinerary in seconds.",
      },
      pt: {
        problem:
          "Planejar uma viagem normalmente significa lidar com dezenas de abas e roteiros genéricos que ignoram o que o viajante realmente quer.",
        approach:
          "Construí uma aplicação full-stack em Next.js que envia as preferências do usuário para a API da OpenAI e estrutura a resposta em um roteiro dia a dia, com uma camada de API tipada de ponta a ponta.",
        result:
          "Publicado em produção na Vercel. Transforma um formulário curto de preferências em um roteiro completo e personalizado em segundos.",
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
          "Built a lightweight, responsive guide in vanilla JavaScript, HTML and CSS, with no framework overhead and a focus on fast load times.",
        result:
          "A fast, fully static reference site deployed on Vercel, built as a hands-on exercise in DOM manipulation and UI fundamentals.",
      },
      pt: {
        problem:
          "Pesquisar destinos europeus normalmente significa sites cheios de anúncios e informação espalhada, em vez de uma visão limpa por cidade.",
        approach:
          "Construí um guia leve e responsivo em JavaScript, HTML e CSS puros, sem framework e focado em carregamento rápido.",
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
          "NBA fans want a fast way to browse team identity (colors, logos, rosters) without a cluttered, stats-heavy dashboard.",
        approach:
          "Built a React/Next.js/TypeScript app with a strong UI/UX focus, structuring team and player data into a clean, navigable interface.",
        result:
          "A polished, fast-loading team explorer that turns raw team and player data into an at-a-glance visual reference.",
      },
      pt: {
        problem:
          "Torcedores da NBA querem uma forma rápida de explorar a identidade dos times (cores, logos, elenco) sem um painel cheio de estatísticas.",
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
