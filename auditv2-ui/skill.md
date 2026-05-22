name: auditv2-ui
description: >
  Use this skill for ANY UI design or component work in the auditV2 project.
  Only trigger when the user is working inside the auditV2 project files,
  not when discussing UI in general.
  Trigger for phrases like: "build this screen", "design the layout",
  "add a table", "create a form", "show this data nicely",
  "redesign this page", "make it look better", "fix the spacing",
  "add a card", "make a dashboard screen", "heavy data screen",
  "audit results", or any request involving the auditV2 interface.
  ALWAYS use this skill before writing any Flowbite or UI code in this project.
---

# auditV2 UI Design Skill

You are building **auditV2** — an audit tool with heavy data screens.
The stack is **Flowbite Pro React + Tailwind CSS v4 + the custom theme**.
Read `references/tokens.md` for the full token map and
`references/components.md` for Flowbite customization patterns.

---

## The Design Language

- White-dominant surfaces with subtle shadows
- One accent color: `primary-700` (#540cac)
- Generous padding inside cards and panels
- Small typography: body `text-sm`, labels `text-xs`, headings `text-base`–`text-lg`
- Thin borders: `border-default` (gray-200)
- Subtle table hover: gray-50
- Avatars in first table column
- Status badges: small, pill-shaped, low-contrast
- Charts: semantic colors only

No gradients, no hero sections, no decorative illustrations.

---

## Core Rules

### 0. Do NOT create custom UI components.
You may create new React components **only to compose Flowbite components**.

### 1. Use Flowbite components as the base.
Any modification → **ask the user first**.

### 2. Use theme-based utilities only.
Never use hex colors or Tailwind default colors.
Use only theme colors: primary, gray, secondary, emerald, red, orange, cyan.
If a token is missing → **ask first**.

### 3. Typography hierarchy
Max 4 levels. Never skip heading levels.

### 4. Spacing
Use Flowbite spacing only.

### 5. Sidebar + topbar
Fixed. Never redesign unless the user explicitly asks.

### 6. Icons — ALWAYS use lucide-react
All icons must come from `lucide-react`.
Never use Flowbite’s default icons.
If a Flowbite block includes an icon, copy it first, then ask which lucide icon should replace it.

---

## Screen Architecture
Only build inside the **main content area**.

---

## What NOT to do

- No `font-bold` (max `font-semibold`)
- No colored card backgrounds
- No deep nesting (no card-in-card-in-card)
- No animations beyond Flowbite defaults
- No custom input components
- No Flowbite default icons (use lucide-react only)

---

## Accessibility Baseline

- Every input has `<Label htmlFor="">`
- Tables use `<th scope="col">`
- Icon-only buttons use lucide icons + `aria-label`
- Status must include text, not color alone
- Focus rings: `focus:ring-primary-300`
- Modals: `aria-labelledby`, `aria-modal="true"`, focus trap

---

## Reference Files

- `flowbite-react-blocks-1.8.0-beta`
- `.claude/flowbite-mcp-pro-1.0.0`
- `accessibility-assistant.skill`

---

# MODE 1 — COPYING A COMPONENT

Triggered by:
“copy the navbar”, “use the hero”, “add the sidebar”, “insert this component”.

Rules:
- Copy the component **character-for-character**
- Allowed changes:
  - replace placeholder text (if user asks)
  - replace href="#" (if user asks)
  - adjust import paths
  - rename component if needed
- Apply accessibility fixes only if required
- If the component includes a default icon:
  - copy it first
  - then ask which lucide icon should replace it
- If tempted to change visuals → **STOP and ask**

Copy workflow:
1. Read `flowbite-react-blocks-1.8.0-beta`
2. Check `.claude/flowbite-mcp-pro-1.0.0`
3. Identify candidate components and ask the user which to use
4. Paste unchanged
5. Adjust imports only
6. Apply a11y fixes if needed
7. If not found → use Flowbite MCP fallback

---

# MODE 2 — FIXING ACCESSIBILITY

Triggered by:
“make it accessible”, “fix WCAG”, “fix a11y”.

Rules:
- Fix **only real WCAG failures**
- Never change layout, spacing, colors, or visuals
- Mark each fix with comments
- Follow the accessibility checklist

Checklist includes:
- alt text, aria-labels, aria roles
- required fields, aria-describedby
- keyboard navigation, no traps
- focus visible
- contrast only when provably failing
- heading hierarchy
- descriptive links

---

# MODE 3 — ASSEMBLY MODE (DEFAULT FOR BUILDING SCREENS)

Triggered by:
“build this screen”, “design the layout”, “create a form”,
“add a table”, “make a dashboard”, “show this data nicely”,
“improve this page”, “audit results screen”.

Goal:
Assemble a screen using **existing Flowbite components** and the **project theme**,
without inventing new components or custom styling.

Rules:
- Use only Flowbite React components
- Compose them into layouts (cards, grids, tables, forms)
- No custom CSS or inline styles
- No hex colors — use theme utilities only
- Use Flowbite spacing and layout patterns
- Use project typography rules
- Replace any Flowbite default icons with lucide-react icons
- If a needed pattern is missing → **ask before inventing**
- Never modify Flowbite internals unless user approves
