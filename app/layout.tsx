import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Davini | Dizajn interijera i arhitektura Zagreb",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Dizajn interijera",
  keywords: [
    "dizajn interijera Zagreb",
    "arhitektura interijera",
    "3D vizualizacija interijera",
    "projektna dokumentacija",
    "namještaj po mjeri",
    "uređenje interijera",
    "Davini",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/davini-d-dark.svg", type: "image/svg+xml" },
      { url: "/davini-d-dark.ico", sizes: "any" },
      {
        url: "/davini-d-dark-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/davini-d-dark.ico",
    apple: [
      {
        url: "/davini-d-dark-apple.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "/",
    siteName: SITE_NAME,
    title: "Davini | Dizajn interijera i arhitektura Zagreb",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero-interior.jpg",
        width: 677,
        height: 411,
        alt: "Interijer koji je oblikovao Davini studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davini | Dizajn interijera i arhitektura Zagreb",
    description: SITE_DESCRIPTION,
    images: ["/images/hero-interior.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1a18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <head>
        <link
          rel="preload"
          href="/fonts/satoshi-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/general-sans-light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
