import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'

// @ts-ignore - House icon deprecation warning from phosphor library
import { House } from "@phosphor-icons/react";

import NewAuditWizard from '../components/NewAuditWizard'

export default function Homepage({ sidebarExpanded = true, showWizard = false, onCloseWizard = () => {} }) {
  return (
    <div className="min-w-0 flex-1 bg-gray-50 dark:bg-gray-900 antialiased">
      {/* Dynamic margin: ml-80 when sidebar expanded (w-16 icon + w-64 drawer), ml-16 when collapsed (w-16 icon only) */}
      <main
        className={`min-w-0 overflow-x-hidden bg-gray-50 dark:bg-gray-900 p-4 min-h-[50vh] space-y-4 transition-[margin] duration-300 ease-out ${sidebarExpanded ? 'sm:ml-80' : 'sm:ml-16'}`}
      >
<div className="flex flex-col items-start gap-6 px-6 py-4">
  {showWizard && (
    <Breadcrumb>
      <BreadcrumbItem href="/" icon={() => <House weight="bold" size={16} className="mr-2 text-gray-500" />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem>New Audit</BreadcrumbItem>
    </Breadcrumb>
  )}
  {showWizard && (
    <>
      <h1>New Audit</h1>
      <div className="w-full">
        <NewAuditWizard onClose={onCloseWizard} />
      </div>
    </>
  )}
</div>
      </main>
    </div>
  )
}
