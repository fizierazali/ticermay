// main.js (full)
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar nav');

  if (toggle && nav) {
    const toggleMenu = () => nav.classList.toggle('show');

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking a nav link (good UX on mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('show'));
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('show')) {
        const insideNav = nav.contains(e.target) || toggle.contains(e.target);
        if (!insideNav) nav.classList.remove('show');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') nav.classList.remove('show');
    });
  }

  console.log('Site ready ✅');
});
