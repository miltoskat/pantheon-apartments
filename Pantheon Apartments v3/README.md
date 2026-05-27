# Pantheon Apartments — v3 (Astro)

Static Astro + Tailwind v4 build of the Paralia Katerinis vacation-rental site, designed to deploy to GitHub Pages with zero runtime.

## Run

Requires **Node 22+**.

```bash
nvm use 22         # if you use nvm
npm install        # once
npm run dev        # http://localhost:4321
npm run build      # → ./dist (the deploy artifact)
npm run preview    # serve the built dist locally
```

## What's where

- `src/pages/index.astro` — composes the home page from section components.
- `src/layouts/BaseLayout.astro` — `<html>` wrapper, fonts (Google Fonts `<link>`), `<Nav>`, `<Footer>`, global `<FadeIn>` observer.
- `src/components/*.astro` — one file per section. All are server-rendered to static HTML. The few interactive bits live in tiny inline `<script>` tags inside their component (Astro bundles them automatically).
- `src/lib/content.ts` — **all editable copy + booking targets**: stats, amenities, reviews, location points, footer links, image metadata, and the `BOOKING` constants (Airbnb listing id, Booking.com slug, phone formats). Edit this file to change content without touching JSX/Astro markup.
- `src/styles/global.css` — Tailwind v4 `@theme` design tokens, keyframes, `.fade-in` base styles.
- `public/images/*.jpg` — the 5 self-hosted property photos.

## The booking section (`BookingCta.astro`)

Replaces the cosmetic search form from v2. Now: shared date/guest inputs at the top + three tiles below — **Airbnb**, **Booking.com**, **Call Direct** (`tel:` link).

A tiny inline `<script>` watches the three inputs and rewrites the `href` of the Airbnb / Booking.com tiles with platform-specific query params:

| Platform     | Listing URL                                                                 | Param mapping                                      |
|--------------|------------------------------------------------------------------------------|----------------------------------------------------|
| Airbnb       | `https://www.airbnb.com/rooms/1421503954372049985`                          | `check_in`, `check_out`, `adults`                  |
| Booking.com  | `https://www.booking.com/hotel/gr/pantheon-apartments-paralia-katerines.html` | `checkin`, `checkout`, `group_adults`, `no_rooms=1` |
| Phone        | `tel:+306944187226`                                                          | (no params — direct dial)                          |

Without JS, the tile links still work — they just go to the listing pages without prefilled dates. The phone tile is a pure `<a href="tel:…">` so it works regardless.

To swap the Airbnb listing id, Booking.com slug, or phone number, edit the `BOOKING` constant in `src/lib/content.ts`.

## GitHub Pages deployment

Workflow at `.github/workflows/deploy.yml` builds and publishes the `dist/` folder on every push to `main`. To enable:

1. Push this repo to GitHub.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. (Optional) Add your custom domain in the same settings page — GitHub will create a `CNAME` file in the deployed artifact. Do **not** add a CNAME file to the repo manually; let GH Pages manage it.

### `base` path

- Hosting at a custom domain (e.g. `pantheonapartments.gr`) or at a user/org site (`<user>.github.io`): leave `base` at the default in `astro.config.mjs` (no change needed).
- Hosting at a project site (`<user>.github.io/<repo-name>/`): set `base: '/<repo-name>/'` in `astro.config.mjs`. Image paths and internal links use root-relative URLs, so this is the only change required.

### Folder caveat

The workflow's `working-directory` is `"Pantheon Apartments v3"` (with spaces). If you ever flatten the repo so this folder is the root, drop the `working-directory` and `cache-dependency-path` overrides.

## Still TODO

- Replace the two placeholder reviews flagged `placeholder: true` in `src/lib/content.ts` once real Airbnb guest reviews are available.
- Footer's "Contact via Airbnb" link currently has `href="#"` — replace with the actual Airbnb listing URL.
- SEO: Open Graph image, JSON-LD `LodgingBusiness` schema.
- Greek language version (`/el/` route or toggle).
- Verify photo filenames (`bedroom.jpg`, `kitchen.jpg`, etc.) actually match the photo contents and rename if wrong.
