import { Section, SectionTitle, Card, CTA, Button, Container } from '@components'
import type { WebsiteConfig } from '@app-types/website-config'

export interface ServicesProps {
  services: NonNullable<WebsiteConfig['services']>
  cta: {
    headline: string
    ctaLabel: string
    ctaHref: string
  }
}

export function Services({ services, cta }: ServicesProps) {
  return (
    <>
      {/* Header section */}
      <Section>
        <Container size="lg">
          <SectionTitle title={services.headline} subtitle={services.subheadline} />
        </Container>
      </Section>

      {/* Services grid */}
      <Section background="surface">
        <Container size="xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.items.map((service) => (
              <Card key={service.title} variant="default" padding="lg">
                <div className="flex flex-col gap-5">
                  {/* Icon + title */}
                  <div className="flex items-center gap-4">
                    <span
                      className="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 text-3xl"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-[var(--color-text)]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2" aria-label={`${service.title} features`}>
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[var(--color-text)]"
                      >
                        <span
                          className="mt-0.5 flex-shrink-0 text-[var(--color-primary)]"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTA
        headline={cta.headline}
        background="gradient"
        primaryAction={
          <Button href={cta.ctaHref} variant="outline" size="lg">
            {cta.ctaLabel}
          </Button>
        }
      />
    </>
  )
}

export default Services
