// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reading-progress bar, echoes the "signal" motif as you scroll
const progressFill = document.getElementById('progressFill');
function updateProgress() {
  if (!progressFill) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressFill.style.width = pct + '%';
}
updateProgress();
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);

// Hero signal line reacts gently to the cursor, on devices that have one
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasHover = window.matchMedia('(hover: hover)').matches;
const signalWrap = document.getElementById('signalWrap');
const signalSvg = document.getElementById('signalSvg');
if (signalWrap && signalSvg && hasHover && !reduceMotion) {
  signalWrap.addEventListener('mousemove', (e) => {
    const rect = signalWrap.getBoundingClientRect();
    const relY = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    const tilt = relY * 6; // degrees, kept subtle
    signalSvg.style.transform = `scaleY(${1 + relY * 0.12}) rotate(${tilt * 0.15}deg)`;
  });
  signalWrap.addEventListener('mouseleave', () => {
    signalSvg.style.transform = '';
  });
}

// Reveal build-log entries + spark visuals as they enter view
const revealTargets = document.querySelectorAll('.entry');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  revealTargets.forEach((el) => revealObserver.observe(el));

  // Active section highlight in the side index nav
  const navLinks = document.querySelectorAll('.indexnav__list a');
  const sections = Array.from(navLinks)
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = document.querySelector(`.indexnav__list a[data-section="${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported
  revealTargets.forEach((el) => el.classList.add('in-view'));
}
