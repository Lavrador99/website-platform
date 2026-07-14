import { Section, SectionTitle, Card, Container } from '@components'
import type { WebsiteConfig } from '@app-types/website-config'

export interface AboutProps {
  about: NonNullable<WebsiteConfig['about']>
  businessName: string
}

export function About({ about, businessName }: AboutProps) {
  // Split the body text into paragraphs on double newlines. Trim each paragraph
  // so leading/trailing whitespace does not produce empty strings or mismatched keys.
  const bodyParagraphs = about.body
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, 2)

  return (
    <>
      {/* Narrative section */}
      <Section>
        <Container size="lg">
          <SectionTitle title={about.headline} subtitle={businessName} />
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {bodyParagraphs.map((para) => (
              <p key={para} className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values section */}
      <Section background="surface">
        <Container size="xl">
          <SectionTitle title="Our Values" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((value) => (
              <Card key={value.title} variant="default" padding="lg">
                <div className="flex flex-col gap-4">
                  <span
                    className="text-3xl text-[var(--color-primary)]"
                    aria-hidden="true"
                  >
                    {value.icon}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-[var(--color-text)]">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team section — only rendered when team data is present */}
      {about.team && about.team.length > 0 && (
        <Section>
          <Container size="xl">
            <SectionTitle title="Meet the Team" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {about.team.map((member) => (
                <Card key={member.name} variant="outlined" padding="lg">
                  <div className="flex flex-col items-center text-center gap-4">
                    {/* Avatar circle */}
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-white font-heading font-bold text-xl"
                      aria-hidden="true"
                    >
                      {member.avatarInitials}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-primary)]">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}

export default About
