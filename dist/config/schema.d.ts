/**
 * Config Schema & Validation
 * Validates user config files before processing
 */
import type { UserConfig } from '../types.js';
export interface ValidationError {
    path: string;
    message: string;
}
export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
    warnings: string[];
}
/**
 * Validate the entire user config
 */
export declare function validateUserConfig(config: unknown): ValidationResult;
/**
 * Type guard for valid UserConfig
 */
export declare function isValidUserConfig(config: unknown): config is UserConfig;
//# sourceMappingURL=schema.d.ts.map