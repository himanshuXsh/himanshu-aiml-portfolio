/* ═══════════════════════════════════════════════════
   HIMANSHU SHARMA — PORTFOLIO SCRIPT

   HOW TO CUSTOMIZE:
   ✏️  Add a skill     → Add object to SKILLS array
   ✏️  Remove a skill  → Delete object from SKILLS array
   ✏️  Change %        → Edit the pct value (0-100)
═══════════════════════════════════════════════════ */


/* ───────────────────────────────────────────────
   ✏️  SKILLS DATA — Edit this to change skills
   Fields: icon (FontAwesome class), name, pct (0-100)
─────────────────────────────────────────────── */
const SKILLS = [
  { icon: 'fab fa-python',      name: 'Python',           pct: 92 },
  { icon: 'fas fa-brain',       name: 'Machine Learning', pct: 85 },
  { icon: 'fas fa-robot',       name: 'Generative AI',    pct: 80 },
  { icon: 'fas fa-link',        name: 'LangChain',        pct: 78 },
  { icon: 'fas fa-search',      name: 'RAG Pipelines',    pct: 75 },
  { icon: 'fas fa-eye',         name: 'Computer Vision',  pct: 72 },
  { icon: 'fas fa-microphone',  name: 'Voice AI',         pct: 70 },
  { icon: 'fas fa-database',    name: 'SQL',              pct: 72 },
  { icon: 'fas fa-server',      name: 'Flask / FastAPI',  pct: 78 },
  { icon: 'fab fa-docker',      name: 'Docker',           pct: 68 },
  { icon: 'fas fa-leaf',        name: 'MongoDB',          pct: 72 },
  { icon: 'fas fa-chart-bar',   name: 'Pandas / NumPy',   pct: 85 },
  { icon: 'fas fa-stream',      name: 'Streamlit',        pct: 80 },
  { icon: 'fas fa-code',        name: 'HTML / CSS',       pct: 75 },
  { icon: 'fab fa-js',          name: 'Node.js',          pct: 60 },
  { icon: 'fas fa-cloud',       name: 'Oracle OCI',       pct: 65 },
];


/* ───────────────────────────────────────────────
   RENDER SKILLS GRID
   Reads SKILLS array above and builds the cards
─────────────────────────────────────────────── */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  SKILLS.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.style.transitionDelay = (i * 0.05) + 's';
    card.innerHTML = `
      <div class="skill-icon"><i class="${skill.icon}"></i></div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-bar">
        <div class="skill-fill" data-pct="${skill.pct}"></div>
      </div>
      <div class="skill-pct">${skill.pct}%</div>
    `;
    grid.appendChild(card);
  });
}


/* ───────────────────────────────────────────────
   SCROLL ANIMATIONS (IntersectionObserver)
   Watches .skill-card, .project-card, .reveal
   Adds class "visible" when element enters view
─────────────────────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Fade in
      entry.target.classList.add('visible');

      // Animate skill bar width
      const fill = entry.target.querySelector('.skill-fill');
      if (fill) {
        setTimeout(() => { fill.style.width = fill.dataset.pct + '%'; }, 200);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.skill-card, .project-card, .reveal').forEach(el => {
    observer.observe(el);
  });
}


/* ───────────────────────────────────────────────
   MOBILE HAMBURGER MENU
─────────────────────────────────────────────── */
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  if (!ham || !nav) return;

  ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Close when any nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('active');
      nav.classList.remove('open');
    });
  });
}


/* ───────────────────────────────────────────────
   SMOOTH SCROLL for all anchor links
─────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}


/* ───────────────────────────────────────────────
   ACTIVE NAV LINK HIGHLIGHT on scroll
─────────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 130) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}


/* ───────────────────────────────────────────────
   NAVBAR — Slightly more opaque on scroll
─────────────────────────────────────────────── */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 80
      ? 'rgba(4,4,12,0.98)'
      : 'rgba(4,4,12,0.85)';
  }, { passive: true });
}


/* ───────────────────────────────────────────────
   TOAST NOTIFICATION
   Call: toast('Your message') anywhere
─────────────────────────────────────────────── */
function toast(message, success = true) {
  const el = document.getElementById('toast');
  if (!el) return;

  el.textContent = message;
  el.style.borderColor = success ? 'var(--green)' : '#ff4d4d';
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}


/* ───────────────────────────────────────────────
   CONTACT FORM
─────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    // Basic validation
    const name    = this.querySelector('[name="name"]').value.trim();
    const email   = this.querySelector('[name="email"]').value.trim();
    const message = this.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      toast('⚠️ Please fill in all required fields.', false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast('⚠️ Please enter a valid email address.', false);
      return;
    }

    // Simulate sending (replace with real API call if needed)
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      toast("✅ Message sent! I'll reply soon.");
      form.reset();
      btn.innerHTML = originalHTML;
      btn.disabled = false;
    }, 1800);
  });
}


/* ───────────────────────────────────────────────
   CLICK TO COPY EMAIL
   Clicks on any element with an @ symbol copies it
─────────────────────────────────────────────── */
function initCopyEmail() {
  document.querySelectorAll('.ci-value').forEach(el => {
    if (!el.textContent.includes('@')) return;
    el.style.cursor = 'pointer';
    el.title = 'Click to copy email';
    el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.textContent.trim())
        .then(()  => toast('📋 Email copied to clipboard!'))
        .catch(()  => toast('Could not copy email.', false));
    });
  });
}


/* ───────────────────────────────────────────────
   INIT — Runs after DOM is fully loaded
─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();          // Build skills grid from SKILLS array
  initScrollAnimations();  // Fade-in + skill bar animations
  initHamburger();         // Mobile menu toggle
  initSmoothScroll();      // Smooth anchor scrolling
  initActiveNav();         // Highlight active nav link
  initNavbarScroll();      // Navbar opacity on scroll
  initContactForm();       // Form submit + validation
  initCopyEmail();         // Click email to copy
});
