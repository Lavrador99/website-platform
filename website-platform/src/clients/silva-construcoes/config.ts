/** Silva Construções — client configuration. Loaded exclusively via src/clients/loadClient.ts. */

/*
 * ─── Required Assets ──────────────────────────────────────────────────────────
 *
 * Place the following image files in src/clients/silva-construcoes/assets/
 * before deploying to production. All paths below are referenced as strings
 * in this config and must be served from the /public or /assets build output.
 *
 * Logo
 *   logo.png                  — 400×120 px, fundo transparente, versão principal
 *   logo-white.png            — 400×120 px, fundo transparente, versão branca para cabeçalho escuro
 *
 * Hero
 *   hero-bg.jpg               — 1920×1080 px, fotografia de obra/construção em Coimbra
 *
 * Portfólio
 *   portfolio-apartamento-coimbra.jpg     — 800×600 px, apartamento renovado no centro de Coimbra
 *   portfolio-edificio-comercial.jpg      — 800×600 px, edifício de escritórios no Parque Empresarial
 *   portfolio-reabilitacao-historica.jpg  — 800×600 px, edifício histórico reabilitado
 *   portfolio-restaurante.jpg             — 800×600 px, restaurante renovado
 *   portfolio-moradia-familiar.jpg        — 800×600 px, moradia unifamiliar renovada em Condeixa
 *   portfolio-espaco-comercial.jpg        — 800×600 px, espaço comercial montado em Figueira da Foz
 *
 * Equipa
 *   team-antonio-silva.jpg    — 400×400 px, fotografia profissional, rácio 1:1
 *   team-mariana-ferreira.jpg — 400×400 px, fotografia profissional, rácio 1:1
 *   team-rui-goncalves.jpg    — 400×400 px, fotografia profissional, rácio 1:1
 *
 * Open Graph / SEO
 *   og-image.jpg              — 1200×630 px, imagem de capa para redes sociais
 * ──────────────────────────────────────────────────────────────────────────────
 */

import type { WebsiteConfig } from '@app-types/website-config'

const config: WebsiteConfig = {
  client: 'silva-construcoes',

  businessName: 'Silva Construções',
  tagline: 'Construímos com qualidade. Entregamos com confiança.',
  description:
    'A Silva Construções é uma empresa de construção civil sediada em Coimbra, com 20 anos ' +
    'de experiência em remodelações residenciais e edifícios comerciais em toda a região Centro de Portugal.',

  logo: {
    text: 'Silva Construções',
    icon: '🏗️',
  },

  colors: {
    primary: '#1E3A8A',   // Azul marinho profundo — transmite solidez e confiança
    secondary: '#F59E0B', // Âmbar dourado — energia, qualidade e atenção ao detalhe
    accent: '#64748B',    // Ardósia — neutralidade profissional e sofisticação
  },

  contact: {
    phone: '+351 239 412 780',
    email: 'info@silvaconstrucoes.pt',
    // Rua real em Coimbra (Solum, freguesia de Santo António dos Olivais)
    address: 'Rua Doutor Manuel Rodrigues, 47, 3030-165 Coimbra',
  },

  nav: [
    { label: 'Início', href: '/' },
    { label: 'Sobre Nós', href: '/about' },
    { label: 'Serviços', href: '/services' },
    { label: 'Portfólio', href: '/portfolio' },
    { label: 'Contacto', href: '/contact' },
  ],

  hero: {
    headline: 'Transformamos Espaços. Construímos Futuros.',
    subheadline:
      'Mais de 20 anos a edificar sonhos em Coimbra e na região Centro — com rigor técnico, materiais de excelência e prazos cumpridos.',
    ctaLabel: 'Pedir Orçamento',
    ctaHref: '/contacto',
  },

  // ─── Sobre Nós ──────────────────────────────────────────────────────────────

  about: {
    headline: '20 Anos a Construir Confiança',
    body:
      'Fundada em 2004 por António Silva, a Silva Construções nasceu da convicção de que construir bem é, acima de tudo, um ato de responsabilidade. Começámos com uma equipa de cinco pessoas e obras de remodelação em habitações familiares na cidade de Coimbra. Ao longo de duas décadas, crescemos para uma organização de 35 profissionais, alargámos a nossa área de atuação a toda a região Centro e conquistámos a confiança de centenas de clientes particulares e empresariais.\n\n' +
      'Hoje, a Silva Construções é reconhecida pela capacidade de gerir projetos de elevada complexidade — desde a reabilitação de edifícios históricos classificados até à construção de raiz de instalações comerciais de grande escala. A nossa filosofia mantém-se inalterada: escutar o cliente, propor as melhores soluções técnicas e entregar um trabalho que supere as expectativas, dentro do prazo e do orçamento acordados. Cada obra que assinamos é um testemunho da nossa dedicação à excelência.',
    values: [
      {
        icon: '🏆',
        title: 'Qualidade',
        description:
          'Utilizamos apenas materiais certificados de fornecedores de referência e aplicamos processos construtivos validados pelas normas europeias NP EN. A qualidade não é uma opção — é o nosso padrão mínimo em cada fase da obra.',
      },
      {
        icon: '🤝',
        title: 'Fiabilidade',
        description:
          'Cumprimos os prazos e os orçamentos acordados. Mantemos o cliente informado em cada etapa, com relatórios de progresso regulares e total transparência sobre decisões técnicas e custos.',
      },
      {
        icon: '🌱',
        title: 'Sustentabilidade',
        description:
          'Integramos práticas de construção sustentável em todos os nossos projetos: isolamento térmico de alta eficiência, sistemas de reutilização de água, energias renováveis e gestão responsável de resíduos de obra.',
      },
    ],
    team: [
      {
        name: 'António Silva',
        role: 'Fundador e Diretor Geral',
        bio: 'Engenheiro Civil formado pela Universidade de Coimbra, António fundou a empresa em 2004 após dez anos em grandes construtoras nacionais. É o garante da visão estratégica e dos valores que definem a identidade da Silva Construções.',
        avatarInitials: 'AS',
      },
      {
        name: 'Mariana Ferreira',
        role: 'Arquiteta Responsável de Projeto',
        bio: 'Licenciada em Arquitetura pela FCTUC e com pós-graduação em Reabilitação Urbana, Mariana lidera a equipa de projeto, assegurando que cada obra conjuga funcionalidade, estética e conformidade regulamentar.',
        avatarInitials: 'MF',
      },
      {
        name: 'Rui Gonçalves',
        role: 'Gestor de Obras',
        bio: 'Com 15 anos de experiência em direção de obra, Rui coordena as equipas no terreno, gere subempreiteiros e garante que cada intervenção respeita os mais exigentes padrões de segurança e qualidade da construção.',
        avatarInitials: 'RG',
      },
    ],
  },

  // ─── Serviços ───────────────────────────────────────────────────────────────

  services: {
    headline: 'Os Nossos Serviços',
    subheadline:
      'Da remodelação de um apartamento à construção de um edifício comercial, oferecemos soluções completas e personalizadas para cada projeto.',
    items: [
      {
        icon: '🏠',
        title: 'Remodelação Residencial',
        description:
          'Transformamos a sua habitação num espaço que reflita o seu estilo de vida. Das obras parciais à remodelação total, garantimos acabamentos de excelência, prazos cumpridos e uma experiência sem stress para o proprietário.',
        features: [
          'Remodelação de cozinhas e salas',
          'Renovação de casas de banho',
          'Ampliações e alterações de compartimentos',
          'Acabamentos interiores e exteriores premium',
        ],
      },
      {
        icon: '🏢',
        title: 'Construção Comercial',
        description:
          'Construímos e adaptamos espaços comerciais que valorizam a imagem da sua empresa e maximizam a produtividade das suas equipas. Da fase de licenciamento à entrega das chaves, gerimos todo o processo.',
        features: [
          'Escritórios e espaços corporativos',
          'Lojas e estabelecimentos de retalho',
          'Restaurantes, cafés e espaços de restauração',
          'Armazéns e espaços industriais ligeiros',
        ],
      },
      {
        icon: '🏛️',
        title: 'Reabilitação de Edifícios',
        description:
          'Especializamo-nos na recuperação do parque edificado português, respeitando a identidade arquitetónica e os requisitos do IMI e do IFRRU 2020. Devolvemos vida e valor a edifícios antigos com total respeito pelo seu caráter histórico.',
        features: [
          'Consolidação estrutural e reforço sísmico',
          'Recuperação de fachadas e elementos decorativos',
          'Melhoria da eficiência energética (certificação RECS)',
          'Reabilitação de coberturas e impermeabilizações',
        ],
      },
      {
        icon: '🔑',
        title: 'Projetos Chave-na-Mão',
        description:
          'Para quem quer total tranquilidade, entregamos o projeto completo — desde a conceção arquitetónica e o licenciamento camarário até à decoração de interiores e entrega final. Um único interlocutor, zero preocupações.',
        features: [
          'Projeto de arquitetura e especialidades incluídos',
          'Gestão integral de licenciamentos e alvarás',
          'Coordenação de todos os subempreiteiros',
          'Decoração de interiores e mobiliário opcional',
        ],
      },
    ],
  },

  // ─── Portfólio ──────────────────────────────────────────────────────────────

  portfolio: {
    headline: 'O Nosso Trabalho',
    subheadline:
      'Uma seleção de projetos que ilustram a nossa capacidade técnica, a diversidade de intervenções e o cuidado que colocamos em cada obra.',
    items: [
      {
        title: 'Apartamento T3 — Centro de Coimbra',
        category: 'Residencial',
        description:
          'Remodelação integral de apartamento de 110 m² no Bairro Norton de Matos. Redesenho da planta, abertura de vãos, cozinha em open-space e casa de banho principal com acabamentos em microcimento e madeira de carvalho.',
        tags: ['Remodelação Total', 'Open-Space', 'Coimbra Centro'],
        accentColor: '#1E3A8A',
      },
      {
        title: 'Edifício de Escritórios — Parque Empresarial de Coimbra',
        category: 'Comercial',
        description:
          'Construção de raiz de edifício de dois pisos para espaços de escritório, com 850 m² de área bruta, fachada ventilada em alumínio e sistema AVAC centralizado. Entregue 12 dias antes do prazo contratual.',
        tags: ['Construção Nova', 'Escritórios', 'AVAC'],
        accentColor: '#F59E0B',
      },
      {
        title: 'Reabilitação de Edifício Pombalino — Baixa de Coimbra',
        category: 'Reabilitação',
        description:
          'Recuperação de edifício do século XVIII na Rua Ferreira Borges, com reforço da estrutura de madeira, restauro de azulejos de fachada e melhoria da eficiência energética mantendo a traça original aprovada pela DRCC.',
        tags: ['Património', 'Século XVIII', 'DRCC'],
        accentColor: '#1E3A8A',
      },
      {
        title: 'Restaurante "O Claustro" — Penela',
        category: 'Comercial',
        description:
          'Remodelação e ampliação de espaço de restauração de 180 m², com criação de esplanada coberta, cozinha profissional equipada e sala interior com acabamentos em pedra calcária e madeira de pinho recuperada.',
        tags: ['Restauração', 'Esplanada', 'Pedra Calcária'],
        accentColor: '#F59E0B',
      },
      {
        title: 'Moradia Unifamiliar — Condeixa-a-Nova',
        category: 'Residencial',
        description:
          'Projeto chave-na-mão de moradia isolada de 220 m² com piscina, incluindo projeto de arquitetura, licenciamento na Câmara Municipal de Condeixa e decoração de interiores. Concluído em 11 meses.',
        tags: ['Chave-na-Mão', 'Moradia', 'Piscina'],
        accentColor: '#1E3A8A',
      },
      {
        title: 'Espaço Comercial — Figueira da Foz',
        category: 'Comercial',
        description:
          'Fit-out completo de loja de 320 m² em centro comercial, incluindo instalações técnicas, iluminação cénica, expositores em perfil de aço e pavimento vinílico de alta resistência. Prazo de entrega: 6 semanas.',
        tags: ['Fit-Out', 'Retalho', 'Figueira da Foz'],
        accentColor: '#64748B',
      },
    ],
  },

  // ─── Página de Contacto ──────────────────────────────────────────────────────

  contactPage: {
    headline: 'Fale Connosco',
    subheadline:
      'Conte-nos o seu projeto e entraremos em contacto no prazo de um dia útil com uma proposta inicial sem compromisso.',
    formFields: [
      {
        name: 'nome',
        label: 'Nome',
        type: 'text',
        placeholder: 'O seu nome completo',
        required: true,
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'o.seu.email@exemplo.pt',
        required: true,
      },
      {
        name: 'telefone',
        label: 'Telefone',
        type: 'tel',
        placeholder: '+351 9XX XXX XXX',
        required: false,
      },
      {
        name: 'tipoServico',
        label: 'Tipo de Serviço',
        type: 'select',
        required: true,
        options: [
          'Remodelação Residencial',
          'Construção Comercial',
          'Reabilitação de Edifícios',
          'Projetos Chave-na-Mão',
        ],
      },
      {
        name: 'descricao',
        label: 'Descrição do Projeto',
        type: 'textarea',
        placeholder:
          'Descreva o seu projeto: tipo de intervenção, localização, área aproximada, prazo desejado e quaisquer requisitos específicos que devamos considerar.',
        required: true,
      },
      {
        name: 'orcamentoPrevisto',
        label: 'Orçamento Previsto',
        type: 'select',
        required: false,
        options: [
          'Menos de €5.000',
          '€5.000 – €20.000',
          '€20.000 – €100.000',
          'Mais de €100.000',
        ],
      },
    ],
    successMessage:
      'Obrigado pelo seu contacto! Recebemos a sua mensagem e a nossa equipa entrará em contacto consigo no prazo de um dia útil.',
  },
}

export default config
