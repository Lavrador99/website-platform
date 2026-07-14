/**
 * Application router.
 *
 * Uses the React Router v7 data router (createBrowserRouter).
 *
 * Strategy:
 *  - RootLayoutContainer loads eagerly (it wraps every route — no benefit from lazy loading it).
 *  - HomeContainer loads eagerly (it is the initial route; lazy loading adds latency on first paint).
 *  - All other page containers load lazily via React.lazy + Suspense to keep the initial bundle small.
 */
import React, { Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayoutContainer } from '@layouts/RootLayoutContainer'
import { HomeContainer } from '@pages/Home/HomeContainer'

// Lazy-loaded page containers
const AboutContainer = React.lazy(() =>
  import('@pages/About/AboutContainer').then((m) => ({ default: m.AboutContainer })),
)
const ServicesContainer = React.lazy(() =>
  import('@pages/Services/ServicesContainer').then((m) => ({ default: m.ServicesContainer })),
)
const PortfolioContainer = React.lazy(() =>
  import('@pages/Portfolio/PortfolioContainer').then((m) => ({ default: m.PortfolioContainer })),
)
const ContactContainer = React.lazy(() =>
  import('@pages/Contact/ContactContainer').then((m) => ({ default: m.ContactContainer })),
)

/** Minimal loading shell — matches the bg so there is no flash of white */
function PageShell() {
  return <div className="min-h-screen bg-[var(--color-background)]" />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayoutContainer />,
    children: [
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageShell />}>
            <AboutContainer />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageShell />}>
            <ServicesContainer />
          </Suspense>
        ),
      },
      {
        path: 'portfolio',
        element: (
          <Suspense fallback={<PageShell />}>
            <PortfolioContainer />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageShell />}>
            <ContactContainer />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
])
