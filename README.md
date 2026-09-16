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

### retrohof.co.uk (SmarterASP.NET, IIS) — the live host

Published with **Web Deploy** (`msdeploy`), using the MSDeploy entry from the
hosting publish profile.

```bash
node tools/build.mjs
node tools/deploy.mjs --whatif    # show what would change, change nothing
node tools/deploy.mjs             # publish (adds and updates only)
node tools/deploy.mjs --clean     # also delete remote files not in the build
```

The password is read from `RETROHOF_WEBDEPLOY_PASSWORD`. Set it for the
terminal session only — do not put it in a file, and do not commit it:

```bash
export RETROHOF_WEBDEPLOY_PASSWORD='…'        # Git Bash
```
```powershell
$env:RETROHOF_WEBDEPLOY_PASSWORD = '…'        # PowerShell
```

`msdeploy` cannot take a password on stdin, so it goes in as a provider
setting — briefly visible in this machine's own process list while the command
runs, exactly as a Visual Studio publish would be. It is never written to
disk, never logged, and is redacted from error output.

Connection details are hard-coded at the top of `tools/deploy.mjs`, taken from
the publish profile: endpoint
`https://win6046.site4now.net:8172/msdeploy.axd?site=boner28-003-site5`,
site `boner28-003-site5`, user `boner28-003`. `-allowUntrusted` is set because
shared-hosting certificates rarely match the hostname.

**How the payload is built.** The script first copies the publishable files
into `.deploy/` (gitignored) and syncs *that*, so `src/`, `tools/`, `.claude/`,
`.git/`, `README.md` and `package.json` cannot reach the server even by
accident. Run any command above and inspect `.deploy/` — it is exactly what
would be published, and it is staged before the password is even checked.

**Deleting stale files.** The default is add/update only. The server still
holds the previous site (the old Canvas template: `canvas/`, `demos/`,
`images/`, its own `style.css`), which will sit there unused. `--clean` removes
anything not in the current build — run `--whatif --clean` first and read the
list before committing to it.

**`web.config` matters on this host.** IIS will not serve a file type it has
no MIME mapping for, and `.webmanifest` is not mapped by default — without it
the site manifest 404s. It also wires up the custom 404 page, caching headers
and compression. It is generated from `src/web.config`; edit that, not the
copy at the root.

**Canonical redirects are shipped disabled.** The pages carry
`https://www.retrohof.co.uk/...` canonicals, but the host answers on four URL
variants. `src/web.config` contains rewrite rules to force https and www —
commented out, because they need the IIS URL Rewrite module and a missing
module turns a `<rewrite>` section into a site-wide HTTP 500. Uncomment,
upload, and load the site; if you get a 500, re-comment and it recovers
immediately.

### Cloudflare Pages — staging preview, not production

Used to review changes before they go live on retrohof.co.uk. Do **not** point
the retrohof.co.uk domain at this — it stays on IIS until the client signs
off on a change, at which point it is published there with
`npm run deploy` (above), not by moving DNS.

Connect the GitHub repo once in the Cloudflare dashboard ("Workers & Pages" →
Create → Pages → Import an existing Git repository) with these settings:

| Setting | Value |
|---|---|
| Framework preset | **None** |
| Build command | `npm run build:cloudflare` |
| Build output directory | `dist` |
| Root directory | `/` |

Nothing to upload afterwards — Cloudflare clones and rebuilds on every push to
`main`. Node is available on the build image and the build has no
dependencies, so there is no `npm ci` step to configure.

**Why a build step at all, when the HTML is already committed?** The build
output lives in the repo root alongside `src/` and `tools/`. Publishing the
root would put the sources and the IIS `web.config` on the public site.
`tools/stage.mjs` copies only the site into `dist/`, with the host-specific
config file for the target — `_headers` for Cloudflare, `web.config` for IIS,
`.nojekyll` for GitHub Pages — and drops the other two, so neither host serves
the other's config as a public download.

`src/_headers` carries the caching and security headers, and is the Cloudflare
counterpart of `src/web.config`. Both are generated into the root by the build.

**Trailing slashes line up.** Cloudflare redirects `/about/index.html` to
`/about/`, preserving the trailing slash — which is exactly the canonical form
this site emits, so no `_redirects` rules are needed for it.

**No base path to set.** Every link is relative (`./about/` from the root,
`../../assets/…` from a service page), so the same build works from a subpath
host and a root host without reconfiguration. The classic Cloudflare migration
bug — a stale subpath `base` leaving `<script type="module">` pointing at a
path that the SPA fallback answers with 200 `text/html` — cannot happen here:
there are no module scripts and no bundler base setting.

### GitHub Pages

Settings → Pages → deploy from `main`, folder `/ (root)`. A `.nojekyll` file is
generated so nothing is filtered out. Currently live at
<https://boner28rd.github.io/retrohof/> as a preview. This one *does* serve
from a subpath, which the relative links handle.

Set the real domain in `site.baseUrl` (`src/data/site.mjs`) before building —
it drives the canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`.

### URL structure

Pages are published as a directory holding an `index.html`:

| Page | File | Served at |
|---|---|---|
| Home | `index.html` | `/` |
| About | `about/index.html` | `/about/` |
| A service | `services/roofing-guttering/index.html` | `/services/roofing-guttering/` |
| 404 | `404.html` | (IIS `httpErrors` target) |

This is deliberate, and worth not "simplifying" later. The previous site
served extensionless URLs — `/about` returned 200 and `/about.html` returned
404 — so those are what search engines have indexed. With the directory form,
`/about/` is served by the default document and IIS issues its own 301 from
`/about` to `/about/`, so every existing link keeps working **without needing
the URL Rewrite module**. Flattening these back to `about.html` would 404
every indexed URL.

Canonical tags, the sitemap and schema.org URLs all carry the trailing slash
to match (`https://retrohof.co.uk/about/`).

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
