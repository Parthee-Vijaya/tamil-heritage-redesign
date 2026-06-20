/* Horizontal rails (timeline + media shelves): prev/next + drag-scroll */
(() => {
  const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-rail]").forEach((rail) => {
    const prev = document.querySelector(`[data-rail-prev="${rail.dataset.rail}"]`);
    const next = document.querySelector(`[data-rail-next="${rail.dataset.rail}"]`);
    const step = () => Math.max(rail.clientWidth * 0.8, 280);
    const behavior = () => (reduce() ? "auto" : "smooth");

    prev?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: behavior() }));
    next?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: behavior() }));

    const sync = () => {
      const max = rail.scrollWidth - rail.clientWidth - 2;
      prev?.toggleAttribute("disabled", rail.scrollLeft <= 2);
      next?.toggleAttribute("disabled", rail.scrollLeft >= max);
    };
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();

    /* Pointer drag-to-scroll on fine pointers */
    let down = false, startX = 0, startLeft = 0;
    rail.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      down = true; startX = e.clientX; startLeft = rail.scrollLeft;
      rail.style.cursor = "grabbing";
    });
    const end = () => { down = false; rail.style.cursor = ""; };
    rail.addEventListener("pointermove", (e) => {
      if (!down) return;
      rail.scrollLeft = startLeft - (e.clientX - startX);
    });
    rail.addEventListener("pointerup", end);
    rail.addEventListener("pointerleave", end);
  });
})();
