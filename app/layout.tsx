import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import "@/styles/client-theme.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Top HVAC NYC — Heating & Cooling Specialists | Manhattan, NYC",
    template: "%s | Top HVAC NYC",
  },
  description:
    "Licensed HVAC repair, installation, and maintenance for Manhattan homes and businesses. Same-day service available. All major brands serviced. Call (646) 493-4904.",
  alternates: {
    canonical: "https://[TODO: production-domain]",
  },
  openGraph: {
    type: "website",
    siteName: "Top HVAC NYC",
    title: "Top HVAC NYC — Heating & Cooling Specialists | Manhattan, NYC",
    description:
      "Licensed HVAC repair, installation, and maintenance for Manhattan homes and businesses. Same-day service available. All major brands serviced.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top HVAC NYC",
        // [TODO: Add 1200x630 OG image for social sharing]
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// LocalBusiness JSON-LD structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Top HVAC NYC",
  telephone: "+16464934904",
  url: "https://[TODO: production-domain]",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", "name": "Manhattan" },
    { "@type": "Neighborhood", "name": "Upper East Side" },
    { "@type": "Neighborhood", "name": "Upper West Side" },
    { "@type": "Neighborhood", "name": "Midtown" },
    { "@type": "Neighborhood", "name": "Chelsea" },
    { "@type": "Neighborhood", "name": "Tribeca" },
    { "@type": "Neighborhood", "name": "SoHo" },
    { "@type": "Neighborhood", "name": "Financial District" },
  ],
  // [TODO: Confirm business hours with client before launch]
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
