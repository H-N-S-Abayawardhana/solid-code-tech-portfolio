import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { defaultMetadata } from "@/lib/metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <SiteJsonLd />
        <a
          href="#main-content"
          className="pointer-events-none fixed left-4 top-0 z-[100] -translate-y-full rounded-b-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-[transform,opacity] duration-200 focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
