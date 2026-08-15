document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const items = document.querySelectorAll('.timeline-item');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // eenmalig triggeren
          }
        });
      }, {
        threshold: 0.2
      });
  
      items.forEach(item => observer.observe(item));
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-active');
        // Optioneel: verander icoon ☰ → × 
        toggle.textContent = nav.classList.contains('mobile-active') ? '✕' : '☰';
      });
    }
  });