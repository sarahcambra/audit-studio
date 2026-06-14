/**
 * Custom check: SC 3.1.1 Language of Page
 * Failure basis:
 *   - ACT Rule b5c3f8 (approved): HTML page has lang attribute
 *   - ACT Rule bf051a (approved): lang has valid BCP 47 language tag
 *
 * Note: lang-mismatch detection (ucwvc8, proposed ACT rule) is skipped
 * here — it requires franc-min and is marked NEEDS_REVIEW by nature.
 * When franc-min is added to dependencies, extend this check.
 */

// BCP 47 primary language subtags — top ~100 most common ISO 639-1 codes
const VALID_LANG_SUBTAGS = new Set([
  'ab','aa','af','ak','sq','am','ar','an','hy','as','av','ae','ay','az',
  'bm','ba','eu','be','bn','bh','bi','bs','br','bg','my','ca','ch','ce',
  'zh','cu','cv','kw','co','cr','hr','cs','da','dv','nl','dz','en','eo',
  'et','ee','fo','fj','fi','fr','ff','gl','lg','ka','de','el','kl','gn',
  'gu','ht','ha','he','hz','hi','ho','hu','is','io','ig','id','ia','ie',
  'iu','ik','ga','it','ja','jv','kn','kr','ks','kk','km','ki','rw','ky',
  'kv','kg','ko','ku','kj','lo','la','lv','li','ln','lt','lu','lb','mk',
  'mg','ms','ml','mt','gv','mi','mr','mh','mn','na','nv','nd','nr','ng',
  'ne','no','nb','nn','oc','oj','or','om','os','pi','pa','ps','fa','pl',
  'pt','qu','ro','rm','rn','ru','se','sm','sg','sa','sc','sr','sn','sd',
  'si','sk','sl','so','st','es','su','sw','ss','sv','tl','ty','tg','ta',
  'tt','te','th','ti','to','ts','tn','tr','tk','tw','ug','uk','ur','uz',
  've','vi','vo','wa','cy','fy','wo','xh','yi','yo','za','zu',
  // ISO 639-2 grandfathered
  'i', 'x',
])

export async function run(page) {
  const lang = await page.getAttribute('html', 'lang')

  // Missing lang attribute
  if (lang === null || lang === undefined || lang.trim() === '') {
    return [{
      checkId:        'custom-lang-missing',
      sc:             '3.1.1',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'ACT Rule b5c3f8 (approved)',
      message:        'HTML element has no lang attribute.',
      data:           { lang: null, selector: 'html' },
      nodeCount:      1,
      elementSnippet: '<html>',
    }]
  }

  // Validate primary language subtag (BCP 47: first segment before -)
  const primarySubtag = lang.trim().split('-')[0].toLowerCase()

  if (!VALID_LANG_SUBTAGS.has(primarySubtag)) {
    return [{
      checkId:        'custom-lang-invalid',
      sc:             '3.1.1',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'ACT Rule bf051a (approved)',
      message:        `HTML lang="${lang}" does not have a valid BCP 47 primary language subtag.`,
      data:           { lang, primarySubtag, selector: 'html' },
      nodeCount:      1,
      elementSnippet: `<html lang="${lang}">`,
    }]
  }

  return [] // pass — lang present and valid
}
