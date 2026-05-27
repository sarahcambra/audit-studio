/**
 * api/favicon.js
 *
 * Resolves the best available site image for a given URL.
 * Priority:
 *   1. og:image meta tag
 *   2. apple-touch-icon link tag
 *   3. shortcut icon / icon link tag
 *   4. Google Favicons API fallback (always works)
 *
 * Usage: GET /api/favicon?url=https://example.com
 * Returns: { faviconUrl: 'https://...' }
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { url } = req.query
  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' })
  }

  // Validate URL
  let parsedUrl
  try {
    parsedUrl = new URL(url)
  } catch {
    return res.status(400).json({ error: 'Invalid URL' })
  }

  const domain = parsedUrl.hostname
  const googleFallback = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`

  try {
    // Fetch the page HTML with a short timeout
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    const response = await fetch(parsedUrl.origin, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; auditV2-bot/1.0)',
        'Accept': 'text/html',
      },
    }).catch(() => null)

    clearTimeout(timeout)

    if (!response?.ok) {
      return res.status(200).json({ faviconUrl: googleFallback })
    }

    const html = await response.text()

    // Helper: resolve a potentially relative URL against the origin
    const resolve = (href) => {
      if (!href) return null
      try {
        return new URL(href, parsedUrl.origin).href
      } catch {
        return null
      }
    }

    // 1. og:image
    const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)?.[1]
    if (ogImage) {
      const resolved = resolve(ogImage)
      if (resolved) return res.status(200).json({ faviconUrl: resolved })
    }

    // 2. apple-touch-icon
    const appleTouchIcon = html.match(/<link[^>]+rel=["'][^"']*apple-touch-icon[^"']*["'][^>]+href=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'][^"']*apple-touch-icon[^"']*["']/i)?.[1]
    if (appleTouchIcon) {
      const resolved = resolve(appleTouchIcon)
      if (resolved) return res.status(200).json({ faviconUrl: resolved })
    }

    // 3. shortcut icon / icon
    const iconHref = html.match(/<link[^>]+rel=["'][^"']*(?:shortcut icon|icon)[^"']*["'][^>]+href=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'][^"']*(?:shortcut icon|icon)[^"']*["']/i)?.[1]
    if (iconHref) {
      const resolved = resolve(iconHref)
      if (resolved) return res.status(200).json({ faviconUrl: resolved })
    }

    // 4. Google fallback
    return res.status(200).json({ faviconUrl: googleFallback })
  } catch {
    return res.status(200).json({ faviconUrl: googleFallback })
  }
}
