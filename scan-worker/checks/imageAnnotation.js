/**
 * Custom check: SC 1.1.1 Non-text Content — Image Annotation
 * Failure basis:
 *   - F65: img without alt attribute
 *   - F30: alt text that is not an alternative (filename, generic, whitespace-only for informative img)
 *   - F38: decorative img not hidden from AT (non-empty alt on decorative image)
 *
 * Note: blockHeavyResources aborts images — we get no visual content,
 * but we CAN still read alt attributes and src values from the DOM.
 * Full image annotation screenshots require images to load — flag for future
 * enhancement (separate scan mode without resource blocking).
 */

// Patterns that suggest alt text is a filename (F30)
const FILENAME_RE = /\.(png|jpg|jpeg|gif|svg|webp|bmp|ico|tif|tiff)(\?.*)?$/i
const GENERIC_ALT_RE = /^(image|img|photo|picture|graphic|icon|banner|logo|header|figure|placeholder|untitled|dsc\d+|img_\d+|image_\d+|screenshot|thumb|thumbnail)$/i

export async function run(page) {
  const results = await page.evaluate(() => {
    // These must be defined INSIDE evaluate() — module-level vars are not serialized
    const FILENAME_RE_  = /\.(png|jpg|jpeg|gif|svg|webp|bmp|ico|tif|tiff)(\?.*)?$/i
    const GENERIC_ALT_  = /^(image|img|photo|picture|graphic|icon|banner|logo|header|figure|placeholder|untitled|dsc\d+|img_\d+|image_\d+|screenshot|thumb|thumbnail)$/i

    const imgs = document.querySelectorAll('img')
    const findings = []

    for (const img of imgs) {
      const rect = img.getBoundingClientRect()
      // Skip tiny images (spacers, tracking pixels)
      if (rect.width < 4 || rect.height < 4) continue
      const cs = window.getComputedStyle(img)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue

      const alt = img.getAttribute('alt')
      const src = img.getAttribute('src') || img.getAttribute('data-src') || ''
      const role = img.getAttribute('role')
      const isDecorative = alt === '' || role === 'presentation' || role === 'none'
      const selector = img.id ? `#${img.id}` : (img.className ? `img.${img.className.trim().split(/\s+/)[0]}` : 'img')

      // F65: no alt attribute at all
      if (alt === null) {
        findings.push({ type: 'F65', selector, src: src.slice(0, 100), alt: null })
        continue
      }

      // F30: alt text is a filename
      const srcFilename = src.split('/').pop().split('?')[0]
      if (alt && FILENAME_RE_.test(alt)) {
        findings.push({ type: 'F30', selector, src: src.slice(0, 100), alt, reason: 'alt is filename' })
        continue
      }

      // F30: alt text matches src filename exactly
      if (alt && srcFilename && alt.toLowerCase() === srcFilename.toLowerCase()) {
        findings.push({ type: 'F30', selector, src: src.slice(0, 100), alt, reason: 'alt matches src filename' })
        continue
      }

      // F30: generic/placeholder alt text on what appears to be an informative image
      if (alt && GENERIC_ALT_.test(alt.trim()) && !isDecorative) {
        findings.push({ type: 'F30', selector, src: src.slice(0, 100), alt, reason: 'generic alt text' })
        continue
      }
    }

    return findings
  })

  if (results.length === 0) return []

  const f65 = results.filter(r => r.type === 'F65')
  const f30 = results.filter(r => r.type === 'F30')
  const output = []

  if (f65.length > 0) {
    output.push({
      checkId:        'custom-img-no-alt',
      sc:             '1.1.1',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'F65',
      message:        `${f65.length} image${f65.length > 1 ? 's are' : ' is'} missing the alt attribute entirely.`,
      data:           { elements: f65 },
      nodeCount:      f65.length,
      elementSnippet: f65[0].html || f65[0].selector,
    })
  }

  if (f30.length > 0) {
    output.push({
      checkId:        'custom-img-bad-alt',
      sc:             '1.1.1',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'F30',
      message:        `${f30.length} image${f30.length > 1 ? 's have' : ' has'} alt text that is a filename or generic placeholder, not a meaningful description.`,
      data:           { elements: f30 },
      nodeCount:      f30.length,
      elementSnippet: f30[0].html || f30[0].selector,
    })
  }

  return output
}
