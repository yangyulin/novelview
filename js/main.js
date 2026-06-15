/* ============================================================
   Novel View — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky nav background on scroll ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---- Portfolio filtering ---- */
  var filters = document.querySelectorAll('.filter');
  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery__item'));
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var cat = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        var show = cat === 'all' || item.getAttribute('data-cat') === cat;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---- Lightbox ---- */
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var current = 0;

  function visibleItems() {
    return items.filter(function (i) { return !i.classList.contains('is-hidden'); });
  }
  function openAt(index) {
    var vis = visibleItems();
    if (!vis.length) return;
    current = (index + vis.length) % vis.length;
    var img = vis[current].querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      openAt(visibleItems().indexOf(item));
    });
  });
  lbClose.addEventListener('click', close);
  lbNext.addEventListener('click', function () { openAt(current + 1); });
  lbPrev.addEventListener('click', function () { openAt(current - 1); });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') openAt(current + 1);
    if (e.key === 'ArrowLeft') openAt(current - 1);
  });

  /* ---- Reveal-on-scroll ---- */
  var revealEls = document.querySelectorAll(
    '.section__head, .gallery__item, .card, .stat, .quote, .about__media, .about__body'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
