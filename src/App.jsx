import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './features/auth'
import { ApplicationShell } from './shared/layout'
import { ErrorBoundary } from './shared/ui'
import LoginPage from './pages/LoginPage'
import PlaceholderPage from './pages/PlaceholderPage'
import {
  Archive, BarChart3, Bell, BookOpen, ClipboardList,
  Download, FileText, Layers, Library, Link,
  Settings, Wrench, Users,
} from 'lucide-react'
import './accessibility.css'

// Heavy pages split into their own chunks — only downloaded when navigated to
const AuditsPage       = lazy(() => import('./pages/AuditsPage'))
const AuditDetailPage  = lazy(() => import('./pages/AuditDetailPage'))
const IssueDetailPage  = lazy(() => import('./pages/IssueDetailPage'))
const NewAuditPage     = lazy(() => import('./pages/NewAuditPage'))
const UserProfilePage  = lazy(() => import('./pages/UserProfilePage'))

function PageLoader() {
  return (
    <div className="flex h-64 items-center justify-center">
      <p className="text-sm text-gray-400 dark:text-gray-500">Loading…</p>
    </div>
  )
}

/** Redirects unauthenticated users to /login */
function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
      <p className="text-sm text-gray-500 dark:text-gray-400">Loading…</p>
    </div>
  )
  return user ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected — wrapped in shell */}
        <Route path="/*" element={
          <PrivateRoute>
            <ApplicationShell>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* ── Audits ───────────────────────────────────────── */}
                  <Route path="/"                     element={<AuditsPage />} />
                  <Route path="/audits"               element={<AuditsPage />} />
                  <Route path="/audits/new"           element={<NewAuditPage />} />
                  <Route path="/audits/:auditId"      element={<AuditDetailPage />} />
                  <Route path="/audits/:auditId/scan" element={<AuditDetailPage />} />
                  <Route path="/audits/:auditId/issues/:issueId" element={<IssueDetailPage />} />
                  <Route path="/audits/projects"      element={
                    <PlaceholderPage title="By Project" section="Audits" icon={Layers}
                      description="Group and filter audits by project to track progress across related engagements." />
                  } />
                  <Route path="/audits/archived"      element={
                    <PlaceholderPage title="Archived Audits" section="Audits" icon={Archive}
                      description="Browse audits that have been archived. Restore or permanently delete them from here." />
                  } />

                  {/* ── Reports ──────────────────────────────────────── */}
                  <Route path="/reports/audits"       element={
                    <PlaceholderPage title="Audit Reports" section="Reports" icon={FileText}
                      description="Generate and download WCAG conformance reports for completed audits." />
                  } />
                  <Route path="/reports/compliance"   element={
                    <PlaceholderPage title="Compliance Summary" section="Reports" icon={BarChart3}
                      description="An aggregated view of conformance status across all active audits and clients." />
                  } />
                  <Route path="/reports/export"       element={
                    <PlaceholderPage title="Export" section="Reports" icon={Download}
                      description="Export audit data as CSV, PDF, or JSON for use in external systems." />
                  } />

                  {/* ── Knowledge base ───────────────────────────────── */}
                  <Route path="/knowledge/sc-library"        element={
                    <PlaceholderPage title="SC Library" section="Knowledge Base" icon={Library}
                      description="Browse all WCAG 2.1 / 2.2 success criteria with testing instructions and examples." />
                  } />
                  <Route path="/knowledge/patterns"          element={
                    <PlaceholderPage title="Issue Patterns" section="Knowledge Base" icon={BookOpen}
                      description="Common axe-core violation patterns with fix guidance and code examples." />
                  } />
                  <Route path="/knowledge/fix-templates"     element={
                    <PlaceholderPage title="Fix Templates" section="Knowledge Base" icon={Wrench}
                      description="Reusable developer-facing fix templates for the most frequent WCAG failures." />
                  } />
                  <Route path="/knowledge/component-catalog" element={
                    <PlaceholderPage title="Component Catalog" section="Knowledge Base" icon={ClipboardList}
                      description="Accessible component patterns and selector presets for recurring UI elements." />
                  } />
                  <Route path="/knowledge/reference-links"   element={
                    <PlaceholderPage title="Reference Links" section="Knowledge Base" icon={Link}
                      description="Curated links to WCAG techniques, ARIA authoring practices, and browser support tables." />
                  } />

                  {/* ── Settings ─────────────────────────────────────── */}
                  <Route path="/settings/team"          element={
                    <PlaceholderPage title="Team & Users" section="Settings" icon={Users}
                      description="Manage team members, roles, and access permissions for your organisation." />
                  } />
                  <Route path="/settings/branding"      element={
                    <PlaceholderPage title="Report Branding" section="Settings" icon={FileText}
                      description="Upload your logo and set brand colors for generated PDF reports." />
                  } />
                  <Route path="/settings/notifications" element={
                    <PlaceholderPage title="Notifications" section="Settings" icon={Bell}
                      description="Configure email and in-app notifications for scan completions and triage deadlines." />
                  } />

                  {/* ── User profile ─────────────────────────────────── */}
                  <Route path="/users/profile"          element={<UserProfilePage />} />

                  {/* ── Catch-all ─────────────────────────────────────── */}
                  <Route path="*" element={
                    <PlaceholderPage title="Page Not Found" section={null} icon={Settings}
                      description="The page you're looking for doesn't exist or hasn't been built yet." />
                  } />
                </Routes>
              </Suspense>
            </ApplicationShell>
          </PrivateRoute>
        } />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
