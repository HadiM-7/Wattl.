import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wattl. | Portable Power Bank Rentals",
    template: "%s | Wattl.",
  },
  description:
    "Australia's first dedicated power bank rental network. Grab a charger, stay connected, return it when you're done.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Wattl.",
    title: "Wattl. | Portable Power Bank Rentals",
    description:
      "Australia's first dedicated power bank rental network. Grab a charger, stay connected, return it when you're done.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wattl Charging PTY LTD",
  url: "https://wattl.io",
  description:
    "Australia's first dedicated power bank rental network.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "164 Blaxcell Street",
    addressLocality: "Granville",
    addressRegion: "NSW",
    postalCode: "2142",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61423234799",
    contactType: "customer service",
    email: "info@wattl.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
