// =========================================
// PROMPTS & FLOW - PORTFOLIO SCRIPT
// =========================================

// ---------- Theme Toggle ----------
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or detect system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
html.setAttribute('data-theme', initialTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ---------- Hero Rotating Word ----------
const rotateEl = document.getElementById('heroRotate');
const words = ['indépendants', 'vignerons', 'maisons d\'hôtes', 'coiffeurs', 'artisans', 'PME'];
let wordIndex = 0;

if (rotateEl) {
  setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    rotateEl.style.opacity = '0';
    rotateEl.style.transform = 'translateY(-10px)';

    setTimeout(() => {
      rotateEl.textContent = words[wordIndex];
      rotateEl.style.opacity = '1';
      rotateEl.style.transform = 'translateY(0)';
    }, 300);
  }, 2500);

  // Initial transition setup
  rotateEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  rotateEl.style.display = 'inline-block';
}

// ---------- Scroll Reveal ----------
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections after a tick to let layout settle
window.addEventListener('load', () => {
  document.querySelectorAll('.project, .service-card, .vertical, .timeline-item').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
});

// ---------- Smooth scroll for nav links ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');
    if (target === '#') return;
    const el = document.querySelector(target);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---------- Form: optional client-side enhancement ----------
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // Formspree handles the actual submission
    // This is just a UX enhancement for the button state
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.7';
      const original = btn.innerHTML;
      btn.innerHTML = 'Envoi en cours…';

      // Restore after 4s if still on page (in case of error)
      setTimeout(() => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.innerHTML = original;
      }, 4000);
    }
  });
}
