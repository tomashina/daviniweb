/* eslint-disable @next/next/no-html-link-for-pages */
import ContactSection from "./components/contact-section";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import {
  portfolioPreviewPath,
  portfolioPreviewSrcSet,
} from "./content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site-config";

const projects = [
  {
    title: "Vila Kostrena",
    slug: "vila-kostrena",
    type: "Rezidencijalni interijer",
    href: "/portfolio/vila-kostrena/",
    width: 1600,
    height: 900,
    className: "project-wide",
  },
  {
    title: "Vila Lovran",
    slug: "vila-lovran",
    type: "Rezidencijalni interijer",
    href: "/portfolio/vila-lovran/",
    width: 2560,
    height: 1066,
    className: "",
  },
  {
    title: "Hotel Plaza Pag",
    slug: "hotel-plaza-pag",
    type: "Hotelski interijer",
    href: "/portfolio/hotel-plaza-pag/",
    width: 2390,
    height: 1792,
    className: "project-tall",
  },
  {
    title: "Veterinarska poliklinika Vetti",
    slug: "vetti",
    type: "Veterinarski interijer",
    href: "/portfolio/vetti/",
    width: 1600,
    height: 900,
    className: "",
  },
  {
    title: "Skin Clinic Ariderma",
    slug: "ariderma",
    type: "Beauty & wellness interijer",
    href: "/portfolio/ariderma/",
    width: 1708,
    height: 1708,
    className: "project-tall",
  },
  {
    title: "Arsano Medical Group",
    slug: "arsano-medical-group",
    type: "Poslovni i zdravstveni interijer",
    href: "/portfolio/arsano-medical-group/",
    width: 1600,
    height: 900,
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
    image: `${SITE_URL}/site-assets/hero-1536.webp`,
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
            <a className="button button-gold" href="/portfolio/">
              Istražite projekte
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/site-assets/hero-1280.webp"
            alt="Elegantno uređen dnevni boravak i blagovaonica"
            width="1280"
            height="720"
            fetchPriority="high"
            srcSet="/site-assets/hero-640.webp 640w, /site-assets/hero-1280.webp 1280w, /site-assets/hero-1536.webp 1536w"
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
            <a
              className={`project-card ${project.className}`}
              href={project.href}
              key={`${project.title}-${index}`}
            >
              <img
                src={portfolioPreviewPath(project.slug)}
                srcSet={portfolioPreviewSrcSet(project.slug)}
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
            </a>
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
            src={portfolioPreviewPath("vila-beograd-71", 1, 640)}
            srcSet={portfolioPreviewSrcSet("vila-beograd-71")}
            sizes="(max-width: 820px) calc(100vw - 40px), 24vw"
            alt="Organski oblikovan interijer inspiriran prirodom"
            width="1536"
            height="864"
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
            src={portfolioPreviewPath("vila-lovran", 4, 640)}
            srcSet={portfolioPreviewSrcSet("vila-lovran", 4)}
            sizes="24vw"
            alt="Moderan interijer kupaonice u tamnim tonovima"
            width="1574"
            height="1280"
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
