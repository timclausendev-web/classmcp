/**
 * Config Loader
 * Discovers and loads user config files
 */

import { readFile } from 'fs/promises';
import { join } from 'path';
import type { UserConfig } from '../types.js';
import { validateUserConfig, type ValidationResult } from './schema.js';

// Config file names to search for (in order of priority)
const CONFIG_FILE_NAMES = [
  '.classmcp.json',
  'classmcp.config.json',
];

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
export const DEFAULT_CONFIG: UserConfig = {
  customPatterns: [],
  overrideBuiltins: false,
  defaultFramework: 'tailwind',
};

/**
 * Try to read and parse a JSON file
 */
async function tryReadJsonFile(filePath: string): Promise<{ data: unknown; error: null } | { data: null; error: Error }> {
  try {
    const content = await readFile(filePath, 'utf-8');
    const data = JSON.parse(content);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Try to read config from package.json's "classmcp" field
 */
async function tryReadPackageJson(projectPath: string): Promise<{ data: unknown; path: string } | null> {
  const packageJsonPath = join(projectPath, 'package.json');
  const result = await tryReadJsonFile(packageJsonPath);

  if (result.error || !result.data) {
    return null;
  }

  const pkg = result.data as Record<string, unknown>;
  if (pkg.classmcp && typeof pkg.classmcp === 'object') {
    return { data: pkg.classmcp, path: `${packageJsonPath}#classmcp` };
  }

  return null;
}

/**
 * Load config from a specific directory
 * Searches for config files in order of priority
 */
export async function loadConfig(projectPath: string): Promise<LoadConfigResult> {
  // Try each config file name
  for (const fileName of CONFIG_FILE_NAMES) {
    const filePath = join(projectPath, fileName);
    const result = await tryReadJsonFile(filePath);

    if (!result.error && result.data) {
      const validation = validateUserConfig(result.data);

      if (!validation.valid) {
        // Log errors but return default config
        console.error(`[classmcp] Invalid config in ${filePath}:`);
        for (const error of validation.errors) {
          console.error(`  - ${error.path}: ${error.message}`);
        }
        return {
          config: DEFAULT_CONFIG,
          configPath: filePath,
          validation,
          found: true,
        };
      }

      // Log warnings
      for (const warning of validation.warnings) {
        console.error(`[classmcp] Warning in ${filePath}: ${warning}`);
      }

      return {
        config: result.data as UserConfig,
        configPath: filePath,
        validation,
        found: true,
      };
    }
  }

  // Try package.json
  const pkgResult = await tryReadPackageJson(projectPath);
  if (pkgResult) {
    const validation = validateUserConfig(pkgResult.data);

    if (!validation.valid) {
      console.error(`[classmcp] Invalid config in ${pkgResult.path}:`);
      for (const error of validation.errors) {
        console.error(`  - ${error.path}: ${error.message}`);
      }
      return {
        config: DEFAULT_CONFIG,
        configPath: pkgResult.path,
        validation,
        found: true,
      };
    }

    for (const warning of validation.warnings) {
      console.error(`[classmcp] Warning in ${pkgResult.path}: ${warning}`);
    }

    return {
      config: pkgResult.data as UserConfig,
      configPath: pkgResult.path,
      validation,
      found: true,
    };
  }

  // No config found - use defaults
  return {
    config: DEFAULT_CONFIG,
    configPath: null,
    validation: { valid: true, errors: [], warnings: [] },
    found: false,
  };
}

/**
 * Reload config from a previously loaded path
 */
export async function reloadConfig(configPath: string | null, projectPath: string): Promise<LoadConfigResult> {
  if (!configPath) {
    // No config was loaded before, try loading again
    return loadConfig(projectPath);
  }

  // Handle package.json#classmcp path
  if (configPath.includes('#classmcp')) {
    const pkgResult = await tryReadPackageJson(projectPath);
    if (pkgResult) {
      const validation = validateUserConfig(pkgResult.data);
      return {
        config: validation.valid ? (pkgResult.data as UserConfig) : DEFAULT_CONFIG,
        configPath: pkgResult.path,
        validation,
        found: true,
      };
    }
    return {
      config: DEFAULT_CONFIG,
      configPath: null,
      validation: { valid: true, errors: [], warnings: [] },
      found: false,
    };
  }

  // Try to reload the specific file
  const result = await tryReadJsonFile(configPath);
  if (result.error) {
    console.error(`[classmcp] Could not reload config from ${configPath}: ${result.error.message}`);
    return {
      config: DEFAULT_CONFIG,
      configPath: null,
      validation: { valid: true, errors: [], warnings: [] },
      found: false,
    };
  }

  const validation = validateUserConfig(result.data);
  return {
    config: validation.valid ? (result.data as UserConfig) : DEFAULT_CONFIG,
    configPath,
    validation,
    found: true,
  };
}
