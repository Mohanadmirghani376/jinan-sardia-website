# Jinan Sardia International Supply Chain Management Co., Ltd. — Website

Bilingual (English / Arabic) marketing site for a B2B sourcing agency in Jinan, Shandong,
connecting international buyers with vetted Chinese factories across four sectors:

| Sector | Page |
| --- | --- |
| Heavy trucks | `trucks.html` |
| Construction machinery | `construction-machinery.html` |
| Agricultural machinery | `agricultural-machinery.html` |
| Medical supplies | `medical-supplies.html` |

## Running it

No build step and no dependencies. Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# http://localhost:8000
```

Deploy by uploading the whole folder to any static host (cPanel, Netlify, Vercel,
Cloudflare Pages, nginx). There is nothing to compile.

## Brand system

Implemented from the brand guidelines. Every value is a token in
`assets/css/style.css` §02 — change it there and it propagates site-wide.

| Token | Value | Share | Role |
| --- | --- | --- | --- |
| `--red-600` | `#D91E36` | 60% | Primary. Buttons, sector-card art, stats band, focus rings |
| `--green-600` | `#008752` | 20% | Accent. Eyebrows, links, success ticks, logo tagline, process rail |
| `--navy-700` | `#001F5B` | 10% | Authority surfaces. Hero fields, header, footer, wordmark |
| `--grey-400` | `#C5C6C8` | 10% | Neutral. Rules, chips, borders |

Typeface is **Noto Kufi Arabic** for both scripts, loaded via `<link>` (not a CSS
`@import`, which is render-blocking).

- **Logo** — `assets/img/logo.svg`: two interlocking `C` links, green + red, with the
  red node at the join, per the guidelines rationale. The wordmark is HTML, set on two
  lines ("Jinan" / "Sardia") so it stays translatable and RTL-safe rather than baked into
  an image.
- **Pattern** — `assets/img/pattern-route.svg`: abstract route/leaf veins at 9% opacity,
  applied via `.patterned` to the hero, trust bar, stats band, CTA band, navy sections
  and footer. Strokes are baked white because a `background-image` SVG cannot inherit
  `currentColor` across the document boundary.

## Files

```
index.html                        Home
trucks.html                       Sector: trucks
construction-machinery.html       Sector: construction
agricultural-machinery.html       Sector: agriculture
medical-supplies.html             Sector: medical
about.html                        Company
contact.html                      Contact + quote form
404.html                          Standalone error page
robots.txt, sitemap.xml           SEO
assets/css/style.css              All styling, design tokens, RTL rules
assets/js/i18n.js                 EN/AR dictionary + language switcher
assets/js/main.js                 Nav, accordions, reveal, counters, form
assets/img/logo.svg               Chain "C" mark
assets/img/pattern-route.svg      Brand route/leaf pattern
assets/img/hero-visual.svg        Home diagram (English labels)
assets/img/hero-visual.ar.svg     Home diagram (Arabic labels)
```

## How the two languages work

English lives **only in the HTML**. Search engines index it, and the site stays readable
with JavaScript disabled. Arabic lives **only in `assets/js/i18n.js`**.

To translate a string, tag the English element with a key:

```html
<span data-i18n="nav.trucks">Trucks</span>
```

then add the Arabic text once, in the dictionary:

```js
'nav.trucks': 'الشاحنات',
```

Supported hooks:

| Attribute | Target |
| --- | --- |
| `data-i18n="key"` | element text |
| `data-i18n-html="key"` | element inner HTML |
| `data-i18n-ph="key"` | `placeholder` |
| `data-i18n-aria="key"` | `aria-label` |
| `data-i18n-title="key"` | `title` |

The choice is remembered in `localStorage` (`sardia_lang`) and re-applied on every page,
so a visitor switching to Arabic stays in Arabic as they browse. Switching back restores
the English from the page itself, so the two languages cannot drift apart. The pre-rebrand
key `sarida_lang` is still read as a fallback, so visitors who had Arabic saved before the
rename keep their preference.

Arabic art with baked-in labels swaps by variant:

```html
<img data-art-en="a.svg" data-art-ar="a.ar.svg" src="a.svg" alt="...">
```

## Content to replace before launch

Search and replace these placeholders across the HTML files:

- `+86 531 8888 0000` — phone number
- `sales@sardia.com` — email address
- `https://www.sardia.com` — canonical domain (also in `robots.txt` / `sitemap.xml`)
- `Jinan, Shandong, China` — street address
- Client names and quotes in the testimonials section of `index.html`
- The `12 years`, `40+ countries`, `300+ factories`, `2,000 orders`, `98%` figures in the
  hero and stats band
- The `SAR-` reference prefix is generated client-side for demo purposes

Two footer links point at `#` pending real pages: Privacy Policy and Terms of Use.

## Wiring up the quote form

The form in `contact.html` currently runs in **demo mode** — it validates, shows the
success panel and issues a fake reference number, but sends nothing.

To send real enquiries, set an endpoint before `assets/js/main.js` loads:

```html
<script>window.SARDIA_FORM_ENDPOINT = 'https://your-api.com/quotes';</script>
<script src="assets/js/i18n.js"></script>
<script src="assets/js/main.js"></script>
```

The form POSTs JSON:

```json
{
  "name": "...", "company": "...", "email": "...", "phone": "...",
  "country": "...", "sector": "trucks", "quantity": "...", "message": "...", "consent": "on"
}
```

It expects a JSON response; a `reference` field is shown to the visitor if you return one.
If the request fails, the visitor sees an error and a fallback instruction to email you
directly. `?sector=trucks` on the URL pre-selects a sector, which is how the sector pages
link to the form.

## SEO

Each page carries a unique title, description, canonical, Open Graph and Twitter tags, plus
JSON-LD structured data (Organization and WebSite on the home page, BreadcrumbList on
sector pages, ContactPage on the contact page). `hreflang` alternates point at the Arabic
variant of each URL. Update `lastmod` in `sitemap.xml` when content changes.

## Notes

- Scroll-reveal animations are opt-in: JavaScript adds a `js-reveal` class before hiding
  anything, with a 2.5 second fallback, so copy is never stranded at `opacity: 0`.
- If you swap the logo, keep `logo.svg` on a 64×64 viewBox and supply the Arabic wordmark
  as HTML text — baking the Arabic into an image breaks RTL and makes it unsearchable.
- Arabic sets `dir="rtl"` on `<html>`; the stylesheet uses logical properties so the whole
  layout mirrors correctly.
- `prefers-reduced-motion` disables the animations and stat counters.
- Testimonials are illustrative placeholders. Replace them with real, attributable quotes
  before launch — invented testimonials on a B2B site are a trust and legal liability.