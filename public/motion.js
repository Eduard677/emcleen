(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealSelector = [
    '.section-heading',
    '.service-card',
    '.heritage-services article',
    '.work-copy',
    '.compare',
    '.heritage-work-head',
    '.project-grid figure',
    '.gallery-item',
    '.review-score',
    '.reviews blockquote',
    '.review-attribution',
    '.review-actions',
    '.location-map',
    '.location-copy',
    '.approach-head',
    '.process-list li',
    '.confidence-intro',
    '.confidence-facts > div',
    '.contact-copy',
    '.enquiry-form',
    '.landing-section > *',
    '.landing-cta > *',
    '.privacy-content > *'
  ].join(',');

  const revealItems = [...document.querySelectorAll(revealSelector)];
  revealItems.forEach((item) => {
    item.classList.add('motion-reveal');
    const siblings = item.parentElement ? [...item.parentElement.children].filter((sibling) => sibling.matches?.(revealSelector)) : [];
    const index = Math.max(0, siblings.indexOf(item));
    item.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 70}ms`);
  });

  root.classList.add('motion-ready');

  if (reduceMotion.matches) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    root.classList.add('page-ready');
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  let framePending = false;
  const updateParallax = () => {
    const hero = document.querySelector('.hero, .landing-hero');
    if (hero) {
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)));
      hero.style.setProperty('--hero-shift', `${progress * 34}px`);
    }
    framePending = false;
  };
  window.addEventListener('scroll', () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateParallax);
  }, { passive: true });
  updateParallax();

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => root.classList.add('page-ready'));
  });
})();
