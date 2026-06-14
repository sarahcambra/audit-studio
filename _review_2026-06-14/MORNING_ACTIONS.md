# Morning Actions — copy/paste commands

Things the sandbox blocked me from doing (deletes, moves, git, npm). Run from `/Users/sarah/auditV2`. Do them in order.

## 1. Clear the stale git lock + review my changes
```bash
rm -f .git/index.lock
git status
git diff            # review the applied edits (scan.js, vite.config.js, scan-worker, AuditDetailPage, new files)
```

## 2. Run the cleanup (deletes garbage, archives docs, consolidates migrations)
```bash
bash _review_2026-06-14/cleanup.sh
git status          # review the moves/removals before committing
```

## 3. Finish fix #5 (axe-core out of the frontend bundle)
```bash
npm uninstall axe-core      # updates package.json AND package-lock together
npm run build               # confirm still green
```

## 4. Smoke-test the new report feature
- `npm run dev`, open an audit with scan results → **Report tab → Generate Report**.
- A print-ready conformance report should open in a new tab. (Allow pop-ups.)
- It's compile-verified but not runtime-tested — confirm it renders, then it's done.

## 5. Finish the architecture moves I couldn't (#1)
```bash
mkdir -p src/features/scan/hooks
git mv src/hooks/useScanRunner.js src/features/scan/hooks/useScanRunner.js
# then update imports:
grep -rl "hooks/useScanRunner\|@/hooks/useScanRunner" src | xargs sed -i '' \
  -e "s#@/hooks/useScanRunner#@features/scan/hooks/useScanRunner#g"
# migrate the last legacy component folder:
git mv src/components/user-profile src/features/auth/components/   # or wherever it belongs
npm run build   # verify imports resolved
```

## 6. Security (still outstanding from the first review)
```bash
# Rotate the Figma token in Figma settings FIRST (assume it's compromised), then:
git commit -m "chore: stop tracking .env"      # the rm --cached is already staged
# purge it from history before pushing anywhere shared:
pip install git-filter-repo && git filter-repo --path .env --invert-paths
```

## 7. Commit everything
```bash
git add -A
git commit -m "Overnight: cleanup, report feature, health/rate-limit/test fixes, logger, IaC"
```

## 8. Optional / later
- **Infra:** `cd infra && terraform init && terraform apply -var=project_id=audit-studio-prod-90ea8` (import the existing VM first — see `infra/main.tf` header).
- **Wire the logger** (`scan-worker/lib/logger.js`) through `scan-worker/index.js`, replacing `console.*` incrementally.
- **Pre-existing bugs to fix** in `src/pages/AuditDetailPage.jsx`: `ManualCheckBadge` (~line 268) and `scoreLabel` (~line 722) are referenced but undefined; ~13 unused imports. Run `npx eslint src/pages/AuditDetailPage.jsx`.
- **Report gating data bug:** the `audit_summary` view returns `untriaged_count = 0` even when `triage_items.decision` is null — that's why the button said "all resolved" with 116 untriaged. Check the view's WHERE/COUNT against `decision IS NULL`.
- **#9 worker split** (1,874-line `scan-worker/index.js`): extract in this order once tests run — `lib/logger.js` (done) → `lib/health.js` → `lib/browser.js` (launch/context) → `lib/screenshot.js` → `lib/normalize.js`, leaving `index.js` as the server + orchestration. Do it with the suite green so each extraction is verified.
```
