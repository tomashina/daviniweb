export default function SiteFooter() {
  return (
    <footer>
      <a className="brand footer-brand" href="/" aria-label="Davini — početna">
        <img src="/logo-davini.svg" alt="Davini" width="382" height="72" />
        <span>Furniture · Interior design · Architecture</span>
        <span>Concept store · Show room · Web shop</span>
      </a>
      <p>Davini d.o.o. · Zagreb, Hrvatska</p>
      <p>© {new Date().getFullYear()} Davini. Sva prava pridržana.</p>
    </footer>
  );
}
