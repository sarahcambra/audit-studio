import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['fsevents', '@axe-core/playwright', 'playwright', 'playwright-core'],
  },
  ssr: {
    external: ['fsevents', 'playwright', 'playwright-core', '@axe-core/playwright'],
  },
  test: {
    globals: true,
    environment: 'node',
  },
})