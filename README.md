# SmartRoads website

Static site for smartroads.ai / smartroadsai.com, served by GitHub Pages from `main`.

| Path | File |
|---|---|
| `/` | `index.html` |
| `/press` | `press.html` |
| `/research` | `research.html` |
| `/privacy-policy` | `privacy-policy.html` (linked from the City Sense app stores) |
| `/delete-account` | `delete-account.html` (linked from the City Sense app stores) |

`index.html`, `press.html` and `research.html` are Design Component exports: the page markup lives inside `<x-dc>` and is rendered at load by `support.js` + `vendor/react*.js`. Text for both languages (EN/PT) is in the `<script type="text/x-dc">` block of each page. Assets are content-hashed under `assets/`.

Preview locally with clean URLs: `npx serve .`
