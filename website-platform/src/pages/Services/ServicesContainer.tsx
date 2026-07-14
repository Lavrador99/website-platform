import { useWebsiteConfig } from '@hooks/useWebsiteConfig'
import { Section, Container } from '@components'
import { Services } from './Services'

export function ServicesContainer() {
  const config = useWebsiteConfig()

  if (!config.services) {
    return (
      <Section>
        <Container size="lg">
          <p className="text-[var(--color-text-muted)]">Services content coming soon.</p>
        </Container>
      </Section>
    )
  }

  return (
    <Services
      services={config.services}
      cta={{
        headline: `Let's build something great together`,
        ctaLabel: 'Get in touch',
        ctaHref: '/contact',
      }}
    />
  )
}

export default ServicesContainer
