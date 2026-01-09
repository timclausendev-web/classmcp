/**
 * Framework Registry
 * Central export for all supported CSS frameworks
 */

import { FrameworkConfig, ComponentPattern, StateVariant, CATEGORIES } from '../types.js';
import { tailwindConfig, tailwindPatterns } from './tailwind.js';
import { bootstrapConfig, bootstrapPatterns } from './bootstrap.js';
import { unocssConfig, unocssPatterns } from './unocss.js';
import { tachyonsConfig, tachyonsPatterns } from './tachyons.js';
import type { CustomComponentPattern } from '../config/transform.js';

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
// CUSTOM PATTERNS STORAGE
// ============================================

/** Storage for user-defined custom patterns */
let customPatterns: CustomComponentPattern[] = [];

/** Whether custom patterns should override built-ins with same ID */
let overrideBuiltins: boolean = false;

/**
 * Set custom patterns from user config
 */
export function setCustomPatterns(patterns: CustomComponentPattern[], override: boolean = false): void {
  customPatterns = patterns;
  overrideBuiltins = override;
}

/**
 * Get all custom patterns (unfiltered)
 */
export function getCustomPatterns(): CustomComponentPattern[] {
  return customPatterns;
}

/**
 * Get custom patterns filtered for a specific framework
 */
export function getCustomPatternsForFramework(frameworkId: FrameworkId): CustomComponentPattern[] {
  return customPatterns.filter(p => {
    if (!p._frameworks || p._frameworks.length === 0) {
      return true; // No framework restriction = applies to all
    }
    return p._frameworks.includes(frameworkId);
  });
}

/**
 * Clear all custom patterns
 */
export function clearCustomPatterns(): void {
  customPatterns = [];
  overrideBuiltins = false;
}

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
 * Get all patterns for a framework (built-in + custom)
 */
export function getPatterns(frameworkId: FrameworkId): ComponentPattern[] {
  const builtIn = frameworks[frameworkId]?.patterns || [];
  const custom = getCustomPatternsForFramework(frameworkId);

  if (overrideBuiltins) {
    // Custom patterns override built-ins with same ID
    const customIds = new Set(custom.map(p => p.id));
    const filteredBuiltIn = builtIn.filter(p => !customIds.has(p.id));
    return [...filteredBuiltIn, ...custom];
  }

  // Custom patterns extend built-ins (no override)
  return [...builtIn, ...custom];
}

/**
 * Get a pattern by ID (checks custom first if overrideBuiltins, else built-in first)
 */
export function getPattern(
  frameworkId: FrameworkId,
  patternId: string
): ComponentPattern | undefined {
  const builtIn = frameworks[frameworkId]?.patterns.find(p => p.id === patternId);
  const custom = getCustomPatternsForFramework(frameworkId).find(p => p.id === patternId);

  if (overrideBuiltins) {
    return custom ?? builtIn; // Custom wins
  }
  return builtIn ?? custom; // Built-in wins, custom extends
}

/**
 * Check if a pattern is custom (user-defined)
 */
export function isCustomPattern(pattern: ComponentPattern): boolean {
  return '_isCustom' in pattern && (pattern as CustomComponentPattern)._isCustom === true;
}

/**
 * Get patterns by category (built-in + custom)
 */
export function getPatternsByCategory(
  frameworkId: FrameworkId,
  category: string
): ComponentPattern[] {
  return getPatterns(frameworkId).filter(p => p.category === category);
}

/**
 * Search patterns by query (built-in + custom)
 */
export function searchPatterns(
  frameworkId: FrameworkId,
  query: string
): ComponentPattern[] {
  const q = query.toLowerCase();
  return getPatterns(frameworkId).filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.id.toLowerCase().includes(q)
  );
}

/**
 * Get all categories for a framework (built-in + custom)
 */
export function getCategories(frameworkId: FrameworkId): string[] {
  const patterns = getPatterns(frameworkId);
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
 * Generate CSS for patterns (built-in + custom)
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

  // Use getPatterns() to include custom patterns
  let patterns = getPatterns(frameworkId);
  if (categories?.length) {
    patterns = patterns.filter(p => categories.includes(p.category));
  }

  let css = `/* Generated by classmcp - ${framework.config.displayName} */\n`;
  css += `/* https://github.com/anthropics/classmcp */\n\n`;

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
      const isCustomCategory = category === 'custom' || pats.some(p => isCustomPattern(p));
      css += `/* ${category.toUpperCase()}${isCustomCategory ? ' (includes custom)' : ''} */\n`;
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
 * Get framework statistics (includes custom patterns)
 */
export function getFrameworkStats(frameworkId: FrameworkId): {
  totalPatterns: number;
  builtInPatterns: number;
  customPatterns: number;
  categories: number;
  ssrSafePatterns: number;
  clientOnlyPatterns: number;
} {
  const allPatterns = getPatterns(frameworkId);
  const builtIn = frameworks[frameworkId]?.patterns || [];
  const custom = getCustomPatternsForFramework(frameworkId);

  return {
    totalPatterns: allPatterns.length,
    builtInPatterns: builtIn.length,
    customPatterns: custom.length,
    categories: new Set(allPatterns.map(p => p.category)).size,
    ssrSafePatterns: allPatterns.filter(p => isSSRSafe(p)).length,
    clientOnlyPatterns: allPatterns.filter(p => !isSSRSafe(p)).length
  };
}

// Re-export everything
export { CATEGORIES };
export { tailwindConfig, tailwindPatterns };
export { bootstrapConfig, bootstrapPatterns };
export { unocssConfig, unocssPatterns };
export { tachyonsConfig, tachyonsPatterns };
