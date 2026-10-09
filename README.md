# hussamitani.github.io

Personal portfolio of **Hussam Itani** – Laravel / PHP developer & game dev enthusiast.

Plain HTML, CSS and JavaScript. No build step, no framework – GitHub Pages serves it as-is.

## Structure

```
index.html          one-page layout (hero, about, journey, projects, toolbox, contact + mini game)
css/style.css       all styles & animations
js/i18n.js          EN / DE language switch, all visible copy lives here
js/main.js          stack, journey & project data, floating icons, typing/terminal effects,
                    flip cards, scroll reveals, mini snowboarding game, Konami easter egg
assets/favicon.svg
assets/img/         hussam.jpg (portrait, 4:5), og-image.png (social preview, 1200×630, still missing)
assets/docs/        bachelor thesis PDF
.nojekyll           tells GitHub Pages to skip Jekyll processing
```

## Editing content

| What | Where |
|---|---|
| Any text, in both languages | `js/i18n.js` (`en` and `de` objects share the same keys) |
| Journey entries | `JOURNEY` in `js/main.js`, text under `journey.jobs.<id>` in `js/i18n.js` |
| Project cards | `PROJECTS` in `js/main.js`, text under `projects.items.<id>`. Set `url` to the GitHub repo, `null` shows "coming soon" |
| Tech stack | `STACK` in `js/main.js`, drives the grid and the floating icons. Icons from [Devicon](https://devicon.dev) |

The language defaults to the browser language and remembers the visitor's choice in `localStorage`.
It is plain client-side JS, so it works the same on GitHub Pages and Cloudflare Pages.

## Local preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Push to `main`. In the repo settings set **Pages → Source** to *Deploy from a branch* / `main` / `root`.
Cloudflare Pages works too: no build command, output directory `/`.
