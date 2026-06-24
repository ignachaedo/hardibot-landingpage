/* ============================================
   HardiBot Landing Page — Main Script
   ============================================ */

(function () {
  'use strict';

  /* ---------- Mobile Nav Toggle ---------- */
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      this.classList.toggle('active');
      this.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Scroll Fade-in ---------- */
  function observeFadeIn() {
    const els = document.querySelectorAll('.feature-card, .persona-card, .business-card, .tech-stat, .contact-card');

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }

    els.forEach(function (el) {
      el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    els.forEach(function (el) { observer.observe(el); });
  }

  observeFadeIn();

  /* ---------- Navbar scroll shadow ---------- */
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });

})();
