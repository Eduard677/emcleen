(() => {
  const body = document.body;
  const chooser = document.getElementById('chooser');
  const wipe = document.getElementById('mode-wipe');
  const header = document.getElementById('site-header');
  const formMode = document.getElementById('form-mode');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const validModes = ['auto', 'home'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compactViewport = window.matchMedia('(max-width: 700px)');
  const saveData = Boolean(navigator.connection?.saveData);
  let heroVisible = true;
  let transitionTimers = [];

  if (saveData) document.documentElement.classList.add('save-data');

  function setVideoPlayback(mode, chooserOpen) {
    const canPlay = !reduceMotion.matches && !compactViewport.matches && !saveData && !document.hidden;
    document.querySelectorAll('.choice-video').forEach((video) => {
      if (chooserOpen && canPlay) video.play().catch(() => {});
      else video.pause();
    });
    document.querySelectorAll('.hero-video').forEach((video) => {
      const active = video.classList.contains(`hero-video-${mode}`);
      if (active && !chooserOpen && heroVisible && canPlay) video.play().catch(() => {});
      else video.pause();
    });
  }

  const pathMode = () => {
    const part = location.pathname.split('/').filter(Boolean)[0];
    return validModes.includes(part) ? part : null;
  };

  function syncMode(mode) {
    body.dataset.mode = mode;
    if (formMode) formMode.value = mode === 'auto' ? 'Car wash' : 'Property care';
    if (metaTheme) metaTheme.setAttribute('content', mode === 'auto' ? '#0e1111' : '#e8e3da');
    document.title = mode === 'auto'
      ? 'Cankaj Super Car Wash — Newmarket-on-Fergus'
      : 'BC Stone Mason & Construction Restoration — County Clare';
    document.querySelectorAll('[data-switch]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.switch === mode));
    });
  }

  function setUrl(mode, replace = false) {
    const next = `/${mode}${location.hash || ''}`;
    if (location.pathname === `/${mode}`) return;
    history[replace ? 'replaceState' : 'pushState']({ mode }, '', next);
  }

  function animateMode(mode, updateUrl = true) {
    if (!validModes.includes(mode)) return;
    const current = body.dataset.mode;
    if (current === mode && chooser?.classList.contains('is-hidden')) return;

    transitionTimers.forEach((timer) => window.clearTimeout(timer));
    transitionTimers = [];
    body.dataset.transitionTo = mode;

    if (reduceMotion.matches || !wipe) {
      syncMode(mode);
      chooser?.classList.add('is-hidden');
      body.classList.remove('chooser-open');
      setVideoPlayback(mode, false);
      delete body.dataset.transitionTo;
      if (updateUrl) setUrl(mode);
      return;
    }

    body.classList.add('is-switching');
    if (wipe) {
      const isAuto = mode === 'auto';
      wipe.style.setProperty('--wipe-color', isAuto ? '#111514' : '#ddd6ca');
      wipe.style.setProperty('--wipe-edge', isAuto ? '#8f9999' : '#9b836c');
      wipe.style.setProperty('--wipe-glint', isAuto ? 'rgba(238,236,230,.44)' : 'rgba(255,252,244,.72)');
      wipe.classList.remove('run');
      void wipe.offsetWidth;
      wipe.classList.add('run');
    }

    transitionTimers.push(window.setTimeout(() => {
      syncMode(mode);
      chooser?.classList.add('is-hidden');
      body.classList.remove('chooser-open');
      setVideoPlayback(mode, false);
      if (updateUrl) setUrl(mode);
    }, 430));

    transitionTimers.push(window.setTimeout(() => {
      wipe?.classList.remove('run');
      body.classList.remove('is-switching');
      delete body.dataset.transitionTo;
    }, 980));
  }

  function openChooser(event) {
    if (event) event.preventDefault();
    chooser?.classList.remove('is-hidden');
    body.classList.add('chooser-open');
    setVideoPlayback(body.dataset.mode, true);
  }

  document.querySelectorAll('[data-choose], [data-switch]').forEach((button) => {
    button.addEventListener('click', () => animateMode(button.dataset.choose || button.dataset.switch));
  });
  document.querySelectorAll('[data-open-chooser]').forEach((button) => button.addEventListener('click', openChooser));

  window.addEventListener('popstate', () => {
    const mode = pathMode();
    if (mode) {
      syncMode(mode);
      chooser?.classList.add('is-hidden');
      body.classList.remove('chooser-open');
      setVideoPlayback(mode, false);
    } else {
      openChooser();
    }
  });

  const initial = pathMode();
  if (initial) {
    syncMode(initial);
    chooser?.classList.add('is-hidden');
    setVideoPlayback(initial, false);
  } else {
    syncMode('auto');
    body.classList.add('chooser-open');
    setVideoPlayback('auto', true);
  }

  const refreshVideoPlayback = () => {
    const chooserOpen = !chooser?.classList.contains('is-hidden');
    setVideoPlayback(body.dataset.mode, chooserOpen);
  };
  compactViewport.addEventListener('change', refreshVideoPlayback);
  reduceMotion.addEventListener('change', refreshVideoPlayback);

  const hero = document.querySelector('.hero');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      refreshVideoPlayback();
    }, { threshold: 0.02 }).observe(hero);
  }

  window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

  document.addEventListener('visibilitychange', refreshVideoPlayback);

  const compare = document.getElementById('compare');
  const compareRange = document.getElementById('compare-range');
  if (compare && compareRange) {
    compareRange.addEventListener('input', () => {
      compare.style.setProperty('--pos', `${compareRange.value}%`);
      compareRange.setAttribute('aria-valuetext', `${compareRange.value} percent after`);
    });
  }

  const galleryDialog = document.getElementById('gallery-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const dialogCaption = document.getElementById('dialog-caption');
  document.querySelectorAll('[data-gallery-src]').forEach((item) => {
    item.addEventListener('click', () => {
      if (!galleryDialog || !dialogImage || !dialogCaption) return;
      dialogImage.src = item.dataset.gallerySrc;
      dialogImage.alt = item.querySelector('img')?.alt || '';
      dialogCaption.textContent = item.dataset.galleryCaption || '';
      galleryDialog.showModal();
    });
  });
  document.querySelector('[data-close-dialog]')?.addEventListener('click', () => galleryDialog?.close());
  galleryDialog?.addEventListener('click', (event) => {
    if (event.target === galleryDialog) galleryDialog.close();
  });

  document.getElementById('enquiry-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mode = body.dataset.mode;
    const service = mode === 'auto' ? data.get('auto_service') : data.get('home_service');
    const message = [
      mode === 'auto' ? 'Car wash / valet enquiry' : 'Property work estimate request',
      '',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${service || 'Not selected'}`,
      '',
      String(data.get('details') || '')
    ].join('\n');
    location.href = `https://wa.me/353877070331?text=${encodeURIComponent(message)}`;
  });
})();
