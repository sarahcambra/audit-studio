import { Label, TextInput, Select, Textarea, Checkbox } from "flowbite-react"
import { customTheme } from "../../theme"

export default function Step1Info({ form, updateForm, showValidationErrors }) {
  return (
    <div className="space-y-6 max-w-3xl">

      {/* STEP HEADER */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Audit Details</h2>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          Name your audit and configure the WCAG standard you want to test against.
        </p>
      </div>

      {/* AUDIT NAME – FULL WIDTH */}
      <div>
        <Label htmlFor="auditName" className="mb-2 block text-sm font-medium">
          Audit Name
        </Label>
        <TextInput
          id="auditName"
          placeholder="Type audit name"
          value={form.auditName || ""}
          onChange={(e) => updateForm({ auditName: e.target.value })}
          color={showValidationErrors && !form.auditName?.trim() ? "failure" : undefined}
          sizing="md"
          theme={customTheme.textInput}
          required
        />
        {showValidationErrors && !form.auditName?.trim() && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-1">Audit name is required</p>
        )}
      </div>

      {/* WCAG + CONFORMANCE – 2 COLUMNS */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="wcagVersion" className="mb-2 block text-sm font-medium">
            WCAG Version
          </Label>
          <Select
            id="wcagVersion"
            value={form.wcagVersion || "2.2"}
            onChange={(e) => updateForm({ wcagVersion: e.target.value })}
            sizing="md"
            theme={customTheme.select}
          >
            <option value="2.1">WCAG 2.1</option>
            <option value="2.2">WCAG 2.2</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="conformanceLevel" className="mb-2 block text-sm font-medium">
            Conformance Level
          </Label>
          <Select
            id="conformanceLevel"
            value={form.conformanceLevel || "AA"}
            onChange={(e) => updateForm({ conformanceLevel: e.target.value })}
            sizing="md"
            theme={customTheme.select}
          >
            <option value="A">Level A</option>
            <option value="AA">Level AA (Recommended)</option>
            <option value="AAA">Level AAA</option>
          </Select>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div>
        <Label htmlFor="description" className="mb-2 block text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Write audit description here"
          rows={4}
          value={form.description || ""}
          onChange={(e) => updateForm({ description: e.target.value })}
          sizing="md"
          theme={customTheme.textarea}
        />
      </div>

      {/* ADDITIONAL STANDARDS */}
      <div>
        <Label className="mb-3 block text-sm font-medium">
          Additional Standards
        </Label>

        <div className="space-y-3">
          <label className="flex items-center">
            <Checkbox
              id="en301549"
              checked={form.en301549 || false}
              onChange={(e) => updateForm({ en301549: e.target.checked })}
              sizing="md"
              theme={customTheme.checkbox}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">EN 301 549</span>
          </label>

          <label className="flex items-center">
            <Checkbox
              id="digg"
              checked={form.digg || false}
              onChange={(e) => updateForm({ digg: e.target.checked })}
              sizing="md"
              theme={customTheme.checkbox}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">DIGG (Sweden)</span>
          </label>
        </div>
      </div>

      {/* SCAN OPTIONS */}
      <div>
        <Label className="mb-3 block text-sm font-medium">
          Scan Options
        </Label>

        <div className="space-y-3">
          <label className="flex items-center">
            <Checkbox
              id="themeContrast"
              checked={form.themeContrast || false}
              onChange={(e) => updateForm({ themeContrast: e.target.checked })}
              sizing="md"
              theme={customTheme.checkbox}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Evaluate theme contrast</span>
          </label>

          <label className="flex items-center">
            <Checkbox
              id="keyboardNav"
              checked={form.keyboardNav || false}
              onChange={(e) => updateForm({ keyboardNav: e.target.checked })}
              sizing="md"
              theme={customTheme.checkbox}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Include keyboard navigation tests</span>
          </label>

          <label className="flex items-center">
            <Checkbox
              id="screenReader"
              checked={form.screenReader || false}
              onChange={(e) => updateForm({ screenReader: e.target.checked })}
              sizing="md"
              theme={customTheme.checkbox}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Screen reader compatibility</span>
          </label>
        </div>
      </div>
    </div>
  )
}
