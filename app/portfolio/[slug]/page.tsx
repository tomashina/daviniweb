import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages */
import { notFound } from "next/navigation";
import ContactSection from "../../components/contact-section";
import ProjectLightbox from "../../components/project-lightbox";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import {
  portfolioImagePath,
  portfolioPreviewPath,
  portfolioPreviewSrcSet,
  portfolioProjects,
} from "../../content";
import { SITE_URL } from "../../site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const image = portfolioImagePath(project.slug);

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}/` },
    openGraph: {
      title: `${project.title} | Davini`,
      description: project.description,
      type: "article",
      url: `/portfolio/${project.slug}/`,
      images: [{ url: image, alt: project.title }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = portfolioProjects.findIndex(
    (item) => item.slug === slug,
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioProjects[projectIndex];
  const nextProject =
    portfolioProjects[(projectIndex + 1) % portfolioProjects.length];
  const gallery = Array.from(
    { length: project.galleryCount },
    (_, index) => portfolioImagePath(project.slug, index + 1),
  );
  const galleryImages = gallery.slice(1);
  const expandLastImage = galleryImages.length % 2 === 0;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Organization",
      name: "Davini",
      url: SITE_URL,
    },
    image: gallery.map((image) => `${SITE_URL}${image}`),
    locationCreated: project.location,
  };

  return (
    <main className="subpage project-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <section className="project-detail-hero">
        <div className="project-detail-copy">
          <a className="back-link" href="/portfolio/">
            Svi projekti
          </a>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span>Lokacija</span>
            <strong>{project.location}</strong>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="project-detail-cover">
          <button
            className="lightbox-trigger"
            type="button"
            data-lightbox-index="0"
            aria-label={`Povećaj fotografiju: ${project.title}`}
          >
            <img
              src={portfolioPreviewPath(project.slug)}
              srcSet={portfolioPreviewSrcSet(project.slug)}
              sizes="(max-width: 820px) 100vw, 64vw"
              alt={`${project.title} — naslovna fotografija`}
              width={project.imageWidth}
              height={project.imageHeight}
              fetchPriority="high"
            />
          </button>
        </div>
      </section>

      <section className="project-gallery" aria-label={`Galerija: ${project.title}`}>
        {galleryImages.map((image, index) => {
          const isWide =
            index === 0 ||
            (expandLastImage && index === galleryImages.length - 1);

          return (
            <figure
              className={isWide ? "gallery-wide" : ""}
              key={image}
            >
              <button
                className="lightbox-trigger"
                type="button"
                data-lightbox-index={index + 1}
                aria-label={`Povećaj fotografiju ${index + 2}: ${project.title}`}
              >
                <img
                  src={portfolioPreviewPath(project.slug, index + 2)}
                  srcSet={portfolioPreviewSrcSet(project.slug, index + 2)}
                  sizes={isWide ? "100vw" : "(max-width: 820px) 100vw, 50vw"}
                  alt={`${project.title} — fotografija ${index + 2}`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                />
              </button>
            </figure>
          );
        })}
      </section>

      <ProjectLightbox images={gallery} projectTitle={project.title} />

      <a
        className="next-project"
        href={`/portfolio/${nextProject.slug}/`}
      >
        <span>Sljedeći projekt</span>
        <strong>{nextProject.title}</strong>
        <span className="next-project-mark" aria-hidden="true">
          <svg viewBox="0 0 48 32" focusable="false">
            <path d="M8 16h30m-8-8 8 8-8 8" />
          </svg>
        </span>
      </a>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
