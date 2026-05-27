import { Label, TextInput, Checkbox, Select, Card } from "flowbite-react";

export default function AuditDetailsFields({ values, onChange, auditNameError }) {
  return (
    <div className="space-y-6">
      {/* Audit Configuration Card */}
      <Card>
        <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">Audit Configuration</h3>

        <div className="space-y-6">
          {/* Audit Name */}
          <div>
            <Label htmlFor="auditName" className="mb-2 block text-sm font-medium">
              Audit Name
            </Label>
            <TextInput
              id="auditName"
              placeholder='e.g. "Website Accessibility Review – Q2"'
              maxLength={70}
              value={values.name ?? ""}
              onChange={(e) => onChange("name", e.target.value)}
              color={auditNameError ? "failure" : undefined}
              required
            />
            {auditNameError && (
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">Audit name is mandatory</p>
            )}
            <p className="mt-1 text-right text-xs font-normal text-gray-500 dark:text-gray-400">
              {(values.name ?? "").length}/70
            </p>
          </div>

          {/* WCAG Version */}
          <div>
            <Label htmlFor="wcag-version" className="mb-2 block text-sm font-medium">
              WCAG Version
            </Label>
            <Select
              id="wcag-version"
              value={values.wcagVersion ?? "2.2"}
              onChange={(e) => onChange("wcagVersion", e.target.value)}
            >
              <option value="2.1">WCAG 2.1</option>
              <option value="2.2">WCAG 2.2</option>
            </Select>
          </div>

          {/* Conformance Level - Radio Buttons */}
          <div>
            <Label className="mb-3 block text-sm font-medium">Conformance Level</Label>
            <div className="space-y-3">
              {/* Level A */}
              <label className="flex cursor-pointer items-start gap-3 rounded-lg  p-4 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <input
                  type="radio"
                  name="conformanceLevel"
                  value="Level A"
                  checked={values.conformanceLevel === "Level A"}
                  onChange={(e) => onChange("conformanceLevel", e.target.value)}
                  className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <div className="flex-1">
                  <span className="block text-sm font-medium text-gray-900 dark:text-gray-300">Level A</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Use for initial baseline audits or phased remediation</p>
                </div>
              </label>

              {/* Level AA - Recommended */}
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-primary-500 bg-primary-50/50 p-4 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:hover:bg-gray-800">
                <input
                  type="radio"
                  name="conformanceLevel"
                  value="Level AA"
                  checked={values.conformanceLevel === "Level AA"}
                  onChange={(e) => onChange("conformanceLevel", e.target.value)}
                  className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-300">Level AA</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">Recommended</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Required by most accessibility laws (EN 301 549, DOS-lagen, ADA)</p>
                </div>
              </label>

              {/* Level AAA */}
              <label className="flex cursor-pointer items-start gap-3 rounded-lg  p-4 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <input
                  type="radio"
                  name="conformanceLevel"
                  value="Level AAA"
                  checked={values.conformanceLevel === "Level AAA"}
                  onChange={(e) => onChange("conformanceLevel", e.target.value)}
                  className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <div className="flex-1">
                  <span className="block text-sm font-medium text-gray-900 dark:text-gray-300">Level AAA</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Voluntary — not achievable for all content types</p>
                </div>
              </label>
            </div>
          </div>

          {/* Additional Standards */}
          <div>
            <Label className="mb-3 block text-sm font-medium">Additional Standards</Label>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-start gap-3 rounded-lg  p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <Checkbox
                  id="digg"
                  checked={values.standards?.digg ?? false}
                  onChange={(e) => onChange("standards", { ...values.standards, digg: e.target.checked })}
                  className="mt-1"
                />
                <div className="flex-1">
                  <span className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                    DIGG (Sweden)
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Scan Options Card */}
      <Card>
        <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">Scan Options</h3>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-start gap-3 rounded-lg  p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
            <Checkbox
              id="theme-contrast"
              checked={values.themeContrast ?? false}
              onChange={(e) => onChange("themeContrast", e.target.checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <span className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                Evaluate theme contrast
              </span>
            </div>
          </label>
          <label className="flex cursor-pointer items-start gap-3 rounded-lg  p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
            <Checkbox
              id="keyboard-nav"
              checked={values.keyboardNav ?? false}
              onChange={(e) => onChange("keyboardNav", e.target.checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <span className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                Include keyboard navigation tests
              </span>
            </div>
          </label>
          <label className="flex cursor-pointer items-start gap-3 rounded-lg  p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
            <Checkbox
              id="screen-reader"
              checked={values.screenReader ?? false}
              onChange={(e) => onChange("screenReader", e.target.checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <span className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                Screen reader compatibility
              </span>
            </div>
          </label>
        </div>
      </Card>
    </div>
  );
}
