import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'

// @ts-ignore - House icon deprecation warning from phosphor library
import { House } from "@phosphor-icons/react";

import NewAuditWizard from '../components/NewAuditWizard'

export default function Homepage({ showWizard = false, onCloseWizard = () => {} }) {
  return (
    <div className="space-y-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900">
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
          <NewAuditWizard onClose={onCloseWizard} />
        </>
      )}
    </div>
  )
}
