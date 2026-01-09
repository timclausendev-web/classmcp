/**
 * Config Module
 * Exports all config-related functionality
 */
export { loadConfig, reloadConfig, DEFAULT_CONFIG, type LoadConfigResult } from './loader.js';
export { validateUserConfig, isValidUserConfig, type ValidationError, type ValidationResult } from './schema.js';
export { transformPattern, transformPatterns, transformPatternsWithMeta, filterPatternsForFramework, type CustomComponentPattern, } from './transform.js';
//# sourceMappingURL=index.d.ts.map