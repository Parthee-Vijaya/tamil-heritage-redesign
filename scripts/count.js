/* Count-up: animates [data-count] from 0 to its target when scrolled into view.
   Respects prefers-reduced-motion (jumps to the final value). */
(() => {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = (n) => n.toLocaleString("en-US");

  const run = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.countSuffix || "";
    if (reduce) { el.textContent = fmt(target) + suffix; return; }
    const dur = 1700, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased)) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
  const io = new IntersectionObserver(
    (entries, obs) => entries.forEach((e) => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } }),
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
})();
