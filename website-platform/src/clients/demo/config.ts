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
      'Strategy, design, and engineering — under one roof. Let\'s build something extraordinary together.',
    ctaLabel: 'Start a project',
    ctaHref: '/contact',
  },
}

export default config
