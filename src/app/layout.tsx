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
  metadataBase: new URL("https://kalpriti.com"),
  title: {
    default: "KalpRiti — We Change How Complex Products Are Marketed",
    template: "%s — KalpRiti",
  },
  description:
    "We build Interadaptive Campaigns for premium smart home, consumer electronics, and complex technology companies. Stories you can step into.",
  keywords: [
    "interadaptive campaigns",
    "creative studio",
    "smart home marketing",
    "consumer electronics campaign",
    "complex product storytelling",
    "interactive campaign experience",
    "KalpRiti",
    "Vaibhav Kumbhar",
  ],
  authors: [{ name: "Vaibhav Kumbhar", url: "https://kalpriti.com/about" }],
  openGraph: {
    title: "KalpRiti — We Change How Complex Products Are Marketed",
    description:
      "We build Interadaptive Campaigns for premium smart home, consumer electronics, and complex tech companies. Stories you can step into.",
    url: "https://kalpriti.com",
    siteName: "KalpRiti",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KalpRiti — We Change How Complex Products Are Marketed",
    description:
      "Interadaptive campaign experiences for complex products. Stories you can step into.",
  },
  icons: {
    icon: [
      {
        url: "/Assets/Logos/Icon_Dark.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/Assets/Logos/Icon_Dark.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KalpRiti",
    description:
      "We build Interadaptive Campaigns for premium smart home, consumer electronics, and complex technology companies.",
    url: "https://kalpriti.com",
    founder: {
      "@type": "Person",
      name: "Vaibhav Kumbhar",
      jobTitle: "Founder & Creative Strategist",
      sameAs: "https://www.linkedin.com/in/vaibhav-kalpriti/",
    },
    knowsAbout: [
      "Interadaptive Campaigns",
      "Creative Strategy",
      "Consumer Tech Marketing",
      "Smart Home Marketing",
      "Interactive 3D Experiences",
    ],
    areaServed: ["India", "Global"],
  };

  return (
    <html lang="en" className={`${altone.variable} ${qurova.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
