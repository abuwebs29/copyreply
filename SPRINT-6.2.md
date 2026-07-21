# Sprint 6.2 — Search 2.0

## Shipped

- Instant autocomplete on homepage and search page
- Keyboard navigation (Arrow Up, Arrow Down, Enter, Escape)
- Weighted ranking across title, description, category, keywords, tone labels, and reply text
- Synonym expansion for common intents such as “quit job”, “money back”, and “no response”
- Lightweight typo tolerance using edit distance
- Filters for category, tone, and average reply length
- Trending searches and improved zero-result recovery
- Result click analytics hook (`search_result_clicked`)
- Paginated client-side result rendering
- Responsive mobile search interface

## Privacy

Search analytics use the existing optional Google Analytics hook. No account is required and no server-side personal profile is created.
