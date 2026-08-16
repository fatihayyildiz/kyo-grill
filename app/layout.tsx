import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyogrill.example"),
  title: {
    default: "Kyo Grill — Japanese Yakitori & Izakaya in Berlin",
    template: "%s | Kyo Grill",
  },
  description:
    "Kyo Grill — binchotan charcoal yakitori and izakaya classics in two Berlin locations (Mitte & Kreuzberg). Skewers, sake and small plates, grilled over real fire.",
  openGraph: {
    title: "Kyo Grill — Japanese Yakitori & Izakaya in Berlin",
    description:
      "Binchotan charcoal yakitori in the heart of Berlin. Two locations: Mitte & Kreuzberg.",
    locale: "en_US",
    type: "website",
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyo Grill — Japanese Yakitori & Izakaya in Berlin",
    description: "Charcoal yakitori, two Berlin locations.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0908" },
    { media: "(prefers-color-scheme: light)", color: "#0a0908" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
