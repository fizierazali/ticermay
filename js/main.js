
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  console.log('Teacher Maisarah iOS-style site ready ✅');
});
