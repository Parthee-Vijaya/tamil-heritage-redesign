# Plan: de 5 undersider (TEL Library redesign)

Disse undersider bygges oven på det **eksisterende designsystem** (`styles/tokens.css`, typografi, header/footer, `i18n.js`/`i18n.css`). Alt genbruges — ingen ny arkitektur. Hver side er tosproget fra start (de rigtige titler er hentet fra telibrary.com og ligger allerede i `scripts/i18n.js`-mønstret).

| Underside | EN | தமிழ் (rigtig titel fra sitet) | Type |
|---|---|---|---|
| `/albums/` | Albums | **பாடல்கள்** | Musik/sang-tplng + afspiller |
| `/gallery/` | Gallery | **புகைப்படங்கள்** | Foto-galleri + lightbox |
| `/newspapers/` | Newspapers | **செய்தித்தாள்கள்** | Avisarkiv + PDF-læser |
| `/learn/` | Learn | **கற்றுணர்** | Lærings-stier / lektioner |
| `/tamil-peoples-name/` | Tamil people's name | **தமிழ் மக்கட்பெயர்** | Navne-database + søgning |

Genbrugte byggeklodser på tværs: `archive-hero` (sidehoved), `toolbar`/`chip`-filtre, `rail`-carousels, `fig`-duotone, kort-mønstre, pagination, `data-i18n`-nøgler.

---

## 1. Albums — `albums.html` (பாடல்கள்)
**Formål:** Tamilske sang-/musikalbum (Veera Vithaikal, Vanakam Maaveera, Veera Jaththirai, Purappadum Puthu Yugam, Maama Unn Kallaraiyil m.fl.).

- **Hero:** `archive-hero` med titel + antal album.
- **Grid:** album-kort (genbrug `book__cover`-mønstret som kvadratisk cover) — cover, titel, kunstner/år, spor-antal, hover-play.
- **Album-detalje (`album.html`):** stort cover + sticky **lyd-afspiller** (HTML5 `<audio>`), tracklist (nr, titel, varighed, play), beskrivelse, relaterede album.
- **Filtre:** type (sang/tale/podcast), tema, sprog.
- **Data pr. album:** `{ cover, title{en,ta}, artist, year, tracks[{title,duration,src}], description{en,ta} }`.
- **Nye komponenter:** `styles/albums.css`, `scripts/player.js` (afspiller + tracklist).

## 2. Gallery — `gallery.html` (புகைப்படங்கள்)
**Formål:** Foto-arkiv, organiseret i albums efter epoke/tema.

- **Hero** + filtre (epoke, tema, sted).
- **Masonry/bento-grid** af foto-albums (cover + titel + foto-antal) → klik åbner album.
- **Album-visning:** responsiv masonry af billeder med billedtekster.
- **Lightbox:** fuldskærm, tastatur (←/→/Esc), billedtekst + metadata, swipe på mobil, `prefers-reduced-motion`-venlig.
- **Data pr. billede:** `{ src, srcset, caption{en,ta}, date, place, credit }`.
- **Nye komponenter:** `styles/gallery.css`, `scripts/lightbox.js`. Tilgængelighed: `role="dialog"`, fokus-fælde, alt-tekster.

## 3. Newspapers — `newspapers.html` (செய்தித்தாள்கள்)
**Formål:** Scannede aviser/tidsskrifter fra 1841 og frem (knytter an til forsidens "press archive").

- **Hero** + filtre: **titel** (avisnavn), **årti** (tidslinje-chips: 1840'erne → 2020'erne), sprog.
- **To visninger:** (a) efter titel (avis → liste af numre), (b) kronologisk tidslinje.
- **Issue-kort:** forside-thumbnail, avisnavn, dato (ÅÅÅÅ-MM-DD), sidetal, sprog, "Læs"/PDF.
- **Reader-side (`paper.html`):** indlejret PDF-/billedfremviser, side-navigation, download, metadata-panel (proveniens — vigtigt for arkiv).
- **Data pr. nummer:** `{ thumb, title{en,ta}, date, pages, pdfUrl, language, provenance }`.
- **Nye komponenter:** `styles/newspapers.css`, `scripts/reader.js` (pdf.js-lignende fremviser).

## 4. Learn — `learn.html` (கற்றுணர்)
**Formål:** Strukturerede lærings-stier — tamilsk sprog, historie, skrift — i stedet for spredte artikler.

- **Hero** + intro.
- **Lærings-stier (paths):** kort med niveau (begynder/øvet), lektions-antal, fremdrift; fx "Tamilsk skrift", "Sangam-litteratur", "Læs en ola-suvadi".
- **Path-detalje (`path.html`):** lektionsliste (nummereret, status), mål, ressourcer/downloads, næste-knap.
- **Lektion (`lesson.html`):** indhold (tekst/lyd/billede), øvelse, "markér som læst" (localStorage).
- **Data:** `path { title{en,ta}, level, lessons[{title,type,duration,done}] }`.
- **Nye komponenter:** `styles/learn.css`, `scripts/progress.js` (fremdrift i localStorage).

## 5. Tamil people's name — `names.html` (தமிழ் மக்கட்பெயர்)
**Formål:** Søgbar database over tamilske personnavne med betydning.

- **Hero** + **stor søgning** (instant filter mens man skriver) som hovedelement.
- **Filtre:** køn (♀/♂/neutral), begyndelsesbogstav (தமிழ் alfabet-strip: அ ஆ இ …), tema/betydning.
- **Resultat-grid:** navnekort — **navn i tamilsk skrift** (stor, Noto Serif Tamil), translitteration, køn, **betydning** (tosproget), evt. udtale, "kopiér".
- **Navn-detalje (modal/side):** betydning, oprindelse, varianter, relaterede navne.
- **Data pr. navn:** `{ tamil, latin, gender, meaning{en,ta}, origin, variants[] }`. Drives af JSON/CSV (kan eksporteres fra deres eksisterende navne-tabel).
- **Nye komponenter:** `styles/names.css`, `scripts/names.js` (klientsøgning/filtrering + alfabet-strip).

---

## Fælles arbejde (alle 5)
1. Tilføj de 5 til hoved-nav (allerede i menuen) og opdatér aktive states.
2. Udvid `scripts/i18n.js` med side-specifikke nøgler (titlerne findes allerede).
3. Hver side: `archive-hero` + filtre + indholds-grid + tomtilstand + pagination — genbrug eksisterende klasser.
4. Verificér pr. side: 375→1440 uden overflow, EN/TA-skift, tastatur, kontrast (samme tjekliste som de 3 nuværende sider).

## Vej til WordPress (samme princip som hovedplanen)
- `albums.html` → `page-albums.php` / custom post type **album** (+ tracklist via ACF repeater).
- `gallery.html` → galleri via CPT **photo** eller eksisterende plugin; lightbox bevares.
- `newspapers.html` → CPT **newspaper** (dato, PDF-vedhæftning, titel-taxonomi).
- `learn.html` → CPT **lesson** + taxonomi **path**.
- `names.html` → CPT **name** eller en let DB-tabel + REST-endpoint til klientsøgning.
- Tosproget indhold: behold `qtranslate-x` (samme som i dag).

## Rækkefølge (forslag)
1. **Newspapers** + **Gallery** (mest visuelle, størst effekt, knytter til forsiden).
2. **Albums** (afspiller).
3. **Tamil Names** (søgning/data).
4. **Learn** (mest indholdsstruktur — kan vente til indholdet er klart).
