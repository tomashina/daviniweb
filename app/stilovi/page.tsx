import type { Metadata } from "next";
import ContactSection from "../components/contact-section";
import InnerHero from "../components/inner-hero";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { designStyles, palette } from "../content";

export const metadata: Metadata = {
  title: "Stilovi dizajna interijera",
  description:
    "Moderni, minimalistički, skandinavski, industrijski, klasični, mediteranski, boho, organski i eklektični dizajn interijera.",
  alternates: { canonical: "/stilovi/" },
};

export default function StylesPage() {
  return (
    <main className="subpage">
      <SiteHeader />
      <InnerHero
        eyebrow="Stilovi dizajna interijera"
        title="Estetika koja"
        accent="postaje iskustvo."
        text="Kreativnost, sklad i elegancija oblikovani prema karakteru prostora i ljudi koji ga koriste."
      />

      <section className="content-section modern-section">
        <div className="editorial-grid">
          <div>
            <p className="eyebrow">Moderan dizajn</p>
            <h2>
              Čiste linije.
              <br />
              <em>Prostor koji diše.</em>
            </h2>
          </div>
          <div className="long-copy">
            <h3>Stilovi modernog dizajna</h3>
            <p>
              Moderna estetika obuhvaća različite stilove — od minimalističkih
              prostora s naglaskom na jednostavnost, preko skandinavskog dizajna
              s toplinom prirodnih materijala, do industrijskih interijera u
              kojima dominiraju metal, staklo i otvoreni volumeni. Svaki stil
              nosi svoju priču, ali zajednička nit su elegancija, kreativnost i
              jasnoća linija.
            </p>
            <h3>Živjeti u modernom interijeru</h3>
            <p>
              Živjeti u modernom interijeru znači uživati u prostoru koji diše
              i odražava vaš karakter. Svaki detalj, od namještaja do rasvjete,
              pažljivo je odabran kako bi stvorio skladnu cjelinu. Moderni
              prostori potiču kreativnost i smirenost, pružajući osjećaj
              profinjenosti i udobnosti.
            </p>
            <h3>Kreativnost, sklad i elegancija</h3>
            <p>
              U modernim interijerima estetika nije samo vizualni doživljaj —
              ona je iskustvo. Kombinacija elegantnih linija, pažljivo
              odabranih materijala i boja stvara prostor u kojem se lako
              izražava osobni stil, a svaki kutak odiše ravnotežom i
              sofisticiranošću. Moderni dizajn je spoj kreativnosti i
              funkcionalnosti, prostor koji nadahnjuje i zove na život.
            </p>
          </div>
        </div>
      </section>

      <section className="organic-feature">
        <div className="organic-feature-image">
          <img
            src="/images/organic-interior.jpg"
            srcSet="/images/organic-interior.jpg 274w, /images/organic-interior-2x.webp 548w"
            sizes="(max-width: 820px) 100vw, 40vw"
            width="274"
            height="252"
            loading="lazy"
            alt="Organski oblikovan interijer"
          />
        </div>
        <div className="organic-feature-copy">
          <p className="eyebrow">Organic Design — priroda u svakom obliku</p>
          <h2>
            Sinergija oblika
            <br />
            <em>i materijala.</em>
          </h2>
          <p>
            U svijetu interijera, organic design donosi harmoniju prirodnih
            oblika i futurističkog dizajna. Inspiriran nepravilnim, tekućim
            linijama prirode, ovaj stil stvara prostore koji dišu i oživljavaju
            svaki kutak doma ili poslovnog prostora.
          </p>
          <p>
            Oblik postaje umjetnost — namještaj, rasvjeta i dekorativni elementi
            prate organski ritam prirode, spajajući funkcionalnost i estetsku
            slobodu. Rezultat je prostor koji izaziva osjećaj slobode, inspirira
            kreativnost i istovremeno pruža ugodu i mir.
          </p>
          <p>
            Kombinacija organic designa i kamenih imitacija otvara vrata novim
            vizijama interijera. Tekući, nepravilni oblici u kontrastu s
            teksturama stijena stvaraju jedinstven vizualni i taktilni doživljaj
            — spoj prirodne estetike i suvremenog dizajna, gdje svaki detalj
            priča svoju priču.
          </p>
          <h3>Interijer s duhom stijena — prirodni ugođaj u prostoru</h3>
          <p>
            Kombinirajući estetsku snagu prirodnih materijala s modernim
            dizajnom, interijeri inspirirani kamenim stijenama donose dojam
            autentične prirode unutar zidova doma. Imitacija stijena omogućava
            stvaranje dramatičnih, teksturnih površina koje oživljavaju prostor
            i oblikuju jedinstvenu atmosferu.
          </p>
          <p>
            Svaka površina, pukotina i nijansa pažljivo su dizajnirane kako bi
            prenijele osjećaj trajnosti, snage i prirodnog balansa. Takvi
            interijeri stvaraju intimnu, ali impresivnu scenografiju — prostor u
            kojem se osjeća povezanost s prirodom, čak i unutar modernog doma.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-kicker">
          <span>9 stilskih smjerova</span>
          <span className="line" />
        </div>
        <div className="style-grid">
          {designStyles.map((style, index) => (
            <article key={style.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{style.name}</h2>
              <dl>
                <div>
                  <dt>Karakteristike</dt>
                  <dd>{style.characteristics}</dd>
                </div>
                <div>
                  <dt>Materijali</dt>
                  <dd>{style.materials}</dd>
                </div>
                <div>
                  <dt>Atmosfera</dt>
                  <dd>{style.atmosphere}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="palette" aria-label="Davini paleta boja">
          {palette.map((color) => (
            <div key={color}>
              <span style={{ backgroundColor: color }} />
              <code>{color}</code>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
