/* RetroHof — progressive enhancement only. Every page works without this. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------- mobile nav -- */
  (function nav() {
    var burger = document.querySelector('.burger');
    var navEl = document.getElementById('primary-nav');
    if (!burger || !navEl) return;

    // Duplicate the header CTAs into the drawer so they stay reachable on mobile.
    if (!navEl.querySelector('.nav__mobile-cta')) {
      var cta = document.querySelector('.masthead__cta');
      if (cta) {
        var clone = document.createElement('div');
        clone.className = 'nav__mobile-cta';
        clone.innerHTML = cta.innerHTML;
        clone.querySelectorAll('.btn').forEach(function (b) { b.classList.add('btn--block'); });
        navEl.appendChild(clone);
      }
    }

    function setOpen(open) {
      document.body.classList.toggle('nav-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('click', function (e) {
      if (!document.body.classList.contains('nav-open')) return;
      if (navEl.contains(e.target) || burger.contains(e.target)) return;
      setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        setOpen(false);
        burger.focus();
      }
    });

    // Accordion behaviour for the Services sub-menu on small screens.
    var subParent = navEl.querySelector('.nav__item--has-sub');
    if (subParent) {
      var trigger = subParent.querySelector('.nav__link');
      trigger.addEventListener('click', function (e) {
        if (window.matchMedia('(min-width: 961px)').matches) return;
        e.preventDefault();
        subParent.classList.toggle('is-open');
      });
    }

    var mq = window.matchMedia('(min-width: 961px)');
    (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (ev) {
      if ((ev.matches !== undefined ? ev.matches : mq.matches)) setOpen(false);
    });
  })();

  /* ---------------------------------------------------- sticky shadow -- */
  (function stuck() {
    var head = document.getElementById('masthead');
    if (!head) return;
    var onScroll = function () {
      head.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  /* ------------------------------------------------------ hero slider -- */
  (function hero() {
    var root = document.querySelector('.hero__slides');
    if (!root) return;
    var slides = Array.prototype.slice.call(root.querySelectorAll('.hero__slide'));
    var copy = Array.prototype.slice.call(root.querySelectorAll('.hero__copy'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.hero__dot'));
    if (slides.length < 2) return;

    var i = 0, timer = null, DELAY = 7000;

    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
      copy.forEach(function (c, k) { c.classList.toggle('is-active', k === i); });
      dots.forEach(function (d, k) { d.setAttribute('aria-selected', String(k === i)); });
    }
    function start() { if (!reduceMotion) timer = setInterval(function () { show(i + 1); }, DELAY); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    dots.forEach(function (d, k) {
      d.addEventListener('click', function () { show(k); restart(); });
    });

    root.closest('.hero').addEventListener('mouseenter', stop);
    root.closest('.hero').addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else restart();
    });

    show(0);
    start();
  })();

  /* --------------------------------------------------- project filter -- */
  (function projects() {
    var grid = document.getElementById('project-grid');
    if (!grid) return;
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.filter'));
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.proj'));
    var note = document.getElementById('filter-empty');

    function apply(cat) {
      var shown = 0;
      cards.forEach(function (c) {
        var match = cat === 'all' || c.dataset.category === cat;
        c.hidden = !match;
        if (match) shown++;
      });
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.filter === cat)); });
      if (note) note.hidden = shown > 0;
      try { history.replaceState(null, '', cat === 'all' ? location.pathname : '#' + cat); } catch (e) {}
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.filter); });
    });

    var hash = (location.hash || '').replace('#', '');
    if (hash && buttons.some(function (b) { return b.dataset.filter === hash; })) apply(hash);

    // Expand / collapse the detail panel on each card.
    grid.addEventListener('click', function (e) {
      var btn = e.target.closest('.proj__toggle');
      if (!btn) return;
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
      btn.querySelector('.proj__toggle-label').textContent = open ? 'View details' : 'Hide details';
    });
  })();

  /* --------------------------------------------------------- reveal on -- */
  (function reveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  })();

  /* ----------------------------------------------------- contact form -- */
  (function form() {
    var f = document.getElementById('enquiry-form');
    if (!f) return;
    var status = document.getElementById('form-status');
    var endpoint = f.dataset.endpoint || '';

    function fieldError(input, msg) {
      var box = document.getElementById(input.id + '-error');
      if (box) box.textContent = msg || '';
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    }

    function validate() {
      var firstBad = null;
      Array.prototype.slice.call(f.querySelectorAll('input, select, textarea')).forEach(function (el) {
        if (el.type === 'hidden' || el.classList.contains('hp-field')) return;
        var msg = '';
        if (el.required && !el.value.trim()) msg = 'This field is required.';
        else if (el.required && el.type === 'checkbox' && !el.checked) msg = 'Please tick to continue.';
        else if (el.type === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value)) msg = 'Enter a valid email address.';
        else if (el.type === 'tel' && el.value && el.value.replace(/[^\d]/g, '').length < 9) msg = 'Enter a valid phone number.';
        fieldError(el, msg);
        if (msg && !firstBad) firstBad = el;
      });
      var consent = f.querySelector('#consent');
      if (consent && !consent.checked) {
        fieldError(consent, 'Please confirm you are happy for us to reply.');
        if (!firstBad) firstBad = consent;
      } else if (consent) {
        fieldError(consent, '');
      }
      return firstBad;
    }

    f.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') validate();
    });

    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = validate();
      if (bad) {
        bad.focus({ preventScroll: true });
        bad.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
        return;
      }
      if (f.querySelector('.hp-field') && f.querySelector('.hp-field').value) return; // bot

      var btn = f.querySelector('button[type="submit"]');
      var label = btn.textContent;
      status.hidden = true;

      if (!endpoint) {
        // No back end configured — hand off to the visitor's email client.
        var d = new FormData(f);
        var lines = [];
        d.forEach(function (v, k) {
          if (k === 'consent' || k === '_hp') return;
          lines.push(k.replace(/^\w/, function (c) { return c.toUpperCase(); }) + ': ' + v);
        });
        var href = 'mailto:' + f.dataset.email +
          '?subject=' + encodeURIComponent('Website enquiry — ' + (d.get('subject') || 'General')) +
          '&body=' + encodeURIComponent(lines.join('\n'));
        window.location.href = href;
        status.className = 'form-status form-status--ok';
        status.textContent = 'Opening your email app with the message ready to send. If nothing happens, email ' + f.dataset.email + ' directly.';
        status.hidden = false;
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending…';
      fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('bad response');
          f.reset();
          status.className = 'form-status form-status--ok';
          status.textContent = 'Thank you — your enquiry has been sent. We aim to reply within one working day.';
        })
        .catch(function () {
          status.className = 'form-status form-status--err';
          status.textContent = 'Sorry, that did not send. Please call ' + (f.dataset.phone || 'us') + ' or email ' + f.dataset.email + '.';
        })
        .then(function () {
          status.hidden = false;
          btn.disabled = false;
          btn.textContent = label;
          status.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    });

    // Pre-select a service when arriving from a service page (?service=slug).
    var qs = new URLSearchParams(location.search);
    var pre = qs.get('service');
    if (pre) {
      var box = f.querySelector('input[type="checkbox"][value="' + CSS.escape(pre) + '"]');
      if (box) box.checked = true;
    }
  })();

  /* --------------------------------------------------------- year stub -- */
  Array.prototype.slice.call(document.querySelectorAll('[data-year]')).forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
