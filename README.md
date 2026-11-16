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

Umami Cloud (EU, account hello@smartroads.ai), cookieless. Every page loads Umami's script (`data-domains="smartroads.ai"`, so local previews aren't counted) and `track.js`, which sends click events: `Email click`, `PDF download`, `Outbound link`, `Language`. Keep both script tags when replacing a page with a new design export.
