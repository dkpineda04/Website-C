
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('navToggle');
  btn.addEventListener('click', () => {
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.background = 'transparent';
      nav.style.paddingTop = '12px';
    }
  });
});
