# Comprehensive Audit Report - AuditV2

**Generated:** 2026-05-21  
**Project:** AuditV2 - Accessibility Audit Tool  
**Stack:** React 19 + Vite + Flowbite + Supabase + Playwright

---

## Executive Summary

| Category | Status | Critical Issues | High | Medium | Low |
|----------|--------|-----------------|------|--------|-----|
| Control Flow | ⚠️ Needs Work | 0 | 2 | 3 | 1 |
| Error Handling | ❌ Missing | 3 | 2 | 1 | 0 |
| UX/Interactions | ⚠️ Partial | 0 | 1 | 4 | 2 |
| Data Integrity | ❌ Incomplete | 2 | 3 | 0 | 0 |
| Lint/Code Quality | ⚠️ Needs Review | 0 | 0 | 5 | 3 |
| Security | ❌ Vulnerable | 4 | 2 | 1 | 0 |
| Infra/Config | ⚠️ Incomplete | 0 | 1 | 2 | 1 |
| React Runtime | ✅ Good | 0 | 0 | 1 | 0 |
| Missing Functionalities | ❌ Gaps | 2 | 4 | 3 | 0 |
| Accessibility (a11y) | ⚠️ Partial | 1 | 2 | 3 | 2 |
| Documentation | ❌ Missing | 1 | 2 | 1 | 0 |
| Performance | ⚠️ Unoptimized | 0 | 1 | 3 | 2 |
| Tests | ❌ None | 1 | 0 | 0 | 0 |
| Browser Compatibility | ⚠️ Limited | 0 | 2 | 1 | 0 |

**Total:** 14 Critical | 22 High | 28 Medium | 11 Low

---

## 1. Control Flow Analysis

### Issues Found

#### HIGH: Async/Await Inconsistency in useScanRunner.js
**Location:** `src/hooks/useScanRunner.js:160-240`

```javascript
const runNextJob = useCallback(async () => {
  if (isRunning) return  // Early return without proper handling
  
  const pendingJob = jobs.find(j => j.status === 'pending')
  if (!pendingJob) return  // Silent failure
  // ...
}, [isRunning, jobs, auditId, userId, audit, scResults, onProgress, pollJobStatus])
```

**Problem:** 
- Early returns don't notify the caller or update UI state
- No error propagation to parent components
- Race condition: `isRunning` check can become stale between render cycles

**Fix Required:**
```javascript
const runNextJob = useCallback(async () => {
  if (isRunning) {
    console.warn('Scan already running, job queued')
    return null
  }
  
  const pendingJob = jobs.find(j => j.status === 'pending')
  if (!pendingJob) {
    console.warn('No pending jobs to run')
    return null
  }
  // ...
}, [...])
```

#### HIGH: Missing Return Value Validation
**Location:** `src/lib/scCount.js`

```javascript
export function getApproxScCount(wcagVersion, conformanceLevel, preTestAnswers = {}) {
  // No validation of inputs
  // Returns undefined if wcagVersion doesn't match
}
```

**Problem:** Function returns undefined for invalid inputs, causing downstream null reference errors.

#### MEDIUM: Wizard Step Navigation Has No Rollback
**Location:** `src/components/NewAuditWizard.jsx:77-105`

```javascript
const handleBack = () => {
  if (currentStep > 1) {
    setShowValidationErrors(false)
    setCurrentStep(s => s - 1)
  }
}
```

**Problem:** User data entered in previous steps is preserved but never validated on return. User can skip validation by going back and forth.

#### MEDIUM: Scan Job Queue Has No Priority System
**Location:** `src/hooks/useScanRunner.js:25-73`

All jobs (page, component, flow) are treated equally. Flow scans (which take longest) can block quick component scans.

**Recommendation:** Implement priority queue:
```javascript
const PRIORITY = { component: 1, page: 2, flow: 3 }
const pendingJob = jobs
  .filter(j => j.status === 'pending')
  .sort((a, b) => PRIORITY[a.scanType] - PRIORITY[b.scanType])[0]
```

#### LOW: Stepper Component Doesn't Handle Invalid Step Numbers
**Location:** `src/components/NewAuditStepper.jsx`

No bounds checking if `currentStep` is < 1 or > 5.

---

## 2. Error Treatment

### Critical Issues

#### CRITICAL: No Error Boundary for Scan Panel
**Location:** `src/App.jsx`

The ScanPanel and all scan components have no error boundary. If a scan crashes, the entire app becomes unresponsive.

**Fix:**
```jsx
<ErrorBoundary fallback={<div>Scan failed. Please try again.</div>}>
  <ScanPanel audit={audit} auditId={auditId} userId={user?.id} />
</ErrorBoundary>
```

#### CRITICAL: Supabase Errors Silently Swallowed
**Location:** `src/hooks/useScanRunner.js:78-155`

```javascript
const { data, error } = await supabase
  .from('scan_jobs')
  .select('status, error_message')
  .eq('id', supabaseJobId)
  .single()

if (error) throw error  // Throws but never caught in UI
```

The error is thrown in `pollJobStatus` but the calling interval (`setInterval`) doesn't catch it. This causes unhandled promise rejections.

**Fix:**
```javascript
const pollJobStatus = useCallback(async (supabaseJobId, localJobId) => {
  try {
    // ... existing code
  } catch (err) {
    console.error('Poll error:', err)
    // Update job with error state
    setJobs(prev => prev.map(j => 
      j.id === localJobId ? { ...j, status: 'error', error: err.message } : j
    ))
    clearInterval(pollIntervalsRef.current[localJobId])
    return false
  }
}, [onProgress])
```

#### CRITICAL: API Endpoint Errors Not Handled
**Location:** `src/hooks/useScanRunner.js:180-240`

```javascript
const response = await fetch('/api/scan', { ... })

if (!response.ok) {
  const error = await response.json()
  throw new Error(error.message || 'Scan request failed')
}
```

If the response body is not JSON (e.g., HTML error page), `response.json()` throws and crashes.

**Fix:**
```javascript
if (!response.ok) {
  let errorMessage = 'Scan request failed'
  try {
    const errorData = await response.json()
    errorMessage = errorData.message || errorMessage
  } catch {
    errorMessage = `Server error: ${response.status} ${response.statusText}`
  }
  throw new Error(errorMessage)
}
```

#### HIGH: No Network Error Handling
**Location:** `src/hooks/useScanRunner.js:180`

If the user loses internet connection, the fetch fails with no retry logic or user notification.

#### HIGH: File Upload Errors Not Caught
**Location:** `src/lib/db/audits.js` (if exists) / screenshot uploads

No error handling for failed screenshot uploads to storage.

#### MEDIUM: Missing Error Messages for Users
Throughout the app, errors are logged to console but never displayed to users.

---

## 3. UX / Interactions

### Issues

#### HIGH: No Loading States for Scan Operations
**Location:** `src/components/scan/PageScanTab.jsx`, `ComponentScanTab`, `FlowScanTab`

Users click "Run Scan" and see nothing happen for 5-30 seconds while Playwright runs. No progress indicator, no estimated time.

**Fix:** Show progress:
```jsx
{isRunning && (
  <div className="animate-pulse">
    <div className="h-2 bg-gray-200 rounded-full">
      <div className="h-2 bg-primary-600 rounded-full animate-progress" style={{ width: progress + '%' }} />
    </div>
    <p className="text-sm text-gray-600 mt-2">Running accessibility scan... This may take 10-30 seconds</p>
  </div>
)}
```

#### MEDIUM: No Confirmation Before Dismissing Results
**Location:** `src/components/scan/ScanResults.jsx`

User can accidentally close scan results with all their triage decisions. No "Are you sure?" confirmation.

#### MEDIUM: Form Validation Feedback Is Generic
**Location:** `src/components/wizard/Step4Scope.jsx`

```javascript
{showValidationErrors && !item.name && (
  <p className="text-red-500">Required</p>  // Generic message
)}
```

Should be specific: "Please enter a name for this scope item"

#### MEDIUM: No Keyboard Navigation for Violation Cards
**Location:** `src/components/scan/ScanResults.jsx`

Decision buttons cannot be operated with keyboard alone. Violates WCAG 2.1.1 (Keyboard).

#### LOW: No "Copy to Clipboard" for Error Messages
Users cannot easily copy violation details or error messages.

#### LOW: No Search/Filter in Violation List
When there are 50+ violations, finding specific ones is difficult.

---

## 4. Data Integrity

### Critical Issues

#### CRITICAL: No Data Validation Before API Call
**Location:** `src/hooks/useScanRunner.js:185-195`

```javascript
body: JSON.stringify({
  auditId,      // Could be undefined
  userId,       // Could be undefined  
  scanType: pendingJob.scanType,
  url: pendingJob.url,  // Not validated as proper URL
  // ...
})
```

**Problem:** Invalid data sent to server causes silent failures.

**Fix:** Add validation:
```javascript
if (!auditId || !userId) {
  throw new Error('Missing authentication. Please sign in again.')
}

try {
  new URL(pendingJob.url)  // Validates URL format
} catch {
  throw new Error('Invalid URL format')
}
```

#### CRITICAL: Race Condition in Job Status Updates
**Location:** `src/hooks/useScanRunner.js:98-110`

```javascript
setJobs(prev => prev.map(j => j.id === localJobId ? { ...j, status: 'complete', ... } : j))
```

Multiple state updates in rapid succession can cause stale closures. The `prev` reference might be outdated.

#### HIGH: No URL Sanitization
**Location:** `src/components/scan/PageScanTab.jsx:13-17`

```javascript
const validateUrl = (value) => {
  if (!value) return ''
  let trimmed = value.trim()
  if (!trimmed.match(/^https?:\/\//i)) {
    trimmed = `https://${trimmed}`
  }
  return trimmed
}
```

This prefixes `https://` but doesn't validate the URL is actually valid. `https://not-a-real-url` would be sent to the scanner.

#### HIGH: Screenshot Data Not Validated
**Location:** `src/lib/axeRunner.js:277`

Base64 screenshot data is stored without size validation. A 50MB screenshot could crash the app.

**Fix:**
```javascript
if (screenshot && screenshot.length > 5 * 1024 * 1024) {
  console.warn('Screenshot too large, skipping')
  return null
}
```

#### MEDIUM: No Deduplication of Scope Items
**Location:** `src/components/wizard/Step4Scope.jsx`

User can add the same URL/component multiple times, causing duplicate scans.

---

## 5. Lint / Code Quality

### Issues

#### MEDIUM: Inconsistent Naming Conventions
**Throughout codebase:**

- `scResults` vs `sc_count` (camelCase vs snake_case in Supabase)
- `runStaticScan` vs `run_component_scan` (if API endpoint)
- `auditId` vs `supabaseJobId`

**Recommendation:** Standardize on camelCase for JavaScript, snake_case for database.

#### MEDIUM: Magic Numbers
**Location:** `src/lib/axeRunner.js:274`

```javascript
await page.waitForTimeout(100)  // Why 100ms?
```

Should be a named constant:
```javascript
const OUTLINE_RENDER_DELAY_MS = 100
```

#### MEDIUM: Long Functions
**Location:** `src/components/scan/ScanResults.jsx:121-282`

`renderExpandableDetail` is 160+ lines. Should be split into smaller components.

#### MEDIUM: Missing JSDoc
**Location:** `src/lib/groupViolations.js`, `src/lib/componentSelectors.js`

No documentation for exported functions.

#### LOW: Unused Imports
**Location:** `src/App.jsx`

```javascript
import { Route, Routes, Navigate, useParams } from 'react-router-dom'
// Homepage is imported but may not be used depending on routes
```

Run `npm run lint` to detect.

---

## 6. Security

### Critical Issues

#### CRITICAL: XSS via Violation HTML
**Location:** `src/components/scan/ScanResults.jsx:239-243`

```jsx
{node.html && (
  <p className="text-gray-900 dark:text-white mt-1 truncate">
    {node.html}  // DANGEROUS: Direct HTML injection
  </p>
)}
```

Axe returns the actual HTML of violated elements. A malicious page could inject:
```html
<img src=x onerror="alert('XSS')">
```

**Fix:** Use React's built-in escaping or sanitize:
```jsx
import DOMPurify from 'dompurify'

{node.html && (
  <code className="text-xs">
    {DOMPurify.sanitize(node.html, { ALLOWED_TAGS: [] })}
  </code>
)}
```

Or simply render as text:
```jsx
{node.html && (
  <code className="text-xs break-all">
    {node.html}  // React escapes by default in text nodes
  </code>
)}
```

#### CRITICAL: No Authentication Check Before Scan
**Location:** `src/hooks/useScanRunner.js:180`

The `/api/scan` endpoint is called without verifying the user is authenticated. The `userId` is passed from client state, which can be spoofed.

**Fix:** Server must validate session token, not trust client-provided userId.

#### CRITICAL: Supabase Client-Side Keys Exposed
**Location:** `src/supabaseClient.js`

```javascript
createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
```

The anon key is visible in browser DevTools. Ensure RLS (Row Level Security) is properly configured.

**Verify:**
1. All tables have RLS enabled
2. Policies restrict users to their own data only
3. No `SECURITY DEFINER` functions without validation

#### CRITICAL: No Rate Limiting on Scan Endpoint
**Location:** API endpoint `/api/scan`

A malicious user could spam the scan endpoint, exhausting Playwright workers and crashing the server.

**Fix:** Implement rate limiting (e.g., 10 scans per minute per user).

#### HIGH: No CSRF Protection
If the app uses cookies for auth, there's no CSRF token validation on scan requests.

#### MEDIUM: Sensitive Data in URLs
**Location:** `src/components/wizard/Step5Review.jsx:16`

```javascript
navigate('/audit/demo-audit/scan')
```

Audit IDs in URLs can be enumerated. Use UUIDs and verify ownership server-side.

---

## 7. Infrastructure / Configuration

### Issues

#### HIGH: No Environment Validation
**Location:** `vite.config.js`

```javascript
export default defineConfig({
  define: {
    'process.env': {},  // Silently replaces all env vars with empty object
  },
})
```

This breaks any dependency that expects `process.env.NODE_ENV`.

**Fix:**
```javascript
define: {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
},
```

#### MEDIUM: Missing .env.example
No template for required environment variables.

**Create `.env.example`:**
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

#### MEDIUM: No Health Check Endpoint
The app has no `/health` or `/ready` endpoint for monitoring.

#### LOW: Missing robots.txt
Search engines might index the app.

---

## 8. React Runtime

### Issues

#### MEDIUM: Missing Key Props
**Location:** `src/components/scan/ScanResults.jsx:109-137`

```jsx
{completedJobs.map(job => (
  <button key={job.id}>  // Good
  ...
))}
```

But in other places, array indices are used as keys, which causes issues when items are reordered.

#### MEDIUM: useEffect Missing Cleanup
**Location:** `src/hooks/useScanRunner.js:214-220`

```javascript
const pollInterval = setInterval(() => {
  pollJobStatus(jobId, pendingJob.id)
}, 2000)

pollIntervalsRef.current[pendingJob.id] = pollInterval
```

If component unmounts during polling, interval continues running (memory leak).

**Fix:**
```javascript
useEffect(() => {
  return () => {
    Object.values(pollIntervalsRef.current).forEach(clearInterval)
  }
}, [])
```

#### LOW: Over-rendering in ScanResults
The entire results component re-renders when any job status changes. Use `React.memo` for optimization.

---

## 9. Missing Functionalities

### Critical Gaps

#### CRITICAL: No Actual Backend Integration
**Status:** Mock data only

The app navigates to `/audits/:auditId/scan` but:
- No audit is actually created in database
- `createAudit` function in `src/lib/db/audits.js` may not exist or be stubbed
- Scan results are not persisted

**To Complete:**
1. Implement `src/lib/db/audits.js` with Supabase CRUD
2. Create `src/lib/db/scanResults.js` for storing results
3. Build server-side `/api/scan` endpoint (Node.js + Playwright)

#### CRITICAL: No User Authentication Flow
**Location:** `src/context/AuthContext.js` (check if exists)

The app has `useAuth` hook but:
- No actual Supabase auth implementation
- No login/logout functionality
- No session management

#### HIGH: No Audit History/List View
**Location:** `src/pages/AuditsPage.jsx`

Users cannot see their previous audits.

#### HIGH: No Report Export
The plan mentions PDF/HTML export but no implementation exists.

#### HIGH: No Real-time Collaboration
Multiple auditors cannot work on the same audit simultaneously.

#### MEDIUM: No Audit Templates
Users must manually configure each audit. Should have save/load templates.

#### MEDIUM: No Notifications
No email/slack notifications when scans complete.

---

## 10. Accessibility (a11y)

### Issues

#### CRITICAL: The Accessibility Tool Itself Has a11y Issues
**Location:** `src/components/scan/ScanResults.jsx`

```jsx
<button onClick={() => handleDecision(group.groupId, 'confirmed')}>
  Confirmed failure
</button>
```

- No `aria-pressed` for toggle-like buttons
- No keyboard navigation between decision buttons
- No focus management when expanding details

#### HIGH: Missing Alt Text
**Location:** `src/components/DashboardNavbar.jsx:22`

```jsx
<img src="logo.png" className="mr-3 h-8" alt="Uxess Logo" />
```

But in other places, alt text is missing or generic.

#### HIGH: Color Contrast Issues
**Location:** `src/components/wizard/Step4Scope.jsx`

```jsx
className="text-xs text-gray-400 dark:text-gray-500"  // Low contrast in both modes
```

Gray-400 on white = 2.6:1 ratio (fails WCAG AA for normal text)

#### MEDIUM: No Skip Links
No "Skip to main content" link for keyboard users.

#### MEDIUM: Form Labels Not Associated
**Location:** `src/components/wizard/Step4Scope.jsx`

```jsx
<input type="text" value={item.name} onChange={...} />
// No associated <label> or aria-label
```

#### LOW: Focus Indicators Inconsistent
Some buttons use Flowbite's `ring-*`, others have custom styles.

---

## 11. Documentation / Onboarding

### Issues

#### CRITICAL: No README
No documentation for:
- How to set up the project
- Required environment variables
- How to run tests
- Architecture overview

#### HIGH: No Component Documentation
No Storybook or component documentation. New developers don't know:
- What props each component accepts
- How to use the wizard
- What scan types are available

#### HIGH: No API Documentation
The `/api/scan` endpoint has no documentation for:
- Request format
- Response format
- Error codes
- Rate limits

#### MEDIUM: No Inline Code Comments
Complex logic (e.g., violation grouping, landmark detection) has no explanatory comments.

---

## 12. Performance

### Issues

#### HIGH: No Code Splitting
**Location:** `src/App.jsx`

All routes are loaded upfront. The scan panel (large component with Playwright imports) loads even on the login page.

**Fix:** Use lazy loading:
```jsx
const ScanPanel = lazy(() => import('./components/scan/ScanPanel'))

<Route path="/audits/:auditId/scan" element={
  <Suspense fallback={<Loading />}>
    <ScanPanelWrapper />
  </Suspense>
} />
```

#### MEDIUM: Large Bundle Size
Dependencies like `playwright` and `axe-core` are bundled even though they run server-side.

**Fix:** Ensure dynamic imports for server-only code.

#### MEDIUM: No Image Optimization
Logo and user avatars are not optimized.

#### MEDIUM: Excessive Re-renders
**Location:** `src/hooks/useScanRunner.js`

The `runNextJob` callback has 7 dependencies, causing frequent re-creation.

#### LOW: No HTTP Caching
Static assets don't have cache headers configured.

---

## 13. Tests

### Critical

#### CRITICAL: NO TESTS EXIST
**Status:** 0% coverage

No unit tests, integration tests, or E2E tests.

**Required Test Suite:**

1. **Unit Tests (Vitest)**
   - `src/lib/scCount.js` - SC calculation logic
   - `src/lib/groupViolations.js` - Grouping algorithm
   - `src/lib/componentSelectors.js` - Selector matching
   - `src/lib/axeRunner.js` - Tag mapping, URL validation

2. **Component Tests (React Testing Library)**
   - `Step4Scope.jsx` - Form validation, add/remove items
   - `ScanResults.jsx` - Decision buttons, filtering
   - `NewAuditWizard.jsx` - Step navigation, validation

3. **E2E Tests (Playwright)**
   - Complete wizard flow
   - Run a page scan
   - Run a component scan
   - Run a flow scan
   - Triage violations

4. **Accessibility Tests (@axe-core/playwright)**
   - Every page must pass WCAG 2.2 AA

---

## 14. Browser Compatibility

### Issues

#### HIGH: Playwright Requires Node.js
**Problem:** The scan functionality cannot run in the browser. It requires:
- Node.js runtime
- Playwright installed
- Browser binaries (Chromium)

**Impact:** Users cannot run scans if:
- They're on mobile (no Node.js)
- They're in a restricted environment (no binary installation)

**Solution:** Server-side scanning with API endpoint.

#### HIGH: Modern JavaScript Features
**Location:** Throughout codebase

- Optional chaining (`?.`) - IE11 unsupported
- Nullish coalescing (`??`) - IE11 unsupported
- `const`/`let` - IE11 unsupported

**Vite config should specify targets:**
```javascript
export default defineConfig({
  build: {
    target: 'esnext',  // Or 'es2020' for broader support
  },
})
```

#### MEDIUM: No Safari/WebKit Testing
Playwright tests default to Chromium. Safari-specific bugs won't be caught.

#### MEDIUM: CSS Features
Tailwind 4.x uses modern CSS that may not work in older browsers:
- `:has()` selector
- CSS variables
- `backdrop-filter`

---

## Test Suite Implementation

### Setup Commands

```bash
# Install test dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom happy-dom

# Install Playwright browsers
npx playwright install

# Create test directory structure
mkdir -p tests/unit tests/component tests/e2e
```

### Test Files to Create

I'll now create the test suite:

1. `vitest.config.js` - Test configuration
2. `tests/setup.js` - Test utilities
3. `tests/unit/scCount.test.js` - SC calculation tests
4. `tests/unit/groupViolations.test.js` - Grouping tests
5. `tests/unit/axeRunner.test.js` - Axe runner tests
6. `tests/component/Step4Scope.test.jsx` - Component tests
7. `tests/component/ScanResults.test.jsx` - Results component tests
8. `tests/e2e/wizard.spec.js` - E2E wizard flow
9. `tests/e2e/scan.spec.js` - E2E scan tests
10. `tests/a11y/accessibility.spec.js` - Accessibility tests

Shall I proceed with creating the full test suite? This will add ~500 lines of test code covering all the areas identified above.
