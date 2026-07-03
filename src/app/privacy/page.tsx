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
    <main className="bg-zinc-950 min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
        
        <header className="mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Privacy <span className="text-white/50">Policy</span>
          </h1>
          <p className="text-white/70">Last updated: December 25, 2025</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-4xl">
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">Introduction</h2>
            <p className="text-white/70 leading-relaxed">
              Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your information when you visit my portfolio website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">Information Collection</h2>
            <p className="text-white/70 leading-relaxed">
              I may collect personal information that you voluntarily provide through contact forms, such as your name, email address, and message content. Additionally, I may collect non-personal information like browser type and IP address for analytics purposes to improve the site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">How Information is Used</h2>
            <p className="text-white/70 leading-relaxed">
              The information collected is used solely to respond to your inquiries, provide the requested services, and analyze website traffic to enhance user experience. I do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">Cookies</h2>
            <p className="text-white/70 leading-relaxed">
              This website may use cookies to improve your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">Contact</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact me at <a href="mailto:rouabah.zineedinee@gmail.com" className="text-white underline hover:text-blue-400">rouabah.zineedinee@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
