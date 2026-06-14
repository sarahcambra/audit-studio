-- ============================================================
-- audit_summary view
-- Adds computed columns the dashboard needs.
-- Paste into Supabase SQL Editor and run.
--
-- NOTE: DROP is required before CREATE OR REPLACE because
-- PostgreSQL expands `a.*` at view-creation time. Any column
-- added to `audits` after the view was first created (e.g.
-- favicon_url, started_at) will be invisible until the view
-- is dropped and recreated from scratch.
-- ============================================================

DROP VIEW IF EXISTS public.audit_summary;

CREATE OR REPLACE VIEW public.audit_summary AS
SELECT
  a.*,

  -- Pipeline stage: 0=Scan, 1=Triage, 2=Manual, 3=Report
  CASE
    WHEN a.status = 'complete' THEN 3
    WHEN EXISTS (
      SELECT 1 FROM public.manual_checks mc
      WHERE mc.audit_id = a.id AND mc.status = 'untriaged'
    ) THEN 2
    WHEN EXISTS (
      SELECT 1 FROM public.triage_items ti
      WHERE ti.audit_id = a.id AND ti.decision IS NULL
    ) THEN 1
    WHEN EXISTS (
      SELECT 1 FROM public.scan_jobs sj
      WHERE sj.audit_id = a.id AND sj.status = 'complete'
    ) THEN 1
    ELSE 0
  END AS pipeline_stage,

  -- Untriaged triage items (blocking the report)
  (
    SELECT COUNT(*) FROM public.triage_items ti
    WHERE ti.audit_id = a.id AND ti.decision IS NULL
  ) AS untriaged_count,

  -- Critical violations confirmed across all scans
  (
    SELECT COUNT(*) FROM public.triage_items ti
    WHERE ti.audit_id = a.id
      AND ti.decision = 'confirmed'
      AND ti.issue_type IN ('failure', 'failure, needs review')
  ) AS critical_count,

  -- Needs review items
  (
    SELECT COUNT(*) FROM public.triage_items ti
    WHERE ti.audit_id = a.id
      AND ti.issue_type IN ('needs review', 'failure, needs review')
      AND ti.decision IS NULL
  ) AS needs_review_count,

  -- Best-practice issues (not WCAG failures)
  (
    SELECT COUNT(*) FROM public.triage_items ti
    WHERE ti.audit_id = a.id
      AND ti.issue_type = 'best-practice'
      AND ti.decision IS NULL
  ) AS best_practice_count,

  -- Untriaged WCAG failures with critical/serious impact (blocking the pipeline)
  (
    SELECT COUNT(*) FROM public.triage_items ti
    WHERE ti.audit_id = a.id
      AND ti.decision IS NULL
      AND ti.issue_type IN ('failure', 'failure, needs review')
      AND ti.impact IN ('critical', 'serious')
  ) AS blocking_count,

  -- Total scan jobs for this audit
  (
    SELECT COUNT(*) FROM public.scan_jobs sj
    WHERE sj.audit_id = a.id
  ) AS scan_count,

  -- Latest scan completed_at
  (
    SELECT MAX(sj.completed_at) FROM public.scan_jobs sj
    WHERE sj.audit_id = a.id AND sj.status = 'complete'
  ) AS last_scanned_at

FROM public.audits a;
