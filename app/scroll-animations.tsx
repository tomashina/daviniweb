"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const clamp = (value: number, minimum = 0, maximum = 1) =>
  Math.min(Math.max(value, minimum), maximum);

function splitCharacters(element: HTMLElement) {
  const label =
    element.getAttribute("aria-label") ??
    element.textContent?.replace(/\s+/g, " ").trim();
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

  if (label) {
    element.setAttribute("aria-label", label);
  }
}

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

export default function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.documentElement;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const heroHeading = document.querySelector<HTMLElement>(".hero h1");
    const sectionHeadings = Array.from(
      document.querySelectorAll<HTMLElement>("main h2"),
    );
    const header = document.querySelector<HTMLElement>(".site-header");
    const mobileMenu =
      document.querySelector<HTMLDetailsElement>(".mobile-nav");
    const mobileMenuLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".mobile-nav a"),
    );
    const lenis = isTouchDevice
      ? null
      : new Lenis({
          autoRaf: true,
          lerp: 0.115,
          smoothWheel: true,
          syncTouch: false,
          wheelMultiplier: 1,
          anchors: true,
        });

    const closeMobileMenu = () => {
      if (mobileMenu?.open) {
        mobileMenu.removeAttribute("open");
      }
    };

    mobileMenuLinks.forEach((link) =>
      link.addEventListener("click", closeMobileMenu),
    );

    if (heroHeading) {
      splitCharacters(heroHeading);
    }

    sectionHeadings.forEach(splitWords);

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
        ".project-card, .story-image",
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
        ".hero-visual > img, .story-image img",
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
      closeMobileMenu();
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
      mobileMenuLinks.forEach((link) =>
        link.removeEventListener("click", closeMobileMenu),
      );
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      root.classList.remove("motion-ready", "hero-entered");
    };
  }, []);

  return null;
}
