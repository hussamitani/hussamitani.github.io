# hussamitani.github.io

Personal portfolio of **Hussam Itani** – Laravel / PHP developer & game dev enthusiast.

Plain HTML, CSS and JavaScript. No build step, no framework – GitHub Pages serves it as-is.

## Structure

```
index.html          one-page layout (hero, about, stack, journey, game dev, contact)
css/style.css       all styles & animations
js/main.js          floating stack icons, typing/terminal effects, stack filter,
                    scroll reveals, mini snowboarding game, Konami easter egg
assets/favicon.svg
assets/img/         put your pictures here (see below)
.nojekyll           tells GitHub Pages to skip Jekyll processing
```

## Adding pictures

Drop these files into `assets/img/` – the page shows tasteful placeholders until they exist:

| File            | Used for                                   |
|-----------------|--------------------------------------------|
| `profile.jpg`   | About section portrait (4:5 works best)    |
| `vr-1.jpg` … `vr-3.jpg` | VR snowboarding thesis screenshots (16:10) |
| `og-image.png`  | Social share preview (1200×630)            |

## Editing the tech stack

The tech stack lives in the `STACK` array at the top of `js/main.js`. It drives both the
stack grid and the floating background icons. Icons come from [Devicon](https://devicon.dev).

## Local preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Push to `main` – in the repo settings set **Pages → Source** to *Deploy from a branch* / `main` / `root`.
