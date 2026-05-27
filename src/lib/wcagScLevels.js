/**
 * WCAG 2.1 success criterion → conformance level (A / AA / AAA).
 * Full WCAG 2.1 coverage including AAA criteria — used in auditV2 for manual testing
 * that covers all criteria, not just what axe-core tests.
 */
export const WCAG_SC_LEVEL = Object.freeze({
  // 1.1 Text Alternatives
  "1.1.1": "A",

  // 1.2 Time-based Media
  "1.2.1": "A",
  "1.2.2": "A",
  "1.2.3": "A",
  "1.2.4": "AA",
  "1.2.5": "AA",
  "1.2.6": "AAA",
  "1.2.7": "AAA",
  "1.2.8": "AAA",
  "1.2.9": "AAA",

  // 1.3 Adaptable
  "1.3.1": "A",
  "1.3.2": "A",
  "1.3.3": "A",
  "1.3.4": "AA",
  "1.3.5": "AA",
  "1.3.6": "AAA",

  // 1.4 Distinguishable
  "1.4.1": "A",
  "1.4.2": "A",
  "1.4.3": "AA",
  "1.4.4": "AA",
  "1.4.5": "AA",
  "1.4.6": "AAA",
  "1.4.7": "AAA",
  "1.4.8": "AAA",
  "1.4.9": "AAA",
  "1.4.10": "AA",
  "1.4.11": "AA",
  "1.4.12": "AA",
  "1.4.13": "AA",

  // 2.1 Keyboard Accessible
  "2.1.1": "A",
  "2.1.2": "A",
  "2.1.3": "AAA",
  "2.1.4": "A",

  // 2.2 Enough Time
  "2.2.1": "A",
  "2.2.2": "A",
  "2.2.3": "AAA",
  "2.2.4": "AAA",
  "2.2.5": "AAA",
  "2.2.6": "AAA",

  // 2.3 Seizures and Physical Reactions
  "2.3.1": "A",
  "2.3.2": "AAA",
  "2.3.3": "AAA",

  // 2.4 Navigable
  "2.4.1": "A",
  "2.4.2": "A",
  "2.4.3": "A",
  "2.4.4": "A",
  "2.4.5": "AA",
  "2.4.6": "AA",
  "2.4.7": "AA",
  "2.4.8": "AAA",
  "2.4.9": "AAA",
  "2.4.10": "AAA",
  "2.4.11": "AA",
  "2.4.12": "AAA",
  "2.4.13": "AAA",

  // 2.5 Input Modalities
  "2.5.1": "A",
  "2.5.2": "A",
  "2.5.3": "A",
  "2.5.4": "A",
  "2.5.5": "AAA",
  "2.5.6": "AAA",
  "2.5.7": "AA",
  "2.5.8": "AA",

  // 3.1 Readable
  "3.1.1": "A",
  "3.1.2": "AA",
  "3.1.3": "AAA",
  "3.1.4": "AAA",
  "3.1.5": "AAA",
  "3.1.6": "AAA",

  // 3.2 Predictable
  "3.2.1": "A",
  "3.2.2": "A",
  "3.2.3": "AA",
  "3.2.4": "AA",
  "3.2.5": "AAA",
  "3.2.6": "AA",

  // 3.3 Input Assistance
  "3.3.1": "A",
  "3.3.2": "A",
  "3.3.3": "AA",
  "3.3.4": "AA",
  "3.3.5": "AAA",
  "3.3.6": "AAA",
  "3.3.7": "A",
  "3.3.8": "AA",
  "3.3.9": "AAA",

  // 4.1 Compatible
  "4.1.1": "A",
  "4.1.2": "A",
  "4.1.3": "AA",
});

export function normalizeScId(raw) {
  const s = String(raw ?? "")
    .trim()
    .replace(/^SC\s*/i, "")
    .replace(/[,;].*$/, "")
    .trim();
  if (!s || s === "—") return "";
  const m = s.match(/^(\d+\.\d+\.\d+)/);
  return m ? m[1] : s;
}

/**
 * Uses scan metadata when present; otherwise maps WCAG SC to A / AA / AAA.
 * @returns {"A"|"AA"|"AAA"|null}
 */
export function resolvedConformanceLevel(issue) {
  const fromIssue = String(issue?.wcagLevel ?? "")
    .trim()
    .toUpperCase();
  if (fromIssue === "A" || fromIssue === "AA" || fromIssue === "AAA") return fromIssue;
  const id = normalizeScId(issue?.wcagSC);
  if (!id) return null;
  return WCAG_SC_LEVEL[id] ?? null;
}
