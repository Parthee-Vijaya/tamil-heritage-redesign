/* ============================================================
   TEL Library — subpage interactivity (guarded; safe on any page)
   Gallery lightbox (accessible dialog) · Names search/filter · Album player
   ============================================================ */
(() => {
  /* ---------- Gallery lightbox ---------- */
  const photos = Array.from(document.querySelectorAll("[data-photo]"));
  const box = document.querySelector("[data-lightbox]");
  if (photos.length && box) {
    const img = box.querySelector("img");
    const cap = box.querySelector("[data-lb-cap]");
    const controls = Array.from(box.querySelectorAll("button"));
    let i = 0;
    let lastFocus = null;

    // Give each trigger the full caption as its accessible name
    photos.forEach((p) => {
      const c = p.dataset.caption || "";
      if (c) p.setAttribute("aria-label", "View image: " + c);
    });

    const show = (n) => {
      i = (n + photos.length) % photos.length;
      img.src = photos[i].dataset.full || photos[i].querySelector("img").src;
      cap.textContent = photos[i].dataset.caption || "";
    };
    const open = (n) => {
      lastFocus = document.activeElement;
      show(n);
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      // run after the click's own focus settles, so focus stays in the dialog
      setTimeout(() => box.querySelector("[data-lb-close]")?.focus(), 0);
    };
    const close = () => {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lastFocus?.focus();
    };

    photos.forEach((p, n) => p.addEventListener("click", () => open(n)));
    box.querySelector("[data-lb-close]")?.addEventListener("click", close);
    box.querySelector("[data-lb-prev]")?.addEventListener("click", () => show(i - 1));
    box.querySelector("[data-lb-next]")?.addEventListener("click", () => show(i + 1));
    box.addEventListener("click", (e) => { if (e.target === box) close(); });

    document.addEventListener("keydown", (e) => {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") return close();
      if (e.key === "ArrowLeft") return show(i - 1);
      if (e.key === "ArrowRight") return show(i + 1);
      if (e.key === "Tab" && controls.length) {
        // trap focus among the dialog controls
        const first = controls[0];
        const last = controls[controls.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
        else if (!controls.includes(active)) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- Names search + filter ---------- */
  const search = document.querySelector("[data-names-search]");
  const grid = document.querySelector("[data-names-grid]");
  if (grid) {
    const cards = Array.from(grid.querySelectorAll(".name-card"));
    const empty = document.querySelector("[data-names-empty]");
    let q = "", gender = "all", letter = "";
    const run = () => {
      let shown = 0;
      cards.forEach((c) => {
        const okQ = !q || (c.dataset.search || "").toLowerCase().includes(q);
        const okG = gender === "all" || c.dataset.gender === gender;
        const okL = !letter || (c.dataset.letter || "").startsWith(letter);
        const ok = okQ && okG && okL;
        c.hidden = !ok;
        if (ok) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    };
    search?.addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); run(); });
    document.querySelectorAll("[data-gender-filter] .chip").forEach((b) =>
      b.addEventListener("click", () => {
        document.querySelectorAll("[data-gender-filter] .chip").forEach((x) => {
          const on = x === b;
          x.classList.toggle("is-active", on);
          x.setAttribute("aria-pressed", String(on));
        });
        gender = b.dataset.gender || "all"; run();
      })
    );
    document.querySelectorAll("[data-letter]").forEach((b) =>
      b.addEventListener("click", () => {
        const active = b.classList.contains("is-active");
        document.querySelectorAll("[data-letter]").forEach((x) => {
          x.classList.remove("is-active");
          x.setAttribute("aria-pressed", "false");
        });
        if (!active) { b.classList.add("is-active"); b.setAttribute("aria-pressed", "true"); letter = b.dataset.letter; }
        else { letter = ""; }
        run();
      })
    );
  }

  /* ---------- Album player bar (visual two-state demo) ---------- */
  const bar = document.querySelector("[data-playerbar]");
  if (bar) {
    const btn = bar.querySelector(".playerbar__btn");
    const ICON = {
      play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z"/></svg>',
      pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5h3v14H8zM13 5h3v14h-3z"/></svg>',
    };
    let playing = false;
    const setPlaying = (p) => {
      playing = p;
      if (!btn) return;
      btn.innerHTML = p ? ICON.pause : ICON.play;
      btn.setAttribute("aria-label", p ? "Pause" : "Play");
    };
    btn?.addEventListener("click", () => setPlaying(!playing));
    document.querySelectorAll("[data-album]").forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        bar.querySelector("[data-pb-art]").src = a.dataset.cover || "";
        bar.querySelector("[data-pb-title]").textContent = a.dataset.title || "";
        bar.querySelector("[data-pb-sub]").textContent = a.dataset.sub || "";
        bar.hidden = false;
        setPlaying(true);
      })
    );
  }
})();
