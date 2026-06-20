/* Site header: sticky shadow, mobile nav, language toggle */
(() => {
  const header = document.querySelector("[data-header]");
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  const scrim = document.querySelector("[data-scrim]");

  /* Sticky shadow on scroll */
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile drawer */
  const setOpen = (open) => {
    if (!menu || !burger) return;
    menu.classList.toggle("is-open", open);
    scrim?.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      menu.querySelector("a")?.focus();
    } else if (document.activeElement && menu.contains(document.activeElement)) {
      burger.focus(); // restore focus when closing from inside the drawer
    }
  };
  burger?.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
  scrim?.addEventListener("click", () => setOpen(false));
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { setOpen(false); return; }
    if (e.key === "Tab" && menu?.classList.contains("is-open")) {
      const links = menu.querySelectorAll("a");
      if (!links.length) return;
      const first = links[0], last = links[links.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Language toggle is handled by scripts/i18n.js */
})();
