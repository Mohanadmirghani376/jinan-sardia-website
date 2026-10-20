/* ==========================================================================
   Jinan Sardia International Supply Chain — Site Behaviour
   Progressive enhancement only: every page works without this file.
   Depends on window.SARDIA_I18N (assets/js/i18n.js).
   ========================================================================== */

(function () {
  'use strict';

  var i18n = window.SARDIA_I18N;
  var doc = document;

  function on(el, evt, handler, opts) {
    if (el) el.addEventListener(evt, handler, opts);
  }

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }

  /* ----------------------------------------------------------------------
     1. Mobile navigation
     ---------------------------------------------------------------------- */
  function initNav() {
    var toggle = $('.nav-toggle');
    var nav = $('#primary-nav');
    var overlay = $('.nav-overlay');
    if (!toggle || !nav) return;

    function openNav() {
      nav.classList.add('open');
      if (overlay) overlay.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
      doc.body.style.overflow = 'hidden';
    }

    function closeNav() {
      nav.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
      doc.body.style.overflow = '';
      $$('.has-dropdown.open').forEach(function (d) {
        d.classList.remove('open');
        var b = $('.dropdown-toggle', d);
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }

    on(toggle, 'click', function () {
      if (nav.classList.contains('open')) closeNav();
      else openNav();
    });

    on(overlay, 'click', closeNav);

    on(doc, 'keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    // Close the panel when a real link is followed (not a dropdown toggle).
    $$('a', nav).forEach(function (a) {
      on(a, 'click', function () {
        if (window.matchMedia('(max-width: 980px)').matches) closeNav();
      });
    });

    // Reset inline state when resizing back to desktop.
    on(window, 'resize', function () {
      if (!window.matchMedia('(max-width: 980px)').matches) closeNav();
    });
  }

  /* ----------------------------------------------------------------------
     2. Dropdowns — click/tap support (hover already works via CSS)
     ---------------------------------------------------------------------- */
  function initDropdowns() {
    $$('.has-dropdown > .dropdown-toggle').forEach(function (btn) {
      var parent = btn.parentElement;

      on(btn, 'click', function (e) {
        // On desktop hover handles this; only intercept on touch/narrow.
        if (!window.matchMedia('(max-width: 980px)').matches &&
            window.matchMedia('(hover: hover)').matches) return;

        e.preventDefault();
        e.stopPropagation();
        var isOpen = parent.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });

    on(doc, 'click', function (e) {
      $$('.has-dropdown.open').forEach(function (d) {
        if (!d.contains(e.target)) {
          d.classList.remove('open');
          var b = $('.dropdown-toggle', d);
          if (b) b.setAttribute('aria-expanded', 'false');
        }
      });
    });

    on(doc, 'keydown', function (e) {
      if (e.key !== 'Escape') return;
      $$('.has-dropdown.open').forEach(function (d) {
        d.classList.remove('open');
        var b = $('.dropdown-toggle', d);
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------------------
     3. Language switcher
     ---------------------------------------------------------------------- */
  function initLangSwitch() {
    $$('.lang-btn').forEach(function (btn) {
      on(btn, 'click', function () {
        var lang = btn.getAttribute('data-lang');
        if (!lang || !i18n || lang === i18n.current) return;
        i18n.apply(lang);

        // Keep focus sensible after a re-render.
        var next = $('.lang-btn[data-lang="' + lang + '"]');
        if (next) next.focus();
      });
    });
  }

  /* ----------------------------------------------------------------------
     4. Sticky header shadow
     ---------------------------------------------------------------------- */
  function initHeader() {
    var header = $('.header');
    if (!header) return;

    var ticking = false;
    function update() {
      header.classList.toggle('scrolled', window.scrollY > 10);
      ticking = false;
    }

    on(window, 'scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  /* ----------------------------------------------------------------------
     5. Accordion (FAQ)
     ---------------------------------------------------------------------- */
  function initAccordions() {
    $$('.accordion').forEach(function (acc) {
      var items = $$('.accordion-item', acc);

      items.forEach(function (item) {
        var btn = $('.accordion-btn', item);
        var panel = $('.accordion-panel', item);
        if (!btn || !panel) return;

        on(btn, 'click', function () {
          var isOpen = item.classList.contains('open');

          // Close siblings within the same accordion.
          items.forEach(function (other) {
            if (other === item) return;
            other.classList.remove('open');
            var op = $('.accordion-panel', other);
            var ob = $('.accordion-btn', other);
            if (op) op.style.maxHeight = '';
            if (ob) ob.setAttribute('aria-expanded', 'false');
          });

          if (isOpen) {
            item.classList.remove('open');
            panel.style.maxHeight = '';
            btn.setAttribute('aria-expanded', 'false');
          } else {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
        });
      });

      // Keep the open panel correctly sized if the text reflows on resize.
      on(window, 'resize', function () {
        var open = $('.accordion-item.open', acc);
        if (!open) return;
        var panel = $('.accordion-panel', open);
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    });
  }

  /* ----------------------------------------------------------------------
     6. Scroll reveal
     ---------------------------------------------------------------------- */
  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    var showAll = function () {
      items.forEach(function (el) { el.classList.add('in'); });
      document.documentElement.classList.remove('js-reveal');
    };

    // No observer support, or the visitor asked for reduced motion: skip the
    // animation entirely rather than leaving content stuck at opacity 0.
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showAll();
      return;
    }

    document.documentElement.classList.add('js-reveal');

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    items.forEach(function (el) { io.observe(el); });

    // Safety net: if the observer has not resolved everything shortly after
    // load, reveal the rest so no copy can stay invisible.
    window.setTimeout(function () {
      items.forEach(function (el) {
        if (!el.classList.contains('in')) el.classList.add('in');
      });
    }, 2500);
  }

  /* ----------------------------------------------------------------------
     7. Counter animation for the stats band
     ---------------------------------------------------------------------- */
  function initCounters() {
    var nodes = $$('[data-count]');
    if (!nodes.length || !('IntersectionObserver' in window)) return;

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function format(value, decimals) {
      return value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);

        var target = parseFloat(el.getAttribute('data-count'));
        var decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
        var suffix = el.getAttribute('data-suffix') || '';

        // Flag as counted so a later language switch can rewrite the text.
        el.setAttribute('data-counted', 'true');

        if (reduce || isNaN(target)) {
          el.textContent = format(target, decimals) + suffix;
          return;
        }

        var duration = 1600;
        var start = null;

        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / duration, 1);
          // easeOutCubic
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = format(target * eased, decimals) + suffix;
          if (p < 1) window.requestAnimationFrame(step);
        }

        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });

    nodes.forEach(function (el) { io.observe(el); });
  }

  /* ----------------------------------------------------------------------
     8. Inquiry form
     ----------------------------------------------------------------------
 */
  function initForm() {
    var form = $('#inquiry-form');
    if (!form) return;

    var status = $('.form-status', form);
    var submit = $('button[type="submit"]', form);
    var originalLabel = submit ? submit.textContent : '';

    on(form, 'submit', function (e) {
      e.preventDefault();

      // Let native validation run first.
      if (!form.checkValidity()) {
        if (form.reportValidity) form.reportValidity();
        return;
      }

      if (submit) {
        submit.disabled = true;
        submit.setAttribute('data-i18n', 'common.submitting');
        submit.textContent = i18n && i18n.current === 'ar' ? 'جارٍ الإرسال' : 'Sending…';
      }

      var payload = {};
      new FormData(form).forEach(function (value, key) {
        payload[key] = value;
      });

      /* ------------------------------------------------------------------
         BACKEND HOOK
         ------------------------------------------------------------------
         Point this at your endpoint, or delete the fetch and handle the
         POST yourself. If no BACKEND_URL is configured the form runs in
         demo mode so you can test the success state.
         ------------------------------------------------------------------ */
      var BACKEND_URL = window.SARDIA_FORM_ENDPOINT || '';

      function showSuccess(ref) {
        var box = $('#form-success');
        if (box) {
          var refEl = $('#form-ref', box);
          if (refEl) refEl.textContent = ref;
          box.hidden = false;
          form.hidden = true;
          box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (status) {
          status.className = 'form-status show success';
          status.textContent = i18n && i18n.current === 'ar'
            ? 'تم إرسال طلبك. سنرد عليك خلال 24 ساعة عمل.'
            : 'Thank you. Your request has been sent — we reply within one business day.';
        }
      }

      function showError(message) {
        if (submit) {
          submit.disabled = false;
          submit.textContent = originalLabel;
        }
        if (status) {
          status.className = 'form-status show error';
          status.textContent = message;
        }
      }

      if (!BACKEND_URL) {
        // Demo mode — no backend wired up yet.
        window.setTimeout(function () {
          showSuccess('SAR-' + Date.now().toString().slice(-6));
        }, 700);
        return;
      }

      fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed: ' + res.status);
          return res.json().catch(function () { return {}; });
        })
        .then(function (data) {
          showSuccess(data.reference || ('SAR-' + Date.now().toString().slice(-6)));
        })
        .catch(function () {
          showError(i18n && i18n.current === 'ar'
            ? 'تعذر الإرسال. يرجى المحاولة مجدداً أو مراسلتنا مباشرة على البريد الإلكتروني.'
            : 'Something went wrong. Please try again, or email us directly.');
        });
    });

    // Reset button on the success panel.
    var again = $('#form-reset');
    on(again, 'click', function () {
      var box = $('#form-success');
      if (box) box.hidden = true;
      form.reset();
      form.hidden = false;
      if (submit) {
        submit.disabled = false;
        submit.textContent = originalLabel;
      }
      if (status) {
        status.className = 'form-status';
        status.textContent = '';
      }
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Preselect a sector when arriving from a sector page (?sector=trucks).
    var sector = $('#f-sector');
    if (sector) {
      var requested = new URLSearchParams(window.location.search).get('sector');
      if (requested) {
        var match = $$('option', sector).filter(function (opt) {
          return opt.value === requested;
        })[0];
        if (match) sector.value = requested;
      }
    }
  }

  /* ----------------------------------------------------------------------
     9. Footer year
     ---------------------------------------------------------------------- */
  function initYear() {
    $$('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ----------------------------------------------------------------------
     10. Re-measure open accordion after a language switch
     ---------------------------------------------------------------------- */
  function initLangResize() {
    on(doc, 'langchange', function () {
      window.setTimeout(function () {
        $$('.accordion-item.open').forEach(function (item) {
          var panel = $('.accordion-panel', item);
          if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
        });
      }, 60);
    });
  }

  /* ----------------------------------------------------------------------
     Boot
     ---------------------------------------------------------------------- */
  function init() {
    initNav();
    initDropdowns();
    initLangSwitch();
    initHeader();
    initAccordions();
    initReveal();
    initCounters();
    initForm();
    initYear();
    initLangResize();
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();