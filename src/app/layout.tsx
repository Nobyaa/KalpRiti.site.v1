import type { Metadata, Viewport } from "next";
import { altone, qurova } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e2ebf2",
};

export const metadata: Metadata = {
  title: "KalpRiti — A Founder-Led Creative Studio",
  description:
    "We build campaign experiences where the story, the interaction, and the next step are designed together, so people see why your product matters to them.",
  keywords: [
    "creative studio",
    "campaign experience",
    "interactive campaign",
    "complex products",
    "founder-led",
    "KalpRiti",
  ],
  authors: [{ name: "Vaibhav Kumbhar" }],
  icons: {
    icon: [
      {
        url: "/Assets/Logos/Icon_Dark.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Assets/Logos/Icon_Light.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/Assets/Logos/Icon_Dark.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Assets/Logos/Icon_Light.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${altone.variable} ${qurova.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-bg text-ink selection:bg-highlight selection:text-ink antialiased">
        <MotionProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
