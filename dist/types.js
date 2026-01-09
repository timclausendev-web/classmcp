/**
 * classmcp Type Definitions
 * Comprehensive types for multi-framework, SSR-safe, state-aware class patterns
 */
// ============================================
// STATE HANDLING HELPERS
// ============================================
/**
 * Common state combinations for interactive elements
 */
export const INTERACTIVE_STATES = {
    button: ['hover', 'focus', 'active', 'disabled'],
    input: ['hover', 'focus', 'disabled', 'invalid'],
    link: ['hover', 'focus', 'visited'],
    checkbox: ['hover', 'focus', 'checked', 'disabled'],
    toggle: ['hover', 'focus', 'checked'],
    menu: ['hover', 'focus', 'open'],
    accordion: ['hover', 'focus', 'expanded'],
};
/**
 * SSR-safe vs client-only states
 */
export const STATE_SSR_SAFETY = {
    // Always SSR safe - no JS needed
    ssrSafe: [
        'hover', // CSS pseudo-class
        'focus', // CSS pseudo-class
        'active', // CSS pseudo-class
        'visited', // CSS pseudo-class
        'disabled', // HTML attribute
        'checked', // HTML attribute (if pre-set)
        'first', // CSS pseudo-class
        'last', // CSS pseudo-class
        'odd', // CSS pseudo-class
        'even', // CSS pseudo-class
    ],
    // Requires JS to toggle - may cause hydration issues
    clientOnly: [
        'open', // Usually JS-controlled
        'expanded', // Usually JS-controlled
        'selected', // Usually JS-controlled
        'data-active', // JS sets data attribute
        'data-state', // JS sets data attribute
        'group-hover', // Requires parent state
        'peer-checked', // Requires sibling state
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
];
//# sourceMappingURL=types.js.map