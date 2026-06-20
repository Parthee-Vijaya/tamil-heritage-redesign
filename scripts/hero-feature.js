/* Hero featured-story crossfade slider — auto-rotate, dots, pause on hover/focus,
   respects prefers-reduced-motion (no auto-advance). */
(() => {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll(".hero__slide"));
  const dots = Array.from(slider.querySelectorAll(".hero__dot"));
  if (slides.length < 2) return;

  const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, timer = null;

  const go = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === i));
    dots.forEach((d, k) => {
      d.classList.toggle("is-active", k === i);
      d.setAttribute("aria-pressed", String(k === i));
    });
  };
  const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
  const start = () => { stop(); if (!reduce()) timer = setInterval(() => go(i + 1), 6000); };

  dots.forEach((d, k) => d.addEventListener("click", () => { go(k); start(); }));
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", start);

  go(0);
  start();
})();
