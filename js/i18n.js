/* ============================================================
   Novel View — bilingual (English / 简体中文) translations
   Switch language via the EN / 中文 toggle in the top-left nav.
   ============================================================ */
(function () {
  'use strict';

  var I18N = {
    en: {
      'nav.portfolio': 'Portfolio',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.reviews': 'Reviews',
      'nav.book': 'Book a Shoot',

      'hero.eyebrow': 'Professional Event Photography',
      'hero.title': 'Every moment,<br />a novel view.',
      'hero.sub': 'Weddings · Corporate · Parties · Concerts — captured with a cinematic eye and delivered fast.',
      'hero.book': 'Book Your Event',
      'hero.view': 'View Portfolio',

      'promo.text': '🎉 <strong>Summer Special:</strong> Book any wedding package before Aug 31 and get a complimentary engagement session. <a href="#contact">Claim offer →</a>',

      'portfolio.eyebrow': 'Selected Work',
      'portfolio.title': 'Portfolio',
      'portfolio.lead': "A look at events we've had the privilege to capture.",
      'filter.all': 'All',
      'filter.wedding': 'Weddings',
      'filter.corporate': 'Corporate',
      'filter.party': 'Parties',
      'filter.concert': 'Concerts',

      'services.eyebrow': 'Packages',
      'services.title': 'Services & Pricing',
      'services.lead': 'Transparent packages. Custom quotes available for any event.',
      'unit.event': '/event',
      'btn.inquire': 'Inquire',
      'btn.booknow': 'Book Now',
      'card.badge': 'Most Popular',
      'card.essential.name': 'Essential',
      'card.essential.f1': 'Up to 3 hours coverage',
      'card.essential.f2': '1 photographer',
      'card.essential.f3': '100+ edited photos',
      'card.essential.f4': 'Online gallery delivery',
      'card.essential.f5': '48-hour preview',
      'card.signature.name': 'Signature',
      'card.signature.f1': 'Up to 6 hours coverage',
      'card.signature.f2': '2 photographers',
      'card.signature.f3': '300+ edited photos',
      'card.signature.f4': 'Highlight video reel',
      'card.signature.f5': 'Printed photo album',
      'card.premium.name': 'Premium',
      'card.premium.f1': 'Full-day coverage',
      'card.premium.f2': '2 photographers + assistant',
      'card.premium.f3': '600+ edited photos',
      'card.premium.f4': 'Cinematic film & drone',
      'card.premium.f5': 'Premium album + prints',

      'stat.events': 'Events Captured',
      'stat.years': 'Years Experience',
      'stat.photos': 'Photos Delivered',
      'stat.rating': 'Average Rating',

      'about.eyebrow': 'About',
      'about.title': 'Behind the Lens',
      'about.p1': 'Novel View is built on a simple belief: every event tells a story worth remembering. With nearly a decade behind the camera, we specialize in capturing the candid, fleeting moments that make your day unforgettable.',
      'about.p2': 'From intimate weddings to high-energy corporate launches, we bring a cinematic, documentary approach — unobtrusive on the day, breathtaking in the final gallery.',
      'about.pt1': 'Cinematic, true-to-life editing',
      'about.pt2': 'Fast 48-hour preview turnaround',
      'about.pt3': 'Fully insured & backup-equipped',
      'about.pt4': 'Available for travel worldwide',

      'testimonials.eyebrow': 'Kind Words',
      'testimonials.title': 'What Clients Say',
      'quote1.text': "Absolutely stunning photos. They captured moments we didn't even know happened. Our wedding gallery feels like a film.",
      'quote1.by': '— Sarah & James, Wedding',
      'quote2.text': "Professional, fast, and the quality blew our marketing team away. We've booked them for every event since.",
      'quote2.by': '— Dana K., Corporate Event Lead',
      'quote3.text': 'The concert shots were electric. They know exactly how to work the light and the crowd. Highly recommend.',
      'quote3.by': '— The Midnight Echo, Band',

      'contact.eyebrow': "Let's Work Together",
      'contact.title': 'Book Your Event',
      'contact.lead': "Tell us about your event and we'll get back within 24 hours.",
      'form.name': 'Your name',
      'form.email': 'Email address',
      'form.type': 'Event type (wedding, corporate…)',
      'form.message': 'Tell us about your event…',
      'form.submit': 'Send Inquiry',
      'contact.alt': 'Prefer email?',

      'footer.email': 'Email',
      'footer.copy': '© 2026 Novel View. All rights reserved.'
    },

    zh: {
      'nav.portfolio': '作品集',
      'nav.services': '服务',
      'nav.about': '关于',
      'nav.reviews': '评价',
      'nav.book': '预约拍摄',

      'hero.eyebrow': '专业活动摄影',
      'hero.title': '每个瞬间，<br />都是全新视角。',
      'hero.sub': '婚礼 · 企业 · 派对 · 演唱会 —— 以电影般的视角捕捉，快速交付。',
      'hero.book': '预约您的活动',
      'hero.view': '查看作品',

      'promo.text': '🎉 <strong>夏季特惠：</strong>8 月 31 日前预订任意婚礼套餐，即赠免费订婚拍摄。<a href="#contact">领取优惠 →</a>',

      'portfolio.eyebrow': '精选作品',
      'portfolio.title': '作品集',
      'portfolio.lead': '我们有幸记录过的精彩活动。',
      'filter.all': '全部',
      'filter.wedding': '婚礼',
      'filter.corporate': '企业',
      'filter.party': '派对',
      'filter.concert': '演唱会',

      'services.eyebrow': '套餐',
      'services.title': '服务与价格',
      'services.lead': '透明定价，任何活动均可定制报价。',
      'unit.event': '/场',
      'btn.inquire': '咨询',
      'btn.booknow': '立即预约',
      'card.badge': '最受欢迎',
      'card.essential.name': '基础套餐',
      'card.essential.f1': '最多 3 小时拍摄',
      'card.essential.f2': '1 位摄影师',
      'card.essential.f3': '100+ 张精修照片',
      'card.essential.f4': '在线相册交付',
      'card.essential.f5': '48 小时预览',
      'card.signature.name': '招牌套餐',
      'card.signature.f1': '最多 6 小时拍摄',
      'card.signature.f2': '2 位摄影师',
      'card.signature.f3': '300+ 张精修照片',
      'card.signature.f4': '精彩集锦视频',
      'card.signature.f5': '实体相册',
      'card.premium.name': '尊享套餐',
      'card.premium.f1': '全天拍摄',
      'card.premium.f2': '2 位摄影师 + 助理',
      'card.premium.f3': '600+ 张精修照片',
      'card.premium.f4': '电影短片 & 航拍',
      'card.premium.f5': '高级相册 + 冲印',

      'stat.events': '拍摄活动',
      'stat.years': '年经验',
      'stat.photos': '交付照片',
      'stat.rating': '平均评分',

      'about.eyebrow': '关于',
      'about.title': '镜头背后',
      'about.p1': 'Novel View 源于一个简单的信念：每一场活动都值得被铭记。凭借近十年的拍摄经验，我们擅长捕捉那些自然流露、转瞬即逝的珍贵瞬间，让您的日子难以忘怀。',
      'about.p2': '从温馨的婚礼到充满能量的企业发布会，我们以电影质感、纪实的手法记录现场 —— 拍摄时不打扰，成片却令人惊艳。',
      'about.pt1': '电影质感、真实自然的调色',
      'about.pt2': '48 小时快速预览交付',
      'about.pt3': '全额保险，备用设备齐全',
      'about.pt4': '可全球出行拍摄',

      'testimonials.eyebrow': '客户好评',
      'testimonials.title': '客户评价',
      'quote1.text': '照片美得令人惊叹。他们记录下了许多我们自己都没注意到的瞬间，整本婚礼相册就像一部电影。',
      'quote1.by': '—— Sarah & James，婚礼',
      'quote2.text': '专业、高效，成片质量让我们的市场团队赞不绝口。此后每一场活动我们都请他们拍摄。',
      'quote2.by': '—— Dana K.，企业活动负责人',
      'quote3.text': '演唱会的照片极具张力。他们非常懂得如何运用光线和调动现场氛围，强烈推荐。',
      'quote3.by': '—— The Midnight Echo 乐队',

      'contact.eyebrow': '携手合作',
      'contact.title': '预约您的活动',
      'contact.lead': '告诉我们您的活动详情，我们将在 24 小时内回复。',
      'form.name': '您的姓名',
      'form.email': '电子邮箱',
      'form.type': '活动类型（婚礼、企业……）',
      'form.message': '介绍一下您的活动……',
      'form.submit': '发送咨询',
      'contact.alt': '更喜欢邮件？',

      'footer.email': '邮箱',
      'footer.copy': '© 2026 Novel View 版权所有。'
    }
  };

  function apply(lang) {
    var dict = I18N[lang] || I18N.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-ph')];
      if (v != null) el.setAttribute('placeholder', v);
    });

    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';
    document.body.classList.toggle('lang-zh', lang === 'zh');

    document.querySelectorAll('.langswitch__btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('nv-lang', lang); } catch (e) {}
  }

  function initLang() {
    var saved;
    try { saved = localStorage.getItem('nv-lang'); } catch (e) {}
    if (!saved) {
      saved = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
    }
    apply(saved);

    document.querySelectorAll('.langswitch__btn').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }

  window.NVI18N = { apply: apply };
})();
