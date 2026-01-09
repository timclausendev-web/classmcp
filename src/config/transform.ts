/**
 * Pattern Transformer
 * Converts simplified CustomPatternInput to full ComponentPattern
 */

import type { ComponentPattern, CustomPatternInput, StateVariant } from '../types.js';

/**
 * Convert CustomStateVariant to full StateVariant
 */
function normalizeClasses(classes: string | { base: string; hover?: string; focus?: string; active?: string; disabled?: string }): string | StateVariant {
  if (typeof classes === 'string') {
    return classes;
  }

  // It's already a valid StateVariant shape
  return classes as StateVariant;
}

/**
 * Convert a single CustomPatternInput to ComponentPattern
 */
export function transformPattern(input: CustomPatternInput): ComponentPattern {
  // Generate a readable name from the ID if not provided
  const name = input.name ?? input.id
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id: input.id,
    name,
    description: input.description ?? `Custom pattern: ${name}`,
    category: input.category ?? 'custom',
    classes: normalizeClasses(input.classes),
    ssr: input.ssr ?? { safe: true },
    usage: `<div class="{{class}}">...</div>`,
  };
}

/**
 * Transform an array of CustomPatternInput to ComponentPattern[]
 */
export function transformPatterns(inputs: CustomPatternInput[]): ComponentPattern[] {
  return inputs.map(transformPattern);
}

/**
 * Extended ComponentPattern with framework restriction info
 */
export interface CustomComponentPattern extends ComponentPattern {
  /** Which frameworks this pattern applies to (undefined = all) */
  _frameworks?: ('tailwind' | 'bootstrap' | 'unocss' | 'tachyons')[];
  /** Mark as custom pattern for identification */
  _isCustom: true;
}

/**
 * Transform patterns with framework restriction metadata
 */
export function transformPatternsWithMeta(inputs: CustomPatternInput[]): CustomComponentPattern[] {
  return inputs.map(input => ({
    ...transformPattern(input),
    _frameworks: input.frameworks,
    _isCustom: true as const,
  }));
}

/**
 * Filter custom patterns for a specific framework
 */
export function filterPatternsForFramework(
  patterns: CustomComponentPattern[],
  frameworkId: 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons'
): CustomComponentPattern[] {
  return patterns.filter(p => {
    // If no frameworks specified, pattern applies to all
    if (!p._frameworks || p._frameworks.length === 0) {
      return true;
    }
    return p._frameworks.includes(frameworkId);
  });
}
