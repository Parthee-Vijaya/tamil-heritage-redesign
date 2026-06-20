/* Archive filter chips (visual demo) — single-select per group */
(() => {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    group.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        group.querySelectorAll(".chip").forEach((c) => {
          c.classList.toggle("is-active", c === chip);
          c.setAttribute("aria-pressed", String(c === chip));
        });
      });
    });
  });
})();
