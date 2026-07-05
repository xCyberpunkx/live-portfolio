import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rouabah Zine Eddine",
  description: "Learn how your data is handled and protected when you visit the official portfolio of Rouabah Zine Eddine.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
        
        <header className="mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            Privacy <span style={{ color: "var(--text-muted)" }}>Policy</span>
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>Last updated: December 25, 2025</p>
        </header>

        <div className="prose prose-lg max-w-4xl" style={{ color: "var(--text-secondary)" }}>
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-primary)" }}>Introduction</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your information when you visit my portfolio website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-primary)" }}>Information Collection</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I may collect personal information that you voluntarily provide through contact forms, such as your name, email address, and message content. Additionally, I may collect non-personal information like browser type and IP address for analytics purposes to improve the site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-primary)" }}>How Information is Used</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The information collected is used solely to respond to your inquiries, provide the requested services, and analyze website traffic to enhance user experience. I do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-primary)" }}>Cookies</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              This website may use cookies to improve your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-primary)" }}>Contact</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              If you have any questions about this Privacy Policy, please contact me at <a href="mailto:rouabah.zineedinee@gmail.com" className="underline hover:text-blue-400" style={{ color: "var(--text-primary)" }}>rouabah.zineedinee@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
