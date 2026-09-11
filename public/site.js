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
  const isSlowConnection = () => ['slow-2g', '2g'].includes(navigator.connection?.effectiveType);
  let heroVisible = true;
  let mediaReady = false;
  let transitionTimers = [];

  if (saveData) document.documentElement.classList.add('save-data');

  function setVideoPlayback(mode, chooserOpen) {
    const canPlay = mediaReady && !reduceMotion.matches && !compactViewport.matches && !saveData && !isSlowConnection() && !document.hidden;
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
    document.querySelectorAll('[data-switch], [data-choose]').forEach((button) => {
      const buttonMode = button.dataset.switch || button.dataset.choose;
      button.setAttribute('aria-pressed', String(buttonMode === mode));
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
  const enableDeferredMedia = () => {
    const start = () => {
      mediaReady = true;
      refreshVideoPlayback();
    };
    if ('requestIdleCallback' in window) window.requestIdleCallback(start, { timeout: 1800 });
    else window.setTimeout(start, 800);
  };
  if (document.readyState === 'complete') enableDeferredMedia();
  else window.addEventListener('load', enableDeferredMedia, { once: true });
  compactViewport.addEventListener('change', refreshVideoPlayback);
  reduceMotion.addEventListener('change', refreshVideoPlayback);
  navigator.connection?.addEventListener?.('change', refreshVideoPlayback);

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
    const updateCompare = () => {
      compare.style.setProperty('--pos', `${compareRange.value}%`);
      compareRange.setAttribute('aria-valuetext', `${compareRange.value} percent after`);
    };
    compareRange.addEventListener('input', updateCompare);
    updateCompare();
  }

  document.querySelectorAll('[data-service-panels]').forEach((group) => {
    const panels = [...group.querySelectorAll('.service-panel')];
    panels.forEach((panel) => {
      const trigger = panel.querySelector('.service-panel-trigger');
      const bodyPanel = panel.querySelector('.service-panel-body');
      const mark = panel.querySelector('.panel-mark');
      trigger?.addEventListener('click', () => {
        const closeCurrent = panel.classList.contains('is-active');
        panels.forEach((candidate) => {
          const isOpen = candidate === panel && !closeCurrent;
          candidate.classList.toggle('is-active', isOpen);
          candidate.querySelector('.service-panel-trigger')?.setAttribute('aria-expanded', String(isOpen));
          const candidateBody = candidate.querySelector('.service-panel-body');
          candidateBody?.setAttribute('aria-hidden', String(!isOpen));
          candidateBody?.toggleAttribute('inert', !isOpen);
          const candidateMark = candidate.querySelector('.panel-mark');
          if (candidateMark) candidateMark.textContent = isOpen ? '−' : '+';
        });
      });
      bodyPanel?.setAttribute('aria-hidden', String(!panel.classList.contains('is-active')));
      bodyPanel?.toggleAttribute('inert', !panel.classList.contains('is-active'));
      if (mark) mark.textContent = panel.classList.contains('is-active') ? '−' : '+';
    });
  });

  const processShowcase = document.querySelector('[data-process-showcase]');
  if (processShowcase) {
    const processButtons = [...processShowcase.querySelectorAll('[data-process-src]')];
    const processImage = processShowcase.querySelector('.process-media img');
    const processZoom = processShowcase.querySelector('[data-zoom-src]');
    const processCaption = processShowcase.querySelector('.process-media figcaption');

    const selectProcessStep = (button) => {
      processButtons.forEach((candidate) => {
        const active = candidate === button;
        candidate.setAttribute('aria-pressed', String(active));
        candidate.closest('li')?.classList.toggle('is-active', active);
      });
      if (!processImage || !processCaption || !processZoom) return;
      processImage.classList.add('is-changing');
      const updateImage = () => {
        processImage.srcset = button.dataset.processSrcset || '';
        processImage.src = button.dataset.processSrc;
        processImage.alt = button.dataset.processAlt || '';
        processCaption.textContent = button.dataset.processCaption || '';
        processZoom.dataset.zoomSrc = button.dataset.processSrc;
        processZoom.dataset.zoomCaption = button.dataset.processCaption || '';
        requestAnimationFrame(() => processImage.classList.remove('is-changing'));
      };
      if (reduceMotion.matches) updateImage();
      else window.setTimeout(updateImage, 130);
    };

    processButtons.forEach((button, index) => {
      button.addEventListener('click', () => selectProcessStep(button));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) return;
        event.preventDefault();
        const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
        const next = processButtons[(index + direction + processButtons.length) % processButtons.length];
        next.focus();
        selectProcessStep(next);
      });
    });
  }

  const galleryDialog = document.getElementById('gallery-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const dialogCaption = document.getElementById('dialog-caption');
  const openZoom = (item) => {
    if (!galleryDialog || !dialogImage || !dialogCaption) return;
    dialogImage.src = item.dataset.gallerySrc || item.dataset.zoomSrc;
    dialogImage.alt = item.querySelector('img')?.alt || '';
    dialogCaption.textContent = item.dataset.galleryCaption || item.dataset.zoomCaption || '';
    galleryDialog.showModal();
  };
  const closeZoom = () => {
    if (galleryDialog?.open) galleryDialog.close();
  };
  document.querySelectorAll('[data-gallery-src], [data-zoom-src]').forEach((item) => {
    item.addEventListener('click', () => {
      openZoom(item);
    });
  });
  document.querySelector('[data-close-dialog]')?.addEventListener('click', closeZoom);
  dialogImage?.addEventListener('click', closeZoom);
  galleryDialog?.addEventListener('click', (event) => {
    if (event.target === galleryDialog) closeZoom();
  });
  galleryDialog?.addEventListener('wheel', closeZoom, { passive: true });
  galleryDialog?.addEventListener('touchmove', closeZoom, { passive: true });
  window.addEventListener('scroll', closeZoom, { passive: true });

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
    ];
    if (mode === 'home') message.push(`Area: ${data.get('location') || 'Not provided'}`);
    message.push('', String(data.get('details') || ''));
    if (mode === 'home') message.push('', 'I can attach a wide photo, a close detail and a photo showing scale.');
    const messageText = message.join('\n');
    location.href = `https://wa.me/353877070331?text=${encodeURIComponent(messageText)}`;
  });
})();
