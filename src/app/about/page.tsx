import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rouabah Zine Eddine | Expert Software Engineer",
  description: "Learn more about Rouabah Zine Eddine's journey, expertise in web technologies, and commitment to building reliable software systems.",
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            About <span className="text-white/40">The Architect</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            A software engineering professional focused on building reliable, well-structured web applications and continuously deepening his understanding of computer systems and networks.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section className="space-y-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white/80 border-b border-white/10 pb-4">
              Core Philosophy
            </h2>
            <div className="prose prose-invert prose-lg">
              <p>
                In an era of rapidly evolving technology, my approach remains grounded in the fundamentals of computer science and system architecture. I believe that true innovation stems from a deep understanding of how systems interact at every level—from the application layer down to the network infrastructure.
              </p>
              <p>
                My work is characterized by a commitment to precision, scalability, and resilience. Whether I'm architecting a complex healthcare management system or optimizing a real-time data pipeline, my goal is always to deliver solutions that are not just functional, but enduring.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white/80 border-b border-white/10 pb-4">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-bold uppercase text-xs tracking-widest mb-2 text-white/40">Frontend</h3>
                <p className="text-sm font-medium">Next.js, React, Tailwind CSS, Framer Motion</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-bold uppercase text-xs tracking-widest mb-2 text-white/40">Backend</h3>
                <p className="text-sm font-medium">Node.js, PostgreSQL, Supabase, Drizzle ORM</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-bold uppercase text-xs tracking-widest mb-2 text-white/40">Systems</h3>
                <p className="text-sm font-medium">Network Architecture, CCNA Certified, Linux</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-bold uppercase text-xs tracking-widest mb-2 text-white/40">Strategy</h3>
                <p className="text-sm font-medium">SEO Optimization, Performance Tuning, UI/UX</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-24 py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-12">Professional Journey</h2>
          <div className="space-y-12">
            {[
              {
                year: "Current",
                role: "Lead Software Engineer",
                company: "Snovatech",
                description: "Leading the development of high-performance web applications and overseeing technical architecture for diverse client projects."
              },
              {
                year: "2023",
                role: "System Architect",
                company: "Healthcare Solutions",
                description: "Designed and implemented robust management systems for medical facilities, focusing on data security and operational efficiency."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-4xl font-black text-white/20">{item.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.role} @ {item.company}</h3>
                  <p className="text-white/60 max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
