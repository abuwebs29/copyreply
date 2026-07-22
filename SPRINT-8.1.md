# Sprint 8.1 — Multilingual Foundation

## Added
- Arabic entry point at `/ar` and Arabic information page at `/ar/about`.
- `/en` compatibility route that permanently redirects to the existing English homepage.
- Global English/Arabic language switcher with a one-year browser preference cookie.
- Dynamic document `lang` and `dir` attributes based on the active route.
- Full RTL layout and Arabic typography foundation.
- Global and Arabic-specific `hreflang`, canonical, Open Graph locale, and language metadata.
- Arabic text normalization helper for the upcoming localized search index.
- Arabic routes in the XML sitemap.

## Compatibility
Existing English URLs remain unchanged, preserving their current search equity and backlinks. The English root is the default (`x-default`) while `/ar` is the Arabic locale.

## Next
Sprint 8.2 can add the first localized reply data set, Arabic category hubs, Arabic search, and Arabic Reply Studio presets without restructuring the application again.
