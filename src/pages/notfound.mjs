import { site } from '../data/site.mjs';
import { services } from '../data/services.mjs';
import { icon } from '../icons.mjs';
import { esc, rel } from '../layout.mjs';

const d = 0;

export default {
  url: '/404',
  file: '404.html',
  depth: d,
  noindex: true,
  title: `Page not found | ${site.legalName}`,
  description: 'The page you were looking for could not be found.',
  body: `
<section class="err">
  <div class="wrap">
    <p class="err__code">404</p>
    <h1>That page has moved on</h1>
    <p class="lead" style="max-width:34rem;margin-inline:auto">The link may be out of date, or the page may have been renamed. Everything below will get you back on track.</p>
    <div class="err__links">
      <a class="btn btn--primary btn--lg" href="${rel(d, '/')}">Back to the home page</a>
      <a class="btn btn--ghost btn--lg" href="${rel(d, '/contact')}">Contact us</a>
      <a class="btn btn--ghost btn--lg" href="${site.phone.href}">${icon('phone', { size: 18 })}${site.phone.display}</a>
    </div>
  </div>
</section>

<section class="sec sec--tint sec--tight">
  <div class="wrap">
    <h2 class="text-center" style="font-size:1.35rem">Looking for a service?</h2>
    <ul class="areas" style="margin-top:1.5rem">
      ${services
        .map(
          (s) =>
            `<li>${icon(s.icon, { size: 15 })}<a href="${rel(d, `/services/${s.slug}`)}">${esc(s.short)}</a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`,
};
