type InnerHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
};

export default function InnerHero({
  eyebrow,
  title,
  accent,
  text,
}: InnerHeroProps) {
  return (
    <section className="inner-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1 aria-label={`${title} ${accent}`}>
        {title}
        <br />
        <em>{accent}</em>
      </h1>
      <p>{text}</p>
    </section>
  );
}
