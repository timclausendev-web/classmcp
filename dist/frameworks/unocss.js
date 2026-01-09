/**
 * UnoCSS Framework Configuration
 * Atomic CSS on-demand - compatible with Tailwind syntax
 */
export const unocssConfig = {
    name: 'unocss',
    displayName: 'UnoCSS',
    version: '0.58',
    description: 'Instant on-demand atomic CSS engine',
    website: 'https://unocss.dev',
    customClassSyntax: '@apply',
    configFiles: ['uno.config.ts', 'uno.config.js', 'unocss.config.ts'],
    cssImport: "import 'uno.css';",
    statePrefix: {
        hover: 'hover:',
        focus: 'focus:',
        active: 'active:',
        disabled: 'disabled:',
        groupHover: 'group-hover:',
        dark: 'dark:'
    },
    breakpoints: {
        sm: 'sm:',
        md: 'md:',
        lg: 'lg:',
        xl: 'xl:',
        '2xl': '2xl:'
    }
};
/**
 * UnoCSS Component Patterns
 * UnoCSS is largely Tailwind-compatible with additional shortcuts
 */
export const unocssPatterns = [
    // ============================================
    // BUTTONS
    // ============================================
    {
        id: 'btn-primary',
        name: 'btn-primary',
        description: 'Primary action button',
        category: 'buttons',
        classes: {
            base: 'inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors',
            hover: 'hover:bg-blue-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            active: 'active:bg-blue-800',
            disabled: 'disabled:opacity-50 disabled:cursor-not-allowed'
        },
        ssr: { safe: true },
        frameworkNotes: {
            unocss: 'UnoCSS generates these utilities on-demand with zero runtime'
        }
    },
    {
        id: 'btn-secondary',
        name: 'btn-secondary',
        description: 'Secondary action button',
        category: 'buttons',
        classes: {
            base: 'inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg transition-colors',
            hover: 'hover:bg-gray-200',
            focus: 'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
            disabled: 'disabled:opacity-50 disabled:cursor-not-allowed'
        },
        ssr: { safe: true }
    },
    {
        id: 'btn-outline',
        name: 'btn-outline',
        description: 'Outlined button',
        category: 'buttons',
        classes: {
            base: 'inline-flex items-center justify-center px-4 py-2 bg-transparent text-gray-700 text-sm font-medium rounded-lg border border-gray-300 transition-colors',
            hover: 'hover:bg-gray-50',
            focus: 'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
            disabled: 'disabled:opacity-50'
        },
        ssr: { safe: true }
    },
    {
        id: 'btn-ghost',
        name: 'btn-ghost',
        description: 'Ghost/text button',
        category: 'buttons',
        classes: {
            base: 'inline-flex items-center justify-center px-4 py-2 bg-transparent text-gray-600 text-sm font-medium rounded-lg transition-colors',
            hover: 'hover:bg-gray-100',
            focus: 'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
        },
        ssr: { safe: true }
    },
    {
        id: 'btn-danger',
        name: 'btn-danger',
        description: 'Danger/delete button',
        category: 'buttons',
        classes: {
            base: 'inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg transition-colors',
            hover: 'hover:bg-red-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
        },
        ssr: { safe: true }
    },
    {
        id: 'btn-success',
        name: 'btn-success',
        description: 'Success button',
        category: 'buttons',
        classes: {
            base: 'inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg transition-colors',
            hover: 'hover:bg-green-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
        },
        ssr: { safe: true }
    },
    {
        id: 'btn-icon',
        name: 'btn-icon',
        description: 'Icon-only button',
        category: 'buttons',
        classes: {
            base: 'inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
            hover: 'hover:bg-gray-100',
            focus: 'focus:outline-none focus:ring-2 focus:ring-offset-2'
        },
        ssr: { safe: true }
    },
    // ============================================
    // CARDS
    // ============================================
    {
        id: 'card',
        name: 'card',
        description: 'Basic card container',
        category: 'cards',
        classes: {
            base: 'bg-white rounded-xl shadow-md p-6 transition-shadow',
            hover: 'hover:shadow-lg'
        },
        ssr: { safe: true }
    },
    {
        id: 'card-bordered',
        name: 'card-bordered',
        description: 'Card with border',
        category: 'cards',
        classes: {
            base: 'bg-white rounded-xl border border-gray-200 p-6 transition-colors',
            hover: 'hover:border-gray-300'
        },
        ssr: { safe: true }
    },
    {
        id: 'card-flat',
        name: 'card-flat',
        description: 'Flat card without shadow',
        category: 'cards',
        classes: 'bg-gray-50 rounded-xl p-6',
        ssr: { safe: true }
    },
    {
        id: 'card-interactive',
        name: 'card-interactive',
        description: 'Interactive clickable card',
        category: 'cards',
        classes: {
            base: 'bg-white rounded-xl shadow-md p-6 transition-all cursor-pointer',
            hover: 'hover:shadow-xl hover:-translate-y-1',
            focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
            active: 'active:scale-98'
        },
        ssr: { safe: true }
    },
    {
        id: 'card-header',
        name: 'card-header',
        description: 'Card header section',
        category: 'cards',
        classes: 'flex items-center justify-between pb-4 mb-4 border-b border-gray-200',
        ssr: { safe: true }
    },
    {
        id: 'card-body',
        name: 'card-body',
        description: 'Card body content',
        category: 'cards',
        classes: 'flex-1',
        ssr: { safe: true }
    },
    {
        id: 'card-footer',
        name: 'card-footer',
        description: 'Card footer section',
        category: 'cards',
        classes: 'flex items-center justify-between pt-4 mt-4 border-t border-gray-200',
        ssr: { safe: true }
    },
    // ============================================
    // FORMS
    // ============================================
    {
        id: 'input',
        name: 'input',
        description: 'Text input field',
        category: 'forms',
        classes: {
            base: 'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg transition-colors',
            focus: 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            disabled: 'disabled:bg-gray-100 disabled:cursor-not-allowed'
        },
        ssr: { safe: true }
    },
    {
        id: 'input-error',
        name: 'input-error',
        description: 'Input with error state',
        category: 'forms',
        classes: {
            base: 'block w-full px-4 py-2 text-gray-900 bg-white border border-red-500 rounded-lg transition-colors',
            focus: 'focus:ring-2 focus:ring-red-500 focus:border-red-500'
        },
        ssr: { safe: true }
    },
    {
        id: 'label',
        name: 'label',
        description: 'Form label',
        category: 'forms',
        classes: 'block text-sm font-medium text-gray-700 mb-1',
        ssr: { safe: true }
    },
    {
        id: 'helper-text',
        name: 'helper-text',
        description: 'Helper text below input',
        category: 'forms',
        classes: 'mt-1 text-sm text-gray-500',
        ssr: { safe: true }
    },
    {
        id: 'error-text',
        name: 'error-text',
        description: 'Error message text',
        category: 'forms',
        classes: 'mt-1 text-sm text-red-600',
        ssr: { safe: true }
    },
    {
        id: 'select',
        name: 'select',
        description: 'Select dropdown',
        category: 'forms',
        classes: {
            base: 'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg transition-colors',
            focus: 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        },
        ssr: { safe: true }
    },
    {
        id: 'checkbox',
        name: 'checkbox',
        description: 'Checkbox input',
        category: 'forms',
        classes: {
            base: 'w-4 h-4 text-blue-600 bg-white border-gray-300 rounded',
            focus: 'focus:ring-2 focus:ring-blue-500'
        },
        ssr: { safe: true }
    },
    {
        id: 'textarea',
        name: 'textarea',
        description: 'Textarea input',
        category: 'forms',
        classes: {
            base: 'block w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg transition-colors resize-none',
            focus: 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        },
        ssr: { safe: true }
    },
    {
        id: 'toggle',
        name: 'toggle',
        description: 'Toggle switch',
        category: 'forms',
        classes: {
            base: 'relative w-11 h-6 bg-gray-200 rounded-full peer transition-colors',
            focus: 'focus:outline-none focus:ring-4 focus:ring-blue-300',
            dataActive: 'peer-checked:bg-blue-600'
        },
        ssr: {
            safe: false,
            warning: 'Toggle state may need client-side hydration',
            clientOnly: 'peer-checked:bg-blue-600'
        }
    },
    // ============================================
    // BADGES
    // ============================================
    {
        id: 'badge',
        name: 'badge',
        description: 'Base badge',
        category: 'badges',
        classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        ssr: { safe: true }
    },
    {
        id: 'badge-primary',
        name: 'badge-primary',
        description: 'Primary badge',
        category: 'badges',
        classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800',
        ssr: { safe: true }
    },
    {
        id: 'badge-success',
        name: 'badge-success',
        description: 'Success badge',
        category: 'badges',
        classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800',
        ssr: { safe: true }
    },
    {
        id: 'badge-warning',
        name: 'badge-warning',
        description: 'Warning badge',
        category: 'badges',
        classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800',
        ssr: { safe: true }
    },
    {
        id: 'badge-danger',
        name: 'badge-danger',
        description: 'Danger badge',
        category: 'badges',
        classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800',
        ssr: { safe: true }
    },
    {
        id: 'badge-gray',
        name: 'badge-gray',
        description: 'Gray badge',
        category: 'badges',
        classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800',
        ssr: { safe: true }
    },
    // ============================================
    // ALERTS
    // ============================================
    {
        id: 'alert',
        name: 'alert',
        description: 'Base alert',
        category: 'alerts',
        classes: 'p-4 rounded-lg border',
        ssr: { safe: true }
    },
    {
        id: 'alert-info',
        name: 'alert-info',
        description: 'Info alert',
        category: 'alerts',
        classes: 'p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800',
        ssr: { safe: true }
    },
    {
        id: 'alert-success',
        name: 'alert-success',
        description: 'Success alert',
        category: 'alerts',
        classes: 'p-4 rounded-lg bg-green-50 border border-green-200 text-green-800',
        ssr: { safe: true }
    },
    {
        id: 'alert-warning',
        name: 'alert-warning',
        description: 'Warning alert',
        category: 'alerts',
        classes: 'p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800',
        ssr: { safe: true }
    },
    {
        id: 'alert-error',
        name: 'alert-error',
        description: 'Error alert',
        category: 'alerts',
        classes: 'p-4 rounded-lg bg-red-50 border border-red-200 text-red-800',
        ssr: { safe: true }
    },
    // ============================================
    // LAYOUT (UnoCSS Attributify Mode Support)
    // ============================================
    {
        id: 'container',
        name: 'container',
        description: 'Centered container',
        category: 'layout',
        classes: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        ssr: { safe: true }
    },
    {
        id: 'section',
        name: 'section',
        description: 'Page section',
        category: 'layout',
        classes: 'py-16 sm:py-20 lg:py-24',
        ssr: { safe: true }
    },
    {
        id: 'flex-center',
        name: 'flex-center',
        description: 'Centered flex container',
        category: 'layout',
        classes: 'flex items-center justify-center',
        ssr: { safe: true }
    },
    {
        id: 'flex-between',
        name: 'flex-between',
        description: 'Space between flex',
        category: 'layout',
        classes: 'flex items-center justify-between',
        ssr: { safe: true }
    },
    {
        id: 'flex-start',
        name: 'flex-start',
        description: 'Flex aligned start',
        category: 'layout',
        classes: 'flex items-center justify-start',
        ssr: { safe: true }
    },
    {
        id: 'flex-end',
        name: 'flex-end',
        description: 'Flex aligned end',
        category: 'layout',
        classes: 'flex items-center justify-end',
        ssr: { safe: true }
    },
    {
        id: 'stack',
        name: 'stack',
        description: 'Vertical stack',
        category: 'layout',
        classes: 'flex flex-col space-y-4',
        ssr: { safe: true }
    },
    {
        id: 'row',
        name: 'row',
        description: 'Horizontal row',
        category: 'layout',
        classes: 'flex flex-row space-x-4',
        ssr: { safe: true }
    },
    {
        id: 'grid-2',
        name: 'grid-2',
        description: '2-column grid',
        category: 'layout',
        classes: 'grid grid-cols-1 md:grid-cols-2 gap-6',
        ssr: { safe: true }
    },
    {
        id: 'grid-3',
        name: 'grid-3',
        description: '3-column grid',
        category: 'layout',
        classes: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        ssr: { safe: true }
    },
    {
        id: 'grid-4',
        name: 'grid-4',
        description: '4-column grid',
        category: 'layout',
        classes: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
        ssr: { safe: true }
    },
    // ============================================
    // TYPOGRAPHY
    // ============================================
    {
        id: 'heading-xl',
        name: 'heading-xl',
        description: 'Extra large heading',
        category: 'typography',
        classes: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight',
        ssr: { safe: true }
    },
    {
        id: 'heading-lg',
        name: 'heading-lg',
        description: 'Large heading',
        category: 'typography',
        classes: 'text-3xl sm:text-4xl font-bold text-gray-900',
        ssr: { safe: true }
    },
    {
        id: 'heading-md',
        name: 'heading-md',
        description: 'Medium heading',
        category: 'typography',
        classes: 'text-2xl sm:text-3xl font-semibold text-gray-900',
        ssr: { safe: true }
    },
    {
        id: 'heading-sm',
        name: 'heading-sm',
        description: 'Small heading',
        category: 'typography',
        classes: 'text-xl font-semibold text-gray-900',
        ssr: { safe: true }
    },
    {
        id: 'text-body',
        name: 'text-body',
        description: 'Body text',
        category: 'typography',
        classes: 'text-base text-gray-600 leading-relaxed',
        ssr: { safe: true }
    },
    {
        id: 'text-muted',
        name: 'text-muted',
        description: 'Muted text',
        category: 'typography',
        classes: 'text-sm text-gray-500',
        ssr: { safe: true }
    },
    {
        id: 'text-link',
        name: 'text-link',
        description: 'Link text',
        category: 'typography',
        classes: {
            base: 'text-blue-600 underline transition-colors',
            hover: 'hover:text-blue-800'
        },
        ssr: { safe: true }
    },
    // ============================================
    // NAVIGATION
    // ============================================
    {
        id: 'nav',
        name: 'nav',
        description: 'Navigation bar',
        category: 'navigation',
        classes: 'bg-white shadow-sm border-b border-gray-200',
        ssr: { safe: true }
    },
    {
        id: 'nav-link',
        name: 'nav-link',
        description: 'Navigation link',
        category: 'navigation',
        classes: {
            base: 'text-sm font-medium text-gray-600 transition-colors',
            hover: 'hover:text-gray-900'
        },
        ssr: { safe: true }
    },
    {
        id: 'nav-link-active',
        name: 'nav-link-active',
        description: 'Active navigation link',
        category: 'navigation',
        classes: 'text-sm font-medium text-blue-600',
        ssr: { safe: true }
    },
    // ============================================
    // MODALS
    // ============================================
    {
        id: 'modal-overlay',
        name: 'modal-overlay',
        description: 'Modal backdrop',
        category: 'modals',
        classes: 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40',
        ssr: {
            safe: false,
            warning: 'Modal visibility typically controlled by JS. Consider SSR-friendly state.'
        }
    },
    {
        id: 'modal',
        name: 'modal',
        description: 'Modal container',
        category: 'modals',
        classes: 'fixed inset-x-4 top-1/2 -translate-y-1/2 mx-auto max-w-lg bg-white rounded-xl shadow-2xl z-50 p-6',
        ssr: { safe: true }
    },
    {
        id: 'modal-header',
        name: 'modal-header',
        description: 'Modal header',
        category: 'modals',
        classes: 'flex items-center justify-between pb-4 border-b border-gray-200',
        ssr: { safe: true }
    },
    {
        id: 'modal-body',
        name: 'modal-body',
        description: 'Modal body',
        category: 'modals',
        classes: 'py-4',
        ssr: { safe: true }
    },
    {
        id: 'modal-footer',
        name: 'modal-footer',
        description: 'Modal footer',
        category: 'modals',
        classes: 'flex items-center justify-end space-x-3 pt-4 border-t border-gray-200',
        ssr: { safe: true }
    },
    // ============================================
    // TABLES
    // ============================================
    {
        id: 'table',
        name: 'table',
        description: 'Table base',
        category: 'tables',
        classes: 'min-w-full divide-y divide-gray-200',
        ssr: { safe: true }
    },
    {
        id: 'table-header',
        name: 'table-header',
        description: 'Table header',
        category: 'tables',
        classes: 'bg-gray-50',
        ssr: { safe: true }
    },
    {
        id: 'th',
        name: 'th',
        description: 'Table header cell',
        category: 'tables',
        classes: 'px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider',
        ssr: { safe: true }
    },
    {
        id: 'td',
        name: 'td',
        description: 'Table data cell',
        category: 'tables',
        classes: 'px-6 py-4 text-sm text-gray-900 whitespace-nowrap',
        ssr: { safe: true }
    },
    {
        id: 'tr-hover',
        name: 'tr-hover',
        description: 'Table row with hover',
        category: 'tables',
        classes: {
            base: 'transition-colors',
            hover: 'hover:bg-gray-50'
        },
        ssr: { safe: true }
    },
    // ============================================
    // AVATARS
    // ============================================
    {
        id: 'avatar',
        name: 'avatar',
        description: 'Base avatar',
        category: 'avatars',
        classes: 'inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium',
        ssr: { safe: true }
    },
    {
        id: 'avatar-sm',
        name: 'avatar-sm',
        description: 'Small avatar',
        category: 'avatars',
        classes: 'inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-xs font-medium',
        ssr: { safe: true }
    },
    {
        id: 'avatar-md',
        name: 'avatar-md',
        description: 'Medium avatar',
        category: 'avatars',
        classes: 'inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-medium',
        ssr: { safe: true }
    },
    {
        id: 'avatar-lg',
        name: 'avatar-lg',
        description: 'Large avatar',
        category: 'avatars',
        classes: 'inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 text-gray-600 text-lg font-medium',
        ssr: { safe: true }
    },
    // ============================================
    // LOADING
    // ============================================
    {
        id: 'spinner',
        name: 'spinner',
        description: 'Loading spinner',
        category: 'loading',
        classes: 'animate-spin h-5 w-5 border-2 border-gray-300 border-t-blue-600 rounded-full',
        ssr: {
            safe: false,
            warning: 'Animation starts immediately - may flash during hydration'
        }
    },
    {
        id: 'skeleton',
        name: 'skeleton',
        description: 'Skeleton loading placeholder',
        category: 'loading',
        classes: 'animate-pulse bg-gray-200 rounded',
        ssr: { safe: true }
    },
    {
        id: 'skeleton-text',
        name: 'skeleton-text',
        description: 'Skeleton for text',
        category: 'loading',
        classes: 'animate-pulse bg-gray-200 rounded h-4 w-full',
        ssr: { safe: true }
    },
    {
        id: 'skeleton-avatar',
        name: 'skeleton-avatar',
        description: 'Skeleton for avatar',
        category: 'loading',
        classes: 'animate-pulse bg-gray-200 rounded-full w-10 h-10',
        ssr: { safe: true }
    },
    // ============================================
    // DIVIDERS
    // ============================================
    {
        id: 'divider',
        name: 'divider',
        description: 'Horizontal divider',
        category: 'dividers',
        classes: 'border-t border-gray-200',
        ssr: { safe: true }
    },
    {
        id: 'divider-vertical',
        name: 'divider-vertical',
        description: 'Vertical divider',
        category: 'dividers',
        classes: 'border-l border-gray-200 h-full',
        ssr: { safe: true }
    },
    // ============================================
    // LISTS
    // ============================================
    {
        id: 'list',
        name: 'list',
        description: 'List with dividers',
        category: 'lists',
        classes: 'divide-y divide-gray-200',
        ssr: { safe: true }
    },
    {
        id: 'list-item',
        name: 'list-item',
        description: 'List item',
        category: 'lists',
        classes: 'flex items-center justify-between py-4',
        ssr: { safe: true }
    },
    {
        id: 'list-item-hover',
        name: 'list-item-hover',
        description: 'List item with hover',
        category: 'lists',
        classes: {
            base: 'flex items-center justify-between py-4 px-4 -mx-4 rounded-lg transition-colors',
            hover: 'hover:bg-gray-50'
        },
        ssr: { safe: true }
    },
    // ============================================
    // BACKGROUNDS & GRADIENTS
    // ============================================
    {
        id: 'bg-gradient-blue',
        name: 'bg-gradient-blue',
        description: 'Blue to indigo gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-r from-blue-500 to-indigo-600',
        ssr: { safe: true }
    },
    {
        id: 'bg-gradient-purple',
        name: 'bg-gradient-purple',
        description: 'Purple to pink gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-r from-purple-500 to-pink-500',
        ssr: { safe: true }
    },
    {
        id: 'bg-gradient-sunset',
        name: 'bg-gradient-sunset',
        description: 'Sunset gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500',
        ssr: { safe: true }
    },
    {
        id: 'bg-gradient-ocean',
        name: 'bg-gradient-ocean',
        description: 'Ocean gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-r from-cyan-500 to-blue-500',
        ssr: { safe: true }
    },
    {
        id: 'bg-gradient-forest',
        name: 'bg-gradient-forest',
        description: 'Forest gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-r from-green-400 to-cyan-500',
        ssr: { safe: true }
    },
    {
        id: 'bg-gradient-fire',
        name: 'bg-gradient-fire',
        description: 'Fire gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400',
        ssr: { safe: true }
    },
    {
        id: 'bg-gradient-midnight',
        name: 'bg-gradient-midnight',
        description: 'Midnight gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600',
        ssr: { safe: true }
    },
    {
        id: 'bg-gradient-diagonal',
        name: 'bg-gradient-diagonal',
        description: 'Diagonal gradient',
        category: 'backgrounds',
        classes: 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500',
        ssr: { safe: true }
    },
    {
        id: 'glass',
        name: 'glass',
        description: 'Glass effect with blur',
        category: 'backgrounds',
        classes: 'bg-white/30 backdrop-blur-lg border border-white/20',
        ssr: { safe: true }
    },
    {
        id: 'glass-dark',
        name: 'glass-dark',
        description: 'Dark glass effect',
        category: 'backgrounds',
        classes: 'bg-gray-900/50 backdrop-blur-lg border border-gray-700/50',
        ssr: { safe: true }
    },
    {
        id: 'glass-card',
        name: 'glass-card',
        description: 'Glass card effect',
        category: 'backgrounds',
        classes: 'bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl',
        ssr: { safe: true }
    },
    {
        id: 'bg-primary',
        name: 'bg-primary',
        description: 'Primary background',
        category: 'backgrounds',
        classes: 'bg-blue-600 text-white',
        ssr: { safe: true }
    },
    {
        id: 'bg-dark',
        name: 'bg-dark',
        description: 'Dark background',
        category: 'backgrounds',
        classes: 'bg-gray-900 text-white',
        ssr: { safe: true }
    },
    {
        id: 'bg-secondary',
        name: 'bg-secondary',
        description: 'Secondary background',
        category: 'backgrounds',
        classes: 'bg-gray-100 text-gray-900',
        ssr: { safe: true }
    },
    {
        id: 'hero-gradient',
        name: 'hero-gradient',
        description: 'Hero gradient background',
        category: 'backgrounds',
        classes: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white',
        ssr: { safe: true }
    },
    {
        id: 'text-gradient',
        name: 'text-gradient',
        description: 'Gradient text',
        category: 'backgrounds',
        classes: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
        ssr: { safe: true }
    },
    {
        id: 'glow-blue',
        name: 'glow-blue',
        description: 'Blue glow effect',
        category: 'backgrounds',
        classes: 'shadow-lg shadow-blue-500/50',
        ssr: { safe: true }
    },
    {
        id: 'glow-purple',
        name: 'glow-purple',
        description: 'Purple glow effect',
        category: 'backgrounds',
        classes: 'shadow-lg shadow-purple-500/50',
        ssr: { safe: true }
    },
    {
        id: 'overlay-dark',
        name: 'overlay-dark',
        description: 'Dark overlay',
        category: 'backgrounds',
        classes: 'bg-black/60',
        ssr: { safe: true }
    },
    {
        id: 'overlay-gradient',
        name: 'overlay-gradient',
        description: 'Gradient overlay',
        category: 'backgrounds',
        classes: 'bg-gradient-to-t from-black/80 via-black/40 to-transparent',
        ssr: { safe: true }
    },
];
export default {
    config: unocssConfig,
    patterns: unocssPatterns
};
//# sourceMappingURL=unocss.js.map