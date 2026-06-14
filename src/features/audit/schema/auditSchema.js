import { z } from 'zod'

/**
 * Audit form validation schema
 * Validates wizard form data before submission
 */
export const auditSchema = z.object({
  // Step 1: Audit Info
  auditName: z.string().min(1, 'Audit name is required').max(200, 'Name must be under 200 characters'),
  wcagVersion: z.enum(['2.1', '2.2', 'WCAG 2.1', 'WCAG 2.2'], {
    required_error: 'WCAG version is required',
  }),
  conformanceLevel: z.enum(['A', 'AA', 'AAA'], {
    required_error: 'Conformance level is required',
  }),

  // Step 2: Project Details (all optional)
  projectName: z.string().max(200).optional().or(z.literal('')),
  clientName: z.string().max(200).optional().or(z.literal('')),
  websiteUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  description: z.string().max(2000).optional().or(z.literal('')),

  // Step 3: Pre-test answers (optional)
  preTestAnswers: z.record(z.any()).optional(),

  // Step 4: Scope
  scopeItems: z.array(
    z.object({
      type: z.enum(['page', 'component', 'flow']),
      name: z.string().min(1, 'Name is required'),
      url: z.string().optional(),
      selector: z.string().optional(),
      preTestId: z.string().optional(),
    })
  ).min(1, 'At least one scope item is required'),

  // Step 5: Review
  auditGoal: z.string().max(500).optional().or(z.literal('')),
})

/**
 * Type inference for TypeScript (when/if migrated)
 * @typedef {z.infer<typeof auditSchema>} AuditFormData
 */

/**
 * Validation helper for individual steps
 * Returns { success: boolean, errors: string[] }
 */
export function validateStep(stepNumber, data) {
  const stepFields = {
    1: ['auditName', 'wcagVersion', 'conformanceLevel'],
    2: ['projectName', 'clientName', 'websiteUrl', 'description'],
    3: ['preTestAnswers'],
    4: ['scopeItems'],
    5: ['auditGoal'],
  }

  const fields = stepFields[stepNumber]
  if (!fields) return { success: true, errors: [] }

  const stepSchema = auditSchema.pick(
    Object.fromEntries(fields.map(f => [f, true]))
  )

  const result = stepSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.errors.map(e => e.message),
    }
  }

  return { success: true, errors: [] }
}

/**
 * Validate entire form before submission
 */
export function validateAuditForm(data) {
  const result = auditSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.errors.map(e => ({
        path: e.path.join('.'),
        message: e.message,
      })),
    }
  }

  return { success: true, data: result.data }
}
