/**
 * Pattern Transformer
 * Converts simplified CustomPatternInput to full ComponentPattern
 */
import type { ComponentPattern, CustomPatternInput } from '../types.js';
/**
 * Convert a single CustomPatternInput to ComponentPattern
 */
export declare function transformPattern(input: CustomPatternInput): ComponentPattern;
/**
 * Transform an array of CustomPatternInput to ComponentPattern[]
 */
export declare function transformPatterns(inputs: CustomPatternInput[]): ComponentPattern[];
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
export declare function transformPatternsWithMeta(inputs: CustomPatternInput[]): CustomComponentPattern[];
/**
 * Filter custom patterns for a specific framework
 */
export declare function filterPatternsForFramework(patterns: CustomComponentPattern[], frameworkId: 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons'): CustomComponentPattern[];
//# sourceMappingURL=transform.d.ts.map