import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  Component tests (tests/component/) currently fail with "React is not defined".
// Root cause: Vitest 1.6.0 predates Vite 8 / Rolldown. The @vitejs/plugin-react v6
// JSX transform (via @rolldown/plugin-babel) is not applied in the jsdom test
// environment under Vitest 1.6.0.
// Fix: upgrade Vitest to a version that supports Vite 8 (vitest ≥ 3.x).
// Unit tests (tests/unit/) pass cleanly — 137/137.

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    include: ['tests/**/*.test.{js,jsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        'src/main.jsx',
        'src/App.jsx',
      ],
    },
  },
})
