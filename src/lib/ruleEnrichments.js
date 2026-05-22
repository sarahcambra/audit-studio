/**
 * Rule enrichment database for axe-core rules.
 * This file maps axe rule IDs to human-readable guidance for auditors and developers.
 *
 * Schema per rule:
 * - auditorTitle: Short, actionable title for the issue (used in UI and reports)
 * - auditorNotes: Plain-text guidance for auditors triaging findings
 * - wcagTechniques: Array of {id, title, url} for W3C sufficient techniques
 * - wcagFailures: Array of {id, title, url} for W3C common failures
 * - ariaPractices: Link to ARIA Authoring Practices Guide (APG) if applicable
 * - clientFix: Plain-language remediation guidance for developers
 * - badExample: HTML code snippet showing the problem
 * - goodExample: HTML code snippet showing the fix
 * - affectedUsers: Array of user groups affected (e.g., ["Screen reader users"])
 * - fixDifficulty: "Easy" | "Medium" | "Hard"
 * - issueType: "failure" | "needs review" | "failure, needs review" — drives triage lane and pre-selection
 * - ruleType: "wcag" | "best-practice" | "experimental"
 *
 * issueType values:
 * - "failure": Goes to Violations lane, "Confirmed failure" button pre-selected
 * - "needs review": Goes to Needs Review lane, no pre-selection, auditor must decide
 * - "failure, needs review": Context-dependent — could be either, auditor decides
 *
 * TODO: Fill in null fields progressively as audits surface rules.
 * Priority: Start with rules already having auditorTitle populated.
 */

export const RULE_ENRICHMENTS = {
  /**
   * Axe: accesskey attribute value should be unique
   * Description: Ensure every accesskey attribute value is unique
   * @see https://dequeuniversity.com/rules/axe/4.11/accesskeys?application=axeAPI
   */
  "accesskeys": {
    auditorTitle: "Duplicate accesskey attribute",
    ruleType: "best-practice",
    auditorNotes: "Accesskey values must be unique per page. Duplicate accesskeys can confuse keyboard users trying to navigate quickly.",
    wcagTechniques: [
      { id: "G202", title: "Ensuring keyboard control for all functionality", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G202" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure each accesskey value is unique. Consider if accesskeys are needed at all, as they can conflict with browser shortcuts.",
    badExample: "<button accesskey='s'>Save</button>\n<button accesskey='s'>Search</button>",
    goodExample: "<button accesskey='s'>Save</button>\n<button accesskey='e'>Search</button>",
    affectedUsers: ["Keyboard users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Active <area> elements must have alternative text
   * Description: Ensure <area> elements of image maps have alternative text
   * @see https://dequeuniversity.com/rules/axe/4.11/area-alt?application=axeAPI
   */
  "area-alt": {
    auditorTitle: "Image map area missing alt text",
    ruleType: "wcag",
    auditorNotes: "Active area elements in image maps must have alternative text describing the destination or purpose of the link.",
    wcagTechniques: [
      { id: "H24", title: "Providing text alternatives for image map areas", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H24" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add alt attribute to each area element describing the link destination.",
    badExample: "<area shape='rect' coords='0,0,100,100' href='page.html'>",
    goodExample: "<area shape='rect' coords='0,0,100,100' href='page.html' alt='Go to Products'>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Elements must only use supported ARIA attributes
   * Description: Ensure an element's role supports its ARIA attributes
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=axeAPI
   */
  "aria-allowed-attr": {
    auditorTitle: "ARIA attribute not allowed for this role",
    ruleType: "wcag",
    auditorNotes: "Certain ARIA attributes are only valid on specific roles. Check the ARIA specification for valid attribute-role combinations.",
    wcagTechniques: [
      { id: "ARIA5", title: "Using WAI-ARIA state and property attributes", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to using role attribute on wrong element", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Remove invalid ARIA attributes or change the element's role to one that supports them.",
    badExample: "<div role='button' aria-live='polite'>Click me</div>",
    goodExample: "<div role='button' aria-pressed='false'>Toggle</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: ARIA role should be appropriate for the element
   * Description: Ensure role attribute has an appropriate value for the element
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=axeAPI
   */
  "aria-allowed-role": {
    auditorTitle: "ARIA role not appropriate for element",
    ruleType: "best-practice",
    auditorNotes: "Some roles should not be used on certain HTML elements as they conflict with native semantics.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA state and property attributes", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove the conflicting role or use a different element that matches the intended role.",
    badExample: "<button role='link'>Submit</button>",
    goodExample: "<button>Submit</button>\n<a href='/page'>Go to Page</a>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: aria-braille attributes must have a non-braille equivalent
   * Description: Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-braille-equivalent?application=axeAPI
   */
  "aria-braille-equivalent": {
    auditorTitle: "ARIA braille attribute missing equivalent",
    ruleType: "wcag",
    auditorNotes: "aria-braillelabel and aria-brailleroledescription must have non-braille equivalents for users without braille displays.",
    wcagTechniques: [
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: null,
    clientFix: "Ensure aria-label or aria-labelledby is present alongside aria-braillelabel.",
    badExample: "<div aria-braillelabel='XYZ' role='img'></div>",
    goodExample: "<div aria-label='Chart showing sales' aria-braillelabel='XYZ' role='img'></div>",
    affectedUsers: ["Braille display users", "Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA commands must have an accessible name
   * Description: Ensure every ARIA button, link and menuitem has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=axeAPI
   */
  "aria-command-name": {
    auditorTitle: "ARIA command missing accessible name",
    ruleType: "wcag",
    auditorNotes: "Elements with role='button', role='link', or role='menuitem' must have accessible name via aria-label, aria-labelledby, or text content.",
    wcagTechniques: [
      { id: "ARIA14", title: "Using aria-label to provide an invisible label", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Button Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/" }],
    clientFix: "Add aria-label or aria-labelledby, or ensure the element has visible text content.",
    badExample: "<div role='button' tabindex='0'><i class='icon'></i></div>",
    goodExample: "<div role='button' tabindex='0' aria-label='Close'><i class='icon'></i></div>",
    affectedUsers: ["Screen reader users", "Speech recognition users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA attributes must be used as specified for the element's role
   * Description: Ensure ARIA attributes are used as described in the specification of the element's role
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-conditional-attr?application=axeAPI
   */
  "aria-conditional-attr": {
    auditorTitle: "ARIA conditional attribute misused",
    ruleType: "wcag",
    auditorNotes: "Certain ARIA attributes are only required or valid under specific conditions based on the element's state.",
    wcagTechniques: [
      { id: "ARIA5", title: "Using WAI-ARIA state and property attributes", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to incorrect ARIA attribute usage", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Review ARIA specification for conditional attributes and ensure correct usage based on element state.",
    badExample: "<div role='option' aria-selected='true'></div>",
    goodExample: "<div role='option' aria-selected='false'></div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Deprecated ARIA roles must not be used
   * Description: Ensure elements do not use deprecated roles
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-deprecated-role?application=axeAPI
   */
  "aria-deprecated-role": {
    auditorTitle: "Deprecated ARIA role used",
    ruleType: "wcag",
    auditorNotes: "Some ARIA roles are deprecated and should not be used. They may not be supported by assistive technologies.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA roles", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to deprecated ARIA role", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Replace deprecated role with current equivalent. Check ARIA 1.2 spec for current roles.",
    badExample: "<div role='directory'>...</div>",
    goodExample: "<ul>...</ul>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: ARIA dialog and alertdialog nodes should have an accessible name
   * Description: Ensure every ARIA dialog and alertdialog node has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=axeAPI
   */
  "aria-dialog-name": {
    auditorTitle: "ARIA dialog missing accessible name",
    ruleType: "best-practice",
    auditorNotes: "Dialog and alertdialog roles must have accessible names to identify their purpose to screen reader users.",
    wcagTechniques: [
      { id: "ARIA8", title: "Using aria-label for link purpose", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Dialog Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" }],
    clientFix: "Add aria-label or aria-labelledby to describe the dialog's purpose.",
    badExample: "<div role='dialog'>...</div>",
    goodExample: "<div role='dialog' aria-label='Shipping Address Form'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: aria-hidden="true" must not be present on the document body
   * Description: Ensure aria-hidden="true" is not present on the document body.
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-hidden-body?application=axeAPI
   */
  "aria-hidden-body": {
    auditorTitle: "Page hidden from assistive technologies",
    ruleType: "wcag",
    auditorNotes: "Setting aria-hidden='true' on the body element hides the entire page from screen readers, making it completely inaccessible.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using aria-hidden to hide content", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F93", title: "Failure due to hiding content with aria-hidden", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F93" }
    ],
    ariaPractices: null,
    clientFix: "Remove aria-hidden from the body element. Use it sparingly only on specific decorative elements.",
    badExample: "<body aria-hidden='true'>",
    goodExample: "<body>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA hidden element must not be focusable or contain focusable elements
   * Description: Ensure aria-hidden elements are not focusable nor contain focusable elements
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=axeAPI
   */
  "aria-hidden-focus": {
    auditorTitle: "Hidden element contains focusable content",
    ruleType: "wcag",
    auditorNotes: "Elements with aria-hidden='true' must not contain focusable elements or be focusable themselves. This creates a keyboard trap for screen reader users.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using aria-hidden to hide content", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to focusable element inside aria-hidden", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Remove focusable elements from inside aria-hidden containers, or remove aria-hidden from the container.",
    badExample: "<div aria-hidden='true'>\n  <button>Click me</button>\n</div>",
    goodExample: "<div aria-hidden='true'>\n  <span>Decorative icon</span>\n</div>",
    affectedUsers: ["Screen reader users", "Keyboard users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: ARIA input fields must have an accessible name
   * Description: Ensure every ARIA input field has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=axeAPI
   */
  "aria-input-field-name": {
    auditorTitle: "ARIA input field missing accessible name",
    ruleType: "wcag",
    auditorNotes: "Custom input fields using ARIA (role='textbox', role='combobox', role='spinbutton', etc.) must have an accessible name.",
    wcagTechniques: [
      { id: "ARIA14", title: "Using aria-label to provide an invisible label", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Combobox Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" }],
    clientFix: "Add aria-label, aria-labelledby, or ensure visible text provides the accessible name.",
    badExample: "<div role='textbox' contenteditable='true'></div>",
    goodExample: "<div role='textbox' contenteditable='true' aria-label='Comments'></div>",
    affectedUsers: ["Screen reader users", "Speech recognition users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA meter nodes must have an accessible name
   * Description: Ensure every ARIA meter node has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-meter-name?application=axeAPI
   */
  "aria-meter-name": {
    auditorTitle: "ARIA meter missing accessible name",
    ruleType: "wcag",
    auditorNotes: "Elements with role='meter' must have an accessible name describing what is being measured.",
    wcagTechniques: [
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Meter Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/" }],
    clientFix: "Add aria-label or aria-labelledby to describe what the meter measures.",
    badExample: "<div role='meter' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>",
    goodExample: "<div role='meter' aria-label='Disk usage' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA progressbar nodes must have an accessible name
   * Description: Ensure every ARIA progressbar node has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=axeAPI
   */
  "aria-progressbar-name": {
    auditorTitle: "ARIA progressbar missing accessible name",
    ruleType: "wcag",
    auditorNotes: "Elements with role='progressbar' must have an accessible name describing the progress being shown.",
    wcagTechniques: [
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Progressbar Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/progressbar/" }],
    clientFix: "Add aria-label or aria-labelledby to describe what progress is being shown.",
    badExample: "<div role='progressbar' aria-valuenow='75'></div>",
    goodExample: "<div role='progressbar' aria-label='Upload progress' aria-valuenow='75'></div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Elements must only use permitted ARIA attributes
   * Description: Ensure ARIA attributes are not prohibited for an element's role
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=axeAPI
   */
  "aria-prohibited-attr": {
    auditorTitle: "Prohibited ARIA attribute used",
    ruleType: "wcag",
    auditorNotes: "Certain ARIA attributes are prohibited on specific roles or elements. Using them can cause assistive technology to ignore the element.",
    wcagTechniques: [
      { id: "ARIA5", title: "Using WAI-ARIA state and property attributes", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to prohibited ARIA attribute", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Remove prohibited ARIA attributes from the element. Check ARIA spec for allowed attributes per role.",
    badExample: "<div role='generic' aria-label='Description'>...</div>",
    goodExample: "<div aria-label='Description'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Required ARIA attributes must be provided
   * Description: Ensure elements with ARIA roles have all required ARIA attributes
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-required-attr?application=axeAPI
   */
  "aria-required-attr": {
    auditorTitle: "ARIA role missing required attributes",
    ruleType: "wcag",
    auditorNotes: "Certain ARIA roles require specific attributes. For example, role='checkbox' requires aria-checked.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA state and property attributes", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to incomplete ARIA implementation", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Add the required ARIA attribute for the given role. Check ARIA spec for required attributes per role.",
    badExample: "<div role='checkbox' tabindex='0'>Subscribe</div>",
    goodExample: "<div role='checkbox' tabindex='0' aria-checked='false'>Subscribe</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Certain ARIA roles must contain particular children
   * Description: Ensure elements with an ARIA role that require child roles contain them
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=axeAPI
   */
  "aria-required-children": {
    auditorTitle: "ARIA parent missing required children",
    ruleType: "wcag",
    auditorNotes: "Certain ARIA roles require specific child roles. For example, role='listbox' must contain role='option' children.",
    wcagTechniques: [
      { id: "ARIA17", title: "Using grouping roles to identify related form controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA17" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to missing required child roles", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: [{ pattern: "Listbox Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/" }],
    clientFix: "Add required child elements with appropriate roles. Check ARIA spec for required children per parent role.",
    badExample: "<div role='listbox'>\n  <div>Option 1</div>\n</div>",
    goodExample: "<div role='listbox'>\n  <div role='option'>Option 1</div>\n</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Certain ARIA roles must be contained by particular parents
   * Description: Ensure elements with an ARIA role that require parent roles are contained by them
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=axeAPI
   */
  "aria-required-parent": {
    auditorTitle: "ARIA child missing required parent",
    ruleType: "wcag",
    auditorNotes: "Certain ARIA roles must be contained within specific parent roles. For example, role='option' must be inside role='listbox' or role='select'.",
    wcagTechniques: [
      { id: "ARIA17", title: "Using grouping roles to identify related form controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA17" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to missing required parent role", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: [{ pattern: "Listbox Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/" }],
    clientFix: "Wrap the element in a container with the required parent role. Check ARIA spec for required parent per child role.",
    badExample: "<div role='option'>Option 1</div>",
    goodExample: "<div role='listbox'>\n  <div role='option'>Option 1</div>\n</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: aria-roledescription must be on elements with a semantic role
   * Description: Ensure aria-roledescription is only used on elements with an implicit or explicit role
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-roledescription?application=axeAPI
   */
  "aria-roledescription": {
    auditorTitle: "aria-roledescription on element without semantic role",
    ruleType: "wcag",
    auditorNotes: "aria-roledescription must be on elements with an implicit or explicit role. It customizes how assistive technologies announce the role.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA roles", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to invalid ARIA usage", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Add an explicit role to the element or ensure it has an implicit role before using aria-roledescription.",
    badExample: "<div aria-roledescription='slide'>...</div>",
    goodExample: "<div role='group' aria-roledescription='slide'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA roles used must conform to valid values
   * Description: Ensure all elements with a role attribute use a valid value
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=axeAPI
   */
  "aria-roles": {
    auditorTitle: "Invalid ARIA role value",
    ruleType: "wcag",
    auditorNotes: "ARIA roles must be valid values from the ARIA specification. Invalid roles are ignored by assistive technologies.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA roles", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to invalid ARIA role", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Replace with a valid ARIA role from the ARIA 1.2 specification. Check spelling and case sensitivity.",
    badExample: "<div role='slider-bar'>...</div>",
    goodExample: "<div role='slider'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: "role=text" should have no focusable descendants
   * Description: Ensure role="text" is used on elements with no focusable descendants
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-text?application=axeAPI
   */
  "aria-text": {
    auditorTitle: "role=text has focusable descendants",
    ruleType: "best-practice",
    auditorNotes: "role=text is for static text content and should not contain focusable elements like links or buttons.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA roles", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove focusable elements from inside role=text or use a different role.",
    badExample: "<div role='text'>\n  <a href='/'>Link</a>\n</div>",
    goodExample: "<div role='text'>Static text content</div>",
    affectedUsers: ["Screen reader users", "Keyboard users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: ARIA toggle fields must have an accessible name
   * Description: Ensure every ARIA toggle field has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=axeAPI
   */
  "aria-toggle-field-name": {
    auditorTitle: "ARIA toggle field missing accessible name",
    ruleType: "wcag",
    auditorNotes: "Toggle fields (role='checkbox', role='switch', etc.) must have accessible names to indicate their purpose.",
    wcagTechniques: [
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Switch Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/switch/" }],
    clientFix: "Add aria-label or aria-labelledby to describe the toggle's purpose.",
    badExample: "<div role='switch' aria-checked='false'></div>",
    goodExample: "<div role='switch' aria-checked='false' aria-label='Notifications'></div>",
    affectedUsers: ["Screen reader users", "Speech recognition users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA tooltip nodes must have an accessible name
   * Description: Ensure every ARIA tooltip node has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-tooltip-name?application=axeAPI
   */
  "aria-tooltip-name": {
    auditorTitle: "ARIA tooltip missing accessible name",
    ruleType: "wcag",
    auditorNotes: "Elements with role='tooltip' must have an accessible name describing the tooltip content.",
    wcagTechniques: [
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Tooltip Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" }],
    clientFix: "Add aria-label or ensure the tooltip text provides the accessible name.",
    badExample: "<div role='tooltip'>...</div>",
    goodExample: "<div role='tooltip' aria-label='Help for email field'>Enter a valid email address</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA treeitem nodes should have an accessible name
   * Description: Ensure every ARIA treeitem node has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-treeitem-name?application=axeAPI
   */
  "aria-treeitem-name": {
    auditorTitle: "ARIA treeitem missing accessible name",
    ruleType: "best-practice",
    auditorNotes: "Treeitem elements must have accessible names to identify each node in a tree structure.",
    wcagTechniques: [
      { id: "ARIA8", title: "Using aria-label for link purpose", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Treeview Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/" }],
    clientFix: "Add aria-label or ensure visible text provides the treeitem name.",
    badExample: "<div role='treeitem'>...</div>",
    goodExample: "<div role='treeitem' aria-label='Documents folder'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA attributes must conform to valid names
   * Description: Ensure attributes that begin with aria- are valid ARIA attributes
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr?application=axeAPI
   */
  "aria-valid-attr": {
    auditorTitle: "Invalid ARIA attribute",
    ruleType: "wcag",
    auditorNotes: "Attributes starting with aria- must be valid ARIA attributes from the specification. Invalid attributes are ignored by assistive technologies.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA roles", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to invalid ARIA attribute", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Replace with valid ARIA attribute from the ARIA 1.2 specification.",
    badExample: "<div aria-cheked='true'>...</div>",
    goodExample: "<div aria-checked='true'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: ARIA attributes must conform to valid values
   * Description: Ensure all ARIA attributes have valid values
   * @see https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=axeAPI
   */
  "aria-valid-attr-value": {
    auditorTitle: "Invalid ARIA attribute value",
    ruleType: "wcag",
    auditorNotes: "ARIA attributes must have valid values according to the ARIA specification. Invalid values are treated as if the attribute were not present.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using WAI-ARIA roles", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: [
      { id: "F92", title: "Failure due to invalid ARIA attribute value", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F92" }
    ],
    ariaPractices: null,
    clientFix: "Use valid values for ARIA attributes. Check ARIA spec for allowed values per attribute.",
    badExample: "<div aria-hidden='yes'>...</div>",
    goodExample: "<div aria-hidden='true'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <audio> elements must have a captions track
   * Description: Ensure <audio> elements have captions
   * @see https://dequeuniversity.com/rules/axe/4.11/audio-caption?application=axeAPI
   */
  "audio-caption": {
    auditorTitle: "Audio content missing captions",
    ruleType: "wcag",
    auditorNotes: "Audio content that conveys information must have text alternatives or captions for deaf/hard-of-hearing users.",
    wcagTechniques: [
      { id: "G158", title: "Providing an alternative for time-based media", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G158" },
      { id: "H96", title: "Using the track element to provide alternatives for media", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H96" }
    ],
    wcagFailures: [
      { id: "F30", title: "Failure due to not providing text alternatives", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F30" }
    ],
    ariaPractices: null,
    clientFix: "Provide a transcript or use the track element to add captions to audio content.",
    badExample: "<audio src='podcast.mp3'></audio>",
    goodExample: "<audio src='podcast.mp3'>\n  <track kind='captions' src='captions.vtt' srclang='en' label='English'>\n</audio>",
    affectedUsers: ["Deaf users", "Hard-of-hearing users"],
    fixDifficulty: "Hard"
  },

  /**
   * Axe: autocomplete attribute must be used correctly
   * Description: Ensure the autocomplete attribute is correct and suitable for the form field
   * @see https://dequeuniversity.com/rules/axe/4.11/autocomplete-valid?application=axeAPI
   */
  "autocomplete-valid": {
    auditorTitle: "Invalid autocomplete attribute value",
    ruleType: "wcag",
    auditorNotes: "The autocomplete attribute must use valid values from the HTML specification. Correct values help browsers autofill form fields.",
    wcagTechniques: [
      { id: "H98", title: "Using autocomplete attributes", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H98" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Use valid autocomplete values like 'name', 'email', 'tel', 'street-address', etc.",
    badExample: "<input type='text' autocomplete='username'>",
    goodExample: "<input type='text' autocomplete='name'>\n<input type='email' autocomplete='email'>",
    affectedUsers: ["Users with cognitive disabilities", "Users with motor disabilities"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Inline text spacing must be adjustable with custom stylesheets
   * Description: Ensure that text spacing set through style attributes can be adjusted with custom stylesheets
   * @see https://dequeuniversity.com/rules/axe/4.11/avoid-inline-spacing?application=axeAPI
   */
  "avoid-inline-spacing": {
    auditorTitle: "Inline text spacing blocks user styles",
    ruleType: "wcag",
    auditorNotes: "Inline style attributes for line-height, letter-spacing, or word-spacing can prevent users from overriding spacing with custom stylesheets.",
    wcagTechniques: [
      { id: "G207", title: "Allowing users to override text spacing", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G207" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Use CSS classes instead of inline styles for text spacing so users can override them.",
    badExample: "<p style='line-height: 1.2;'>Text</p>",
    goodExample: "<p class='text-content'>Text</p>\n<!-- in CSS: .text-content { line-height: 1.2; } -->",
    affectedUsers: ["Users with low vision", "Users with dyslexia"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: <blink> elements are deprecated and must not be used
   * Description: Ensure <blink> elements are not used
   * @see https://dequeuniversity.com/rules/axe/4.11/blink?application=axeAPI
   */
  "blink": {
    auditorTitle: "Blink element used",
    ruleType: "wcag",
    auditorNotes: "The blink element is deprecated and causes content to flash, which can trigger seizures in photosensitive users.",
    wcagTechniques: [
      { id: "G19", title: "Ensuring no component flashes more than 3 times per second", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G19" }
    ],
    wcagFailures: [
      { id: "F47", title: "Failure due to using blink element", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F47" }
    ],
    ariaPractices: null,
    clientFix: "Remove the blink element. Use CSS animations with care if attention is needed.",
    badExample: "<blink>Important!</blink>",
    goodExample: "<span class='highlight'>Important!</span>",
    affectedUsers: ["Users with photosensitive epilepsy", "Users with attention disorders"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Buttons must have discernible text
   * Description: Ensure buttons have discernible text
   * @see https://dequeuniversity.com/rules/axe/4.11/button-name?application=axeAPI
   */
  "button-name": {
    auditorTitle: "Buttons without accessible names",
    ruleType: "wcag",
    auditorNotes: "Buttons must have visible text, aria-label, or aria-labelledby. Icon-only buttons are common failures without accessible names.",
    wcagTechniques: [
      { id: "H91", title: "Using HTML form controls and links", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H91" },
      { id: "ARIA14", title: "Using aria-label to provide an invisible label", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Button Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/" }],
    clientFix: "Add visible text inside the button or use aria-label to describe the button's action.",
    badExample: "<button><i class='icon-close'></i></button>",
    goodExample: "<button aria-label='Close dialog'><i class='icon-close'></i></button>\n<button>Submit</button>",
    affectedUsers: ["Screen reader users", "Speech recognition users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Page must have means to bypass repeated blocks
   * Description: Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content
   * @see https://dequeuniversity.com/rules/axe/4.11/bypass?application=axeAPI
   */
  "bypass": {
    auditorTitle: "No skip link for repeated content",
    ruleType: "wcag",
    auditorNotes: "Pages with repeated content (navigation, banners) must provide a way to skip directly to main content. Implement skip links or proper heading structure.",
    wcagTechniques: [
      { id: "G1", title: "Adding a link at the top of each page to go directly to the main content", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G1" },
      { id: "G123", title: "Adding a link at the beginning of a block of repeated content", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G123" },
      { id: "H69", title: "Providing heading elements at the beginning of each section", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H69" }
    ],
    wcagFailures: [
      { id: "F66", title: "Failure due to not providing a way to skip past repetitive content", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F66" }
    ],
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/generic.html" }],
    clientFix: "Add a 'Skip to main content' link at the top of the page that jumps to the main element or use proper landmarks (main, nav).",
    badExample: "<body>\n  <nav>...</nav>\n  <div id='content'>...</div>",
    goodExample: "<body>\n  <a href='#main' class='skip-link'>Skip to main content</a>\n  <nav>...</nav>\n  <main id='main'>...</main>",
    affectedUsers: ["Keyboard users", "Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Elements must meet minimum color contrast ratio thresholds
   * Description: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
   * @see https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=axeAPI
   */
  "color-contrast": {
    auditorTitle: "Insufficient color contrast",
    ruleType: "wcag",
    auditorNotes: "Requires 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+bold). Check text over images, gradients, and semi-transparent backgrounds carefully.",
    wcagTechniques: [
      { id: "G18", title: "Ensuring a contrast ratio of at least 4.5:1", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G18" },
      { id: "G145", title: "Ensuring a contrast ratio of at least 3:1 for large text", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G145" }
    ],
    wcagFailures: [
      { id: "F24", title: "Failure due to specifying foreground without background", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F24" },
      { id: "F83", title: "Failure due to background color not being specified", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F83" }
    ],
    ariaPractices: null,
    clientFix: "Adjust colors to meet WCAG contrast requirements. Use a contrast checker tool. Consider adding a semi-transparent background behind text over images.",
    badExample: "<span style='color: #888888;'>Light gray text on white</span>",
    goodExample: "<span style='color: #595959;'>Dark gray text (4.5:1 contrast)</span>",
    affectedUsers: ["Users with low vision", "Users in bright sunlight", "Older users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Elements must meet enhanced color contrast ratio thresholds
   * Description: Ensure the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds
   * @see https://dequeuniversity.com/rules/axe/4.11/color-contrast-enhanced?application=axeAPI
   */
  "color-contrast-enhanced": {
    auditorTitle: "Insufficient contrast for enhanced (AAA)",
    ruleType: "wcag",
    auditorNotes: "Enhanced contrast requires 7:1 for normal text and 4.5:1 for large text (WCAG AAA level). This exceeds minimum requirements.",
    wcagTechniques: [
      { id: "G18", title: "Ensuring a contrast ratio of at least 4.5:1", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G18" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "For enhanced accessibility, increase contrast to 7:1 for normal text. Use a contrast checker tool.",
    badExample: "<span style='color: #666;'>Medium gray text (fails AAA)</span>",
    goodExample: "<span style='color: #333;'>Dark text (passes AAA)</span>",
    affectedUsers: ["Users with low vision"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: CSS Media queries must not lock display orientation
   * Description: Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations
   * @see https://dequeuniversity.com/rules/axe/4.11/css-orientation-lock?application=axeAPI
   */
  "css-orientation-lock": {
    auditorTitle: "Screen orientation locked",
    ruleType: "experimental",
    auditorNotes: "Content should not be locked to a specific screen orientation. Users may need to view content in their preferred orientation.",
    wcagTechniques: [
      { id: "G214", title: "Using content that does not restrict orientation", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G214" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove CSS or meta tags that lock orientation. Allow both portrait and landscape.",
    badExample: "@media screen and (orientation: portrait) { body { display: none; } }",
    goodExample: "/* Support both orientations */\n@media screen { /* responsive styles */ }",
    affectedUsers: ["Users with devices mounted in fixed orientations", "Users with motor disabilities"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
   * Description: Ensure <dl> elements are structured correctly
   * @see https://dequeuniversity.com/rules/axe/4.11/definition-list?application=axeAPI
   */
  "definition-list": {
    auditorTitle: "Definition list structured incorrectly",
    ruleType: "wcag",
    auditorNotes: "dl elements must only contain dt, dd, script, template, or div elements. Improper nesting breaks the semantic structure for screen readers.",
    wcagTechniques: [
      { id: "H40", title: "Using definition lists", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H40" }
    ],
    wcagFailures: [
      { id: "F42", title: "Failure due to incorrect dl structure", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F42" }
    ],
    ariaPractices: null,
    clientFix: "Ensure dl only contains properly ordered dt and dd elements, optionally wrapped in div groups.",
    badExample: "<dl>\n  <span>Term</span>\n  <dd>Definition</dd>\n</dl>",
    goodExample: "<dl>\n  <dt>Term</dt>\n  <dd>Definition</dd>\n</dl>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <dt> and <dd> elements must be contained by a <dl>
   * Description: Ensure <dt> and <dd> elements are contained by a <dl>
   * @see https://dequeuniversity.com/rules/axe/4.11/dlitem?application=axeAPI
   */
  "dlitem": {
    auditorTitle: "Definition term/item outside list",
    ruleType: "wcag",
    auditorNotes: "dt and dd elements must be direct children of dl elements. Using them outside breaks semantic meaning.",
    wcagTechniques: [
      { id: "H40", title: "Using definition lists", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H40" }
    ],
    wcagFailures: [
      { id: "F42", title: "Failure due to orphaned dt/dd elements", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F42" }
    ],
    ariaPractices: null,
    clientFix: "Place dt and dd elements only as direct children of dl elements.",
    badExample: "<div>\n  <dt>Term</dt>\n</div>",
    goodExample: "<dl>\n  <dt>Term</dt>\n  <dd>Definition</dd>\n</dl>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Documents must have <title> element to aid in navigation
   * Description: Ensure each HTML document contains a non-empty <title> element
   * @see https://dequeuniversity.com/rules/axe/4.11/document-title?application=axeAPI
   */
  "document-title": {
    auditorTitle: "Page title missing or weak",
    ruleType: "wcag",
    auditorNotes: "Each page must have a unique, descriptive <title> in the head. Generic titles like 'Home' or missing titles fail this criterion.",
    wcagTechniques: [
      { id: "H25", title: "Providing a title using the title element", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H25" },
      { id: "G88", title: "Providing descriptive titles for Web pages", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G88" }
    ],
    wcagFailures: [
      { id: "F25", title: "Failure due to the title of a Web page not identifying the content", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F25" }
    ],
    ariaPractices: null,
    clientFix: "Add a descriptive <title> element to the document head that describes the page content and site context.",
    badExample: "<title>Home</title>",
    goodExample: "<title>About Us | My Company</title>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: id attribute value must be unique
   * Description: Ensure every id attribute value is unique
   * @see https://dequeuniversity.com/rules/axe/4.11/duplicate-id?application=axeAPI
   */
  "duplicate-id": {
    auditorTitle: "Duplicate ID attribute",
    ruleType: "wcag",
    auditorNotes: "ID attributes must be unique within the page. Duplicate IDs can break JavaScript and form associations.",
    wcagTechniques: [
      { id: "H93", title: "Ensuring that id attributes are unique", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H93" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure each ID is unique. Use different IDs or classes for styling multiple elements.",
    badExample: "<div id='section'>...</div>\n<div id='section'>...</div>",
    goodExample: "<div id='section-1'>...</div>\n<div id='section-2'>...</div>",
    affectedUsers: ["Users relying on proper DOM structure"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: IDs of active elements must be unique
   * Description: Ensure every id attribute value of active elements is unique
   * @see https://dequeuniversity.com/rules/axe/4.11/duplicate-id-active?application=axeAPI
   */
  "duplicate-id-active": {
    auditorTitle: "Duplicate ID on active element",
    ruleType: "wcag",
    auditorNotes: "Active elements (focusable elements) must have unique IDs. Duplicate IDs on interactive elements cause accessibility issues.",
    wcagTechniques: [
      { id: "H93", title: "Ensuring that id attributes are unique", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H93" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure all interactive elements have unique IDs. Check buttons, links, and form elements.",
    badExample: "<button id='btn'>Save</button>\n<button id='btn'>Cancel</button>",
    goodExample: "<button id='save-btn'>Save</button>\n<button id='cancel-btn'>Cancel</button>",
    affectedUsers: ["Screen reader users", "Keyboard users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: IDs used in ARIA and labels must be unique
   * Description: Ensure every id attribute value used in ARIA and in labels is unique
   * @see https://dequeuniversity.com/rules/axe/4.11/duplicate-id-aria?application=axeAPI
   */
  "duplicate-id-aria": {
    auditorTitle: "Duplicate ID used in ARIA",
    ruleType: "wcag",
    auditorNotes: "IDs referenced by aria-labelledby or aria-describedby must be unique. Duplicate IDs break the association between labels and elements.",
    wcagTechniques: [
      { id: "ARIA9", title: "Using aria-labelledby to concatenate a label", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA9" },
      { id: "H93", title: "Ensuring that id attributes are unique", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H93" }
    ],
    wcagFailures: [
      { id: "F77", title: "Failure due to duplicate id attribute values", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F77" }
    ],
    ariaPractices: null,
    clientFix: "Ensure all ID attributes are unique within the page. Remove duplicate IDs.",
    badExample: "<div id='label'>Name</div>\n<input aria-labelledby='label'>\n<div id='label'>Email</div>",
    goodExample: "<div id='name-label'>Name</div>\n<input aria-labelledby='name-label'>\n<div id='email-label'>Email</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Headings should not be empty
   * Description: Ensure headings have discernible text
   * @see https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=axeAPI
   */
  "empty-heading": {
    auditorTitle: "Empty heading element",
    ruleType: "best-practice",
    auditorNotes: "Headings must have visible text content to provide meaningful structure for screen reader users. Empty headings create confusion.",
    wcagTechniques: [
      { id: "H42", title: "Using h1-h6 to identify headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H42" },
      { id: "G130", title: "Providing descriptive headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G130" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add text content to the heading or remove the empty heading element.",
    badExample: "<h2></h2>",
    goodExample: "<h2>Section Title</h2>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Table header text should not be empty
   * Description: Ensure table headers have discernible text
   * @see https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=axeAPI
   */
  "empty-table-header": {
    auditorTitle: "Empty table header cell",
    ruleType: "best-practice",
    auditorNotes: "Table header cells (th) must have text content to describe the column or row they represent. Empty headers create confusion.",
    wcagTechniques: [
      { id: "H51", title: "Using table markup to present tabular information", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H51" },
      { id: "H63", title: "Using scope attributes to associate header cells with data cells", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H63" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add descriptive text to the table header or use CSS for visual spacing instead of empty th elements.",
    badExample: "<th></th>",
    goodExample: "<th>Product Name</th>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Elements in the focus order should have an appropriate role
   * Description: Ensure elements in the focus order have a role appropriate for interactive content
   * @see https://dequeuniversity.com/rules/axe/4.11/focus-order-semantics?application=axeAPI
   */
  "focus-order-semantics": {
    auditorTitle: "Focus order does not match semantics",
    ruleType: "experimental",
    auditorNotes: "Focusable elements should have appropriate roles. Elements in the focus order should be interactive.",
    wcagTechniques: [
      { id: "G59", title: "Placing interactive elements in logical order", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G59" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Focus Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/" }],
    clientFix: "Ensure focusable elements have proper roles and are meant to be interactive.",
    badExample: "<div tabindex='0'>Static text</div>",
    goodExample: "<div tabindex='0' role='button'>Clickable</div>\n<!-- or remove tabindex from non-interactive elements -->",
    affectedUsers: ["Keyboard users", "Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Form field must not have multiple label elements
   * Description: Ensure form field does not have multiple label elements
   * @see https://dequeuniversity.com/rules/axe/4.11/form-field-multiple-labels?application=axeAPI
   */
  "form-field-multiple-labels": {
    auditorTitle: "Form field has multiple labels",
    ruleType: "wcag",
    auditorNotes: "Form fields should have only one label. Multiple labels can cause confusion for screen reader users.",
    wcagTechniques: [
      { id: "H44", title: "Using label elements to associate text labels with form controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H44" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Consolidate multiple labels into one, or use aria-labelledby if multiple text elements are needed.",
    badExample: "<label for='email'>Email</label>\n<label for='email'>Required</label>\n<input id='email'>",
    goodExample: "<label for='email'>Email (Required)</label>\n<input id='email'>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Frames with focusable content must not have tabindex=-1
   * Description: Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1
   * @see https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=axeAPI
   */
  "frame-focusable-content": {
    auditorTitle: "Frame with focusable content has negative tabindex",
    ruleType: "wcag",
    auditorNotes: "Frames or iframes containing focusable content should not have tabindex='-1', as this prevents keyboard access to the content.",
    wcagTechniques: [
      { id: "H64", title: "Using title attribute of frame and iframe elements", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H64" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove tabindex='-1' from frames that contain interactive content.",
    badExample: "<iframe tabindex='-1' src='form.html'></iframe>",
    goodExample: "<iframe src='form.html' title='Contact Form'></iframe>",
    affectedUsers: ["Keyboard users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Frames should be tested with axe-core
   * Description: Ensure <iframe> and <frame> elements contain the axe-core script
   * @see https://dequeuniversity.com/rules/axe/4.11/frame-tested?application=axeAPI
   */
  "frame-tested": {
    auditorTitle: "Frame content not tested",
    ruleType: "best-practice",
    auditorNotes: "This is an informational rule indicating that iframe content could not be fully tested. Manual testing of frame content is recommended.",
    wcagTechniques: [
      { id: "H64", title: "Using title attribute of frame and iframe elements", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H64" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Manually test iframe content for accessibility. Ensure each iframe has a descriptive title attribute.",
    badExample: "<!-- iframe content not scanned -->",
    goodExample: "<iframe src='content.html' title='Product Description'></iframe>",
    affectedUsers: ["All users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Frames must have an accessible name
   * Description: Ensure <iframe> and <frame> elements have an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/frame-title?application=axeAPI
   */
  "frame-title": {
    auditorTitle: "Frame missing accessible name",
    ruleType: "wcag",
    auditorNotes: "iframe and frame elements must have title attributes describing their content for screen reader users.",
    wcagTechniques: [
      { id: "H64", title: "Using title attribute of frame and iframe elements", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H64" },
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add title attribute or aria-label to describe the frame's content.",
    badExample: "<iframe src='/map.html'></iframe>",
    goodExample: "<iframe src='/map.html' title='Location Map'></iframe>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Frames must have a unique title attribute
   * Description: Ensure <iframe> and <frame> elements contain a unique title attribute
   * @see https://dequeuniversity.com/rules/axe/4.11/frame-title-unique?application=axeAPI
   */
  "frame-title-unique": {
    auditorTitle: "Frame titles not unique",
    ruleType: "wcag",
    auditorNotes: "Multiple frames with the same title can confuse screen reader users trying to navigate between them.",
    wcagTechniques: [
      { id: "H64", title: "Using title attribute of frame and iframe elements", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H64" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Give each iframe a unique, descriptive title that distinguishes it from other frames.",
    badExample: "<iframe title='Content' src='page1.html'></iframe>\n<iframe title='Content' src='page2.html'></iframe>",
    goodExample: "<iframe title='Product Details' src='page1.html'></iframe>\n<iframe title='Reviews' src='page2.html'></iframe>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Heading levels should only increase by one
   * Description: Ensure the order of headings is semantically correct
   * @see https://dequeuniversity.com/rules/axe/4.11/heading-order?application=axeAPI
   */
  "heading-order": {
    auditorTitle: "Heading levels out of order",
    ruleType: "best-practice",
    auditorNotes: "Headings should follow a logical hierarchy (h1 > h2 > h3). Skipping levels or going backwards breaks the document outline for screen readers. This is a best practice, not a WCAG failure.",
    wcagTechniques: [
      { id: "H42", title: "Using h1-h6 to identify headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H42" },
      { id: "G130", title: "Providing descriptive headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G130" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Hierarchical Headings", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/hierarchical-headings.html" }],
    clientFix: "Restructure headings to follow proper nesting. Use CSS for visual styling instead of heading tags.",
    badExample: "<h1>Title</h1>\n<h3>Section</h3>\n<!-- skipped h2 -->",
    goodExample: "<h1>Title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Hidden content on the page should be analyzed
   * Description: Inform users about hidden content.
   * @see https://dequeuniversity.com/rules/axe/4.11/hidden-content?application=axeAPI
   */
  "hidden-content": {
    auditorTitle: "Hidden content detected",
    ruleType: "experimental",
    auditorNotes: "This is an informational rule noting content that is visually hidden. Ensure hidden content is appropriately marked for screen readers.",
    wcagTechniques: [
      { id: "ARIA4", title: "Using aria-hidden to hide content", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Review hidden content. If it should be accessible to screen readers, use visually hidden CSS. If decorative, keep aria-hidden.",
    badExample: "<div style='display: none;'>Important notice</div>",
    goodExample: "<div class='visually-hidden'>Important notice</div>\n<!-- or -->\n<div aria-hidden='true'>Decorative icon</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: <html> element must have a lang attribute
   * Description: Ensure every HTML document has a lang attribute
   * @see https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=axeAPI
   */
  "html-has-lang": {
    auditorTitle: "Page language not set",
    ruleType: "wcag",
    auditorNotes: "The html element must have a lang attribute with a valid language code. This enables screen readers to pronounce content correctly.",
    wcagTechniques: [
      { id: "H57", title: "Using language attributes on the html element", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H57" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add lang attribute to the html element with the appropriate language code (e.g., 'en' for English, 'sv' for Swedish).",
    badExample: "<html>",
    goodExample: "<html lang='en'>\n<html lang='sv'>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <html> element must have a valid value for the lang attribute
   * Description: Ensure the lang attribute of the <html> element has a valid value
   * @see https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=axeAPI
   */
  "html-lang-valid": {
    auditorTitle: "Invalid HTML lang attribute",
    ruleType: "wcag",
    auditorNotes: "The lang attribute must have a valid BCP 47 language code. Invalid codes are ignored by assistive technologies.",
    wcagTechniques: [
      { id: "H57", title: "Using language attributes on the html element", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H57" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Use a valid BCP 47 language code (e.g., 'en', 'en-US', 'sv', 'fr').",
    badExample: "<html lang='english'>",
    goodExample: "<html lang='en'>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: HTML elements with lang and xml:lang must have the same base language
   * Description: Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page
   * @see https://dequeuniversity.com/rules/axe/4.11/html-xml-lang-mismatch?application=axeAPI
   */
  "html-xml-lang-mismatch": {
    auditorTitle: "HTML lang and xml:lang mismatch",
    ruleType: "wcag",
    auditorNotes: "When both lang and xml:lang attributes are present, they must have the same value. Mismatched values cause confusion for assistive technologies.",
    wcagTechniques: [
      { id: "H57", title: "Using language attributes on the html element", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H57" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure lang and xml:lang attributes have identical values on the html element.",
    badExample: "<html lang='en' xml:lang='fr'>",
    goodExample: "<html lang='en' xml:lang='en'>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Links with the same name must have a similar purpose
   * Description: Ensure that links with the same accessible name serve a similar purpose
   * @see https://dequeuniversity.com/rules/axe/4.11/identical-links-same-purpose?application=axeAPI
   */
  "identical-links-same-purpose": {
    auditorTitle: "Identical links with different purposes",
    ruleType: "wcag",
    auditorNotes: "Links with the same text should serve a similar purpose. Different destinations with identical text can confuse users.",
    wcagTechniques: [
      { id: "G91", title: "Providing link text that describes the purpose", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G91" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure links with identical text go to similar destinations, or use different link text to clarify the destination.",
    badExample: "<a href='/product-1'>Learn more</a>\n<a href='/product-2'>Learn more</a>",
    goodExample: "<a href='/product-1'>Learn more about Product A</a>\n<a href='/product-2'>Learn more about Product B</a>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Images must have alternative text
   * Description: Ensure <img> elements have alternative text or a role of none or presentation
   * @see https://dequeuniversity.com/rules/axe/4.11/image-alt?application=axeAPI
   */
  "image-alt": {
    auditorTitle: "Images missing alt text",
    ruleType: "wcag",
    auditorNotes: "Check decorative images use empty alt (alt=\"\"). Check complex images (charts, diagrams) have long descriptions via aria-describedby or adjacent text.",
    wcagTechniques: [
      { id: "H37", title: "Using alt attributes on img elements", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H37" },
      { id: "H67", title: "Using null alt text and no title attribute", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H67" },
      { id: "ARIA10", title: "Using aria-labelledby to provide a text alternative for non-text content", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10" }
    ],
    wcagFailures: [
      { id: "F65", title: "Failure due to omitting the alt attribute", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F65" }
    ],
    ariaPractices: null,
    clientFix: "Add alt='description' to all <img> elements. Use alt='' for purely decorative images. For complex images, provide detailed descriptions via aria-describedby or adjacent text.",
    badExample: "<img src='logo.png'>",
    goodExample: "<img src='logo.png' alt='Company Logo'>\n<img src='decorative-border.png' alt=''>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities", "Users with slow internet connections"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Alternative text of images should not be repeated as text
   * Description: Ensure image alternative is not repeated as text
   * @see https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=axeAPI
   */
  "image-redundant-alt": {
    auditorTitle: "Alt text repeats visible text",
    ruleType: "best-practice",
    auditorNotes: "When adjacent text already describes the image, alt should be empty (alt='') to avoid repetitive announcements for screen reader users. This is a best practice, not a WCAG failure.",
    wcagTechniques: [
      { id: "H67", title: "Using null alt text and no title attribute", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H67" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "If the image is decorative or the adjacent text already describes it, use alt=''. Do not repeat the same text in both the alt attribute and adjacent content.",
    badExample: "<img src='chart.png' alt='Sales increased 50%'>\n<p>Sales increased 50%</p>",
    goodExample: "<img src='chart.png' alt=''>\n<p>Sales increased 50%</p>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Input buttons must have discernible text
   * Description: Ensure input buttons have discernible text
   * @see https://dequeuniversity.com/rules/axe/4.11/input-button-name?application=axeAPI
   */
  "input-button-name": {
    auditorTitle: "Inputs without accessible names",
    ruleType: "wcag",
    auditorNotes: "Input type='button', 'submit', or 'reset' must have a value attribute, aria-label, or aria-labelledby to be accessible.",
    wcagTechniques: [
      { id: "H91", title: "Using HTML form controls and links", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H91" },
      { id: "ARIA16", title: "Using aria-labelledby to name user interface controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add a value attribute with the button text, or use aria-label to describe the button's action.",
    badExample: "<input type='submit'>",
    goodExample: "<input type='submit' value='Send Message'>\n<input type='button' aria-label='Search products'>",
    affectedUsers: ["Screen reader users", "Speech recognition users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Image buttons must have alternative text
   * Description: Ensure <input type="image"> elements have alternative text
   * @see https://dequeuniversity.com/rules/axe/4.11/input-image-alt?application=axeAPI
   */
  "input-image-alt": {
    auditorTitle: "Image button missing alt text",
    ruleType: "wcag",
    auditorNotes: "Input type='image' must have alt text describing the button's function, as the image itself is the button content.",
    wcagTechniques: [
      { id: "H36", title: "Using alt attributes on image submit buttons", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H36" },
      { id: "H91", title: "Using HTML form controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H91" }
    ],
    wcagFailures: [
      { id: "F65", title: "Failure due to missing alt on image button", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F65" }
    ],
    ariaPractices: null,
    clientFix: "Add alt attribute describing the button action, or use aria-label if the image conveys meaning.",
    badExample: "<input type='image' src='search-icon.png'>",
    goodExample: "<input type='image' src='search-icon.png' alt='Search'>",
    affectedUsers: ["Screen reader users", "Users when images fail to load"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Form elements must have labels
   * Description: Ensure every form element has a label
   * @see https://dequeuniversity.com/rules/axe/4.11/label?application=axeAPI
   */
  "label": {
    auditorTitle: "Form fields missing labels",
    ruleType: "wcag",
    auditorNotes: "Form inputs must have an associated <label> element, aria-label, aria-labelledby, or title attribute. Placeholder alone is not sufficient.",
    wcagTechniques: [
      { id: "H44", title: "Using label elements to associate text labels with form controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H44" },
      { id: "ARIA9", title: "Using aria-labelledby to concatenate a label from several text nodes", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA9" },
      { id: "ARIA14", title: "Using aria-label to provide an invisible label", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to a missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: null,
    clientFix: "Wrap the input with a <label> element or use the for attribute to associate the label. Alternatively use aria-label or aria-labelledby.",
    badExample: "<input type='text' placeholder='Name'>",
    goodExample: "<label for='name'>Full Name</label>\n<input type='text' id='name'>\n\n<input type='text' aria-label='Search query'>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Elements must have their visible text as part of their accessible name
   * Description: Ensure that elements labelled through their content must have their visible text as part of their accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/label-content-name-mismatch?application=axeAPI
   */
  "label-content-name-mismatch": {
    auditorTitle: "Label text doesn't match accessible name",
    ruleType: "experimental",
    auditorNotes: "The visible text of a control should be included in its accessible name. This helps speech recognition users activate the control.",
    wcagTechniques: [
      { id: "ARIA8", title: "Using aria-label for link purpose", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8" }
    ],
    wcagFailures: [
      { id: "F96", title: "Failure due to label text not matching accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F96" }
    ],
    ariaPractices: null,
    clientFix: "Ensure the accessible name includes the visible text of the element.",
    badExample: "<button aria-label='Close'>X</button>",
    goodExample: "<button aria-label='Close dialog'>Close</button>",
    affectedUsers: ["Speech recognition users", "Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Form elements should have a visible label
   * Description: Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
   * @see https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=axeAPI
   */
  "label-title-only": {
    auditorTitle: "Form field has only title attribute label",
    ruleType: "best-practice",
    auditorNotes: "Using only the title attribute for form field labels creates problems. Not all assistive technologies expose title consistently.",
    wcagTechniques: [
      { id: "H65", title: "Using the title attribute to identify form controls", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H65" },
      { id: "H44", title: "Using label elements to associate text labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H44" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Use a visible label element or aria-label instead of relying only on title attribute.",
    badExample: "<input type='text' title='Search'>",
    goodExample: "<label for='search'>Search</label>\n<input id='search' type='text'>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Banner landmark should not be contained in another landmark
   * Description: Ensure the banner landmark is at top level
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=axeAPI
   */
  "landmark-banner-is-top-level": {
    auditorTitle: "Banner landmark nested inside another landmark",
    ruleType: "best-practice",
    auditorNotes: "The banner landmark (header element or role='banner') should be at the top level, not nested inside other landmarks.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Move the header element outside of other landmark regions like nav, main, or aside.",
    badExample: "<main>\n  <header>...</header>\n</main>",
    goodExample: "<header>...</header>\n<main>...</main>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Aside should not be contained in another landmark
   * Description: Ensure the complementary landmark or aside is at top level
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=axeAPI
   */
  "landmark-complementary-is-top-level": {
    auditorTitle: "Complementary landmark nested inside another landmark",
    ruleType: "best-practice",
    auditorNotes: "The complementary landmark (aside element or role='complementary') should be at the top level, not nested inside main or other landmarks.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Move the aside element outside of the main landmark.",
    badExample: "<main>\n  <aside>Sidebar</aside>\n</main>",
    goodExample: "<main>...</main>\n<aside>Sidebar</aside>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Contentinfo landmark should not be contained in another landmark
   * Description: Ensure the contentinfo landmark is at top level
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=axeAPI
   */
  "landmark-contentinfo-is-top-level": {
    auditorTitle: "Contentinfo landmark nested inside another landmark",
    ruleType: "best-practice",
    auditorNotes: "The contentinfo landmark (footer element or role='contentinfo') should be at the top level, not nested inside other landmarks.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Move the footer element outside of other landmark regions.",
    badExample: "<main>\n  <footer>...</footer>\n</main>",
    goodExample: "<main>...</main>\n<footer>...</footer>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Main landmark should not be contained in another landmark
   * Description: Ensure the main landmark is at top level
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=axeAPI
   */
  "landmark-main-is-top-level": {
    auditorTitle: "Main landmark nested inside another landmark",
    ruleType: "best-practice",
    auditorNotes: "The main landmark should be at the top level, not nested inside other landmarks like nav, aside, or article.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Move the main element outside of other landmark regions.",
    badExample: "<nav>\n  <main>...</main>\n</nav>",
    goodExample: "<nav>...</nav>\n<main>...</main>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Document should not have more than one banner landmark
   * Description: Ensure the document has at most one banner landmark
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=axeAPI
   */
  "landmark-no-duplicate-banner": {
    auditorTitle: "Multiple banner landmarks found",
    ruleType: "best-practice",
    auditorNotes: "There should be only one banner landmark per page. Multiple banners can confuse screen reader landmark navigation.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Consolidate multiple header elements into one, or use div elements for additional header-like sections.",
    badExample: "<header>Main header</header>\n<header>Sub header</header>",
    goodExample: "<header>All header content</header>\n<div class='sub-header'>Sub content</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Document should not have more than one contentinfo landmark
   * Description: Ensure the document has at most one contentinfo landmark
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=axeAPI
   */
  "landmark-no-duplicate-contentinfo": {
    auditorTitle: "Multiple contentinfo landmarks found",
    ruleType: "best-practice",
    auditorNotes: "There should be only one contentinfo landmark per page. Multiple footers can confuse screen reader landmark navigation.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Consolidate multiple footer elements into one, or use div elements for additional footer-like sections.",
    badExample: "<footer>Main footer</footer>\n<footer>Secondary footer</footer>",
    goodExample: "<footer>All footer content</footer>\n<div class='sub-footer'>Additional info</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Document should not have more than one main landmark
   * Description: Ensure the document has at most one main landmark
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=axeAPI
   */
  "landmark-no-duplicate-main": {
    auditorTitle: "Multiple main landmarks found",
    ruleType: "best-practice",
    auditorNotes: "There should be only one main landmark per page. Multiple main regions confuse screen reader navigation.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Consolidate content into a single main element or use other region roles for secondary content.",
    badExample: "<main>Content 1</main>\n<main>Content 2</main>",
    goodExample: "<main>All main content</main>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Document should have one main landmark
   * Description: Ensure the document has a main landmark
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=axeAPI
   */
  "landmark-one-main": {
    auditorTitle: "No main landmark found",
    ruleType: "best-practice",
    auditorNotes: "Pages should have one main landmark to identify the primary content area for screen reader navigation.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" },
      { id: "H69", title: "Using the main element", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H69" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Wrap the primary content in a <main> element or add role='main' to the content container.",
    badExample: "<div id='content'>...</div>",
    goodExample: "<main>Primary content</main>\n<!-- or -->\n<div role='main'>Primary content</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
   * Description: Ensure landmarks are unique
   * @see https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=axeAPI
   */
  "landmark-unique": {
    auditorTitle: "Landmark not unique",
    ruleType: "best-practice",
    auditorNotes: "Landmarks of the same type should be distinguishable by an accessible name (aria-label or aria-labelledby) when multiple exist.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" }],
    clientFix: "Add aria-label to distinguish multiple landmarks of the same type.",
    badExample: "<nav>Main nav</nav>\n<nav>Footer nav</nav>",
    goodExample: "<nav aria-label='Main'>...</nav>\n<nav aria-label='Footer'>...</nav>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Links must be distinguishable without relying on color
   * Description: Ensure links are distinguished from surrounding text in a way that does not rely on color
   * @see https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=axeAPI
   */
  "link-in-text-block": {
    auditorTitle: "Links not distinguishable by color alone",
    ruleType: "wcag",
    auditorNotes: "Links must have a visual indicator beyond color (underline, bold, icon, or sufficient luminosity contrast) to be identifiable by colorblind users.",
    wcagTechniques: [
      { id: "G182", title: "Ensuring adequate contrast ratio for text", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G182" },
      { id: "G183", title: "Using a contrast ratio of 3:1 with surrounding text", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G183" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add underline, bold, border, or icon to links. Ensure 3:1 contrast ratio between link text and surrounding body text color.",
    badExample: "<p>Visit our <a href='...' style='color: blue;'>website</a> today.</p>",
    goodExample: "<p>Visit our <a href='...' style='color: blue; text-decoration: underline;'>website</a> today.</p>",
    affectedUsers: ["Colorblind users", "Users with low vision"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Links must have discernible text
   * Description: Ensure links have discernible text
   * @see https://dequeuniversity.com/rules/axe/4.11/link-name?application=axeAPI
   */
  "link-name": {
    auditorTitle: "Links without accessible names",
    ruleType: "wcag",
    auditorNotes: "Links must have discernible text content, aria-label, or aria-labelledby. 'Click here' and 'Read more' are poor link text without context.",
    wcagTechniques: [
      { id: "H30", title: "Providing link text that describes the purpose of a link", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H30" },
      { id: "ARIA8", title: "Using aria-label for link purpose", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure all links have visible text or an aria-label that describes the link destination. Avoid generic text like 'click here'.",
    badExample: "<a href='/about'><img src='arrow.png' alt=''></a>",
    goodExample: "<a href='/about'>About Us</a>\n<a href='/contact' aria-label='Contact Support'><img src='icon.png' alt=''></a>",
    affectedUsers: ["Screen reader users", "Speech recognition users", "Users with cognitive disabilities"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
   * Description: Ensure that lists are structured correctly
   * @see https://dequeuniversity.com/rules/axe/4.11/list?application=axeAPI
   */
  "list": {
    auditorTitle: "Lists structured incorrectly",
    ruleType: "wcag",
    auditorNotes: "List elements (ul, ol) must only contain li elements. Improper nesting breaks screen reader list navigation and count announcements.",
    wcagTechniques: [
      { id: "H48", title: "Using ol, ul and dl for lists or groups of links", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H48" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure list elements contain only li elements. Do not wrap other elements directly in ul/ol.",
    badExample: "<ul>\n  <div><li>Item</li></div>\n</ul>",
    goodExample: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <li> elements must be contained in a <ul> or <ol>
   * Description: Ensure <li> elements are used semantically
   * @see https://dequeuniversity.com/rules/axe/4.11/listitem?application=axeAPI
   */
  "listitem": {
    auditorTitle: "List items used incorrectly",
    ruleType: "wcag",
    auditorNotes: "li elements must be direct children of ul, ol, or menu elements. Using li outside proper list structure breaks semantic meaning.",
    wcagTechniques: [
      { id: "H48", title: "Using ol, ul and dl for lists or groups of links", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H48" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Place li elements only as direct children of ul, ol, or menu elements. Do not use li elements outside lists.",
    badExample: "<div>\n  <li>Orphan item</li>\n</div>",
    goodExample: "<ul>\n  <li>Item</li>\n</ul>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <marquee> elements are deprecated and must not be used
   * Description: Ensure <marquee> elements are not used
   * @see https://dequeuniversity.com/rules/axe/4.11/marquee?application=axeAPI
   */
  "marquee": {
    auditorTitle: "Marquee element used",
    ruleType: "wcag",
    auditorNotes: "The marquee element is deprecated and creates scrolling text that can be distracting for users with attention disabilities.",
    wcagTechniques: [
      { id: "G19", title: "Ensuring no component flashes more than 3 times per second", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G19" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove the marquee element. Use CSS animations carefully if movement is needed, with option to pause.",
    badExample: "<marquee>Scrolling text</marquee>",
    goodExample: "<div>Static text content</div>",
    affectedUsers: ["Users with attention disorders", "Users with cognitive disabilities"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Delayed refresh under 20 hours must not be used
   * Description: Ensure <meta http-equiv="refresh"> is not used for delayed refresh
   * @see https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=axeAPI
   */
  "meta-refresh": {
    auditorTitle: "Page auto-refreshes",
    ruleType: "wcag",
    auditorNotes: "Meta refresh redirects the page automatically, which can disorient screen reader users before they finish reading.",
    wcagTechniques: [
      { id: "G198", title: "Providing a way for users to turn off content updates", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G198" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove meta refresh. Use server-side redirects or provide a link with warning for timed redirects.",
    badExample: "<meta http-equiv='refresh' content='30; url=/new-page'>",
    goodExample: "<a href='/new-page'>Continue to new page</a>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Delayed refresh must not be used
   * Description: Ensure <meta http-equiv="refresh"> is not used for delayed refresh
   * @see https://dequeuniversity.com/rules/axe/4.11/meta-refresh-no-exceptions?application=axeAPI
   */
  "meta-refresh-no-exceptions": {
    auditorTitle: "Page auto-refreshes without user control",
    ruleType: "wcag",
    auditorNotes: "Meta refresh with a delay automatically reloads the page, which can disorient users, especially screen reader users. No exceptions version catches all refresh directives.",
    wcagTechniques: [
      { id: "G110", title: "Using an instant client-side redirect", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G110" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove meta refresh tags. If redirect is needed, use HTTP 301/302 redirects or provide user control over the refresh.",
    badExample: "<meta http-equiv='refresh' content='10; url=next.html'>",
    goodExample: "<p>Page has moved. <a href='next.html'>Go to new page</a></p>",
    affectedUsers: ["Screen reader users", "Users with cognitive disabilities"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Zooming and scaling must not be disabled
   * Description: Ensure <meta name="viewport"> does not disable text scaling and zooming
   * @see https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=axeAPI
   */
  "meta-viewport": {
    auditorTitle: "Zoom or scaling restricted",
    ruleType: "wcag",
    auditorNotes: "The viewport meta tag must not disable zoom (user-scalable=no) or set maximum-scale < 2. Users with low vision need to zoom to 200%.",
    wcagTechniques: [
      { id: "G142", title: "Using a technology that has commonly-available user agents that support zoom", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G142" }
    ],
    wcagFailures: [
      { id: "F69", title: "Failure due to not allowing 200% text size", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F69" }
    ],
    ariaPractices: null,
    clientFix: "Ensure viewport meta tag allows zooming. Remove user-scalable=no and ensure maximum-scale is at least 2.0.",
    badExample: "<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'>",
    goodExample: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
    affectedUsers: ["Users with low vision", "Users with cognitive disabilities"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Users should be able to zoom and scale the text up to 500%
   * Description: Ensure <meta name="viewport"> can scale a significant amount
   * @see https://dequeuniversity.com/rules/axe/4.11/meta-viewport-large?application=axeAPI
   */
  "meta-viewport-large": {
    auditorTitle: "Zoom limited to less than 500%",
    ruleType: "best-practice",
    auditorNotes: "Users should be able to zoom up to 500% without horizontal scrolling. This is a WCAG 2.2 best practice for users with low vision.",
    wcagTechniques: [
      { id: "G142", title: "Using a technology that has commonly-available user agents that support zoom", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G142" },
      { id: "G146", title: "Using liquid layout", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G146" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure viewport settings allow 500% zoom. Avoid fixed widths and use responsive design techniques that reflow content.",
    badExample: "<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=2'>",
    goodExample: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
    affectedUsers: ["Users with low vision"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: Interactive controls must not be nested
   * Description: Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
   * @see https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=axeAPI
   */
  "nested-interactive": {
    auditorTitle: "Nested interactive elements",
    ruleType: "wcag",
    auditorNotes: "Interactive controls should not be nested inside other interactive controls. This causes focus and announcement issues.",
    wcagTechniques: [
      { id: "H91", title: "Using HTML form controls and links", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H91" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Button Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/" }],
    clientFix: "Remove nesting. Place interactive elements as siblings, not parent-child.",
    badExample: "<button>\n  Click me\n  <button>Nested button</button>\n</button>",
    goodExample: "<button>Click me</button>\n<button>Second button</button>",
    affectedUsers: ["Keyboard users", "Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: <video> or <audio> elements must not play automatically
   * Description: Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio
   * @see https://dequeuniversity.com/rules/axe/4.11/no-autoplay-audio?application=axeAPI
   */
  "no-autoplay-audio": {
    auditorTitle: "Audio plays automatically",
    ruleType: "wcag",
    auditorNotes: "Audio that plays automatically can interfere with screen reader users and is disruptive. Must have mechanism to pause or stop.",
    wcagTechniques: [
      { id: "G60", title: "Playing a sound that turns off automatically within three seconds", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G60" },
      { id: "G170", title: "Providing a control to turn off audio that plays automatically", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G170" }
    ],
    wcagFailures: [
      { id: "F93", title: "Failure due to audio playing without control", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F93" }
    ],
    ariaPractices: null,
    clientFix: "Remove autoplay or provide controls to pause/stop the audio. Keep auto-playing audio under 3 seconds.",
    badExample: "<audio src='music.mp3' autoplay></audio>",
    goodExample: "<audio src='music.mp3' controls></audio>",
    affectedUsers: ["Screen reader users", "Users with attention disorders"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <object> elements must have alternative text
   * Description: Ensure <object> elements have alternative text
   * @see https://dequeuniversity.com/rules/axe/4.11/object-alt?application=axeAPI
   */
  "object-alt": {
    auditorTitle: "Object missing alternative text",
    ruleType: "wcag",
    auditorNotes: "Object elements must have text content between opening and closing tags that describes the object for screen readers.",
    wcagTechniques: [
      { id: "H27", title: "Providing text alternatives for object elements", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H27" },
      { id: "H46", title: "Using noembed with embed", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H46" }
    ],
    wcagFailures: [
      { id: "F65", title: "Failure due to missing text alternative", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F65" }
    ],
    ariaPractices: null,
    clientFix: "Add text content inside the object element or use aria-label to describe the content.",
    badExample: "<object data='chart.svg'></object>",
    goodExample: "<object data='chart.svg'>Sales chart showing Q1 results</object>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Styled <p> elements must not be used as headings
   * Description: Ensure bold, italic text and font-size is not used to style <p> elements as a heading
   * @see https://dequeuniversity.com/rules/axe/4.11/p-as-heading?application=axeAPI
   */
  "p-as-heading": {
    auditorTitle: "Paragraph styled as heading",
    ruleType: "experimental",
    auditorNotes: "Using paragraph tags with bold or large font to simulate headings breaks document structure for screen reader navigation.",
    wcagTechniques: [
      { id: "H42", title: "Using h1-h6 to identify headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H42" },
      { id: "F43", title: "Failure due to using styles to simulate headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F43" }
    ],
    wcagFailures: [
      { id: "F43", title: "Failure due to using styles to simulate headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F43" }
    ],
    ariaPractices: null,
    clientFix: "Replace styled p elements with actual heading tags (h1-h6). Use CSS for visual styling.",
    badExample: "<p style='font-size: 24px; font-weight: bold;'>Section Title</p>",
    goodExample: "<h2>Section Title</h2>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Page should contain a level-one heading
   * Description: Ensure that the page, or at least one of its frames contains a level-one heading
   * @see https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=axeAPI
   */
  "page-has-heading-one": {
    auditorTitle: "No level-one heading on page",
    ruleType: "best-practice",
    auditorNotes: "Pages should have an h1 heading that describes the page content. This helps screen reader users understand the page purpose.",
    wcagTechniques: [
      { id: "H69", title: "Providing headings at the beginning of sections", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H69" },
      { id: "G130", title: "Providing descriptive headings", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G130" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add an h1 element at the start of the main content describing the page.",
    badExample: "<main>\n  <h2>Products</h2>\n</main>",
    goodExample: "<main>\n  <h1>Our Products</h1>\n</main>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Elements marked as presentational should be consistently ignored
   * Description: Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
   * @see https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=axeAPI
   */
  "presentation-role-conflict": {
    auditorTitle: "Presentational element has interactive attributes",
    ruleType: "best-practice",
    auditorNotes: "Elements with role='presentation' or role='none' should not have global ARIA attributes or tabindex, as this creates a conflict.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove aria-label, aria-describedby, tabindex, or other global ARIA attributes from presentational elements.",
    badExample: "<div role='presentation' aria-label='Header'>...</div>",
    goodExample: "<div role='presentation'>...</div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: All page content should be contained by landmarks
   * Description: Ensure all page content is contained by landmarks
   * @see https://dequeuniversity.com/rules/axe/4.11/region?application=axeAPI
   */
  "region": {
    auditorTitle: "Content not contained by landmarks",
    ruleType: "best-practice",
    auditorNotes: "All content should be within ARIA landmarks (header, nav, main, aside, footer) to help screen reader users navigate the page.",
    wcagTechniques: [
      { id: "ARIA11", title: "Using ARIA landmarks to identify regions of a page", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11" },
      { id: "H69", title: "Providing heading elements at the beginning of each section", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H69" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Landmark Regions", url: "https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/" }],
    clientFix: "Wrap content in semantic HTML5 elements (header, nav, main, aside, footer) which automatically create landmark regions.",
    badExample: "<div>Content without landmarks</div>",
    goodExample: "<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium",
  },

  /**
   * Axe: [role="img"] elements must have alternative text
   * Description: Ensure [role="img"] elements have alternative text
   * @see https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=axeAPI
   */
  "role-img-alt": {
    auditorTitle: "Image role missing alt text",
    ruleType: "wcag",
    auditorNotes: "Elements with role='img' must have aria-label or aria-labelledby to provide an accessible name for the image.",
    wcagTechniques: [
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" },
      { id: "ARIA10", title: "Using aria-labelledby for text alternative", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Add aria-label or aria-labelledby to describe the image content.",
    badExample: "<div role='img' style='background-image: url(logo.png)'></div>",
    goodExample: "<div role='img' aria-label='Company Logo' style='background-image: url(logo.png)'></div>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: scope attribute should be used correctly
   * Description: Ensure the scope attribute is used correctly on tables
   * @see https://dequeuniversity.com/rules/axe/4.11/scope-attr-valid?application=axeAPI
   */
  "scope-attr-valid": {
    auditorTitle: "Invalid scope attribute on table header",
    ruleType: "best-practice",
    auditorNotes: "The scope attribute on th elements must be either 'row' or 'col'. Invalid values are ignored by assistive technologies.",
    wcagTechniques: [
      { id: "H63", title: "Using scope attributes to associate header cells", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H63" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Use scope='row' for row headers and scope='col' for column headers.",
    badExample: "<th scope='header'>Name</th>",
    goodExample: "<th scope='col'>Name</th>\n<th scope='row'>John</th>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Scrollable region must have keyboard access
   * Description: Ensure elements that have scrollable content are accessible by keyboard in Safari
   * @see https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=axeAPI
   */
  "scrollable-region-focusable": {
    auditorTitle: "Scrollable region not keyboard accessible",
    ruleType: "wcag",
    auditorNotes: "Scrollable regions must be focusable so keyboard users can scroll the content using arrow keys.",
    wcagTechniques: [
      { id: "G202", title: "Ensuring keyboard control for all functionality", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G202" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Scrollable Region Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/region.html" }],
    clientFix: "Add tabindex='0' to the scrollable container to make it focusable.",
    badExample: "<div style='overflow: scroll; height: 200px;'>...</div>",
    goodExample: "<div tabindex='0' style='overflow: scroll; height: 200px;'>...</div>",
    affectedUsers: ["Keyboard users", "Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Select element must have an accessible name
   * Description: Ensure select element has an accessible name
   * @see https://dequeuniversity.com/rules/axe/4.11/select-name?application=axeAPI
   */
  "select-name": {
    auditorTitle: "Select element missing accessible name",
    ruleType: "wcag",
    auditorNotes: "Select dropdowns must have associated labels so users know what is being selected.",
    wcagTechniques: [
      { id: "H44", title: "Using label elements to associate text labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H44" },
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Select Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" }],
    clientFix: "Wrap the select with a label or use the for attribute to associate the label.",
    badExample: "<select>...</select>",
    goodExample: "<label for='country'>Country</label>\n<select id='country'>...</select>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Server-side image maps must not be used
   * Description: Ensure that server-side image maps are not used
   * @see https://dequeuniversity.com/rules/axe/4.11/server-side-image-map?application=axeAPI
   */
  "server-side-image-map": {
    auditorTitle: "Server-side image map used",
    ruleType: "wcag",
    auditorNotes: "Server-side image maps are not keyboard accessible because the coordinates are processed on the server. Use client-side image maps instead.",
    wcagTechniques: [
      { id: "H24", title: "Providing text alternatives for image map areas", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H24" },
      { id: "F2", title: "Failure due to server-side image maps", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F2" }
    ],
    wcagFailures: [
      { id: "F2", title: "Failure due to server-side image maps", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F2" }
    ],
    ariaPractices: null,
    clientFix: "Replace with a client-side image map using map and area elements with proper alt text.",
    badExample: "<img src='map.cgi' ismap>",
    goodExample: "<img src='map.png' usemap='#map' alt='Site Map'>\n<map name='map'>\n  <area shape='rect' coords='0,0,100,100' href='page.html' alt='Home'>\n</map>",
    affectedUsers: ["Keyboard users", "Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: The skip-link target should exist and be focusable
   * Description: Ensure all skip links have a focusable target
   * @see https://dequeuniversity.com/rules/axe/4.11/skip-link?application=axeAPI
   */
  "skip-link": {
    auditorTitle: "Skip link target missing or not focusable",
    ruleType: "best-practice",
    auditorNotes: "Skip links must have a valid target that exists and is focusable so keyboard users can bypass repetitive content.",
    wcagTechniques: [
      { id: "G1", title: "Adding a link at the top of each page to go directly to the main content", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G1" },
      { id: "G123", title: "Adding a link at the beginning of a block of repeated content", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G123" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Skip Link Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/skiplink.html" }],
    clientFix: "Ensure the skip link target exists and has id matching the href, or add tabindex='-1' to make it focusable.",
    badExample: "<a href='#main'>Skip to main</a>\n<div id='main'>Content</div>",
    goodExample: "<a href='#main'>Skip to main</a>\n<main id='main' tabindex='-1'>Content</main>",
    affectedUsers: ["Keyboard users", "Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Summary elements must have discernible text
   * Description: Ensure summary elements have discernible text
   * @see https://dequeuniversity.com/rules/axe/4.11/summary-name?application=axeAPI
   */
  "summary-name": {
    auditorTitle: "Details summary missing accessible name",
    ruleType: "wcag",
    auditorNotes: "The summary element inside details must have text content to describe what will be expanded/collapsed.",
    wcagTechniques: [
      { id: "ARIA14", title: "Using aria-label to provide an invisible label", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14" }
    ],
    wcagFailures: [
      { id: "F68", title: "Failure due to missing accessible name", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F68" }
    ],
    ariaPractices: [{ pattern: "Disclosure Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/" }],
    clientFix: "Add visible text inside the summary element describing the details content.",
    badExample: "<details>\n  <summary></summary>\n  <p>Content</p>\n</details>",
    goodExample: "<details>\n  <summary>More Information</summary>\n  <p>Content details here</p>\n</details>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <svg> elements with an img role must have alternative text
   * Description: Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
   * @see https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=axeAPI
   */
  "svg-img-alt": {
    auditorTitle: "SVG image missing alternative text",
    ruleType: "wcag",
    auditorNotes: "SVG elements with role='img' must have aria-label, aria-labelledby, or title element for accessible name.",
    wcagTechniques: [
      { id: "ARIA6", title: "Using aria-label to provide labels", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6" },
      { id: "ARIA10", title: "Using aria-labelledby for text alternative", url: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10" }
    ],
    wcagFailures: [
      { id: "F65", title: "Failure due to missing text alternative", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F65" }
    ],
    ariaPractices: [{ pattern: "SVG Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/images/" }],
    clientFix: "Add aria-label, aria-labelledby, or include a title element inside the SVG to describe the image.",
    badExample: "<svg role='img'><path d='...'/></svg>",
    goodExample: "<svg role='img' aria-label='Shopping cart'><path d='...'/></svg>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Elements should not have tabindex greater than zero
   * Description: Ensure tabindex attribute values are not greater than 0
   * @see https://dequeuniversity.com/rules/axe/4.11/tabindex?application=axeAPI
   */
  "tabindex": {
    auditorTitle: "Positive tabindex value used",
    ruleType: "best-practice",
    auditorNotes: "Positive tabindex values change the natural tab order and can confuse keyboard users. Use tabindex='0' for focusable elements or tabindex='-1' for programmatically focusable elements.",
    wcagTechniques: [
      { id: "G59", title: "Placing the interactive elements in an order that follows sequences and relationships", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G59" },
      { id: "F44", title: "Using tabindex to create a custom tab order", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F44" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove positive tabindex values. Use tabindex='0' for elements that should be in the natural tab order.",
    badExample: "<button tabindex='5'>Click</button>",
    goodExample: "<button tabindex='0'>Click</button>\n<!-- or -->\n<div tabindex='-1' id='focus-target'>...</div>",
    affectedUsers: ["Keyboard users", "Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Tables should not have the same summary and caption
   * Description: Ensure the <caption> element does not contain the same text as the summary attribute
   * @see https://dequeuniversity.com/rules/axe/4.11/table-duplicate-name?application=axeAPI
   */
  "table-duplicate-name": {
    auditorTitle: "Table caption duplicates summary attribute",
    ruleType: "best-practice",
    auditorNotes: "The caption element should not contain the same text as the summary attribute. This creates redundant announcements for screen reader users.",
    wcagTechniques: [
      { id: "H39", title: "Using caption elements to associate data table captions with data tables", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H39" },
      { id: "H73", title: "Using the summary attribute of the table element", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H73" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Remove the summary attribute if caption provides sufficient description, or make them different - use caption for title and summary for detailed description.",
    badExample: "<table summary='Sales data'>\n  <caption>Sales data</caption>",
    goodExample: "<table summary='Quarterly sales figures for all regions'>\n  <caption>Sales Data</caption>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Data or header cells must not be used to give caption to a data table.
   * Description: Ensure that tables with a caption use the <caption> element.
   * @see https://dequeuniversity.com/rules/axe/4.11/table-fake-caption?application=axeAPI
   */
  "table-fake-caption": {
    auditorTitle: "Table uses fake caption instead of caption element",
    ruleType: "experimental",
    auditorNotes: "Using table cells or other elements to create a caption is not properly associated with the table. Use the caption element instead.",
    wcagTechniques: [
      { id: "H39", title: "Using caption elements to associate data table captions", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H39" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Replace styled cells or divs used as captions with the actual caption element as the first child of table.",
    badExample: "<table>\n  <tr><td colspan='2'>Sales Table</td></tr>",
    goodExample: "<table>\n  <caption>Sales Table</caption>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: All touch targets must be 24px large, or leave sufficient space
   * Description: Ensure touch targets have sufficient size and space
   * @see https://dequeuniversity.com/rules/axe/4.11/target-size?application=axeAPI
   */
  "target-size": {
    auditorTitle: "Touch target too small or too close",
    ruleType: "wcag",
    auditorNotes: "Touch targets should be at least 24x24 CSS pixels, or have sufficient spacing to prevent accidental activation. This is a WCAG 2.2 best practice.",
    wcagTechniques: [
      { id: "G218", title: "Ensuring target size of 24 by 24 CSS pixels", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G218" },
      { id: "C42", title: "Using min-height and min-width to ensure sufficient target spacing", url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C42" }
    ],
    wcagFailures: null,
    ariaPractices: null,
    clientFix: "Ensure touch targets are at least 24x24 pixels, or if smaller, ensure 24px spacing between adjacent targets.",
    badExample: "<button style='width: 20px; height: 20px'>X</button>",
    goodExample: "<button style='min-width: 24px; min-height: 24px; padding: 4px'>X</button>",
    affectedUsers: ["Touch device users", "Users with motor disabilities"],
    fixDifficulty: "Easy",
  },

  /**
   * Axe: Non-empty <td> elements in larger <table> must have an associated table header
   * Description: Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers
   * @see https://dequeuniversity.com/rules/axe/4.11/td-has-header?application=axeAPI
   */
  "td-has-header": {
    auditorTitle: "Table cell missing header association",
    ruleType: "experimental",
    auditorNotes: "Large tables (3x3 or larger) must have th elements to describe the data. Screen readers need headers to understand table structure.",
    wcagTechniques: [
      { id: "H51", title: "Using table markup to present tabular information", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H51" },
      { id: "H63", title: "Using scope attributes to associate header cells", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H63" }
    ],
    wcagFailures: null,
    ariaPractices: [{ pattern: "Table Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/table/" }],
    clientFix: "Add th elements with scope='col' for column headers and scope='row' for row headers.",
    badExample: "<table>\n  <tr><td></td><td>A</td>...</tr>",
    goodExample: "<table>\n  <tr><th scope='col'>Name</th>...</tr>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: Table cell headers attributes must refer to other <th> elements in the same table
   * Description: Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table
   * @see https://dequeuniversity.com/rules/axe/4.11/td-headers-attr?application=axeAPI
   */
  "td-headers-attr": {
    auditorTitle: "Invalid headers attribute on table cell",
    ruleType: "wcag",
    auditorNotes: "The headers attribute must reference valid th IDs in the same table. Invalid references break the association between data and headers.",
    wcagTechniques: [
      { id: "H43", title: "Using id and headers attributes to associate data cells", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H43" }
    ],
    wcagFailures: [
      { id: "F91", title: "Failure due to invalid headers attribute", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F91" }
    ],
    ariaPractices: null,
    clientFix: "Ensure headers attribute references valid th element IDs that exist in the same table.",
    badExample: "<td headers='nonexistent-id'>Data</td>",
    goodExample: "<th id='name'>Name</th>\n<td headers='name'>John</td>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: Table headers in a data table must refer to data cells
   * Description: Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe
   * @see https://dequeuniversity.com/rules/axe/4.11/th-has-data-cells?application=axeAPI
   */
  "th-has-data-cells": {
    auditorTitle: "Table header with no data cells",
    ruleType: "wcag",
    auditorNotes: "Table headers must describe actual data cells. Headers without associated data cells may indicate a table structure error.",
    wcagTechniques: [
      { id: "H51", title: "Using table markup to present tabular information", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H51" },
      { id: "H63", title: "Using scope attributes to associate header cells", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H63" }
    ],
    wcagFailures: [
      { id: "F91", title: "Failure due to orphaned table headers", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F91" }
    ],
    ariaPractices: [{ pattern: "Table Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/table/" }],
    clientFix: "Ensure each th element has corresponding td cells that it describes.",
    badExample: "<th>Orphan header</th>",
    goodExample: "<th scope='col'>Name</th>\n<td>John</td>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Medium"
  },

  /**
   * Axe: lang attribute must have a valid value
   * Description: Ensure lang attributes have valid values
   * @see https://dequeuniversity.com/rules/axe/4.11/valid-lang?application=axeAPI
   */
  "valid-lang": {
    auditorTitle: "Invalid language code",
    ruleType: "wcag",
    auditorNotes: "The lang attribute must have a valid BCP 47 language code. Invalid codes prevent proper pronunciation by screen readers.",
    wcagTechniques: [
      { id: "H58", title: "Using language attributes to identify changes", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H58" }
    ],
    wcagFailures: [
      { id: "F69", title: "Failure due to invalid lang code", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F69" }
    ],
    ariaPractices: null,
    clientFix: "Use valid BCP 47 language codes. Common codes: en, en-US, sv, fr, de, es.",
    badExample: "<span lang='swedish'>Hej</span>",
    goodExample: "<span lang='sv'>Hej</span>",
    affectedUsers: ["Screen reader users"],
    fixDifficulty: "Easy"
  },

  /**
   * Axe: <video> elements must have captions
   * Description: Ensure <video> elements have captions
   * @see https://dequeuniversity.com/rules/axe/4.11/video-caption?application=axeAPI
   */
  "video-caption": {
    auditorTitle: "Video missing captions",
    ruleType: "wcag",
    auditorNotes: "Videos with audio must have synchronized captions for deaf/hard-of-hearing users. Captions include dialogue and important sounds.",
    wcagTechniques: [
      { id: "G93", title: "Providing open captions", url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G93" },
      { id: "H95", title: "Using the track element to provide captions", url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H95" }
    ],
    wcagFailures: [
      { id: "F75", title: "Failure due to missing captions", url: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F75" }
    ],
    ariaPractices: null,
    clientFix: "Add track element with kind='captions' to the video, or use a captioning service.",
    badExample: "<video src='video.mp4' controls></video>",
    goodExample: "<video src='video.mp4' controls>\n  <track kind='captions' src='captions.vtt' srclang='en' label='English'>\n</video>",
    affectedUsers: ["Deaf users", "Hard-of-hearing users"],
    fixDifficulty: "Hard"
  }
};
