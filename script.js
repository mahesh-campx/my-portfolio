// current year
document.getElementById("year").textContent = new Date().getFullYear();

// smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

