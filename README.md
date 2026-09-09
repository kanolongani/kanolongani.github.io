# karanlongani.github.io

Personal portfolio for **Karan Longani** — Python developer / AI engineer.
Single-page site built with vanilla JavaScript and bundled with webpack.

## Stack

- HTML + CSS (custom properties, dark/light theme)
- Vanilla JS, split into small ES modules (`src/modules/`)
- webpack 5 (`html-webpack-plugin`, `mini-css-extract-plugin`, asset modules)
- Deployed to GitHub Pages via `gh-pages`

## Local development

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build to dist/
npm run deploy   # build + publish dist/ to the gh-pages branch
npm run lint     # eslint
npm run format   # prettier
```

Node 20+ is expected (see `.node-version`). The webpack scripts set
`NODE_OPTIONS=--openssl-legacy-provider` so the pinned webpack 5.52 build
runs on modern Node.

## Structure

```
src/
  index.html            markup (webpack template)
  index.js              entry — wires up the modules
  styles/index.css      design tokens + all component styles
  modules/
    theme.js            dark/light toggle (persisted in localStorage)
    nav.js              mobile menu + scroll-spy active link
    scroll.js           back-to-top button + sticky-header state
    reveal.js           IntersectionObserver scroll-in animations
  assets/
    images/             project screenshots
    Karan_Longani_Resume.pdf
```

## Updating content

- **Projects, experience, skills:** edit `src/index.html`.
- **Résumé:** replace `src/assets/Karan_Longani_Resume.pdf`.
- **Colours / spacing:** the design tokens at the top of `src/styles/index.css`.
- The three "Private project" cards have no links yet — add `.project__links`
  blocks when the repos/demos are public.
