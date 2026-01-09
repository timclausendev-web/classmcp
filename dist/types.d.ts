/**
 * classmcp Type Definitions
 * Comprehensive types for multi-framework, SSR-safe, state-aware class patterns
 */
export interface FrameworkConfig {
    name: string;
    displayName: string;
    version: string;
    description: string;
    website: string;
    customClassSyntax: '@apply' | 'composes' | 'raw';
    configFiles: string[];
    cssImport: string;
    statePrefix?: {
        hover: string;
        focus: string;
        active: string;
        disabled: string;
        groupHover: string;
        dark: string;
    };
    breakpoints?: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}
export interface StateVariant {
    base: string;
    hover?: string;
    focus?: string;
    active?: string;
    disabled?: string;
    groupHover?: string;
    groupFocus?: string;
    ariaSelected?: string;
    ariaExpanded?: string;
    ariaDisabled?: string;
    dataActive?: string;
    dataOpen?: string;
    dataClosed?: string;
}
export interface ResponsiveVariant {
    base: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
}
export interface ComponentPattern {
    id: string;
    name: string;
    description: string;
    category: string;
    classes: string | StateVariant;
    responsive?: ResponsiveVariant;
    variants?: {
        [key: string]: {
            [value: string]: string;
        };
    };
    usage?: string;
    ssr?: {
        safe: boolean;
        warning?: string;
        clientOnly?: string;
    };
    relatedPatterns?: string[];
    frameworkNotes?: {
        [framework: string]: string;
    };
}
export interface MinifiedClass {
    original: string;
    minified: string;
    classes: string;
    hash: string;
}
export interface MinificationMap {
    nameToMinified: Map<string, string>;
    minifiedToData: Map<string, MinifiedClass>;
    usedNames: Set<string>;
    counter: number;
}
export interface ClassmcpConfig {
    framework: 'tailwind' | 'bootstrap' | 'unocss' | 'tachyons' | 'custom';
    minify: boolean;
    prefix: string;
    includeStates: boolean;
    includeResponsive: boolean;
    ssrMode: boolean;
    customPatterns?: ComponentPattern[];
    excludePatterns?: string[];
    includeCategories?: string[];
}
export interface GetClassResponse {
    class: string;
    utilities: string;
    states?: {
        hover?: string;
        focus?: string;
        active?: string;
        disabled?: string;
    };
    example: string;
    ssrSafe: boolean;
    ssrWarning?: string;
}
export interface ListClassesResponse {
    categories: {
        name: string;
        patterns: {
            id: string;
            name: string;
            description: string;
            class: string;
        }[];
    }[];
    total: number;
}
export interface GenerateCSSResponse {
    css: string;
    framework: string;
    patternCount: number;
    minified: boolean;
}
/**
 * Common state combinations for interactive elements
 */
export declare const INTERACTIVE_STATES: {
    button: readonly ["hover", "focus", "active", "disabled"];
    input: readonly ["hover", "focus", "disabled", "invalid"];
    link: readonly ["hover", "focus", "visited"];
    checkbox: readonly ["hover", "focus", "checked", "disabled"];
    toggle: readonly ["hover", "focus", "checked"];
    menu: readonly ["hover", "focus", "open"];
    accordion: readonly ["hover", "focus", "expanded"];
};
/**
 * SSR-safe vs client-only states
 */
export declare const STATE_SSR_SAFETY: {
    ssrSafe: string[];
    clientOnly: string[];
};
export declare const CATEGORIES: readonly [{
    readonly id: "buttons";
    readonly name: "Buttons";
    readonly description: "Interactive button elements";
}, {
    readonly id: "cards";
    readonly name: "Cards";
    readonly description: "Container cards and panels";
}, {
    readonly id: "forms";
    readonly name: "Forms";
    readonly description: "Form inputs and controls";
}, {
    readonly id: "badges";
    readonly name: "Badges";
    readonly description: "Labels, tags, and badges";
}, {
    readonly id: "alerts";
    readonly name: "Alerts";
    readonly description: "Notification and alert boxes";
}, {
    readonly id: "avatars";
    readonly name: "Avatars";
    readonly description: "User avatars and profile images";
}, {
    readonly id: "layout";
    readonly name: "Layout";
    readonly description: "Layout containers and grids";
}, {
    readonly id: "typography";
    readonly name: "Typography";
    readonly description: "Text styles and headings";
}, {
    readonly id: "navigation";
    readonly name: "Navigation";
    readonly description: "Navbars, menus, and links";
}, {
    readonly id: "modals";
    readonly name: "Modals";
    readonly description: "Modal dialogs and overlays";
}, {
    readonly id: "tables";
    readonly name: "Tables";
    readonly description: "Data tables and rows";
}, {
    readonly id: "lists";
    readonly name: "Lists";
    readonly description: "List containers and items";
}, {
    readonly id: "loading";
    readonly name: "Loading";
    readonly description: "Spinners and skeletons";
}, {
    readonly id: "dividers";
    readonly name: "Dividers";
    readonly description: "Separators and dividers";
}, {
    readonly id: "backgrounds";
    readonly name: "Backgrounds";
    readonly description: "Gradients, glass effects, and fancy backgrounds";
}, {
    readonly id: "icons";
    readonly name: "Icons";
    readonly description: "Icon containers and sizing";
}, {
    readonly id: "code";
    readonly name: "Code";
    readonly description: "Code blocks and syntax highlighting";
}, {
    readonly id: "pricing";
    readonly name: "Pricing";
    readonly description: "Pricing cards and badges";
}, {
    readonly id: "fonts";
    readonly name: "Fonts";
    readonly description: "Font families, weights, and typography styles";
}];
export type CategoryId = typeof CATEGORIES[number]['id'];
//# sourceMappingURL=types.d.ts.map