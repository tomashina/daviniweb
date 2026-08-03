import type { Metadata } from "next";
import ContactSection from "../components/contact-section";
import InnerHero from "../components/inner-hero";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { studioPrinciples, whyDesigner } from "../content";
import { HERO_IMAGE_VERSION } from "../site-config";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Upoznajte Davini pristup dizajnu interijera: unikatnost, funkcionalnost, potpuna posvećenost i realizacija po principu ključ u ruke.",
  alternates: { canonical: "/studio/" },
};

export default function StudioPage() {
  return (
    <main className="subpage">
      <SiteHeader />
      <InnerHero
        eyebrow="Davini studio"
        title="Umjetnost prostora."
        accent="Potpis koji traje."
        text="Vaša vizija. Naša realizacija. Savršen prostor."
      />

      <section className="content-section content-intro">
        <div className="section-kicker">
          <span>Naš pristup</span>
          <span className="line" />
        </div>
        <div className="editorial-grid">
          <h2>
            Prostor govori
            <br />
            <em>više od riječi.</em>
          </h2>
          <div className="long-copy">
            <p>
              U svijetu gdje prostor govori više od riječi, naš dizajn postaje
              priča o eleganciji, ravnoteži i osobnom identitetu. Svaki
              interijer koji stvaramo rezultat je pažljivo promišljenog procesa
              u kojem se estetika i funkcionalnost stapaju u savršenu cjelinu.
            </p>
            <p>
              Naš pristup temelji se na razumijevanju klijenta — njegovih želja,
              potreba i životnog stila. Vjerujemo da vrhunski dizajn nije samo
              vizualni dojam, već iskustvo življenja u prostoru koji inspirira,
              umiruje i traje.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-kicker">
          <span>Naše vrijednosti</span>
          <span className="line" />
        </div>
        <div className="principle-grid">
          {studioPrinciples.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{principle.title}</h2>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section why-section">
        <div className="editorial-grid">
          <div>
            <p className="eyebrow">Interior design projekt</p>
            <h2>
              Zašto odabrati
              <br />
              <em>dizajnera?</em>
            </h2>
          </div>
          <div className="long-copy">
            <p className="large-copy">
              Savršen interijer ne nastaje slučajno — on se pažljivo stvara.
              Profesionalni dizajner interijera pretvara prostor u iskustvo,
              estetiku u emociju, a vaš dom u odraz vašeg stila i osobnosti.
            </p>
          </div>
        </div>
        <div className="reason-list">
          {whyDesigner.map((reason, index) => (
            <article key={reason.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="turnkey-section">
        <img
          src={`/site-assets/hero-1536.webp?v=${HERO_IMAGE_VERSION}`}
          sizes="100vw"
          width="1536"
          height="864"
          alt="Davini interijer realiziran po principu ključ u ruke"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">Ključ u ruke</p>
          <h2>
            Od ideje do
            <br />
            <em>završnog detalja.</em>
          </h2>
          <p>
            S našim „ključ u ruke” pristupom preuzimamo cijeli projekt — od
            ideje do završnog detalja. Brinemo o svakom koraku, koordiniramo sve
            faze i omogućujemo vam da uživate u savršeno uređenom prostoru bez
            stresa.
          </p>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
