/**
 * Bootstrap 5 Framework Configuration
 * Utility-first classes compatible with Bootstrap's utility API
 */

import { FrameworkConfig, ComponentPattern } from '../types.js';

export const bootstrapConfig: FrameworkConfig = {
  name: 'bootstrap',
  displayName: 'Bootstrap 5',
  version: '5.3',
  description: 'The most popular CSS framework - utility classes',
  website: 'https://getbootstrap.com',
  customClassSyntax: 'raw',
  configFiles: ['bootstrap.config.js', 'bootstrap.scss'],
  cssImport: '@import "bootstrap/dist/css/bootstrap.min.css";',
};

/**
 * Bootstrap 5 Component Patterns
 * Using Bootstrap's utility classes
 */
export const bootstrapPatterns: ComponentPattern[] = [
  // ============================================
  // BUTTONS
  // ============================================
  {
    id: 'btn-primary',
    name: 'btn-primary',
    description: 'Primary action button',
    category: 'buttons',
    classes: 'btn btn-primary',
    ssr: { safe: true }
  },
  {
    id: 'btn-secondary',
    name: 'btn-secondary',
    description: 'Secondary action button',
    category: 'buttons',
    classes: 'btn btn-secondary',
    ssr: { safe: true }
  },
  {
    id: 'btn-success',
    name: 'btn-success',
    description: 'Success button',
    category: 'buttons',
    classes: 'btn btn-success',
    ssr: { safe: true }
  },
  {
    id: 'btn-danger',
    name: 'btn-danger',
    description: 'Danger/delete button',
    category: 'buttons',
    classes: 'btn btn-danger',
    ssr: { safe: true }
  },
  {
    id: 'btn-warning',
    name: 'btn-warning',
    description: 'Warning button',
    category: 'buttons',
    classes: 'btn btn-warning',
    ssr: { safe: true }
  },
  {
    id: 'btn-info',
    name: 'btn-info',
    description: 'Info button',
    category: 'buttons',
    classes: 'btn btn-info',
    ssr: { safe: true }
  },
  {
    id: 'btn-light',
    name: 'btn-light',
    description: 'Light button',
    category: 'buttons',
    classes: 'btn btn-light',
    ssr: { safe: true }
  },
  {
    id: 'btn-dark',
    name: 'btn-dark',
    description: 'Dark button',
    category: 'buttons',
    classes: 'btn btn-dark',
    ssr: { safe: true }
  },
  {
    id: 'btn-outline-primary',
    name: 'btn-outline-primary',
    description: 'Primary outline button',
    category: 'buttons',
    classes: 'btn btn-outline-primary',
    ssr: { safe: true }
  },
  {
    id: 'btn-link',
    name: 'btn-link',
    description: 'Link styled button',
    category: 'buttons',
    classes: 'btn btn-link',
    ssr: { safe: true }
  },
  {
    id: 'btn-lg',
    name: 'btn-lg',
    description: 'Large button',
    category: 'buttons',
    classes: 'btn btn-primary btn-lg',
    ssr: { safe: true }
  },
  {
    id: 'btn-sm',
    name: 'btn-sm',
    description: 'Small button',
    category: 'buttons',
    classes: 'btn btn-primary btn-sm',
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
    classes: 'card',
    ssr: { safe: true }
  },
  {
    id: 'card-body',
    name: 'card-body',
    description: 'Card body content',
    category: 'cards',
    classes: 'card-body',
    ssr: { safe: true }
  },
  {
    id: 'card-header',
    name: 'card-header',
    description: 'Card header',
    category: 'cards',
    classes: 'card-header',
    ssr: { safe: true }
  },
  {
    id: 'card-footer',
    name: 'card-footer',
    description: 'Card footer',
    category: 'cards',
    classes: 'card-footer',
    ssr: { safe: true }
  },
  {
    id: 'card-title',
    name: 'card-title',
    description: 'Card title',
    category: 'cards',
    classes: 'card-title',
    ssr: { safe: true }
  },
  {
    id: 'card-text',
    name: 'card-text',
    description: 'Card text',
    category: 'cards',
    classes: 'card-text',
    ssr: { safe: true }
  },
  {
    id: 'card-shadow',
    name: 'card-shadow',
    description: 'Card with shadow',
    category: 'cards',
    classes: 'card shadow',
    ssr: { safe: true }
  },

  // ============================================
  // FORMS
  // ============================================
  {
    id: 'form-control',
    name: 'form-control',
    description: 'Form input control',
    category: 'forms',
    classes: 'form-control',
    ssr: { safe: true }
  },
  {
    id: 'form-control-lg',
    name: 'form-control-lg',
    description: 'Large form input',
    category: 'forms',
    classes: 'form-control form-control-lg',
    ssr: { safe: true }
  },
  {
    id: 'form-control-sm',
    name: 'form-control-sm',
    description: 'Small form input',
    category: 'forms',
    classes: 'form-control form-control-sm',
    ssr: { safe: true }
  },
  {
    id: 'form-label',
    name: 'form-label',
    description: 'Form label',
    category: 'forms',
    classes: 'form-label',
    ssr: { safe: true }
  },
  {
    id: 'form-select',
    name: 'form-select',
    description: 'Form select dropdown',
    category: 'forms',
    classes: 'form-select',
    ssr: { safe: true }
  },
  {
    id: 'form-check',
    name: 'form-check',
    description: 'Checkbox/radio wrapper',
    category: 'forms',
    classes: 'form-check',
    ssr: { safe: true }
  },
  {
    id: 'form-check-input',
    name: 'form-check-input',
    description: 'Checkbox/radio input',
    category: 'forms',
    classes: 'form-check-input',
    ssr: { safe: true }
  },
  {
    id: 'form-floating',
    name: 'form-floating',
    description: 'Floating label input',
    category: 'forms',
    classes: 'form-floating',
    ssr: { safe: true }
  },
  {
    id: 'input-group',
    name: 'input-group',
    description: 'Input group container',
    category: 'forms',
    classes: 'input-group',
    ssr: { safe: true }
  },
  {
    id: 'is-invalid',
    name: 'is-invalid',
    description: 'Invalid input state',
    category: 'forms',
    classes: 'form-control is-invalid',
    ssr: { safe: true }
  },
  {
    id: 'is-valid',
    name: 'is-valid',
    description: 'Valid input state',
    category: 'forms',
    classes: 'form-control is-valid',
    ssr: { safe: true }
  },

  // ============================================
  // ALERTS
  // ============================================
  {
    id: 'alert-primary',
    name: 'alert-primary',
    description: 'Primary alert',
    category: 'alerts',
    classes: 'alert alert-primary',
    ssr: { safe: true }
  },
  {
    id: 'alert-secondary',
    name: 'alert-secondary',
    description: 'Secondary alert',
    category: 'alerts',
    classes: 'alert alert-secondary',
    ssr: { safe: true }
  },
  {
    id: 'alert-success',
    name: 'alert-success',
    description: 'Success alert',
    category: 'alerts',
    classes: 'alert alert-success',
    ssr: { safe: true }
  },
  {
    id: 'alert-danger',
    name: 'alert-danger',
    description: 'Danger alert',
    category: 'alerts',
    classes: 'alert alert-danger',
    ssr: { safe: true }
  },
  {
    id: 'alert-warning',
    name: 'alert-warning',
    description: 'Warning alert',
    category: 'alerts',
    classes: 'alert alert-warning',
    ssr: { safe: true }
  },
  {
    id: 'alert-info',
    name: 'alert-info',
    description: 'Info alert',
    category: 'alerts',
    classes: 'alert alert-info',
    ssr: { safe: true }
  },
  {
    id: 'alert-dismissible',
    name: 'alert-dismissible',
    description: 'Dismissible alert',
    category: 'alerts',
    classes: 'alert alert-warning alert-dismissible fade show',
    ssr: {
      safe: false,
      warning: 'Dismissible alerts require Bootstrap JS for close functionality',
      clientOnly: 'alert-dismissible fade show'
    }
  },

  // ============================================
  // BADGES
  // ============================================
  {
    id: 'badge-primary',
    name: 'badge-primary',
    description: 'Primary badge',
    category: 'badges',
    classes: 'badge bg-primary',
    ssr: { safe: true }
  },
  {
    id: 'badge-secondary',
    name: 'badge-secondary',
    description: 'Secondary badge',
    category: 'badges',
    classes: 'badge bg-secondary',
    ssr: { safe: true }
  },
  {
    id: 'badge-success',
    name: 'badge-success',
    description: 'Success badge',
    category: 'badges',
    classes: 'badge bg-success',
    ssr: { safe: true }
  },
  {
    id: 'badge-danger',
    name: 'badge-danger',
    description: 'Danger badge',
    category: 'badges',
    classes: 'badge bg-danger',
    ssr: { safe: true }
  },
  {
    id: 'badge-warning',
    name: 'badge-warning',
    description: 'Warning badge',
    category: 'badges',
    classes: 'badge text-dark bg-warning',
    ssr: { safe: true }
  },
  {
    id: 'badge-info',
    name: 'badge-info',
    description: 'Info badge',
    category: 'badges',
    classes: 'badge bg-info',
    ssr: { safe: true }
  },
  {
    id: 'badge-pill',
    name: 'badge-pill',
    description: 'Pill-shaped badge',
    category: 'badges',
    classes: 'badge rounded-pill bg-primary',
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
    classes: 'container',
    ssr: { safe: true }
  },
  {
    id: 'container-fluid',
    name: 'container-fluid',
    description: 'Full-width container',
    category: 'layout',
    classes: 'container-fluid',
    ssr: { safe: true }
  },
  {
    id: 'row',
    name: 'row',
    description: 'Grid row',
    category: 'layout',
    classes: 'row',
    ssr: { safe: true }
  },
  {
    id: 'col',
    name: 'col',
    description: 'Auto-width column',
    category: 'layout',
    classes: 'col',
    ssr: { safe: true }
  },
  {
    id: 'col-6',
    name: 'col-6',
    description: 'Half-width column',
    category: 'layout',
    classes: 'col-6',
    ssr: { safe: true }
  },
  {
    id: 'col-md-6',
    name: 'col-md-6',
    description: 'Half-width on medium+',
    category: 'layout',
    classes: 'col-12 col-md-6',
    ssr: { safe: true }
  },
  {
    id: 'col-lg-4',
    name: 'col-lg-4',
    description: 'Third-width on large+',
    category: 'layout',
    classes: 'col-12 col-md-6 col-lg-4',
    ssr: { safe: true }
  },
  {
    id: 'd-flex',
    name: 'd-flex',
    description: 'Flex container',
    category: 'layout',
    classes: 'd-flex',
    ssr: { safe: true }
  },
  {
    id: 'flex-center',
    name: 'flex-center',
    description: 'Centered flex',
    category: 'layout',
    classes: 'd-flex justify-content-center align-items-center',
    ssr: { safe: true }
  },
  {
    id: 'flex-between',
    name: 'flex-between',
    description: 'Space-between flex',
    category: 'layout',
    classes: 'd-flex justify-content-between align-items-center',
    ssr: { safe: true }
  },
  {
    id: 'gap-3',
    name: 'gap-3',
    description: 'Gap spacing',
    category: 'layout',
    classes: 'gap-3',
    ssr: { safe: true }
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  {
    id: 'h1',
    name: 'display-1',
    description: 'Display heading 1',
    category: 'typography',
    classes: 'display-1',
    ssr: { safe: true }
  },
  {
    id: 'h2',
    name: 'display-2',
    description: 'Display heading 2',
    category: 'typography',
    classes: 'display-2',
    ssr: { safe: true }
  },
  {
    id: 'lead',
    name: 'lead',
    description: 'Lead paragraph',
    category: 'typography',
    classes: 'lead',
    ssr: { safe: true }
  },
  {
    id: 'text-muted',
    name: 'text-muted',
    description: 'Muted text',
    category: 'typography',
    classes: 'text-muted',
    ssr: { safe: true }
  },
  {
    id: 'text-primary',
    name: 'text-primary',
    description: 'Primary colored text',
    category: 'typography',
    classes: 'text-primary',
    ssr: { safe: true }
  },
  {
    id: 'fw-bold',
    name: 'fw-bold',
    description: 'Bold text',
    category: 'typography',
    classes: 'fw-bold',
    ssr: { safe: true }
  },
  {
    id: 'fs-1',
    name: 'fs-1',
    description: 'Font size 1 (largest)',
    category: 'typography',
    classes: 'fs-1',
    ssr: { safe: true }
  },

  // ============================================
  // NAVIGATION
  // ============================================
  {
    id: 'navbar',
    name: 'navbar',
    description: 'Navigation bar',
    category: 'navigation',
    classes: 'navbar navbar-expand-lg navbar-light bg-light',
    ssr: { safe: true }
  },
  {
    id: 'navbar-dark',
    name: 'navbar-dark',
    description: 'Dark navigation bar',
    category: 'navigation',
    classes: 'navbar navbar-expand-lg navbar-dark bg-dark',
    ssr: { safe: true }
  },
  {
    id: 'nav-link',
    name: 'nav-link',
    description: 'Navigation link',
    category: 'navigation',
    classes: 'nav-link',
    ssr: { safe: true }
  },
  {
    id: 'nav-link-active',
    name: 'nav-link-active',
    description: 'Active navigation link',
    category: 'navigation',
    classes: 'nav-link active',
    ssr: { safe: true }
  },
  {
    id: 'nav-tabs',
    name: 'nav-tabs',
    description: 'Tab navigation',
    category: 'navigation',
    classes: 'nav nav-tabs',
    ssr: { safe: true }
  },
  {
    id: 'nav-pills',
    name: 'nav-pills',
    description: 'Pill navigation',
    category: 'navigation',
    classes: 'nav nav-pills',
    ssr: { safe: true }
  },
  {
    id: 'breadcrumb',
    name: 'breadcrumb',
    description: 'Breadcrumb navigation',
    category: 'navigation',
    classes: 'breadcrumb',
    ssr: { safe: true }
  },

  // ============================================
  // MODALS (requires JS)
  // ============================================
  {
    id: 'modal',
    name: 'modal',
    description: 'Modal container',
    category: 'modals',
    classes: 'modal fade',
    ssr: {
      safe: false,
      warning: 'Bootstrap modals require JS to show/hide. Consider SSR-friendly alternatives.',
      clientOnly: 'fade'
    }
  },
  {
    id: 'modal-dialog',
    name: 'modal-dialog',
    description: 'Modal dialog wrapper',
    category: 'modals',
    classes: 'modal-dialog',
    ssr: { safe: true }
  },
  {
    id: 'modal-content',
    name: 'modal-content',
    description: 'Modal content container',
    category: 'modals',
    classes: 'modal-content',
    ssr: { safe: true }
  },
  {
    id: 'modal-header',
    name: 'modal-header',
    description: 'Modal header',
    category: 'modals',
    classes: 'modal-header',
    ssr: { safe: true }
  },
  {
    id: 'modal-body',
    name: 'modal-body',
    description: 'Modal body',
    category: 'modals',
    classes: 'modal-body',
    ssr: { safe: true }
  },
  {
    id: 'modal-footer',
    name: 'modal-footer',
    description: 'Modal footer',
    category: 'modals',
    classes: 'modal-footer',
    ssr: { safe: true }
  },

  // ============================================
  // TABLES
  // ============================================
  {
    id: 'table',
    name: 'table',
    description: 'Basic table',
    category: 'tables',
    classes: 'table',
    ssr: { safe: true }
  },
  {
    id: 'table-striped',
    name: 'table-striped',
    description: 'Striped table rows',
    category: 'tables',
    classes: 'table table-striped',
    ssr: { safe: true }
  },
  {
    id: 'table-bordered',
    name: 'table-bordered',
    description: 'Bordered table',
    category: 'tables',
    classes: 'table table-bordered',
    ssr: { safe: true }
  },
  {
    id: 'table-hover',
    name: 'table-hover',
    description: 'Hoverable table rows',
    category: 'tables',
    classes: 'table table-hover',
    ssr: { safe: true }
  },
  {
    id: 'table-responsive',
    name: 'table-responsive',
    description: 'Responsive table wrapper',
    category: 'tables',
    classes: 'table-responsive',
    ssr: { safe: true }
  },
  {
    id: 'table-dark',
    name: 'table-dark',
    description: 'Dark table',
    category: 'tables',
    classes: 'table table-dark',
    ssr: { safe: true }
  },

  // ============================================
  // LISTS
  // ============================================
  {
    id: 'list-group',
    name: 'list-group',
    description: 'List group container',
    category: 'lists',
    classes: 'list-group',
    ssr: { safe: true }
  },
  {
    id: 'list-group-item',
    name: 'list-group-item',
    description: 'List group item',
    category: 'lists',
    classes: 'list-group-item',
    ssr: { safe: true }
  },
  {
    id: 'list-group-item-action',
    name: 'list-group-item-action',
    description: 'Clickable list item',
    category: 'lists',
    classes: 'list-group-item list-group-item-action',
    ssr: { safe: true }
  },
  {
    id: 'list-group-flush',
    name: 'list-group-flush',
    description: 'Flush list group (no borders)',
    category: 'lists',
    classes: 'list-group list-group-flush',
    ssr: { safe: true }
  },

  // ============================================
  // LOADING (requires JS animation)
  // ============================================
  {
    id: 'spinner-border',
    name: 'spinner-border',
    description: 'Border spinner',
    category: 'loading',
    classes: 'spinner-border',
    ssr: {
      safe: false,
      warning: 'Spinner animation runs via CSS but initial state may flash during hydration'
    }
  },
  {
    id: 'spinner-grow',
    name: 'spinner-grow',
    description: 'Growing spinner',
    category: 'loading',
    classes: 'spinner-grow',
    ssr: {
      safe: false,
      warning: 'Spinner animation runs via CSS but initial state may flash during hydration'
    }
  },
  {
    id: 'placeholder',
    name: 'placeholder',
    description: 'Loading placeholder',
    category: 'loading',
    classes: 'placeholder',
    ssr: { safe: true }
  },
  {
    id: 'placeholder-glow',
    name: 'placeholder-glow',
    description: 'Glowing placeholder',
    category: 'loading',
    classes: 'placeholder-glow',
    ssr: { safe: true }
  },

  // ============================================
  // BACKGROUNDS & GRADIENTS
  // ============================================
  {
    id: 'bg-gradient-primary',
    name: 'bg-gradient-primary',
    description: 'Primary gradient background',
    category: 'backgrounds',
    classes: 'bg-primary bg-gradient text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-gradient-secondary',
    name: 'bg-gradient-secondary',
    description: 'Secondary gradient background',
    category: 'backgrounds',
    classes: 'bg-secondary bg-gradient text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-gradient-success',
    name: 'bg-gradient-success',
    description: 'Success gradient background',
    category: 'backgrounds',
    classes: 'bg-success bg-gradient text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-gradient-danger',
    name: 'bg-gradient-danger',
    description: 'Danger gradient background',
    category: 'backgrounds',
    classes: 'bg-danger bg-gradient text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-gradient-warning',
    name: 'bg-gradient-warning',
    description: 'Warning gradient background',
    category: 'backgrounds',
    classes: 'bg-warning bg-gradient text-dark',
    ssr: { safe: true }
  },
  {
    id: 'bg-gradient-info',
    name: 'bg-gradient-info',
    description: 'Info gradient background',
    category: 'backgrounds',
    classes: 'bg-info bg-gradient text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-gradient-dark',
    name: 'bg-gradient-dark',
    description: 'Dark gradient background',
    category: 'backgrounds',
    classes: 'bg-dark bg-gradient text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-light-subtle',
    name: 'bg-light-subtle',
    description: 'Subtle light background',
    category: 'backgrounds',
    classes: 'bg-light-subtle',
    ssr: { safe: true }
  },
  {
    id: 'bg-dark-subtle',
    name: 'bg-dark-subtle',
    description: 'Subtle dark background',
    category: 'backgrounds',
    classes: 'bg-dark-subtle',
    ssr: { safe: true }
  },
  {
    id: 'bg-body-tertiary',
    name: 'bg-body-tertiary',
    description: 'Tertiary body background',
    category: 'backgrounds',
    classes: 'bg-body-tertiary',
    ssr: { safe: true }
  },
  {
    id: 'bg-opacity-75',
    name: 'bg-opacity-75',
    description: 'Semi-transparent background',
    category: 'backgrounds',
    classes: 'bg-primary bg-opacity-75 text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-opacity-50',
    name: 'bg-opacity-50',
    description: 'Half-transparent background',
    category: 'backgrounds',
    classes: 'bg-primary bg-opacity-50 text-white',
    ssr: { safe: true }
  },
  {
    id: 'bg-opacity-25',
    name: 'bg-opacity-25',
    description: 'Light transparent background',
    category: 'backgrounds',
    classes: 'bg-primary bg-opacity-25',
    ssr: { safe: true }
  },
  {
    id: 'bg-transparent',
    name: 'bg-transparent',
    description: 'Transparent background',
    category: 'backgrounds',
    classes: 'bg-transparent',
    ssr: { safe: true }
  },
];

export default {
  config: bootstrapConfig,
  patterns: bootstrapPatterns
};
