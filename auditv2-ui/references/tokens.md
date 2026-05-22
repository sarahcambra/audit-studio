# auditV2 Token → Tailwind Class Map

All colors come from the project's `@theme` block. Use semantic token names
as Tailwind utilities. Never use raw hex or primitive Tailwind color steps
(e.g. `gray-200`) — always use the semantic alias.

---

## Text colors

| Token | Tailwind class | Value | Use |
|---|---|---|---|
| `--color-heading` | `text-heading` | gray-900 `#111827` | Page titles, section headings |
| `--color-body` | `text-body` | gray-600 `#4b5563` | Body text, table cells |
| `--color-body-subtle` | `text-body-subtle` | gray-500 `#6b7280` | Labels, timestamps, meta |
| `--color-fg-brand` | `text-fg-brand` | primary-700 `#540cac` | Brand links, active nav |
| `--color-fg-success` | `text-fg-success` | emerald-700 | Success text |
| `--color-fg-danger` | `text-fg-danger` | red-700 | Error/danger text |
| `--color-fg-warning` | `text-fg-warning` | orange-900 | Warning text |
| `--color-fg-disabled` | `text-fg-disabled` | gray-400 | Disabled elements only |

**Rule:** Never use `text-gray-*` directly. Use `text-body`, `text-body-subtle`,
or `text-heading`. Exception: `text-white` is fine on colored backgrounds.

---

## Background colors

| Token | Tailwind class | Value | Use |
|---|---|---|---|
| `--color-neutral-primary` | `bg-neutral-primary` | white `#fcfcfd` | Card surfaces, main panels |
| `--color-neutral-primary-soft` | `bg-neutral-primary-soft` | white | Page background (same in light) |
| `--color-neutral-secondary` | `bg-neutral-secondary` | secondary-50 | Sidebar background |
| `--color-neutral-tertiary` | `bg-neutral-tertiary` | gray-100 | Table header bg, input bg |
| `--color-neutral-quaternary` | `bg-neutral-quaternary` | gray-200 | Dividers used as backgrounds |
| `--color-brand-soft` | `bg-brand-soft` | primary-100 | Brand badge background |
| `--color-brand-softer` | `bg-brand-softer` | primary-50 | Very light brand tint |
| `--color-success-soft` | `bg-success-soft` | emerald-50 | Success badge background |
| `--color-success-medium` | `bg-success-medium` | emerald-100 | Success alert background |
| `--color-danger-soft` | `bg-danger-soft` | red-50 | Error badge background |
| `--color-danger-medium` | `bg-danger-medium` | red-100 | Error alert background |
| `--color-warning-soft` | `bg-warning-soft` | orange-50 | Warning badge background |
| `--color-disabled` | `bg-disabled` | gray-100 | Disabled input background |

---

## Border colors

| Token | Tailwind class | Value | Use |
|---|---|---|---|
| `--color-default` | `border-default` | gray-200 | Default card/input border |
| `--color-default-strong` | `border-default-strong` | gray-200 | Slightly stronger divider |
| `--color-light` | `border-light` | gray-100 | Very subtle separator |
| `--color-brand-subtle` | `border-brand-subtle` | primary-200 | Brand-tinted border |
| `--color-success-subtle` | `border-success-subtle` | emerald-200 | Success border |
| `--color-danger-subtle` | `border-danger-subtle` | red-200 | Error border |
| `--color-warning-subtle` | `border-warning-subtle` | orange-200 | Warning border |

---

## Border radius

| Token | Tailwind class | px value | Use |
|---|---|---|---|
| `--radius-xxs` | `rounded-xxs` | 2px | Very tight (tags) |
| `--radius-xs` | `rounded-xs` | 4px | Badges, small chips |
| `--radius-sm` | `rounded-sm` | 6px | Buttons, inputs |
| `--radius` | `rounded` | 8px | Cards (default) |
| `--radius-base` | `rounded-base` | 12px | Larger cards, modals |
| `--radius-lg` | `rounded-lg` | 16px | Panels, sheets |

**Default card:** `rounded` (8px). **Modal:** `rounded-base` (12px).

---

## Spacing (use standard Tailwind — these are reminders)

| Context | Class | px |
|---|---|---|
| Card padding | `p-5` | 20px |
| Card padding large | `p-6` | 24px |
| Section gap | `gap-6` | 24px |
| Form field gap | `gap-4` | 16px |
| Table cell | `py-3 px-5` | 12/20px |
| Badge | `py-0.5 px-2` | 2/8px |
| Label → input gap | `mb-1.5` | 6px |
| Icon in button | `mr-1.5 h-4 w-4` | — |

---

## Typography classes

```tsx
// Page title
<h1 className="text-xl font-semibold text-heading">Audit Results</h1>

// Section / card title
<h2 className="text-base font-semibold text-heading">Recent Findings</h2>

// Body text
<p className="text-sm text-body">This finding affects 3 pages.</p>

// Meta / label
<span className="text-xs text-body-subtle">Updated 2m ago</span>

// Monospace (IDs, codes, values)
<code className="font-mono text-xs bg-neutral-tertiary px-1.5 py-0.5 rounded-xs text-body">
  AUD-2024-001
</code>
```

---

## Shadow scale (use sparingly)

| Class | Use |
|---|---|
| `shadow-sm` | Cards, panels — the default |
| `shadow` | Dropdowns, popovers |
| `shadow-md` | Modals |
| Never `shadow-lg` or higher | Too heavy for data UIs |

---

## Focus ring

Always: `focus:ring-2 focus:ring-primary-300 focus:border-transparent`
This is already handled by Flowbite's `color="primary"` prop on most inputs.
Only add manually when using a non-Flowbite element.

---

## Dark mode

All tokens have dark mode overrides already defined in the `.dark` class block
in the theme file. Use the same semantic class names — they flip automatically.
Never write `dark:bg-gray-900` — write `bg-neutral-primary` and let the theme handle it.