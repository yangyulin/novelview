# Novel View

Marketing website for **Novel View** — professional event photography
(weddings, corporate events, parties, concerts).

Static single-page site (plain HTML/CSS/JS, no build step) hosted on GitHub Pages.
**Bilingual** — English / 简体中文, switchable via the toggle in the top-left.

**Live:** https://yangyulin.github.io/novelview/

## Structure

```
novelview/
├── index.html          # the whole single-page site (text marked with data-i18n)
├── css/style.css       # styles + responsive + CN typography
├── js/i18n.js          # EN/中文 dictionary + language switcher
├── js/main.js          # nav, gallery filter, lightbox, scroll reveal
└── images/
    ├── hero.jpg                 # hero background (bridge at dusk)
    ├── about/photographer.jpg   # about-section image
    └── gallery/*.jpg            # portfolio photos
```

## Language

The site is fully bilingual. The **EN / 中文** toggle sits in the top-left of the
nav; the choice is remembered (localStorage) and first-time visitors get their
browser's language. To edit copy, change **both** the `en` and `zh` strings for a
key in `js/i18n.js` (keys must stay matched — there are 75 of each).

## Customize

1. **Photos** — add more shots to `images/gallery/` and add a matching
   `<figure class="gallery__item">` tile in `index.html`. Compress first
   (e.g. [squoosh.app](https://squoosh.app)) — aim < 300 KB each.
2. **Brand / copy** — edit text in `index.html` (tagline, about, testimonials).
3. **Pricing** — edit the three `.card` blocks in the Services section.
4. **Promo banner** — edit the `.promo` block (the gold bar) for current offers.
5. **Contact form** — sign up free at [Formspree](https://formspree.io), then
   replace `your-id-here` in the `<form action=...>`. The `mailto:` link is a
   working fallback until then. Update the email/social links in the footer too.

## Deploy (GitHub Pages)

1. Commit and push to `main`.
2. Repo **Settings → Pages → Source** → branch `main`, folder `/ (root)` → Save.
3. Live at https://yangyulin.github.io/novelview/ in ~1 minute.

> This is a *project site* served from a subpath (`/novelview/`), so all asset
> paths in the HTML are **relative** (`./css/…`, `./images/…`). Keep them relative.
