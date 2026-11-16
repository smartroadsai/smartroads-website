// Click tracking for Umami (page views are tracked by Umami's own script).
// One delegated listener, because the page markup is rendered at runtime by support.js.
document.addEventListener('click', function (e) {
  if (!window.umami) return;
  var el = e.target.closest('a[href], button[aria-pressed]');
  if (!el) return;
  if (el.tagName === 'BUTTON') {
    umami.track('Language', { lang: el.getAttribute('aria-label') });
    return;
  }
  var href = el.getAttribute('href');
  var url = new URL(href, location.href);
  var label = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
  if (url.protocol === 'mailto:') {
    umami.track('Email click', { subject: url.searchParams.get('subject') || '', label: label });
  } else if (/\.pdf$/i.test(url.pathname)) {
    umami.track('PDF download', { file: el.getAttribute('download') || url.pathname, label: label });
  } else if (url.host !== location.host) {
    umami.track('Outbound link', { url: url.href, label: label });
  }
}, true);
