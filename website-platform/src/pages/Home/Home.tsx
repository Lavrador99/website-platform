import { Hero, Section, SectionTitle, Card, CTA, Button, Container } from '@components'
import type { WebsiteConfig } from '@app-types/website-config'

export interface HomeProps {
  hero: {
    headline: string
    subheadline: string
    ctaLabel: string
    ctaHref: string
  }
  services?: WebsiteConfig['services']
  cta: {
    headline: string
    subheadline: string
    ctaLabel: string
    ctaHref: string
  }
}

export function Home({ hero, services, cta }: HomeProps) {
  // Show at most 3 service cards on the home page
  const previewServices = services?.items.slice(0, 3)

  return (
    <>
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        layout="centered"
        primaryCta={
          <Button href={hero.ctaHref} variant="primary" size="lg">
            {hero.ctaLabel}
          </Button>
        }
      />

      {previewServices && previewServices.length > 0 && (
        <Section background="surface">
          <Container size="xl">
            <SectionTitle
              title={services?.headline ?? 'What we do'}
              {...(services?.subheadline ? { subtitle: services.subheadline } : {})}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {previewServices.map((service) => (
                <Card key={service.title} variant="elevated" padding="lg">
                  <div className="flex flex-col gap-4">
                    <span className="text-3xl" aria-hidden="true">
                      {service.icon}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTA
        headline={cta.headline}
        subheadline={cta.subheadline}
        background="primary"
        primaryAction={
          <Button href={cta.ctaHref} variant="outline" size="lg">
            {cta.ctaLabel}
          </Button>
        }
      />
    </>
  )
}

export default Home
