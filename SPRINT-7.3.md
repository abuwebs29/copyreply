# Sprint 7.3 — Content Factory

## Added
- Protected `/admin/content-factory` editorial workspace.
- Structured reply builder for title, slug, category, audience, situation, keywords, variants and FAQs.
- Editorial framework generator (deterministic, browser-side; no third-party AI or data transfer).
- Live SEO/search preview.
- Editorial validation and readiness score.
- Browser-local draft queue with Draft, Needs Review and Ready states.
- JSON export matching CopyReply's content model.
- Duplicate-safe local draft editing and deletion.
- Admin route remains protected by the existing Basic Auth middleware and excluded from indexing.

## Publishing workflow
1. Create or load a draft.
2. Generate the editorial framework.
3. Replace placeholders and review all content.
4. Resolve validation warnings.
5. Export JSON.
6. Add the approved object to the relevant data module in source control and deploy.

The factory intentionally does not write directly to production files from the browser. This keeps publishing reviewable, version-controlled and compatible with Vercel's immutable deployment filesystem.
