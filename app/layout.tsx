import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Appki.co"),
  title:
    "Appki — Cartagena Segura | Valerio, Safe Change, eSIM y Soluciones para Negocios",
  description:
    "Appki conecta y fortalece el mercado turístico de Cartagena: guía turística con IA, cambio de divisas seguro, eSIM instantánea y soluciones para negocios. Únete como Early Adopter.",
  keywords: [
    "Cartagena turismo",
    "soluciones digitales turísticas",
    "eSIM Cartagena",
    "cambio de divisas seguro",
    "guía turística IA",
    "Valerio chatbot",
    "Early Adopters",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://Appki.co",
    title: "Appki — Cartagena Segura",
    description: "Appki conecta y fortalece el mercado turístico de Cartagena",
    siteName: "Appki",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Appki - Cartagena Segura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appki — Cartagena Segura",
    description: "Appki conecta y fortalece el mercado turístico de Cartagena",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://Appki.co",
    languages: {
      "es-CO": "https://Appki.co/es",
      "en-US": "https://Appki.co/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable}`}
      style={{ margin: 0, padding: 0 }}
    >
      <head>
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Appki",
              url: "https://Appki.co",
              logo: "https://Appki.co/logo.svg",
              description:
                "Primera herramienta digital que conecta y fortalece el mercado turístico de Cartagena",
              sameAs: [
                "https://instagram.com/Appki",
                "https://facebook.com/Appki",
                "https://linkedin.com/company/Appki",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["es", "en"],
              },
            }),
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Header />
        <main style={{ margin: 0, padding: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
