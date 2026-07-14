import React, { useState } from 'react'
import { Section, SectionTitle, Card, Button, Container } from '@components'
import type { WebsiteConfig } from '@app-types/website-config'

export interface ContactProps {
  contactPage: NonNullable<WebsiteConfig['contactPage']>
  contact: WebsiteConfig['contact']
  businessName: string
  onSubmit: (data: Record<string, string>) => Promise<void>
  submitStatus: 'idle' | 'loading' | 'success' | 'error'
}

/**
 * Contact page — pure presentational component.
 *
 * Local state is used exclusively for tracking form field values.
 * This is the documented exception to the "no state in page components" rule:
 * form input state is purely presentational UI state, not business data.
 *
 * Does NOT call useWebsiteConfig(). All data flows in via props from ContactContainer.
 */
export function Contact({ contactPage, contact, businessName, onSubmit, submitStatus }: ContactProps) {
  // Local form state — acceptable here as it is purely UI state (controlled inputs)
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(contactPage.formFields.map((f) => [f.name, ''])),
  )

  function handleChange(name: string, value: string) {
    setFieldValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await onSubmit(fieldValues)
  }

  const inputBaseClasses =
    'w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:outline-offset-0 focus:outline-[var(--color-primary)] transition-colors'

  const defaultSuccess =
    "Thank you — we've received your message and will be in touch shortly."

  return (
    <>
      {/* Header */}
      <Section>
        <Container size="lg">
          <SectionTitle title={contactPage.headline} subtitle={contactPage.subheadline} />
        </Container>
      </Section>

      {/* Two-column body */}
      <Section background="surface" spacing="md">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            {/* Form — lg:col-span-3 */}
            <div className="lg:col-span-3">
              {submitStatus === 'success' ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
                >
                  <p className="text-lg font-medium text-[var(--color-text)]">
                    {contactPage.successMessage ?? defaultSuccess}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label={`Contact ${businessName}`}
                  className="flex flex-col gap-6"
                >
                  {contactPage.formFields.map((field) => {
                    const id = `contact-field-${field.name}`
                    const value = fieldValues[field.name] ?? ''

                    return (
                      <div key={field.name} className="flex flex-col gap-1.5">
                        <label
                          htmlFor={id}
                          className="text-sm font-medium text-[var(--color-text)]"
                        >
                          {field.label}
                          {field.required && (
                            <span className="ml-1 text-[var(--color-primary)]" aria-hidden="true">
                              *
                            </span>
                          )}
                        </label>

                        {field.type === 'textarea' && (
                          <textarea
                            id={id}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={value}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            rows={5}
                            className={inputBaseClasses}
                          />
                        )}

                        {field.type === 'select' && (
                          <select
                            id={id}
                            name={field.name}
                            required={field.required}
                            value={value}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            className={inputBaseClasses}
                          >
                            <option value="">Select an option…</option>
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        )}

                        {field.type !== 'textarea' && field.type !== 'select' && (
                          <input
                            id={id}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={value}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            className={inputBaseClasses}
                          />
                        )}
                      </div>
                    )
                  })}

                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={submitStatus === 'loading'}
                    >
                      Send message
                    </Button>

                    {submitStatus === 'error' && (
                      <p
                        role="alert"
                        className="text-sm text-red-600"
                      >
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar — lg:col-span-2 */}
            <div className="lg:col-span-2">
              <Card variant="outlined" padding="lg">
                <h2 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-6">
                  Contact information
                </h2>
                <ul className="flex flex-col gap-5">
                  {contact?.address && (
                    <li className="flex items-start gap-3">
                      <span className="text-xl mt-0.5" aria-hidden="true">📍</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
                          Address
                        </p>
                        <p className="text-sm text-[var(--color-text)]">{contact.address}</p>
                      </div>
                    </li>
                  )}
                  {contact?.phone && (
                    <li className="flex items-start gap-3">
                      <span className="text-xl mt-0.5" aria-hidden="true">📞</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
                          Phone
                        </p>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </li>
                  )}
                  {contact?.email && (
                    <li className="flex items-start gap-3">
                      <span className="text-xl mt-0.5" aria-hidden="true">✉️</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
                          Email
                        </p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </li>
                  )}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Contact
