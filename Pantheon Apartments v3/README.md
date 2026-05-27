# Pantheon Apartments — v3

The production website for **Pantheon Apartments**, a seafront vacation rental in Paralia Katerinis (Pieria, Greece). Two booking products on one property: a **One-Bedroom Apartment** (sleeps 4, full kitchen) and a **Deluxe Double Room** (sleeps 2, ensuite).

- 🌐 Live: **https://pantheon-apartments.gr**
- 🔁 Fallback: **https://miltoskat.github.io/pantheon-apartments/** (auto-redirects to the custom domain)
- 📦 Source: **https://github.com/miltoskat/pantheon-apartments**

## Stack

- **Astro 6** — static-site generator, zero JS by default
- **Tailwind CSS v4** — CSS-first `@theme` design tokens in `src/styles/global.css`
- **astro-icon + lucide** — SVG icons inlined at build time
- **@astrojs/sitemap** — auto-generated `sitemap-index.xml` for search engines
- **next/font equivalent** — Cormorant Garamond + Jost loaded from Google Fonts

Hosted on **GitHub Pages** (custom domain via Papaki DNS), built and deployed by GitHub Actions on every push to `main`.

## Run

Requires **Node 22+**.

```bash
nvm use 22
npm install        # once
npm run dev        # http://localhost:4321
npm run build      # → ./dist (the deploy artifact)
npm run preview    # serve the built dist locally
npx astro check    # type/template check (used in CI)
```

## File structure

```
Pantheon Apartments v3/
├── src/
│   ├── pages/index.astro          ← composes all sections
│   ├── layouts/BaseLayout.astro   ← <head>, fonts, JSON-LD, Nav + Footer + FadeIn observer
│   ├── components/
│   │   ├── Nav.astro              ← scroll-state + mobile drawer (inline <script>)
│   │   ├── Hero.astro             ← full-bleed photo + zoom animation
│   │   ├── StatsBar.astro
│   │   ├── About.astro            ← asymmetric overlap layout + badge
│   │   ├── Gallery.astro          ← split per room: mosaic + 3-col grid
│   │   ├── Amenities.astro
│   │   ├── Rooms.astro            ← side-by-side room cards
│   │   ├── Reviews.astro          ← real Booking.com reviews
│   │   ├── Location.astro         ← Google Maps embed + animated pin
│   │   ├── BookingCta.astro       ← room selector → 3-platform redirect
│   │   ├── Footer.astro
│   │   ├── FadeIn.astro           ← shared IntersectionObserver
│   │   └── Eyebrow.astro          ← gold-line label component
│   ├── lib/
│   │   ├── content.ts             ← ALL editable copy + URLs + features
│   │   └── url.ts                 ← withBase() helper for asset paths
│   └── styles/global.css          ← Tailwind v4 @theme tokens + keyframes
└── public/
    ├── images/                    ← 8 main-apartment photos
    ├── images/mini/               ← 6 deluxe-double-room photos
    ├── logo.png                   ← temple icon (transparent) — nav, favicon
    ├── logo-lockup.png            ← temple + wordmark — footer
    ├── logo.jpg                   ← OG image for social previews
    ├── favicon.ico / .png         ← browser tab icons
    ├── apple-touch-icon.png       ← iOS home-screen icon
    ├── robots.txt                 ← allows all crawlers, points at sitemap
    └── CNAME                      ← pantheon-apartments.gr
```

## Editing content

**99% of changes happen in one file:** `src/lib/content.ts`.

| Constant | What it controls |
|---|---|
| `NAV_LINKS` | Top-nav menu items |
| `STATS` | The 4-cell stat bar under the hero |
| `AMENITIES` | The 6 amenity cards (each with a lucide icon name) |
| `REVIEWS` | Guest testimonials — paste real Booking.com / Airbnb text here |
| `RATING_SUMMARY` | The big rating block in the Reviews section |
| `LOCATION_POINTS` | The bullets under the map |
| `FOOTER_LINKS` | Nav / Stay / Nearby columns in the footer |
| `IMAGES` | All image paths + alt text (main + mini) |
| `ROOMS` | The two products — name, tagline, features, hero photo, Airbnb URL |
| `BOOKING` | Airbnb listing id, Booking.com slug, phone formats |
| `HOST_TAGLINE`, `HOST_ADDRESS` | Footer copy |

Edits hot-reload during `npm run dev`. To ship, commit and push — the workflow deploys in ~40 seconds.

## The booking section

The CTA at the bottom of the page has a **room selector** at the top. Picking a room rewires the Airbnb tile to that room's specific listing and clamps the guest input to that room's max capacity.

URL prefill mapping per platform:

| Platform | Base URL | Params |
|---|---|---|
| Airbnb (per room) | `airbnb.com/rooms/<listing_id>` | `check_in`, `check_out`, `adults` |
| Booking.com (shared) | `booking.com/hotel/gr/pantheon-apartments-paralia-katerines.html` | `checkin`, `checkout`, `group_adults`, `no_rooms=1` |
| Phone | `tel:+306944187226` | (none — direct dial) |

The Rooms section cards above don't link straight to Airbnb — they have **"Reserve this room"** buttons that anchor-scroll down to the booking section AND pre-select that room's radio. So a click on the Deluxe Double Room card → user lands on the booking CTA with that room already selected.

## SEO + Google indexing

- `robots.txt` allows all crawlers and references the sitemap
- `sitemap-index.xml` is generated at build time by `@astrojs/sitemap`
- Every page has a `<link rel="canonical">` pointing to the absolute URL
- `<meta property="og:*">` + Twitter Card meta — rich previews when the URL is shared
- `<script type="application/ld+json">` in `BaseLayout` ships a **LodgingBusiness** schema covering both rooms — Google may surface this as a knowledge panel

To register the site with Google Search Console (one-time, requires the host's Google account), see the section below.

## Deployment

Workflow at `.github/workflows/deploy.yml` (at the **repo root**, not inside this folder). Triggers on push to `main`. All GitHub Actions are SHA-pinned to immutable commits for supply-chain safety.

The `working-directory` is hardcoded to `"Pantheon Apartments v3"` — if you ever flatten the repo so this folder is the root, drop both the `working-directory` and `cache-dependency-path` overrides.

### Custom domain

DNS records on Papaki (`papaki.gr`) point `pantheon-apartments.gr` at GitHub Pages's anycast IPs (4× A records) plus a CNAME for `www`. GitHub auto-provisioned a Let's Encrypt cert covering both apex + www. HTTPS is enforced — HTTP requests get a 301 redirect.

## Still TODO

- **Greek-language version** — `/el/` route or a language toggle. Most guests are Greek, Bulgarian, Romanian, Serbian based on the Booking.com reviews; a Greek site would help discovery.
- **Replace m4 (mini bathroom)** when the host re-shoots with a neutral shower curtain
- **Replace footer's "Contact via Airbnb"** placeholder href with a real link
- **Google Analytics 4** — currently no analytics installed; add the GA4 snippet to `BaseLayout` once a property is created
- **Switch to Booking.com Genius / Hostaway** integration if a real direct-booking widget is needed (currently the booking CTA just redirects to the platforms)
