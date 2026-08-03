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
  applicationName: property.name,
  title: property.seo.title,
  description: property.seo.description,
  keywords: [...property.seo.keywords],
  category: "Imóveis",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: property.name,
    title: property.seo.socialTitle,
    description: property.seo.description,
    images: [property.seo.image],
  },
  twitter: {
    card: "summary_large_image",
    title: property.seo.socialTitle,
    description: property.seo.description,
    images: [property.seo.image.url],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
