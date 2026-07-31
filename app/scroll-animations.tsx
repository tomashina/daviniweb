"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const clamp = (value: number, minimum = 0, maximum = 1) =>
  Math.min(Math.max(value, minimum), maximum);

function splitWords(element: HTMLElement) {
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(
    element,
    window.NodeFilter.SHOW_TEXT,
  );

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.nodeValue?.trim()) {
      textNodes.push(node);
    }
  }

  let wordIndex = 0;

  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    const tokens = node.nodeValue?.split(/(\s+)/) ?? [];

    tokens.forEach((token) => {
      if (!token.trim()) {
        fragment.appendChild(document.createTextNode(token));
        return;
      }

      const word = document.createElement("span");
      word.className = "motion-heading-word";
      word.textContent = token;
      word.dataset.wordIndex = wordIndex.toString();
      fragment.appendChild(word);
      wordIndex += 1;
    });

    node.replaceWith(fragment);
  });

  element.dataset.wordCount = wordIndex.toString();
}

function splitCharacters(element: HTMLElement) {
  const accessibleLabel = element.textContent?.replace(/\s+/g, " ").trim();
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(
    element,
    window.NodeFilter.SHOW_TEXT,
  );

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.nodeValue?.trim()) {
      textNodes.push(node);
    }
  }

  let characterIndex = 0;

  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    const tokens = node.nodeValue?.split(/(\s+)/) ?? [];

    tokens.forEach((token) => {
      if (!token.trim()) {
        fragment.appendChild(document.createTextNode(token));
        return;
      }

      const word = document.createElement("span");
      word.className = "motion-char-word";

      Array.from(token).forEach((character) => {
        const mask = document.createElement("span");
        const characterElement = document.createElement("span");

        mask.className = "motion-char-mask";
        characterElement.className = "motion-char";
        characterElement.textContent = character;
        characterElement.style.setProperty(
          "--char-index",
          characterIndex.toString(),
        );
        mask.appendChild(characterElement);
        word.appendChild(mask);
        characterIndex += 1;
      });

      fragment.appendChild(word);
    });

    node.replaceWith(fragment);
  });

  if (accessibleLabel) {
    element.setAttribute("aria-label", accessibleLabel);
  }
}

export default function ScrollAnimations() {
  useEffect(() => {
    const root = document.documentElement;
    const mobileMenu =
      document.querySelector<HTMLDetailsElement>(".mobile-nav");
    const mobileMenuSummary =
      mobileMenu?.querySelector<HTMLElement>("summary");
    const mobileMenuLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".mobile-nav a"),
    );

    const syncMobileMenu = () => {
      const isOpen = Boolean(mobileMenu?.open);

      root.classList.toggle("mobile-menu-open", isOpen);
      mobileMenuSummary?.setAttribute("aria-expanded", String(isOpen));
      mobileMenuSummary?.setAttribute(
        "aria-label",
        isOpen
          ? "Zatvori navigacijski izbornik"
          : "Otvori navigacijski izbornik",
      );
    };

    const closeMobileMenu = () => {
      if (mobileMenu?.open) {
        mobileMenu.removeAttribute("open");
        syncMobileMenu();
      }
    };

    const closeMobileMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !mobileMenu?.open) return;

      closeMobileMenu();
      mobileMenuSummary?.focus();
    };

    mobileMenu?.addEventListener("toggle", syncMobileMenu);
    mobileMenuLinks.forEach((link) =>
      link.addEventListener("click", closeMobileMenu),
    );
    window.addEventListener("keydown", closeMobileMenuOnEscape);
    window.addEventListener("resize", closeMobileMenu);
    window.addEventListener("wheel", closeMobileMenu, { passive: true });
    window.addEventListener("touchmove", closeMobileMenu, { passive: true });
    syncMobileMenu();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        mobileMenu?.removeEventListener("toggle", syncMobileMenu);
        mobileMenuLinks.forEach((link) =>
          link.removeEventListener("click", closeMobileMenu),
        );
        window.removeEventListener("keydown", closeMobileMenuOnEscape);
        window.removeEventListener("resize", closeMobileMenu);
        window.removeEventListener("wheel", closeMobileMenu);
        window.removeEventListener("touchmove", closeMobileMenu);
        root.classList.remove("mobile-menu-open");
      };
    }

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const sectionHeadings = Array.from(
      document.querySelectorAll<HTMLElement>("main h2"),
    ).filter((heading) => !heading.closest(".portfolio-index-card"));
    const pageHeadings = Array.from(
      document.querySelectorAll<HTMLElement>("main h1"),
    );
    const header = document.querySelector<HTMLElement>(".site-header");
    const lenis = isTouchDevice
      ? null
      : new Lenis({
          autoRaf: true,
          lerp: 0.1,
          smoothWheel: true,
          syncTouch: false,
          wheelMultiplier: 1,
          anchors: true,
        });

    sectionHeadings.forEach(splitWords);
    pageHeadings.forEach(splitCharacters);

    const revealSelectors = [
      ".section-kicker",
      ".intro-copy > p",
      ".stats > div",
      ".services-heading > p",
      ".services-list article",
      ".sectors",
      ".portfolio-heading > p",
      ".project-overlay",
      ".portfolio-action",
      ".story-copy > .eyebrow",
      ".story-copy > p:last-child",
      ".process-steps article",
      ".pricing-intro > p",
      ".pricing-list > div",
      ".pricing-list > p",
      ".contact-top > .eyebrow",
      ".contact-bottom > *",
      ".inner-hero > :not(h1)",
      ".editorial-grid > *",
      ".principle-grid article",
      ".reason-list article",
      ".deliverables-grid article",
      ".space-list article",
      ".style-grid article",
      ".palette > div",
      ".reference-list > div",
      ".project-detail-copy > :not(h1)",
      ".portfolio-index-card > div > *",
      ".next-project > *",
      "footer > *",
    ];

    const revealElements = Array.from(
      new Set(
        revealSelectors.flatMap((selector) =>
          Array.from(document.querySelectorAll<HTMLElement>(selector)),
        ),
      ),
    );
    const imageElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".project-card, .story-image, .turnkey-section > img, .organic-feature-image, .project-detail-cover, .project-gallery figure",
      ),
    );

    revealElements.forEach((element) =>
      element.classList.add("motion-reveal"),
    );
    imageElements.forEach((element) =>
      element.classList.add("motion-image-reveal"),
    );

    const setStagger = (selector: string, step: number) => {
      document
        .querySelectorAll<HTMLElement>(selector)
        .forEach((element, index) =>
          element.style.setProperty("--motion-delay", `${index * step}ms`),
        );
    };

    setStagger(".stats > div", 90);
    setStagger(".services-list article", 65);
    setStagger(".project-card", 70);
    setStagger(".process-steps article", 70);
    setStagger(".pricing-list > div", 55);
    setStagger(".contact-bottom > *", 90);
    setStagger(".principle-grid article", 70);
    setStagger(".reason-list article", 60);
    setStagger(".deliverables-grid article", 55);
    setStagger(".style-grid article", 55);
    document
      .querySelectorAll<HTMLElement>(".portfolio-index-card")
      .forEach((card) =>
        card
          .querySelectorAll<HTMLElement>("div > *")
          .forEach((element, index) =>
            element.style.setProperty("--motion-delay", `${index * 90}ms`),
          ),
      );
    setStagger(".reference-list > div", 35);
    setStagger("footer > *", 80);

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.04,
      },
    );

    revealElements.forEach((element) => observer.observe(element));
    imageElements.forEach((element) => observer.observe(element));

    const parallaxImages = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".story-image img, .turnkey-section > img, .organic-feature-image img, .project-detail-cover img",
      ),
    );

    let frame = 0;

    const updateMotion = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;

      header?.classList.toggle("is-scrolled", window.scrollY > 48);

      sectionHeadings.forEach((heading) => {
        const bounds = heading.getBoundingClientRect();
        const start = viewportHeight * 0.88;
        const end = viewportHeight * 0.4;
        const progress = clamp((start - bounds.top) / (start - end));
        const words = Array.from(
          heading.querySelectorAll<HTMLElement>(".motion-heading-word"),
        );
        const total = Math.max(words.length - 1, 1);

        words.forEach((word, index) => {
          const staggerStart = (index / total) * 0.32;
          const localProgress = clamp(
            (progress - staggerStart) / (1 - 0.32),
          );
          const eased = 1 - Math.pow(1 - localProgress, 3);

          word.style.opacity = "1";
          word.style.filter = `blur(${(1 - eased) * 6}px)`;
          word.style.transform = `translate3d(${(1 - eased) * 0.5}em, 0, 0)`;
        });
      });

      parallaxImages.forEach((image) => {
        const container = image.parentElement;
        if (!container) return;

        const bounds = container.getBoundingClientRect();
        if (bounds.bottom < -100 || bounds.top > viewportHeight + 100) return;

        const distanceFromCenter =
          bounds.top + bounds.height / 2 - viewportHeight / 2;
        const travel = clamp(
          distanceFromCenter / (viewportHeight + bounds.height),
          -0.5,
          0.5,
        );

        image.style.setProperty("--parallax-y", `${travel * -52}px`);
      });
    };

    const requestMotionUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateMotion);
      }
    };

    const heroFrame = window.requestAnimationFrame(() => {
      root.classList.add("hero-entered");
      updateMotion();
    });

    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);

    return () => {
      observer.disconnect();
      lenis?.destroy();
      window.cancelAnimationFrame(heroFrame);
      if (frame) window.cancelAnimationFrame(frame);
      mobileMenu?.removeEventListener("toggle", syncMobileMenu);
      mobileMenuLinks.forEach((link) =>
        link.removeEventListener("click", closeMobileMenu),
      );
      window.removeEventListener("keydown", closeMobileMenuOnEscape);
      window.removeEventListener("resize", closeMobileMenu);
      window.removeEventListener("wheel", closeMobileMenu);
      window.removeEventListener("touchmove", closeMobileMenu);
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      root.classList.remove(
        "mobile-menu-open",
        "motion-ready",
        "hero-entered",
      );
    };
  }, []);

  return null;
}
