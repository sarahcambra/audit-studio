# ============================================================
# PROJECT OVERVIEW
# ============================================================

Type: React + Vite application  
UI Framework: Flowbite Pro React  
Styling: Tailwind CSS v4 with dark mode  
Design System: Flowbite components + custom theme.js  
State Management: ThemeContext  

Key Files:
- /src/components/DashboardNavbar.jsx
- /src/App.jsx
- /src/context/ThemeContext.jsx

Tailwind:
- Uses Flowbite preset
- Dark mode enabled
- Responsive mobile-first

Development Guidelines:
- Convert HTML → JSX properly
- Use Flowbite components whenever possible
- Maintain responsive design
- Preserve dark mode support

Theme System:
- Light/dark toggle via ThemeContext
- Global class on root element
- index.css may define global CSS variables

Common Tasks:
- Add components in /src/components
- Use Flowbite components
- Maintain responsive behavior
- Add pages via routes in App.jsx

Compatibility:
- Flowbite MCP (fallback only)
- web_search / web_fetch

---

# ============================================================
# FLOWBITE PRO — COMPONENT FIDELITY + ACCESSIBILITY
# ============================================================

SOURCE OF TRUTH:
1. flowbite-react-blocks-1.8.0-beta  
2. .claude/flowbite-mcp-pro-1.0.0  
3. Flowbite MCP fallback (only if not found)

COPY = reproduce exactly  
FIX = fix only real WCAG failures  

Always read .claude/flowbite-mcp-pro-1.0.0 first.

---

# ============================================================
# THEME USAGE RULES — USE THEME.JS ONLY WHEN NEEDED
# ============================================================

This project uses Flowbite Pro React + Tailwind CSS v4 + a custom theme.js.

Claude must follow these rules when deciding whether to use theme.js or Tailwind:

1. DEFAULT BEHAVIOR
- Use Flowbite Pro components EXACTLY as provided.
- Keep all Tailwind classes from Flowbite templates.
- Do NOT convert Flowbite classes into theme.js tokens unless explicitly asked.

2. WHEN TO USE THEME.JS
Claude must use theme.js ONLY when:
- The design system requires a custom variant (badge, button, alert, etc.)
- A Flowbite component does not match the design system’s colors, shapes, or states
- The user explicitly asks for a themed version
- A new variant must be added (e.g., bordered, dot, chip, loader)
- A component needs semantic color mapping (success, warning, danger, info)

3. WHEN NOT TO USE THEME.JS
Claude must NOT use theme.js when:
- Copying Flowbite Pro components (MODE 1)
- Fixing accessibility (MODE 2)
- Assembling screens using existing components (MODE 3)
- The Flowbite default already matches the design system
- The change is layout-only (grid, flex, spacing, responsive)

4. RESPONSIVENESS RULE
When customizing a component using theme.js:
- Claude must preserve ALL responsive classes from the original template
- sm:, md:, lg:, xl: breakpoints must remain untouched
- Layout structure must remain identical unless user requests changes

5. LAYOUT VS. THEME BOUNDARY
- Tailwind classes for layout (flex, grid, gap, spacing, width, height) stay in JSX
- Colors, borders, radiuses, typography variants belong in theme.js ONLY when needed
- Never remove responsive behavior from templates

6. NEVER DO THIS
- Never rewrite Flowbite Pro components into theme.js versions unless asked
- Never remove Tailwind responsive classes
- Never replace layout classes with theme tokens
- Never “theme-ify” a component automatically

---

# ============================================================
# ACCESSIBILITY BASELINE (GLOBAL)
# ============================================================

All components must follow WCAG 2.2 + EN 301 549.

Fix only real failures:
- alt text
- aria-labels
- aria roles
- keyboard navigation
- focus visible
- contrast (only when provably failing)
- heading hierarchy
- descriptive links

Never change:
- layout
- spacing
- colors (unless failing contrast)
- border-radius
- component structure

---

# ============================================================
# MODE 1 — COPYING A COMPONENT
# ============================================================

Triggered by:
“copy the navbar”, “use the hero”, “add the sidebar”, “insert this component”.

Rules:
- Copy character-for-character
- Allowed changes:
  - replace placeholder text (if user asks)
  - replace href="#" (if user asks)
  - adjust import paths
  - rename component if needed
- Apply accessibility fixes only if required
- If component includes a default icon:
  - copy it first
  - then ask which lucide icon should replace it
- If tempted to change visuals → STOP and ask

Workflow:
1. Read flowbite-react-blocks-1.8.0-beta
2. Check .claude/flowbite-mcp-pro-1.0.0
3. Identify candidate components and ask user which to use
4. Paste unchanged
5. Adjust imports only
6. Apply a11y fixes if needed
7. If not found → use Flowbite MCP fallback

---

# ============================================================
# MODE 2 — FIXING ACCESSIBILITY
# ============================================================

Triggered by:
“make it accessible”, “fix WCAG”, “fix a11y”.

Rules:
- Fix only real WCAG failures
- Never change layout, spacing, colors, or visuals
- Mark each fix with comments
- Follow the accessibility checklist

Checklist:
- alt text, aria-labels, aria roles
- required fields, aria-describedby
- keyboard navigation, no traps
- focus visible
- contrast only when provably failing
- heading hierarchy
- descriptive links

Output:
- Audit summary
- Fixed component with comments

---

# ============================================================
# MODE 3 — ASSEMBLY MODE (DEFAULT FOR BUILDING SCREENS)
# ============================================================

Triggered by:
“build this screen”, “design the layout”, “create a form”,  
“add a table”, “make a dashboard”, “show this data nicely”,  
“improve this page”, “audit results screen”.

Goal:
Assemble a screen using existing Flowbite components and the project theme.

Rules:
- Use only Flowbite React components
- Compose them into layouts (cards, grids, tables, forms)
- No custom CSS or inline styles
- No hex colors — use theme utilities only
- Use Flowbite spacing and layout patterns
- Use project typography rules
- Replace Flowbite default icons with lucide-react icons
- If a needed pattern is missing → ask before inventing
- Never modify Flowbite internals unless user approves

---

# ============================================================
# AUDITV2 UI DESIGN SKILL
# ============================================================

Design Language:
- White surfaces, subtle shadows
- Accent: primary-700 (#540cac)
- Padding: generous
- Typography: small (text-sm, text-xs)
- Borders: thin (gray-200)
- Table hover: gray-50
- Status badges: small, pill, low-contrast
- Charts: semantic colors only

Core Rules:
- Do NOT create custom UI components
- Use Flowbite components as base
- Use theme-based utilities only
- Typography hierarchy max 4 levels
- Use Flowbite spacing
- Sidebar + topbar fixed
- Icons: lucide-react only

Accessibility:
- Inputs have labels
- Tables use <th scope="col">
- Icon-only buttons have aria-label
- Status includes text
- Focus rings: focus:ring-primary-300
- Modals: aria-labelledby, aria-modal, focus trap

Reference Files:
- flowbite-react-blocks-1.8.0-beta
- .claude/flowbite-mcp-pro-1.0.0
- accessibility-assistant.skill
