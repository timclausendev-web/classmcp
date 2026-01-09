# classmcp

**Multi-Framework MCP Server for AI-Optimized CSS Generation**

Stop wasting tokens on long utility class strings. Let AI generate code with semantic class names like `btn-primary` and `card` - with full SSR safety awareness and optional minification.

Supports **Tailwind CSS**, **Bootstrap 5**, **UnoCSS**, and **Tachyons**.

## The Problem

When AI generates utility-first CSS code, it creates verbose class strings:

```html
<button class="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
  Click me
</button>
```

This wastes:
- **AI tokens** - longer context = higher costs
- **Your time** - harder to read and debug
- **Bundle size** - repeated patterns bloat HTML
- **SSR safety** - easy to accidentally use client-only patterns

## The Solution

classmcp provides semantic class names to AI assistants:

```html
<!-- Semantic -->
<button class="btn-primary">Click me</button>

<!-- Or ultra-minified for maximum savings -->
<button class="a">Click me</button>
```

The AI queries available patterns, uses short names, and you get clean, readable code that's SSR-safe.

## Installation

### For Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "classmcp": {
      "command": "npx",
      "args": ["classmcp"]
    }
  }
}
```

### For other MCP clients

```bash
npx classmcp
```

## Features

### Multi-Framework Support

Switch between CSS frameworks instantly:

```
set_framework: "tailwind"   # Default
set_framework: "bootstrap"  # Bootstrap 5
set_framework: "unocss"     # UnoCSS
set_framework: "tachyons"   # Tachyons
```

### SSR Safety

Every pattern is marked for server-side rendering compatibility:

```
get_ssr_info: "modal-overlay"

→ Status: ⚠️ Requires Client JS
→ Warning: Modal visibility controlled by JS
→ Recommendations: Use useEffect to add client-only classes
```

Filter for SSR-safe patterns only:
```
list_classes: { ssrSafeOnly: true }
```

### Minification

Generate ultra-short class names for maximum token savings:

```
get_class: { name: "btn-primary", minified: true }

→ Class: "a" (saves 11 chars per usage)
```

### Custom Patterns

Define your own semantic class names by creating a `.classmcp.json` file in your project root:

**Simple format:**
```json
{
  "customPatterns": [
    { "id": "brand-btn", "classes": "px-4 py-2 bg-brand-600 text-white rounded-lg font-semibold" },
    { "id": "pricing-card", "classes": "p-8 border-2 border-gray-100 rounded-2xl shadow-xl" }
  ]
}
```

**With states and metadata:**
```json
{
  "customPatterns": [
    {
      "id": "brand-btn",
      "category": "buttons",
      "description": "Brand-colored primary button",
      "classes": {
        "base": "px-4 py-2 bg-brand-600 text-white rounded-lg font-semibold",
        "hover": "hover:bg-brand-700 hover:shadow-md",
        "focus": "focus:ring-2 focus:ring-brand-300"
      }
    }
  ],
  "overrideBuiltins": false,
  "defaultFramework": "tailwind"
}
```

**Config options:**
| Option | Description |
|--------|-------------|
| `customPatterns` | Array of custom pattern definitions |
| `overrideBuiltins` | If `true`, custom patterns replace built-ins with same ID |
| `defaultFramework` | Default framework to use (tailwind, bootstrap, unocss, tachyons) |

**Pattern options:**
| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (e.g., "brand-btn") |
| `classes` | Yes | CSS classes (string or state object with base/hover/focus/active/disabled) |
| `category` | No | Category for organization (defaults to "custom") |
| `name` | No | Human-readable name (defaults to id) |
| `description` | No | Description of when to use |
| `frameworks` | No | Limit to specific frameworks (e.g., ["tailwind"]) |
| `ssr.safe` | No | Whether pattern is SSR-safe |

**Alternative config locations:**
- `.classmcp.json` (recommended)
- `classmcp.config.json`
- `package.json` under `"classmcp"` key

After modifying your config, use the `reload_config` tool to apply changes without restarting.

## Available Tools

| Tool | Description |
|------|-------------|
| `set_framework` | Set CSS framework (tailwind, bootstrap, unocss, tachyons) |
| `get_class` | Get utility classes for a semantic name |
| `list_classes` | List available classes (filter by category, SSR-safe) |
| `search_classes` | Search for classes by name or description |
| `generate_css` | Generate CSS file with all class definitions |
| `get_component` | Get complete HTML component examples |
| `get_ssr_info` | Check SSR/hydration safety for a pattern |
| `list_frameworks` | List all available frameworks with statistics |
| `reload_config` | Reload custom patterns from config file |
| `list_custom_patterns` | List all user-defined custom patterns |

## Class Categories

- **buttons** - btn-primary, btn-secondary, btn-danger, btn-ghost, btn-outline
- **cards** - card, card-bordered, card-header, card-body, card-footer
- **forms** - input, input-error, label, select, checkbox, textarea, toggle
- **badges** - badge-primary, badge-success, badge-warning, badge-danger
- **alerts** - alert-info, alert-success, alert-warning, alert-error
- **avatars** - avatar-sm, avatar-md, avatar-lg
- **layout** - container, flex-center, flex-between, stack, row, grid-2, grid-3
- **typography** - heading-xl, heading-lg, heading-md, text-body, text-muted
- **navigation** - nav, nav-link, nav-link-active
- **modals** - modal, modal-overlay, modal-header, modal-body, modal-footer
- **tables** - table, table-header, th, td, tr-hover
- **lists** - list, list-item, list-item-hover
- **loading** - spinner, skeleton, skeleton-text, skeleton-avatar
- **dividers** - divider, divider-vertical

## Usage Example

Ask Claude:

> "Create a card with a user profile, showing avatar, name, email, and action buttons"

Claude will use classmcp to generate:

```html
<div class="card">
  <div class="flex-start space-x-4">
    <div class="avatar-lg">JD</div>
    <div class="stack">
      <h3 class="heading-sm">John Doe</h3>
      <p class="text-muted">john@example.com</p>
    </div>
  </div>
  <div class="card-footer">
    <button class="btn-primary">Message</button>
    <button class="btn-secondary">Profile</button>
  </div>
</div>
```

## Setup Your Project

1. Generate the CSS:

```bash
# Ask Claude to use the generate_css tool, or:
npx classmcp generate-css > src/classmcp.css
```

2. Import in your CSS:

**Tailwind:**
```css
@import "tailwindcss";
@import "./classmcp.css";
```

**Bootstrap:**
```css
@import "bootstrap/dist/css/bootstrap.min.css";
@import "./classmcp.css";
```

## Token Savings

| Component | Without classmcp | With classmcp | Minified | Savings |
|-----------|------------------|---------------|----------|---------|
| Button | 180 chars | 12 chars | 1 char | 99% |
| Card | 85 chars | 5 chars | 1 char | 99% |
| Input | 145 chars | 6 chars | 1 char | 99% |
| Modal | 200+ chars | 12 chars | 1 char | 99% |

Over a full page with 50+ components, this adds up to **thousands of tokens saved**.

## SSR Safety Guide

### Safe for SSR (no JS needed)
- All button variants (hover/focus are CSS pseudo-classes)
- All card patterns
- Form inputs (base styling)
- Typography patterns
- Layout utilities
- Badges, alerts

### Requires Client JS (may cause hydration issues)
- `modal-overlay` - visibility needs JS
- `toggle` - checked state
- `spinner` - animation timing
- `alert-dismissible` - close button

Use `ssrSafeOnly: true` or check with `get_ssr_info` when building Next.js/Nuxt/Remix apps.

## Framework Statistics

| Framework | Patterns | SSR-Safe | Categories |
|-----------|----------|----------|------------|
| Tailwind CSS | 70+ | 65+ | 14 |
| Bootstrap 5 | 70+ | 65+ | 14 |
| UnoCSS | 70+ | 65+ | 14 |
| Tachyons | 70+ | 65+ | 14 |

## How It Works

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Claude    │────▶│  classmcp   │────▶│  Your Code  │
│             │     │  (MCP)      │     │             │
│ "Make a     │     │             │     │ <button     │
│  button"    │     │ get_class   │     │  class=     │
│             │◀────│ btn-primary │     │  "btn-      │
│             │     │ (SSR-safe)  │     │   primary"> │
└─────────────┘     └─────────────┘     └─────────────┘
```

1. AI asks classmcp for available classes
2. classmcp returns semantic names + SSR safety info
3. AI generates code using short class names
4. You add the generated CSS to your project
5. Your CSS framework compiles it

## Related: classpresso

- **classmcp** = AI layer (development time) - helps AI generate clean code
- **classpresso** = Build layer (build time) - optimizes existing code

They're complementary:
1. Use classmcp when writing new code with AI
2. Use classpresso to optimize existing/legacy code

## License

MIT

## Links

- [classmcp.com](https://classmcp.com)
- [classpresso](https://classpresso.com)
- [npm](https://www.npmjs.com/package/classmcp)
- [AI Integration Guide](./AI-INSTRUCTIONS.md)
