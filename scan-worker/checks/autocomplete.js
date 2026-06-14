/**
 * Custom check: SC 1.3.5 Identify Input Purpose
 * Failure basis: F107 — incorrect autocomplete attribute values
 *
 * Scope: only inputs that collect personal information about the user.
 * Heuristic: field name/id/label matches personal info patterns.
 */

// Valid WHATWG autocomplete purpose tokens (HTML spec §4.10.18.7)
const VALID_PURPOSE_TOKENS = new Set([
  'name', 'honorific-prefix', 'given-name', 'additional-name', 'family-name',
  'honorific-suffix', 'nickname', 'username', 'new-password', 'current-password',
  'one-time-code', 'organization-title', 'organization', 'street-address',
  'address-line1', 'address-line2', 'address-line3', 'address-level4',
  'address-level3', 'address-level2', 'address-level1', 'country',
  'country-name', 'postal-code', 'cc-name', 'cc-given-name', 'cc-additional-name',
  'cc-family-name', 'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year',
  'cc-csc', 'cc-type', 'transaction-currency', 'transaction-amount',
  'language', 'bday', 'bday-day', 'bday-month', 'bday-year', 'sex',
  'url', 'photo', 'tel', 'tel-country-code', 'tel-national', 'tel-area-code',
  'tel-local', 'tel-extension', 'impp', 'email',
  // modifier-only tokens that are always valid
  'off', 'on',
])

// Valid modifier tokens (address type, contact type)
const ADDRESS_TOKENS = new Set(['shipping', 'billing'])
const CONTACT_TOKENS = new Set(['home', 'work', 'mobile', 'fax', 'pager'])

// Heuristic: does this field collect personal user information?
const PERSONAL_FIELD_RE = [
  /\bname\b/i, /\bemail\b/i, /\bphone\b/i, /\btel\b/i, /\bmobile\b/i,
  /\baddress\b/i, /\bstreet\b/i, /\bcity\b/i, /\bpostal\b/i, /\bzip\b/i,
  /\bpostcode\b/i, /\bcountry\b/i, /\bbirthday\b/i, /\bbday\b/i,
  /\bpassword\b/i, /\busername\b/i, /\buser.?name\b/i,
  /\bfirst.?name\b/i, /\blast.?name\b/i, /\bfamily.?name\b/i,
  /\bgiven.?name\b/i, /\bcc.?number\b/i, /\bcredit.?card\b/i,
  /\bcard.?number\b/i, /\bexpir/i, /\bcvv\b/i, /\bcvc\b/i,
]

function isPersonalField(name, id, labelText) {
  const signal = `${name} ${id} ${labelText}`.toLowerCase()
  return PERSONAL_FIELD_RE.some(re => re.test(signal))
}

function validateAutocomplete(value) {
  // Parse: [section-*] [shipping|billing] [home|work|mobile|fax|pager] <purpose>
  const tokens = value.trim().toLowerCase().split(/\s+/)

  const filtered = tokens
    .filter(t => !t.startsWith('section-')) // section-* prefix always valid
    .filter(t => !ADDRESS_TOKENS.has(t))
    .filter(t => !CONTACT_TOKENS.has(t))

  const purposeToken = filtered[filtered.length - 1]
  if (!purposeToken) return { valid: true } // only modifiers, no purpose — edge case, accept

  return {
    valid:        VALID_PURPOSE_TOKENS.has(purposeToken),
    purposeToken,
  }
}

export async function run(page) {
  const inputs = await page.evaluate(() => {
    const els = document.querySelectorAll(
      'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]), textarea'
    )

    return Array.from(els).map(el => {
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return null

      // Get associated label text
      let labelText = ''
      if (el.id) {
        const lbl = document.querySelector(`label[for="${CSS.escape(el.id)}"]`)
        if (lbl) labelText = lbl.textContent.trim()
      }
      if (!labelText) {
        const parentLabel = el.closest('label')
        if (parentLabel) labelText = parentLabel.textContent.trim()
      }
      if (!labelText) {
        const ariaLabel = el.getAttribute('aria-label')
        if (ariaLabel) labelText = ariaLabel.trim()
      }

      // Get outerHTML but limit length
      let html = el.outerHTML || el.tagName.toLowerCase()
      if (html.length > 200) html = html.slice(0, 200) + '...'

      return {
        selector:    el.id ? `#${el.id}` : (el.name ? `[name="${el.name}"]` : el.tagName.toLowerCase()),
        autocomplete: el.getAttribute('autocomplete'),
        name:        el.getAttribute('name') || '',
        id:          el.id || '',
        type:        el.getAttribute('type') || 'text',
        labelText,
        html,        // Full HTML element
      }
    }).filter(Boolean)
  })

  const confirmedFails = []
  const needsReview    = []

  for (const input of inputs) {
    const { selector, autocomplete, name, id, labelText } = input

    if (!isPersonalField(name, id, labelText)) continue // not a personal info field

    if (autocomplete === null || autocomplete === undefined || autocomplete === '') {
      needsReview.push({ selector, autocomplete: null, labelText })
      continue
    }

    const { valid, purposeToken } = validateAutocomplete(autocomplete)
    if (!valid) {
      confirmedFails.push({ selector, autocomplete, labelText, invalidToken: purposeToken })
    }
  }

  const output = []

  if (confirmedFails.length > 0) {
    output.push({
      checkId:        'custom-autocomplete-invalid',
      sc:             '1.3.5',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'F107',
      message:        `${confirmedFails.length} personal info input${confirmedFails.length > 1 ? 's have' : ' has'} invalid autocomplete value (not in WHATWG list).`,
      data:           { elements: confirmedFails },
      nodeCount:      confirmedFails.length,
      elementSnippet: confirmedFails[0].html || confirmedFails[0].selector,
    })
  }

  if (needsReview.length > 0) {
    output.push({
      checkId:        'custom-autocomplete-missing',
      sc:             '1.3.5',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'SC 1.3.5 — personal info field missing autocomplete',
      message:        `${needsReview.length} personal info input${needsReview.length > 1 ? 's are' : ' is'} missing autocomplete attribute.`,
      data:           { elements: needsReview },
      nodeCount:      needsReview.length,
      elementSnippet: needsReview[0].html || needsReview[0].selector,
    })
  }

  return output
}
