#!/usr/bin/env node
/**
 * classmcp - Multi-Framework AI-Optimized CSS Class Server
 *
 * MCP Server that provides semantic CSS class patterns optimized for AI code generation.
 * Supports multiple CSS frameworks with SSR-safety awareness and optional minification.
 *
 * Frameworks: Tailwind CSS, Bootstrap 5, UnoCSS, Tachyons
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import {
  frameworks,
  FrameworkId,
  getPatterns,
  getPattern,
  getPatternsByCategory,
  searchPatterns,
  getCategories,
  resolveClasses,
  isSSRSafe,
  getSSRWarning,
  generateCSS,
  listFrameworks,
  getFrameworkStats,
  setCustomPatterns,
  getCustomPatterns,
  isCustomPattern,
  clearCustomPatterns,
} from "./frameworks/index.js";
import {
  createMinificationMap,
  minifyClass,
  generateMinifiedCSS,
  calculateSavings,
} from "./core/minifier.js";
import { ComponentPattern } from "./types.js";
import {
  loadConfig,
  reloadConfig,
  transformPatternsWithMeta,
  type LoadConfigResult,
} from "./config/index.js";

// Default framework - can be changed via configuration
let currentFramework: FrameworkId = 'tailwind';

// Store config state for reload functionality
let currentConfigPath: string | null = null;
let projectPath: string = process.cwd();

const server = new Server(
  {
    name: "classmcp",
    version: "2.0.0",
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// ============================================
// TOOLS
// ============================================

server.setRequestHandler(ListToolsRequestSchema, async () => {
  const frameworkList = listFrameworks();
  const frameworkEnum = frameworkList.map(f => f.id);

  return {
    tools: [
      {
        name: "set_framework",
        description: "Set the CSS framework to use for all subsequent operations. Choose based on your project's CSS framework. DEFAULT: tailwind",
        inputSchema: {
          type: "object",
          properties: {
            framework: {
              type: "string",
              description: "The CSS framework to use",
              enum: frameworkEnum,
            },
          },
          required: ["framework"],
        },
      },
      {
        name: "get_class",
        description: "Get the full utility classes for a semantic class name. Returns the CSS classes you should use in your HTML. Supports SSR-safe filtering.",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The semantic class name (e.g., 'btn-primary', 'card', 'input')",
            },
            minified: {
              type: "boolean",
              description: "Return a minified single-character class name for maximum token savings (default: false)",
            },
            ssrSafe: {
              type: "boolean",
              description: "Only return SSR-safe classes that won't cause hydration mismatches (default: false)",
            },
            includeStates: {
              type: "boolean",
              description: "Include hover/focus/active state variants in the output (default: true)",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "list_classes",
        description: "List all available semantic class names, optionally filtered by category. Use this to discover available patterns.",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "Filter by category: buttons, cards, forms, badges, alerts, avatars, layout, typography, navigation, modals, tables, lists, loading, dividers",
            },
            ssrSafeOnly: {
              type: "boolean",
              description: "Only show SSR-safe classes (default: false)",
            },
          },
        },
      },
      {
        name: "search_classes",
        description: "Search for classes by name, description, or category. Use when you're not sure of the exact class name.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query (matches against name, description, and category)",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "generate_css",
        description: "Generate CSS that defines all semantic classes. Add this to your project's CSS file to use the semantic class names.",
        inputSchema: {
          type: "object",
          properties: {
            categories: {
              type: "array",
              items: { type: "string" },
              description: "Only generate CSS for specific categories (optional)",
            },
            minified: {
              type: "boolean",
              description: "Generate minified class names (a, b, c...) for maximum file size reduction",
            },
            includeStates: {
              type: "boolean",
              description: "Include hover/focus/active state variants (default: true)",
            },
          },
        },
      },
      {
        name: "get_component",
        description: "Get a complete HTML component example using semantic classes. Great for seeing how classes work together.",
        inputSchema: {
          type: "object",
          properties: {
            component: {
              type: "string",
              description: "Component type to generate",
              enum: ["button-group", "card-with-header", "form-field", "alert-with-icon", "avatar-stack", "modal", "table", "nav-bar", "pricing-card", "testimonial"],
            },
            minified: {
              type: "boolean",
              description: "Use minified class names in the example",
            },
          },
          required: ["component"],
        },
      },
      {
        name: "get_ssr_info",
        description: "Get SSR/hydration safety information for a class pattern. Use this when building SSR/Next.js/Nuxt/Remix applications to avoid hydration mismatches.",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The class name to check",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "list_frameworks",
        description: "List all available CSS frameworks and their statistics.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "reload_config",
        description: "Reload custom patterns from the config file (.classmcp.json). Use this after modifying your config file.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "list_custom_patterns",
        description: "List all custom (user-defined) patterns loaded from your config file.",
        inputSchema: {
          type: "object",
          properties: {
            framework: {
              type: "string",
              description: "Filter by framework (optional, defaults to current framework)",
              enum: frameworkEnum,
            },
          },
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    // ============================================
    // SET FRAMEWORK
    // ============================================
    case "set_framework": {
      const framework = args?.framework as FrameworkId;
      if (!frameworks[framework]) {
        return {
          content: [
            {
              type: "text",
              text: `Unknown framework: ${framework}. Available: ${Object.keys(frameworks).join(', ')}`,
            },
          ],
        };
      }
      currentFramework = framework;
      const stats = getFrameworkStats(framework);
      return {
        content: [
          {
            type: "text",
            text: `Framework set to **${frameworks[framework].config.displayName}**\n\n` +
              `- Total patterns: ${stats.totalPatterns}\n` +
              `- Categories: ${stats.categories}\n` +
              `- SSR-safe patterns: ${stats.ssrSafePatterns}\n` +
              `- Patterns requiring client JS: ${stats.clientOnlyPatterns}`,
          },
        ],
      };
    }

    // ============================================
    // GET CLASS
    // ============================================
    case "get_class": {
      const className = args?.name as string;
      const minified = args?.minified as boolean ?? false;
      const ssrSafe = args?.ssrSafe as boolean ?? false;
      const includeStates = args?.includeStates as boolean ?? true;

      const pattern = getPattern(currentFramework, className);

      if (!pattern) {
        // Try fuzzy match
        const patterns = getPatterns(currentFramework);
        const similar = patterns.filter(p =>
          p.id.includes(className) || className.includes(p.id) ||
          p.name.toLowerCase().includes(className.toLowerCase())
        ).slice(0, 3);

        return {
          content: [
            {
              type: "text",
              text: `Class "${className}" not found in ${frameworks[currentFramework].config.displayName}.\n\n${
                similar.length > 0
                  ? `Did you mean:\n${similar.map(p => `  - ${p.id}: ${p.description}`).join('\n')}`
                  : `Use list_classes to see available classes.`
              }`,
            },
          ],
        };
      }

      // Check SSR safety
      if (ssrSafe && !isSSRSafe(pattern)) {
        const warning = getSSRWarning(pattern);
        return {
          content: [
            {
              type: "text",
              text: `**Warning:** "${className}" is not SSR-safe.\n\n${warning || 'This class may cause hydration mismatches.'}\n\nUse \`get_ssr_info\` for more details or set \`ssrSafe: false\` to use anyway.`,
            },
          ],
        };
      }

      // Get resolved classes
      const classes = resolveClasses(pattern, { includeStates, ssrSafe });

      // Optionally minify
      let outputClass = className;
      let minifiedInfo = '';
      if (minified) {
        const map = createMinificationMap();
        const result = minifyClass(map, className, classes);
        outputClass = result.minified;
        minifiedInfo = `\nMinified: \`${result.minified}\` (saves ~${classes.length - result.minified.length} chars per usage)`;
      }

      return {
        content: [
          {
            type: "text",
            text: `**${pattern.name}** (${pattern.category})\n\n` +
              `Class: \`${outputClass}\`${minifiedInfo}\n\n` +
              `Utilities:\n\`\`\`\n${classes}\n\`\`\`\n\n` +
              `Description: ${pattern.description}\n` +
              (pattern.ssr?.safe === false ? `\n**SSR Warning:** ${pattern.ssr.warning}` : '') +
              `\n\n**Usage:**\n\`\`\`html\n<element class="${outputClass}">...</element>\n\`\`\``,
          },
        ],
      };
    }

    // ============================================
    // LIST CLASSES
    // ============================================
    case "list_classes": {
      const category = args?.category as string | undefined;
      const ssrSafeOnly = args?.ssrSafeOnly as boolean ?? false;

      let patterns = category
        ? getPatternsByCategory(currentFramework, category)
        : getPatterns(currentFramework);

      if (ssrSafeOnly) {
        patterns = patterns.filter(p => isSSRSafe(p));
      }

      const grouped = new Map<string, ComponentPattern[]>();
      for (const p of patterns) {
        if (!grouped.has(p.category)) {
          grouped.set(p.category, []);
        }
        grouped.get(p.category)!.push(p);
      }

      let output = `# ${frameworks[currentFramework].config.displayName} Classes`;
      output += category ? ` (${category})` : '';
      output += ssrSafeOnly ? ' [SSR-safe only]' : '';
      output += `\n\nTotal: ${patterns.length} patterns\n\n`;

      for (const [cat, pats] of grouped) {
        output += `## ${cat}\n`;
        for (const p of pats) {
          const ssrBadge = !isSSRSafe(p) ? ' ⚠️' : '';
          output += `- **${p.id}**${ssrBadge}: ${p.description}\n`;
        }
        output += '\n';
      }

      if (ssrSafeOnly) {
        output += `\n_Note: ⚠️ indicates patterns that may cause hydration issues in SSR frameworks._`;
      }

      return {
        content: [{ type: "text", text: output }],
      };
    }

    // ============================================
    // SEARCH CLASSES
    // ============================================
    case "search_classes": {
      const query = args?.query as string;
      const results = searchPatterns(currentFramework, query);

      if (results.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No classes found matching "${query}" in ${frameworks[currentFramework].config.displayName}. Try a broader search term.`,
            },
          ],
        };
      }

      let output = `# Search Results for "${query}"\n\n`;
      output += `Found ${results.length} matches in ${frameworks[currentFramework].config.displayName}:\n\n`;

      for (const p of results) {
        const classes = resolveClasses(p);
        const ssrBadge = !isSSRSafe(p) ? ' ⚠️ SSR' : '';
        output += `### ${p.id}${ssrBadge}\n`;
        output += `- Description: ${p.description}\n`;
        output += `- Category: ${p.category}\n`;
        output += `- Classes: \`${classes.slice(0, 100)}${classes.length > 100 ? '...' : ''}\`\n\n`;
      }

      return {
        content: [{ type: "text", text: output }],
      };
    }

    // ============================================
    // GENERATE CSS
    // ============================================
    case "generate_css": {
      const selectedCategories = args?.categories as string[] | undefined;
      const minified = args?.minified as boolean ?? false;
      const includeStates = args?.includeStates as boolean ?? true;

      if (minified) {
        // Generate minified CSS with single-char class names
        const patterns = selectedCategories
          ? getPatterns(currentFramework).filter(p => selectedCategories.includes(p.category))
          : getPatterns(currentFramework);

        const map = createMinificationMap();
        for (const p of patterns) {
          const classes = resolveClasses(p, { includeStates });
          minifyClass(map, p.id, classes);
        }

        const css = generateMinifiedCSS(map, {
          framework: currentFramework,
          includeComments: false
        });

        const savings = calculateSavings(map);

        return {
          content: [
            {
              type: "text",
              text: `\`\`\`css\n${css}\`\`\`\n\n` +
                `**Minification Stats:**\n` +
                `- Original tokens: ~${savings.totalOriginalTokens}\n` +
                `- Minified tokens: ~${savings.totalMinifiedTokens}\n` +
                `- Savings: ${savings.savingsPercent.toFixed(1)}%\n\n` +
                `Add this CSS to your project. Use the minified class names (a, b, c...) in your HTML.`,
            },
          ],
        };
      }

      const css = generateCSS(currentFramework, {
        categories: selectedCategories,
        includeStates,
        minified: false
      });

      const syntax = frameworks[currentFramework].config.customClassSyntax;
      const note = syntax === '@apply'
        ? `Add this to your CSS file. The \`@apply\` directive requires ${frameworks[currentFramework].config.displayName} to be configured.`
        : `Add this CSS to your project. Note: You may need to add the actual utility definitions.`;

      return {
        content: [
          {
            type: "text",
            text: `\`\`\`css\n${css}\`\`\`\n\n${note}`,
          },
        ],
      };
    }

    // ============================================
    // GET COMPONENT
    // ============================================
    case "get_component": {
      const component = args?.component as string;
      const minified = args?.minified as boolean ?? false;

      const components: Record<string, string> = {
        "button-group": `<div class="flex-start space-x-2">
  <button class="btn-primary">Save</button>
  <button class="btn-secondary">Cancel</button>
  <button class="btn-danger">Delete</button>
</div>`,
        "card-with-header": `<div class="card">
  <div class="card-header">
    <h3 class="heading-sm">Card Title</h3>
    <button class="btn-ghost">Edit</button>
  </div>
  <div class="card-body">
    <p class="text-body">Card content goes here...</p>
  </div>
  <div class="card-footer">
    <span class="text-muted">Last updated: Today</span>
    <button class="btn-primary">View Details</button>
  </div>
</div>`,
        "form-field": `<div class="stack">
  <label class="label">Email Address</label>
  <input type="email" class="input" placeholder="you@example.com" />
  <p class="helper-text">We'll never share your email.</p>
</div>`,
        "alert-with-icon": `<div class="alert-success">
  <div class="flex-start">
    <span>✓</span>
    <div>
      <p class="heading-sm">Success!</p>
      <p class="text-body">Your changes have been saved.</p>
    </div>
  </div>
</div>`,
        "avatar-stack": `<div class="flex">
  <div class="avatar-md">AB</div>
  <div class="avatar-md">CD</div>
  <div class="avatar-md">EF</div>
  <div class="avatar-md">+5</div>
</div>`,
        "modal": `<!-- SSR Warning: Control visibility with server state -->
<div class="modal-overlay"></div>
<div class="modal">
  <div class="modal-header">
    <h2 class="heading-sm">Confirm Action</h2>
    <button class="btn-ghost">×</button>
  </div>
  <div class="modal-body">
    <p class="text-body">Are you sure you want to proceed?</p>
  </div>
  <div class="modal-footer">
    <button class="btn-secondary">Cancel</button>
    <button class="btn-primary">Confirm</button>
  </div>
</div>`,
        "table": `<table class="table">
  <thead class="table-header">
    <tr>
      <th class="th">Name</th>
      <th class="th">Status</th>
      <th class="th">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tr-hover">
      <td class="td">John Doe</td>
      <td class="td"><span class="badge-success">Active</span></td>
      <td class="td"><button class="btn-ghost">Edit</button></td>
    </tr>
  </tbody>
</table>`,
        "nav-bar": `<nav class="nav">
  <div class="container flex-between">
    <div class="flex-start">
      <a href="/" class="heading-sm">Logo</a>
      <div class="flex-start">
        <a href="#" class="nav-link-active">Home</a>
        <a href="#" class="nav-link">Features</a>
        <a href="#" class="nav-link">Pricing</a>
      </div>
    </div>
    <div class="flex-start">
      <a href="#" class="nav-link">Sign in</a>
      <button class="btn-primary">Get Started</button>
    </div>
  </div>
</nav>`,
        "pricing-card": `<div class="card">
  <div class="card-header">
    <span class="badge-primary">Popular</span>
  </div>
  <div class="card-body">
    <h3 class="heading-md">Pro Plan</h3>
    <p class="heading-xl">$29<span class="text-muted">/mo</span></p>
    <ul class="list">
      <li class="list-item">Unlimited projects</li>
      <li class="list-item">Priority support</li>
      <li class="list-item">Advanced analytics</li>
    </ul>
  </div>
  <div class="card-footer">
    <button class="btn-primary">Get Started</button>
  </div>
</div>`,
        "testimonial": `<div class="card">
  <div class="card-body">
    <p class="text-body">"This product changed how we work. Highly recommended!"</p>
  </div>
  <div class="card-footer">
    <div class="flex-start">
      <div class="avatar-md">JD</div>
      <div>
        <p class="heading-sm">Jane Doe</p>
        <p class="text-muted">CEO, TechCorp</p>
      </div>
    </div>
  </div>
</div>`,
      };

      let html = components[component];
      if (!html) {
        return {
          content: [
            {
              type: "text",
              text: `Unknown component: ${component}. Available: ${Object.keys(components).join(', ')}`,
            },
          ],
        };
      }

      // Optionally minify class names in the HTML
      if (minified) {
        const map = createMinificationMap();
        const patterns = getPatterns(currentFramework);

        // Build minification map
        for (const p of patterns) {
          const classes = resolveClasses(p);
          minifyClass(map, p.id, classes);
        }

        // Replace class names in HTML
        for (const [semantic, min] of map.nameToMinified) {
          html = html.replace(new RegExp(`class="${semantic}"`, 'g'), `class="${min}"`);
          html = html.replace(new RegExp(`"${semantic}"`, 'g'), `"${min}"`);
        }
      }

      return {
        content: [
          {
            type: "text",
            text: `## ${component} (${frameworks[currentFramework].config.displayName})\n\n\`\`\`html\n${html}\n\`\`\``,
          },
        ],
      };
    }

    // ============================================
    // GET SSR INFO
    // ============================================
    case "get_ssr_info": {
      const className = args?.name as string;
      const pattern = getPattern(currentFramework, className);

      if (!pattern) {
        return {
          content: [
            {
              type: "text",
              text: `Class "${className}" not found.`,
            },
          ],
        };
      }

      const safe = isSSRSafe(pattern);
      const warning = getSSRWarning(pattern);
      const clientOnly = pattern.ssr?.clientOnly;

      let output = `# SSR Safety Report: ${className}\n\n`;
      output += `**Status:** ${safe ? '✅ SSR-Safe' : '⚠️ Requires Client JS'}\n\n`;

      if (safe) {
        output += `This class is safe for server-side rendering and will not cause hydration mismatches.\n\n`;
        output += `**Why it's safe:**\n`;
        output += `- Uses only CSS pseudo-classes (hover, focus, etc.)\n`;
        output += `- No JavaScript-controlled state\n`;
        output += `- Server and client render identically\n`;
      } else {
        output += `**Warning:** ${warning || 'This class may cause hydration mismatches.'}\n\n`;
        output += `**Why it's not SSR-safe:**\n`;
        output += `- Contains state that may differ between server and client\n`;
        output += `- May require JavaScript to toggle classes\n`;
        if (clientOnly) {
          output += `\n**Client-only classes:** \`${clientOnly}\`\n`;
          output += `Consider adding these classes only after hydration.\n`;
        }
        output += `\n**Recommendations:**\n`;
        output += `1. Control visibility with server-side state when possible\n`;
        output += `2. Use \`useEffect\` or \`onMount\` to add client-only classes\n`;
        output += `3. Consider using CSS-only alternatives where available\n`;
      }

      return {
        content: [{ type: "text", text: output }],
      };
    }

    // ============================================
    // LIST FRAMEWORKS
    // ============================================
    case "list_frameworks": {
      const frameworkList = listFrameworks();

      let output = `# Available CSS Frameworks\n\n`;
      output += `Current: **${frameworks[currentFramework].config.displayName}**\n\n`;

      for (const f of frameworkList) {
        const stats = getFrameworkStats(f.id);
        const current = f.id === currentFramework ? ' ← current' : '';
        output += `## ${f.name}${current}\n`;
        output += `- ID: \`${f.id}\`\n`;
        output += `- Description: ${f.description}\n`;
        output += `- Patterns: ${stats.totalPatterns} (${stats.ssrSafePatterns} SSR-safe)\n`;
        output += `- Categories: ${stats.categories}\n\n`;
      }

      output += `Use \`set_framework\` to switch frameworks.`;

      return {
        content: [{ type: "text", text: output }],
      };
    }

    // ============================================
    // RELOAD CONFIG
    // ============================================
    case "reload_config": {
      try {
        const result = await reloadConfig(currentConfigPath, projectPath);
        currentConfigPath = result.configPath;

        if (!result.found) {
          clearCustomPatterns();
          return {
            content: [
              {
                type: "text",
                text: `No config file found. Create a \`.classmcp.json\` file to add custom patterns.\n\n` +
                  `Example config:\n\`\`\`json\n{\n  "customPatterns": [\n    { "id": "brand-btn", "classes": "px-4 py-2 bg-brand-600 text-white rounded-lg" }\n  ]\n}\n\`\`\``,
              },
            ],
          };
        }

        if (!result.validation.valid) {
          return {
            content: [
              {
                type: "text",
                text: `**Config validation errors:**\n\n${result.validation.errors.map(e => `- ${e.path}: ${e.message}`).join('\n')}\n\n` +
                  `Config file: ${result.configPath}\n\nFix the errors and run \`reload_config\` again.`,
              },
            ],
          };
        }

        // Apply custom patterns
        const customPatterns = result.config.customPatterns || [];
        const transformed = transformPatternsWithMeta(customPatterns);
        setCustomPatterns(transformed, result.config.overrideBuiltins ?? false);

        // Update default framework if specified
        if (result.config.defaultFramework) {
          currentFramework = result.config.defaultFramework;
        }

        let output = `**Config reloaded successfully!**\n\n`;
        output += `- Config file: \`${result.configPath}\`\n`;
        output += `- Custom patterns loaded: ${transformed.length}\n`;
        output += `- Override built-ins: ${result.config.overrideBuiltins ?? false}\n`;

        if (result.validation.warnings.length > 0) {
          output += `\n**Warnings:**\n${result.validation.warnings.map(w => `- ${w}`).join('\n')}`;
        }

        if (transformed.length > 0) {
          output += `\n\n**Custom patterns:**\n`;
          for (const p of transformed.slice(0, 10)) {
            output += `- \`${p.id}\`: ${p.description}\n`;
          }
          if (transformed.length > 10) {
            output += `- ... and ${transformed.length - 10} more\n`;
          }
        }

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error reloading config: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
        };
      }
    }

    // ============================================
    // LIST CUSTOM PATTERNS
    // ============================================
    case "list_custom_patterns": {
      const framework = (args?.framework as FrameworkId) || currentFramework;
      const customPatterns = getCustomPatterns();

      if (customPatterns.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No custom patterns loaded.\n\nTo add custom patterns, create a \`.classmcp.json\` file:\n\n\`\`\`json\n{\n  "customPatterns": [\n    { "id": "brand-btn", "classes": "px-4 py-2 bg-brand-600 text-white rounded-lg" }\n  ]\n}\n\`\`\`\n\nThen use \`reload_config\` to load them.`,
            },
          ],
        };
      }

      // Filter for current framework
      const filtered = customPatterns.filter(p => {
        if (!p._frameworks || p._frameworks.length === 0) return true;
        return p._frameworks.includes(framework);
      });

      let output = `# Custom Patterns\n\n`;
      output += `Total: ${customPatterns.length} custom patterns (${filtered.length} for ${framework})\n\n`;

      if (filtered.length === 0) {
        output += `No custom patterns are configured for ${framework}.\n`;
      } else {
        // Group by category
        const grouped = new Map<string, typeof filtered>();
        for (const p of filtered) {
          const cat = p.category;
          if (!grouped.has(cat)) grouped.set(cat, []);
          grouped.get(cat)!.push(p);
        }

        for (const [category, patterns] of grouped) {
          output += `## ${category}\n`;
          for (const p of patterns) {
            const classes = typeof p.classes === 'string' ? p.classes : p.classes.base;
            const truncated = classes.length > 60 ? classes.slice(0, 60) + '...' : classes;
            output += `- **${p.id}**: \`${truncated}\`\n`;
          }
          output += '\n';
        }
      }

      if (currentConfigPath) {
        output += `\n_Config file: ${currentConfigPath}_`;
      }

      return {
        content: [{ type: "text", text: output }],
      };
    }

    default:
      return {
        content: [
          { type: "text", text: `Unknown tool: ${name}` },
        ],
      };
  }
});

// ============================================
// RESOURCES
// ============================================

server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const categories = getCategories(currentFramework);

  return {
    resources: [
      {
        uri: "classmcp://info",
        name: "classmcp Info",
        description: "Information about classmcp and available frameworks",
        mimeType: "text/markdown",
      },
      {
        uri: `classmcp://patterns/${currentFramework}/all`,
        name: `All ${frameworks[currentFramework].config.displayName} Patterns`,
        description: "Complete list of all available semantic class patterns",
        mimeType: "application/json",
      },
      {
        uri: `classmcp://css/${currentFramework}/full`,
        name: `Full ${frameworks[currentFramework].config.displayName} CSS`,
        description: "Complete CSS file with all class definitions",
        mimeType: "text/css",
      },
      ...categories.map(cat => ({
        uri: `classmcp://patterns/${currentFramework}/${cat}`,
        name: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Patterns`,
        description: `Class patterns for ${cat}`,
        mimeType: "application/json",
      })),
    ],
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;

  if (uri === "classmcp://info") {
    const info = `# classmcp - AI-Optimized CSS Classes

## What is classmcp?

classmcp provides semantic CSS class patterns optimized for AI code generation.
Instead of writing long utility class strings, use short semantic names.

## Why use classmcp?

1. **Token Savings**: "btn-primary" vs "inline-flex items-center justify-center px-4 py-2 bg-blue-600..."
2. **Consistency**: Pre-tested patterns that work across your app
3. **SSR-Safe**: Patterns marked for hydration safety
4. **Multi-Framework**: Works with Tailwind, Bootstrap, UnoCSS, Tachyons

## Quick Start

1. Use \`list_classes\` to see available patterns
2. Use \`get_class\` to get the utility classes for a pattern
3. Use \`generate_css\` to create the CSS file for your project

## Current Framework: ${frameworks[currentFramework].config.displayName}

Use \`set_framework\` to change frameworks.
`;

    return {
      contents: [
        {
          uri,
          mimeType: "text/markdown",
          text: info,
        },
      ],
    };
  }

  // Pattern resources
  const patternMatch = uri.match(/classmcp:\/\/patterns\/(\w+)\/(\w+)/);
  if (patternMatch) {
    const [, framework, category] = patternMatch;
    const fw = framework as FrameworkId;

    if (!frameworks[fw]) {
      throw new Error(`Unknown framework: ${framework}`);
    }

    const patterns = category === 'all'
      ? getPatterns(fw)
      : getPatternsByCategory(fw, category);

    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify(patterns, null, 2),
        },
      ],
    };
  }

  // CSS resources
  const cssMatch = uri.match(/classmcp:\/\/css\/(\w+)\/full/);
  if (cssMatch) {
    const [, framework] = cssMatch;
    const fw = framework as FrameworkId;

    if (!frameworks[fw]) {
      throw new Error(`Unknown framework: ${framework}`);
    }

    const css = generateCSS(fw, { includeStates: true });

    return {
      contents: [
        {
          uri,
          mimeType: "text/css",
          text: css,
        },
      ],
    };
  }

  throw new Error(`Unknown resource: ${uri}`);
});

// ============================================
// START SERVER
// ============================================

async function main() {
  // Load config from project directory
  projectPath = process.cwd();

  try {
    const configResult = await loadConfig(projectPath);
    currentConfigPath = configResult.configPath;

    if (configResult.found && configResult.validation.valid) {
      // Apply custom patterns
      const customPatterns = configResult.config.customPatterns || [];
      if (customPatterns.length > 0) {
        const transformed = transformPatternsWithMeta(customPatterns);
        setCustomPatterns(transformed, configResult.config.overrideBuiltins ?? false);
        console.error(`[classmcp] Loaded ${transformed.length} custom patterns from ${configResult.configPath}`);
      }

      // Apply default framework if specified
      if (configResult.config.defaultFramework) {
        currentFramework = configResult.config.defaultFramework;
      }
    } else if (configResult.found && !configResult.validation.valid) {
      console.error(`[classmcp] Config validation failed - using defaults`);
    }
  } catch (error) {
    console.error(`[classmcp] Error loading config: ${error instanceof Error ? error.message : String(error)}`);
  }

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("classmcp v2.0.0 - Multi-framework CSS class server running on stdio");
  console.error(`Default framework: ${frameworks[currentFramework].config.displayName}`);

  const stats = getFrameworkStats(currentFramework);
  if (stats.customPatterns > 0) {
    console.error(`Custom patterns: ${stats.customPatterns}`);
  }
}

main().catch(console.error);
