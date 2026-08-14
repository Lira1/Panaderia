/* ==========================================================================
   PANADERÍA PLACEHOLDER — script.js
   JavaScript vanilla, sin dependencias.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Año automático en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Animación sutil "fade + slide" al entrar en pantalla
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: si el navegador no soporta IntersectionObserver, mostrar todo
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});
