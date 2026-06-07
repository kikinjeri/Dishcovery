import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://aicanada.app"),
  title: {
    default: "Dishcovery | Discover Local Food in Ottawa",
    template: "%s | Dishcovery",
  },
  description:
    "Dishcovery helps you find local independent restaurants in Ottawa, get AI-powered recipes, and discover neighbourhood markets and grocery stores.",
  keywords: [
    "Ottawa restaurants",
    "local restaurants Ottawa",
    "Ottawa food",
    "Ottawa farmers markets",
    "Ottawa grocery stores",
    "Ottawa local food",
    "AI recipes",
    "Ottawa neighbourhood restaurants",
    "independent restaurants Ottawa",
    "local business discovery Ottawa",
  ],
  authors: [{ name: "Dishcovery" }],
  creator: "Dishcovery",
  publisher: "aicanada.app",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://aicanada.app",
    siteName: "Dishcovery",
    title: "Dishcovery | Discover Local Food in Ottawa",
    description:
      "Find local Ottawa restaurants, get AI-powered recipes, and discover neighbourhood markets and grocery stores.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dishcovery - Discover Local Food in Ottawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dishcovery | Discover Local Food in Ottawa",
    description:
      "Find local Ottawa restaurants, get AI-powered recipes, and discover neighbourhood markets and grocery stores.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://aicanada.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Dishcovery",
  url: "https://aicanada.app",
  description:
    "AI-powered local food and business discovery platform for Ottawa, Canada.",
  applicationCategory: "FoodEstablishment",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CAD",
  },
  publisher: {
    "@type": "Organization",
    name: "Dishcovery",
    url: "https://aicanada.app",
  },
  areaServed: {
    "@type": "City",
    name: "Ottawa",
    containedIn: "Canada",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}