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
    // min-h-svh keeps the layout consistent with the 100svh baseline set on
    // #root in index.css (svh accounts for dynamic viewport on mobile browsers;
    // min-h-screen uses vh which does not). bg-[var(--color-background)] is
    // removed — body already sets this token, so it was redundant here.
    <div className="min-h-svh flex flex-col">
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
