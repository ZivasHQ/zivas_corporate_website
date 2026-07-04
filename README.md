# Zivas corporate site

Standalone marketing site — plain HTML/CSS/JS, no build step, no dependency
on the product app or backend. Open `index.html` directly or host the
folder as-is on any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Structure

- `index.html` — the whole site (single page: hero, about, vision/mission,
  product, demo, audience, team, contact)
- `styles.css` — same design tokens as the product (navy ink, teal brand
  accent, Space Grotesk/Inter/IBM Plex Mono), light/dark theme via CSS
  variables
- `script.js` — theme toggle (persisted), mobile nav, scroll-reveal
  animation, demo-request form handling
- `assets/` — logo mark, logo lockup, CEO photo

## Notes on what's real vs. placeholder

- The three "demo" panels are illustrative mockups styled to match the
  actual product UI — not real screenshots, since the app isn't deployed
  yet. Swap them for real screenshots once you have a build to point a
  camera at.
- The video section is an empty, clearly-labeled placeholder. To add the
  real video once you have it, replace the `.video-placeholder` block in
  `index.html` with either a `<video>` tag or an embedded iframe (YouTube/
  Vimeo).
- The demo-request form has no backend — submitting it opens the visitor's
  email client pre-filled with their details, addressed to
  `hello@zivas.app` (see `script.js`). Swap that address for your real
  inbox, or replace the whole handler with a call to a form service
  (Formspree, etc.) or your own backend once you want to actually collect
  and track these leads.
- Update the footer copyright year/entity name if needed, and the
  `hello@zivas.app` address throughout — these are placeholders.
