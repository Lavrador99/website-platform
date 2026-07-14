import { useWebsiteConfig } from '@hooks/useWebsiteConfig'
import { Section, Container } from '@components'
import { Portfolio } from './Portfolio'

export function PortfolioContainer() {
  const config = useWebsiteConfig()

  if (!config.portfolio) {
    return (
      <Section>
        <Container size="lg">
          <p className="text-[var(--color-text-muted)]">Portfolio content coming soon.</p>
        </Container>
      </Section>
    )
  }

  return <Portfolio portfolio={config.portfolio} />
}

export default PortfolioContainer
