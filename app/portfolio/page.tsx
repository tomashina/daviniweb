import type { Metadata } from "next";
import ContactSection from "../components/contact-section";
import InnerHero from "../components/inner-hero";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { portfolioProjects, referenceProjects } from "../content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Izdvojeni Davini projekti: poliklinike, hoteli, barovi, beauty prostori, kuće i vile u Hrvatskoj, Europi, SAD-u i Aziji.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  return (
    <main className="subpage">
      <SiteHeader />
      <InnerHero
        eyebrow="Izdvojeni projekti"
        title="Preko 300"
        accent="realiziranih objekata."
        text="Komercijalni i rezidencijalni interijeri diljem Europe, SAD-a i Azije."
      />

      <section className="content-section portfolio-intro">
        <div className="editorial-grid">
          <h2>
            Iskustvo i kreativnost
            <br />
            <em>u svakom interijeru.</em>
          </h2>
          <div className="long-copy">
            <p>
              S više od 300 projekata diljem Europe, SAD-a i Azije donosimo
              iskustvo i kreativnost u svaki interijer. Radimo sve — od ideje do
              završnog detalja — kako biste vi mogli uživati u prostoru koji
              oduzima dah, bez stresa i briga.
            </p>
            <p>
              Povjerite nam svoj projekt i doživite savršen spoj estetike,
              funkcionalnosti i inovativnosti.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-index" aria-label="Davini projekti">
        {portfolioProjects.map((project, index) => (
          <a
            className={`portfolio-index-card ${index % 5 === 0 ? "is-wide" : ""}`}
            href={`/portfolio/${project.slug}/`}
            key={project.slug}
          >
            <img
              src={`/portfolio/${project.slug}/01.webp`}
              alt={project.title}
              width={project.imageWidth}
              height={project.imageHeight}
              loading={index < 2 ? "eager" : "lazy"}
            />
            <div>
              <p>
                {project.category} · {project.location}
              </p>
              <h2>{project.title}</h2>
            </div>
          </a>
        ))}
      </section>

      <section className="content-section references-section">
        <div className="section-kicker">
          <span>Portfolio — izdvojeno</span>
          <span className="line" />
        </div>
        <div className="reference-list">
          {referenceProjects.map((project, index) => (
            <div key={project}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{project}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
