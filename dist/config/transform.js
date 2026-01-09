/**
 * Pattern Transformer
 * Converts simplified CustomPatternInput to full ComponentPattern
 */
/**
 * Convert CustomStateVariant to full StateVariant
 */
function normalizeClasses(classes) {
    if (typeof classes === 'string') {
        return classes;
    }
    // It's already a valid StateVariant shape
    return classes;
}
/**
 * Convert a single CustomPatternInput to ComponentPattern
 */
export function transformPattern(input) {
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
export function transformPatterns(inputs) {
    return inputs.map(transformPattern);
}
/**
 * Transform patterns with framework restriction metadata
 */
export function transformPatternsWithMeta(inputs) {
    return inputs.map(input => ({
        ...transformPattern(input),
        _frameworks: input.frameworks,
        _isCustom: true,
    }));
}
/**
 * Filter custom patterns for a specific framework
 */
export function filterPatternsForFramework(patterns, frameworkId) {
    return patterns.filter(p => {
        // If no frameworks specified, pattern applies to all
        if (!p._frameworks || p._frameworks.length === 0) {
            return true;
        }
        return p._frameworks.includes(frameworkId);
    });
}
//# sourceMappingURL=transform.js.map