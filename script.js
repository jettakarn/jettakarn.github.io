const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
