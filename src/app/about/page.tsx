import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rouabah Zine Eddine | Expert Software Engineer",
  description: "Learn more about Rouabah Zine Eddine's journey, expertise in web technologies, and commitment to building reliable software systems.",
};

const journey = [
  {
    year: "Current",
    role: "Lead Software Engineer",
    company: "Snovatech",
    status: "ACTIVE",
    description: "Leading the development of high-performance web applications and overseeing technical architecture for diverse client projects.",
  },
  {
    year: "2023",
    role: "System Architect",
    company: "Healthcare Solutions",
    status: "COMPLETED",
    description: "Designed and implemented robust management systems for medical facilities, focusing on data security and operational efficiency.",
  },
];

const expertise = [
  { label: "Frontend", stack: "Next.js, React, Tailwind CSS, Framer Motion" },
  { label: "Backend", stack: "Node.js, PostgreSQL, Supabase, Drizzle ORM" },
  { label: "Systems", stack: "Network Architecture, CCNA Certified, Linux" },
  { label: "Strategy", stack: "SEO Optimization, Performance Tuning, UI/UX" },
];

const STATUS_STYLES: Record<string, string> = {
  ACTIVE: "bg-green-500",
  COMPLETED: "bg-blue-500",
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

        <header className="mb-20 max-w-3xl">
          <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase block mb-6">
            PROFILE_RECORD
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white leading-[0.9]">
            About <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>The Architect</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
            A software engineering professional focused on building reliable, well-structured web applications and continuously deepening his understanding of computer systems and networks.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <section className="p-8 md:p-10 bg-white/[0.02] border border-white/10 rounded-2xl space-y-6">
            <span className="text-[10px] font-technical text-blue-400/70 uppercase tracking-[0.4em] block">Core Philosophy</span>
            <p className="text-white/60 leading-relaxed">
              In an era of rapidly evolving technology, my approach remains grounded in the fundamentals of computer science and system architecture. I believe that true innovation stems from a deep understanding of how systems interact at every level — from the application layer down to the network infrastructure.
            </p>
            <p className="text-white/60 leading-relaxed">
              My work is characterized by a commitment to precision, scalability, and resilience. Whether I&apos;m architecting a complex healthcare management system or optimizing a real-time data pipeline, my goal is always to deliver solutions that are not just functional, but enduring.
            </p>
          </section>

          <section className="p-8 md:p-10 bg-white/[0.02] border border-white/10 rounded-2xl space-y-6">
            <span className="text-[10px] font-technical text-blue-400/70 uppercase tracking-[0.4em] block">Technical Expertise</span>
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-white/[0.02] border border-white/10 rounded-lg hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <h3 className="font-technical text-[9px] uppercase tracking-[0.3em] mb-2 text-white/40">{item.label}</h3>
                  <p className="text-sm font-medium text-white/80">{item.stack}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="pt-16 border-t border-white/5">
          <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase block mb-4">
            Session Log
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-white">
            Professional Journey
          </h2>
          <div className="space-y-4">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-colors"
              >
                <div className="md:w-28 flex-shrink-0 flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${STATUS_STYLES[item.status]} ${item.status === "ACTIVE" ? "animate-pulse" : ""}`} />
                  <span className="text-sm font-black text-white/40 uppercase">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    {item.role} <span className="text-white/30 font-technical text-xs">@ {item.company}</span>
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-2xl">{item.description}</p>
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
