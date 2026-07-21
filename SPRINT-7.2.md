# Sprint 7.2 — Growth Dashboard

## Added
- Private, noindex dashboard at `/admin/dashboard`
- First-party event log stored locally in the browser
- Search, copy, Studio, export and share metrics
- Top searches and most copied replies
- Recent activity feed
- Direct link to GA4 for site-wide analytics
- Clear-local-data control
- `/admin` excluded from robots.txt and sitemap

## Privacy
The dashboard stores up to 500 interaction events in the current browser only. It does not collect names, email addresses, message content, or other personal data.

## Important limitation
Local dashboard numbers represent activity in the current browser. Google Analytics 4 remains the source of truth for traffic across all visitors and devices.

## Vercel setup
Add these environment variables before opening the dashboard:
- `ADMIN_DASHBOARD_PASSWORD` — required
- `ADMIN_DASHBOARD_USERNAME` — optional; defaults to `admin`

The `/admin` route returns 503 until a password is configured, and then uses browser Basic Authentication.
