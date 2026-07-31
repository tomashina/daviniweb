/* eslint-disable @next/next/no-img-element */
export default function ContactSection() {
  return (
    <section className="contact" id="kontakt">
      <img
        className="contact-background"
        src="/site-assets/contact-2560.webp"
        alt=""
        width="2560"
        height="1066"
        loading="lazy"
        aria-hidden="true"
      />
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
  );
}
