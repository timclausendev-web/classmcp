# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

classmcp is an MCP (Model Context Protocol) server that provides semantic CSS class patterns optimized for AI code generation. It maps short semantic class names (like `btn-primary`) to full utility class strings, reducing token usage and improving code readability. Supports Tailwind CSS, Bootstrap 5, UnoCSS, and Tachyons.

## Git Workflow

**IMPORTANT: Always keep CHANGELOG.md in sync before pushing to git.**

When making changes that affect functionality:
1. Update `CHANGELOG.md` under the appropriate version section
2. Use [Keep a Changelog](https://keepachangelog.com/) format (Added, Changed, Fixed, Removed)
3. Then commit and push

## Commands

```bash
# Build TypeScript to dist/
npm run build

# Watch mode for development
npm run dev

# Run the MCP server
npm start

# Type check without emitting
npm run typecheck
```

## Architecture

### Entry Point
`src/index.ts` - MCP server setup using `@modelcontextprotocol/sdk`. Defines 8 tools (`set_framework`, `get_class`, `list_classes`, `search_classes`, `generate_css`, `get_component`, `get_ssr_info`, `list_frameworks`) and resource handlers. Maintains `currentFramework` state (defaults to 'tailwind').

### Core Modules

**Framework System** (`src/frameworks/`)
- `index.ts` - Framework registry with utilities: `getPatterns()`, `getPattern()`, `resolveClasses()`, `generateCSS()`, `isSSRSafe()`
- `tailwind.ts`, `bootstrap.ts`, `unocss.ts`, `tachyons.ts` - Framework-specific configs and pattern definitions
- Each framework exports a `FrameworkConfig` and array of `ComponentPattern` objects

**Type System** (`src/types.ts`)
- `ComponentPattern` - Main pattern type with `id`, `name`, `classes` (string or `StateVariant`), `category`, `ssr` safety info
- `StateVariant` - Object with `base`, `hover`, `focus`, `active`, `disabled` state classes
- `MinificationMap` - Tracks semantic-to-minified class name mappings

**Minification** (`src/core/minifier.ts`)
- Generates single-character class names (a, b, c...) for maximum token savings
- `createMinificationMap()`, `minifyClass()`, `generateMinifiedCSS()`
- Deduplicates identical utility class strings via hashing

**Legacy Patterns** (`src/patterns.ts`)
- Original Tailwind-only patterns (superseded by `src/frameworks/tailwind.ts`)

### Key Concepts

1. **SSR Safety**: Patterns have `ssr.safe` flag indicating hydration safety. Client-only patterns (modals, toggles) are marked with warnings.

2. **Class Resolution**: `resolveClasses(pattern, options)` handles both string classes and `StateVariant` objects, with options for including/excluding states.

3. **CSS Generation**: Uses `@apply` directive for Tailwind/UnoCSS, raw CSS for others. Generated CSS groups patterns by category.

### Categories
buttons, cards, forms, badges, alerts, avatars, layout, typography, navigation, modals, tables, lists, loading, dividers

---

## Reddit Post Performance Tracking

When the user pastes Reddit post statistics, follow this workflow:

### 1. Update CSV Database
- File: `REDDIT_POSTS.csv`
- Add new row with ISO timestamp (`2025-01-09T13:25:00` format)
- Columns: `post_id,title,subreddit,date_posted,timestamp,ranking,views,hour2_views,upvotes,upvote_ratio,comments,top_country_1,top_country_1_pct,top_country_2,top_country_2_pct,top_country_3,top_country_3_pct,notes`

### 2. Display Full Report
Show in this order:
1. **Timeline Table** - All data points with timestamp, views, hr2 views, upvotes, comments, country %
2. **Growth Summary** - ASCII progress bars for views, upvotes, comments with % change from start
3. **Geographic Trend** - Country % changes over time
4. **Change Since Last Update** - Table comparing previous vs current values with % change
5. **Views Over Time Chart** - ASCII line chart
6. **Hour 2 Views Accumulation Chart** - ASCII line chart
7. **Performance Score Box** - Shows "X% BETTER than average" and "SINCE LAST UPDATE: +X%"

### 3. Save Report to Markdown
- Directory: `reddit-performance/`
- Filename format: `chart_DD-MM-YYYY_HHMMSS.md`
- Example: `chart_09-01-2025_132500.md`

### Performance Score Calculation
Compare against r/ClaudeAI averages:
- Engagement Rate: ~0.3% avg
- Upvote Ratio: ~85% avg
- Views/Hour: ~200-400 avg
- Comment Rate: ~0.2% avg

Overall score = weighted average of (your metric / avg metric) across all categories

### 4. Generate PDF Report
Command: `npm run reddit-report`

This generates a beautiful PDF with:
- Dark gradient theme with glassmorphism
- Interactive-style Chart.js graphs (Views, Hour 2, Engagement, Growth Rate)
- Geographic distribution bars
- Performance score banner
- Auto-saved to `reddit-performance/report_DD-MM-YYYY_HHMMSS.pdf`

Optional: `npm run reddit-report custom-name.pdf`
