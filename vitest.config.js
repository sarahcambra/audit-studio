import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️  Component tests (tests/component/) currently fail with "React is not defined".
// Root cause: Vitest 1.6.0 predates Vite 8 / Rolldown. The @vitejs/plugin-react v6
// JSX transform (via @rolldown/plugin-babel) is not applied in the jsdom test
// environment under Vitest 1.6.0.
// Fix: upgrade Vitest to a version that supports Vite 8 (vitest ≥ 3.x).
// Unit tests (tests/unit/) pass cleanly — 137/137.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/', 'src/main.jsx', 'src/App.jsx']
    },
    projects: [{
      extends: true,
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.js',
        include: ['tests/**/*.test.{js,jsx}']
      }
    }, {
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});