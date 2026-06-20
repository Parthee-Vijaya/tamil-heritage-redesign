/* "Today in history" — surfaces real dated events from Tamil / Eelam history.
   Shows the event matching today's calendar date if seeded; otherwise lets the
   visitor browse the dated entries. Bilingual; re-renders on language change. */
(() => {
  const root = document.querySelector("[data-today]");
  if (!root) return;

  // Real, dated entries (mmdd, year). Descriptions kept factual and concise.
  const EVENTS = [
    { mmdd: "05-31", year: 1981, img: "https://telibrary.com/wp-content/uploads/2025/05/te1-1024x683.jpg",
      en: { t: "The burning of the Jaffna Public Library", x: "One of Asia's great centres of Tamil learning — 97,000+ books, palm-leaf manuscripts and 19th-century newspapers — was destroyed in a single night." },
      ta: { t: "யாழ் பொது நூலகம் எரிக்கப்பட்டது", x: "ஆசியாவின் தலைசிறந்த தமிழ்க் கல்வி மையங்களுள் ஒன்று — 97,000க்கும் மேற்பட்ட நூல்கள், ஓலைச் சுவடிகள், 19ஆம் நூற்றாண்டுச் செய்தித்தாள்கள் — ஒரே இரவில் அழிந்தது." } },
    { mmdd: "06-04", year: 1986, img: "https://telibrary.com/wp-content/uploads/2025/06/te1-10-1024x683.jpg",
      en: { t: "The Anandapuram shelling", x: "An attack recorded among the archive's documentation of the conflict in the northern Vanni." },
      ta: { t: "ஆனந்தபுரம் குண்டுவீச்சு", x: "வடக்கு வன்னியில் நடந்த மோதலின் ஆவணப்பதிவில் பதிவான ஒரு தாக்குதல்." } },
    { mmdd: "10-31", year: 1803, img: "https://telibrary.com/wp-content/uploads/2025/10/Pandaravanniyan-1024x703.png",
      en: { t: "Pandara Vanniyan falls", x: "The Vanni chieftain who resisted British rule to the very end." },
      ta: { t: "பண்டார வன்னியன் வீழ்ந்தார்", x: "பிரித்தானிய ஆட்சியை இறுதிவரை எதிர்த்துப் போரிட்ட வன்னித் தலைவன்." } },
    { mmdd: "11-27", year: 1989, img: "https://telibrary.com/wp-content/uploads/2026/01/te2-2-1024x683.jpg",
      en: { t: "Maaveerar Naal — a day of remembrance", x: "The Tamil remembrance day held each year for those who fell." },
      ta: { t: "மாவீரர் நாள் — நினைவு நாள்", x: "ஆண்டுதோறும் வீழ்ந்தோரை நினைவுகூரும் தமிழர் நாள்." } },
    { mmdd: "05-18", year: 2009, img: "https://telibrary.com/wp-content/uploads/2022/03/te-defacto.jpg",
      en: { t: "Mullivaikkal — remembered each year", x: "The end of the war in the Vanni, mourned by Tamils across the world." },
      ta: { t: "முள்ளிவாய்க்கால் — ஆண்டுதோறும் நினைவு", x: "வன்னியில் போரின் முடிவு, உலகெங்கிலுமுள்ள தமிழரால் துயருடன் நினைவுகூரப்படுகிறது." } },
  ];

  const MONTHS = {
    en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    ta: ["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்"],
  };

  // start on an event matching today's date, else the first entry
  const now = new Date();
  const todayMMDD = String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
  let i = Math.max(0, EVENTS.findIndex((e) => e.mmdd === todayMMDD));

  const el = (sel) => root.querySelector(sel);
  const render = () => {
    const lang = document.documentElement.lang === "ta" ? "ta" : "en";
    const ev = EVENTS[i];
    const [mm, dd] = ev.mmdd.split("-").map(Number);
    const dateStr = lang === "ta" ? `${dd} ${MONTHS.ta[mm - 1]}` : `${dd} ${MONTHS.en[mm - 1]}`;
    el("[data-today-date]").textContent = dateStr;
    el("[data-today-year]").textContent = ev.year;
    el("[data-today-title]").textContent = ev[lang].t;
    el("[data-today-text]").textContent = ev[lang].x;
    const img = el("[data-today-img]");
    img.src = ev.img; img.alt = ev[lang].t;
  };
  const go = (n) => { i = (n + EVENTS.length) % EVENTS.length; render(); };

  el("[data-today-prev]")?.addEventListener("click", () => go(i - 1));
  el("[data-today-next]")?.addEventListener("click", () => go(i + 1));
  document.addEventListener("tel:lang", render);
  render();
})();
