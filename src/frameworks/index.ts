/**
 * Framework Registry
 * Central export for all supported CSS frameworks
 */

import { FrameworkConfig, ComponentPattern, StateVariant, CATEGORIES } from '../types.js';
import { tailwindConfig, tailwindPatterns } from './tailwind.js';
import { bootstrapConfig, bootstrapPatterns } from './bootstrap.js';
import { unocssConfig, unocssPatterns } from './unocss.js';
import { tachyonsConfig, tachyonsPatterns } from './tachyons.js';

// ============================================
// FRAMEWORK REGISTRY
// ============================================

export type FrameworkId = 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons';

export interface FrameworkModule {
  config: FrameworkConfig;
  patterns: ComponentPattern[];
}

export const frameworks: Record<FrameworkId, FrameworkModule> = {
  tailwind: { config: tailwindConfig, patterns: tailwindPatterns },
  bootstrap: { config: bootstrapConfig, patterns: bootstrapPatterns },
  unocss: { config: unocssConfig, patterns: unocssPatterns },
  tachyons: { config: tachyonsConfig, patterns: tachyonsPatterns }
};

// ============================================
// FRAMEWORK DETECTION
// ============================================

/**
 * Detect which framework is in use based on config files
 * Returns the detected framework or 'tailwind' as default
 */
export async function detectFramework(projectPath: string): Promise<FrameworkId> {
  // This would check for framework config files
  // For now, return tailwind as default
  const fs = await import('fs').then(m => m.promises);
  const path = await import('path');

  for (const [id, framework] of Object.entries(frameworks)) {
    for (const configFile of framework.config.configFiles) {
      try {
        await fs.access(path.join(projectPath, configFile));
        return id as FrameworkId;
      } catch {
        // File doesn't exist, continue
      }
    }
  }

  return 'tailwind'; // Default
}

// ============================================
// PATTERN UTILITIES
// ============================================

/**
 * Get all patterns for a framework
 */
export function getPatterns(frameworkId: FrameworkId): ComponentPattern[] {
  return frameworks[frameworkId]?.patterns || [];
}

/**
 * Get a pattern by ID
 */
export function getPattern(
  frameworkId: FrameworkId,
  patternId: string
): ComponentPattern | undefined {
  return frameworks[frameworkId]?.patterns.find(p => p.id === patternId);
}

/**
 * Get patterns by category
 */
export function getPatternsByCategory(
  frameworkId: FrameworkId,
  category: string
): ComponentPattern[] {
  return frameworks[frameworkId]?.patterns.filter(p => p.category === category) || [];
}

/**
 * Search patterns by query
 */
export function searchPatterns(
  frameworkId: FrameworkId,
  query: string
): ComponentPattern[] {
  const q = query.toLowerCase();
  return frameworks[frameworkId]?.patterns.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  ) || [];
}

/**
 * Get all categories for a framework
 */
export function getCategories(frameworkId: FrameworkId): string[] {
  const patterns = frameworks[frameworkId]?.patterns || [];
  return [...new Set(patterns.map(p => p.category))];
}

// ============================================
// CLASS STRING UTILITIES
// ============================================

/**
 * Resolve classes from pattern (handles both string and StateVariant)
 */
export function resolveClasses(
  pattern: ComponentPattern,
  options: {
    includeStates?: boolean;
    states?: ('hover' | 'focus' | 'active' | 'disabled')[];
    ssrSafe?: boolean;
  } = {}
): string {
  const { includeStates = false, states = [], ssrSafe = false } = options;

  if (typeof pattern.classes === 'string') {
    return pattern.classes;
  }

  // StateVariant object
  const variant = pattern.classes as StateVariant;
  let classes = variant.base;

  if (includeStates && !ssrSafe) {
    // Include all state variants
    if (variant.hover) classes += ` ${variant.hover}`;
    if (variant.focus) classes += ` ${variant.focus}`;
    if (variant.active) classes += ` ${variant.active}`;
    if (variant.disabled) classes += ` ${variant.disabled}`;
    if (variant.groupHover) classes += ` ${variant.groupHover}`;
  } else if (states.length > 0) {
    // Include specific states
    for (const state of states) {
      const stateClass = variant[state];
      if (stateClass) classes += ` ${stateClass}`;
    }
  }

  return classes;
}

/**
 * Check if a pattern is SSR-safe
 */
export function isSSRSafe(pattern: ComponentPattern): boolean {
  return pattern.ssr?.safe !== false;
}

/**
 * Get SSR warning for a pattern
 */
export function getSSRWarning(pattern: ComponentPattern): string | undefined {
  return pattern.ssr?.warning;
}

/**
 * Get client-only classes for a pattern
 */
export function getClientOnlyClasses(pattern: ComponentPattern): string | undefined {
  return pattern.ssr?.clientOnly;
}

// ============================================
// CSS GENERATION
// ============================================

/**
 * Generate CSS for patterns
 */
export function generateCSS(
  frameworkId: FrameworkId,
  options: {
    categories?: string[];
    includeStates?: boolean;
    minified?: boolean;
  } = {}
): string {
  const { categories, includeStates = true, minified = false } = options;

  const framework = frameworks[frameworkId];
  if (!framework) {
    throw new Error(`Unknown framework: ${frameworkId}`);
  }

  let patterns = framework.patterns;
  if (categories?.length) {
    patterns = patterns.filter(p => categories.includes(p.category));
  }

  let css = `/* Generated by classmcp - ${framework.config.displayName} */\n`;
  css += `/* https://classmcp.com */\n\n`;

  // Group by category
  const grouped = new Map<string, ComponentPattern[]>();
  for (const p of patterns) {
    if (!grouped.has(p.category)) {
      grouped.set(p.category, []);
    }
    grouped.get(p.category)!.push(p);
  }

  for (const [category, pats] of grouped) {
    if (!minified) {
      css += `/* ${category.toUpperCase()} */\n`;
    }

    for (const p of pats) {
      const classes = resolveClasses(p, { includeStates });

      if (framework.config.customClassSyntax === '@apply') {
        css += `.${p.id} { @apply ${classes}; }\n`;
      } else {
        // Raw CSS - would need actual CSS values
        css += `.${p.id} { /* ${classes} */ }\n`;
      }
    }

    if (!minified) {
      css += '\n';
    }
  }

  return css;
}

// ============================================
// FRAMEWORK INFO
// ============================================

/**
 * Get framework configuration
 */
export function getFrameworkConfig(frameworkId: FrameworkId): FrameworkConfig | undefined {
  return frameworks[frameworkId]?.config;
}

/**
 * Get all available frameworks
 */
export function listFrameworks(): { id: FrameworkId; name: string; description: string }[] {
  return Object.entries(frameworks).map(([id, framework]) => ({
    id: id as FrameworkId,
    name: framework.config.displayName,
    description: framework.config.description
  }));
}

/**
 * Get framework statistics
 */
export function getFrameworkStats(frameworkId: FrameworkId): {
  totalPatterns: number;
  categories: number;
  ssrSafePatterns: number;
  clientOnlyPatterns: number;
} {
  const patterns = frameworks[frameworkId]?.patterns || [];

  return {
    totalPatterns: patterns.length,
    categories: new Set(patterns.map(p => p.category)).size,
    ssrSafePatterns: patterns.filter(p => isSSRSafe(p)).length,
    clientOnlyPatterns: patterns.filter(p => !isSSRSafe(p)).length
  };
}

// Re-export everything
export { CATEGORIES };
export { tailwindConfig, tailwindPatterns };
export { bootstrapConfig, bootstrapPatterns };
export { unocssConfig, unocssPatterns };
export { tachyonsConfig, tachyonsPatterns };
