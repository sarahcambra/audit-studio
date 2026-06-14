import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'

// Lazy load pages
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const AuditsPage = lazy(() => import('@/pages/AuditsPage'))
const AuditDetailPage = lazy(() => import('@/pages/AuditDetailPage'))
const NewAuditPage = lazy(() => import('@/pages/NewAuditPage'))
const UserProfilePage = lazy(() => import('@/pages/UserProfilePage'))
const PlaceholderPage = lazy(() => import('@/pages/PlaceholderPage'))

// Layout
import { ApplicationShell } from '@/shared/layout'

/**
 * Router configuration
 */
export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <ApplicationShell />,
    children: [
      // Redirect root to audits
      {
        index: true,
        element: <Navigate to="/audits" replace />,
      },
      // Audits
      {
        path: 'audits',
        children: [
          { index: true, element: <AuditsPage /> },
          { path: 'new', element: <NewAuditPage /> },
          { path: ':auditId', element: <AuditDetailPage /> },
          { path: ':auditId/scan', element: <AuditDetailPage /> },
          {
            path: 'projects',
            element: (
              <PlaceholderPage
                title="By Project"
                section="Audits"
                icon="Layers"
                description="Group and filter audits by project"
              />
            ),
          },
          {
            path: 'archived',
            element: (
              <PlaceholderPage
                title="Archived Audits"
                section="Audits"
                icon="Archive"
                description="Browse archived audits"
              />
            ),
          },
        ],
      },
      // Reports
      {
        path: 'reports',
        children: [
          {
            path: 'audits',
            element: (
              <PlaceholderPage
                title="Audit Reports"
                section="Reports"
                icon="FileText"
                description="Generate WCAG conformance reports"
              />
            ),
          },
          {
            path: 'compliance',
            element: (
              <PlaceholderPage
                title="Compliance Summary"
                section="Reports"
                icon="BarChart3"
                description="Aggregated conformance status"
              />
            ),
          },
          {
            path: 'export',
            element: (
              <PlaceholderPage
                title="Export"
                section="Reports"
                icon="Download"
                description="Export audit data"
              />
            ),
          },
        ],
      },
      // Knowledge
      {
        path: 'knowledge',
        children: [
          { path: 'sc-library', element: <PlaceholderPage title="SC Library" /> },
          { path: 'patterns', element: <PlaceholderPage title="Issue Patterns" /> },
          { path: 'fix-templates', element: <PlaceholderPage title="Fix Templates" /> },
          { path: 'component-catalog', element: <PlaceholderPage title="Component Catalog" /> },
          { path: 'reference-links', element: <PlaceholderPage title="Reference Links" /> },
        ],
      },
      // Settings
      {
        path: 'settings',
        children: [
          { path: 'team', element: <PlaceholderPage title="Team & Users" /> },
          { path: 'branding', element: <PlaceholderPage title="Report Branding" /> },
          { path: 'notifications', element: <PlaceholderPage title="Notifications" /> },
        ],
      },
      // User
      {
        path: 'users/profile',
        element: <UserProfilePage />,
      },
      // Catch all
      {
        path: '*',
        element: <PlaceholderPage title="Page Not Found" />,
      },
    ],
  },
])

export default router
