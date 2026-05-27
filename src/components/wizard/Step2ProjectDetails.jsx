import { useState, useEffect } from "react";
import { Label, TextInput } from "flowbite-react";
import { isValidUrl, normaliseUrl } from "../../lib/urlUtils";
import { customTheme } from "../../theme";

function ProjectDetailsForm({ values, onChange, showValidationErrors }) {
  const [touched, setTouched] = useState({})

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const showError = (field) => touched[field] || showValidationErrors
  const isProjectNameInvalid = showError('projectName') && !values.projectName?.trim()
  const isUrlInvalid = showError('websiteUrl') && !isValidUrl(values.websiteUrl)
  const isAuditorNameInvalid = showError('auditorName') && !values.auditorName?.trim()

  return (
    <div className="space-y-6 max-w-3xl">


      {/* STEP HEADER */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Project Details</h2>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          Tell us about the project, website, and who is leading the audit.
        </p>
      </div>

      {/* PROJECT NAME – FULL WIDTH */}
      <div>
        <Label htmlFor="projectName" className="mb-2 block text-sm font-medium">
          Project Name
        </Label>
        <TextInput
          id="projectName"
          placeholder="e.g. Homepage Redesign"
          value={values.projectName ?? ""}
          onChange={(e) => onChange("projectName", e.target.value)}
          onBlur={() => handleBlur('projectName')}
          color={isProjectNameInvalid ? "failure" : undefined}
          theme={customTheme.textInput}
          required
        />
        {isProjectNameInvalid && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-1">Project name is required</p>
        )}
      </div>

      {/* CLIENT NAME + WEBSITE URL – 2 COLUMNS */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="clientName" className="mb-2 block text-sm font-medium">
            Client Name
          </Label>
          <TextInput
            id="clientName"
            placeholder="e.g. Acme Corp"
            value={values.clientName ?? ""}
            onChange={(e) => onChange("clientName", e.target.value)}
            theme={customTheme.textInput}
          />
        </div>

        <div>
          <Label htmlFor="websiteUrl" className="mb-2 block text-sm font-medium">
            Website URL
          </Label>
          <TextInput
            id="websiteUrl"
            type="text"
            placeholder="example.com"
            value={values.websiteUrl ?? ""}
            onChange={(e) => onChange("websiteUrl", e.target.value)}
            onBlur={() => {
              handleBlur('websiteUrl')
              if (values.websiteUrl) onChange("websiteUrl", normaliseUrl(values.websiteUrl))
            }}
            color={isUrlInvalid ? "failure" : undefined}
            theme={customTheme.textInput}
          />
          {isUrlInvalid && (
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">Enter a valid URL (e.g. example.com)</p>
          )}
        </div>
      </div>

      {/* START DATE + TARGET END DATE – 2 COLUMNS */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="startDate" className="mb-2 block text-sm font-medium">
            Start Date
          </Label>
          <TextInput
            id="startDate"
            type="date"
            value={values.startDate ?? ""}
            onChange={(e) => onChange("startDate", e.target.value)}
            theme={customTheme.textInput}
          />
        </div>

        <div>
          <Label htmlFor="targetEndDate" className="mb-2 block text-sm font-medium">
            Target End Date
          </Label>
          <TextInput
            id="targetEndDate"
            type="date"
            value={values.targetEndDate ?? ""}
            onChange={(e) => onChange("targetEndDate", e.target.value)}
            theme={customTheme.textInput}
          />
        </div>
      </div>

      {/* AUDITOR NAME + EMAIL – 2 COLUMNS */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="auditorName" className="mb-2 block text-sm font-medium">
            Auditor Name
          </Label>
          <TextInput
            id="auditorName"
            placeholder="Full name"
            value={values.auditorName ?? ""}
            onChange={(e) => onChange("auditorName", e.target.value)}
            onBlur={() => handleBlur('auditorName')}
            color={isAuditorNameInvalid ? "failure" : undefined}
            theme={customTheme.textInput}
          />
          {isAuditorNameInvalid && (
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">Auditor name is required</p>
          )}
        </div>

        <div>
          <Label htmlFor="auditorEmail" className="mb-2 block text-sm font-medium">
            Email
          </Label>
          <TextInput
            id="auditorEmail"
            type="email"
            placeholder="name@example.com"
            value={values.auditorEmail ?? ""}
            onChange={(e) => onChange("auditorEmail", e.target.value)}
            theme={customTheme.textInput}
          />
        </div>
      </div>

      {/* ORGANISATION – FULL WIDTH */}
      <div>
        <Label htmlFor="org" className="mb-2 block text-sm font-medium">
          Organisation
        </Label>
        <TextInput
          id="org"
          placeholder="Company or agency name"
          value={values.org ?? ""}
          onChange={(e) => onChange("org", e.target.value)}
          theme={customTheme.textInput}
        />
      </div>
    </div>
  )
}

export default function Step2ProjectDetails({ form, updateForm, showValidationErrors }) {
  useEffect(() => {
    if (!form.startDate) {
      const today = new Date().toISOString().split('T')[0]
      updateForm({ startDate: today })
    }
  }, [])

  // URL pre-fill is now handled by the wizard's handleNext when leaving Step 2,
  // so we don't need a useEffect here that can race with onBlur normalisation.

  const handleFieldChange = (field, value) => {
    updateForm({ [field]: value })
  }

  return (
    <ProjectDetailsForm
      values={{
        projectName: form.projectName,
        clientName: form.clientName,
        websiteUrl: form.websiteUrl,
        startDate: form.startDate,
        targetEndDate: form.targetEndDate,
        auditorName: form.auditorName,
        auditorEmail: form.auditorEmail,
        org: form.org,
      }}
      onChange={handleFieldChange}
      showValidationErrors={showValidationErrors}
    />
  )
}
