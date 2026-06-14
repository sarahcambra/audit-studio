# Audit Studio Backlog

## Features & Improvements

### Favicon Fallback Enhancement
**Status:** Pending  
**Priority:** Low  
**Added:** 2026-06-01

**Current Behavior:**
When adding a new audit, the system attempts to fetch the website's favicon. If no favicon is found, it currently displays a purple circle with the first letter of the project name in the middle.

**Desired Behavior:**
Replace the purple circle + letter fallback with a better default icon or placeholder.

**Options to Consider:**
- [ ] Use a generic globe/website icon (Lucide: `Globe` or `LayoutTemplate`)
- [ ] Use a custom SVG placeholder
- [ ] Show no icon (just text)
- [ ] Use the Flowbite Avatar component with a default icon instead of initials

**Files to Modify:**
- `src/pages/AuditsPage.jsx` - Line 724-728: Current purple circle fallback
  ```jsx
  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
    <span className="text-xs font-medium text-primary-700">
      {(audit.name?.[0] ?? 'A').toUpperCase()}
    </span>
  </div>
  ```
- `functions/handlers/favicon.js` - Favicon fetching logic (exists and works)

**Proposed Solution:**
Replace the letter fallback with a Globe icon:
```jsx
<div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
  {audit.favicon_url ? (
    <img src={audit.favicon_url} alt="" className="h-5 w-5 object-contain" />
  ) : (
    <Globe className="h-4 w-4 text-primary-700" aria-hidden="true" />
  )}
</div>
```

**Notes:**
- Currently favicon is fetched but not displayed in the audit list - only the letter shows
- Need to add `favicon_url` to the audit data returned from the database
- This affects the audit list table only (not cards)
- Consider using Lucide `Globe` or `LayoutTemplate` icon as the default

---

### Triage Table UX Improvements
**Status:** Pending  
**Priority:** High  
**Added:** 2026-06-01

**Current Issues:**
1. **Information Overload** - Expanded row shows too much data at once (description, fix instructions, element location, etc.)
2. **Table Layout** - The nested table + expanded card pattern creates visual confusion
3. **No Bulk Actions** - Users must triage items one-by-one
4. **Limited Grouping** - All items shown in flat list, no way to group by rule/category
5. **Slow Decision Making** - Requires clicking "Detail" or expanding row to see full context
6. **No Visual Preview** - Element snippet is just text, no visual context

**Desired Improvements:**
- [ ] **Simplify expanded view** - Show only critical info inline, move rest to drawer
- [ ] **Add screenshot thumbnail** in expanded row (if available)
- [ ] **Keyboard shortcuts** for quick decisions (1=confirm, 2=needs review, 3=dismiss)
- [ ] **Bulk select + actions** - Checkbox column + batch operations
- [ ] **Group by rule** - Collapsible sections for same rule across pages
- [ ] **Fix preview panel** - Show before/after or visual diff
- [ ] **Quick preview** - Hover to see element highlight on screenshot

**Files:**
- `src/components/triage/TriageTab.jsx` - Main table component (450+ lines)
- `src/components/triage/IssueDetailDrawer.jsx` - Side drawer for full details
- `src/lib/db/triage.js` - Database functions for triage items

**Quick Wins:**
1. Trim expanded row to show only: description, selector, and screenshot
2. Remove redundant "How to Fix" from expanded (keep in drawer only)
3. Add keyboard event listeners for number keys
4. Move category/SC chips to drawer only

**Notes:**
- Table has expand/collapse pattern already working
- Drawer already exists for full detail view
- Need to balance info density vs. usability

## How to Add Items

```markdown
### Title
**Status:** Pending | In Progress | Blocked | Done  
**Priority:** Critical | High | Medium | Low  
**Added:** YYYY-MM-DD

**Description:**
What needs to be done

**Acceptance Criteria:**
- [ ] Criteria 1
- [ ] Criteria 2

**Files:**
- path/to/file1
- path/to/file2
```
