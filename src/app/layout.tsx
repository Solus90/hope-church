import type { Metadata } from "next";
import { DM_Serif_Text, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const dmSerif = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const baseUrl = "https://www.hopechurchcolumbus.org";

export const metadata: Metadata = {
  title: {
    default: "Hope Presbyterian Church | Columbus, OH",
    template: "%s | Hope Presbyterian Church",
  },
  description:
    "Ordinary people extending the extraordinary welcome of Jesus. Join us Sundays at 10am at the Nationwide & Ohio Farm Bureau 4-H Center, Columbus, OH.",
  keywords: [
    "Hope Presbyterian Church",
    "church Columbus Ohio",
    "Presbyterian church Columbus",
    "EPC Columbus",
    "Ohio State church",
    "Columbus church",
  ],
  openGraph: {
    title: "Hope Presbyterian Church | Columbus, OH",
    description:
      "Ordinary people extending the extraordinary welcome of Jesus.",
    url: baseUrl,
    siteName: "Hope Presbyterian Church",
    locale: "en_US",
    type: "website",
    images: [{ url: `${baseUrl}/logo-reversed.png`, width: 400, height: 400, alt: "Hope Presbyterian Church" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope Presbyterian Church | Columbus, OH",
    description: "Ordinary people extending the extraordinary welcome of Jesus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Hope Presbyterian Church",
    description: "Ordinary people extending the extraordinary welcome of Jesus.",
    url: baseUrl,
    telephone: "+1-614-526-4194",
    email: "operations@hopechurchcolumbus.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2201 Fred Taylor Dr",
      addressLocality: "Columbus",
      addressRegion: "OH",
      postalCode: "43210",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.0087,
      longitude: -83.0375,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "11:30",
    },
  };

  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MotionProvider>
          <a
            href="#main-content"
            className="skip-link"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
