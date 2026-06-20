/* ============================================================
   TEL Library — bilingual engine (English ⇄ தமிழ்)
   Authentic strings: nav, sections, subpage names and the real
   article titles are taken from telibrary.com; UI/editorial lines
   are translated to natural, dignified Tamil.
   Elements opt in with data-i18n="key". HTML is allowed (own content).
   ============================================================ */
(() => {
  const STORE = "tel-lang";

  const DICT = {
    /* ---------- shared chrome ---------- */
    "topbar.today": { en: "On this day · <b>31 May 1981</b> — The burning of the Jaffna Public Library",
                      ta: "வரலாற்றில் இன்று · <b>31 மே 1981</b> — யாழ் பொது நூலகம் எரிக்கப்பட்ட நாள்" },
    "topbar.news":  { en: "Newspapers", ta: "செய்தித்தாள்கள்" },
    "topbar.pods":  { en: "Podcasts",   ta: "ஒலிப்பதிவுகள்" },
    "topbar.ebooks":{ en: "E-Books",    ta: "மின்னூல்கள்" },
    "topbar.photos":{ en: "Photo Archive", ta: "புகைப்படங்கள்" },

    "brand.sub":    { en: "TEL Library · Digital Archive", ta: "தமிழ் இணைய நூலகம்" },
    "home.title":   { en: "A Living Archive of Tamil Memory", ta: "தமிழ் நினைவின் உயிர்ப்பான நூலகம்" },

    "nav.history":  { en: "History of Tamils", ta: "தமிழின வரலாறு" },
    "nav.gallery":  { en: "Gallery",     ta: "புகைப்படங்கள்" },
    "nav.albums":   { en: "Albums",      ta: "பாடல்கள்" },
    "nav.news":     { en: "Newspapers",  ta: "செய்தித்தாள்கள்" },
    "nav.learn":    { en: "Learn",       ta: "கற்றுணர்" },
    "nav.names":    { en: "Tamil Names", ta: "தமிழ்ப் பெயர்கள்" },

    /* ---------- hero ---------- */
    "hero.kicker":  { en: "The Tamil diaspora's living archive",
                      ta: "தமிழ் புலம்பெயர் சமூகத்தின் உயிர்ப்பான நூலகம்" },
    "hero.title":   { en: "What was burned<br>can be <span class='accent'>remembered.</span>",
                      ta: "எரிந்தவற்றை<br>மீண்டும் <span class='accent'>நினைவுகூரலாம்.</span>" },
    "hero.lede":    { en: "A non-political home for Tamil history, language, culture and identity — rebuilt page by page after the fires of Jaffna. Read, listen, and add your own.",
                      ta: "தமிழ் வரலாறு, மொழி, பண்பாடு, அடையாளம் ஆகியவற்றுக்கான கட்சிசார்பற்ற இல்லம் — யாழ் நூலக எரிப்புக்குப் பின் பக்கம் பக்கமாக மீளக் கட்டப்படுகிறது. வாசியுங்கள், கேளுங்கள், உங்கள் பங்கையும் சேருங்கள்." },
    "hero.cta1":    { en: "Explore the archive", ta: "நூலகத்தை உலாவுங்கள்" },
    "hero.cta2":    { en: "Contribute material", ta: "ஆவணங்களை வழங்குங்கள்" },
    "hero.badge":   { en: "Featured collection", ta: "சிறப்புத் தொகுப்பு" },
    "hero.feat.kicker": { en: "Political History", ta: "அரசியல் வரலாறு" },
    "hero.feat.title":  { en: "Pandara Vanniyan &amp; the last Tamil resistance",
                          ta: "பண்டார வன்னியனும் இறுதித் தமிழ் எதிர்ப்பும்" },
    "stat.items":   { en: "Archived items", ta: "ஆவணங்கள்" },
    "stat.coll":    { en: "Collections", ta: "தொகுப்புகள்" },
    "stat.langs":   { en: "Languages", ta: "மொழிகள்" },
    "stat.since":   { en: "Curating since", ta: "தொடக்கம்" },

    /* ---------- mission / 1981 ---------- */
    "mission.sub":   { en: "The fire we answer", ta: "நாம் பதிலளிக்கும் தீ" },
    "mission.kicker":{ en: "Why this archive exists", ta: "இந்த நூலகம் ஏன் உள்ளது" },
    "mission.quote": { en: "On the night of 31 May 1981, the Jaffna Public Library was set ablaze. <strong>More than 97,000 books</strong>, palm-leaf manuscripts and 19th-century newspapers turned to ash — among the largest acts of cultural destruction in South Asia.",
                       ta: "1981 மே 31 இரவு, யாழ் பொது நூலகம் தீக்கிரையாக்கப்பட்டது. <strong>97,000க்கும் மேற்பட்ட நூல்கள்</strong>, ஓலைச் சுவடிகள், 19ஆம் நூற்றாண்டுச் செய்தித்தாள்கள் சாம்பலாயின — தென்னாசியாவின் மிகப்பெரிய பண்பாட்டு அழிப்புகளுள் ஒன்று." },
    "mission.text":  { en: "TEL Library was founded on the 40th anniversary of that loss. We cannot recover what burned — but we can make sure it is never lost again. Everything here is gathered, digitised and kept by volunteers across the diaspora.",
                       ta: "அந்த இழப்பின் 40ஆம் ஆண்டு நினைவாக இந்த நூலகம் தொடங்கப்பட்டது. எரிந்தவற்றை மீட்க முடியாது — ஆனால் இனி ஒருபோதும் இழக்கப்படாமல் பாதுகாக்க முடியும். இங்குள்ள அனைத்தும் புலம்பெயர் தன்னார்வலர்களால் சேகரிக்கப்பட்டு, இலக்கமயமாக்கப்பட்டுப் பேணப்படுகிறது." },
    "mission.cite":  { en: "A non-political, community-built record", ta: "கட்சிசார்பற்ற, சமூகத்தால் கட்டப்பட்ட பதிவு" },

    /* ---------- timeline ---------- */
    "tl.kicker": { en: "Browse by era", ta: "காலகட்டம் வாரியாக" },
    "tl.title":  { en: "Two thousand years, one timeline", ta: "இரண்டாயிரம் ஆண்டுகள், ஒரே காலக்கோடு" },
    "era.sangam.n":  { en: "Sangam Era", ta: "சங்க காலம்" },
    "era.sangam.d":  { en: "The classical age of Tamil poetry and the earliest literature.", ta: "தமிழ்க் கவிதையின் செம்மொழிக் காலமும் தொன்மையான இலக்கியமும்." },
    "era.chola.n":   { en: "Imperial Cholas", ta: "சோழப் பேரரசு" },
    "era.chola.d":   { en: "Chera, Chola and Pandya kingdoms across the seas.", ta: "சேர, சோழ, பாண்டிய அரசுகள் கடல் கடந்து." },
    "era.med.n":     { en: "Medieval Realms", ta: "இடைக்கால அரசுகள்" },
    "era.med.d":     { en: "Vijayanagara, Nayaks and the temple cities.", ta: "விஜயநகரம், நாயக்கர் மற்றும் கோயில் நகரங்கள்." },
    "era.col.n":     { en: "Colonial Period", ta: "காலனித்துவக் காலம்" },
    "era.col.d":     { en: "Portuguese, Dutch and British rule over the Tamil lands.", ta: "தமிழ் நிலங்களின் மீது போர்த்துகீச, டச்சு, பிரித்தானிய ஆட்சி." },
    "era.modern.n":  { en: "Modern Tamil Nadu", ta: "நவீன தமிழ்நாடு" },
    "era.modern.d":  { en: "Language movements, cinema, politics and renaissance.", ta: "மொழிப் போராட்டம், திரைப்படம், அரசியல், மறுமலர்ச்சி." },
    "era.eelam.n":   { en: "Tamil Eelam", ta: "தமிழீழம்" },
    "era.eelam.d":   { en: "The de facto state, the conflict and the diaspora.", ta: "நடைமுறை அரசு, போர் மற்றும் புலம்பெயர்வு." },
    "era.items":     { en: "items", ta: "ஆவணங்கள்" },

    /* ---------- collections ---------- */
    "coll.kicker": { en: "The six pillars", ta: "ஆறு தூண்கள்" },
    "coll.title":  { en: "Curated collections", ta: "தொகுக்கப்பட்ட தொகுப்புகள்" },
    "coll.all":    { en: "All collections", ta: "அனைத்தும்" },
    "coll.ancient.n": { en: "Ancient History", ta: "முந்தைய வரலாறு" },
    "coll.ancient.m": { en: "items · Archaeology &amp; origins", ta: "ஆவணங்கள் · தொல்லியல், தோற்றம்" },
    "coll.history.n": { en: "History of Tamils", ta: "தமிழின வரலாறு" },
    "coll.political.n": { en: "Political History", ta: "அரசியல் வரலாறு" },
    "coll.culture.n": { en: "Tamil Culture", ta: "தமிழர் பண்பாடு" },
    "coll.culture.m": { en: "items · Arts, music, faith &amp; martial traditions", ta: "ஆவணங்கள் · கலை, இசை, சமயம், தற்காப்பு" },
    "coll.language.n": { en: "Tamil Language", ta: "தமிழ் மொழி" },
    "coll.eelam.n":   { en: "Tamil Eelam", ta: "தமிழீழம்" },
    "coll.eelam.m":   { en: "De facto state", ta: "நடைமுறை அரசு" },

    /* ---------- latest (real bilingual titles) ---------- */
    "latest.kicker": { en: "Recently archived", ta: "சமீபத்தில் சேர்க்கப்பட்டவை" },
    "latest.title":  { en: "New to the collection", ta: "தொகுப்பில் புதியவை" },
    "latest.all":    { en: "All additions", ta: "அனைத்தும்" },
    "latest.lead.k": { en: "Political History · 14 June 2026", ta: "அரசியல் வரலாறு · 14 ஜூன் 2026" },
    "latest.lead.t": { en: "Violence descends upon peace", ta: "அமைதியின் மீது பாய்ந்த வன்முறை" },
    "latest.lead.d": { en: "A newly digitised dossier of testimonies, maps and press cuttings documents the years that reshaped the northern Vanni.",
                       ta: "சாட்சியங்கள், வரைபடங்கள், செய்தித்துணுக்குகள் அடங்கிய புதிதாக இலக்கமயமாக்கப்பட்ட ஆவணத் தொகுப்பு, வடக்கு வன்னியை மாற்றிய ஆண்டுகளைப் பதிவு செய்கிறது." },
    "latest.1": { en: "The rule of the Eelam Pandya kings of the Sangam age", ta: "சங்ககால ஈழத்துப் பாண்டியர்களின் ஆட்சி" },
    "latest.1m":{ en: "History · 12 June 2026", ta: "வரலாறு · 12 ஜூன் 2026" },
    "latest.2": { en: "Varma Kalai — the ancient martial and healing art", ta: "வர்மக்கலை — ஆதித் தமிழனின் தற்காப்பும் மருத்துவமும்" },
    "latest.2m":{ en: "Culture · 09 June 2026", ta: "பண்பாடு · 09 ஜூன் 2026" },
    "latest.3": { en: "How the Tamil people lived", ta: "எப்படி வாழ்ந்த இனம் தமிழினம்" },
    "latest.3m":{ en: "Culture · 06 June 2026", ta: "பண்பாடு · 06 ஜூன் 2026" },
    "latest.4": { en: "The rare statue of Ketu at Musée Guimet, Paris", ta: "பாரிஸ் கிமே அருங்காட்சியகத்தின் அரிய கேது சிலை" },
    "latest.4m":{ en: "History · 02 June 2026", ta: "வரலாறு · 02 ஜூன் 2026" },
    "latest.5": { en: "Towards our places — Nainativu", ta: "ஊர் நோக்கி — நயினாதீவு" },
    "latest.5m":{ en: "Political History · 31 May 2026", ta: "அரசியல் வரலாறு · 31 மே 2026" },

    /* ---------- media ---------- */
    "media.read.k":  { en: "Read", ta: "வாசிக்க" },
    "media.read.t":  { en: "E-Books &amp; rare texts", ta: "மின்னூல்களும் அரிய நூல்களும்" },
    "media.listen.k":{ en: "Listen", ta: "கேட்க" },
    "media.listen.t":{ en: "Podcasts &amp; music", ta: "ஒலிப்பதிவுகளும் இசையும்" },
    "book.1.t": { en: "Tamil Genocide", ta: "தமிழின அழிப்பு" },
    "book.2.t": { en: "Tamil Eelam: De Facto State", ta: "தமிழீழம்: நடைமுறை அரசு" },
    "book.3.t": { en: "Tamil Literature", ta: "தமிழ் இலக்கியம்" },
    "book.4.t": { en: "Tamil Medicine", ta: "தமிழ் மருத்துவம்" },
    "book.5.t": { en: "Sangam Poetry", ta: "சங்கக் கவிதை" },
    "book.6.t": { en: "Temple Inscriptions", ta: "கோயில் கல்வெட்டுகள்" },
    "book.author": { en: "Archive Series", ta: "காப்பகத் தொடர்" },
    "audio.1": { en: "Veera Vithaikal", ta: "வீர வித்தைகள்" },
    "audio.2": { en: "Vanakam Maaveera", ta: "வணக்கம் மாவீரா" },
    "audio.3": { en: "Veera Jaththirai", ta: "வீர யாத்திரை" },
    "audio.4": { en: "Purappadum Puthu Yugam", ta: "புறப்படும் புது யுகம்" },
    "audio.sub": { en: "Album", ta: "பாடல் தொகுப்பு" },
    "press.k": { en: "The press archive", ta: "செய்தித்தாள் காப்பகம்" },
    "press.t": { en: "Newspapers, restored from 1841 onward", ta: "1841 முதல் மீட்கப்பட்ட செய்தித்தாள்கள்" },
    "press.d": { en: "Out of the ashes of the 1981 fire, we are scanning the surviving runs of Tamil and Eelam newspapers — page by fragile page — and making them searchable.",
                 ta: "1981 தீயின் சாம்பலிலிருந்து, எஞ்சிய தமிழ், ஈழச் செய்தித்தாள்களை — ஒவ்வொரு மென்மையான பக்கமாக — வருடிப் பேணி, தேடக்கூடியதாக்குகிறோம்." },
    "press.btn": { en: "Open the press archive", ta: "காப்பகத்தைத் திறக்க" },

    /* ---------- contribute ---------- */
    "contrib.k": { en: "Help rebuild what was lost", ta: "இழந்ததை மீளக் கட்ட உதவுங்கள்" },
    "contrib.t": { en: "Do you hold a piece of Tamil memory?", ta: "உங்களிடம் தமிழ் நினைவின் ஒரு துண்டு உள்ளதா?" },
    "contrib.d": { en: "A photograph, a letter, a manuscript, a recording — every contribution widens the archive. Upload material or support the volunteers who keep it alive.",
                   ta: "ஒரு புகைப்படம், ஒரு கடிதம், ஒரு சுவடி, ஒரு ஒலிப்பதிவு — ஒவ்வொரு பங்களிப்பும் நூலகத்தை விரிவாக்குகிறது. ஆவணங்களைப் பதிவேற்றுங்கள் அல்லது அதைப் பேணும் தன்னார்வலர்களை ஆதரியுங்கள்." },
    "contrib.up": { en: "Upload material", ta: "ஆவணங்களைப் பதிவேற்று" },
    "contrib.sup":{ en: "Support us", ta: "எங்களை ஆதரியுங்கள்" },

    /* ---------- footer ---------- */
    "foot.mission": { en: "A non-political, diaspora-built archive of Tamil history, language and identity. <em>Founded in memory of the Jaffna Public Library.</em>",
                      ta: "தமிழ் வரலாறு, மொழி, அடையாளம் ஆகியவற்றின் கட்சிசார்பற்ற, புலம்பெயர் சமூகத்தால் கட்டப்பட்ட காப்பகம். <em>யாழ் பொது நூலகத்தின் நினைவாக நிறுவப்பட்டது.</em>" },
    "foot.coll":  { en: "Collections", ta: "தொகுப்புகள்" },
    "foot.media": { en: "Media", ta: "ஊடகம்" },
    "foot.lib":   { en: "The Library", ta: "நூலகம்" },
    "foot.about": { en: "About us", ta: "எம்மைப் பற்றி" },
    "foot.contrib": { en: "Contribute material", ta: "ஆவணங்களை வழங்க" },
    "foot.join":  { en: "Join us", ta: "எம்முடன் இணைக" },
    "foot.contact": { en: "Contact", ta: "தொடர்பு" },
    "foot.names": { en: "Tamil Name Database", ta: "தமிழ்ப் பெயர்த் தரவகம்" },
    "foot.bottom1": { en: "© 2026 Tamil Heritage · TEL Library — a community archive",
                      ta: "© 2026 தமிழ் மரபு · தமிழ் இணைய நூலகம் — ஒரு சமூகக் காப்பகம்" },
    "foot.bottom2": { en: "Redesign concept · built to become a WordPress theme",
                      ta: "மறுவடிவமைப்புக் கருத்துரு · WordPress தீம் ஆக மாறும் வகையில்" },

    /* ---------- article page ---------- */
    "a.crumb1": { en: "Archive", ta: "காப்பகம்" },
    "a.crumb2": { en: "Political History", ta: "அரசியல் வரலாறு" },
    "a.crumb3": { en: "Institutions", ta: "நிறுவனங்கள்" },
    "a.kicker": { en: "Political History · Institutions", ta: "அரசியல் வரலாறு · நிறுவனங்கள்" },
    "a.title":  { en: "The Jaffna Public Library", ta: "யாழ்ப்பாணப் பொது நூலகம்" },
    "a.standfirst": { en: "For half a century it was one of Asia's great centres of Tamil learning. In a single night in 1981, almost all of it was gone. This is the record of what stood, what was lost, and what has been rebuilt.",
                     ta: "அரை நூற்றாண்டுக்கு அது ஆசியாவின் தலைசிறந்த தமிழ்க் கல்வி மையங்களுள் ஒன்றாக இருந்தது. 1981இன் ஒரே இரவில், அதன் அனைத்தும் கிட்டத்தட்ட அழிந்தது. நின்றது, இழந்தது, மீளக் கட்டப்பட்டது — இதன் பதிவு இது." },
    "a.by1": { en: "Compiled by <strong>TEL Editorial Collective</strong>", ta: "<strong>TEL ஆசிரியர் குழு</strong> தொகுத்தது" },
    "a.by2": { en: "Updated 31 May 2026", ta: "புதுப்பிப்பு 31 மே 2026" },
    "a.by3": { en: "14 min read", ta: "14 நிமிட வாசிப்பு" },
    "a.cap":  { en: "<b>The Jaffna Public Library, northern Sri Lanka.</b> First opened in 1933 and expanded through the 1950s, it held one of the richest collections of Tamil-language material in the world. <i>Tamil Heritage archive.</i>",
                ta: "<b>யாழ்ப்பாணப் பொது நூலகம், வடக்கு இலங்கை.</b> 1933இல் முதன்முதலில் திறக்கப்பட்டு 1950களில் விரிவாக்கப்பட்ட இது, உலகின் செழுமையான தமிழ்மொழி ஆவணத் தொகுப்புகளுள் ஒன்றைக் கொண்டிருந்தது. <i>தமிழ் மரபு காப்பகம்.</i>" },
    "a.p1": { en: "The Jaffna Public Library began, as many great libraries do, with a private collection. In 1933 a modest reading room opened in the heart of the city; within a generation it had grown into a monumental white building whose reading halls drew scholars from across the Tamil-speaking world. By the late 1970s it housed more than ninety-seven thousand volumes.",
              ta: "பல பெரிய நூலகங்களைப் போலவே, யாழ்ப்பாணப் பொது நூலகமும் ஒரு தனிப்பட்ட சேகரிப்பாகத் தொடங்கியது. 1933இல் நகரின் மையத்தில் ஒரு சிறிய வாசிப்பறை திறக்கப்பட்டது; ஒரு தலைமுறைக்குள் அது ஒரு பிரம்மாண்டமான வெண்மாளிகையாக வளர்ந்தது; அதன் வாசிப்பு மண்டபங்கள் தமிழ் கூறும் உலகெங்கிலுமிருந்து அறிஞர்களை ஈர்த்தன. 1970களின் இறுதியில் அது தொண்ணூற்றேழாயிரத்துக்கும் மேற்பட்ட நூல்களைக் கொண்டிருந்தது." },
    "a.h1": { en: "A centre of learning", ta: "கல்வியின் மையம்" },
    "a.p2": { en: "The library was never only a building. It was an argument — that Tamil knowledge deserved to be gathered, catalogued and read with the same seriousness as any literature on earth. Its collection of ola (palm-leaf) manuscripts was studied by researchers who travelled great distances simply to read a single leaf.",
              ta: "அந்த நூலகம் ஒருபோதும் வெறும் கட்டடம் மட்டுமல்ல. அது ஒரு கூற்று — தமிழ் அறிவு, உலகின் எந்த இலக்கியத்துக்கும் நிகரான தீவிரத்துடன் சேகரிக்கப்பட்டு, வகைப்படுத்தப்பட்டு, வாசிக்கப்பட வேண்டும் என்ற கூற்று. அதன் ஓலைச் சுவடித் தொகுப்பை, ஒரே ஓலையை வாசிப்பதற்காகவே நெடுந்தொலைவு பயணித்த ஆய்வாளர்கள் கற்றனர்." },
    "a.pq": { en: "“The burning of the library was not an attack on a building. It was an attack on memory itself.”",
              ta: "“நூலகத்தின் எரிப்பு ஒரு கட்டடத்தின் மீதான தாக்குதல் அல்ல. அது நினைவின் மீதான தாக்குதல்.”" },
    "a.pqc":{ en: "— Contemporary account, reproduced in the TEL archive", ta: "— அக்கால ஆவணம், TEL காப்பகத்தில் மீள்பதிவு" },
    "a.p3": { en: "On the night of 31 May 1981, the building was set on fire. By morning the reading halls were gutted and the collection was almost entirely destroyed. The loss is counted among the most severe single acts of cultural destruction in twentieth-century South Asia.",
              ta: "1981 மே 31 இரவு, அக்கட்டடம் தீ வைக்கப்பட்டது. காலையில் வாசிப்பு மண்டபங்கள் எரிந்து சாம்பலாகின; தொகுப்பு கிட்டத்தட்ட முழுமையாக அழிந்தது. இருபதாம் நூற்றாண்டுத் தென்னாசியாவின் மிகக் கடுமையான பண்பாட்டு அழிப்புகளுள் ஒன்றாக இந்த இழப்பு கருதப்படுகிறது." },
    "a.cap2": { en: "Surviving fragments and reconstructed catalogue cards, digitised by volunteers.", ta: "எஞ்சிய துண்டுகளும் மீளமைக்கப்பட்ட பட்டியல் அட்டைகளும், தன்னார்வலர்களால் இலக்கமயமாக்கப்பட்டவை." },
    "a.h2": { en: "Rebuilding", ta: "மீளக் கட்டுதல்" },
    "a.p4": { en: "The physical library was eventually restored and reopened. But the collection — the manuscripts, the newspapers, the irreplaceable papers — could not simply be replaced. It is this absence that TEL Library exists to address: to gather, digitise and safeguard whatever survives, wherever it survives, so that destruction can never again mean disappearance.",
              ta: "கட்டடம் இறுதியில் புதுப்பிக்கப்பட்டு மீண்டும் திறக்கப்பட்டது. ஆனால் தொகுப்பை — சுவடிகள், செய்தித்தாள்கள், ஈடுசெய்ய முடியாத ஆவணங்கள் — அவ்வளவு எளிதாக மீளப் பெற முடியாது. இந்த இல்லாமையை எதிர்கொள்ளவே TEL நூலகம் உள்ளது: எஞ்சியவற்றை, எங்கிருந்தாலும், சேகரித்து, இலக்கமயமாக்கி, பாதுகாத்தல் — அழிப்பு இனி ஒருபோதும் மறைவைக் குறிக்காதிருக்க." },
    "a.p5": { en: "This entry is itself part of that work. Every document linked here has been contributed, verified and preserved by the community.",
              ta: "இந்தப் பதிவும் அந்தப் பணியின் ஒரு பகுதியே. இங்கு இணைக்கப்பட்ட ஒவ்வொரு ஆவணமும் சமூகத்தால் வழங்கப்பட்டு, சரிபார்க்கப்பட்டு, பாதுகாக்கப்பட்டுள்ளது." },
    "a.src": { en: "Sources &amp; provenance", ta: "மூலங்களும் வரலாறும்" },
    "a.s1": { en: "Contemporary press reports, 1981 (digitised from microfilm, TEL press archive).", ta: "அக்காலச் செய்தித்தாள் அறிக்கைகள், 1981 (நுண்படத்திலிருந்து இலக்கமயம், TEL செய்தி காப்பகம்)." },
    "a.s2": { en: "Survivor testimonies collected by the TEL oral-history project, 2021–2024.", ta: "TEL வாய்மொழி வரலாற்றுத் திட்டத்தால் சேகரிக்கப்பட்ட எஞ்சியோர் சாட்சியங்கள், 2021–2024." },
    "a.s3": { en: "Catalogue reconstructions, Jaffna Public Library cataloguing notes.", ta: "பட்டியல் மீளமைப்புகள், யாழ் பொது நூலகப் பட்டியல் குறிப்புகள்." },
    "a.cat": { en: "Catalogue record", ta: "பட்டியல் பதிவு" },
    "a.cat.coll": { en: "Collection", ta: "தொகுப்பு" },
    "a.cat.type": { en: "Type", ta: "வகை" },
    "a.cat.type.v": { en: "Long-form entry", ta: "விரிவான பதிவு" },
    "a.cat.era": { en: "Era", ta: "காலம்" },
    "a.cat.place": { en: "Place", ta: "இடம்" },
    "a.cat.place.v": { en: "Jaffna, Sri Lanka", ta: "யாழ்ப்பாணம், இலங்கை" },
    "a.cat.langs": { en: "Languages", ta: "மொழிகள்" },
    "a.cat.added": { en: "Added", ta: "சேர்க்கப்பட்டது" },
    "a.inthis": { en: "In this entry", ta: "இப்பதிவில்" },
    "a.docs": { en: "3 documents", ta: "3 ஆவணங்கள்" },
    "a.photos": { en: "2 photographs", ta: "2 புகைப்படங்கள்" },
    "a.testi": { en: "1 oral testimony", ta: "1 வாய்மொழிச் சாட்சி" },
    "a.rel.k": { en: "Continue in the archive", ta: "காப்பகத்தில் தொடரவும்" },
    "a.rel.t": { en: "Related entries", ta: "தொடர்புடைய பதிவுகள்" },
    "a.rel1": { en: "Arumuga Navalar and the Tamil revival", ta: "ஆறுமுக நாவலரும் தமிழ் மறுமலர்ச்சியும்" },
    "a.rel1m":{ en: "Language · 6 min", ta: "மொழி · 6 நிமிடம்" },
    "a.rel2": { en: "The press of the north, 1841–1981", ta: "வடக்கின் செய்தித்தாள்கள், 1841–1981" },
    "a.rel2m":{ en: "Political History · 9 min", ta: "அரசியல் வரலாறு · 9 நிமிடம்" },
    "a.rel3": { en: "Ola manuscripts: reading a thousand-year-old leaf", ta: "ஓலைச் சுவடிகள்: ஆயிரம் ஆண்டு ஓலையை வாசித்தல்" },
    "a.rel3m":{ en: "Culture · 11 min", ta: "பண்பாடு · 11 நிமிடம்" },
    "a.readta": { en: "Read in Tamil", ta: "ஆங்கிலத்தில் படிக்க" },

    /* ---------- archive page ---------- */
    "ar.kicker": { en: "Collection", ta: "தொகுப்பு" },
    "ar.title":  { en: "Political History", ta: "அரசியல் வரலாறு" },
    "ar.desc":   { en: "Governance, resistance, human-rights documentation and the record of the Tamil Eelam de facto state — gathered from testimony, press and primary documents.",
                   ta: "ஆட்சி, எதிர்ப்பு, மனித உரிமை ஆவணப்படுத்தல், தமிழீழ நடைமுறை அரசின் பதிவு — சாட்சியம், செய்தித்தாள், மூல ஆவணங்களிலிருந்து சேகரிக்கப்பட்டது." },
    "ar.count":  { en: "Entries in this collection", ta: "இத்தொகுப்பில் உள்ள பதிவுகள்" },
    "ar.f.era":  { en: "Era", ta: "காலம்" },
    "ar.f.type": { en: "Type", ta: "வகை" },
    "ar.all":    { en: "All", ta: "அனைத்தும்" },
    "ar.era.colonial": { en: "Colonial", ta: "காலனித்துவம்" },
    "ar.era.postwar":  { en: "Post-war", ta: "போருக்குப் பின்" },
    "ar.f.articles": { en: "Articles", ta: "கட்டுரைகள்" },
    "ar.f.ebooks":   { en: "E-Books", ta: "மின்னூல்கள்" },
    "ar.f.audio":    { en: "Audio", ta: "ஒலி" },
    "ar.f.photos":   { en: "Photos", ta: "படங்கள்" },
    "ar.sort.chrono":{ en: "Chronological (oldest)", ta: "காலவரிசை · பழையவை" },
    "ar.sort.recent":{ en: "Most recent", ta: "சமீபத்தியது" },
    "ar.sort.added": { en: "Recently added", ta: "சமீபத்தில் சேர்க்கப்பட்டது" },
    "ar.sort.az":    { en: "A–Z", ta: "அ–ஃ" },
    "ar.t.article": { en: "Article", ta: "கட்டுரை" },
    "ar.t.ebook":   { en: "E-Book", ta: "மின்னூல்" },
    "ar.t.audio":   { en: "Audio", ta: "ஒலி" },
    "ar.t.photos":  { en: "Photos", ta: "படங்கள்" },
    "ar.e1.t": { en: "The Jaffna Public Library", ta: "யாழ்ப்பாணப் பொது நூலகம்" },
    "ar.e1.d": { en: "One of Asia's great centres of Tamil learning, and the night that changed everything.", ta: "ஆசியாவின் தலைசிறந்த தமிழ்க் கல்வி மையங்களுள் ஒன்று, அனைத்தையும் மாற்றிய அந்த இரவு." },
    "ar.e2.t": { en: "The de facto state: administration of Tamil Eelam", ta: "நடைமுறை அரசு: தமிழீழத்தின் நிர்வாகம்" },
    "ar.e2.d": { en: "Departments, courts and civil structures documented from primary records.", ta: "துறைகள், நீதிமன்றங்கள், சிவில் அமைப்புகள் மூல ஆவணங்களிலிருந்து பதிவு செய்யப்பட்டவை." },
    "ar.e3.t": { en: "Tamil Genocide: a documentary record", ta: "தமிழின அழிப்பு: ஓர் ஆவணப் பதிவு" },
    "ar.e3.d": { en: "A compiled volume of testimony, dates and corroborating sources.", ta: "சாட்சியம், திகதிகள், உறுதிப்படுத்தும் மூலங்கள் அடங்கிய தொகுப்பு நூல்." },
    "ar.e4.t": { en: "The Kilinochchi massacres", ta: "கிளிநொச்சிப் படுகொலைகள்" },
    "ar.e4.d": { en: "Reconstructing the years in the northern Vanni from dispersed records.", ta: "சிதறிய பதிவுகளிலிருந்து வடக்கு வன்னியின் ஆண்டுகளை மீளமைத்தல்." },
    "ar.e5.t": { en: "Voices from the north: a survivor testimony", ta: "வடக்கின் குரல்கள்: ஒரு எஞ்சியோர் சாட்சி" },
    "ar.e5.d": { en: "Recorded by the TEL oral-history project, 2023.", ta: "TEL வாய்மொழி வரலாற்றுத் திட்டத்தால் பதிவு செய்யப்பட்டது, 2023." },
    "ar.e6.t": { en: "The press of the north, 1841–1981", ta: "வடக்கின் செய்தித்தாள்கள், 1841–1981" },
    "ar.e6.d": { en: "Mastheads and front pages from a century and a half of Tamil journalism.", ta: "ஒன்றரை நூற்றாண்டுத் தமிழ்ப் பத்திரிகையின் தலைப்புகளும் முதற் பக்கங்களும்." },
    "ar.e7.t": { en: "Tamil Eelam: structures of a de facto state", ta: "தமிழீழம்: நடைமுறை அரசின் அமைப்புகள்" },
    "ar.e7.d": { en: "An archival study of governance under extraordinary conditions.", ta: "அசாதாரண சூழ்நிலைகளில் ஆட்சி பற்றிய ஒரு காப்பக ஆய்வு." },
    "ar.e8.t": { en: "Pandara Vanniyan &amp; the last resistance", ta: "பண்டார வன்னியனும் இறுதி எதிர்ப்பும்" },
    "ar.e8.d": { en: "The Vanni chieftain who fought the British to the end.", ta: "பிரித்தானியரை இறுதிவரை எதிர்த்துப் போரிட்ட வன்னித் தலைவன்." },
    "ar.e9.t": { en: "Memorialisation and the politics of memory", ta: "நினைவுகூரலும் நினைவின் அரசியலும்" },
    "ar.e9.d": { en: "How a community records what others would prefer forgotten.", ta: "மறக்கப்பட வேண்டுமென பிறர் விரும்புவதை ஒரு சமூகம் எப்படிப் பதிவு செய்கிறது." },

    /* ---------- subpage: Albums ---------- */
    "alb.k": { en: "Listen", ta: "கேட்க" },
    "alb.title": { en: "Albums", ta: "பாடல்கள்" },
    "alb.desc": { en: "Songs of remembrance, struggle and heritage — recordings preserved and streamed from the diaspora.", ta: "நினைவு, போராட்டம், மரபின் பாடல்கள் — புலம்பெயர் சமூகத்தால் பேணிப் பகிரப்படும் ஒலிப்பதிவுகள்." },
    "alb.count": { en: "albums in the collection", ta: "பாடல் தொகுப்புகள்" },
    "alb.tracks": { en: "tracks", ta: "பாடல்கள்" },
    "alb.playall": { en: "Play album", ta: "தொகுப்பை இயக்கு" },
    "alb.nowplaying": { en: "Now playing", ta: "இப்போது இயங்குகிறது" },

    /* ---------- subpage: Gallery ---------- */
    "gal.k": { en: "Photo archive", ta: "புகைப்பட காப்பகம்" },
    "gal.title": { en: "Gallery", ta: "புகைப்படங்கள்" },
    "gal.desc": { en: "Photographs of people, places and events — organised into albums across eras and themes.", ta: "மக்கள், இடங்கள், நிகழ்வுகளின் புகைப்படங்கள் — காலங்கள், கருப்பொருள்கள் வாரியாக தொகுக்கப்பட்டவை." },
    "gal.count": { en: "albums · 4,210 photographs", ta: "தொகுப்புகள் · 4,210 புகைப்படங்கள்" },
    "gal.photos": { en: "photos", ta: "படங்கள்" },
    "gal.close": { en: "Close", ta: "மூடு" },

    /* ---------- subpage: Newspapers ---------- */
    "np.k": { en: "The press archive", ta: "செய்தித்தாள் காப்பகம்" },
    "np.title": { en: "Newspapers", ta: "செய்தித்தாள்கள்" },
    "np.desc": { en: "Surviving runs of Tamil and Eelam newspapers, scanned page by page and made searchable — from 1841 onward.", ta: "எஞ்சிய தமிழ், ஈழச் செய்தித்தாள்கள், பக்கம் பக்கமாக வருடப்பட்டு தேடக்கூடியதாக்கப்பட்டவை — 1841 முதல்." },
    "np.count": { en: "issues digitised", ta: "இலக்கமயமாக்கப்பட்ட இதழ்கள்" },
    "np.f.decade": { en: "Decade", ta: "தசாப்தம்" },
    "np.read": { en: "Read", ta: "படிக்க" },
    "np.pages": { en: "pages", ta: "பக்கங்கள்" },

    /* ---------- subpage: Learn ---------- */
    "lrn.k": { en: "Learn", ta: "கற்றுணர்" },
    "lrn.title": { en: "Learn Tamil heritage", ta: "தமிழ் மரபைக் கற்றுணர்" },
    "lrn.desc": { en: "Guided paths through the Tamil script, classical literature and history — for learners at every level.", ta: "தமிழ் எழுத்து, செம்மொழி இலக்கியம், வரலாறு வழியான வழிகாட்டப்பட்ட பாதைகள் — அனைத்து நிலை கற்போருக்கும்." },
    "lrn.count": { en: "learning paths", ta: "கற்றல் பாதைகள்" },
    "lrn.start": { en: "Start path", ta: "பாதையைத் தொடங்கு" },
    "lrn.lessons": { en: "lessons", ta: "பாடங்கள்" },
    "lrn.lvl.beg": { en: "Beginner", ta: "தொடக்கநிலை" },
    "lrn.lvl.int": { en: "Intermediate", ta: "இடைநிலை" },
    "lrn.lvl.adv": { en: "Advanced", ta: "மேல்நிலை" },
    "lrn.p1.t": { en: "The Tamil script, letter by letter", ta: "தமிழ் எழுத்து, எழுத்தெழுத்தாக" },
    "lrn.p1.d": { en: "Vowels, consonants and the uyirmei grid — read and write your first words.", ta: "உயிர், மெய் எழுத்துகளும் உயிர்மெய் அட்டவணையும் — முதல் சொற்களை வாசித்து எழுதுக." },
    "lrn.p2.t": { en: "Reading the Sangam poets", ta: "சங்கப் புலவர்களை வாசித்தல்" },
    "lrn.p2.d": { en: "An introduction to classical Tamil literature and its forms.", ta: "செம்மொழித் தமிழ் இலக்கியத்துக்கும் அதன் வடிவங்களுக்கும் ஓர் அறிமுகம்." },
    "lrn.p3.t": { en: "A history of the Tamils", ta: "தமிழரின் வரலாறு" },
    "lrn.p3.d": { en: "From the Sangam age to the modern diaspora, in twelve lessons.", ta: "சங்க காலம் முதல் நவீன புலம்பெயர்வு வரை, பன்னிரண்டு பாடங்களில்." },
    "lrn.p4.t": { en: "Reading an ola manuscript", ta: "ஓலைச் சுவடி வாசித்தல்" },
    "lrn.p4.d": { en: "How palm-leaf documents were written, preserved and read.", ta: "ஓலை ஆவணங்கள் எவ்வாறு எழுதப்பட்டு, பேணப்பட்டு, வாசிக்கப்பட்டன." },

    /* ---------- subpage: Tamil Names ---------- */
    "nm.k": { en: "Name database", ta: "பெயர்த் தரவகம்" },
    "nm.title": { en: "Tamil Names", ta: "தமிழ்ப் பெயர்கள்" },
    "nm.desc": { en: "A searchable record of Tamil names and their meanings — chosen with care across generations.", ta: "தமிழ்ப் பெயர்களும் அவற்றின் பொருளும் கொண்ட தேடக்கூடிய பதிவு — தலைமுறைகளாக கவனத்துடன் தேர்ந்தவை." },
    "nm.count": { en: "names recorded", ta: "பதிவு செய்யப்பட்ட பெயர்கள்" },
    "nm.search": { en: "Search a name or meaning…", ta: "பெயர் அல்லது பொருளைத் தேடுக…" },
    "nm.g.all": { en: "All", ta: "அனைத்தும்" },
    "nm.g.f": { en: "Girl", ta: "பெண்" },
    "nm.g.m": { en: "Boy", ta: "ஆண்" },
    "nm.g.u": { en: "Unisex", ta: "பொது" },
    "nm.meaning": { en: "Meaning", ta: "பொருள்" },
    "nm.empty": { en: "No names match your search.", ta: "உங்கள் தேடலுக்குப் பொருந்தும் பெயர்கள் இல்லை." },
  };

  const apply = (lang) => {
    const isTa = lang === "ta";
    document.documentElement.lang = isTa ? "ta" : "en";
    document.documentElement.classList.toggle("ta", isTa);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const entry = DICT[el.getAttribute("data-i18n")];
      if (entry && entry[lang] != null) el.innerHTML = entry[lang];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const entry = DICT[el.getAttribute("data-i18n-ph")];
      if (entry && entry[lang] != null) el.setAttribute("placeholder", entry[lang]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const entry = DICT[el.getAttribute("data-i18n-aria")];
      if (entry && entry[lang] != null) el.setAttribute("aria-label", entry[lang]);
    });
    const tk = document.body && document.body.dataset.titleKey;
    if (tk && DICT[tk] && DICT[tk][lang]) {
      document.title = DICT[tk][lang] + (isTa ? " · தமிழ் மரபு" : " · Tamil Heritage");
    }
    document.querySelectorAll("[data-lang] button").forEach((b) => {
      const on = b.dataset.set === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  };

  // Bind toggle buttons
  document.querySelectorAll("[data-lang] button").forEach((b) =>
    b.addEventListener("click", () => apply(b.dataset.set))
  );
  // Inline "read in the other language" links
  document.querySelectorAll("[data-lang-cycle]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      apply(document.documentElement.classList.contains("ta") ? "en" : "ta");
    })
  );

  // Initial language: stored → <html lang> → 'en'
  let initial = "en";
  try { initial = localStorage.getItem(STORE) || initial; } catch (e) {}
  apply(initial);
})();
