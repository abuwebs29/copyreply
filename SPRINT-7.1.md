# Sprint 7.1 — Technical SEO & Performance

## Technical SEO

- Added reusable, safely escaped JSON-LD rendering.
- Added global Organization and WebSite structured data.
- Added SearchAction markup for the site search route.
- Added CollectionPage and ItemList markup to category hubs and the guide index.
- Added improved BreadcrumbList markup to reply, category, and guide pages.
- Added WebPage entities to reply and guide pages.
- Added SoftwareApplication markup to Reply Studio.
- Expanded global metadata with robots directives, canonical defaults, Open Graph, Twitter, publisher, and application information.
- Improved per-page Open Graph and Twitter metadata.
- Removed the private Saved Replies page from the sitemap and blocked it in robots.txt.
- Reworked sitemap priorities, crawl frequencies, and stable last-modified values.

## Performance and resilience

- Added long-lived cache headers for static assets.
- Removed the `X-Powered-By` response header.
- Enabled response compression and React strict mode.
- Added browser security and permissions headers.
- Deferred Google Analytics until after hydration and retained the supplied GA4 measurement ID.
- Added CSS content-visibility for below-the-fold sections.
- Added reduced-motion support and safer responsive media sizing.

## Verification

Run `bun install` followed by `bun run build` before deployment.
