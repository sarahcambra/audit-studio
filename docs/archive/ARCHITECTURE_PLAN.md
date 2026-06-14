# 🏗️ Audit Studio - Arcanimal Architecture Migration Plan

## 📋 Executive Summary

Migrate Audit Studio from type-based organization to **Feature-Based Architecture** with clear separation of concerns, TypeScript (optional), and improved maintainability.

---

## 🎯 Current State Analysis

### Existing Structure Issues:
```
src/
├── components/          # Mixed components (shell + features)
│   ├── audit/          # Some feature grouping (incomplete)
│   ├── scan/           # Scan components
│   ├── triage/         # Triage components
│   ├── wizard/         # Wizard steps
│   └── ...shell components scattered
├── pages/              # Page components
├── hooks/              # Global hooks (limited)
├── lib/               # Utils + DB (mixed concerns)
│   ├── db/            # Database functions
│   └── *.js           # Various utilities
└── context/           # Global contexts
```

### Problems:
1. **Scattered features** - Audit logic spread across components/audit/, pages/, lib/db/audits.js
2. **No schema validation** - No Zod/Yup for form validation
3. **Mixed concerns** - UI components mixed with data fetching
4. **Hard to navigate** - Related files are in different directories
5. **No feature isolation** - Changes to one feature can affect others

---

## 🏗️ Target Architecture

```
src/
├── App.jsx                    # Root (unchanged)
├── main.jsx                   # Entry (unchanged)
│
├── 📁 features/               # FEATURE-BASED ORGANIZATION
│   ├── 📁 auth/
│   │   ├── 📁 components/
│   │   ├── 📁 hooks/
│   │   │   └── useAuth.js     # From context/AuthContext.jsx
│   │   └── AuthProvider.jsx   # From context/AuthContext.jsx
│   │
│   ├── 📁 audit/
│   │   ├── 📁 components/
│   │   │   ├── AuditList/     # From AuditsPage.jsx
│   │   │   ├── AuditCard/
│   │   │   ├── AuditForm/     # From NewAuditWizard.jsx
│   │   │   ├── AuditHeader/
│   │   │   └── PipelineBar/   # From components/PipelineBar.jsx
│   │   ├── 📁 hooks/
│   │   │   ├── useAudits.js   # From lib/db/audits.js
│   │   │   ├── useCreateAudit.js
│   │   │   ├── useUpdateAudit.js
│   │   │   └── useDeleteAudit.js
│   │   ├── 📁 context/
│   │   │   └── AuditContext.jsx
│   │   ├── 📁 schema/
│   │   │   └── auditSchema.js  # NEW: Zod validation
│   │   └── index.js           # Feature exports
│   │
│   ├── 📁 scan/
│   │   ├── 📁 components/
│   │   │   ├── ScanPanel/     # From components/scan/ScanPanel.jsx
│   │   │   ├── ScanResults/   # From components/scan/ScanResults.jsx
│   │   │   └── ScanProgress/
│   │   ├── 📁 hooks/
│   │   │   ├── useScanRunner.js
│   │   │   ├── useScanProgress.js
│   │   │   └── useCreateScan.js
│   │   └── index.js
│   │
│   ├── 📁 triage/
│   │   ├── 📁 components/
│   │   │   ├── TriageTable/   # From components/triage/TriageTab.jsx
│   │   │   ├── IssueDetailDrawer/
│   │   │   └── DecisionBadge/
│   │   ├── 📁 hooks/
│   │   │   ├── useTriageItems.js
│   │   │   └── useUpdateTriage.js
│   │   └── index.js
│   │
│   ├── 📁 report/
│   │   └── ...
│   │
│   └── 📁 user/
│       └── ...
│
├── 📁 shared/                 # GLOBALLY REUSABLE COMPONENTS
│   ├── 📁 layout/
│   │   ├── ApplicationShell/  # From components/ApplicationShell.jsx
│   │   ├── DashboardNavbar/
│   │   └── DefaultFooter/
│   │
│   ├── 📁 ui/                 # Base UI components
│   │   ├── Button/
│   │   ├── Modal/
│   │   ├── Badge/
│   │   ├── Card/
│   │   └── index.js
│   │
│   ├── 📁 hooks/              # Global hooks
│   │   ├── useToast.js        # From context/ToastContext.jsx
│   │   ├── useLocalStorage.js
│   │   └── useDebounce.js
│   │
│   └── 📁 utils/
│       ├── formatters.js
│       └── validators.js
│
├── 📁 pages/                  # ROUTE COMPONENTS (thin)
│   ├── audits/
│   │   ├── page.jsx           # Uses features/audit
│   │   └── [id]/
│   │       └── page.jsx
│   ├── audit/
│   │   └── new/
│   │       └── page.jsx
│   └── ...
│
├── 📁 lib/                    # UTILITIES (not feature-specific)
│   ├── supabase.js
│   ├── api.js                 # NEW: API client config
│   └── constants/
│       ├── routes.js
│       └── wcag.js
│
└── 📁 config/
    └── theme.js               # From theme.js
```

---

## 📅 Migration Phases

### Phase 1: Foundation (Week 1)
**Goal**: Create new folder structure, move shared components

- [ ] Create `src/features/` directory
- [ ] Create `src/shared/` directory
- [ ] Move layout components to `shared/layout/`
- [ ] Create shared UI components wrapper
- [ ] Update imports in App.jsx

**Files to move:**
```
components/ApplicationShell.jsx → shared/layout/ApplicationShell/
components/DashboardNavbar.jsx → shared/layout/DashboardNavbar/
components/DefaultFooter.jsx → shared/layout/DefaultFooter/
components/DoubleSidenav.jsx → shared/layout/DoubleSidenav/
components/StatCard.jsx → shared/ui/Card/
components/PipelineBar.jsx → shared/ui/PipelineBar/
```

### Phase 2: Auth Feature (Week 1)
**Goal**: Migrate auth as the first feature

- [ ] Create `features/auth/`
- [ ] Move AuthContext → features/auth/context/
- [ ] Create useAuth hook
- [ ] Update all imports

**Files:**
```
context/AuthContext.jsx → features/auth/AuthProvider.jsx
context/ThemeContext.jsx → features/theme/ThemeProvider.jsx (separate feature)
context/ToastContext.jsx → shared/hooks/useToast.js (global)
```

### Phase 3: Audit Feature (Week 2)
**Goal**: Complete audit feature migration

- [ ] Create `features/audit/`
- [ ] Move components/audit/* → features/audit/components/
- [ ] Move components/wizard/* → features/audit/components/AuditForm/
- [ ] Create audit schema (Zod)
- [ ] Split lib/db/audits.js into hooks

**Components to migrate:**
```
components/NewAuditWizard.jsx → features/audit/components/AuditForm/
components/NewAuditStepper.jsx → features/audit/components/AuditForm/Stepper/
components/wizard/Step*.jsx → features/audit/components/AuditForm/steps/
components/audit/OverviewTab.jsx → features/audit/components/AuditOverview/
components/PipelineBar.jsx → features/audit/components/PipelineBar/ OR shared/ui/
```

**Hooks to create:**
```
features/audit/hooks/useAudits.js       # List audits
features/audit/hooks/useAudit.js        # Single audit
features/audit/hooks/useCreateAudit.js  # Create mutation
features/audit/hooks/useUpdateAudit.js  # Update mutation
features/audit/hooks/useDeleteAudit.js  # Delete mutation
```

**Schema to create:**
```javascript
// features/audit/schema/auditSchema.js
import { z } from 'zod';

export const auditSchema = z.object({
  name: z.string().min(1, 'Audit name is required'),
  client_name: z.string().optional(),
  project_name: z.string().optional(),
  website_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  wcag_version: z.enum(['2.1', '2.2']),
  conformance_level: z.enum(['A', 'AA', 'AAA']),
  audit_goal: z.string().optional(),
  notes: z.string().optional(),
});

export type AuditFormData = z.infer<typeof auditSchema>;
```

### Phase 4: Scan Feature (Week 3)
**Goal**: Migrate scan functionality

- [ ] Create `features/scan/`
- [ ] Move scan components
- [ ] Move hooks/useScanRunner.js → features/scan/hooks/
- [ ] Create scan context for state management

**Components:**
```
components/scan/ScanPanel.jsx → features/scan/components/ScanPanel/
components/scan/ScanResults.jsx → features/scan/components/ScanResults/
hooks/useScanRunner.js → features/scan/hooks/useScanRunner.js
hooks/useScanProgress.js → features/scan/hooks/useScanProgress.js
```

### Phase 5: Triage Feature (Week 3-4)
**Goal**: Migrate triage functionality

- [ ] Create `features/triage/`
- [ ] Move triage components
- [ ] Split lib/db/triage.js into hooks

**Components:**
```
components/triage/TriageTab.jsx → features/triage/components/TriageTable/
components/triage/IssueDetailDrawer.jsx → features/triage/components/IssueDetailDrawer/
components/audit/OverviewTab.jsx → features/triage/components/TriageSummary/
```

### Phase 6: Pages Cleanup (Week 4)
**Goal**: Pages become thin wrappers

- [ ] Refactor pages/AuditsPage.jsx to use features/audit
- [ ] Refactor pages/AuditDetailPage.jsx
- [ ] Refactor pages/NewAuditPage.jsx

**Pattern:**
```jsx
// pages/audits/page.jsx
import { AuditList } from '@/features/audit';

export default function AuditsPage() {
  return (
    <ApplicationShell>
      <AuditList />
    </ApplicationShell>
  );
}
```

### Phase 7: Utilities & Constants (Week 4)
**Goal**: Organize remaining utilities

- [ ] Move lib/ utilities to appropriate places
- [ ] Create shared/lib/ for truly shared utilities
- [ ] Create feature-specific utils

**Reorganization:**
```
lib/db/* → features/*/hooks/
lib/supabase.js → config/supabase.js
lib/ruleEnrichments.js → features/scan/constants/ruleEnrichments.js
lib/wcag*.js → shared/constants/wcag.js
lib/enrichViolations.js → features/scan/utils/enrichViolations.js
```

---

## 🔄 Implementation Strategy

### 1. Create Feature Template

Create a script to scaffold new features:

```bash
#!/bin/bash
# scripts/create-feature.sh

FEATURE_NAME=$1

mkdir -p src/features/$FEATURE_NAME/{components,hooks,context,schema}
touch src/features/$FEATURE_NAME/index.js

# Create template files...
```

### 2. Barrel Exports

Each feature exports via `index.js`:

```javascript
// features/audit/index.js
export { AuditProvider } from './context/AuditContext';
export { AuditList } from './components/AuditList/AuditList';
export { AuditForm } from './components/AuditForm/AuditForm';
export { useAudits } from './hooks/useAudits';
export { useCreateAudit } from './hooks/useCreateAudit';
export { auditSchema } from './schema/auditSchema';
```

### 3. Absolute Imports

Configure Vite for clean imports:

```javascript
// vite.config.js
export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@config': path.resolve(__dirname, './src/config'),
    },
  },
};
```

### 4. Migration Order

**Priority (least risky first):**

1. Shared/UI components (no business logic)
2. Auth feature (self-contained)
3. Scan feature (independent)
4. Triage feature (depends on scan)
5. Audit feature (central, most complex)
6. Page cleanup

---

## 📦 Dependencies to Add

```bash
# Schema validation
npm install zod

# Optional: React Query for data fetching
npm install @tanstack/react-query

# Optional: Form handling
npm install react-hook-form @hookform/resolvers
```

---

## 🧪 Testing Strategy

1. **Co-location**: Tests next to source files
```
features/audit/components/AuditForm/
├── AuditForm.jsx
├── AuditForm.test.jsx
└── __snapshots__/
```

2. **Feature isolation**: Each feature testable independently

---

## ✅ Acceptance Criteria

- [ ] All components organized by feature
- [ ] No `../../` imports (use aliases)
- [ ] Each feature self-contained
- [ ] Pages are thin (< 50 lines)
- [ ] Shared components truly reusable
- [ ] Schema validation on all forms
- [ ] Build passes without errors
- [ ] No regression in functionality

---

## 📊 Estimation

| Phase | Duration | Risk |
|-------|----------|------|
| Phase 1: Foundation | 2 days | Low |
| Phase 2: Auth | 1 day | Low |
| Phase 3: Audit | 4 days | High |
| Phase 4: Scan | 2 days | Medium |
| Phase 5: Triage | 2 days | Medium |
| Phase 6: Pages | 2 days | Low |
| Phase 7: Utilities | 2 days | Low |
| **Total** | **15 days** | |

**Recommendation**: Migrate incrementally, feature by feature, rather than big-bang rewrite.

---

## 🚀 Quick Start Command

```bash
# Create new feature structure
mkdir -p src/features/{auth,audit,scan,triage,user}
mkdir -p src/shared/{layout,ui,hooks,utils}
mkdir -p src/pages/{audits,audit,scan,profile}

# Move files (example for audit)
mv src/components/audit/* src/features/audit/components/
mv src/components/wizard/* src/features/audit/components/AuditForm/
mv src/lib/db/audits.js src/features/audit/hooks/
```

---

## 🎯 Benefits After Migration

1. **Developer Experience**: Find files faster
2. **Scalability**: Add new features easily
3. **Maintainability**: Isolate changes
4. **Reusability**: Clear shared vs feature-specific
5. **Testing**: Feature-level testability
6. **Onboarding**: Clear structure for new devs
7. **Code Splitting**: Easy lazy loading by feature
