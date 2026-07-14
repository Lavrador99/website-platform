/**
 * Application router.
 *
 * Uses the React Router v7 data router (createBrowserRouter). All route
 * definitions live here. Page components will be added in Phase 2+.
 *
 * Note: No page component imports allowed here — only layouts and structural
 * elements. Pages are added as children of the root layout route.
 */
import { createBrowserRouter, Outlet } from 'react-router-dom'

/**
 * Root route element — a transparent pass-through shell.
 * Phase 2 will replace this with a proper RootLayout component
 * from src/layouts/ that reads config via useWebsiteConfig().
 */
function RootShell() {
  return <Outlet />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootShell />,
    children: [
      // Page routes will be added here in Phase 2
    ],
  },
])
