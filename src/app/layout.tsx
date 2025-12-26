import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import JsonLd from "@/components/seo/json-Id";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Rouabah Zine Eddine | Lead Software Engineer & System Architect",
  description: "Official portfolio of Rouabah Zine Eddine, a Solution-oriented Software Engineer and CCNA certified System Architect based in Algeria. Specializing in Next.js, Network Infrastructure, and Healthcare Systems.",
  keywords: ["Rouabah Zine Eddine", "Software Engineer Algeria", "Full Stack Developer Blida", "System Architect", "CCNA", "Next.js Developer", "Snovatech", "Healthcare Management System"],
  authors: [{ name: "Rouabah Zine Eddine" }],
  openGraph: {
    title: "Rouabah Zine Eddine | Software Engineering Excellence",
    description: "Building resilient digital infrastructure and high-performance web applications.",
    url: "https://zineddine.vercel.app",
    siteName: "Rouabah Zine Eddine Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rouabah Zine Eddine - Lead Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rouabah Zine Eddine | Software Engineer",
    description: "Lead Engineer specializing in scalable architectures and systems performance.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
        <body className={`${jakarta.variable} font-sans antialiased bg-black text-white`}>
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
