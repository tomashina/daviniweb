import type { Metadata } from "next";
import ContactSection from "../components/contact-section";
import InnerHero from "../components/inner-hero";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { pricing, serviceDeliverables, spaceTypes } from "../content";

export const metadata: Metadata = {
  title: "Usluge i cjenik",
  description:
    "Dizajn interijera, 3D vizualizacije, projektna dokumentacija, rasvjeta, materijali, namještaj po mjeri i realizacija projekta.",
  alternates: { canonical: "/usluge/" },
};

export default function ServicesPage() {
  return (
    <main className="subpage">
      <SiteHeader />
      <InnerHero
        eyebrow="Dizajn interijera"
        title="Cjelovit projekt."
        accent="Bez kompromisa."
        text="Od tlocrta i fotorealističnih vizualizacija do izvedbenih nacrta i namještaja prilagođenog stolarskoj izvedbi."
      />

      <section className="content-section">
        <div className="section-kicker">
          <span>Što projekt uključuje</span>
          <span className="line" />
        </div>
        <div className="deliverables-grid">
          {serviceDeliverables.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section spaces-section">
        <div className="editorial-grid">
          <div>
            <p className="eyebrow">For any purpose and any space</p>
            <h2>
              Za svaki prostor
              <br />
              <em>i svaku namjenu.</em>
            </h2>
          </div>
          <div className="long-copy">
            <p>
              Svaki prostor ima svoju priču — mi je pretvaramo u stvarnost.
              Dizajniramo i uređujemo hotele, restorane, kafiće, bolnice,
              poliklinike i privatne objekte, stvarajući interijere koji
              oduzimaju dah.
            </p>
            <p>
              U suradnji s investitorom biramo stil koji savršeno odgovara
              viziji — luksuzni, moderni, minimalistički, skandinavski,
              mediteranski ili potpuno autentičan koncept po mjeri. Naš cilj je
              više od estetike: stvaramo prostore koji inspiriraju, očaravaju i
              ostaju u sjećanju.
            </p>
          </div>
        </div>
        <div className="space-list">
          {spaceTypes.map(([english, croatian], index) => (
            <article key={english}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{english}</p>
              <h3>{croatian}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section pricing-page" id="cjenik">
        <div className="editorial-grid">
          <div>
            <p className="eyebrow">Cjenik usluga</p>
            <h2>
              Jasna vrijednost.
              <br />
              <em>Projekt po mjeri.</em>
            </h2>
          </div>
          <div className="pricing-list">
            {pricing.map(([service, price]) => (
              <div key={service}>
                <span>{service}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="terms-grid">
          <p>
            Prvi razgovor s klijentom, nakon prihvaćene ponude, ne naplaćuje se.
            Ponudu izdajemo nakon razgovora s klijentom i uvida u projekt.
          </p>
          <p>
            Ponuda se odnosi isključivo na projekt dizajna interijera. Plaćanje
            projekta vrši se na poslovni račun: 50% dogovorene cijene kao
            predujam i 50% nakon predaje projekta investitoru u digitalnom
            obliku.
          </p>
          <p>
            Prije početka procesa izrade projekta dizajna interijera, a nakon
            prihvaćene ponude od strane investitora, potpisujemo ugovor o
            poslovnoj suradnji.
          </p>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
