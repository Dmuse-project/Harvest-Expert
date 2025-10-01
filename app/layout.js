import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// app/layout.js
export const metadata = {
  title: "Harvest Expert LTD | Professional Cleaning Services in Nigeria",
  description:
    "Harvest Expert LTD provides professional cleaning services for homes, offices, and businesses across Nigeria. Experience spotless, refreshing spaces — cleaned by experts you can trust.",
  keywords: [
    "cleaning company in Nigeria",
    "professional cleaners Lagos",
    "office cleaning services",
    "home cleaning Nigeria",
    "deep cleaning service",
    "Harvest Expert LTD",
    "post construction cleaning",
    "residential cleaning",
  ],
  openGraph: {
    title: "Harvest Expert LTD | Premium Cleaning Services",
    description:
      "Professional cleaning services for homes and offices across Nigeria. Book a cleaning session today with Harvest Expert LTD.",
    url: "https://www.harvestexpertltd.com",
    siteName: "Harvest Expert LTD",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/cleaning__3.jpg",
        width: 1200,
        height: 630,
        alt: "Harvest Expert LTD Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvest Expert LTD | Cleaning Services in Nigeria",
    description:
      "Professional home and office cleaning services across Nigeria. Trusted by homes and businesses nationwide.",
    images: ["/images/cleaning__3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.harvestexpertltd.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
            <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
