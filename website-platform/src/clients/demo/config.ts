/**
 * Demo client configuration.
 *
 * This is a fully populated example config that makes the platform immediately
 * runnable. Use it as a reference when creating new client configs.
 *
 * IMPORTANT: This file must NEVER be imported directly by any component or page.
 * It is loaded exclusively via src/clients/loadClient.ts.
 */
import type { WebsiteConfig } from '@app-types/website-config'

const config: WebsiteConfig = {
  client: 'demo',

  businessName: 'Acme Studio',
  tagline: 'Building the future, one pixel at a time.',
  description:
    'Acme Studio is a full-service digital agency specialising in web design, ' +
    'brand identity, and custom software for ambitious businesses.',

  logo: {
    text: 'Acme Studio',
    icon: '✦',
  },

  colors: {
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#f59e0b',
  },

  contact: {
    phone: '+1 (555) 010-2030',
    email: 'hello@acmestudio.example',
    address: '123 Creative Ave, San Francisco, CA 94103',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],

  hero: {
    headline: 'We craft digital experiences that matter.',
    subheadline:
      "Strategy, design, and engineering — under one roof. Let's build something extraordinary together.",
    ctaLabel: 'Start a project',
    ctaHref: '/contact',
  },

  // ─── About ──────────────────────────────────────────────────────────────────

  about: {
    headline: 'We are Acme Studio',
    body:
      'Founded in 2015, Acme Studio started with a simple belief: great digital products are built at the intersection of thoughtful design and rigorous engineering. From a two-person team working out of a shared office in San Francisco, we have grown into a studio of 30 specialists who partner with companies of every size — from seed-stage startups to Fortune 500 enterprises.\n\n' +
      'Our multidisciplinary approach means your project never falls through the cracks between design and development. Strategists, designers, and engineers collaborate in the same room (and the same Slack channels) from day one — so what gets built actually matches what was envisioned.\n\n' +
      'We measure success in outcomes, not deliverables. That means staying curious, asking hard questions, and caring deeply about the businesses we work with long after launch day.',
    values: [
      {
        icon: '✦',
        title: 'Craft',
        description:
          'We sweat the details that most people never notice — because the people who matter always do. Every pixel, interaction, and line of code is held to the same high standard.',
      },
      {
        icon: '⚡',
        title: 'Speed',
        description:
          'Momentum is a competitive advantage. We move fast without cutting corners, using proven processes and tight feedback loops to ship quality work on time.',
      },
      {
        icon: '◎',
        title: 'Transparency',
        description:
          'No surprises. We keep clients in the loop at every stage — sharing progress, surfacing risks early, and having honest conversations when plans need to change.',
      },
    ],
    team: [
      {
        name: 'Jordan Ellis',
        role: 'Co-founder & Creative Director',
        bio: 'Jordan brings 15 years of brand and UX experience across agencies in New York and London. Passionate about the overlap between storytelling and interface design.',
        avatarInitials: 'JE',
      },
      {
        name: 'Sam Rivera',
        role: 'Co-founder & CTO',
        bio: 'Sam leads engineering with a focus on performance and scalability. Previously built infrastructure at two YC-backed startups before co-founding Acme Studio.',
        avatarInitials: 'SR',
      },
      {
        name: 'Morgan Chen',
        role: 'Head of Strategy',
        bio: 'Morgan helps clients define what to build before worrying about how to build it. Former management consultant turned product strategist with a love for clear frameworks.',
        avatarInitials: 'MC',
      },
    ],
  },

  // ─── Services ───────────────────────────────────────────────────────────────

  services: {
    headline: 'What we do',
    subheadline:
      'From initial concept to production launch, we offer the full spectrum of digital product services — all under one roof.',
    items: [
      {
        icon: '🎨',
        title: 'Web Design',
        description:
          'Beautiful, conversion-optimised websites built for the modern web. We combine research-driven UX with stunning visual design to create experiences your customers will remember.',
        features: [
          'UX research & information architecture',
          'High-fidelity UI design in Figma',
          'Responsive design across all devices',
          'Accessibility-first (WCAG 2.2 AA)',
        ],
      },
      {
        icon: '◈',
        title: 'Brand Identity',
        description:
          'A brand is more than a logo — it is the total impression you leave on the world. We build cohesive identity systems that communicate who you are and why it matters.',
        features: [
          'Brand strategy & positioning',
          'Logo & visual identity design',
          'Typography & colour systems',
          'Brand guidelines & asset libraries',
        ],
      },
      {
        icon: '⚙',
        title: 'Custom Software',
        description:
          'When off-the-shelf tools reach their limits, we build exactly what you need. From internal tools to customer-facing platforms, we deliver robust, maintainable software.',
        features: [
          'Full-stack web application development',
          'API design & third-party integrations',
          'Performance engineering & optimisation',
          'Ongoing maintenance & support',
        ],
      },
      {
        icon: '◉',
        title: 'Digital Strategy',
        description:
          'We help you make the right decisions before writing a single line of code. Our strategy engagements align stakeholders, clarify goals, and produce a roadmap you can execute with confidence.',
        features: [
          'Product discovery & roadmapping',
          'Competitive analysis & market positioning',
          'Analytics setup & KPI definition',
          'Growth strategy & experimentation frameworks',
        ],
      },
    ],
  },

  // ─── Portfolio ──────────────────────────────────────────────────────────────

  portfolio: {
    headline: 'Our work',
    subheadline:
      'A selection of projects we are proud of — spanning web, brand, and software.',
    items: [
      {
        title: 'Meridian Finance',
        category: 'Web',
        description:
          'A complete redesign of the customer portal for a Series B fintech, reducing support tickets by 34% and increasing user activation by 22% in the first quarter post-launch.',
        tags: ['UX Design', 'React', 'Fintech'],
        accentColor: '#2563eb',
      },
      {
        title: 'Bloom Collective',
        category: 'Brand',
        description:
          'Full brand identity for a sustainable lifestyle marketplace — from naming workshops through to logo, packaging guidelines, and a bespoke icon library.',
        tags: ['Brand Strategy', 'Identity', 'Packaging'],
        accentColor: '#059669',
      },
      {
        title: 'Orbit Logistics',
        category: 'Software',
        description:
          'A real-time freight tracking dashboard integrating 12 carrier APIs, processing over 50 000 shipment events per day with sub-second UI updates.',
        tags: ['React', 'Node.js', 'Real-time', 'APIs'],
        accentColor: '#7c3aed',
      },
      {
        title: 'Helix Health',
        category: 'Web',
        description:
          'Patient-facing appointment booking and telehealth platform built to HIPAA standards, serving 8 000 monthly active users across three clinic networks.',
        tags: ['Healthcare', 'TypeScript', 'Accessibility'],
        accentColor: '#0891b2',
      },
      {
        title: 'Sonder Coffee',
        category: 'Brand',
        description:
          'Brand identity, packaging, and e-commerce website for a specialty coffee roaster. The rebrand coincided with a 60% increase in direct-to-consumer revenue.',
        tags: ['Brand', 'E-commerce', 'Packaging'],
        accentColor: '#92400e',
      },
      {
        title: 'Lattice HR Tools',
        category: 'Software',
        description:
          'A suite of internal HR automation tools that reduced manual data-entry time by 18 hours per week and integrated seamlessly with the client\'s existing Salesforce environment.',
        tags: ['Internal Tools', 'Automation', 'Salesforce'],
        accentColor: '#db2777',
      },
    ],
  },

  // ─── Contact page ────────────────────────────────────────────────────────────

  contactPage: {
    headline: 'Start a conversation',
    subheadline:
      "Tell us about your project and we'll get back to you within one business day.",
    formFields: [
      {
        name: 'name',
        label: 'Your name',
        type: 'text',
        placeholder: 'Jane Smith',
        required: true,
      },
      {
        name: 'email',
        label: 'Email address',
        type: 'email',
        placeholder: 'jane@company.com',
        required: true,
      },
      {
        name: 'company',
        label: 'Company (optional)',
        type: 'text',
        placeholder: 'Acme Corp',
        required: false,
      },
      {
        name: 'service',
        label: 'Service you are interested in',
        type: 'select',
        required: true,
        options: ['Web Design', 'Brand Identity', 'Custom Software', 'Digital Strategy'],
      },
      {
        name: 'message',
        label: 'Tell us about your project',
        type: 'textarea',
        placeholder:
          "Give us a brief overview of what you're working on, your timeline, and any specific challenges you'd like help with.",
        required: true,
      },
      {
        name: 'budget',
        label: 'Approximate budget',
        type: 'select',
        required: false,
        options: ['Under $5k', '$5k–$15k', '$15k–$50k', '$50k+'],
      },
    ],
    successMessage:
      "Thank you — we've received your message and will be in touch within one business day.",
  },
}

export default config
