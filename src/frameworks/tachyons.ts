/**
 * Tachyons Framework Configuration
 * Functional CSS for designing in the browser
 */

import { FrameworkConfig, ComponentPattern } from '../types.js';

export const tachyonsConfig: FrameworkConfig = {
  name: 'tachyons',
  displayName: 'Tachyons',
  version: '4.12',
  description: 'Functional CSS for humans - one of the original atomic CSS frameworks',
  website: 'https://tachyons.io',
  customClassSyntax: 'raw',
  configFiles: [],
  cssImport: '@import "tachyons";',
  // Tachyons uses suffix-based responsive modifiers
  breakpoints: {
    sm: '-ns',  // not-small
    md: '-m',   // medium
    lg: '-l',   // large
    xl: '-l',   // large (no xl in Tachyons)
    '2xl': '-l'
  }
};

/**
 * Tachyons Component Patterns
 * Using Tachyons' class naming conventions
 */
export const tachyonsPatterns: ComponentPattern[] = [
  // ============================================
  // BUTTONS
  // ============================================
  {
    id: 'btn-primary',
    name: 'btn-primary',
    description: 'Primary action button',
    category: 'buttons',
    classes: 'f6 link dim br2 ph3 pv2 mb2 dib white bg-blue pointer bn',
    ssr: { safe: true },
    frameworkNotes: {
      tachyons: 'f6=font-size-6, br2=border-radius-2, ph3=padding-horizontal-3, pv2=padding-vertical-2'
    }
  },
  {
    id: 'btn-secondary',
    name: 'btn-secondary',
    description: 'Secondary action button',
    category: 'buttons',
    classes: 'f6 link dim br2 ph3 pv2 mb2 dib dark-gray bg-light-gray pointer bn',
    ssr: { safe: true }
  },
  {
    id: 'btn-success',
    name: 'btn-success',
    description: 'Success button',
    category: 'buttons',
    classes: 'f6 link dim br2 ph3 pv2 mb2 dib white bg-green pointer bn',
    ssr: { safe: true }
  },
  {
    id: 'btn-danger',
    name: 'btn-danger',
    description: 'Danger/delete button',
    category: 'buttons',
    classes: 'f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-red pointer bn',
    ssr: { safe: true }
  },
  {
    id: 'btn-warning',
    name: 'btn-warning',
    description: 'Warning button',
    category: 'buttons',
    classes: 'f6 link dim br2 ph3 pv2 mb2 dib dark-gray bg-gold pointer bn',
    ssr: { safe: true }
  },
  {
    id: 'btn-outline',
    name: 'btn-outline',
    description: 'Outlined button',
    category: 'buttons',
    classes: 'f6 link dim br2 ph3 pv2 mb2 dib blue bg-white ba b--blue pointer',
    ssr: { safe: true }
  },
  {
    id: 'btn-ghost',
    name: 'btn-ghost',
    description: 'Ghost button',
    category: 'buttons',
    classes: 'f6 link dim ph3 pv2 mb2 dib gray bg-transparent bn pointer',
    ssr: { safe: true }
  },
  {
    id: 'btn-lg',
    name: 'btn-lg',
    description: 'Large button',
    category: 'buttons',
    classes: 'f5 link dim br2 ph4 pv3 mb2 dib white bg-blue pointer bn',
    ssr: { safe: true }
  },
  {
    id: 'btn-sm',
    name: 'btn-sm',
    description: 'Small button',
    category: 'buttons',
    classes: 'f7 link dim br1 ph2 pv1 mb2 dib white bg-blue pointer bn',
    ssr: { safe: true }
  },
  {
    id: 'btn-pill',
    name: 'btn-pill',
    description: 'Pill-shaped button',
    category: 'buttons',
    classes: 'f6 link dim br-pill ph3 pv2 mb2 dib white bg-blue pointer bn',
    ssr: { safe: true }
  },
  {
    id: 'btn-disabled',
    name: 'btn-disabled',
    description: 'Disabled button',
    category: 'buttons',
    classes: 'f6 br2 ph3 pv2 mb2 dib white bg-light-silver bn',
    ssr: { safe: true }
  },

  // ============================================
  // CARDS
  // ============================================
  {
    id: 'card',
    name: 'card',
    description: 'Basic card',
    category: 'cards',
    classes: 'bg-white br3 pa3 ba b--black-10 shadow-4',
    ssr: { safe: true }
  },
  {
    id: 'card-bordered',
    name: 'card-bordered',
    description: 'Card with border',
    category: 'cards',
    classes: 'bg-white br3 pa3 ba b--black-20',
    ssr: { safe: true }
  },
  {
    id: 'card-flat',
    name: 'card-flat',
    description: 'Flat card',
    category: 'cards',
    classes: 'bg-near-white br3 pa3',
    ssr: { safe: true }
  },
  {
    id: 'card-hover',
    name: 'card-hover',
    description: 'Card with hover effect',
    category: 'cards',
    classes: 'bg-white br3 pa3 ba b--black-10 shadow-4 grow',
    ssr: { safe: true }
  },
  {
    id: 'card-header',
    name: 'card-header',
    description: 'Card header',
    category: 'cards',
    classes: 'flex items-center justify-between pb3 bb b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'card-body',
    name: 'card-body',
    description: 'Card body',
    category: 'cards',
    classes: 'pa3',
    ssr: { safe: true }
  },
  {
    id: 'card-footer',
    name: 'card-footer',
    description: 'Card footer',
    category: 'cards',
    classes: 'flex items-center justify-between pt3 bt b--black-10',
    ssr: { safe: true }
  },

  // ============================================
  // FORMS
  // ============================================
  {
    id: 'input',
    name: 'input',
    description: 'Text input',
    category: 'forms',
    classes: 'input-reset ba b--black-20 pa2 br2 w-100 f6',
    ssr: { safe: true }
  },
  {
    id: 'input-error',
    name: 'input-error',
    description: 'Input with error',
    category: 'forms',
    classes: 'input-reset ba b--dark-red pa2 br2 w-100 f6',
    ssr: { safe: true }
  },
  {
    id: 'input-success',
    name: 'input-success',
    description: 'Input with success',
    category: 'forms',
    classes: 'input-reset ba b--green pa2 br2 w-100 f6',
    ssr: { safe: true }
  },
  {
    id: 'label',
    name: 'label',
    description: 'Form label',
    category: 'forms',
    classes: 'f6 b db mb2 dark-gray',
    ssr: { safe: true }
  },
  {
    id: 'helper-text',
    name: 'helper-text',
    description: 'Helper text',
    category: 'forms',
    classes: 'f7 gray mt1',
    ssr: { safe: true }
  },
  {
    id: 'error-text',
    name: 'error-text',
    description: 'Error text',
    category: 'forms',
    classes: 'f7 dark-red mt1',
    ssr: { safe: true }
  },
  {
    id: 'select',
    name: 'select',
    description: 'Select dropdown',
    category: 'forms',
    classes: 'ba b--black-20 pa2 br2 w-100 f6 bg-white',
    ssr: { safe: true }
  },
  {
    id: 'checkbox',
    name: 'checkbox',
    description: 'Checkbox',
    category: 'forms',
    classes: 'mr2',
    ssr: { safe: true }
  },
  {
    id: 'textarea',
    name: 'textarea',
    description: 'Textarea',
    category: 'forms',
    classes: 'input-reset ba b--black-20 pa2 br2 w-100 f6',
    ssr: { safe: true }
  },
  {
    id: 'form-group',
    name: 'form-group',
    description: 'Form group wrapper',
    category: 'forms',
    classes: 'mb3',
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
    classes: 'pa3 br2 ba',
    ssr: { safe: true }
  },
  {
    id: 'alert-info',
    name: 'alert-info',
    description: 'Info alert',
    category: 'alerts',
    classes: 'pa3 br2 ba b--lightest-blue bg-washed-blue dark-blue',
    ssr: { safe: true }
  },
  {
    id: 'alert-success',
    name: 'alert-success',
    description: 'Success alert',
    category: 'alerts',
    classes: 'pa3 br2 ba b--light-green bg-washed-green dark-green',
    ssr: { safe: true }
  },
  {
    id: 'alert-warning',
    name: 'alert-warning',
    description: 'Warning alert',
    category: 'alerts',
    classes: 'pa3 br2 ba b--light-yellow bg-washed-yellow dark-gray',
    ssr: { safe: true }
  },
  {
    id: 'alert-error',
    name: 'alert-error',
    description: 'Error alert',
    category: 'alerts',
    classes: 'pa3 br2 ba b--light-red bg-washed-red dark-red',
    ssr: { safe: true }
  },

  // ============================================
  // BADGES
  // ============================================
  {
    id: 'badge',
    name: 'badge',
    description: 'Base badge',
    category: 'badges',
    classes: 'f7 fw6 ph2 pv1 br-pill dib',
    ssr: { safe: true }
  },
  {
    id: 'badge-primary',
    name: 'badge-primary',
    description: 'Primary badge',
    category: 'badges',
    classes: 'f7 fw6 ph2 pv1 br-pill dib white bg-blue',
    ssr: { safe: true }
  },
  {
    id: 'badge-success',
    name: 'badge-success',
    description: 'Success badge',
    category: 'badges',
    classes: 'f7 fw6 ph2 pv1 br-pill dib white bg-green',
    ssr: { safe: true }
  },
  {
    id: 'badge-warning',
    name: 'badge-warning',
    description: 'Warning badge',
    category: 'badges',
    classes: 'f7 fw6 ph2 pv1 br-pill dib dark-gray bg-gold',
    ssr: { safe: true }
  },
  {
    id: 'badge-danger',
    name: 'badge-danger',
    description: 'Danger badge',
    category: 'badges',
    classes: 'f7 fw6 ph2 pv1 br-pill dib white bg-dark-red',
    ssr: { safe: true }
  },
  {
    id: 'badge-gray',
    name: 'badge-gray',
    description: 'Gray badge',
    category: 'badges',
    classes: 'f7 fw6 ph2 pv1 br-pill dib dark-gray bg-light-gray',
    ssr: { safe: true }
  },

  // ============================================
  // LAYOUT
  // ============================================
  {
    id: 'container',
    name: 'container',
    description: 'Centered container',
    category: 'layout',
    classes: 'mw7 center ph3 ph4-ns',
    ssr: { safe: true }
  },
  {
    id: 'container-wide',
    name: 'container-wide',
    description: 'Wide container',
    category: 'layout',
    classes: 'mw9 center ph3 ph4-ns',
    ssr: { safe: true }
  },
  {
    id: 'section',
    name: 'section',
    description: 'Page section',
    category: 'layout',
    classes: 'pv4 pv5-ns',
    ssr: { safe: true }
  },
  {
    id: 'flex-center',
    name: 'flex-center',
    description: 'Centered flex',
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
    description: 'Flex start',
    category: 'layout',
    classes: 'flex items-center justify-start',
    ssr: { safe: true }
  },
  {
    id: 'flex-end',
    name: 'flex-end',
    description: 'Flex end',
    category: 'layout',
    classes: 'flex items-center justify-end',
    ssr: { safe: true }
  },
  {
    id: 'stack',
    name: 'stack',
    description: 'Vertical stack',
    category: 'layout',
    classes: 'flex flex-column',
    ssr: { safe: true }
  },
  {
    id: 'row',
    name: 'row',
    description: 'Horizontal row',
    category: 'layout',
    classes: 'flex flex-row',
    ssr: { safe: true }
  },
  {
    id: 'grid-2',
    name: 'grid-2',
    description: '2-column layout',
    category: 'layout',
    classes: 'cf',
    usage: '<div class="grid-2"><div class="fl w-100 w-50-ns">...</div><div class="fl w-100 w-50-ns">...</div></div>',
    ssr: { safe: true }
  },
  {
    id: 'col-half',
    name: 'col-half',
    description: 'Half-width column',
    category: 'layout',
    classes: 'fl w-100 w-50-ns ph2',
    ssr: { safe: true }
  },
  {
    id: 'col-third',
    name: 'col-third',
    description: 'Third-width column',
    category: 'layout',
    classes: 'fl w-100 w-third-ns ph2',
    ssr: { safe: true }
  },
  {
    id: 'col-quarter',
    name: 'col-quarter',
    description: 'Quarter-width column',
    category: 'layout',
    classes: 'fl w-100 w-50-m w-25-l ph2',
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
    classes: 'f1 f-headline-ns fw9 near-black lh-title',
    ssr: { safe: true }
  },
  {
    id: 'heading-lg',
    name: 'heading-lg',
    description: 'Large heading',
    category: 'typography',
    classes: 'f2 f1-ns fw7 near-black lh-title',
    ssr: { safe: true }
  },
  {
    id: 'heading-md',
    name: 'heading-md',
    description: 'Medium heading',
    category: 'typography',
    classes: 'f3 f2-ns fw6 near-black lh-title',
    ssr: { safe: true }
  },
  {
    id: 'heading-sm',
    name: 'heading-sm',
    description: 'Small heading',
    category: 'typography',
    classes: 'f4 f3-ns fw6 near-black',
    ssr: { safe: true }
  },
  {
    id: 'text-body',
    name: 'text-body',
    description: 'Body text',
    category: 'typography',
    classes: 'f5 dark-gray lh-copy',
    ssr: { safe: true }
  },
  {
    id: 'text-muted',
    name: 'text-muted',
    description: 'Muted text',
    category: 'typography',
    classes: 'f6 gray',
    ssr: { safe: true }
  },
  {
    id: 'text-link',
    name: 'text-link',
    description: 'Link text',
    category: 'typography',
    classes: 'link blue dim',
    ssr: { safe: true }
  },
  {
    id: 'text-lead',
    name: 'text-lead',
    description: 'Lead paragraph',
    category: 'typography',
    classes: 'f4 f3-ns dark-gray lh-copy',
    ssr: { safe: true }
  },
  {
    id: 'text-small',
    name: 'text-small',
    description: 'Small text',
    category: 'typography',
    classes: 'f7 gray',
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
    classes: 'bg-white pa3 bb b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'nav-dark',
    name: 'nav-dark',
    description: 'Dark navigation bar',
    category: 'navigation',
    classes: 'bg-near-black pa3',
    ssr: { safe: true }
  },
  {
    id: 'nav-link',
    name: 'nav-link',
    description: 'Navigation link',
    category: 'navigation',
    classes: 'f6 link dim dark-gray dib mr3',
    ssr: { safe: true }
  },
  {
    id: 'nav-link-active',
    name: 'nav-link-active',
    description: 'Active navigation link',
    category: 'navigation',
    classes: 'f6 link blue dib mr3',
    ssr: { safe: true }
  },
  {
    id: 'nav-link-light',
    name: 'nav-link-light',
    description: 'Light navigation link',
    category: 'navigation',
    classes: 'f6 link dim white dib mr3',
    ssr: { safe: true }
  },
  {
    id: 'breadcrumb',
    name: 'breadcrumb',
    description: 'Breadcrumb navigation',
    category: 'navigation',
    classes: 'f6 gray',
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
    classes: 'fixed top-0 left-0 w-100 h-100 bg-black-50 z-9999',
    ssr: {
      safe: false,
      warning: 'Modal visibility controlled by JS'
    }
  },
  {
    id: 'modal',
    name: 'modal',
    description: 'Modal container',
    category: 'modals',
    classes: 'fixed top-2 left-2 right-2 mw6 center bg-white br3 pa4 shadow-5 z-max',
    ssr: { safe: true }
  },
  {
    id: 'modal-header',
    name: 'modal-header',
    description: 'Modal header',
    category: 'modals',
    classes: 'flex items-center justify-between pb3 bb b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'modal-body',
    name: 'modal-body',
    description: 'Modal body',
    category: 'modals',
    classes: 'pv3',
    ssr: { safe: true }
  },
  {
    id: 'modal-footer',
    name: 'modal-footer',
    description: 'Modal footer',
    category: 'modals',
    classes: 'flex items-center justify-end pt3 bt b--black-10',
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
    classes: 'w-100 collapse ba b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'table-striped',
    name: 'table-striped',
    description: 'Striped table',
    category: 'tables',
    classes: 'w-100 collapse ba b--black-10 striped--light-gray',
    ssr: { safe: true }
  },
  {
    id: 'th',
    name: 'th',
    description: 'Table header cell',
    category: 'tables',
    classes: 'f6 fw6 tl pa3 bg-near-white bb b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'td',
    name: 'td',
    description: 'Table data cell',
    category: 'tables',
    classes: 'f6 pa3 bb b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'tr-hover',
    name: 'tr-hover',
    description: 'Table row with hover',
    category: 'tables',
    classes: 'hover-bg-near-white',
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
    classes: 'br-100 bg-light-gray tc v-mid',
    ssr: { safe: true }
  },
  {
    id: 'avatar-sm',
    name: 'avatar-sm',
    description: 'Small avatar',
    category: 'avatars',
    classes: 'w2 h2 br-100 bg-light-gray f7 fw6 tc v-mid',
    ssr: { safe: true }
  },
  {
    id: 'avatar-md',
    name: 'avatar-md',
    description: 'Medium avatar',
    category: 'avatars',
    classes: 'w3 h3 br-100 bg-light-gray f6 fw6 tc v-mid',
    ssr: { safe: true }
  },
  {
    id: 'avatar-lg',
    name: 'avatar-lg',
    description: 'Large avatar',
    category: 'avatars',
    classes: 'w4 h4 br-100 bg-light-gray f4 fw6 tc v-mid',
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
    classes: 'w2 h2 br-100 ba bw2 b--light-gray b--solid animate-spin',
    ssr: {
      safe: false,
      warning: 'Requires custom animation CSS'
    }
  },
  {
    id: 'skeleton',
    name: 'skeleton',
    description: 'Skeleton placeholder',
    category: 'loading',
    classes: 'bg-light-gray br2 animate-pulse',
    ssr: { safe: true }
  },
  {
    id: 'skeleton-text',
    name: 'skeleton-text',
    description: 'Skeleton for text',
    category: 'loading',
    classes: 'h1 w-100 bg-light-gray br2 animate-pulse',
    ssr: { safe: true }
  },

  // ============================================
  // LISTS
  // ============================================
  {
    id: 'list',
    name: 'list',
    description: 'List container',
    category: 'lists',
    classes: 'list pl0',
    ssr: { safe: true }
  },
  {
    id: 'list-item',
    name: 'list-item',
    description: 'List item',
    category: 'lists',
    classes: 'flex items-center justify-between pv3 bb b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'list-item-hover',
    name: 'list-item-hover',
    description: 'List item with hover',
    category: 'lists',
    classes: 'flex items-center justify-between pv3 ph3 bb b--black-10 hover-bg-near-white',
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
    classes: 'bt b--black-10',
    ssr: { safe: true }
  },
  {
    id: 'divider-thick',
    name: 'divider-thick',
    description: 'Thick divider',
    category: 'dividers',
    classes: 'bt bw2 b--black-10',
    ssr: { safe: true }
  },
];

export default {
  config: tachyonsConfig,
  patterns: tachyonsPatterns
};
