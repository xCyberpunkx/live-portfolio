import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";
import { Code, Server, Layout, Search, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Software Engineering & System Architecture",
  description: "Explore the range of professional services offered by Rouabah Zine Eddine, including custom web development, system architecture design, and SEO optimization.",
};

const services = [
  {
    title: "Web Application Development",
    description: "Building high-performance, scalable web applications using Next.js and React. Focused on clean code and exceptional user experience.",
    icon: <Layout className="w-8 h-8" />,
    features: ["Custom React Components", "Next.js App Router", "Tailwind CSS Styling", "State Management"]
  },
  {
    title: "System Architecture",
    description: "Designing resilient backend infrastructures and database schemas. Expertise in PostgreSQL, Supabase, and distributed systems.",
    icon: <Server className="w-8 h-8" />,
    features: ["Database Schema Design", "API Development", "Microservices Architecture", "Cloud Integration"]
  },
  {
    title: "Network & Security",
    description: "CCNA certified networking expertise to ensure your digital infrastructure is secure, reliable, and optimized for performance.",
    icon: <Shield className="w-8 h-8" />,
    features: ["Network Configuration", "Security Audits", "Infrastructure Planning", "Connectivity Solutions"]
  },
  {
    title: "SEO Optimization",
    description: "Implementing technical SEO best practices to maximize search engine visibility and improve brand authority.",
    icon: <Search className="w-8 h-8" />,
    features: ["Schema Markup", "Core Web Vitals", "Sitemap & Robots.txt", "Performance Optimization"]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
        
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            Our <span className="text-white/40">Services</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Professional solutions tailored for the modern digital landscape. We combine technical excellence with strategic thinking.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
                    <Zap size={12} className="text-white/60" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Ready to start a project?</h2>
          <p className="text-white/60 max-w-xl mx-auto  ">
            Whether you need a full-scale application or technical consulting, I'm here to help you build something remarkable.
          </p>
         
        </section>
      </div>
      <Footer />
    </main>
  );
}
