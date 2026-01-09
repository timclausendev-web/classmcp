/**
 * Tailwind CSS Framework Configuration
 */

import { FrameworkConfig, ComponentPattern } from '../types.js';

export const tailwindConfig: FrameworkConfig = {
  name: 'tailwind',
  displayName: 'Tailwind CSS',
  version: '3.x / 4.x',
  description: 'Utility-first CSS framework',
  website: 'https://tailwindcss.com',

  // How to define custom classes
  customClassSyntax: '@apply',

  // File patterns to look for
  configFiles: ['tailwind.config.js', 'tailwind.config.ts', 'tailwind.config.mjs'],

  // CSS import syntax
  cssImport: '@import "tailwindcss";',
};

export const tailwindPatterns: ComponentPattern[] = [
  // ============================================
  // BUTTONS
  // ============================================
  {
    id: 'btn-base',
    name: 'Button Base',
    description: 'Base button with flex centering and transitions',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    variants: {
      size: {
        sm: 'px-3 py-1.5 text-xs rounded-md',
        md: 'px-4 py-2 text-sm rounded-lg',
        lg: 'px-6 py-3 text-base rounded-xl',
      },
      color: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
        success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
        outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      },
    },
  },
  {
    id: 'btn-primary',
    name: 'Primary Button',
    description: 'Primary action button - blue background, white text',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors',
    usage: '<button class="{{class}}">Click me</button>',
  },
  {
    id: 'btn-secondary',
    name: 'Secondary Button',
    description: 'Secondary action button - gray background',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors',
    usage: '<button class="{{class}}">Cancel</button>',
  },
  {
    id: 'btn-success',
    name: 'Success Button',
    description: 'Success/confirm button - green background',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors',
    usage: '<button class="{{class}}">Save</button>',
  },
  {
    id: 'btn-danger',
    name: 'Danger Button',
    description: 'Danger/delete button - red background',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors',
    usage: '<button class="{{class}}">Delete</button>',
  },
  {
    id: 'btn-outline',
    name: 'Outline Button',
    description: 'Outlined button with border',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-4 py-2 bg-transparent text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors',
  },
  {
    id: 'btn-ghost',
    name: 'Ghost Button',
    description: 'Transparent button, shows on hover',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-4 py-2 bg-transparent text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors',
  },
  {
    id: 'btn-icon',
    name: 'Icon Button',
    description: 'Square button for icons only',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  },
  {
    id: 'btn-sm',
    name: 'Small Button',
    description: 'Smaller button variant',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
  },
  {
    id: 'btn-lg',
    name: 'Large Button',
    description: 'Larger button variant',
    category: 'buttons',
    classes: 'inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl transition-colors',
  },

  // ============================================
  // CARDS
  // ============================================
  {
    id: 'card',
    name: 'Card',
    description: 'Basic card container with shadow',
    category: 'cards',
    classes: 'bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow',
    usage: '<div class="{{class}}">Card content</div>',
  },
  {
    id: 'card-bordered',
    name: 'Bordered Card',
    description: 'Card with border instead of shadow',
    category: 'cards',
    classes: 'bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors',
  },
  {
    id: 'card-flat',
    name: 'Flat Card',
    description: 'Card without shadow, subtle background',
    category: 'cards',
    classes: 'bg-gray-50 rounded-xl p-6',
  },
  {
    id: 'card-elevated',
    name: 'Elevated Card',
    description: 'Card with stronger shadow',
    category: 'cards',
    classes: 'bg-white rounded-xl shadow-xl p-6',
  },
  {
    id: 'card-header',
    name: 'Card Header',
    description: 'Header section for cards',
    category: 'cards',
    classes: 'flex items-center justify-between pb-4 mb-4 border-b border-gray-200',
  },
  {
    id: 'card-body',
    name: 'Card Body',
    description: 'Main content area of card',
    category: 'cards',
    classes: 'flex-1',
  },
  {
    id: 'card-footer',
    name: 'Card Footer',
    description: 'Footer section for cards',
    category: 'cards',
    classes: 'flex items-center justify-between pt-4 mt-4 border-t border-gray-200',
  },

  // ============================================
  // FORMS
  // ============================================
  {
    id: 'input',
    name: 'Text Input',
    description: 'Standard text input field',
    category: 'forms',
    classes: 'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors',
    usage: '<input type="text" class="{{class}}" placeholder="Enter text..." />',
  },
  {
    id: 'input-error',
    name: 'Input Error State',
    description: 'Input with error styling',
    category: 'forms',
    classes: 'block w-full px-4 py-2 text-gray-900 bg-white border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors',
  },
  {
    id: 'input-success',
    name: 'Input Success State',
    description: 'Input with success styling',
    category: 'forms',
    classes: 'block w-full px-4 py-2 text-gray-900 bg-white border border-green-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors',
  },
  {
    id: 'label',
    name: 'Form Label',
    description: 'Label for form inputs',
    category: 'forms',
    classes: 'block text-sm font-medium text-gray-700 mb-1',
    usage: '<label class="{{class}}">Email</label>',
  },
  {
    id: 'helper-text',
    name: 'Helper Text',
    description: 'Helper text below inputs',
    category: 'forms',
    classes: 'mt-1 text-sm text-gray-500',
  },
  {
    id: 'error-text',
    name: 'Error Text',
    description: 'Error message text',
    category: 'forms',
    classes: 'mt-1 text-sm text-red-600',
  },
  {
    id: 'select',
    name: 'Select Dropdown',
    description: 'Dropdown select input',
    category: 'forms',
    classes: 'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors',
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Checkbox input',
    category: 'forms',
    classes: 'w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500',
  },
  {
    id: 'textarea',
    name: 'Textarea',
    description: 'Multi-line text input',
    category: 'forms',
    classes: 'block w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none',
  },
  {
    id: 'form-group',
    name: 'Form Group',
    description: 'Container for form field with label',
    category: 'forms',
    classes: 'space-y-1',
  },

  // ============================================
  // BADGES
  // ============================================
  {
    id: 'badge',
    name: 'Badge Base',
    description: 'Base badge/tag styling',
    category: 'badges',
    classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
  },
  {
    id: 'badge-primary',
    name: 'Primary Badge',
    description: 'Blue badge',
    category: 'badges',
    classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800',
  },
  {
    id: 'badge-success',
    name: 'Success Badge',
    description: 'Green badge for success states',
    category: 'badges',
    classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800',
    usage: '<span class="{{class}}">Active</span>',
  },
  {
    id: 'badge-warning',
    name: 'Warning Badge',
    description: 'Yellow badge for warnings',
    category: 'badges',
    classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800',
  },
  {
    id: 'badge-danger',
    name: 'Danger Badge',
    description: 'Red badge for errors/danger',
    category: 'badges',
    classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800',
  },
  {
    id: 'badge-gray',
    name: 'Gray Badge',
    description: 'Neutral gray badge',
    category: 'badges',
    classes: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800',
  },

  // ============================================
  // ALERTS
  // ============================================
  {
    id: 'alert',
    name: 'Alert Base',
    description: 'Base alert container',
    category: 'alerts',
    classes: 'p-4 rounded-lg border',
  },
  {
    id: 'alert-info',
    name: 'Info Alert',
    description: 'Blue informational alert',
    category: 'alerts',
    classes: 'p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800',
  },
  {
    id: 'alert-success',
    name: 'Success Alert',
    description: 'Green success alert',
    category: 'alerts',
    classes: 'p-4 rounded-lg bg-green-50 border border-green-200 text-green-800',
  },
  {
    id: 'alert-warning',
    name: 'Warning Alert',
    description: 'Yellow warning alert',
    category: 'alerts',
    classes: 'p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800',
  },
  {
    id: 'alert-error',
    name: 'Error Alert',
    description: 'Red error alert',
    category: 'alerts',
    classes: 'p-4 rounded-lg bg-red-50 border border-red-200 text-red-800',
  },

  // ============================================
  // AVATARS
  // ============================================
  {
    id: 'avatar',
    name: 'Avatar Base',
    description: 'Base avatar circle',
    category: 'avatars',
    classes: 'inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium',
  },
  {
    id: 'avatar-xs',
    name: 'Extra Small Avatar',
    description: '24px avatar',
    category: 'avatars',
    classes: 'inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-xs font-medium',
  },
  {
    id: 'avatar-sm',
    name: 'Small Avatar',
    description: '32px avatar',
    category: 'avatars',
    classes: 'inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-xs font-medium',
  },
  {
    id: 'avatar-md',
    name: 'Medium Avatar',
    description: '40px avatar',
    category: 'avatars',
    classes: 'inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-medium',
  },
  {
    id: 'avatar-lg',
    name: 'Large Avatar',
    description: '56px avatar',
    category: 'avatars',
    classes: 'inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 text-gray-600 text-lg font-medium',
  },
  {
    id: 'avatar-xl',
    name: 'Extra Large Avatar',
    description: '80px avatar',
    category: 'avatars',
    classes: 'inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 text-gray-600 text-xl font-medium',
  },

  // ============================================
  // LAYOUT
  // ============================================
  {
    id: 'container',
    name: 'Container',
    description: 'Centered max-width container',
    category: 'layout',
    classes: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  {
    id: 'container-sm',
    name: 'Small Container',
    description: 'Narrow centered container',
    category: 'layout',
    classes: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  {
    id: 'container-lg',
    name: 'Large Container',
    description: 'Wide centered container',
    category: 'layout',
    classes: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  {
    id: 'section',
    name: 'Section',
    description: 'Page section with vertical padding',
    category: 'layout',
    classes: 'py-16 sm:py-20 lg:py-24',
  },
  {
    id: 'flex-center',
    name: 'Flex Center',
    description: 'Flex container centered both axes',
    category: 'layout',
    classes: 'flex items-center justify-center',
  },
  {
    id: 'flex-between',
    name: 'Flex Space Between',
    description: 'Flex with space between items',
    category: 'layout',
    classes: 'flex items-center justify-between',
  },
  {
    id: 'flex-start',
    name: 'Flex Start',
    description: 'Flex aligned to start',
    category: 'layout',
    classes: 'flex items-center justify-start',
  },
  {
    id: 'flex-end',
    name: 'Flex End',
    description: 'Flex aligned to end',
    category: 'layout',
    classes: 'flex items-center justify-end',
  },
  {
    id: 'stack',
    name: 'Vertical Stack',
    description: 'Vertical flex with gap',
    category: 'layout',
    classes: 'flex flex-col space-y-4',
  },
  {
    id: 'stack-sm',
    name: 'Tight Stack',
    description: 'Vertical flex with small gap',
    category: 'layout',
    classes: 'flex flex-col space-y-2',
  },
  {
    id: 'row',
    name: 'Horizontal Row',
    description: 'Horizontal flex with gap',
    category: 'layout',
    classes: 'flex flex-row items-center space-x-4',
  },
  {
    id: 'row-sm',
    name: 'Tight Row',
    description: 'Horizontal flex with small gap',
    category: 'layout',
    classes: 'flex flex-row items-center space-x-2',
  },
  {
    id: 'grid-2',
    name: '2 Column Grid',
    description: 'Responsive 2 column grid',
    category: 'layout',
    classes: 'grid grid-cols-1 md:grid-cols-2 gap-6',
  },
  {
    id: 'grid-3',
    name: '3 Column Grid',
    description: 'Responsive 3 column grid',
    category: 'layout',
    classes: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  },
  {
    id: 'grid-4',
    name: '4 Column Grid',
    description: 'Responsive 4 column grid',
    category: 'layout',
    classes: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  {
    id: 'h1',
    name: 'Heading 1',
    description: 'Extra large page heading',
    category: 'typography',
    classes: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight',
  },
  {
    id: 'h2',
    name: 'Heading 2',
    description: 'Large section heading',
    category: 'typography',
    classes: 'text-3xl sm:text-4xl font-bold text-gray-900',
  },
  {
    id: 'h3',
    name: 'Heading 3',
    description: 'Medium heading',
    category: 'typography',
    classes: 'text-2xl sm:text-3xl font-semibold text-gray-900',
  },
  {
    id: 'h4',
    name: 'Heading 4',
    description: 'Small heading',
    category: 'typography',
    classes: 'text-xl font-semibold text-gray-900',
  },
  {
    id: 'h5',
    name: 'Heading 5',
    description: 'Extra small heading',
    category: 'typography',
    classes: 'text-lg font-semibold text-gray-900',
  },
  {
    id: 'text-body',
    name: 'Body Text',
    description: 'Standard body text',
    category: 'typography',
    classes: 'text-base text-gray-600 leading-relaxed',
  },
  {
    id: 'text-small',
    name: 'Small Text',
    description: 'Smaller body text',
    category: 'typography',
    classes: 'text-sm text-gray-600',
  },
  {
    id: 'text-muted',
    name: 'Muted Text',
    description: 'De-emphasized text',
    category: 'typography',
    classes: 'text-sm text-gray-500',
  },
  {
    id: 'text-link',
    name: 'Link Text',
    description: 'Clickable link styling',
    category: 'typography',
    classes: 'text-blue-600 hover:text-blue-800 underline transition-colors cursor-pointer',
  },
  {
    id: 'text-gradient',
    name: 'Gradient Text',
    description: 'Text with gradient color',
    category: 'typography',
    classes: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  {
    id: 'nav',
    name: 'Navigation Bar',
    description: 'Top navigation container',
    category: 'navigation',
    classes: 'bg-white shadow-sm border-b border-gray-200',
  },
  {
    id: 'nav-sticky',
    name: 'Sticky Navigation',
    description: 'Fixed top navigation',
    category: 'navigation',
    classes: 'bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50',
  },
  {
    id: 'nav-link',
    name: 'Nav Link',
    description: 'Navigation link',
    category: 'navigation',
    classes: 'text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors',
  },
  {
    id: 'nav-link-active',
    name: 'Active Nav Link',
    description: 'Active navigation link',
    category: 'navigation',
    classes: 'text-sm font-medium text-blue-600',
  },

  // ============================================
  // MODALS
  // ============================================
  {
    id: 'modal-overlay',
    name: 'Modal Overlay',
    description: 'Dark backdrop for modals',
    category: 'modals',
    classes: 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40',
  },
  {
    id: 'modal',
    name: 'Modal Container',
    description: 'Modal dialog box',
    category: 'modals',
    classes: 'fixed inset-x-4 top-1/2 -translate-y-1/2 mx-auto max-w-lg bg-white rounded-xl shadow-2xl z-50 p-6',
  },
  {
    id: 'modal-header',
    name: 'Modal Header',
    description: 'Modal title area',
    category: 'modals',
    classes: 'flex items-center justify-between pb-4 border-b border-gray-200',
  },
  {
    id: 'modal-body',
    name: 'Modal Body',
    description: 'Modal content area',
    category: 'modals',
    classes: 'py-4',
  },
  {
    id: 'modal-footer',
    name: 'Modal Footer',
    description: 'Modal action buttons area',
    category: 'modals',
    classes: 'flex items-center justify-end space-x-3 pt-4 border-t border-gray-200',
  },

  // ============================================
  // TABLES
  // ============================================
  {
    id: 'table',
    name: 'Table',
    description: 'Base table styling',
    category: 'tables',
    classes: 'min-w-full divide-y divide-gray-200',
  },
  {
    id: 'table-header',
    name: 'Table Header',
    description: 'Table header row container',
    category: 'tables',
    classes: 'bg-gray-50',
  },
  {
    id: 'th',
    name: 'Table Header Cell',
    description: 'Table header cell',
    category: 'tables',
    classes: 'px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider',
  },
  {
    id: 'td',
    name: 'Table Data Cell',
    description: 'Table data cell',
    category: 'tables',
    classes: 'px-6 py-4 text-sm text-gray-900 whitespace-nowrap',
  },
  {
    id: 'tr-hover',
    name: 'Table Row Hover',
    description: 'Table row with hover effect',
    category: 'tables',
    classes: 'hover:bg-gray-50 transition-colors',
  },
  {
    id: 'tr-striped',
    name: 'Striped Row',
    description: 'Alternating row background',
    category: 'tables',
    classes: 'even:bg-gray-50',
  },

  // ============================================
  // LISTS
  // ============================================
  {
    id: 'list',
    name: 'List',
    description: 'List with dividers',
    category: 'lists',
    classes: 'divide-y divide-gray-200',
  },
  {
    id: 'list-item',
    name: 'List Item',
    description: 'Basic list item',
    category: 'lists',
    classes: 'flex items-center justify-between py-4',
  },
  {
    id: 'list-item-hover',
    name: 'Hoverable List Item',
    description: 'List item with hover effect',
    category: 'lists',
    classes: 'flex items-center justify-between py-4 px-4 -mx-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer',
  },

  // ============================================
  // LOADING STATES
  // ============================================
  {
    id: 'skeleton',
    name: 'Skeleton',
    description: 'Loading skeleton animation',
    category: 'loading',
    classes: 'animate-pulse bg-gray-200 rounded',
  },
  {
    id: 'spinner',
    name: 'Spinner',
    description: 'Loading spinner',
    category: 'loading',
    classes: 'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
  },

  // ============================================
  // DIVIDERS
  // ============================================
  {
    id: 'divider',
    name: 'Horizontal Divider',
    description: 'Horizontal line separator',
    category: 'dividers',
    classes: 'border-t border-gray-200 my-4',
  },
  {
    id: 'divider-vertical',
    name: 'Vertical Divider',
    description: 'Vertical line separator',
    category: 'dividers',
    classes: 'border-l border-gray-200 mx-4 h-6',
  },
];
