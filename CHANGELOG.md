# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2025-01-09

### Added
- **Custom patterns support** - Define your own semantic class names in `.classmcp.json`
- **SSR safety metadata** - Filter patterns for hydration-safe classes in Next.js/Nuxt/Remix
- **`get_ssr_info` tool** - Check SSR compatibility for any pattern
- **State variant objects** - Define `base`, `hover`, `focus`, `active`, `disabled` separately
- **Pattern categories** - 14 categories: buttons, cards, forms, badges, alerts, avatars, layout, typography, navigation, modals, tables, lists, loading, dividers

### Changed
- Improved class resolution with `includeStates` option
- Better error messages for unknown patterns

## [2.0.1] - 2025-01-08

### Fixed
- Repository URL in package.json

## [2.0.0] - 2025-01-08

### Added
- **Multi-framework support** - Tailwind CSS, Bootstrap 5, UnoCSS, Tachyons
- **`set_framework` tool** - Switch frameworks at runtime
- **`list_frameworks` tool** - View all available frameworks and stats
- **`generate_css` tool** - Generate CSS with `@apply` directives
- **`get_component` tool** - Get complete HTML component examples
- **`search_classes` tool** - Search patterns by name, description, or category
- **Minification system** - Single-character class names for maximum token savings
- **50+ built-in patterns** across all categories

### Changed
- Complete architecture rewrite with modular framework system
- Moved from single patterns file to `src/frameworks/` directory structure
- Improved TypeScript types with `ComponentPattern`, `StateVariant`, `FrameworkConfig`

### Breaking Changes
- Pattern structure changed from flat strings to `StateVariant` objects
- Framework must be set before getting framework-specific classes

## [1.0.0] - 2025-01-07

### Added
- Initial release
- MCP server with `get_class` and `list_classes` tools
- Tailwind CSS patterns for common UI components
- Basic semantic class mapping (btn-primary, card, input, etc.)

---

[2.1.0]: https://github.com/timclausendev-web/classmcp/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/timclausendev-web/classmcp/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/timclausendev-web/classmcp/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/timclausendev-web/classmcp/releases/tag/v1.0.0
