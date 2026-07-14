import { useWebsiteConfig } from '@hooks/useWebsiteConfig'
import { Section, Container } from '@components'
import { About } from './About'

export function AboutContainer() {
  const config = useWebsiteConfig()

  if (!config.about) {
    return (
      <Section>
        <Container size="lg">
          <p className="text-[var(--color-text-muted)]">About content coming soon.</p>
        </Container>
      </Section>
    )
  }

  return <About about={config.about} businessName={config.businessName} />
}

export default AboutContainer
