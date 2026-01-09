/**
 * Framework Registry
 * Central export for all supported CSS frameworks
 */
import { FrameworkConfig, ComponentPattern, CATEGORIES } from '../types.js';
import { tailwindConfig, tailwindPatterns } from './tailwind.js';
import { bootstrapConfig, bootstrapPatterns } from './bootstrap.js';
import { unocssConfig, unocssPatterns } from './unocss.js';
import { tachyonsConfig, tachyonsPatterns } from './tachyons.js';
import type { CustomComponentPattern } from '../config/transform.js';
export type FrameworkId = 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons';
export interface FrameworkModule {
    config: FrameworkConfig;
    patterns: ComponentPattern[];
}
export declare const frameworks: Record<FrameworkId, FrameworkModule>;
/**
 * Set custom patterns from user config
 */
export declare function setCustomPatterns(patterns: CustomComponentPattern[], override?: boolean): void;
/**
 * Get all custom patterns (unfiltered)
 */
export declare function getCustomPatterns(): CustomComponentPattern[];
/**
 * Get custom patterns filtered for a specific framework
 */
export declare function getCustomPatternsForFramework(frameworkId: FrameworkId): CustomComponentPattern[];
/**
 * Clear all custom patterns
 */
export declare function clearCustomPatterns(): void;
/**
 * Detect which framework is in use based on config files
 * Returns the detected framework or 'tailwind' as default
 */
export declare function detectFramework(projectPath: string): Promise<FrameworkId>;
/**
 * Get all patterns for a framework (built-in + custom)
 */
export declare function getPatterns(frameworkId: FrameworkId): ComponentPattern[];
/**
 * Get a pattern by ID (checks custom first if overrideBuiltins, else built-in first)
 */
export declare function getPattern(frameworkId: FrameworkId, patternId: string): ComponentPattern | undefined;
/**
 * Check if a pattern is custom (user-defined)
 */
export declare function isCustomPattern(pattern: ComponentPattern): boolean;
/**
 * Get patterns by category (built-in + custom)
 */
export declare function getPatternsByCategory(frameworkId: FrameworkId, category: string): ComponentPattern[];
/**
 * Search patterns by query (built-in + custom)
 */
export declare function searchPatterns(frameworkId: FrameworkId, query: string): ComponentPattern[];
/**
 * Get all categories for a framework (built-in + custom)
 */
export declare function getCategories(frameworkId: FrameworkId): string[];
/**
 * Resolve classes from pattern (handles both string and StateVariant)
 */
export declare function resolveClasses(pattern: ComponentPattern, options?: {
    includeStates?: boolean;
    states?: ('hover' | 'focus' | 'active' | 'disabled')[];
    ssrSafe?: boolean;
}): string;
/**
 * Check if a pattern is SSR-safe
 */
export declare function isSSRSafe(pattern: ComponentPattern): boolean;
/**
 * Get SSR warning for a pattern
 */
export declare function getSSRWarning(pattern: ComponentPattern): string | undefined;
/**
 * Get client-only classes for a pattern
 */
export declare function getClientOnlyClasses(pattern: ComponentPattern): string | undefined;
/**
 * Generate CSS for patterns (built-in + custom)
 */
export declare function generateCSS(frameworkId: FrameworkId, options?: {
    categories?: string[];
    includeStates?: boolean;
    minified?: boolean;
}): string;
/**
 * Get framework configuration
 */
export declare function getFrameworkConfig(frameworkId: FrameworkId): FrameworkConfig | undefined;
/**
 * Get all available frameworks
 */
export declare function listFrameworks(): {
    id: FrameworkId;
    name: string;
    description: string;
}[];
/**
 * Get framework statistics (includes custom patterns)
 */
export declare function getFrameworkStats(frameworkId: FrameworkId): {
    totalPatterns: number;
    builtInPatterns: number;
    customPatterns: number;
    categories: number;
    ssrSafePatterns: number;
    clientOnlyPatterns: number;
};
export { CATEGORIES };
export { tailwindConfig, tailwindPatterns };
export { bootstrapConfig, bootstrapPatterns };
export { unocssConfig, unocssPatterns };
export { tachyonsConfig, tachyonsPatterns };
//# sourceMappingURL=index.d.ts.map