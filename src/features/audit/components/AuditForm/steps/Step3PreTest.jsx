import { Check, X, HelpCircle, AlertCircle } from "lucide-react"
import { Button, Alert } from "flowbite-react"
import { Badge } from '@shared/ui'
import { getVisibleQuestions, PRETEST_SC_MAP, getAllSCsForTarget } from "@lib/scCount"
import { customTheme } from '@config/theme.js'



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

/** Answer button color configuration */
const ANSWER_COLORS = {
  yes: { idle: 'gray', selected: 'success' },
  no: { idle: 'gray', selected: 'gray' },
  unsure: { idle: 'gray', selected: 'warning' },
}

function AnswerButton({ value, label, icon: Icon, currentAnswer, showError, onClick }) {
  const isSelected = currentAnswer === value
  const color = showError ? 'failure' : isSelected ? ANSWER_COLORS[value].selected : ANSWER_COLORS[value].idle

  return (
    <Button
      type="button"
      size="sm"
      color={color}
      outline={!isSelected}
      onClick={() => onClick(value)}
      aria-pressed={isSelected}
      theme={customTheme.button}
      className="gap-1.5"
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {label}
    </Button>
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
    <div className="space-y-5 max-w-3xl">


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
        <Alert color="failure" icon={AlertCircle}>
          All {visibleQuestions.length} questions must be answered to proceed
        </Alert>
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

          const questionCardClasses = answer
            ? "border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
            : showError
              ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/10"
              : "border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50"

          return (
            <div
              key={answerKey}
              className={`rounded-xl border p-4 transition-colors ${questionCardClasses}`}
            >
              {/* Question row */}
              <div className="mb-3 flex items-start gap-3">
                <Badge color="blue" size="sm">
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
          <Badge color="green" size="sm">
            All {visibleQuestions.length} answered
          </Badge>
        ) : (
          <Badge color="yellow" size="sm">
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
