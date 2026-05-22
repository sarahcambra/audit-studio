import { useState } from 'react'
import { Badge, Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import { X } from 'lucide-react'
import { getApproxScCount, SUPERSESSION_MAP } from '../../lib/scCount'
import { customTheme } from '../../theme' 

export default function Step4Scope({ form, updateForm, showValidationErrors }) {
  const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  const selectClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

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
    if (item.type !== 'Component' && item.url && !item.url.match(/^https?:\/\//)) {
      handleItemChange(index, 'url', `https://${item.url}`)
    }
  }

  const validateUrlFormat = (url) => {
    if (!url) return false
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

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
    <div className="space-y-6">
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
          <div className="p-3 bg-brand-softer dark:bg-brand-soft border border-brand-subtle dark:border-brand-soft rounded-xl">
            <p className="text-xs text-gray-600 dark:text-gray-400">Total Items</p>
            <p className="text-lg font-semibold tabular-nums text-fg-brand-strong dark:text-fg-brand">{form.scopeItems.length}</p>
          </div>
          <div className="p-3 bg-success-soft dark:bg-success-soft border border-success-subtle dark:border-success-soft rounded-xl">
            <p className="text-xs text-gray-600 dark:text-gray-400">Success Criteria</p>
            <p className="text-lg font-semibold tabular-nums text-fg-success-strong dark:text-fg-success">
              {scResults.active}/{scResults.total}
            </p>
          </div>
          <div className="p-3 bg-brand-softer dark:bg-brand-soft border border-brand-subtle dark:border-brand-soft rounded-xl">
            <p className="text-xs text-gray-600 dark:text-gray-400">Pages</p>
            <p className="text-lg font-semibold tabular-nums text-fg-brand-strong dark:text-fg-brand">{pageCount}</p>
          </div>
          <div className="p-3 bg-warning-soft dark:bg-warning-soft border border-warning-subtle dark:border-warning-soft rounded-xl">
            <p className="text-xs text-gray-600 dark:text-gray-400">Flows / Components</p>
            <p className="text-lg font-semibold tabular-nums text-fg-warning dark:text-fg-warning">{flowCount + componentCount}</p>
          </div>
        </div>

        {/* SC Count Details */}
        <div className="p-4 bg-brand-softer dark:bg-brand-soft border border-brand-subtle dark:border-brand-soft rounded-xl">
          <div className="flex items-baseline gap-2 mb-2">
            <p className="text-sm font-medium text-heading">
              <span className="text-xl font-semibold">{scResults.active}</span>
              {' '}of{' '}
              <span className="font-semibold">{scResults.total}</span>
              {' '}criteria in scope
            </p>
          </div>
          {scResults.skipped > 0 && (
            <p className="text-sm text-body">
              <span className="font-semibold">{scResults.skipped}</span> skipped based on your answers
            </p>
          )}
          {scResults.superseded > 0 && (
            <div className="mt-2 pt-2 border-t border-default">
              <p className="text-sm text-body mb-1">
                <span className="font-semibold">{scResults.superseded}</span> covered by a stricter AAA criterion
              </p>
              <ul className="text-xs text-body-subtle space-y-0.5 ml-1">
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
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table hoverable>
            <TableHead>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>URL / Selector</TableHeadCell>
              <TableHeadCell className="text-center">Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {form.scopeItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <select
                      value={item.type}
                      onChange={(e) => handleItemChange(index, 'type', e.target.value)}
                      className={selectClass + ' text-xs h-9'}
                    >
                      <option value="Page">Page</option>
                      <option value="User Flow">User Flow</option>
                      <option value="Component">Component</option>
                    </select>
                  </TableCell>

                  <TableCell>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      placeholder={
                        item.type === 'User Flow' ? 'e.g. registration flow' :
                        item.type === 'Component' ? 'e.g. Button' :
                        'e.g. Homepage'
                      }
                      className={inputClass + ' text-xs h-9' + (showValidationErrors && !item.name ? ' border-red-500 bg-red-50 dark:bg-red-900/20' : '')}
                    />
                  </TableCell>

                  <TableCell>
                    <input
                      type="text"
                      value={item.type === 'Component' ? item.componentIdentifier : item.url}
                      onChange={(e) => {
                        if (item.type === 'Component') {
                          handleItemChange(index, 'componentIdentifier', e.target.value)
                        } else {
                          handleItemChange(index, 'url', e.target.value)
                        }
                      }}
                      onBlur={() => item.type !== 'Component' && handleUrlBlur(index)}
                      placeholder={item.type === 'Component' ? '.button, #header' : 'example.com'}
                      className={inputClass + ' text-xs h-9 font-mono' + (showValidationErrors && !(item.type === 'Component' ? item.componentIdentifier : item.url) ? ' border-red-500 bg-red-50 dark:bg-red-900/20' : '')}
                    />
                  </TableCell>

                  <TableCell className="text-center">
                  <div className="flex justify-center">
  <Badge
    theme={customTheme.badge}
    color="danger"
    size="xs"
    className={`rounded-full border transition-opacity ${
      form.scopeItems.length === 1 ? "opacity-30 pointer-events-none" : "cursor-pointer"
    }`}
    onDismiss={form.scopeItems.length > 1 ? () => handleRemoveItem(index) : undefined}
  >
    Remove
  </Badge>
</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Add Button */}
        <Button onClick={handleAddItem} color="light">
          + Add page / flow / component
        </Button>

      {/* Duplicate Error Message */}
      {duplicateError && (
        <div className="p-3 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
          <p className="text-sm font-medium text-red-700 dark:text-red-300">
            ✕ {duplicateError}
          </p>
        </div>
      )}

      {/* Validation Message */}
      {!hasValidScope && (
        <div className={`p-3 rounded-xl border ${showValidationErrors ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' : 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800'}`}>
          <p className={`text-sm font-medium ${showValidationErrors ? 'text-red-700 dark:text-red-300' : 'text-yellow-800'}`}>
            {showValidationErrors ? '✕ At least one scope item with name and URL/selector is required to proceed.' : '⚠ At least one scope item is required with a name and URL/selector to proceed.'}
          </p>
        </div>
      )}
      </div>
    </div>
  )
}
