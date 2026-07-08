# Self-hosted fonts

This folder is where locally-hosted font files should live so they can be
served from the same origin (required for a CSP without third-party font
hosts, and for reliable Cloudflare Pages deploys).

## Le Jour Serif

Not included in this repo (commercial font). When you have licensed files,
add them here as:

```
public/fonts/le-jour-serif/le-jour-serif-regular.woff2
public/fonts/le-jour-serif/le-jour-serif-regular.woff   (optional)
public/fonts/le-jour-serif/le-jour-serif-regular.ttf    (optional)
public/fonts/le-jour-serif/le-jour-serif-italic.woff2   (optional)
public/fonts/le-jour-serif/le-jour-serif-italic.woff    (optional)
public/fonts/le-jour-serif/le-jour-serif-italic.ttf     (optional)
```

Then uncomment the matching `@font-face` rules in
[`src/styles/fonts.css`](../../src/styles/fonts.css). No other changes are
needed — components already reference the font-family `"Le Jour Serif"`
with `'Playfair Display', Georgia, serif` fallbacks.
