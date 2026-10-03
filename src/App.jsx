import MicroSlats from './components/MicroSlats';

const CATEGORIES = [
  {
    code: 'AC',
    title: 'Air Conditioning Parts',
    blurb: 'Compressors, capacitors, sensors, valves, and more.',
    img: '/products/ac.jpg',
    tone: 'cyan'
  },
  {
    code: 'REF',
    title: 'Refrigeration Components',
    blurb: 'Parts for refrigeration and cooling systems.',
    img: '/products/ref.jpg',
    tone: 'blue'
  },
  {
    code: 'CU',
    title: 'Copper Tubes & Fittings',
    blurb: 'Installation materials for professional contractors.',
    img: '/products/cu.jpg',
    tone: 'orange'
  },
  {
    code: 'ELEC',
    title: 'Electrical Components',
    blurb: 'Wiring accessories, relays, breakers, and controls.',
    img: '/products/elec.jpg',
    tone: 'yellow'
  },
  {
    code: 'INS',
    title: 'Installation Materials',
    blurb: 'Insulation, mounting accessories, and consumables.',
    img: '/products/ins.jpg',
    tone: 'pink'
  },
  {
    code: 'TLS',
    title: 'Tools & Accessories',
    blurb: 'Equipment and accessories for installation teams.',
    img: '/products/tls.jpg',
    tone: 'lime'
  },
  {
    code: 'FLT',
    title: 'Industrial Air Filters',
    blurb: 'HEPA and V-Bank air filtration for factories, offices and commercial buildings across Thailand.',
    img: '/products/flt.jpg',
    tone: 'purple'
  },
  {
    code: 'SIL',
    title: 'ADB Silicone Sealant',
    blurb: 'ADB-brand cartridges — GP, General Purpose, Glass & Aquarium and All Purpose — permanently flexible, high-strength silicone for factory and installation work.',
    img: '/products/sil.jpg',
    tone: 'red'
  }
];

const STATS = [
  { big: '2023', small: 'FOUNDED' },
  { big: 'B2B', small: 'WHOLESALE' },
  { big: 'TH', small: 'NATIONWIDE' },
  { big: '100%', small: 'PRO SUPPORT' }
];

const ABOUT = [
  {
    n: '01',
    label: 'WHO WE ARE',
    title: 'A dedicated B2B supplier',
    body: 'ATD Supply Co., Ltd. is a B2B supplier focused on HVAC and refrigeration components.'
  },
  {
    n: '02',
    label: 'WHAT WE DO',
    title: 'Sourced from trusted makers',
    body: 'We source products from trusted manufacturers and supply contractors and installation companies.'
  },
  {
    n: '03',
    label: 'OUR GOAL',
    title: 'A dependable partner',
    body: 'To be a dependable business partner with reliable inventory and responsive service.'
  }
];

const MARQUEE_A = [
  'RELIABLE HVAC PARTS',
  '🔥',
  'TRUSTED BUSINESS PARTNER',
  '❄️',
  'EST. 2023',
  '⚡',
  'BANGKOK · NATIONWIDE',
  '🧊',
  'WHOLESALE · B2B',
  '🛠️'
];

const MARQUEE_B = [
  'COMPRESSORS',
  '★',
  'CAPACITORS',
  '★',
  'COPPER TUBES',
  '★',
  'VALVES',
  '★',
  'SENSORS',
  '★',
  'HEPA FILTERS',
  '★',
  'SILICONE SEALANT',
  '★',
  'RELAYS & BREAKERS',
  '★'
];

function Marquee({ items, reverse = false, tone = 'ink', sticky = false }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className={`marquee marquee--${tone} ${sticky ? 'marquee--sticky' : ''}`}>
      <div className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SlatStrip({ tone }) {
  return <div className={`slat-strip slat-strip--${tone}`} aria-hidden="true" />;
}

function App() {
  return (
    <div className="site">
      <Marquee items={MARQUEE_A} tone="yellow" sticky />

      {/* ================= HERO ================= */}
      <header className="hero" id="top">
        <div className="hero__slats">
          <MicroSlats
            preset="storm"
            color="#38E1FF"
            glintColor="#FFFFFF"
            backgroundColor="#070B1E"
            slatWidth={11}
            slatHeight={26}
            gap={4}
            roundness={0.8}
            interactive
            cursorStrength={1.2}
            cursorSize={48}
            swirl={0.6}
            trail={1.6}
            lean={0.5}
            intro
            introDuration={1.8}
          />
        </div>

        <nav className="hero__nav">
          <a className="hero__logo" href="#top">
            ATD<span>SUPPLY</span>
          </a>
          <div className="hero__nav-links">
            <a href="#about">ABOUT</a>
            <a href="#products">PRODUCTS</a>
            <a href="#contact">CONTACT</a>
          </div>
          <a className="btn btn--lime btn--nav" href="#contact">
            CONTACT SALES →
          </a>
        </nav>

        <div className="hero__body">
          <div className="hero__badges">
            <span className="badge badge--pink rotate-left">EST. 2023</span>
            <span className="badge badge--lime rotate-right">BANGKOK, TH 🇹🇭</span>
            <span className="badge badge--yellow rotate-left">B2B WHOLESALE</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__line hero__line--stroke">ATD</span>
            <span className="hero__line hero__line--fill">SUPPLY</span>
            <span className="hero__line hero__line--outline">CO., LTD.</span>
          </h1>

          <p className="hero__kicker"> hvac + refrigeration parts • ชิ้นส่วนแอร์และทำความเย็น </p>

          <p className="hero__lede">
            Supplying quality air-conditioning and refrigeration components to{' '}
            <mark>contractors, installers and businesses</mark> across Thailand.
          </p>

          <div className="hero__cta">
            <a className="btn btn--pink" href="#products">
              EXPLORE PRODUCTS ↓
            </a>
            <a className="btn btn--cyan" href="#contact">
              CONTACT SALES
            </a>
          </div>
        </div>

        <div className="hero__ticker-wrap">
          <Marquee items={MARQUEE_B} tone="ink" reverse />
        </div>
      </header>

      {/* ================= STATS ================= */}
      <section className="stats" aria-label="Company facts">
        {STATS.map((s, i) => (
          <div className={`stats__cell stats__cell--${i}`} key={s.small}>
            <div className="stats__big">{s.big}</div>
            <div className="stats__small">{s.small}</div>
          </div>
        ))}
      </section>

      <SlatStrip tone="a" />

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">
        <div className="section-head">
          <span className="section-head__eyebrow">◎ ABOUT US</span>
          <h2 className="section-head__title">
            SOURCED RIGHT.
            <br />
            <span className="hl-yellow">SUPPLIED RELIABLY.</span>
          </h2>
          <p className="section-head__sub">Eight categories, one counter. Everything a contractor or installer needs.</p>
        </div>

        <figure className="about__photo">
          <img
            src="/technician-gauges.jpg"
            alt="Technician checking refrigeration manifold gauges on an AC unit"
            loading="lazy"
          />
          <figcaption className="about__photo-cap">
            ON THE JOB — manifold gauge check 🔧
          </figcaption>
          <span className="about__photo-sticker rotate-right">FIELD-TESTED PARTS</span>
        </figure>

        <div className="about__grid">
          {ABOUT.map(card => (
            <article className="about__card" key={card.n}>
              <div className="about__num">{card.n}</div>
              <div className="about__label">{card.label}</div>
              <h3 className="about__title">{card.title}</h3>
              <p className="about__body">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Marquee items={MARQUEE_B} tone="pink" />

      {/* ================= PRODUCTS ================= */}
      <section className="products" id="products">
        <div className="section-head section-head--center">
          <span className="section-head__eyebrow">◆ WHAT WE SUPPLY</span>
          <h2 className="section-head__title">
            8 CATEGORIES. <span className="hl-cyan">ONE COUNTER.</span>
          </h2>
          <p className="section-head__sub">In stock and ready to move — from compressors to sealant.</p>
        </div>

        <div className="products__grid">
          {CATEGORIES.map((c, i) => (
            <article className={`card card--${c.tone}`} key={c.code} style={{ '--i': i }}>
              <div className="card__code">{c.code}</div>
              <div className="card__media">
                <img src={c.img} alt={c.title} loading="lazy" />
              </div>
              <h3 className="card__title">{c.title}</h3>
              <p className="card__blurb">{c.blurb}</p>
              <a className="card__link" href="#contact">
                GET A QUOTE →
              </a>
            </article>
          ))}
        </div>

        <div className="products__sticker rotate-right">
          drag to rotate
          <br />
          <strong>→ ASK FOR BULK PRICES</strong>
        </div>
      </section>

      <SlatStrip tone="b" />

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">
        <div className="section-head">
          <span className="section-head__eyebrow">☎ GET IN TOUCH</span>
          <h2 className="section-head__title">
            TALK TO <span className="hl-pink">SALES.</span>
          </h2>
        </div>

        <div className="contact__grid">
          <a className="contact__tile contact__tile--address" href="https://maps.google.com/?q=71/119+Soi+Ramkhamhaeng+164+Min+Buri+Bangkok+10510" target="_blank" rel="noreferrer">
            <span className="contact__label">📍 ADDRESS</span>
            <span className="contact__value">
              71/119 Soi Ramkhamhaeng 164,
              <br />
              Min Buri, Bangkok 10510
            </span>
            <span className="contact__hint">OPEN IN MAPS ↗</span>
          </a>

          <a className="contact__tile contact__tile--phone" href="tel:0641858978">
            <span className="contact__label">📞 PHONE</span>
            <span className="contact__value contact__value--big">064-185-8978</span>
            <span className="contact__hint">CALL NOW ↗</span>
          </a>

          <a className="contact__tile contact__tile--line" href="https://line.me/R/ti/p/@atdsupply7555" target="_blank" rel="noreferrer">
            <span className="contact__label">💬 LINE</span>
            <span className="contact__value contact__value--big">@atdsupply7555</span>
            <span className="contact__hint">MESSAGE US ↗</span>
          </a>

          <a className="contact__tile contact__tile--mail" href="mailto:sales@atdsupply.co.th">
            <span className="contact__label">✉️ EMAIL</span>
            <span className="contact__value contact__value--big">sales@atdsupply.co.th</span>
            <span className="contact__hint">SEND MAIL ↗</span>
          </a>
        </div>

        <div className="contact__cta">
          <a className="btn btn--yellow btn--xl" href="tel:0641858978">
            📞 CALL NOW
          </a>
          <a className="btn btn--lime btn--xl" href="https://line.me/R/ti/p/@atdsupply7555" target="_blank" rel="noreferrer">
            💬 MESSAGE ON LINE
          </a>
          <a className="btn btn--cyan btn--xl" href="mailto:sales@atdsupply.co.th">
            ✉️ EMAIL SALES
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <Marquee items={MARQUEE_A} tone="lime" reverse />
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo">
              ATD<span>SUPPLY</span>
            </div>
            <p>ATD Supply Co., Ltd. — Reliable HVAC parts. Trusted business partner. Est. 2023, Bangkok, Thailand.</p>
          </div>
          <div className="footer__cols">
            <div>
              <h4>SUPPLY</h4>
              <a href="#products">Air Conditioning</a>
              <a href="#products">Refrigeration</a>
              <a href="#products">Copper & Fittings</a>
              <a href="#products">Filters & Sealants</a>
            </div>
            <div>
              <h4>CONTACT</h4>
              <a href="tel:0641858978">064-185-8978</a>
              <a href="mailto:sales@atdsupply.co.th">sales@atdsupply.co.th</a>
              <a href="https://line.me/R/ti/p/@atdsupply7555" target="_blank" rel="noreferrer">LINE @atdsupply7555</a>
            </div>
            <div>
              <h4>VISIT</h4>
              <a href="https://maps.google.com/?q=71/119+Soi+Ramkhamhaeng+164+Min+Buri+Bangkok+10510" target="_blank" rel="noreferrer">
                71/119 Soi Ramkhamhaeng 164
                <br />
                Min Buri, Bangkok 10510
              </a>
            </div>
          </div>
        </div>
        <div className="footer__giant" aria-hidden="true">
          COLD CHAINS · HOT DEALS
        </div>
        <div className="footer__legal">© 2026 ATD Supply Co., Ltd. · atdsupply.co.th</div>
        <p className="footer__credits">
          Photos via <a href="https://commons.wikimedia.org" target="_blank" rel="noreferrer">Wikimedia Commons</a> —
          compressor: Dinkun Chen (CC BY-SA 4.0) · condensing unit: AnyNameWillExpire (CC BY-SA 4.0) · copper
          fittings: Emilian Robert Vicol (CC BY 2.0) · breakers:(CC0) · insulation: Achim Hering (CC BY 3.0) ·
          tools: (CC0) · HEPA filter: Home Air Quality Guides (CC BY-SA 2.0) · sealant: Cjp24 (CC BY-SA 3.0) ·
          field photo: USAF / 379th ECES (public domain)
        </p>
      </footer>
    </div>
  );
}

export default App;
