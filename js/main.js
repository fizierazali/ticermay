document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu toggle (accessible)
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar nav');

  if (toggle && nav) {
    const close = () => {
      nav.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      nav.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
    };
    const toggleMenu = (e) => {
      e?.stopPropagation?.();
      nav.classList.contains('show') ? close() : open();
    };

    // init ARIA
    toggle.setAttribute('aria-controls', 'primary-nav');
    nav.id = 'primary-nav';
    toggle.setAttribute('aria-expanded', 'false');

    // Click toggle
    toggle.addEventListener('click', toggleMenu);

    // Keyboard (Enter/Space)
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu(e);
      }
    });

    // Close on link click
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));

    // Click outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('show') && !nav.contains(e.target) && !toggle.contains(e.target)) close();
    });

    // Esc to close
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Reset on resize to desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 760) close();
      }, 100);
    });
  }

  console.log('Site ready ✅');
});
