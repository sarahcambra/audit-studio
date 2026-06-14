/**
 * Custom checks orchestrator
 *
 * Runs all custom accessibility checks on a Playwright page AFTER axe-core.
 * Each check exports: async function run(page) → Finding[]
 *
 * Finding shape:
 *   checkId:        string   — unique ID (e.g. 'custom-page-title')
 *   sc:             string   — WCAG SC (e.g. '2.4.2')
 *   confidence:     string   — 'CONFIRMED_FAIL' | 'NEEDS_REVIEW'
 *   failureBasis:   string   — F-technique or ACT rule reference
 *   message:        string   — human-readable summary
 *   data:           object   — raw evidence (elements, ratios, etc.)
 *   nodeCount:      number   — elements affected
 *   elementSnippet: string   — first element selector/snippet
 *
 * Implementation order follows the plan priority:
 * 1. pageTitle           (2.4.2 / F25)
 * 2. placeholderContrast (1.4.3 / Understanding Note 3)
 * 3. languagePage        (3.1.1 / ACT b5c3f8 + bf051a)
 * 4. autocomplete        (1.3.5 / F107)
 * 5. linkColor           (1.4.1 / F73)
 * 6. linkPurpose         (2.4.4 / F84)
 * 7. focusVisible        (2.4.7 / F55+F78  +  2.4.3 / F44)
 * 8. imageAnnotation     (1.1.1 / F65+F30)
 * 9. reflow              (1.4.10 / F102)
 * 10. focusObscured      (2.4.11 / F110)
 * 11. labelInName        (2.5.3  / F96)
 * 12. orientation        (1.3.4  / F97+F100)
 * 13. textSpacing        (1.4.12 / Understanding bookmarklet method)
 * 14. nonTextContrast    (1.4.11 / Understanding + ACT)
 * 15. targetSize         (2.5.8  / Understanding circle-intersection)
 * 16. skipLink           (2.4.1  / G1)
 * 17. structureEvidence  (1.3.1  / F2 + ARIA11)
 */

import { run as checkPageTitle }           from './pageTitle.js'
import { run as checkPlaceholderContrast } from './placeholderContrast.js'
import { run as checkLanguagePage }        from './languagePage.js'
import { run as checkAutocomplete }        from './autocomplete.js'
import { run as checkLinkColor }           from './linkColor.js'
import { run as checkLinkPurpose }         from './linkPurpose.js'
import { run as checkFocusVisible }        from './focusVisible.js'
import { run as checkImageAnnotation }     from './imageAnnotation.js'
import { run as checkReflow }              from './reflow.js'
import { run as checkFocusObscured }       from './focusObscured.js'
import { run as checkLabelInName }         from './labelInName.js'
import { run as checkOrientation }         from './orientation.js'
import { run as checkTextSpacing }         from './textSpacing.js'
import { run as checkNonTextContrast }     from './nonTextContrast.js'
import { run as checkTargetSize }          from './targetSize.js'
import { run as checkSkipLink }            from './skipLink.js'
import { run as checkStructureEvidence }   from './structureEvidence.js'

const CHECKS = [
  { id: 'page-title',           fn: checkPageTitle },
  { id: 'placeholder-contrast', fn: checkPlaceholderContrast },
  { id: 'language-page',        fn: checkLanguagePage },
  { id: 'autocomplete',         fn: checkAutocomplete },
  { id: 'link-color',           fn: checkLinkColor },
  { id: 'link-purpose',         fn: checkLinkPurpose },
  { id: 'focus-visible',        fn: checkFocusVisible },
  { id: 'image-annotation',     fn: checkImageAnnotation },
  { id: 'reflow',               fn: checkReflow },
  { id: 'focus-obscured',       fn: checkFocusObscured },
  { id: 'label-in-name',        fn: checkLabelInName },
  { id: 'orientation',          fn: checkOrientation },
  { id: 'text-spacing',         fn: checkTextSpacing },
  { id: 'non-text-contrast',    fn: checkNonTextContrast },
  { id: 'target-size',          fn: checkTargetSize },
  { id: 'skip-link',            fn: checkSkipLink },
  { id: 'structure-evidence',   fn: checkStructureEvidence },
]

/**
 * Run all custom checks on the given page.
 * Each check failure is caught and logged — one check failing does not abort the scan.
 * @param {import('playwright').Page} page
 * @returns {Promise<Finding[]>}
 */
export async function runCustomChecks(page) {
  const allFindings = []

  for (const { id, fn } of CHECKS) {
    const start = Date.now()
    try {
      const findings = await fn(page)
      const elapsed  = Date.now() - start
      if (findings.length > 0) {
        console.log(`[custom] ${id}: ${findings.length} finding(s) (${elapsed}ms)`)
      } else {
        console.log(`[custom] ${id}: pass (${elapsed}ms)`)
      }
      allFindings.push(...findings)
    } catch (err) {
      console.error(`[custom] ${id}: ERROR — ${err.message}`)
      // One check must not kill the entire scan
    }
  }

  return allFindings
}
