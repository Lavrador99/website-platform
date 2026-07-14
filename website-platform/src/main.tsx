/**
 * Application entry point.
 *
 * Responsibilities:
 *   1. Dynamically load the active client's WebsiteConfig via loadClient()
 *   2. Wrap the React tree in WebsiteConfigProvider with the resolved config
 *   3. Mount the React Router data router via RouterProvider
 *
 * This is the ONLY place loadClient() is called. Everything downstream reads
 * config exclusively through useWebsiteConfig().
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { WebsiteConfigProvider } from '@contexts/WebsiteConfigContext'
import { loadClient } from '@clients/loadClient'
import { router } from '@/router'
import type { WebsiteConfig } from '@app-types/website-config'

// ─── Bootstrap ────────────────────────────────────────────────────────────────

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found. Check index.html.')
}

const root = createRoot(rootElement)

/**
 * Render a full-screen error state. Called when client config loading fails.
 * Intentionally framework-free so it renders even if React context is broken.
 */
function renderError(message: string): void {
  root.render(
    <StrictMode>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100svh',
          fontFamily: 'system-ui, sans-serif',
          padding: '2rem',
          textAlign: 'center',
          color: '#dc2626',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Failed to load client</h1>
          <pre
            style={{
              background: '#fef2f2',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              textAlign: 'left',
              overflowX: 'auto',
              color: '#991b1b',
            }}
          >
            {message}
          </pre>
        </div>
      </div>
    </StrictMode>,
  )
}

/**
 * Render a minimal loading indicator while the client config module loads.
 * This is typically sub-100ms in development and invisible in production
 * (config is inlined into the bundle for the active client).
 */
function renderLoading(): void {
  root.render(
    <StrictMode>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100svh',
          fontFamily: 'system-ui, sans-serif',
          color: '#64748b',
        }}
      >
        Loading…
      </div>
    </StrictMode>,
  )
}

/**
 * Render the full application with the resolved client configuration.
 */
function renderApp(config: WebsiteConfig): void {
  root.render(
    <StrictMode>
      <WebsiteConfigProvider config={config}>
        <RouterProvider router={router} />
      </WebsiteConfigProvider>
    </StrictMode>,
  )
}

// ─── Startup sequence ─────────────────────────────────────────────────────────

renderLoading()

loadClient()
  .then(renderApp)
  .catch((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[website-platform] Client config load failed:', message)
    renderError(message)
  })
