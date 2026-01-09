/**
 * classmcp Type Definitions
 * Comprehensive types for multi-framework, SSR-safe, state-aware class patterns
 */

// ============================================
// FRAMEWORK CONFIGURATION
// ============================================

export interface FrameworkConfig {
  name: string;
  displayName: string;
  version: string;
  description: string;
  website: string;

  // How custom classes are defined
  customClassSyntax: '@apply' | 'composes' | 'raw';

  // Config files to detect this framework
  configFiles: string[];

  // CSS import syntax
  cssImport: string;

  // State variant syntax (e.g., "hover:" for Tailwind)
  statePrefix?: {
    hover: string;
    focus: string;
    active: string;
    disabled: string;
    groupHover: string;
    dark: string;
  };

  // Responsive breakpoint prefixes
  breakpoints?: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

// ============================================
// COMPONENT PATTERNS
// ============================================

export interface StateVariant {
  // Base state (always applied)
  base: string;

  // Interactive states
  hover?: string;
  focus?: string;
  active?: string;
  disabled?: string;

  // Group/peer states (parent-child relationships)
  groupHover?: string;
  groupFocus?: string;

  // Aria states (accessibility)
  ariaSelected?: string;
  ariaExpanded?: string;
  ariaDisabled?: string;

  // Data attribute states
  dataActive?: string;
  dataOpen?: string;
  dataClosed?: string;
}

export interface ResponsiveVariant {
  // Mobile-first base
  base: string;

  // Breakpoint overrides
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}

export interface ComponentPattern {
  // Unique identifier
  id: string;

  // Human-readable name
  name: string;

  // Description for AI to understand when to use
  description: string;

  // Category for organization
  category: string;

  // The utility classes (can be string or state-aware object)
  classes: string | StateVariant;

  // Responsive variants if needed
  responsive?: ResponsiveVariant;

  // Variants (e.g., size, color)
  variants?: {
    [key: string]: {
      [value: string]: string;
    };
  };

  // Example usage
  usage?: string;

  // SSR considerations
  ssr?: {
    // Is this safe for SSR? (no client-only state)
    safe: boolean;

    // Warning if not SSR safe
    warning?: string;

    // Classes that should only be added client-side
    clientOnly?: string;
  };

  // Related patterns
  relatedPatterns?: string[];

  // Framework-specific notes
  frameworkNotes?: {
    [framework: string]: string;
  };
}

// ============================================
// MINIFICATION
// ============================================

export interface MinifiedClass {
  // Original semantic name (e.g., "btn-primary")
  original: string;

  // Minified name (e.g., "a", "b", "aa")
  minified: string;

  // Full utility classes
  classes: string;

  // Hash for deduplication
  hash: string;
}

export interface MinificationMap {
  // Semantic name -> minified name
  nameToMinified: Map<string, string>;

  // Minified name -> full data
  minifiedToData: Map<string, MinifiedClass>;

  // Track used names for collision avoidance
  usedNames: Set<string>;

  // Counter for sequential naming
  counter: number;
}

// ============================================
// CONFIGURATION
// ============================================

export interface ClassmcpConfig {
  // Which framework to use
  framework: 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons' | 'custom';

  // Enable minification (single-char class names)
  minify: boolean;

  // Prefix for generated classes (e.g., "cm-")
  prefix: string;

  // Include state variants in output
  includeStates: boolean;

  // Include responsive variants
  includeResponsive: boolean;

  // SSR mode - only return SSR-safe patterns
  ssrMode: boolean;

  // Custom patterns to add
  customPatterns?: ComponentPattern[];

  // Patterns to exclude
  excludePatterns?: string[];

  // Categories to include (empty = all)
  includeCategories?: string[];
}

// ============================================
// MCP TOOL RESPONSES
// ============================================

export interface GetClassResponse {
  // The class to use in HTML
  class: string;

  // Full utility classes (for reference)
  utilities: string;

  // State variants if applicable
  states?: {
    hover?: string;
    focus?: string;
    active?: string;
    disabled?: string;
  };

  // Usage example
  example: string;

  // SSR safety info
  ssrSafe: boolean;
  ssrWarning?: string;
}

export interface ListClassesResponse {
  categories: {
    name: string;
    patterns: {
      id: string;
      name: string;
      description: string;
      class: string;
    }[];
  }[];
  total: number;
}

export interface GenerateCSSResponse {
  css: string;
  framework: string;
  patternCount: number;
  minified: boolean;
}

// ============================================
// STATE HANDLING HELPERS
// ============================================

/**
 * Common state combinations for interactive elements
 */
export const INTERACTIVE_STATES = {
  button: ['hover', 'focus', 'active', 'disabled'] as const,
  input: ['hover', 'focus', 'disabled', 'invalid'] as const,
  link: ['hover', 'focus', 'visited'] as const,
  checkbox: ['hover', 'focus', 'checked', 'disabled'] as const,
  toggle: ['hover', 'focus', 'checked'] as const,
  menu: ['hover', 'focus', 'open'] as const,
  accordion: ['hover', 'focus', 'expanded'] as const,
};

/**
 * SSR-safe vs client-only states
 */
export const STATE_SSR_SAFETY = {
  // Always SSR safe - no JS needed
  ssrSafe: [
    'hover',    // CSS pseudo-class
    'focus',    // CSS pseudo-class
    'active',   // CSS pseudo-class
    'visited',  // CSS pseudo-class
    'disabled', // HTML attribute
    'checked',  // HTML attribute (if pre-set)
    'first',    // CSS pseudo-class
    'last',     // CSS pseudo-class
    'odd',      // CSS pseudo-class
    'even',     // CSS pseudo-class
  ],

  // Requires JS to toggle - may cause hydration issues
  clientOnly: [
    'open',           // Usually JS-controlled
    'expanded',       // Usually JS-controlled
    'selected',       // Usually JS-controlled
    'data-active',    // JS sets data attribute
    'data-state',     // JS sets data attribute
    'group-hover',    // Requires parent state
    'peer-checked',   // Requires sibling state
  ],
};

// ============================================
// CATEGORY DEFINITIONS
// ============================================

export const CATEGORIES = [
  { id: 'buttons', name: 'Buttons', description: 'Interactive button elements' },
  { id: 'cards', name: 'Cards', description: 'Container cards and panels' },
  { id: 'forms', name: 'Forms', description: 'Form inputs and controls' },
  { id: 'badges', name: 'Badges', description: 'Labels, tags, and badges' },
  { id: 'alerts', name: 'Alerts', description: 'Notification and alert boxes' },
  { id: 'avatars', name: 'Avatars', description: 'User avatars and profile images' },
  { id: 'layout', name: 'Layout', description: 'Layout containers and grids' },
  { id: 'typography', name: 'Typography', description: 'Text styles and headings' },
  { id: 'navigation', name: 'Navigation', description: 'Navbars, menus, and links' },
  { id: 'modals', name: 'Modals', description: 'Modal dialogs and overlays' },
  { id: 'tables', name: 'Tables', description: 'Data tables and rows' },
  { id: 'lists', name: 'Lists', description: 'List containers and items' },
  { id: 'loading', name: 'Loading', description: 'Spinners and skeletons' },
  { id: 'dividers', name: 'Dividers', description: 'Separators and dividers' },
  { id: 'backgrounds', name: 'Backgrounds', description: 'Gradients, glass effects, and fancy backgrounds' },
  { id: 'icons', name: 'Icons', description: 'Icon containers and sizing' },
  { id: 'code', name: 'Code', description: 'Code blocks and syntax highlighting' },
  { id: 'pricing', name: 'Pricing', description: 'Pricing cards and badges' },
  { id: 'fonts', name: 'Fonts', description: 'Font families, weights, and typography styles' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];
