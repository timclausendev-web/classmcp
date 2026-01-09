# classmcp - AI Integration Guide

This document is optimized for AI language models to understand and effectively use classmcp.

## What is classmcp?

classmcp is an MCP (Model Context Protocol) server that provides pre-defined CSS class patterns optimized for AI code generation. Instead of generating long utility class strings, AI can use short semantic class names that expand to full utility classes.

## Why Use classmcp?

### Token Efficiency

```
WITHOUT classmcp (89 tokens):
class="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"

WITH classmcp (3 tokens):
class="btn-primary"

WITH minification (1 token):
class="a"
```

### Consistency
All patterns are pre-tested combinations that work well together.

### SSR Safety
Patterns are marked for server-side rendering compatibility to prevent hydration mismatches.

### Multi-Framework
Works with Tailwind CSS, Bootstrap 5, UnoCSS, and Tachyons.

---

## Available Tools

### 1. `set_framework`
Set the CSS framework for subsequent operations.

```json
{
  "framework": "tailwind" | "bootstrap" | "unocss" | "tachyons"
}
```

**Default:** `tailwind`

### 2. `get_class`
Get utility classes for a semantic class name.

```json
{
  "name": "btn-primary",
  "minified": false,
  "ssrSafe": false,
  "includeStates": true
}
```

**Returns:** Full utility classes, description, usage example

### 3. `list_classes`
List available class patterns.

```json
{
  "category": "buttons",
  "ssrSafeOnly": false
}
```

**Categories:** buttons, cards, forms, badges, alerts, avatars, layout, typography, navigation, modals, tables, lists, loading, dividers

### 4. `search_classes`
Search patterns by name or description.

```json
{
  "query": "primary button"
}
```

### 5. `generate_css`
Generate CSS file with all class definitions.

```json
{
  "categories": ["buttons", "cards"],
  "minified": false,
  "includeStates": true
}
```

### 6. `get_component`
Get complete HTML component examples.

```json
{
  "component": "card-with-header",
  "minified": false
}
```

**Components:** button-group, card-with-header, form-field, alert-with-icon, avatar-stack, modal, table, nav-bar, pricing-card, testimonial

### 7. `get_ssr_info`
Check SSR/hydration safety for a pattern.

```json
{
  "name": "modal-overlay"
}
```

### 8. `list_frameworks`
List all available CSS frameworks with statistics.

---

## Common Patterns Quick Reference

### Buttons
| Pattern | Description |
|---------|-------------|
| `btn-primary` | Primary action button (blue) |
| `btn-secondary` | Secondary button (gray) |
| `btn-success` | Success button (green) |
| `btn-danger` | Danger/delete button (red) |
| `btn-outline` | Outlined button |
| `btn-ghost` | Transparent button |

### Cards
| Pattern | Description |
|---------|-------------|
| `card` | Basic card container |
| `card-header` | Card header section |
| `card-body` | Card content area |
| `card-footer` | Card footer section |

### Forms
| Pattern | Description |
|---------|-------------|
| `input` | Text input field |
| `input-error` | Input with error state |
| `label` | Form label |
| `select` | Dropdown select |
| `checkbox` | Checkbox input |
| `textarea` | Multi-line input |

### Layout
| Pattern | Description |
|---------|-------------|
| `container` | Centered max-width container |
| `flex-center` | Flex with center alignment |
| `flex-between` | Flex with space-between |
| `stack` | Vertical stack with spacing |
| `row` | Horizontal row with spacing |
| `grid-2` | 2-column responsive grid |
| `grid-3` | 3-column responsive grid |

### Typography
| Pattern | Description |
|---------|-------------|
| `heading-xl` | Extra large heading (h1) |
| `heading-lg` | Large heading (h2) |
| `heading-md` | Medium heading (h3) |
| `heading-sm` | Small heading (h4) |
| `text-body` | Body paragraph text |
| `text-muted` | Muted/secondary text |

---

## SSR Safety Guide

### SSR-Safe Patterns
These patterns use only CSS pseudo-classes and are safe for server-side rendering:
- All button variants
- All card patterns
- Form inputs (without toggle states)
- Typography patterns
- Layout patterns
- Badges
- Static alerts

### Patterns Requiring Client JS
These may cause hydration mismatches if not handled properly:
- `modal-overlay` - visibility controlled by JS
- `modal` - show/hide state
- `toggle` - checked state
- `alert-dismissible` - close functionality
- `spinner` - animation timing

### SSR Best Practices
1. Use `ssrSafe: true` parameter to filter safe patterns
2. Check patterns with `get_ssr_info` before using in SSR apps
3. Add client-only classes after hydration using `useEffect`/`onMount`
4. Control modal/dropdown visibility with server state when possible

---

## Minification

classmcp supports ultra-minified single-character class names:

```css
/* Normal */
.btn-primary { @apply inline-flex items-center... }
.btn-secondary { @apply inline-flex items-center... }

/* Minified */
.a { @apply inline-flex items-center... }
.b { @apply inline-flex items-center... }
```

### Benefits
- Minimum token usage in AI-generated code
- Smaller HTML output
- Faster parsing

### Usage
Set `minified: true` in:
- `get_class` - returns minified class name
- `generate_css` - generates minified CSS
- `get_component` - uses minified classes in examples

---

## Framework-Specific Notes

### Tailwind CSS
- Uses `@apply` directive
- Requires tailwind.config.js
- JIT mode recommended
- Full responsive prefix support

### Bootstrap 5
- Uses native Bootstrap classes
- Requires Bootstrap CSS
- Some patterns need Bootstrap JS
- Grid system built-in

### UnoCSS
- Similar to Tailwind syntax
- Uses `@apply` directive
- Attributify mode compatible
- Zero-runtime by default

### Tachyons
- Functional CSS approach
- Uses raw CSS (no @apply)
- Suffix-based responsive (-ns, -m, -l)
- Minimal file size

---

## Integration Examples

### Next.js App Router
```tsx
// app/components/Button.tsx
export function Button({ children }) {
  return (
    <button className="btn-primary">
      {children}
    </button>
  );
}
```

### React with CSS Module Alternative
```tsx
// Uses classmcp patterns directly
function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="heading-sm">{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
```

### SSR-Safe Modal
```tsx
function Modal({ isOpen, children }) {
  // Control visibility with server state
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" />
      <div className="modal">
        {children}
      </div>
    </>
  );
}
```

---

## Workflow for AI Code Generation

1. **Start**: Use `list_frameworks` to see available options
2. **Set Framework**: Use `set_framework` if not using Tailwind
3. **Discover**: Use `list_classes` to see available patterns
4. **Search**: Use `search_classes` when unsure of exact name
5. **Get Classes**: Use `get_class` to retrieve utility classes
6. **Check SSR**: Use `get_ssr_info` for SSR applications
7. **Generate CSS**: Use `generate_css` to create project CSS file
8. **Examples**: Use `get_component` for complete examples

---

## Error Handling

If a class is not found, classmcp will:
1. Suggest similar class names
2. Recommend using `list_classes` to see available options

If SSR safety is a concern:
1. Use `ssrSafe: true` to get only safe patterns
2. Check specific patterns with `get_ssr_info`
3. Follow the recommendations for client-only classes

---

## Version Information

- **classmcp version**: 2.0.0
- **Supported frameworks**: Tailwind CSS 3.x/4.x, Bootstrap 5.3, UnoCSS 0.58, Tachyons 4.12
- **MCP SDK version**: 0.5.0

---

## Quick Decision Tree

```
Need a button?
→ Use btn-primary, btn-secondary, btn-danger, etc.

Need a card?
→ Use card with card-header, card-body, card-footer

Need form elements?
→ Use input, label, select, checkbox, textarea

Need layout?
→ Use container, flex-center, flex-between, grid-2, grid-3

Need to handle SSR?
→ Set ssrSafe: true or use get_ssr_info

Want smaller output?
→ Set minified: true
```
