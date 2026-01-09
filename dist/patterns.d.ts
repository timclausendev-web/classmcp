/**
 * Pre-defined Tailwind class patterns for AI code generation
 * These semantic names map to full utility class strings
 */
export interface ClassPattern {
    name: string;
    classes: string;
    description: string;
    category: string;
}
export declare const patterns: ClassPattern[];
export declare const patternMap: Map<string, ClassPattern>;
export declare const categories: string[];
export declare function getPatternsByCategory(category: string): ClassPattern[];
export declare function searchPatterns(query: string): ClassPattern[];
//# sourceMappingURL=patterns.d.ts.map