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
  title: "ai365.business — Industrial AI Solutions",
  description:
    "Claude-powered plugins, connectors, and training for industrial operations. Manufacturing, automotive, smart buildings, and smart cities.",
  manifest: "/manifest.json",
  openGraph: {
    title: "ai365.business — Industrial AI Solutions",
    description:
      "Claude-powered plugins, connectors, and training for industrial operations.",
    url: "https://ai365.business",
    siteName: "ai365.business",
    type: "website",
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
