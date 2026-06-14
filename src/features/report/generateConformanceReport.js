/**
 * features/report/generateConformanceReport.js — FIX (#1): report generation
 * ---------------------------------------------------------------------------
 * The "Generate Report" button was a no-op (no onClick). This module produces a
 * real, self-contained WCAG conformance report from the audit's triage data and
 * opens it in a new tab ready to print / save as PDF (browser-native, no backend
 * reports bucket required). It is dependency-free apart from the Supabase client.
 *
 * Wired into ReportTab in src/pages/AuditDetailPage.jsx.
 *
 * NOTE: compile-verified, but not runtime-tested in this environment — smoke-test
 * once (click Generate Report on an audit with scan results) before relying on it.
 */
import { supabase } from '@/lib/supabase'

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Fetch triage items for an audit, build the HTML, open it in a print-ready tab. */
export async function generateAndOpenReport(audit) {
  const { data: items, error } = await supabase
    .from('triage_items')
    .select('rule_id, issue_type, decision, impact, page_name, selector, wcag_sc, sc_ids, node_count, element_snippet, auditor_notes')
    .eq('audit_id', audit.id)
    .order('impact', { ascending: true })

  if (error) throw new Error(`Could not load triage data: ${error.message}`)

  const html = buildReportHTML(audit, items || [])
  const win = window.open('', '_blank')
  if (!win) throw new Error('Pop-up blocked — allow pop-ups to view the report.')
  win.document.write(html)
  win.document.close()
  return { itemCount: (items || []).length }
}

/** Pure: build the conformance report HTML string from audit + triage items. */
export function buildReportHTML(audit, items) {
  const byImpact = { critical: 0, serious: 0, moderate: 0, minor: 0 }
  const confirmed = items.filter((i) => i.decision === 'confirmed' || i.decision === null)
  for (const i of items) if (i.impact && byImpact[i.impact] != null) byImpact[i.impact]++

  // Group confirmed failures by WCAG success criterion
  const bySc = new Map()
  for (const i of confirmed) {
    const scs = (i.sc_ids && i.sc_ids.length ? i.sc_ids : [i.wcag_sc || 'Unmapped'])
    for (const sc of scs) {
      if (!bySc.has(sc)) bySc.set(sc, [])
      bySc.get(sc).push(i)
    }
  }
  const scRows = [...bySc.entries()]
    .sort((a, b) => String(a[0]).localeCompare(String(b[0]), undefined, { numeric: true }))
    .map(([sc, list]) => `
      <tr>
        <td class="mono">${esc(sc)}</td>
        <td>${list.length}</td>
        <td>${esc([...new Set(list.map((x) => x.rule_id))].join(', '))}</td>
        <td>${esc([...new Set(list.map((x) => x.page_name).filter(Boolean))].join(', '))}</td>
      </tr>`).join('')

  // Per-page summary
  const byPage = new Map()
  for (const i of items) {
    const p = i.page_name || 'Unknown page'
    byPage.set(p, (byPage.get(p) || 0) + 1)
  }
  const pageRows = [...byPage.entries()]
    .map(([p, n]) => `<tr><td>${esc(p)}</td><td>${n}</td></tr>`).join('')

  const verdict = confirmed.length === 0
    ? `<span class="pass">Supports — no confirmed failures</span>`
    : `<span class="fail">Does not fully support — ${confirmed.length} confirmed issue(s)</span>`

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>WCAG ${esc(audit.wcag_version)} ${esc(audit.conformance_level)} Conformance Report — ${esc(audit.name)}</title>
<style>
  :root { --p:#540cac; }
  * { box-sizing: border-box; }
  body { font: 14px/1.55 -apple-system, Segoe UI, Roboto, sans-serif; color:#1f2937; margin:0; padding:40px; max-width:900px; margin:0 auto; }
  h1 { font-size:24px; margin:0 0 4px; }
  h2 { font-size:16px; margin:32px 0 8px; border-bottom:2px solid #eee; padding-bottom:4px; }
  .sub { color:#6b7280; margin:0 0 24px; }
  table { width:100%; border-collapse:collapse; margin:8px 0 16px; }
  th, td { text-align:left; padding:7px 10px; border-bottom:1px solid #eee; font-size:13px; vertical-align:top; }
  th { background:#faf8ff; color:#374151; font-weight:600; }
  .mono { font-family: ui-monospace, Menlo, monospace; }
  .meta td:first-child { color:#6b7280; width:180px; }
  .cards { display:flex; gap:12px; margin:8px 0; flex-wrap:wrap; }
  .card { flex:1; min-width:120px; border:1px solid #eee; border-radius:8px; padding:12px; }
  .card .n { font-size:22px; font-weight:700; }
  .pass { color:#047857; font-weight:600; }
  .fail { color:#b91c1c; font-weight:600; }
  .crit { color:#b91c1c; } .ser { color:#c2410c; } .mod { color:#a16207; } .min { color:#6b7280; }
  footer { margin-top:40px; color:#9ca3af; font-size:12px; border-top:1px solid #eee; padding-top:12px; }
  @media print { body { padding:0; } .noprint { display:none; } }
</style></head><body>
<button class="noprint" onclick="window.print()" style="float:right;padding:8px 14px;background:var(--p);color:#fff;border:0;border-radius:6px;cursor:pointer">Print / Save as PDF</button>
<h1>WCAG ${esc(audit.wcag_version)} ${esc(audit.conformance_level)} Conformance Report</h1>
<p class="sub">${esc(audit.name)}</p>

<h2>Audit details</h2>
<table class="meta">
  <tr><td>Project</td><td>${esc(audit.project_name || audit.name)}</td></tr>
  <tr><td>Client</td><td>${esc(audit.client_name || '—')}</td></tr>
  <tr><td>Website</td><td>${esc(audit.website_url || '—')}</td></tr>
  <tr><td>Standard</td><td>WCAG ${esc(audit.wcag_version)} Level ${esc(audit.conformance_level)}</td></tr>
  <tr><td>Generated</td><td>${new Date().toISOString().slice(0, 10)}</td></tr>
  <tr><td>Overall result</td><td>${verdict}</td></tr>
</table>

<h2>Summary</h2>
<div class="cards">
  <div class="card"><div class="n">${items.length}</div>Total findings</div>
  <div class="card"><div class="n">${confirmed.length}</div>Confirmed failures</div>
  <div class="card"><div class="n crit">${byImpact.critical}</div>Critical</div>
  <div class="card"><div class="n ser">${byImpact.serious}</div>Serious</div>
  <div class="card"><div class="n mod">${byImpact.moderate}</div>Moderate</div>
</div>

<h2>Failures by success criterion</h2>
<table><thead><tr><th>WCAG SC</th><th>Count</th><th>Rules</th><th>Pages</th></tr></thead>
<tbody>${scRows || '<tr><td colspan="4">No confirmed failures.</td></tr>'}</tbody></table>

<h2>Findings by page</h2>
<table><thead><tr><th>Page</th><th>Findings</th></tr></thead>
<tbody>${pageRows || '<tr><td colspan="2">No data.</td></tr>'}</tbody></table>

<footer>Generated by Audit Studio · axe-core engine · This automated report covers machine-detectable issues and should be paired with manual testing for full WCAG conformance.</footer>
</body></html>`
}

export default generateAndOpenReport
