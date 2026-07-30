"use client";

import { useEffect, useState } from "react";

type ProjectLightboxProps = {
  images: string[];
  projectTitle: string;
};

export default function ProjectLightbox({
  images,
  projectTitle,
}: ProjectLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const openFromTrigger = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const trigger = target.closest<HTMLElement>("[data-lightbox-index]");

      if (!trigger) return;

      const index = Number(trigger.dataset.lightboxIndex);
      if (Number.isInteger(index)) {
        setActiveIndex(index);
      }
    };

    document.addEventListener("click", openFromTrigger);
    return () => document.removeEventListener("click", openFromTrigger);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length,
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % images.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  if (activeIndex === null) return null;

  const previous = () =>
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  const next = () => setActiveIndex((activeIndex + 1) % images.length);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Galerija projekta ${projectTitle}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setActiveIndex(null);
        }
      }}
    >
      <button
        className="lightbox-close"
        type="button"
        onClick={() => setActiveIndex(null)}
        aria-label="Zatvori povećani prikaz"
        autoFocus
      >
        ×
      </button>
      <button
        className="lightbox-arrow lightbox-previous"
        type="button"
        onClick={previous}
        aria-label="Prethodna slika"
      >
        ←
      </button>
      <figure>
        <img
          src={images[activeIndex]}
          alt={`${projectTitle} — povećana fotografija ${activeIndex + 1}`}
        />
        <figcaption>
          <span>{projectTitle}</span>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
      <button
        className="lightbox-arrow lightbox-next"
        type="button"
        onClick={next}
        aria-label="Sljedeća slika"
      >
        →
      </button>
    </div>
  );
}
