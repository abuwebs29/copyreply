# Sprint 7.4 — Smart Internal Linking

## Added
- Deterministic similarity engine using category, title, keywords, and intent overlap.
- Smart related replies on every reply page.
- Related Communication Academy guides on reply pages.
- Five multi-step communication journeys with previous/next navigation.
- Homepage journey discovery cards.
- Protected `/admin/link-health` dashboard.
- Incoming, outgoing, guide, journey, and overall link-health scoring.
- Orphan and weak-link issue detection.

## Notes
- All relationships are generated at build time from the existing content data.
- No third-party service or database is required.
- Admin routes continue to use the existing Basic Auth middleware.
