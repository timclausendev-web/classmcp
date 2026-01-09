/**
 * Class Minification Engine
 * Generates ultra-short class names for maximum token savings
 *
 * Token Savings Example:
 * Original: class="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white"
 * Minified: class="a"
 * Savings: ~80 tokens per usage
 */
import { MinificationMap, MinifiedClass } from '../types.js';
/**
 * Simple hash function for class deduplication
 */
export declare function hashClasses(classes: string): string;
/**
 * Generate sequential minified names
 * a, b, c, ... z, A, B, ... Z, aa, ab, ac, ...
 */
export declare function generateMinifiedName(counter: number): string;
/**
 * Create a new minification map
 */
export declare function createMinificationMap(): MinificationMap;
/**
 * Add a class pattern to the minification map
 */
export declare function minifyClass(map: MinificationMap, semanticName: string, classes: string): MinifiedClass;
/**
 * Get minified name for a semantic name
 */
export declare function getMinified(map: MinificationMap, semanticName: string): string | undefined;
/**
 * Get full data for a minified name
 */
export declare function getFromMinified(map: MinificationMap, minified: string): MinifiedClass | undefined;
/**
 * Generate CSS from minification map
 */
export declare function generateMinifiedCSS(map: MinificationMap, options?: {
    framework: 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons' | 'custom';
    includeComments?: boolean;
}): string;
/**
 * Calculate token savings
 */
export declare function calculateSavings(map: MinificationMap): {
    totalOriginalTokens: number;
    totalMinifiedTokens: number;
    savingsPercent: number;
    avgSavingsPerClass: number;
};
/**
 * Export map as JSON for persistence
 */
export declare function exportMap(map: MinificationMap): object;
/**
 * Import map from JSON
 */
export declare function importMap(data: {
    mappings: MinifiedClass[];
    counter: number;
}): MinificationMap;
//# sourceMappingURL=minifier.d.ts.map