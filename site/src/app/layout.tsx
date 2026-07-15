import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { property } from "@/data/property";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(property.siteUrl),
  title: "Apartamento à venda no Mundi Consciente Square | 147 m², nascente e porteira fechada",
  description: "Apartamento de 147 m² no Setor Marista, com três suítes, Prumada 1, orientação nascente, 20º andar e negociação porteira fechada.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: property.name,
    title: "Mundi Consciente Square | 147 m² · Nascente · Porteira fechada",
    description: "Prumada 1, 20º andar, três suítes e vista livre para a praça no Setor Marista.",
    images: [{ url: "/images/social/hero-varanda-vista.webp", width: 1448, height: 1086, alt: "Varanda gourmet com vista no Mundi Consciente Square" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mundi Consciente Square | Apartamento à venda",
    description: "147 m², Prumada 1, nascente, três suítes e porteira fechada.",
    images: ["/images/social/hero-varanda-vista.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
