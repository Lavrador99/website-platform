import { useWebsiteConfig } from '@hooks/useWebsiteConfig'
import { Home } from './Home'

export function HomeContainer() {
  const config = useWebsiteConfig()

  return (
    <Home
      hero={config.hero}
      services={config.services}
      cta={{
        headline: `Ready to work with ${config.businessName}?`,
        subheadline: 'Get in touch and let us talk about your next project.',
        ctaLabel: 'Start a project',
        ctaHref: '/contact',
      }}
    />
  )
}

export default HomeContainer
