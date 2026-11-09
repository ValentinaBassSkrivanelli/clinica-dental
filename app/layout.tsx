import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const titulo = `${siteConfig.name}, dentistas en ${siteConfig.city}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titulo,
    template: `%s | ${siteConfig.short}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: titulo,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
  },
  robots: siteConfig.demo ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#F6F7F5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.city,
    addressRegion: "Salta",
    addressCountry: "AR",
  },
  areaServed: siteConfig.city,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${display.variable} ${sans.variable}`}>
      <body>
        {!siteConfig.demo && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-grafito focus:px-4 focus:py-2 focus:text-porcelana"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
