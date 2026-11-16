# SmartRoads website

Static site for https://smartroads.ai, served by GitHub Pages from `main` (custom domain in `CNAME`). DNS is at GoDaddy. smartroadsai.com stays on Vercel (project `smartroadsai`) and redirects to smartroads.ai via `vercel.json` in `smartroads-city-sense`.

| Path | File |
|---|---|
| `/` | `index.html` |
| `/press` | `press.html` |
| `/research` | `research.html` |
| `/privacy-policy` | `privacy-policy.html` (linked from the City Sense app stores) |
| `/delete-account` | `delete-account.html` (linked from the City Sense app stores) |

`index.html`, `press.html` and `research.html` are Design Component exports: the page markup lives inside `<x-dc>` and is rendered at load by `support.js` + `vendor/react*.js`. Text for both languages (EN/PT) is in the `<script type="text/x-dc">` block of each page. Assets are content-hashed under `assets/`.

Preview locally with clean URLs: `npx serve .`

## Analytics

PostHog Cloud EU (account hello@smartroads.ai, project "SmartRoads"), cookieless (`cookieless_mode: 'always'` in the SDK plus "Enable cookieless tracking" in project settings; no country data in this mode). Every page loads `analytics.js`, which initialises PostHog only on smartroads.ai (local previews aren't counted) and sends click events: `Email click`, `PDF download`, `Outbound link`, `Language`. Keep `<script src="/analytics.js"></script>` when replacing a page with a new design export.

A weekly email of the "SmartRoads weekly" dashboard goes to hello@smartroads.ai on Fridays at 07:00 Europe/Lisbon (PostHog subscription).
