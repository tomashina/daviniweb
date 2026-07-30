import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

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
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
