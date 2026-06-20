# Forfinings- og udvidelsesplan

## Kontekst
Prototypen har nu 8 sider + et poleret tosproget designsystem. Denne plan dækker **(A) dybere design-forfining** og **(B) mere indhold/sektioner hentet fra det oprindelige telibrary.com** — som rummer væsentligt mere, end vi har fanget endnu. Alt genbruger det eksisterende designsystem (`styles/*`) og i18n-motoren (`scripts/i18n.js`).

---

## Det originale site har dette, som vi IKKE har bygget endnu
*(fra WordPress-taksonomien + sider på det live site)*

- **About Us** (எம்மைப் பற்றி) — oprindelses-/missionssiden (1981-historien, holdet, neutralitets-erklæring). Vi har kun et footer-link.
- **Support Us** (ஆதரியுங்கள்) — støt/donér.
- **Contribute / Join Us** — upload materiale + bliv frivillig.
- **Information → Notable Figures** — fremtrædende tamiler på tværs af fag (aktivister, kunstnere, videnskab, sport) — et **biografi-katalog**.
- **Tamil Eelam — de facto-stat** — et dybt institutionelt under-arkiv: sekretariater (தலைமைச்செயலகம் hovedsekretariat, அனைத்துலகச் செயலகம் internationalt sekretariat), afdelinger, militære divisioner, den nationale leder (தேசியத் தலைவர்), nationalflaget (தமிழீழத் தேசியக் கொடி), Maaveerar (மாவீரர் — faldne), nøglebegivenheder (Kumudini-massakren, Thimphu-samtalerne, "krig og fred").
- **Today in History** (வரலாற்றில் இன்று) — sitets signatur-funktion "på denne dag" (vi har den kun som en statisk topbar-linje).
- **Today's Newspapers** (இன்றைய செய்திகள்) — dagens presse.
- Dyb **History**-undergren: Arkæologiske beviser (தொல்லியல் சான்றுகள்), Sangam, Chera/Chola/Pandya-imperier, Poompuhar.
- **E-bogs-læser**, **enkelt-album**, **enkelt-avis** detalje-oplevelser.

---

## Del A — Design-forfining (næste niveau)

1. **"Today in History"-modul på forsiden** — et **dato-bevidst**, roterende bånd med historiske begivenheder knyttet til dagens dato (originalens signatur). Stor editorial værdi + følelsesmæssig krog. (Drives af en lille JSON med daterede begivenheder.)
2. **Hero med rotation af featured-historier** — en smagfuld carousel af 2-3 featured-historier (originalen har en slider; vi holder den værdig med crossfade + dots + `reduced-motion`).
3. **Scrollytelling af 1981-missionen** — gør mission-båndet til en kort scroll-drevet sekvens (tallet 97.000 tæller op, flammen, genopbygningen) — det følelsesmæssige omdrejningspunkt.
4. **Global søgning** — en ⌘K-kommando-overlay + en resultatside, der søger på tværs af samlinger/personer/medier.
5. **Mega-menu** til den dybe taksonomi — de 6 søjler folder ud og viser deres rigtige underkategorier (History → Sangam/Chola/…, Tamil Eelam → sekretariater/afdelinger/…).
6. **Samlings-landingssider** — hver af de 6 søjler får en rigtig landingsside (intro + featured + underkategorier + tidslinje-filtreret liste), ikke kun den generiske arkivside.
7. **Rigtige medie-oplevelser** — e-bogs-læser (sidevendt), enkelt-album med tracklist + fungerende `<audio>`, avis-PDF/udgave-læser.
8. **Bevægelse & atmosfære** — sektions-koreografi ved indgang, tidslinjen som horisontal scroll-snap med en bevægende indikator, hover-mikrointeraktioner.
9. **Person/biografi-system** — et genbrugeligt "figur"-kort + profilside til personkataloget.
10. **Print/læse-forfining** — et print-stylesheet til artikler (arkiv-værdigt) og evt. en "læsetilstand".

---

## Del B — Nye sider/sektioner (hentet fra originalen)

| Side | EN | தமிழ் | Indhold |
|---|---|---|---|
| **About** | About Us | எம்மைப் பற்றி | Oprindelse/mission — 1981-historien, holdet, neutralitet |
| **Support** | Support Us | ஆதரியுங்கள் | Donér/støt (ingen betalingsfelt — linker ud) |
| **Contribute** | Contribute / Join | — | Upload-koncept + frivillig |
| **People** | Notable Figures | தமிழர் யார் | Biografi-katalog + profilsider |
| **Tamil Eelam** | Tamil Eelam — de facto state | தமிழீழம் | Struktureret under-arkiv (sekretariater, afdelinger, leder, flag, Maaveerar, begivenheder) |
| **Today** | Today in History | வரலாற்றில் இன்று | "På denne dag"-feed |
| **Landings** | de 6 søjler | … | én pr. søjle |
| **Detalje** | e-bog / album / avis / person | … | enkelt-elements-oplevelser |

---

## Faseinddeling (foreslået rækkefølge)

- **Fase 1 — følelse + signatur:** About Us · "Today in History"-modul · scrollytelling 1981 · hero-rotation.
- **Fase 2 — dybde:** Samlings-landingssider + mega-menu · Notable Figures-katalog + profiler.
- **Fase 3 — den store:** Tamil Eelam de facto-stat struktureret under-arkiv.
- **Fase 4 — værktøj + medier:** Global søgning · e-bog/album/avis detaljesider · Support/Contribute.

Hver fase genbruger designsystemet + i18n; nye i18n-nøgler + (ved lister) toolbar/filter/kort-mønstrene. Verificér pr. side: EN/TA, responsivt 320→1440, tilgængelighed, intet overflow.

---

## Et par valg til dig
- **Tamil Eelam** er politisk følsomt — beholder vi originalens rammesætning (det er deres arkiv), eller en mere neutral/historisk fremstilling?
- Skal detaljesiderne have **rigtig lyd/PDF** koblet på, eller forblive visuelle koncepter foreløbig?
- **"Today in History":** en lille seedet JSON af daterede begivenheder, eller illustrativ?

Anbefaling: start med **Fase 1** (About Us + Today-in-History + scrollytelling) — det giver mest følelsesmæssig effekt for mindst arbejde og bruger designsystemet, vi allerede har.
