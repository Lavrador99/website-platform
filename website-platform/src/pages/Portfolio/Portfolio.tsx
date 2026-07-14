import { Section, SectionTitle, Container } from '@components'
import type { WebsiteConfig } from '@app-types/website-config'

export interface PortfolioProps {
  portfolio: NonNullable<WebsiteConfig['portfolio']>
}

export function Portfolio({ portfolio }: PortfolioProps) {
  return (
    <>
      {/* Header section */}
      <Section>
        <Container size="lg">
          <SectionTitle title={portfolio.headline} subtitle={portfolio.subheadline} />
        </Container>
      </Section>

      {/* Portfolio grid */}
      <Section background="surface">
        <Container size="xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.items.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-background)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[box-shadow] flex flex-col"
              >
                {/* Accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: item.accentColor ?? 'var(--color-primary)' }}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-4 p-6 flex-1">
                  {/* Category badge */}
                  <span className="inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {item.category}
                  </span>

                  <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label={`${item.title} tags`}
                    >
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Portfolio
