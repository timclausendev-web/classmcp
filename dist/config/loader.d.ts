/**
 * Config Loader
 * Discovers and loads user config files
 */
import type { UserConfig } from '../types.js';
import { type ValidationResult } from './schema.js';
export interface LoadConfigResult {
    /** The loaded and validated config, or default if not found */
    config: UserConfig;
    /** Path to the config file that was loaded, or null if using defaults */
    configPath: string | null;
    /** Validation result (includes warnings even if valid) */
    validation: ValidationResult;
    /** Whether a config file was found */
    found: boolean;
}
/**
 * Default config when no file is found
 */
export declare const DEFAULT_CONFIG: UserConfig;
/**
 * Load config from a specific directory
 * Searches for config files in order of priority
 */
export declare function loadConfig(projectPath: string): Promise<LoadConfigResult>;
/**
 * Reload config from a previously loaded path
 */
export declare function reloadConfig(configPath: string | null, projectPath: string): Promise<LoadConfigResult>;
//# sourceMappingURL=loader.d.ts.map