# RetroHof — retrohof.co.uk

Static marketing site for **RetroHof Ltd**, a multi-trade property maintenance
company based in Hersham, Surrey, working across southern England — north to
Welwyn, east into Kent, south through Sussex, and west through Hampshire and
Dorset as far as Devon and Plymouth.

The published site is plain HTML, CSS and a single ~7 KB JavaScript file. There
is no framework, no bundler and no runtime dependency — any static host will
serve it as-is. The HTML is *generated* from the content in `src/`, and the
generated files are committed, so the host needs no build step.

---

## Before this goes live

These are deliberate gaps, not oversights. Work through them first.

| # | What | Where |
|---|------|-------|
| 1 | **Project case studies are placeholders.** They describe the *kind* of work RetroHof does but are not records of real jobs. Replace each with a real project — real scope, duration and photographs — or remove `/projects` from the nav until you have some. | `src/data/projects.mjs` |
| 2 | **Testimonials are placeholders.** Replace with real, attributable client feedback (with permission), or delete the array and the section disappears. Do not invent names. | `src/data/content.mjs` |
| 3 | **Social links were removed.** The old site linked to `facebook.com/windsorshortstays`, `instagram.com/sentinel.living.sa` and other unrelated brands. Add RetroHof's own profiles to `site.social` or leave the array empty. | `src/data/site.mjs` |
| 4 | **Wire up the contact form.** Set `site.formEndpoint` to a Formspree / Basin / Netlify Forms endpoint. Until then the form validates client-side and hands off to the visitor's email client. | `src/data/site.mjs` |
| 5 | **Have the legal pages reviewed.** The terms, privacy policy and acceptable use policy are an accurate, sensible starting point for a UK maintenance company — they are not legally vetted. | `src/pages/legal.mjs` |
| 6 | **Add the company number** if RetroHof Ltd is registered; it then appears in the footer. | `src/data/site.mjs` |
| 7 | **Verify the claims.** Figures in the stat band ("1,200+ jobs a year") and the credentials list (Gas Safe, registered electricians, waste carrier licence, DBS) must be true before publication. | `src/data/content.mjs` |
| 8 | **Confirm the coverage tiers.** `coverage` lists four regions ordered by distance, with response expectations that differ between them. All four regions now list towns (108 in total). Outside the Surrey home patch these are the principal towns of the counties you named, **not a confirmed attendance list** — strike any RetroHof does not actually serve. Named towns help local search, but an unserved town on the list is worse than a short list. | `src/data/site.mjs` |

**Settled — no longer in question:** the phone number is **01932 231 122**
(`tel:+441932231122`). The previous site was inconsistent about this, showing
`01932` in the header and linking `01372` in the footer; this one is not.

`node tools/build.mjs` prints a warning listing any placeholder content still
present.

---

## Running it

```bash
node tools/build.mjs     # regenerate the HTML
node tools/serve.mjs     # preview at http://localhost:5510
```

Node 18+ (uses built-in `fetch` in the image script). No `npm install` needed.

```bash
npm run build            # same as tools/build.mjs
npm start                # build, then serve
npm run images           # re-download stock photography
```

---

## How it is put together

```
src/
  data/
    site.mjs         business details — phone, email, hours, areas, nav, form endpoint
    services.mjs     the ten services; each one generates a card and a detail page
    projects.mjs     project case studies (PLACEHOLDER — see above)
    content.mjs      FAQs, client sectors, process steps, credentials, testimonials
  pages/             one module per page (or per group of pages)
  layout.mjs         <head>, header, footer, schema.org markup
  components.mjs     shared blocks: banners, cards, CTA bands, FAQ lists
  icons.mjs          inline SVG icon set

assets/
  css/style.css      the whole stylesheet
  js/site.js         nav, hero slider, project filter, form validation
  img/               logos and photography

tools/
  build.mjs          renders src/ -> HTML in the repo root
  serve.mjs          zero-dependency static server for local preview
  fetch-images.mjs   downloads the stock photography manifest
```

**Edit content in `src/`, not in the generated `.html` files** — the build
deletes and rewrites every HTML file in the root and in `services/`.

### Adding a service

Append an entry to `services` in `src/data/services.mjs` and rebuild. It
automatically appears in the header dropdown, the home page grid, the services
hub, the footer, the contact form's checkboxes, the sitemap and the schema.org
`makesOffer` list, and gets its own page at `/services/<slug>`.

### Adding a project

Append to `projects` in `src/data/projects.mjs`, omit `placeholder: true`, and
add the photograph under `assets/img/projects/`. Categories come from
`projectCategories` in the same file.

---

## Design

| | |
|---|---|
| Brand red | `#D22630` — sampled from the logo artwork |
| Accent | `#DB3C23` — the theme colour carried over from the previous site |
| Ink | `#14181C` / `#2B3239` |
| Display type | Archivo |
| Body type | Inter |

The logo files in `assets/img/logo/` are the originals from the previous site.
Colours and logos were kept deliberately; everything else is new.

---

## Deployment

The repo root *is* the site, so any of these work:

- **GitHub Pages** — Settings → Pages → deploy from `main`, folder `/ (root)`.
  A `.nojekyll` file is generated so nothing is filtered out.
- **Netlify / Cloudflare Pages / Vercel** — publish directory `.`, no build
  command (or `node tools/build.mjs` if you would rather it rebuilt on push).
- **Traditional hosting** — upload the repo contents minus `src/`, `tools/` and
  `.claude/`.

Set the real domain in `site.baseUrl` (`src/data/site.mjs`) before building —
it drives the canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`.

### Pretty URLs

Pages are generated as `/services.html`, `/about.html` and so on, and links
point at those files, so the site works from the filesystem and on any host.
If you would prefer extensionless URLs, add a rewrite rule at the host
(`/$1` → `/$1.html`); the local preview server already resolves both.

---

## Build checks

`tools/build.mjs` fails the build (exit code 1) if it finds a broken internal
link or a referenced image that is not on disk, and warns about placeholder
content. Worth running in CI if you add one.

---

## Photography

Stock photography is from [Unsplash](https://unsplash.com) and
[Pexels](https://pexels.com); both licences permit commercial use without
attribution. The exact sources are listed in `tools/fetch-images.mjs`, so the
set can be regenerated or swapped out. Replace them with photographs of real
RetroHof work as those become available — it is the single biggest improvement
left available to this site.
