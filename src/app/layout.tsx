import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai365.business"),
  title: {
    default: "ai365.business — Industrial AI Solutions",
    template: "%s | ai365.business",
  },
  description:
    "Claude-powered plugins, connectors, and training for industrial operations. Manufacturing, automotive, smart buildings, and smart cities.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "ai365.business — Industrial AI Solutions",
    description:
      "Claude-powered plugins, connectors, and training for industrial operations.",
    url: "https://ai365.business",
    siteName: "ai365.business",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ai365.business — Industrial AI Solutions",
    description:
      "Claude-powered plugins, connectors, and training for industrial operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-primary text-text-primary`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
