import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollAnimations from "./scroll-animations";
import {
  GOOGLE_ANALYTICS_ID,
  GOOGLE_SITE_VERIFICATION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./site-config";

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
        url: "/site-assets/hero-1536.webp",
        width: 1536,
        height: 864,
        alt: "Interijer koji je oblikovao Davini studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davini | Dizajn interijera i arhitektura Zagreb",
    description: SITE_DESCRIPTION,
    images: ["/site-assets/hero-1536.webp"],
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
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
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
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="preload"
          href="/fonts/satoshi-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {GOOGLE_ANALYTICS_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config',${JSON.stringify(
                  GOOGLE_ANALYTICS_ID,
                )});`,
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        {children}
        <ScrollAnimations />
      </body>
    </html>
  );
}
