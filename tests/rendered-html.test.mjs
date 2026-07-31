import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Davini homepage with SEO and navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Davini \| Dizajn interijera i arhitektura Zagreb<\/title>/i,
  );
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.davini\.hr\/"/i);
  assert.match(html, /"@type":"ProfessionalService"/);
  assert.match(html, /href="\/studio\/"/);
  assert.match(html, /href="\/usluge\/"/);
  assert.match(html, /href="\/stilovi\/"/);
  assert.match(html, /href="\/portfolio\/"/);
  assert.match(html, /https:\/\/www\.agmedia\.hr/);
});

test("renders responsive portfolio previews while keeping full lightbox images", async () => {
  const response = await render("/portfolio/vila-kostrena/");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /portfolio-previews\/vila-kostrena\/01-640\.webp/);
  assert.match(html, /portfolio-previews\/vila-kostrena\/01-1280\.webp/);
  assert.match(html, /portfolio-previews\/vila-kostrena\/01-1920\.webp/);
  assert.match(html, /portfolio\/vila-kostrena\/01\.webp/);
});

test("build contains production entry points and responsive image variants", async () => {
  await Promise.all([
    access(new URL("../dist/client/index.html", import.meta.url)),
    access(new URL("../dist/client/.htaccess", import.meta.url)),
    access(new URL("../dist/client/robots.txt", import.meta.url)),
    access(new URL("../dist/client/sitemap.xml", import.meta.url)),
    access(
      new URL(
        "../dist/client/portfolio-previews/vila-kostrena/01-640.webp",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../dist/client/portfolio-previews/vila-kostrena/01-1280.webp",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../dist/client/portfolio-previews/vila-kostrena/01-1920.webp",
        import.meta.url,
      ),
    ),
  ]);

  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  assert.match(css, /@media \(max-width: 820px\)[\s\S]*?\.hero-visual\s*\{[\s\S]*?aspect-ratio:\s*1/);
  assert.match(
    css,
    /\.motion-char-mask\s*\{[\s\S]*?overflow:\s*visible;[\s\S]*?vertical-align:\s*baseline;/,
  );
});
