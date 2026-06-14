/**
 * functions/handlers/favicon.js
 * Ported from api/favicon.js (Vercel) → Firebase Cloud Functions v2
 */

export default async function handler(req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') return res.status(204).send('')

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const url = req.query?.url
  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' })
  }

  const normalisedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`

  let parsedUrl
  try {
    parsedUrl = new URL(normalisedUrl)
  } catch {
    return res.status(400).json({ error: 'Invalid URL' })
  }

  const domain = parsedUrl.hostname
  const googleFallback = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    const response = await fetch(parsedUrl.origin, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; auditStudio-bot/1.0)',
        'Accept': 'text/html',
      },
    }).catch(() => null)

    clearTimeout(timeout)

    if (!response?.ok) {
      return res.status(200).json({ faviconUrl: googleFallback })
    }

    const html = await response.text()
    const resolve = (href) => {
      if (!href) return null
      try { return new URL(href, parsedUrl.origin).href } catch { return null }
    }

    const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)?.[1]
    if (ogImage) { const r = resolve(ogImage); if (r) return res.status(200).json({ faviconUrl: r }) }

    const appleTouchIcon = html.match(/<link[^>]+rel=["'][^"']*apple-touch-icon[^"']*["'][^>]+href=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'][^"']*apple-touch-icon[^"']*["']/i)?.[1]
    if (appleTouchIcon) { const r = resolve(appleTouchIcon); if (r) return res.status(200).json({ faviconUrl: r }) }

    const iconHref = html.match(/<link[^>]+rel=["'][^"']*(?:shortcut icon|icon)[^"']*["'][^>]+href=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'][^"']*(?:shortcut icon|icon)[^"']*["']/i)?.[1]
    if (iconHref) { const r = resolve(iconHref); if (r) return res.status(200).json({ faviconUrl: r }) }

    return res.status(200).json({ faviconUrl: googleFallback })
  } catch {
    return res.status(200).json({ faviconUrl: googleFallback })
  }
}
