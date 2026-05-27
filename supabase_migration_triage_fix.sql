-- ============================================================
-- Fix: Add unique constraint + backfill triage_items from
--      existing scan_results rows.
-- Run in Supabase SQL Editor.
-- ============================================================

-- 1. Add unique constraint required by upsert onConflict
ALTER TABLE triage_items
  DROP CONSTRAINT IF EXISTS triage_items_audit_job_group_key;

ALTER TABLE triage_items
  ADD CONSTRAINT triage_items_audit_job_group_key
  UNIQUE (audit_id, job_id, group_id);

-- 2. Backfill triage_items from all existing completed scan_results
--    Each element in grouped_violations becomes one triage row.
--    Safe to run multiple times (ON CONFLICT DO NOTHING).
INSERT INTO triage_items (
  audit_id,
  job_id,
  group_id,
  rule_id,
  landmark,
  issue_type,
  impact,
  page_name,
  selector,
  tags,
  wcag_sc,
  sc_ids,
  node_count,
  element_snippet,
  decision,
  updated_at
)
SELECT
  sj.audit_id,
  sr.job_id,
  (v->>'groupId')                                       AS group_id,
  (v->>'ruleId')                                        AS rule_id,
  (v->>'landmark')                                      AS landmark,
  (v->>'issueType')                                     AS issue_type,
  (v->>'impact')                                        AS impact,
  COALESCE(sr.summary->>'scanName', sj.url)             AS page_name,
  CASE WHEN sj.scan_type = 'component' THEN sj.selector ELSE NULL END AS selector,
  ARRAY(SELECT jsonb_array_elements_text(v->'tags'))    AS tags,
  (v->'scIds'->>0)                                      AS wcag_sc,
  ARRAY(SELECT jsonb_array_elements_text(v->'scIds'))   AS sc_ids,
  COALESCE((v->>'nodeCount')::int, 0)                   AS node_count,
  (v->'nodes'->0->>'html')                              AS element_snippet,
  'pending'                                             AS decision,
  NOW()                                                 AS updated_at
FROM scan_results sr
JOIN scan_jobs    sj ON sj.id = sr.job_id
CROSS JOIN LATERAL jsonb_array_elements(
  CASE
    WHEN jsonb_typeof(sr.grouped_violations) = 'array' THEN sr.grouped_violations
    ELSE '[]'::jsonb
  END
) AS v
WHERE sj.status = 'complete'
  AND jsonb_array_length(
    CASE
      WHEN jsonb_typeof(sr.grouped_violations) = 'array' THEN sr.grouped_violations
      ELSE '[]'::jsonb
    END
  ) > 0
ON CONFLICT (audit_id, job_id, group_id) DO NOTHING;

-- 3. Verify: how many triage items were created?
SELECT COUNT(*) AS total_triage_items FROM triage_items;
