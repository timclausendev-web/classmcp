/**
 * Pre-defined Tailwind class patterns for AI code generation
 * These semantic names map to full utility class strings
 */

export interface ClassPattern {
  name: string;
  classes: string;
  description: string;
  category: string;
}

export const patterns: ClassPattern[] = [
  // ============================================
  // BUTTONS
  // ============================================
  {
    name: "btn",
    classes: "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    description: "Base button styles",
    category: "buttons"
  },
  {
    name: "btn-primary",
    classes: "inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
    description: "Primary action button",
    category: "buttons"
  },
  {
    name: "btn-secondary",
    classes: "inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors",
    description: "Secondary action button",
    category: "buttons"
  },
  {
    name: "btn-success",
    classes: "inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors",
    description: "Success/confirm button",
    category: "buttons"
  },
  {
    name: "btn-danger",
    classes: "inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors",
    description: "Danger/delete button",
    category: "buttons"
  },
  {
    name: "btn-outline",
    classes: "inline-flex items-center justify-center px-4 py-2 bg-transparent text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors",
    description: "Outlined button",
    category: "buttons"
  },
  {
    name: "btn-ghost",
    classes: "inline-flex items-center justify-center px-4 py-2 bg-transparent text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors",
    description: "Ghost/text button",
    category: "buttons"
  },
  {
    name: "btn-sm",
    classes: "inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
    description: "Small button size",
    category: "buttons"
  },
  {
    name: "btn-lg",
    classes: "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl transition-colors",
    description: "Large button size",
    category: "buttons"
  },
  {
    name: "btn-icon",
    classes: "inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    description: "Icon-only button",
    category: "buttons"
  },

  // ============================================
  // CARDS
  // ============================================
  {
    name: "card",
    classes: "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow",
    description: "Basic card container",
    category: "cards"
  },
  {
    name: "card-bordered",
    classes: "bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors",
    description: "Card with border instead of shadow",
    category: "cards"
  },
  {
    name: "card-flat",
    classes: "bg-gray-50 rounded-xl p-6",
    description: "Flat card without shadow",
    category: "cards"
  },
  {
    name: "card-header",
    classes: "flex items-center justify-between pb-4 mb-4 border-b border-gray-200",
    description: "Card header section",
    category: "cards"
  },
  {
    name: "card-body",
    classes: "flex-1",
    description: "Card body/content section",
    category: "cards"
  },
  {
    name: "card-footer",
    classes: "flex items-center justify-between pt-4 mt-4 border-t border-gray-200",
    description: "Card footer section",
    category: "cards"
  },

  // ============================================
  // FORMS
  // ============================================
  {
    name: "input",
    classes: "block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
    description: "Text input field",
    category: "forms"
  },
  {
    name: "input-error",
    classes: "block w-full px-4 py-2 text-gray-900 bg-white border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors",
    description: "Input with error state",
    category: "forms"
  },
  {
    name: "label",
    classes: "block text-sm font-medium text-gray-700 mb-1",
    description: "Form label",
    category: "forms"
  },
  {
    name: "helper-text",
    classes: "mt-1 text-sm text-gray-500",
    description: "Helper text below input",
    category: "forms"
  },
  {
    name: "error-text",
    classes: "mt-1 text-sm text-red-600",
    description: "Error message text",
    category: "forms"
  },
  {
    name: "select",
    classes: "block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
    description: "Select dropdown",
    category: "forms"
  },
  {
    name: "checkbox",
    classes: "w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500",
    description: "Checkbox input",
    category: "forms"
  },
  {
    name: "textarea",
    classes: "block w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none",
    description: "Textarea input",
    category: "forms"
  },

  // ============================================
  // BADGES
  // ============================================
  {
    name: "badge",
    classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
    description: "Base badge",
    category: "badges"
  },
  {
    name: "badge-primary",
    classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
    description: "Primary badge",
    category: "badges"
  },
  {
    name: "badge-success",
    classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",
    description: "Success badge",
    category: "badges"
  },
  {
    name: "badge-warning",
    classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
    description: "Warning badge",
    category: "badges"
  },
  {
    name: "badge-danger",
    classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",
    description: "Danger badge",
    category: "badges"
  },
  {
    name: "badge-gray",
    classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
    description: "Gray/neutral badge",
    category: "badges"
  },

  // ============================================
  // ALERTS
  // ============================================
  {
    name: "alert",
    classes: "p-4 rounded-lg border",
    description: "Base alert",
    category: "alerts"
  },
  {
    name: "alert-info",
    classes: "p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800",
    description: "Info alert",
    category: "alerts"
  },
  {
    name: "alert-success",
    classes: "p-4 rounded-lg bg-green-50 border border-green-200 text-green-800",
    description: "Success alert",
    category: "alerts"
  },
  {
    name: "alert-warning",
    classes: "p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800",
    description: "Warning alert",
    category: "alerts"
  },
  {
    name: "alert-error",
    classes: "p-4 rounded-lg bg-red-50 border border-red-200 text-red-800",
    description: "Error alert",
    category: "alerts"
  },

  // ============================================
  // AVATARS
  // ============================================
  {
    name: "avatar",
    classes: "inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium",
    description: "Base avatar",
    category: "avatars"
  },
  {
    name: "avatar-sm",
    classes: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-xs font-medium",
    description: "Small avatar",
    category: "avatars"
  },
  {
    name: "avatar-md",
    classes: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-medium",
    description: "Medium avatar",
    category: "avatars"
  },
  {
    name: "avatar-lg",
    classes: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 text-gray-600 text-lg font-medium",
    description: "Large avatar",
    category: "avatars"
  },
  {
    name: "avatar-xl",
    classes: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 text-gray-600 text-xl font-medium",
    description: "Extra large avatar",
    category: "avatars"
  },

  // ============================================
  // LAYOUT
  // ============================================
  {
    name: "container",
    classes: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    description: "Centered container with responsive padding",
    category: "layout"
  },
  {
    name: "section",
    classes: "py-16 sm:py-20 lg:py-24",
    description: "Page section with vertical padding",
    category: "layout"
  },
  {
    name: "flex-center",
    classes: "flex items-center justify-center",
    description: "Flex container centered both ways",
    category: "layout"
  },
  {
    name: "flex-between",
    classes: "flex items-center justify-between",
    description: "Flex container with space between",
    category: "layout"
  },
  {
    name: "flex-start",
    classes: "flex items-center justify-start",
    description: "Flex container aligned start",
    category: "layout"
  },
  {
    name: "flex-end",
    classes: "flex items-center justify-end",
    description: "Flex container aligned end",
    category: "layout"
  },
  {
    name: "stack",
    classes: "flex flex-col space-y-4",
    description: "Vertical stack with spacing",
    category: "layout"
  },
  {
    name: "row",
    classes: "flex flex-row space-x-4",
    description: "Horizontal row with spacing",
    category: "layout"
  },
  {
    name: "grid-2",
    classes: "grid grid-cols-1 md:grid-cols-2 gap-6",
    description: "2-column responsive grid",
    category: "layout"
  },
  {
    name: "grid-3",
    classes: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    description: "3-column responsive grid",
    category: "layout"
  },
  {
    name: "grid-4",
    classes: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    description: "4-column responsive grid",
    category: "layout"
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  {
    name: "heading-xl",
    classes: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight",
    description: "Extra large heading (h1)",
    category: "typography"
  },
  {
    name: "heading-lg",
    classes: "text-3xl sm:text-4xl font-bold text-gray-900",
    description: "Large heading (h2)",
    category: "typography"
  },
  {
    name: "heading-md",
    classes: "text-2xl sm:text-3xl font-semibold text-gray-900",
    description: "Medium heading (h3)",
    category: "typography"
  },
  {
    name: "heading-sm",
    classes: "text-xl font-semibold text-gray-900",
    description: "Small heading (h4)",
    category: "typography"
  },
  {
    name: "text-body",
    classes: "text-base text-gray-600 leading-relaxed",
    description: "Body text",
    category: "typography"
  },
  {
    name: "text-muted",
    classes: "text-sm text-gray-500",
    description: "Muted/secondary text",
    category: "typography"
  },
  {
    name: "text-link",
    classes: "text-blue-600 hover:text-blue-800 underline transition-colors",
    description: "Link text",
    category: "typography"
  },

  // ============================================
  // NAVIGATION
  // ============================================
  {
    name: "nav",
    classes: "bg-white shadow-sm border-b border-gray-200",
    description: "Navigation bar",
    category: "navigation"
  },
  {
    name: "nav-link",
    classes: "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors",
    description: "Navigation link",
    category: "navigation"
  },
  {
    name: "nav-link-active",
    classes: "text-sm font-medium text-blue-600",
    description: "Active navigation link",
    category: "navigation"
  },

  // ============================================
  // MODALS & OVERLAYS
  // ============================================
  {
    name: "modal-overlay",
    classes: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40",
    description: "Modal backdrop overlay",
    category: "modals"
  },
  {
    name: "modal",
    classes: "fixed inset-x-4 top-1/2 -translate-y-1/2 mx-auto max-w-lg bg-white rounded-xl shadow-2xl z-50 p-6",
    description: "Modal container",
    category: "modals"
  },
  {
    name: "modal-header",
    classes: "flex items-center justify-between pb-4 border-b border-gray-200",
    description: "Modal header",
    category: "modals"
  },
  {
    name: "modal-body",
    classes: "py-4",
    description: "Modal body content",
    category: "modals"
  },
  {
    name: "modal-footer",
    classes: "flex items-center justify-end space-x-3 pt-4 border-t border-gray-200",
    description: "Modal footer with actions",
    category: "modals"
  },

  // ============================================
  // TABLES
  // ============================================
  {
    name: "table",
    classes: "min-w-full divide-y divide-gray-200",
    description: "Table base",
    category: "tables"
  },
  {
    name: "table-header",
    classes: "bg-gray-50",
    description: "Table header row",
    category: "tables"
  },
  {
    name: "th",
    classes: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
    description: "Table header cell",
    category: "tables"
  },
  {
    name: "td",
    classes: "px-6 py-4 text-sm text-gray-900 whitespace-nowrap",
    description: "Table data cell",
    category: "tables"
  },
  {
    name: "tr-hover",
    classes: "hover:bg-gray-50 transition-colors",
    description: "Table row with hover",
    category: "tables"
  },

  // ============================================
  // LISTS
  // ============================================
  {
    name: "list",
    classes: "divide-y divide-gray-200",
    description: "List with dividers",
    category: "lists"
  },
  {
    name: "list-item",
    classes: "flex items-center justify-between py-4",
    description: "List item",
    category: "lists"
  },
  {
    name: "list-item-hover",
    classes: "flex items-center justify-between py-4 px-4 -mx-4 hover:bg-gray-50 rounded-lg transition-colors",
    description: "List item with hover",
    category: "lists"
  },
];

// Create a map for quick lookup
export const patternMap = new Map<string, ClassPattern>(
  patterns.map(p => [p.name, p])
);

// Get categories
export const categories = [...new Set(patterns.map(p => p.category))];

// Get patterns by category
export function getPatternsByCategory(category: string): ClassPattern[] {
  return patterns.filter(p => p.category === category);
}

// Search patterns
export function searchPatterns(query: string): ClassPattern[] {
  const q = query.toLowerCase();
  return patterns.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}
