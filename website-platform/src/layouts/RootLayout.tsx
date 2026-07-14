import type { ComponentProps, ReactNode } from 'react'
import { Navbar, Footer } from '@components'
import type { NavbarProps, FooterProps } from '@components'

interface RootLayoutProps {
  navbarProps: ComponentProps<typeof Navbar>
  footerProps: ComponentProps<typeof Footer>
  children: ReactNode
}

export function RootLayout({ navbarProps, footerProps, children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      <Navbar {...navbarProps} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  )
}

export type { RootLayoutProps }
export default RootLayout
