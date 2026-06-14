import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import { Home, Construction } from 'lucide-react'

/**
 * Reusable placeholder for sections that are not yet implemented.
 * Shows the page title, a breadcrumb trail, and a "coming soon" state.
 *
 * @param {string}  title       - Page heading, e.g. "Audit Reports"
 * @param {string}  section     - Breadcrumb section label, e.g. "Reports"
 * @param {string}  description - One-liner explaining what this section will do
 * @param {element} icon        - Lucide icon component for the empty-state illustration
 */
export default function PlaceholderPage({
  title,
  section,
  description = 'This section is under development and will be available soon.',
  icon: Icon = Construction,
}) {
  return (
    <div className="grid grid-cols-1 px-4 pt-6">

      {/* ── Breadcrumb + title ──────────────────────────────────────────── */}
      <div className="col-span-full mb-6">
        <Breadcrumb className="mb-4">
          <BreadcrumbItem href="/">
            <div className="flex items-center gap-x-2">
              <Home className="h-4 w-4" />
              <span className="dark:text-white">Home</span>
            </div>
          </BreadcrumbItem>
          {section && <BreadcrumbItem>{section}</BreadcrumbItem>}
          <BreadcrumbItem>{title}</BreadcrumbItem>
        </Breadcrumb>

        <h1 className="text-xl font-semibold text-gray-900 dark:text-white dark:text-white">{title}</h1>
      </div>

      {/* ── Coming-soon card ────────────────────────────────────────────── */}
      <div className="col-span-full overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm dark:bg-gray-800">
        <div className="flex flex-col items-center px-6 py-20 text-center">

          {/* Icon */}
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30 dark:bg-primary-900/30">
            <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400 dark:text-primary-400" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-base font-semibold text-gray-900 dark:text-white dark:text-white">
            {title} — Coming Soon
          </h2>

          {/* Description */}
          <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400 dark:text-gray-400">
            {description}
          </p>

          {/* Status pill */}
          <span className="mt-5 inline-flex items-center gap-1.5 rounded bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" aria-hidden="true" />
            In development
          </span>

        </div>
      </div>

    </div>
  )
}
