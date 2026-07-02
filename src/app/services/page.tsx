import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";
import { Server, Layout, Search, Shield, Zap, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Software Engineering & System Architecture",
  description: "Explore the range of professional services offered by Rouabah Zine Eddine, including custom web development, system architecture design, and SEO optimization.",
};

const services = [
  {
    title: "Web Application Development",
    description: "Building high-performance, scalable web applications using Next.js and React. Focused on clean code and exceptional user experience.",
    icon: Layout,
    features: ["Custom React Components", "Next.js App Router", "Tailwind CSS Styling", "State Management"],
  },
  {
    title: "System Architecture",
    description: "Designing resilient backend infrastructures and database schemas. Expertise in PostgreSQL, Supabase, and distributed systems.",
    icon: Server,
    features: ["Database Schema Design", "API Development", "Microservices Architecture", "Cloud Integration"],
  },
  {
    title: "Network & Security",
    description: "CCNA certified networking expertise to ensure your digital infrastructure is secure, reliable, and optimized for performance.",
    icon: Shield,
    features: ["Network Configuration", "Security Audits", "Infrastructure Planning", "Connectivity Solutions"],
  },
  {
    title: "SEO Optimization",
    description: "Implementing technical SEO best practices to maximize search engine visibility and improve brand authority.",
    icon: Search,
    features: ["Schema Markup", "Core Web Vitals", "Sitemap & Robots.txt", "Performance Optimization"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

        <header className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase block mb-6">
            SERVICE_CATALOG
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white">
            What I <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Build</span>
          </h1>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            Professional solutions tailored for the modern digital landscape — technical execution paired with system-level thinking.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="font-technical text-[9px] text-white/20 uppercase tracking-widest">{`0${index + 1}`}</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">{service.title}</h2>
              <p className="text-white/50 mb-8 leading-relaxed">{service.description}</p>
              <ul className="grid grid-cols-2 gap-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    <Zap size={11} className="text-blue-400/70 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
          <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase block mb-6">
            INITIATE_PROJECT
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">
            Ready to start a project?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you need a full-scale application or technical consulting, I&apos;m here to help you build something remarkable.
          </p>
          <a
            href="/#contact"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-all duration-500"
          >
            Get In Touch
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
