-- ============================================================
-- Fix triage_items: correct conflict target + decision values + backfill
-- Run in Supabase SQL Editor.
-- ============================================================

-- 1. Drop the wrong constraint if it was partially added
ALTER TABLE triage_items
  DROP CONSTRAINT IF EXISTS triage_items_audit_job_group_key;

-- 2. Expand the decision CHECK to include all values the frontend uses
ALTER TABLE triage_items
  DROP CONSTRAINT IF EXISTS triage_items_decision_check;

ALTER TABLE triage_items
  ADD CONSTRAINT triage_items_decision_check
  CHECK (decision = ANY (ARRAY[
    'confirmed'::text,
    'not-failure'::text,
    'manual-check'::text,
    'deferred'::text,
    'dismissed'::text,
    'needs_review'::text
  ]));

-- 3. Backfill triage_items from all existing completed scan_results
--    Uses the real unique constraint: (audit_id, group_id)
--    decision = NULL = untriaged (CHECK constraints skip NULLs)
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
SELECT DISTINCT ON (sj.audit_id, v->>'groupId')
  sj.audit_id,
  sr.job_id,
  (v->>'groupId')                                                       AS group_id,
  (v->>'ruleId')                                                        AS rule_id,
  (v->>'landmark')                                                      AS landmark,
  (v->>'issueType')                                                     AS issue_type,
  (v->>'impact')                                                        AS impact,
  COALESCE(sr.summary->>'scanName', sj.url)                             AS page_name,
  CASE WHEN sj.scan_type = 'component' THEN sj.selector ELSE NULL END   AS selector,
  ARRAY(SELECT jsonb_array_elements_text(COALESCE(v->'tags',  '[]'::jsonb))) AS tags,
  (v->'scIds'->>0)                                                      AS wcag_sc,
  ARRAY(SELECT jsonb_array_elements_text(COALESCE(v->'scIds', '[]'::jsonb))) AS sc_ids,
  COALESCE((v->>'nodeCount')::int, 0)                                   AS node_count,
  (v->'nodes'->0->>'html')                                              AS element_snippet,
  NULL                                                                  AS decision,
  NOW()                                                                 AS updated_at
FROM scan_results sr
JOIN scan_jobs    sj ON sj.id = sr.job_id
CROSS JOIN LATERAL jsonb_array_elements(
  CASE
    WHEN jsonb_typeof(sr.grouped_violations) = 'array' THEN sr.grouped_violations
    ELSE '[]'::jsonb
  END
) AS v
WHERE sj.status = 'complete'
ORDER BY sj.audit_id, v->>'groupId', sr.created_at DESC
ON CONFLICT (audit_id, group_id) DO NOTHING;

-- 4. Verify
SELECT COUNT(*) AS total_triage_items FROM triage_items;
