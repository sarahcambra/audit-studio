import { useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, Select, Alert } from 'flowbite-react'
import { X, FileText, CheckCircle, Layers, GitBranch, Info, AlertCircle } from 'lucide-react'
import { getApproxScCount, SUPERSESSION_MAP } from '@lib/scCount'
import { COMPONENT_SELECTORS } from '@lib/componentSelectors'
import { isValidUrl, normaliseUrl } from '@lib/urlUtils'
import { customTheme } from '@config/theme.js'
import { StatCard } from '@shared/ui'

export default function Step4Scope({ form, updateForm, showValidationErrors }) {
  const [duplicateError, setDuplicateError] = useState(null)

  const handleItemChange = (index, field, value) => {
    const newItems = [...form.scopeItems]
    newItems[index] = { ...newItems[index], [field]: value }

    // Check for duplicates when URL or componentIdentifier changes
    if (field === 'url' || field === 'componentIdentifier') {
      const item = newItems[index]
      const checkValue = field === 'url' ? value : item.componentIdentifier
      const checkType = item.type

      if (checkValue && isDuplicate(checkType, checkValue, index)) {
        setDuplicateError(`Duplicate ${checkType.toLowerCase()}: ${checkValue}`)
      } else {
        setDuplicateError(null)
      }
    }

    updateForm({ scopeItems: newItems })
  }

  /**
   * Check if a scope item already exists (deduplication)
   */
  const isDuplicate = (type, urlOrSelector, excludeIndex = -1) => {
    return form.scopeItems.some((item, index) => {
      if (index === excludeIndex) return false
      if (item.type !== type) return false
      if (type === 'Component') {
        return item.componentIdentifier === urlOrSelector
      }
      return item.url === urlOrSelector
    })
  }

  const handleAddItem = () => {
    updateForm({
      scopeItems: [...form.scopeItems, { type: 'Page', name: '', url: '', componentIdentifier: '' }]
    })
    setDuplicateError(null)
  }

  const handleRemoveItem = (index) => {
    if (form.scopeItems.length > 1) {
      updateForm({
        scopeItems: form.scopeItems.filter((_, i) => i !== index)
      })
    }
  }

  const handleUrlBlur = (index) => {
    const item = form.scopeItems[index]
    if (item.type !== 'Component' && item.url) {
      handleItemChange(index, 'url', normaliseUrl(item.url))
    }
  }

  const validateUrlFormat = (url) => isValidUrl(url)

  const pageCount = form.scopeItems.filter(i => i.type === 'Page').length
  const flowCount = form.scopeItems.filter(i => i.type === 'User Flow').length
  const componentCount = form.scopeItems.filter(i => i.type === 'Component').length

  const scResults = getApproxScCount(
    form.wcagVersion,
    form.conformanceLevel,
    form.preTestAnswers
  )

  const hasValidScope = form.scopeItems.some(
    item => item.name && (item.type === 'Component' ? item.componentIdentifier : item.url)
  )

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Define Audit Scope
        </h2>
        <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
          Add the pages, user flows, and components you want to audit.
        </p>
      </div>

      <div className="space-y-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard
            icon={FileText}
            label="Total Items"
            value={form.scopeItems.length}
            color="primary"
          />
          <StatCard
            icon={CheckCircle}
            label="Success Criteria"
            value={`${scResults.active}/${scResults.total}`}
            color="success"
          />
          <StatCard
            icon={Layers}
            label="Pages"
            value={pageCount}
            color="info"
          />
          <StatCard
            icon={GitBranch}
            label="Flows / Components"
            value={flowCount + componentCount}
            color="warning"
          />
        </div>

        {/* SC Count Details */}
        <Alert color="info" icon={Info} className="!bg-primary-50 dark:!bg-primary-900/20 !border-primary-200/60 dark:!border-primary-800/50">
          <div className="flex items-baseline gap-2 mb-2">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              <span className="text-xl font-semibold text-primary-700 dark:text-primary-300">{scResults.active}</span>
              {' '}of{' '}
              <span className="font-semibold text-primary-700 dark:text-primary-300">{scResults.total}</span>
              {' '}criteria in scope
            </p>
          </div>
          {scResults.skipped > 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold">{scResults.skipped}</span> skipped based on your answers
            </p>
          )}
          {scResults.superseded > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-semibold">{scResults.superseded}</span> covered by a stricter AAA criterion
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-0.5 ml-1">
                {scResults.supersededList.map((aaSC) => {
                  const aaaSC = Object.keys(SUPERSESSION_MAP).find(key => SUPERSESSION_MAP[key] === aaSC)
                  return (
                    <li key={aaSC}>
                      SC {aaSC} — covered by SC {aaaSC}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </Alert>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl  dark:border-gray-700">
          <Table theme={customTheme.table} className="w-full text-sm text-left">
            <TableHead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <TableHeadCell className="px-4 py-3 font-medium">Type</TableHeadCell>
              <TableHeadCell className="px-4 py-3 font-medium">Name</TableHeadCell>
              <TableHeadCell className="px-4 py-3 font-medium">URL / Selector</TableHeadCell>
              <TableHeadCell className="px-4 py-3 font-medium text-center">Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
              {form.scopeItems.map((item, index) => (
                <TableRow key={index} className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <TableCell className="px-4 py-2">
                    <Select
                      value={item.type}
                      onChange={(e) => handleItemChange(index, 'type', e.target.value)}
                      sizing="sm"
                      theme={customTheme.select}
                      className="text-xs"
                    >
                      <option value="Page">Page</option>
                      <option value="User Flow">User Flow</option>
                      <option value="Component">Component</option>
                    </Select>
                  </TableCell>

                  <TableCell className="px-4 py-2">
                    <TextInput
                      value={item.name}
                      onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      placeholder={
                        item.type === 'User Flow' ? 'e.g. registration flow' :
                        item.type === 'Component' ? 'e.g. Button' :
                        'e.g. Homepage'
                      }
                      aria-label={`Name for scope item ${index + 1}`}
                      aria-invalid={showValidationErrors && !item.name ? "true" : undefined}
                      sizing="sm"
                      theme={customTheme.textInput}
                      color={showValidationErrors && !item.name ? "failure" : undefined}
                      className="text-xs"
                    />
                  </TableCell>

                  <TableCell className="px-4 py-2">
                    {item.type === 'Component' ? (
                      <>
                        <TextInput
                          list={`component-selectors-${index}`}
                          value={item.componentIdentifier}
                          onChange={(e) => {
                            // If the user picked a datalist option, extract just the selector part
                            const picked = COMPONENT_SELECTORS.find(s => `${s.label} — ${s.selector}` === e.target.value)
                            handleItemChange(index, 'componentIdentifier', picked ? picked.selector : e.target.value)
                          }}
                          placeholder="Type or pick a component…"
                          autoComplete="off"
                          aria-label={`CSS selector for scope item ${index + 1}`}
                          aria-invalid={showValidationErrors && !item.componentIdentifier ? "true" : undefined}
                          sizing="sm"
                          theme={customTheme.textInput}
                          color={showValidationErrors && !item.componentIdentifier ? "failure" : undefined}
                          className="text-xs font-mono"
                        />
                        <datalist id={`component-selectors-${index}`}>
                          {COMPONENT_SELECTORS.map(({ label, selector }) => (
                            <option key={label} value={`${label} — ${selector}`} />
                          ))}
                        </datalist>
                      </>
                    ) : (
                      <TextInput
                        type="text"
                        value={item.url}
                        onChange={(e) => handleItemChange(index, 'url', e.target.value)}
                        onBlur={() => handleUrlBlur(index)}
                        placeholder="example.com"
                        aria-label={`URL for scope item ${index + 1}`}
                        aria-invalid={showValidationErrors && !item.url ? "true" : undefined}
                        sizing="sm"
                        theme={customTheme.textInput}
                        color={showValidationErrors && !item.url ? "failure" : undefined}
                        className="text-xs font-mono"
                      />
                    )}
                  </TableCell>

                  <TableCell className="px-4 py-2 text-center">
                    <div className="flex justify-center">
                      <Button
                        size="xs"
                        color="failure"
                        outline
                        disabled={form.scopeItems.length === 1}
                        onClick={() => handleRemoveItem(index)}
                        theme={customTheme.button}
                      >
                        <X className="h-3.5 w-3.5 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Add Button */}
        <Button
          onClick={handleAddItem}
          color="primary"
          outline
          theme={customTheme.button}
          className="w-fit"
        >
          + Add page / flow / component
        </Button>

      {/* Duplicate Error Message */}
      {duplicateError && (
        <Alert color="failure" icon={AlertCircle}>
          {duplicateError}
        </Alert>
      )}

      {/* Validation Message */}
      {!hasValidScope && (
        <Alert color={showValidationErrors ? 'failure' : 'warning'} icon={showValidationErrors ? AlertCircle : Info}>
          {showValidationErrors ? 'At least one scope item with name and URL/selector is required to proceed.' : 'At least one scope item is required with a name and URL/selector to proceed.'}
        </Alert>
      )}
      </div>
    </div>
  )
}
