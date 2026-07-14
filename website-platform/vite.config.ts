import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@clients': path.resolve(__dirname, 'src/clients'),
      '@app-types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  build: {
    outDir: 'dist',
    // Target modern browsers — allows Vite/esbuild to emit smaller output by
    // omitting legacy syntax transforms (async/await, optional chaining, etc.).
    // ES2020 is the minimum that supports all React 19 + Vite 8 features and
    // covers ~97 % of browsers as of 2025.
    target: 'es2020',
    // Keep source maps out of the production build to avoid shipping debug info
    // and to reduce artifact size. Flip to 'hidden' if you pipe errors to Sentry
    // or a similar service (maps uploaded separately, not served publicly).
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split React + React DOM + React Router into a single long-lived vendor
        // chunk. Because these libraries change far less often than app code, the
        // chunk can be cached indefinitely by the browser CDN. Without this split,
        // every app deployment busts the entire bundle even when vendor code is
        // unchanged. Expected vendor chunk: ~150 KB minified + gzip.
        manualChunks(id) {
          if (['react', 'react-dom', 'react-router-dom'].some((pkg) => id.includes(`/node_modules/${pkg}/`))) {
            return 'vendor'
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
})
