import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Rouabah Zine Eddine",
  description: "Read the terms and conditions for using the official portfolio website of Rouabah Zine Eddine.",
};

export default function TermsPage() {
  return (
    <main className="bg-zinc-950 min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />
        
        <header className="mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Terms of <span className="text-white/50">Service</span>
          </h1>
          <p className="text-white/70">Last updated: December 25, 2025</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-4xl">
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-white/70 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">2. Use License</h2>
            <p className="text-white/70 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on Rouabah Zine Eddine's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">3. Disclaimer</h2>
            <p className="text-white/70 leading-relaxed">
              The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">4. Limitations</h2>
            <p className="text-white/70 leading-relaxed">
              In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on my website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-6">5. Revisions and Errata</h2>
            <p className="text-white/70 leading-relaxed">
              The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on its website are accurate, complete or current.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
