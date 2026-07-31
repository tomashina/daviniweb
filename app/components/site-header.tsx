/* eslint-disable @next/next/no-html-link-for-pages */

const navigation = [
  ["Studio", "/studio/"],
  ["Usluge", "/usluge/"],
  ["Stilovi", "/stilovi/"],
  ["Portfolio", "/portfolio/"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Davini — početna">
        <img src="/logo-davini.svg" alt="Davini" width="382" height="72" />
        <span>Interior design &amp; architecture</span>
      </a>

      <nav className="desktop-nav" aria-label="Glavna navigacija">
        {navigation.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="/#kontakt">
        Započnimo projekt
      </a>

      <details className="mobile-nav">
        <summary
          aria-expanded="false"
          aria-label="Otvori navigacijski izbornik"
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="visually-hidden">Izbornik</span>
        </summary>
        <nav className="mobile-menu-panel" aria-label="Mobilna navigacija">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
          <a href="/#kontakt">Kontakt</a>
        </nav>
      </details>
    </header>
  );
}
