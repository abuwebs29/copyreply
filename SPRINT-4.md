# CopyReply Growth Sprint 4

## Added

- Dedicated `/saved` page with search, remove, and clear-all controls
- Browser-only saved reply library with no account required
- Recently copied reply history
- Per-browser copy counters and personalized popular reply ranking
- Homepage saved/recent dashboard
- Google Analytics-compatible event hooks through `window.gtag` when GA is installed
- Tracked events for copy, save, unsave, share, search, and Reply Studio copy actions
- Privacy-friendly fallback: activity remains in localStorage when analytics is not installed

## Build expectation

The build should generate 136 static routes, including the new Saved Replies page.
