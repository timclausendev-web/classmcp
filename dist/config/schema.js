/**
 * Config Schema & Validation
 * Validates user config files before processing
 */
// Valid framework IDs
const VALID_FRAMEWORKS = ['tailwind', 'bootstrap', 'unocss', 'tachyons'];
// Valid CSS class name pattern (allows hyphens, underscores, alphanumeric)
const VALID_ID_PATTERN = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
/**
 * Validate a pattern ID
 */
function validatePatternId(id, index) {
    if (typeof id !== 'string') {
        return { path: `customPatterns[${index}].id`, message: 'id must be a string' };
    }
    if (!id.trim()) {
        return { path: `customPatterns[${index}].id`, message: 'id cannot be empty' };
    }
    if (!VALID_ID_PATTERN.test(id)) {
        return {
            path: `customPatterns[${index}].id`,
            message: `id "${id}" is invalid - must start with letter and contain only letters, numbers, hyphens, underscores`,
        };
    }
    return null;
}
/**
 * Validate classes field (string or StateVariant)
 */
function validateClasses(classes, index) {
    if (typeof classes === 'string') {
        if (!classes.trim()) {
            return { path: `customPatterns[${index}].classes`, message: 'classes cannot be empty' };
        }
        return null;
    }
    if (typeof classes === 'object' && classes !== null) {
        const stateVariant = classes;
        if (typeof stateVariant.base !== 'string' || !stateVariant.base.trim()) {
            return {
                path: `customPatterns[${index}].classes.base`,
                message: 'classes.base is required and must be a non-empty string',
            };
        }
        // Validate optional state fields
        const stateFields = ['hover', 'focus', 'active', 'disabled'];
        for (const field of stateFields) {
            if (stateVariant[field] !== undefined && typeof stateVariant[field] !== 'string') {
                return {
                    path: `customPatterns[${index}].classes.${field}`,
                    message: `classes.${field} must be a string`,
                };
            }
        }
        return null;
    }
    return {
        path: `customPatterns[${index}].classes`,
        message: 'classes must be a string or an object with base, hover, focus, active, disabled fields',
    };
}
/**
 * Validate a single custom pattern
 */
function validatePattern(pattern, index) {
    const errors = [];
    if (typeof pattern !== 'object' || pattern === null) {
        errors.push({ path: `customPatterns[${index}]`, message: 'pattern must be an object' });
        return errors;
    }
    const p = pattern;
    // Required: id
    const idError = validatePatternId(p.id, index);
    if (idError)
        errors.push(idError);
    // Required: classes
    if (p.classes === undefined) {
        errors.push({ path: `customPatterns[${index}].classes`, message: 'classes is required' });
    }
    else {
        const classesError = validateClasses(p.classes, index);
        if (classesError)
            errors.push(classesError);
    }
    // Optional: category (string)
    if (p.category !== undefined && typeof p.category !== 'string') {
        errors.push({ path: `customPatterns[${index}].category`, message: 'category must be a string' });
    }
    // Optional: name (string)
    if (p.name !== undefined && typeof p.name !== 'string') {
        errors.push({ path: `customPatterns[${index}].name`, message: 'name must be a string' });
    }
    // Optional: description (string)
    if (p.description !== undefined && typeof p.description !== 'string') {
        errors.push({ path: `customPatterns[${index}].description`, message: 'description must be a string' });
    }
    // Optional: frameworks (array of valid framework IDs)
    if (p.frameworks !== undefined) {
        if (!Array.isArray(p.frameworks)) {
            errors.push({ path: `customPatterns[${index}].frameworks`, message: 'frameworks must be an array' });
        }
        else {
            for (let i = 0; i < p.frameworks.length; i++) {
                if (!VALID_FRAMEWORKS.includes(p.frameworks[i])) {
                    errors.push({
                        path: `customPatterns[${index}].frameworks[${i}]`,
                        message: `invalid framework "${p.frameworks[i]}" - must be one of: ${VALID_FRAMEWORKS.join(', ')}`,
                    });
                }
            }
        }
    }
    // Optional: ssr (object with safe boolean)
    if (p.ssr !== undefined) {
        if (typeof p.ssr !== 'object' || p.ssr === null) {
            errors.push({ path: `customPatterns[${index}].ssr`, message: 'ssr must be an object' });
        }
        else {
            const ssr = p.ssr;
            if (typeof ssr.safe !== 'boolean') {
                errors.push({ path: `customPatterns[${index}].ssr.safe`, message: 'ssr.safe must be a boolean' });
            }
            if (ssr.warning !== undefined && typeof ssr.warning !== 'string') {
                errors.push({ path: `customPatterns[${index}].ssr.warning`, message: 'ssr.warning must be a string' });
            }
        }
    }
    return errors;
}
/**
 * Validate the entire user config
 */
export function validateUserConfig(config) {
    const errors = [];
    const warnings = [];
    if (typeof config !== 'object' || config === null) {
        return {
            valid: false,
            errors: [{ path: '', message: 'config must be an object' }],
            warnings: [],
        };
    }
    const c = config;
    // Optional: overrideBuiltins (boolean)
    if (c.overrideBuiltins !== undefined && typeof c.overrideBuiltins !== 'boolean') {
        errors.push({ path: 'overrideBuiltins', message: 'overrideBuiltins must be a boolean' });
    }
    // Optional: defaultFramework (valid framework ID)
    if (c.defaultFramework !== undefined) {
        if (!VALID_FRAMEWORKS.includes(c.defaultFramework)) {
            errors.push({
                path: 'defaultFramework',
                message: `invalid framework "${c.defaultFramework}" - must be one of: ${VALID_FRAMEWORKS.join(', ')}`,
            });
        }
    }
    // Optional: customPatterns (array)
    if (c.customPatterns !== undefined) {
        if (!Array.isArray(c.customPatterns)) {
            errors.push({ path: 'customPatterns', message: 'customPatterns must be an array' });
        }
        else {
            // Check for duplicate IDs
            const seenIds = new Set();
            for (let i = 0; i < c.customPatterns.length; i++) {
                const patternErrors = validatePattern(c.customPatterns[i], i);
                errors.push(...patternErrors);
                // Check for duplicates
                const pattern = c.customPatterns[i];
                if (pattern?.id) {
                    if (seenIds.has(pattern.id)) {
                        warnings.push(`Duplicate pattern id "${pattern.id}" at index ${i} - later definition will be used`);
                    }
                    seenIds.add(pattern.id);
                }
            }
        }
    }
    return {
        valid: errors.length === 0,
        errors,
        warnings,
    };
}
/**
 * Type guard for valid UserConfig
 */
export function isValidUserConfig(config) {
    return validateUserConfig(config).valid;
}
//# sourceMappingURL=schema.js.map