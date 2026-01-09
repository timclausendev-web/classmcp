/**
 * Framework Registry
 * Central export for all supported CSS frameworks
 */
import { FrameworkConfig, ComponentPattern, CATEGORIES } from '../types.js';
import { tailwindConfig, tailwindPatterns } from './tailwind.js';
import { bootstrapConfig, bootstrapPatterns } from './bootstrap.js';
import { unocssConfig, unocssPatterns } from './unocss.js';
import { tachyonsConfig, tachyonsPatterns } from './tachyons.js';
export type FrameworkId = 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons';
export interface FrameworkModule {
    config: FrameworkConfig;
    patterns: ComponentPattern[];
}
export declare const frameworks: Record<FrameworkId, FrameworkModule>;
/**
 * Detect which framework is in use based on config files
 * Returns the detected framework or 'tailwind' as default
 */
export declare function detectFramework(projectPath: string): Promise<FrameworkId>;
/**
 * Get all patterns for a framework
 */
export declare function getPatterns(frameworkId: FrameworkId): ComponentPattern[];
/**
 * Get a pattern by ID
 */
export declare function getPattern(frameworkId: FrameworkId, patternId: string): ComponentPattern | undefined;
/**
 * Get patterns by category
 */
export declare function getPatternsByCategory(frameworkId: FrameworkId, category: string): ComponentPattern[];
/**
 * Search patterns by query
 */
export declare function searchPatterns(frameworkId: FrameworkId, query: string): ComponentPattern[];
/**
 * Get all categories for a framework
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
 * Generate CSS for patterns
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
 * Get framework statistics
 */
export declare function getFrameworkStats(frameworkId: FrameworkId): {
    totalPatterns: number;
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