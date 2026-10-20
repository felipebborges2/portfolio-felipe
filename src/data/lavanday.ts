import type { Localized } from "./shared";

/*
 * Case study content for the Lavanday Express website.
 *
 * Checked against the Lavanday repository (main, October 2026) and the live
 * site. Keep it to what can be verified:
 * - Only the general QR plaque is in use. The per-machine plaques were
 *   discontinued; the support page still accepts ?maquina= and opens with
 *   that machine selected, so the copy describes that, not 11 QR codes.
 * - Plaque installation in the store is not confirmed.
 * - The Google Business Profile and Instagram links with campaign
 *   parameters are prepared, not confirmed as updated.
 * - No business results (customers, sales, support volume, satisfaction)
 *   until there are months of data. No test counts or old Lighthouse scores.
 */

export const LAVANDAY_URL = "https://lavandayexpress.com.br";

export type CaseItem = { title: string; text: string };

export type CaseLink = {
  label: string;
  /** Omitted for deliverables that have no public URL. */
  href?: string;
  note: string;
};

export type CaseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type LavandayDetail = {
  summary: string;
  context: string[];
  role: string[];
  decisions: CaseItem[];
  flow: CaseItem[];
  flowNote: string[];
  publishing: string[];
  metrics: string[];
  deliverables: CaseLink[];
  images: { desktop: CaseImage; mobile: CaseImage; support: CaseImage };
  capturedOn: string;
};

const IMAGE_FILES = {
  desktop: { src: "/projects/lavanday-home.jpeg", width: 2880, height: 1800 },
  mobile: { src: "/projects/lavanday-mobile.jpeg", width: 780, height: 1688 },
  support: { src: "/projects/lavanday-support.jpeg", width: 780, height: 1928 },
};

export const lavandayDetail: Localized<LavandayDetail> = {
  en: {
    summary:
      "Website for a self-service laundromat in Feira de Santana, Bahia, Brazil. It gathers what a customer needs before visiting the store and makes it easier to ask for help while using the machines.",
    context: [
      "Lavanday Express is a self-service laundromat with five washers, five dryers and a payment kiosk. Customers handle the whole visit on their own: they need to know the price, understand the steps, find the store and know how to ask for help when something goes wrong.",
      "Before the site, that information was spread across the Google Business Profile, Instagram and WhatsApp conversations. To ask for help over WhatsApp, a customer had to describe from scratch where they were, which machine they were using and what happened.",
    ],
    role: [
      "I ran the project end to end: gathered with the business what customers need before and during a visit, organized the content, designed the responsive interface, implemented and tested it, published it, connected the domain and set up the metrics.",
      "I used AI assistants to support the implementation. The content and interface decisions, the code review and the validation in the browser and on a phone were mine.",
    ],
    decisions: [
      {
        title: "Price and directions on the first mobile screen",
        text: "Someone looking for a laundromat on their phone first wants to know how much it costs and how to get there. On mobile, the price per cycle and the “Open directions” button come before the opening-hours panel, with WhatsApp right below.",
      },
      {
        title: "The store’s actual rules, written to be read at the machine",
        text: "Prices, hours, step-by-step instructions, items that are not allowed and garment care follow the store’s rules. The copy is short because part of it is read inside the store, with a basket in hand.",
      },
      {
        title: "One source for the business data",
        text: "Prices, hours, machines and rules live in a single configuration file. The home page, the FAQ, the support page and the structured data for Google all read from it, so a price change can’t leave mismatched versions behind.",
      },
      {
        title: "Privacy as part of the design",
        text: "The Google map only loads when the visitor asks for it, the metrics use no cookies, and the support page never asks for a name or phone number.",
      },
    ],
    flow: [
      {
        title: "QR code in the store",
        text: "A plaque with a QR code opens the support page. The address is printed too, for anyone who prefers to type it.",
      },
      {
        title: "Machine identified",
        text: "The customer taps the machine number (washers L1 to L5, dryers S1 to S5) or the payment kiosk. The page also accepts the machine in the URL (/suporte?maquina=L3) and opens with it already selected.",
      },
      {
        title: "Reason for contact",
        text: "They pick the reason from a short list: how to use, payment problem, cycle didn’t start, washing or drying question, something else.",
      },
      {
        title: "WhatsApp with the message ready",
        text: "The button opens the laundromat’s WhatsApp with the text already written, for example “Machine: L3. Reason: cycle didn’t start.” The customer decides whether to send it.",
      },
    ],
    flowNote: [
      "The goal is to cut what the customer has to explain and what the staff has to ask back. Support is human, over WhatsApp, during opening hours, and the page says the reply may not be immediate. There is no chatbot.",
      "I tested the whole flow on the published site, and it works.",
    ],
    publishing: [
      "Static Next.js export served by Cloudflare Pages, on its own domain with HTTPS. The site started on Vercel and was migrated; the old Vercel address now redirects to the official domain.",
      "The www address redirects permanently (301) to the domain without www, keeping the path and query parameters, so links such as the QR code’s stay valid.",
      "Canonical URLs, sitemap and metadata point to the final domain. Unknown addresses show an error page served with an HTTP 404 status.",
      "Publishing runs through commands documented in the repository, which lint, type-check and build before uploading, with a preview before production. Pushing to GitHub does not publish the site. The code is versioned on GitHub, with the consolidated version on main.",
    ],
    metrics: [
      "GoatCounter records visits and clicks on key actions: opening directions, starting a WhatsApp chat, opening a FAQ question and starting a support contact (with the machine and reason).",
      "Campaign parameters identify visits from the QR code and from the links prepared for the Google Business Profile and the Instagram bio.",
      "Metrics count only on the official domain; previews and alternate addresses are left out. I confirmed in the dashboard that events were arriving during the rollout.",
      "Before anything is sent, the site strips unknown parameters from the URL, so names or phone numbers pasted into a link don’t reach the metrics. The text of the support message is never sent.",
      "A WhatsApp click is not a sent message, and a directions click is not a store visit. The numbers will be read with that in mind.",
    ],
    deliverables: [
      { label: "lavandayexpress.com.br", href: LAVANDAY_URL, note: "Live site on its own domain, with HTTPS" },
      {
        label: "/suporte?maquina=L3",
        href: `${LAVANDAY_URL}/suporte?maquina=L3`,
        note: "Support page opening with washer L3 already selected",
      },
      {
        label: "www.lavandayexpress.com.br",
        href: "https://www.lavandayexpress.com.br",
        note: "Permanent redirect to the domain without www",
      },
      {
        label: "lavanday-express.vercel.app",
        href: "https://lavanday-express.vercel.app",
        note: "Old address, redirecting to the official domain",
      },
      { label: "/privacidade", href: `${LAVANDAY_URL}/privacidade`, note: "Privacy page" },
      {
        label: "/pagina-inexistente",
        href: `${LAVANDAY_URL}/pagina-inexistente`,
        note: "Error page, served with HTTP 404",
      },
      {
        label: "QR plaque",
        note: "Print-ready files (SVG, PNG and an A4 PDF), generated by the project itself",
      },
    ],
    images: {
      desktop: {
        ...IMAGE_FILES.desktop,
        alt: "Lavanday Express home page on desktop, with the price per cycle, directions and WhatsApp buttons, and the opening-hours panel",
        caption: "Home page on desktop.",
      },
      mobile: {
        ...IMAGE_FILES.mobile,
        alt: "First mobile screen: price per cycle and the Open directions button before the rest of the content",
        caption: "First mobile screen: price and directions up front.",
      },
      support: {
        ...IMAGE_FILES.support,
        alt: "Support page on mobile opened with ?maquina=L3: washer L3 selected, the reason “Cycle didn’t start” chosen and the message that will open in WhatsApp",
        caption: "Support opened with ?maquina=L3: machine, reason and the prepared message.",
      },
    },
    capturedOn: "Screenshots of the live site, October 2026. The site is in Portuguese.",
  },
  pt: {
    summary:
      "Site de uma lavanderia de autoatendimento em Feira de Santana, na Bahia. Reúne o que o cliente precisa saber antes de ir à loja e facilita o pedido de ajuda durante o uso das máquinas.",
    context: [
      "A Lavanday Express é uma lavanderia de autoatendimento com cinco lavadoras, cinco secadoras e pagamento em um totem. O cliente conduz a visita sozinho: precisa saber o preço, entender o passo a passo, encontrar a loja e saber como pedir ajuda quando algo dá errado.",
      "Antes do site, essas informações estavam espalhadas entre o Perfil da Empresa no Google, o Instagram e conversas no WhatsApp. Para pedir ajuda pelo WhatsApp, o cliente precisava explicar do zero onde estava, qual máquina usava e o que tinha acontecido.",
    ],
    role: [
      "Conduzi o projeto de ponta a ponta: levantei com a operação o que o cliente precisa antes e durante a visita, organizei o conteúdo, desenhei a interface responsiva, implementei, testei, publiquei, conectei o domínio e configurei as métricas.",
      "Usei assistentes de IA como apoio na implementação. As decisões de conteúdo e interface, a revisão do código e a validação no navegador e no celular ficaram comigo.",
    ],
    decisions: [
      {
        title: "Preço e rota na primeira tela do celular",
        text: "Quem procura uma lavanderia pelo celular quer saber primeiro quanto custa e como chegar. No celular, o preço por ciclo e o botão “Abrir rota” aparecem antes do painel de horários, com o WhatsApp logo abaixo.",
      },
      {
        title: "Regras reais, escritas para ler em frente à máquina",
        text: "Preços, horários, passo a passo, itens não permitidos e cuidados com as roupas seguem as regras da loja. O texto é curto porque parte dele é lida dentro da lavanderia, com o cesto na mão.",
      },
      {
        title: "Uma única fonte para os dados do negócio",
        text: "Preços, horários, máquinas e regras ficam em um único arquivo de configuração. A página inicial, o FAQ, a página de suporte e os dados estruturados para o Google leem dali, então uma mudança de preço não deixa versões desencontradas.",
      },
      {
        title: "Privacidade desde o desenho",
        text: "O mapa do Google só carrega quando o visitante pede, as métricas não usam cookies e a página de suporte não pede nome nem telefone.",
      },
    ],
    flow: [
      {
        title: "QR code na loja",
        text: "Uma placa com QR code abre a página de suporte. O endereço também está impresso, para quem prefere digitar.",
      },
      {
        title: "Máquina identificada",
        text: "O cliente toca no número da máquina (lavadoras L1 a L5, secadoras S1 a S5) ou no totem. A página também aceita a máquina no endereço (/suporte?maquina=L3) e já abre com ela marcada.",
      },
      {
        title: "Motivo do contato",
        text: "Ele escolhe o motivo em uma lista curta: dúvida de uso, problema no pagamento, ciclo que não iniciou, dúvida sobre lavagem ou secagem, outro assunto.",
      },
      {
        title: "WhatsApp com a mensagem pronta",
        text: "O botão abre o WhatsApp da lavanderia com o texto montado, por exemplo “Máquina: L3. Motivo: ciclo não iniciou.” Quem decide enviar é o cliente.",
      },
    ],
    flowNote: [
      "A ideia é reduzir o que o cliente precisa explicar e o que a equipe precisa perguntar de volta. O atendimento é humano, pelo WhatsApp, durante o horário de funcionamento, e a página avisa que a resposta pode não ser imediata. Não há chatbot.",
      "Testei o fluxo completo no site publicado, e ele está funcionando.",
    ],
    publishing: [
      "Exportação estática do Next.js servida pelo Cloudflare Pages, em domínio próprio com HTTPS. O site começou na Vercel e foi migrado; o endereço antigo da Vercel agora redireciona para o domínio oficial.",
      "O endereço com www redireciona de forma permanente (301) para o domínio sem www, preservando caminho e parâmetros, o que mantém válidos links como o do QR code.",
      "Canonical, sitemap e metadados apontam para o domínio definitivo. Endereços inexistentes mostram uma página de erro com resposta HTTP 404.",
      "A publicação é feita por comandos documentados no repositório, que rodam lint, verificação de tipos e build antes do envio, com uma prévia antes da produção. Um push para o GitHub não publica o site. O código é versionado no GitHub, com a versão consolidada na main.",
    ],
    metrics: [
      "O GoatCounter registra visitas e cliques nas ações principais: abrir a rota, iniciar conversa no WhatsApp, abrir uma pergunta do FAQ e iniciar um contato de suporte (com a máquina e o motivo).",
      "Parâmetros de campanha identificam acessos vindos do QR code e dos links preparados para o Perfil da Empresa no Google e para a bio do Instagram.",
      "As métricas contam só no domínio oficial; prévias e endereços alternativos ficam de fora. Confirmei no painel o recebimento dos eventos durante a implantação.",
      "Antes de qualquer envio, o site remove da URL parâmetros desconhecidos, para que nomes ou telefones colados em um link não cheguem às métricas. O texto da mensagem de suporte nunca é enviado.",
      "Clique no WhatsApp não é mensagem enviada, e clique em rota não é visita à loja. Os números vão ser lidos com esse cuidado.",
    ],
    deliverables: [
      { label: "lavandayexpress.com.br", href: LAVANDAY_URL, note: "Site no ar em domínio próprio, com HTTPS" },
      {
        label: "/suporte?maquina=L3",
        href: `${LAVANDAY_URL}/suporte?maquina=L3`,
        note: "Página de suporte abrindo com a lavadora L3 já marcada",
      },
      {
        label: "www.lavandayexpress.com.br",
        href: "https://www.lavandayexpress.com.br",
        note: "Redirecionamento permanente para o domínio sem www",
      },
      {
        label: "lavanday-express.vercel.app",
        href: "https://lavanday-express.vercel.app",
        note: "Endereço antigo, redirecionando para o domínio oficial",
      },
      { label: "/privacidade", href: `${LAVANDAY_URL}/privacidade`, note: "Página de privacidade" },
      {
        label: "/pagina-inexistente",
        href: `${LAVANDAY_URL}/pagina-inexistente`,
        note: "Página de erro, com resposta HTTP 404",
      },
      {
        label: "Placa de QR code",
        note: "Arquivos para impressão (SVG, PNG e PDF A4), gerados pelo próprio projeto",
      },
    ],
    images: {
      desktop: {
        ...IMAGE_FILES.desktop,
        alt: "Página inicial da Lavanday Express no computador, com o preço por ciclo, os botões de rota e WhatsApp e o painel de horários",
        caption: "Página inicial no computador.",
      },
      mobile: {
        ...IMAGE_FILES.mobile,
        alt: "Primeira tela no celular: preço por ciclo e botão Abrir rota antes do restante do conteúdo",
        caption: "Primeira tela no celular: preço e rota logo no início.",
      },
      support: {
        ...IMAGE_FILES.support,
        alt: "Página de suporte no celular aberta com ?maquina=L3: lavadora L3 marcada, motivo “Ciclo não iniciou” escolhido e a mensagem que vai abrir no WhatsApp",
        caption: "Suporte aberto com ?maquina=L3: máquina, motivo e mensagem pronta.",
      },
    },
    capturedOn: "Capturas do site publicado, outubro de 2026.",
  },
};
