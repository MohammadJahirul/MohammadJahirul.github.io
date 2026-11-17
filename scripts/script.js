'use strict';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Index the animated pieces so CSS can stagger them.
document.querySelectorAll('.demo-talk .w').forEach((word, i) => word.style.setProperty('--i', i));
document.querySelectorAll('.demo-expense .r').forEach((row, i) => row.style.setProperty('--i', i));
const talk = document.querySelector('.demo-talk');
const firstFiller = talk?.querySelector('.w.filler');
if (talk && firstFiller) talk.style.setProperty('--nudge-at', `${Number(firstFiller.style.getPropertyValue('--i')) * 95 + 120}ms`);

// Without motion (or without IntersectionObserver) every demo simply shows its finished state.
if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion');
  const demos = [...document.querySelectorAll('.demo')];
  const play = demo => demo.classList.add('play');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      play(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  demos.forEach(demo => observer.observe(demo));
  // Fallback: also check positions on scroll, so a demo can never stay in its hidden "before" state.
  let ticking = false;
  const check = () => {
    ticking = false;
    demos.forEach(demo => {
      const r = demo.getBoundingClientRect();
      if (r.top < innerHeight * 0.75 && r.bottom > 0) play(demo);
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } }, { passive: true });
  addEventListener('load', check);
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('muhmd.jahir@gmail.com');
    copyButton.textContent = 'Copied';
    copyStatus.textContent = 'Email address copied to clipboard.';
    setTimeout(() => { copyButton.textContent = 'Copy email'; }, 2400);
  } catch {
    copyButton.textContent = 'Select the email to copy';
    copyStatus.textContent = 'Clipboard unavailable. Select and copy the email address shown.';
  }
});
