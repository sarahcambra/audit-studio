# Fixes Applied + Required Manual Actions

**Date:** 2026-06-14 (autonomous overnight run)

I limited autonomous changes to **safe, reversible, non-deploying** edits. Two applied. The critical secret remediation needs steps only you can finish (rotating the token, rewriting history).

---

## ✅ Applied automatically

### 1. Added the missing `test` scripts — `package.json`
`vitest` + coverage were installed and ~12 test files existed, but there was no `test` script, so `npm test` failed. Added:
```json
"test": "vitest run",
"test:watch": "vitest",
"test:coverage": "vitest run --coverage",
```
`npm test` now runs the suite. *(Heads-up: you still have two competing Vitest configs — `vite.config.js` declares `test.environment:'node'` while `vitest.config.js` uses `jsdom`. Consolidate to one so component tests get jsdom — left for you since it can change which tests pass.)*

### 2. Untracked the leaked `.env` — `git rm --cached .env`
`.env` was tracked in git and contains a **real `FIGMA_ACCESS_TOKEN`**. I removed it from the index (staged as deletion `D`). **The file is untouched on disk**, and `.gitignore` already covers `.env*`, so it won't be re-added.
This is staged, **not committed** — review and commit it yourself.

---

## 🔴 Required manual actions (I cannot/should not do these for you)

### A. Rotate the Figma token — do this first
The token `figd_…` has been in git history since the initial commit (`a410020`). Untracking does **not** unshare it. Treat it as compromised: revoke/regenerate it in Figma → Settings → Personal access tokens, and update wherever it's used.

### B. Purge it from git history (before any push to a shared/public remote)
```bash
# option 1: git-filter-repo (recommended)
pip install git-filter-repo
git filter-repo --path .env --invert-paths
# option 2: BFG
bfg --delete-files .env
```
Then force-push (coordinate with anyone who has clones). The Supabase **anon** key in the same file is public by design — no action needed for it.

### C. Commit the staged removal
```bash
git commit -m "Stop tracking .env (secret rotated, history to be purged)"
```

---

## Intentionally NOT auto-fixed (need your judgment / touch deployed code)

| Finding | Why I left it | File |
|---------|---------------|------|
| Rate-limit fails open on count error | Changes production auth/abuse behavior — you should review | `functions/handlers/scan.js` |
| Worker bearer token over plaintext HTTP | Infra change (Caddy routing / firewall) | `functions/.env`, GCE |
| Env-var name drift (`SERVICE_KEY` vs `SERVICE_ROLE_KEY`) | Renaming risks a 503 if any deploy target is missed | functions + worker |
| Duplicate Vitest config | Could flip which tests pass | `vite.config.js` / `vitest.config.js` |
| Empty `report` feature / stubbed reports routes | A feature to build, not a fix | `src/features/report/`, `src/routes/index.jsx` |
| Dead Vercel config, doc sprawl, stray migration SQL | Bulk cleanup — safer with you watching | repo root |
| `axe-core` in frontend `dependencies` | Need to confirm it isn't imported client-side first | `package.json` |

See `01_CODE_REVIEW.md` for the full reasoning on each.
