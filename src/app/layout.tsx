import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import JsonLd from "@/components/seo/json-Id";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-jetbrains-mono',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zineddine.vercel.app"),
  title: {
    default: "Rouabah Zine Eddine | Software Engineer",
    template: "%s",
  },
  description: "Official portfolio of Rouabah Zine Eddine, a software engineer based in Algeria specializing in Next.js, Laravel, and full-stack web development.",
  keywords: ["Rouabah Zine Eddine", "Software Engineer Algeria", "Full Stack Developer Blida", "Next.js Developer", "Laravel Developer", "SnovaTech"],
  authors: [{ name: "Rouabah Zine Eddine" }],
  openGraph: {
    title: "Rouabah Zine Eddine | Software Engineer",
    description: "Building reliable, well-structured web applications.",
    url: "https://zineddine.vercel.app",
    siteName: "Rouabah Zine Eddine Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rouabah Zine Eddine - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rouabah Zine Eddine | Software Engineer",
    description: "Full-stack web development focused on performance and reliability.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zineddine.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "UcnkBGrdaj_TDDrWUE5Lbqx7xIU_lSOzZ2xtwHTg65c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
        <body className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-white`}>
          <JsonLd />
          <div className="grain-overlay" />
          <Script

          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="c99fa3a9-7f61-4053-a892-9a79b5387a9e"
        />
        {children}
      </body>
    </html>
  );
}
