import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Davini | Dizajn interijera i arhitektura",
  description:
    "Davini studio za dizajn interijera, 3D vizualizaciju, projektnu dokumentaciju i namještaj po mjeri.",
  icons: {
    icon: "/logo-davini.svg",
    shortcut: "/logo-davini.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
