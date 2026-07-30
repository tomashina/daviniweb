const projects = [
  {
    title: "Vila Kostrena",
    type: "Rezidencijalni interijer",
    image: "/images/villa-kostrena.jpg",
    className: "project-wide",
  },
  {
    title: "Wine bar",
    type: "Ugostiteljski interijer",
    image: "/images/wine-bar.jpg",
    className: "",
  },
  {
    title: "Hotel Marabella",
    type: "Hotelski interijer",
    image: "/images/hotel-marabella.jpg",
    className: "project-tall",
  },
  {
    title: "Veterinarska poliklinika Vetti",
    type: "Zdravstveni interijer",
    image: "/images/vetti-clinic.jpg",
    className: "",
  },
  {
    title: "Beauty salon Teoma",
    type: "Beauty interijer",
    image: "/images/beauty-salon.jpg",
    className: "project-tall",
  },
  {
    title: "Faces 2 Faces",
    type: "Club & bar",
    image: "/images/faces-club.jpg",
    className: "",
  },
];

const services = [
  {
    number: "01",
    title: "Dizajn interijera",
    text: "Od tlocrta novog stanja i funkcionalnog rasporeda do precizno oblikovanog prostora usklađenog s vašim načinom života ili rada.",
  },
  {
    number: "02",
    title: "3D vizualizacija",
    text: "Fotorealistični prikazi svakog prostora uz V-Ray rendering i pažljivu postprodukciju prije početka izvedbe.",
  },
  {
    number: "03",
    title: "Projektna dokumentacija",
    text: "Rasvjeta, elektroinstalacije, podovi, zidne obloge, boje, mikrolokacije i svi izvedbeni nacrti na jednom mjestu.",
  },
  {
    number: "04",
    title: "Namještaj po mjeri",
    text: "Dizajn namještaja s jasnim dimenzijama, odabirom materijala, tehničkim nacrtima i pripremom za stolarsku izvedbu.",
  },
];

const process = [
  ["Upoznavanje", "Razumijemo prostor, potrebe, budžet i stil života."],
  ["Koncept", "Razvijamo raspored, materijale, atmosferu i 3D prikaze."],
  ["Projekt", "Pripremamo cjelovitu tehničku i izvedbenu dokumentaciju."],
  ["Realizacija", "Pratimo izvedbu do posljednjeg, precizno usklađenog detalja."],
];

const pricing = [
  ["Projekt dizajna interijera", "na upit"],
  ["Izrada 3D rendera", "na upit"],
  ["Izmjera prostora ili objekta", "150 €"],
  ["Izlazak na teren - radni dan", "200 € + putni troškovi"],
  ["Izlazak na teren - Zagreb", "50 € / h"],
  ["Usluge savjetovanja", "100 € / h"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Davini - početna">
          <img src="/logo-davini.svg" alt="Davini" />
          <span>Interior design &amp; architecture</span>
        </a>

        <nav className="desktop-nav" aria-label="Glavna navigacija">
          <a href="#studio">Studio</a>
          <a href="#usluge">Usluge</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#cjenik">Cjenik</a>
        </nav>

        <a className="header-cta" href="#kontakt">
          Započnimo projekt
        </a>

        <details className="mobile-nav">
          <summary aria-label="Otvori izbornik">Izbornik</summary>
          <div>
            <a href="#studio">Studio</a>
            <a href="#usluge">Usluge</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#cjenik">Cjenik</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Studio za dizajn interijera</p>
          <h1>
            Umjetnost prostora.
            <br />
            <em>Potpis koji traje.</em>
          </h1>
          <p className="hero-lead">
            Stvaramo interijere u kojima estetika i funkcionalnost ostaju u
            savršenoj ravnoteži - od prve ideje do posljednjeg detalja.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#portfolio">
              Istražite projekte
            </a>
            <a className="text-link" href="/davini-portfolio.pdf" download>
              Preuzmite portfolio <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero-interior.jpg"
            alt="Elegantno uređen dnevni boravak i blagovaonica"
          />
          <div className="hero-image-label">
            <span>Residential</span>
            <span>Interior</span>
          </div>
        </div>

        <div className="hero-side-note" aria-hidden="true">
          Zagreb · Europe · USA · Asia
        </div>
      </section>

      <section className="intro section" id="studio">
        <div className="section-kicker">
          <span>O studiju</span>
          <span className="line" />
        </div>
        <div className="intro-grid">
          <h2>
            Svaki prostor ima svoju priču.
            <br />
            <em>Mi je pretvaramo u stvarnost.</em>
          </h2>
          <div className="intro-copy">
            <p>
              U svijetu gdje prostor govori više od riječi, naš dizajn postaje
              priča o eleganciji, ravnoteži i osobnom identitetu. Ne stvaramo
              kopije. Svaki projekt nosi vlastiti karakter, oblikovan s posebnom
              pažnjom prema detaljima, materijalima i proporcijama.
            </p>
            <p>
              Naš cilj je više od estetike: stvaramo prostore koji inspiriraju,
              očaravaju i ostaju u sjećanju.
            </p>
          </div>
        </div>

        <div className="stats" aria-label="Iskustvo studija">
          <div>
            <strong>300+</strong>
            <span>komercijalnih i rezidencijalnih objekata</span>
          </div>
          <div>
            <strong>3</strong>
            <span>kontinenta na kojima smo realizirali projekte</span>
          </div>
          <div>
            <strong>360°</strong>
            <span>od ideje do završne realizacije</span>
          </div>
        </div>
      </section>

      <section className="services section" id="usluge">
        <div className="section-kicker">
          <span>Što radimo</span>
          <span className="line" />
        </div>
        <div className="services-heading">
          <h2>
            Dizajn bez
            <br />
            <em>kompromisa.</em>
          </h2>
          <p>
            Funkcionalnost je temelj svakog kvalitetnog prostora. Svaki element
            ima svoju svrhu, a svaki raspored svoju logiku.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="sectors">
          <p>Prostori koje oblikujemo</p>
          <div>
            <span>Hoteli</span>
            <span>Restorani &amp; barovi</span>
            <span>Poliklinike</span>
            <span>Saloni</span>
            <span>Kuće &amp; vile</span>
            <span>Uredi</span>
          </div>
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="portfolio-heading">
          <div>
            <div className="section-kicker">
              <span>Izdvojeni projekti</span>
              <span className="line" />
            </div>
            <h2>
              Portfolio
              <br />
              <em>prostora s karakterom.</em>
            </h2>
          </div>
          <p>
            Od privatnih vila do hotela, klinika i ugostiteljskih prostora -
            svaki projekt oblikujemo kao jedinstven odgovor na mjesto, namjenu i
            ljude koji ga koriste.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.className}`}
              key={`${project.title}-${index}`}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-action">
          <a className="button button-outline" href="/davini-portfolio.pdf">
            Pogledajte cijeli portfolio
          </a>
        </div>
      </section>

      <section className="design-story">
        <div className="story-image story-image-organic">
          <img
            src="/images/organic-interior.jpg"
            alt="Organski oblikovan interijer inspiriran prirodom"
            loading="lazy"
          />
          <span>Organic design</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Priroda u svakom obliku</p>
          <h2>
            Sinergija oblika
            <br />i <em>materijala.</em>
          </h2>
          <p>
            Tekući, nepravilni oblici u kontrastu s teksturama stijena stvaraju
            jedinstven vizualni i taktilni doživljaj. Rezultat je prostor koji
            intrigira, inspirira i ostaje urezan u pamćenju.
          </p>
        </div>
        <div className="story-image story-image-detail">
          <img
            src="/images/bespoke-bathroom.jpg"
            alt="Moderan interijer kupaonice u tamnim tonovima"
            loading="lazy"
          />
          <span>Modern design</span>
        </div>
      </section>

      <section className="process section">
        <div className="section-kicker">
          <span>Naš proces</span>
          <span className="line" />
        </div>
        <div className="process-grid">
          <h2>
            Vaša vizija.
            <br />
            <em>Naša realizacija.</em>
          </h2>
          <div className="process-steps">
            {process.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section" id="cjenik">
        <div className="pricing-intro">
          <div className="section-kicker">
            <span>Cjenik usluga</span>
            <span className="line" />
          </div>
          <h2>
            Jasna vrijednost.
            <br />
            <em>Projekt po mjeri.</em>
          </h2>
          <p>
            Svaki projekt je jedinstven, zato se cjelovita ponuda izrađuje nakon
            razgovora i razumijevanja vašeg prostora, opsega i očekivanja.
          </p>
        </div>
        <div className="pricing-list">
          {pricing.map(([service, price]) => (
            <div key={service}>
              <span>{service}</span>
              <strong>{price}</strong>
            </div>
          ))}
          <p>
            Prvi razgovor nakon prihvaćene ponude se ne naplaćuje. Za početak
            projekta ugovara se 50% vrijednosti, a preostalih 50% nakon predaje
            projekta.
          </p>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-top">
          <p className="eyebrow">Započnimo razgovor</p>
          <h2>
            Imate prostor na umu?
            <br />
            <em>Oblikujmo ga zajedno.</em>
          </h2>
        </div>
        <div className="contact-bottom">
          <a href="mailto:davini.casa@gmail.com">davini.casa@gmail.com</a>
          <a href="tel:+385953871448">+385 95 3871 448</a>
          <a className="button button-gold" href="mailto:davini.casa@gmail.com">
            Pošaljite upit
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Davini vrh">
          <img src="/logo-davini.svg" alt="Davini" />
          <span>Furniture · Interior design · Architecture</span>
        </a>
        <p>Davini d.o.o. · Zagreb, Hrvatska</p>
        <p>© {new Date().getFullYear()} Davini. Sva prava pridržana.</p>
      </footer>
    </main>
  );
}
