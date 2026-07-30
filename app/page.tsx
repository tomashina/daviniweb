import ContactSection from "./components/contact-section";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site-config";

const projects = [
  {
    title: "Vila Kostrena",
    type: "Rezidencijalni interijer",
    image: "/images/villa-kostrena.jpg",
    image2x: "/images/villa-kostrena-2x.webp",
    width: 678,
    height: 278,
    className: "project-wide",
  },
  {
    title: "Wine bar",
    type: "Ugostiteljski interijer",
    image: "/images/wine-bar.jpg",
    image2x: "/images/wine-bar-2x.webp",
    width: 353,
    height: 189,
    className: "",
  },
  {
    title: "Hotel Marabella",
    type: "Hotelski interijer",
    image: "/images/hotel-marabella.jpg",
    image2x: "/images/hotel-marabella-2x.webp",
    width: 305,
    height: 391,
    className: "project-tall",
  },
  {
    title: "Veterinarska poliklinika Vetti",
    type: "Zdravstveni interijer",
    image: "/images/vetti-clinic.jpg",
    image2x: "/images/vetti-clinic-2x.webp",
    width: 354,
    height: 229,
    className: "",
  },
  {
    title: "Beauty salon Teoma",
    type: "Beauty interijer",
    image: "/images/beauty-salon.jpg",
    image2x: "/images/beauty-salon-2x.webp",
    width: 303,
    height: 387,
    className: "project-tall",
  },
  {
    title: "Faces 2 Faces",
    type: "Club & bar",
    image: "/images/faces-club.jpg",
    image2x: "/images/faces-club-2x.webp",
    width: 354,
    height: 229,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#studio`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/images/hero-interior-2x.jpg`,
    email: "davini.casa@gmail.com",
    telephone: "+385953871448",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zagreb",
      addressCountry: "HR",
    },
    areaServed: ["Hrvatska", "Europa", "Sjedinjene Američke Države", "Azija"],
    priceRange: "€€€",
    knowsAbout: [
      "Dizajn interijera",
      "3D vizualizacija",
      "Projektna dokumentacija",
      "Namještaj po mjeri",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Studio za dizajn interijera</p>
          <h1 aria-label="Umjetnost prostora. Potpis koji traje.">
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
              Preuzmite portfolio
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero-interior-420.jpg"
            alt="Elegantno uređen dnevni boravak i blagovaonica"
            width="677"
            height="411"
            fetchPriority="high"
            srcSet="/images/hero-interior-420.jpg 420w, /images/hero-interior.jpg 677w, /images/hero-interior-2x.webp 1354w"
            sizes="(max-width: 820px) calc(100vw - 40px), 53vw"
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
              <img
                src={project.image}
                srcSet={`${project.image} ${project.width}w, ${project.image2x} ${project.width * 2}w`}
                sizes={
                  project.className === "project-wide"
                    ? "(max-width: 820px) calc(100vw - 40px), (max-width: 1100px) 44vw, 59vw"
                    : "(max-width: 820px) calc(100vw - 40px), (max-width: 1100px) 44vw, 29vw"
                }
                alt={project.title}
                width={project.width}
                height={project.height}
                loading="lazy"
              />
              <div className="project-overlay">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-action">
          <a className="button button-outline" href="/portfolio/">
            Otvorite cijeli portfolio
          </a>
        </div>
      </section>

      <section className="design-story">
        <div className="story-image story-image-organic">
          <img
            src="/images/organic-interior.jpg"
            srcSet="/images/organic-interior.jpg 274w, /images/organic-interior-2x.webp 548w"
            sizes="(max-width: 820px) calc(100vw - 40px), 24vw"
            alt="Organski oblikovan interijer inspiriran prirodom"
            width="274"
            height="252"
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
            srcSet="/images/bespoke-bathroom.jpg 354w, /images/bespoke-bathroom-2x.webp 708w"
            sizes="24vw"
            alt="Moderan interijer kupaonice u tamnim tonovima"
            width="354"
            height="190"
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

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
