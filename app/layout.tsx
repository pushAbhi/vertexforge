/**
 * Root Layout — VertexForge
 * Applies globally: fonts, metadata, Navbar, Footer
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* --------------------------------------------------------
   Fonts — Inter for all weights (headings + body)
   -------------------------------------------------------- */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/* --------------------------------------------------------
   Site Metadata
   -------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "VertexForge — Full-Stack Development & DevOps for SaaS Teams",
    template: "%s | VertexForge",
  },
  description:
    "VertexForge builds and scales SaaS products with full-stack engineering, cloud infrastructure, and DevOps. Fast-moving teams trust us to ship.",
  keywords: [
    "SaaS development",
    "Full-stack engineering",
    "DevOps",
    "Cloud infrastructure",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "VertexForge" }],
  creator: "VertexForge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vertexforge.dev",
    siteName: "VertexForge",
    title: "VertexForge — Full-Stack Development & DevOps for SaaS Teams",
    description:
      "VertexForge builds and scales SaaS products with full-stack engineering, cloud infrastructure, and DevOps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexForge — Full-Stack & DevOps for SaaS",
    description:
      "Full-stack engineering and DevOps for fast-moving SaaS teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* --------------------------------------------------------
   Root Layout Component
   -------------------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-cream text-stone antialiased">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
