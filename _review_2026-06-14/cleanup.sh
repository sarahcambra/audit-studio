#!/usr/bin/env bash
#
# cleanup.sh — remove garbage / legacy / unused files from Audit Studio
# ---------------------------------------------------------------------
# I (Claude) could not delete or move files myself — the sandbox mount is
# create/edit-only (every `rm`/`mv` returned "Operation not permitted") and a
# stale .git/index.lock blocked all git writes. So everything destructive is
# collected here for you to run in one go on your own machine.
#
# SAFE TO RUN: it only touches build artifacts, editor cruft, dead Vercel
# config, and reorganises docs/migrations into folders via `git mv` (recoverable).
# Review the "REVIEW" section at the bottom before uncommenting those lines.
#
#   cd /Users/sarah/auditV2
#   bash _review_2026-06-14/cleanup.sh
#
set -u
cd "$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
echo "Working in: $(pwd)"

# 0. Stale git lock left by the interrupted sandbox session
[ -f .git/index.lock ] && rm -f .git/index.lock && echo "removed stale .git/index.lock"

echo "== 1. Vitest timestamp junk (build artifacts) =="
rm -f vitest.config.js.timestamp-*.mjs

echo "== 2. Editor / OS / log cruft =="
rm -f .DS_Store
find . -maxdepth 2 -name '.DS_Store' -not -path './node_modules/*' -delete 2>/dev/null
rm -f debug-storybook.log
rm -f EOF                 # 0-byte stray file
rm -f check-syntax.cjs    # one-off helper

echo "== 3. Dead Vercel config (you migrated to Firebase Hosting) =="
rm -f vercel.json .env.vercel-check
rm -rf .vercel

echo "== 4. Debug screenshots in repo root =="
rm -f lines.png correct-lines.png

echo "== 5. Archive historical planning/status docs into docs/archive/ =="
mkdir -p docs/archive
for f in REMEDIATION_PLAN.md REMEDIATION_PLAN_2026-05-29.md \
         PHASE1_COMPLETE.md PHASE2_COMPLETE.md PHASE3_COMPLETE.md PHASE4_COMPLETE.md \
         TECHNICAL_AUDIT_2026-05-30.md COMPREHENSIVE_AUDIT_REPORT.md \
         ARCHITECTURE_PLAN.md ARCHITECTURE_COMPLETE.md CUSTOM_CHECKS_PLAN.md \
         SCAN_WORKER_FIX_PROMPT.md MIGRATION_GCP.md project_audit-studio.md \
         auditV2-documentation.md; do
  [ -f "$f" ] && git mv "$f" "docs/archive/$f" 2>/dev/null || mv "$f" "docs/archive/$f" 2>/dev/null
done

echo "== 6. Consolidate stray root migration SQL into supabase/migrations/ =="
mkdir -p supabase/migrations
for f in supabase_migration_*.sql supabase_storage_setup.sql; do
  [ -f "$f" ] && git mv "$f" "supabase/migrations/$f" 2>/dev/null || mv "$f" "supabase/migrations/$f" 2>/dev/null
done

echo
echo "Done. Review changes with:  git status   then   git add -A && git commit -m 'chore: cleanup + reorg'"
echo
echo "================ REVIEW MANUALLY (uncomment if you agree) ================"
echo "# These may or may not be in use — I left them for you to decide:"
echo "#   rm -f billing.png invoice.png user.png     # root screenshots — are these referenced anywhere?"
echo "#   rm -f supabaseClient.js                     # legacy? src/lib/supabase.js looks like the real client"
echo "#   rm -f BACKLOG.md                            # keep if still your working backlog"
echo "#   rm -rf storybook-static dist               # build outputs — regenerate with npm run build / build-storybook"
echo "#   rm -f scan-results-export.xlsx export-results.py   # old exports?"
echo "#   rm -f test-flow.sh test-issue-detail-flow.mjs      # your recent test scripts? (dated Jun 14)"
