import { Button } from 'flowbite-react'
import AuditDetailsFields from '../wizard/AuditDetailsFields'

/**
 * Profile grid card — mirrors Audit Details (step 1) content with Flowbite radios + Next.
 * @param {{ auditName?: string; wcagVersion?: string; conformanceLevel?: string }} form
 */
export default function ProfilePreferencesForm({ form, updateForm, onNext }) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6 xl:mb-0">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault()
          onNext?.()
        }}
      >
        <div className="border-b border-gray-200 pb-4 dark:border-gray-700 sm:pb-6">
          <AuditDetailsFields form={form} updateForm={updateForm} radioIdPrefix="profile-prefs" />
        </div>
        <Button
          type="button"
          color="blue"
          onClick={() => onNext?.()}
        >
          Next
        </Button>
      </form>
    </div>
  )
}
