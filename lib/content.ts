export const profile = {
  name: "Milton Sylvio da Silva Junior",
  shortName: "Milton Sylvio Jr.",
  brand: "M2S",
  role: "Fullstack / Frontend Senior",
  badge: "SENIOR // FULLSTACK",
  email: "milton.sylvio@outlook.com",
  phone: "(11) 98022-8216",
  phoneIntl: "+55 (11) 98022-8216",
  location: "Osasco/SP, Brasil",
  locationLong: "Osasco / São Paulo, Brasil (Remoto / Híbrido)",
  whatsapp: "https://wa.me/5511980228216",
  github: "https://github.com/milton-sylvio-front",
  githubLabel: "github.com/milton-sylvio-front",
  linkedin: "https://www.linkedin.com/in/milton-sylvio-da-silva-junior",
  linkedinLabel: "linkedin.com/in/milton-sylvio-da-silva-junior",
  cloneCommand: "git clone https://github.com/milton-sylvio-front.git",
  portrait: "/milton-sylvio.jpg",
} as const;

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#habilidades-e-stack", label: "Habilidades & Stack" },
  { href: "#projetos", label: "Projetos" },
] as const;

export const metrics = [
  {
    label: "LEGACY & EXP",
    icon: "history_edu",
    value: "+20 Anos",
    detail: "Carreira contínua em software e engenharia web",
    accent: false,
  },
  {
    label: "ALTO IMPACTO",
    icon: "group",
    value: "+10M Users",
    detail: "Impactados em plataformas de missão crítica nacional",
    accent: false,
  },
  {
    label: "QUALIDADE & TESTES",
    icon: "verified_user",
    value: "88% Coverage",
    detail: "Cobertura unitária e E2E (Jest, Testing Library, Cypress)",
    accent: false,
  },
  {
    label: "PERFORMANCE TTI",
    icon: "speed",
    value: "-3.0s Latência",
    detail: "Otimização consistente em Core Web Vitals e render",
    accent: true,
  },
] as const;

export const companies = [
  "Serasa Experian",
  "Unicred",
  "Boa Vista",
  "Dasa Saúde",
  "GuiaMais",
  "Dafiti",
  "Mercado Livre",
] as const;

export const agenticPoints = [
  {
    icon: "bolt",
    title: "Velocidade x3 em Prototipação",
    detail: "Geração rápida de boilerplate, mocks e tipagens estritas via Cursor AI.",
  },
  {
    icon: "fact_check",
    title: "Supervisão Humana Rigorosa",
    detail: "Garantia estrita de padrões de acessibilidade (WCAG), code review e segurança.",
  },
  {
    icon: "schema",
    title: "Refatoração Guiada por Testes",
    detail: "Claude Code para geração iterativa de cenários de edge cases e cobertura.",
  },
] as const;

export type Experience = {
  company: string;
  badge: string;
  badgeTone: "mint" | "neutral";
  role: string;
  period: string;
  summary: string;
  highlights: { label: string; detail: string }[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "Serasa Experian",
    badge: "RECENT ROLE",
    badgeTone: "mint",
    role: "Desenvolvedor de Front-end Sênior",
    period: "ago/2024 – set/2026",
    summary:
      "Desenvolvimento e evolução estratégica dos produtos de altíssimo tráfego Serasa Score e Serasa Premium. Participação no ciclo completo: da análise de requisitos refinados à esteira de observabilidade e monitoramento contínuo em produção.",
    highlights: [
      {
        label: "CONVERSÃO & SCORE",
        detail:
          "Aplicações Next.js/TypeScript em fluxos vitais de contratação com alta taxa de finalização.",
      },
      {
        label: "COBERTURA ELEVADA",
        detail:
          "Salto de confiabilidade: cobertura de testes elevada de 70% para 88% com Jest e Cypress.",
      },
      {
        label: "OBSERVABILIDADE REAL",
        detail:
          "Painéis Datadog de erro/rum e tagueamento com Google Tag Manager para produto.",
      },
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Jest & Cypress", "Datadog", "Google Tag Manager"],
  },
  {
    company: "Unicred",
    badge: "FINTECH & BANKING",
    badgeTone: "neutral",
    role: "Desenvolvedor Fullstack Sênior",
    period: "out/2023 – ago/2024",
    summary:
      "Atuação central no desenvolvimento do MVP de Cobrança Caucionada, abrangendo desde a concepção de telas institucionais e operacionais até a camada intermediária de microsserviços.",
    highlights: [
      {
        label: "MIGRAÇÃO ESTRATÉGICA",
        detail:
          "Migração de Angular legado para stack moderna com React e TypeScript com documentação viva.",
      },
      {
        label: "PERFORMANCE GAIN",
        detail: "Redução substancial de 2,5s no carregamento de tela em agências de crédito.",
      },
      {
        label: "BFF EM NODE.JS",
        detail: "Backend for Frontend desacoplado para orquestração de APIs bancárias e segurança.",
      },
    ],
    tags: ["React.js", "TypeScript", "Node.js (BFF)", "Styled Components", "Redux", "Jest"],
  },
  {
    company: "Boa Vista",
    badge: "ESPECIALISTA",
    badgeTone: "neutral",
    role: "Engenheiro de Software – Especialista I",
    period: "fev/2022 – set/2023",
    summary:
      "Liderança e execução dos sistemas Customer Support Portal e Customer Support Gestor (plataformas críticas de atendimento e suporte corporativo ao cliente).",
    highlights: [
      {
        label: "IMPACTO DE RECEITA",
        detail:
          "Expansão de 250 para +2.500 usuários ativos mensais e +2,5% de incremento no faturamento.",
      },
      {
        label: "LATÊNCIA OTIMIZADA",
        detail: "Redução recorde de mais de 3s no tempo de carregamento inicial dos painéis.",
      },
      {
        label: "SISTEMA ACESSÍVEL",
        detail: "Padronização com Chakra UI e Styled System focando em WCAG e ergonomia operacional.",
      },
    ],
    tags: ["React", "TypeScript", "Chakra UI", "Styled Components", "Web Vitals"],
  },
];

export const compactExperiences = [
  {
    company: "Dasa Saúde",
    period: "abr/2018 – jan/2022",
    role: "Especialista de Tecnologia I",
    summary:
      "Internalização e evolução das frentes Álvaro/AOL 2.0, Agendamento Online e construção fundamental do Design System Corporativo para múltiplos hospitais e laboratórios.",
    tags: ["Vue.js", "React", "Design System", "APIs REST"],
  },
  {
    company: "GuiaMais",
    period: "jun/2015 – mar/2018",
    role: "Desenvolvedor Front-end Sênior",
    summary:
      "Atuação em portais de massivo tráfego nacional (guiamais.com.br, empresas.guiamais.com.br, tudoaquisaopaulo). Otimizações em escala para web core e SEO técnico.",
    tags: ["HTML5/CSS3", "JavaScript", "PHP / Java", "High Traffic"],
  },
] as const;

export const skillGroups = [
  {
    icon: "devices",
    badge: "TIER 1",
    tone: "mint" as const,
    title: "Frontend Architecture",
    summary: "Construção de aplicações SPA, SSR e SSG ultra-responsivas e resilientes.",
    items: ["React.js", "Next.js", "TypeScript", "Vue.js / Nuxt", "Tailwind CSS", "Design Systems"],
    featured: ["React.js", "Next.js", "TypeScript"],
    footer: "DOMÍNIOS: WCAG 2.1 • ATOMIC DESIGN • MICRO-FRONTENDS",
    span: false,
  },
  {
    icon: "database",
    badge: "FULLSTACK",
    tone: "neutral" as const,
    title: "Backend & Dados",
    summary: "Camadas BFF, integrações resilientes com APIs e persistência poliglota.",
    items: ["Node.js", "BFF Architecture", "Express", "GraphQL", "Supabase", "PostgreSQL / MongoDB"],
    featured: ["Node.js", "BFF Architecture"],
    footer: "DOMÍNIOS: RESTFUL APIS • JWT • CACHE REDIS • ORMS",
    span: false,
  },
  {
    icon: "verified",
    badge: "88% TARGET",
    tone: "mint" as const,
    title: "Qualidade & DevOps",
    summary: "Automação de ponta a ponta garantindo esteiras CI/CD sem regressões.",
    items: ["Jest", "Testing Library", "Cypress (E2E)", "Vitest", "CI/CD Pipelines", "Docker / Git"],
    featured: ["Jest", "Testing Library"],
    footer: "DOMÍNIOS: TDD • SONARQUBE • GITHUB ACTIONS",
    span: false,
  },
  {
    icon: "monitoring",
    badge: "TELEMETRY",
    tone: "mint" as const,
    title: "Performance & Monitoramento",
    summary: "Visibilidade instantânea sobre gargalos de infraestrutura e comportamento real.",
    items: ["Datadog (RUM/APM)", "Google Tag Manager", "Core Web Vitals", "SEO Técnico", "Lighthouse Audit"],
    featured: ["Datadog (RUM/APM)"],
    footer: "MÉTRICAS: LCP < 1.2S • FID < 50MS • CLS < 0.05",
    span: false,
  },
] as const;

export const agentTools = [
  {
    title: "Cursor IDE",
    detail:
      "Desenvolvimento assistido com contexto total da codebase e regras personalizadas (.cursorrules).",
  },
  {
    title: "Claude Code",
    detail: "Agentes CLI para refatoração em lote, diagnósticos complexos e testes de regressão.",
  },
  {
    title: "Human Oversight",
    detail:
      "Supervisão sênior garantindo integridade arquitetural, segurança e elegância de implementação.",
  },
] as const;

export const projects = [
  {
    file: "serasa-core // score-flow.tsx",
    badge: "HIGH TRAFFIC",
    tone: "mint" as const,
    title: "Serasa Score & Premium Architecture",
    summary:
      "Engenharia frontend de fluxos vitais para consulta e contratação de assinaturas. Interface moderna orientada a microsserviços com renderização dinâmica e isolamento de dependências.",
    specs: [
      ["// Cobertura de Testes:", "88% (Jest + Cypress)"],
      ["// Telemetria Ativa:", "Datadog APM + GTM DataLayer"],
    ],
    tags: ["Next.js", "TypeScript", "Cypress"],
    link: "Examinar arquitetura",
  },
  {
    file: "unicred-fintech // bff-caucao.ts",
    badge: "FINTECH MVP",
    tone: "neutral" as const,
    title: "Cobrança Caucionada MVP & BFF",
    summary:
      "Modernização integral da plataforma corporativa com migração assistida de Angular para React 18, acompanhado de um BFF em Node.js para unificação de múltiplos backends legados.",
    specs: [
      ["// Ganho de Desempenho:", "-2.5s TTI no carregamento"],
      ["// Arquitetura:", "React + TS + Node BFF + Redux"],
    ],
    tags: ["React.js", "Node.js", "Redux Toolkit"],
    link: "Ver no GitHub",
  },
  {
    file: "dasa-ui // design-tokens.config.json",
    badge: "DESIGN SYSTEM",
    tone: "tertiary" as const,
    title: "Multi-Brand Design System Corporativo",
    summary:
      "Construção de ecossistema compartilhado de componentes para redes hospitalares e exames (Dasa Saúde e Boa Vista). Tokens agnósticos, componentes reutilizáveis e total acessibilidade WCAG.",
    specs: [
      ["// Frameworks Atendidos:", "React, Vue.js, Web Components"],
      ["// Governança de UI:", "Storybook + Figma Tokens"],
    ],
    tags: ["Chakra UI", "Styled System", "Accessibility"],
    link: "Documentação técnica",
  },
  {
    file: "telemetry // datadog-rum.config.js",
    badge: "CORE VITALS",
    tone: "mint" as const,
    title: "Performance & Observability Pipeline",
    summary:
      "Módulo plugável para rastreamento de Real User Monitoring (RUM), Synthetic Tests, interceptação de erros em produção e injeção semântica de eventos analíticos corporativos.",
    specs: [
      ["// Otimização Alcançada:", "-3.0s de latência na Boa Vista"],
      ["// Escalar:", "250 -> 2.500 usuários ativos"],
    ],
    tags: ["Datadog", "GTM", "Web Vitals"],
    link: "Ver repositórios",
  },
] as const;
