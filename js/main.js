document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar nav');
  if (toggle && nav) {
    const close = () => nav.classList.remove('show');
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('show');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('show') && !nav.contains(e.target) && !toggle.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  console.log('Site ready ✅');
});
