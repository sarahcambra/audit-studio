import { Check, X, HelpCircle } from "lucide-react"
import { Badge } from "flowbite-react"
import { getVisibleQuestions, PRETEST_SC_MAP, getAllSCsForTarget } from "../../lib/scCount"
import { twMerge } from "tailwind-merge"
import { customTheme } from '../../theme'



const QUESTIONS = [
  {
    id: 1,
    text: "Does the site have auto-playing content, or content that updates automatically?",
    help: "e.g. carousels, news tickers, live chat feeds, animations without user action",
    wcagNote: null,
  },
  {
    id: 2,
    text: "Is there prerecorded video or audio content?",
    help: "e.g. product videos, tutorials, podcasts, background music. Does not include live streams (covered in Q3).",
    wcagNote: null,
  },
  {
    id: 3,
    text: "Is there any live audio or video?",
    help: "Real-time broadcasts only — webinars, live events, live radio. Does NOT include embedded YouTube videos or podcast players — those are covered in question 2.",
    wcagNote: null,
  },
  {
    id: 4,
    text: "Does the site have forms?",
    help: "Any user input — search boxes, contact forms, checkout, sign-up, filters. Even a single field counts.",
    wcagNote: null,
  },
  {
    id: 5,
    text: "Are there any password-based or cognitive authentication flows?",
    help: "e.g. login with password, CAPTCHA, security questions, PIN entry. Does NOT include magic links, SSO, or biometric login.",
    wcagNote: "WCAG 2.2 only — has no effect on 2.1 audits",
  },
  {
    id: 6,
    text: "Does the site have timed interactions or session timeouts?",
    help: "e.g. forms that expire, booking countdown timers, quiz time limits, auto-logout after inactivity.",
    wcagNote: null,
  },
  {
    id: 7,
    text: "Does the site use drag-and-drop interactions?",
    help: "e.g. Kanban boards, sortable lists, file upload via drag, resizable panels, drawing tools.",
    wcagNote: "WCAG 2.2 only — has no effect on 2.1 audits",
  },
]

/** Button style map — idle and selected states per answer value */
const ANSWER_STYLES = {
  yes: {
    idle:     "border border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-green-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-green-600 dark:hover:bg-green-900/20 dark:hover:text-green-400",
    selected: "border border-green-400 bg-green-50 text-green-700 dark:border-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  no: {
    idle:     "border border-gray-200 bg-white text-gray-600 hover:border-red-300 hover:bg-red-50 hover:text-red-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400",
    selected: "border border-red-400 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
  unsure: {
    idle:     "border border-gray-200 bg-white text-gray-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-amber-500 dark:hover:bg-amber-900/20 dark:hover:text-amber-400",
    selected: "border border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-500 dark:bg-amber-900/30 dark:text-amber-400",
  },
}

function AnswerButton({ value, label, icon: Icon, currentAnswer, showError, onClick }) {
  const isSelected = currentAnswer === value
  const styles = ANSWER_STYLES[value]
  const errorIdle = "border border-red-300 bg-white text-red-400 hover:border-red-400 hover:bg-red-50 hover:text-red-600 dark:border-red-700 dark:bg-gray-800 dark:text-red-500 dark:hover:bg-red-900/20"

  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      aria-pressed={isSelected}
      className={twMerge(
        "flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-150",
        isSelected ? styles.selected : showError ? errorIdle : styles.idle
      )}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {label}
    </button>
  )
}

function PreTestForm({ values, onChange, showValidationErrors, wcagVersion, conformanceLevel }) {
  const handleAnswer = (questionId, answer) => {
    const key = `q${questionId}`
    // Clicking the already-selected answer clears it (toggle off)
    const current = values.preTestAnswers?.[key]
    onChange('preTestAnswers', {
      ...values.preTestAnswers,
      [key]: current === answer ? undefined : answer,
    })
  }

  const visibleQIds = getVisibleQuestions(wcagVersion, conformanceLevel)
  const applicableSCs = getAllSCsForTarget(wcagVersion, conformanceLevel)

  const visibleQuestions = QUESTIONS
    .filter(q => visibleQIds.includes(q.id))
    .map((q, idx) => ({ ...q, displayNumber: idx + 1 }))

  const answeredCount = visibleQuestions.filter(q => {
    const answer = values.preTestAnswers?.[`q${q.id}`]
    return answer === 'yes' || answer === 'no' || answer === 'unsure'
  }).length

  const isIncomplete = showValidationErrors && answeredCount < visibleQuestions.length

  return (
    <div className="space-y-5">

      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          Pre-test Questionnaire
        </h2>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          Help us narrow the scope to relevant success criteria
        </p>
      </div>

      {/* Validation banner */}
      {isIncomplete && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-700 dark:text-red-300">
            All {visibleQuestions.length} questions must be answered to proceed
          </p>
        </div>
      )}

      {/* Questions */}
      <div className="space-y-3">
        {visibleQuestions.map((question) => {
          const answerKey = `q${question.id}`
          const answer = values.preTestAnswers?.[answerKey]
          const isNo = answer === 'no'
          const scList = PRETEST_SC_MAP[question.id]?.[wcagVersion] ?? []
          const removedSCs = scList.filter(sc => applicableSCs.has(sc))

          const isUnanswered = !answer
          const showError = showValidationErrors && isUnanswered

          return (
            <div
              key={answerKey}
              className={twMerge(
                "rounded-xl border p-4 transition-colors",
                answer
                  ? "border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
                  : showError
                    ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/10"
                    : "border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-750"
              )}
            >
              {/* Question row */}
              <div className="mb-3 flex items-start gap-3">
                <Badge theme={customTheme.badge} color="primary" size="sm" className="rounded-full border">
                  {question.displayNumber}
                </Badge>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white leading-snug">
                    {question.text}
                  </p>
                  {question.help && (
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {question.help}
                    </p>
                  )}
                  {question.wcagNote && (
                    <p className="mt-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                      {question.wcagNote}
                    </p>
                  )}
                </div>
              </div>

              {/* Answer buttons */}
              <div className="ml-9 flex flex-wrap items-center gap-2">
                <AnswerButton
                  value="yes"
                  label="Yes"
                  icon={Check}
                  currentAnswer={answer}
                  showError={showError}
                  onClick={(v) => handleAnswer(question.id, v)}
                />
                <AnswerButton
                  value="no"
                  label="No"
                  icon={X}
                  currentAnswer={answer}
                  showError={showError}
                  onClick={(v) => handleAnswer(question.id, v)}
                />
                <AnswerButton
                  value="unsure"
                  label="Unsure"
                  icon={HelpCircle}
                  currentAnswer={answer}
                  showError={showError}
                  onClick={(v) => handleAnswer(question.id, v)}
                />
                {showError && (
                  <p className="text-xs font-medium text-red-600 dark:text-red-400">
                    Required
                  </p>
                )}
              </div>

              {/* SC removal notice */}
              {isNo && removedSCs.length > 0 && (
                <div className="mt-3 ml-9 rounded-lg border border-red-200 bg-red-50 p-2.5 dark:border-red-800 dark:bg-red-900/20">
                  <p className="text-xs font-medium text-red-800 dark:text-red-300">
                    Removes from scope:{" "}
                    <span className="font-mono">{removedSCs.join(', ')}</span>
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Progress badge */}
      <div>
        {answeredCount === visibleQuestions.length ? (
          <Badge theme={customTheme.badge} color="success" size="sm" className="rounded-full border">
            All {visibleQuestions.length} answered
          </Badge>
        ) : (
          <Badge theme={customTheme.badge} color="warning" size="sm" className="rounded-full border">
            {answeredCount} of {visibleQuestions.length} answered
          </Badge>
        )}
      </div>
    </div>
  )
}

export default function Step3PreTest({ form, updateForm, showValidationErrors }) {
  const handleFieldChange = (field, value) => updateForm({ [field]: value })

  return (
    <PreTestForm
      values={{ preTestAnswers: form.preTestAnswers || {} }}
      onChange={handleFieldChange}
      showValidationErrors={showValidationErrors}
      wcagVersion={form.wcagVersion}
      conformanceLevel={form.conformanceLevel}
    />
  )
}
