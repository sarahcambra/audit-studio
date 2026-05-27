import { createTheme } from 'flowbite-react'

export const customTheme = createTheme({
  // ============================================================================
  // BUTTON — flat structure for Flowbite React 0.12.x
  // Shape: { base, disabled, fullSized, grouped, pill, size, color, outlineColor }
  // The provider deep-merges these into the base button theme via twMerge.
  // ============================================================================
  button: {
    // Base layout — keeps Flowbite's focus:outline-none focus:ring-4 via merge
    base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 font-[family-name:var(--fontFamily-button,\'Atkinson_Hyperlegible\',sans-serif)] tracking-wide focus:outline-none focus:ring-4',

    // Disabled state (applied when the `disabled` prop is true)
    disabled: 'pointer-events-none opacity-50',

    // Utility modifiers
    fullSized: 'w-full',
    pill: 'rounded-full',
    grouped: 'rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2',

    size: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base',
      xl: 'px-6 py-3 text-base',
    },

    // Solid fill colors — used when `outline` prop is false/absent
    color: {
      // Primary: solid purple (maps to --color-primary-* in theme.css)
      default: 'bg-primary-700 text-white border-2 border-transparent hover:bg-primary-800 active:bg-primary-900 focus:ring-primary-300 shadow-[0_4px_6px_-1px_rgba(37,1,90,0.06),0_4px_8px_-1px_rgba(37,1,90,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(37,1,90,0.08),0_6px_12px_-1px_rgba(37,1,90,0.12)] active:shadow-[0_2px_4px_-1px_rgba(37,1,90,0.08),0_2px_6px_-1px_rgba(37,1,90,0.12)]',
      primary: 'bg-primary-700 text-white border-2 border-transparent hover:bg-primary-800 active:bg-primary-900 focus:ring-primary-300 shadow-[0_4px_6px_-1px_rgba(37,1,90,0.06),0_4px_8px_-1px_rgba(37,1,90,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(37,1,90,0.08),0_6px_12px_-1px_rgba(37,1,90,0.12)] active:shadow-[0_2px_4px_-1px_rgba(37,1,90,0.08),0_2px_6px_-1px_rgba(37,1,90,0.12)]',

      // Secondary: solid slate (maps to --color-secondary-* in theme.css)
      secondary: 'bg-secondary-700 text-white border-2 border-transparent hover:bg-secondary-800 active:bg-secondary-900 focus:ring-secondary-300 shadow-[0_4px_6px_-1px_rgba(47,48,58,0.1),0_4px_8px_-1px_rgba(47,48,58,0.15)] hover:shadow-[0_6px_8px_-1px_rgba(47,48,58,0.12),0_6px_12px_-1px_rgba(47,48,58,0.18)] active:shadow-[0_2px_4px_-1px_rgba(47,48,58,0.12),0_2px_6px_-1px_rgba(47,48,58,0.18)]',

      // Ghost: transparent bg, primary text, no shadow
      ghost: 'bg-transparent text-primary-700 border border-transparent hover:bg-primary-50 hover:text-primary-800 active:bg-primary-100 active:text-primary-900 focus:ring-primary-200 shadow-none',

      // Feedback colors — solid (maps to success/warning/danger/info scales in theme.css)
      success: 'bg-success-700 text-white border-2 border-transparent hover:bg-success-800 active:bg-success-900 focus:ring-success-300 shadow-[0_4px_6px_-1px_rgba(21,128,61,0.1),0_4px_8px_-1px_rgba(21,128,61,0.15)] hover:shadow-[0_6px_8px_-1px_rgba(21,128,61,0.12),0_6px_12px_-1px_rgba(21,128,61,0.18)] active:shadow-[0_2px_4px_-1px_rgba(21,128,61,0.12),0_2px_6px_-1px_rgba(21,128,61,0.18)]',
      warning: 'bg-warning-700 text-white border-2 border-transparent hover:bg-warning-800 active:bg-warning-900 focus:ring-warning-300 shadow-[0_4px_6px_-1px_rgba(180,83,9,0.1),0_4px_8px_-1px_rgba(180,83,9,0.15)] hover:shadow-[0_6px_8px_-1px_rgba(180,83,9,0.12),0_6px_12px_-1px_rgba(180,83,9,0.18)] active:shadow-[0_2px_4px_-1px_rgba(180,83,9,0.12),0_2px_6px_-1px_rgba(180,83,9,0.18)]',
      danger: 'bg-danger-700 text-white border-2 border-transparent hover:bg-danger-800 active:bg-danger-900 focus:ring-danger-300 shadow-[0_4px_6px_-1px_rgba(190,18,60,0.1),0_4px_8px_-1px_rgba(190,18,60,0.15)] hover:shadow-[0_6px_8px_-1px_rgba(190,18,60,0.12),0_6px_12px_-1px_rgba(190,18,60,0.18)] active:shadow-[0_2px_4px_-1px_rgba(190,18,60,0.12),0_2px_6px_-1px_rgba(190,18,60,0.18)]',
      info: 'bg-info-700 text-white border-2 border-transparent hover:bg-info-800 active:bg-info-900 focus:ring-info-300 shadow-[0_4px_6px_-1px_rgba(29,78,216,0.1),0_4px_8px_-1px_rgba(29,78,216,0.15)] hover:shadow-[0_6px_8px_-1px_rgba(29,78,216,0.12),0_6px_12px_-1px_rgba(29,78,216,0.18)] active:shadow-[0_2px_4px_-1px_rgba(29,78,216,0.12),0_2px_6px_-1px_rgba(29,78,216,0.18)]',
    },

    // Outline/border-only colors — used when `outline` prop is true
    outlineColor: {
      default: 'bg-primary-50 text-primary-700 border-2 border-primary-700 hover:bg-primary-100 hover:text-primary-800 hover:border-primary-800 active:bg-primary-200 active:text-primary-900 active:border-primary-900 focus:ring-primary-300 shadow-[0_4px_6px_-1px_rgba(37,1,90,0.06),0_4px_8px_-1px_rgba(37,1,90,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(37,1,90,0.08),0_6px_12px_-1px_rgba(37,1,90,0.12)] active:shadow-[0_2px_4px_-1px_rgba(37,1,90,0.08),0_2px_6px_-1px_rgba(37,1,90,0.12)]',
      primary: 'bg-primary-50 text-primary-700 border-2 border-primary-700 hover:bg-primary-100 hover:text-primary-800 hover:border-primary-800 active:bg-primary-200 active:text-primary-900 active:border-primary-900 focus:ring-primary-300 shadow-[0_4px_6px_-1px_rgba(37,1,90,0.06),0_4px_8px_-1px_rgba(37,1,90,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(37,1,90,0.08),0_6px_12px_-1px_rgba(37,1,90,0.12)] active:shadow-[0_2px_4px_-1px_rgba(37,1,90,0.08),0_2px_6px_-1px_rgba(37,1,90,0.12)]',
      secondary: 'bg-secondary-50 text-secondary-700 border-2 border-secondary-700 hover:bg-secondary-100 hover:text-secondary-800 hover:border-secondary-800 active:bg-secondary-200 active:text-secondary-900 active:border-secondary-900 focus:ring-secondary-300',
      success: 'bg-success-50 text-success-700 border-2 border-success-700 hover:bg-success-100 hover:text-success-800 hover:border-success-800 active:bg-success-200 active:text-success-900 active:border-success-900 focus:ring-success-300',
      warning: 'bg-warning-50 text-warning-800 border-2 border-warning-700 hover:bg-warning-100 hover:text-warning-900 hover:border-warning-800 active:bg-warning-200 active:text-warning-950 active:border-warning-900 focus:ring-warning-300',
      danger: 'bg-danger-50 text-danger-700 border-2 border-danger-700 hover:bg-danger-100 hover:text-danger-800 hover:border-danger-800 active:bg-danger-200 active:text-danger-900 active:border-danger-900 focus:ring-danger-300',
      info: 'bg-info-50 text-info-700 border-2 border-info-700 hover:bg-info-100 hover:text-info-800 hover:border-info-800 active:bg-info-200 active:text-info-900 active:border-info-900 focus:ring-info-300',
    },
  },

  // ============================================================================
  // BADGE — nested root structure (matches Flowbite React 0.12.x shape)
  // Shape: { root: { base, color, size }, icon: { off, on, size } }
  // ============================================================================
  badge: {
    root: {
      base: 'inline-flex items-center font-medium border border-transparent',
      size: {
        xs: 'text-xs px-1.5 py-0.5',
        sm: 'text-sm px-2 py-1',
      },
      color: {
        // Semantic colors using custom scales from theme.css
        primary:     'bg-primary-50 text-primary-700 border-primary-200/60 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800/50',
        secondary:   'bg-secondary-50 text-secondary-700 border-secondary-200/60 dark:bg-secondary-900/30 dark:text-secondary-300 dark:border-secondary-800/50',
        alternative: 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
        gray:        'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700',
        // Neutral "ghost" badge — for status chips with no semantic meaning (e.g. "Not scanned")
        ghost:       'bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700',
        danger:      'bg-danger-50 text-danger-700 border-danger-200/60 dark:bg-danger-900/30 dark:text-danger-300 dark:border-danger-800/50',
        success:     'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50',
        warning:     'bg-warning-50 text-warning-800 border-warning-200/60 dark:bg-warning-900/30 dark:text-warning-300 dark:border-warning-800/50',
        // Legacy Flowbite color aliases — so existing usages still render correctly
        info:        'bg-info-50 text-info-700 border-info-200/60 dark:bg-info-900/30 dark:text-info-300 dark:border-info-800/50',
        failure:     'bg-danger-50 text-danger-700 border-danger-200/60 dark:bg-danger-900/30 dark:text-danger-300 dark:border-danger-800/50',
        indigo:      'bg-indigo-50 text-indigo-700 border-indigo-200/60 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50',
        purple:      'bg-purple-50 text-purple-700 border-purple-200/60 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800/50',
        // Severity level badges (for Issues column) — cascade order: critical > serious > moderate > minor
        criticalDot: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800/50',
        seriousDot:  'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800/50',
        moderateDot: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/50',
        minorDot:    'bg-gray-100 text-gray-600 border-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600',
        allClear:    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50',
        notScanned:  'bg-transparent border-dashed border-gray-400 text-gray-500 dark:border-gray-500 dark:text-gray-400',
        // Status badges
        statusActiveOutline: 'bg-transparent text-blue-700 border-blue-700 dark:bg-transparent dark:text-blue-300 dark:border-blue-400',
        statusDraftOutline:  'bg-transparent text-amber-700 border-amber-700 dark:bg-transparent dark:text-amber-300 dark:border-amber-400',
        statusComplete:      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50',
        statusArchived:      'bg-gray-100 text-gray-600 border-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600',
      },
    },

    // Icon slot
    icon: {
      on:  'flex items-center gap-1',
      off: '',
      size: {
        xs: 'h-3 w-3',
        sm: 'h-3.5 w-3.5',
      },
    },
  },

  // ============================================================================
  // FORM INPUTS — WCAG SC 1.4.11 compliant
  // Border: --color-input-border (#787878) = ~3.9:1 contrast on white
  // Lighter than gray-500 visually while still exceeding the 3:1 minimum.
  // ============================================================================

  textInput: {
    field: {
      input: {
        base: 'block w-full border !border-input-border bg-gray-50 !text-gray-900 focus:!border-primary-700 focus:ring-primary-300 focus:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:!border-gray-500 dark:!text-white dark:focus:!border-primary-400',
        sizes: {
          sm: 'text-sm px-3 py-2 rounded-lg',
          md: 'text-base px-4 py-2.5 rounded-lg',
          lg: 'text-lg px-4 py-3 rounded-lg',
        },
        colors: {
          gray:    '!border-input-border bg-gray-50 !text-gray-900 focus:!border-primary-700 focus:ring-primary-300 focus:bg-white dark:bg-gray-700 dark:!border-gray-500 dark:!text-white',
          failure: '!border-danger-500 bg-danger-50 !text-danger-900 focus:!border-danger-600 focus:ring-danger-300 dark:bg-gray-700 dark:!text-danger-400',
          success: '!border-success-500 bg-success-50 !text-success-900 focus:!border-success-600 focus:ring-success-300 dark:bg-gray-700 dark:!text-success-400',
        },
      },
    },
  },

  textarea: {
    base: 'block w-full border !border-input-border bg-gray-50 !text-gray-900 focus:!border-primary-700 focus:ring-primary-300 focus:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:!border-gray-500 dark:!text-white dark:focus:!border-primary-400 rounded-lg',
    sizes: {
      sm: 'text-sm px-3 py-2',
      md: 'text-base px-4 py-2.5',
      lg: 'text-lg px-4 py-3',
    },
    colors: {
      gray:    '!border-input-border bg-gray-50 !text-gray-900 focus:!border-primary-700 focus:ring-primary-300 focus:bg-white dark:bg-gray-700 dark:!border-gray-500 dark:!text-white',
      failure: '!border-danger-500 bg-danger-50 !text-danger-900 focus:!border-danger-600 focus:ring-danger-300 dark:bg-gray-700 dark:!text-danger-400',
      success: '!border-success-500 bg-success-50 !text-success-900 focus:!border-success-600 focus:ring-success-300 dark:bg-gray-700 dark:!text-success-400',
    },
    withShadow: {
      on:  'shadow-sm',
      off: '',
    },
  },

  // Select: only override colors and sizes — leave base alone so Flowbite's
  // bg-arrow-down-icon + bg-[position:right_12px_center] are preserved intact.
  // The broken field.icon override (right-0) is intentionally omitted here.
  select: {
    field: {
      select: {
        sizes: {
          sm: 'text-sm px-3 py-2 rounded-lg',
          md: 'text-base px-4 py-2.5 rounded-lg',
          lg: 'text-lg px-4 py-3 rounded-lg',
        },
        colors: {
          gray:    '!border-input-border bg-gray-50 !text-gray-900 focus:!border-primary-700 focus:ring-primary-300 focus:bg-white dark:bg-gray-700 dark:!border-gray-500 dark:!text-white',
          failure: '!border-danger-500 bg-danger-50 !text-danger-900 focus:!border-danger-600 focus:ring-danger-300 dark:bg-gray-700 dark:!text-danger-400',
          success: '!border-success-500 bg-success-50 !text-success-900 focus:!border-success-600 focus:ring-success-300 dark:bg-gray-700 dark:!text-success-400',
        },
      },
    },
  },

  // ============================================================================
  // CHECKBOX — flat structure for Flowbite React 0.12.x
  // Shape: { base, color, indeterminate }
  // bg-check-icon / bg-dash-icon are provided by @plugin "flowbite/plugin".
  // ============================================================================
  checkbox: {
    base: 'h-4 w-4 appearance-none rounded border border-input-border bg-white bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-500 dark:bg-gray-700',
    color: {
      default: 'text-primary-700 focus:ring-primary-300 dark:ring-offset-gray-800 dark:focus:ring-primary-400',
      primary: 'text-primary-700 focus:ring-primary-300 dark:ring-offset-gray-800 dark:focus:ring-primary-400',
    },
    indeterminate: 'border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current',
  },

  // ============================================================================
  // TABLE — nested structure for Flowbite React 0.12.x
  // Shape: { root: { base }, head: { base, cell }, body: ... }
  // ============================================================================
  tablehead: {
    root: {
      base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400',
    },
    head: {
      base: 'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400',
      cell: {
        base: 'px-4 py-3 font-medium text-gray-900 dark:text-white',
      },
    },
    body: {
      base: 'divide-y divide-gray-200 dark:divide-gray-700',
      cell: {
        base: 'px-4 py-2',
      },
    },
    row: {
      base: 'border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700',
    },
  },

  // ============================================================================
  // TABLE (full override) — use as theme={customTheme.table} on <Table>.
  // Fixes the TableHead background: Flowbite applies bg to <th> cells, NOT
  // to <thead>. bg-neutral-tertiary = gray-100 per project tokens.
  // ============================================================================
  table: {
    root: {
      wrapper: 'static',
    },
    head: {
      cell: {
        base: 'bg-neutral-tertiary px-4 py-3 text-xs font-medium uppercase tracking-wide text-body-subtle dark:bg-gray-700 dark:text-gray-400 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg',
      },
    },
  },

  // ============================================================================
  // CARD — use as theme={customTheme.card} on <Card>.
  // border-input-border (#777777 ≈ 4:1) passes SC 1.4.11.
  // Padding lives in root.children so the Card itself needs no extra className.
  // ============================================================================
  card: {
    root: {
      base: 'flex rounded bg-white shadow-sm dark:bg-gray-800',
      children: 'flex h-full flex-col justify-center p-5',
      horizontal: {
        off: 'flex-col',
        on:  'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-gray-50 dark:hover:bg-gray-700',
    },
  },

  // ============================================================================
  // DROPDOWN — overrides the floating panel with WCAG-compliant concrete values.
  // Use as theme={customTheme.dropdown} on <Dropdown>.
  //
  // Border: border-input-border = #777777 ≈ 4:1 on white — passes SC 1.4.11 (3:1).
  // Item text: text-gray-700 = #374151 ≈ 10.4:1 on white — passes SC 1.4.3 (4.5:1).
  //
  // Note: trigger button is styled via renderTrigger — Dropdown.theme only
  // governs the floating panel.
  // ============================================================================
  dropdown: {
    floating: {
      base: 'z-10 w-fit divide-y divide-gray-200 rounded-lg shadow-md focus:outline-none',
      style: {
        light: 'border border-input-border bg-white text-gray-700',
        auto:  'border border-input-border bg-white text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200',
        dark:  'bg-gray-900 text-white dark:bg-gray-700',
      },
      content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
      divider: 'my-1 h-px bg-gray-200 dark:bg-gray-600',
      item: {
        base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
      },
    },
  },

  // ============================================================================
  // RADIO — flat structure for Flowbite React 0.12.x
  // Shape: { base, color }
  // bg-dot-icon is provided by @plugin "flowbite/plugin".
  // ============================================================================
  radio: {
    base: 'h-4 w-4 appearance-none rounded-full border border-input-border bg-white bg-[length:1em_1em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-dot-icon focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-500 dark:bg-gray-700',
    color: {
      default: 'text-primary-700 focus:ring-primary-300 dark:ring-offset-gray-800 dark:focus:ring-primary-400',
      primary: 'text-primary-700 focus:ring-primary-300 dark:ring-offset-gray-800 dark:focus:ring-primary-400',
    },
  },
})
