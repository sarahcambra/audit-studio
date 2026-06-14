import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/**
 * Dev-only Vite middleware that mirrors api/favicon.js so the favicon fetch
 * works when running plain `vite dev` (without Vercel CLI).
 */
function faviconDevPlugin() {
  return {
    name: 'favicon-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/favicon', async (req, res) => {
        try {
          const urlParam = new URL(req.url, 'http://localhost').searchParams.get('url')
          if (!urlParam) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ error: 'Missing url parameter' }))
          }

          const normalisedUrl = /^https?:\/\//i.test(urlParam) ? urlParam : `https://${urlParam}`
          let parsedUrl
          try {
            parsedUrl = new URL(normalisedUrl)
          } catch {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ error: 'Invalid URL' }))
          }

          const domain = parsedUrl.hostname
          const googleFallback = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`

          const controller = new AbortController()
          const timeout = setTimeout(() => controller.abort(), 5000)

          const pageRes = await fetch(parsedUrl.origin, {
            signal: controller.signal,
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; auditV2-bot/1.0)',
              'Accept': 'text/html',
            },
          }).catch(() => null)

          clearTimeout(timeout)

          if (!pageRes?.ok) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ faviconUrl: googleFallback }))
          }

          const html = await pageRes.text()
          const resolve = (href) => {
            if (!href) return null
            try { return new URL(href, parsedUrl.origin).href } catch { return null }
          }

          const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1]
            ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)?.[1]
          if (ogImage) {
            const resolved = resolve(ogImage)
            if (resolved) {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ faviconUrl: resolved }))
            }
          }

          const appleTouchIcon = html.match(/<link[^>]+rel=["'][^"']*apple-touch-icon[^"']*["'][^>]+href=["']([^"']+)["']/i)?.[1]
            ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'][^"']*apple-touch-icon[^"']*["']/i)?.[1]
          if (appleTouchIcon) {
            const resolved = resolve(appleTouchIcon)
            if (resolved) {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ faviconUrl: resolved }))
            }
          }

          const iconHref = html.match(/<link[^>]+rel=["'][^"']*(?:shortcut icon|icon)[^"']*["'][^>]+href=["']([^"']+)["']/i)?.[1]
            ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'][^"']*(?:shortcut icon|icon)[^"']*["']/i)?.[1]
          if (iconHref) {
            const resolved = resolve(iconHref)
            if (resolved) {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ faviconUrl: resolved }))
            }
          }

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ faviconUrl: googleFallback }))
        } catch {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ faviconUrl: `https://www.google.com/s2/favicons?domain=unknown&sz=64` }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), faviconDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@config': path.resolve(__dirname, './src/config'),
    },
  },
  define: {
    // Explicit mapping instead of replacing all of process.env with {},
    // which breaks React's dev/prod mode detection and any lib checking NODE_ENV.
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'global': 'globalThis',
  },
  build: {
    target: 'es2022', // Matches browserslist in package.json (last 2 Chrome/FF/Safari/Edge)
  },
  optimizeDeps: {
    exclude: ['fsevents', '@axe-core/playwright', 'playwright', 'playwright-core'],
  },
  ssr: {
    external: ['fsevents', 'playwright', 'playwright-core', '@axe-core/playwright'],
  },
  // FIX (#8): Removed the duplicate `test` block here. Test config now lives in a
  // single source of truth — vitest.config.js (jsdom environment, required for the
  // component tests). Having two configs with different environments (node here vs
  // jsdom there) meant whichever Vitest resolved first won, silently breaking the
  // other set of tests.
})