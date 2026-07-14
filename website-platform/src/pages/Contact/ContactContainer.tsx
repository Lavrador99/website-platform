import React, { useState } from 'react'
import { useWebsiteConfig } from '@hooks/useWebsiteConfig'
import { Section, Container } from '@components'
import { Contact } from './Contact'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactContainer() {
  const config = useWebsiteConfig()
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  async function handleSubmit(_data: Record<string, string>): Promise<void> {
    setSubmitStatus('loading')
    // Simulate async submission — 1500ms delay, always succeeds in this demo
    await new Promise<void>((resolve) => setTimeout(resolve, 1500))
    setSubmitStatus('success')
  }

  if (!config.contactPage) {
    return (
      <Section>
        <Container size="lg">
          <p className="text-[var(--color-text-muted)]">Contact content coming soon.</p>
        </Container>
      </Section>
    )
  }

  return (
    <Contact
      contactPage={config.contactPage}
      contact={config.contact}
      businessName={config.businessName}
      onSubmit={handleSubmit}
      submitStatus={submitStatus}
    />
  )
}

export default ContactContainer
