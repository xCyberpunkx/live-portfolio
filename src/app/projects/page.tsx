import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Image from "next/image";
import { Metadata } from "next";
import { Github, ExternalLink, Code2, Globe, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects Portfolio | Rouabah Zine Eddine",
  description: "Explore a curated collection of software engineering projects, from solar simulation platforms to healthcare management systems.",
};

const projects = [
    {
      title: "SnovaTech Solar Simulation Platform",
      category: "Energy Technology • Web Application",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop",
      link: "https://snovatech.netlify.app/",
      github: "https://github.com/xCyberpunkx/Snovatech-Saas",
      desc: "Solar energy simulation platform for Algerian consumers with financial projections and ROI analysis. Developed with high precision to help users understand solar potential based on local data.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Financial Algorithms"],
      year: "2024"
    },
    {
      title: "Photographer Reservation Platform",
      category: "Marketplace Platform",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
      link: "https://sawerni.vercel.app/",
      github: "https://github.com/xCyberpunkx/sawerni-kv",
      desc: "Algeria's first marketplace connecting verified photographers with clients. Features automated trust scoring, secure bookings, and an elegant portfolio showcase.",
      tech: ["Next.js", "Supabase", "TypeScript", "Framer Motion"],
      year: "2025"
    },
    {
      title: "Clinic Management System",
      category: "Healthcare Software",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
      link: "https://ramdani.vercel.app/",
      github: "https://github.com/xCyberpunkx/dental-backend",
      desc: "A comprehensive dental clinic management system designed for efficiency. Handles appointment scheduling, patient electronic health records (EHR), and automated billing.",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM"],
      year: "2024"
    }
];

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />
        
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            Project <span className="text-white/40">Archive</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            A selection of technical missions and digital builds. Focused on performance, architecture, and user-centric design.
          </p>
        </header>

        <div className="space-y-32 mb-32">
          {projects.map((project, index) => (
            <section key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              <div className="w-full lg:w-1/2 group relative aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">{project.category} — {project.year}</span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{project.title}</h2>
                </div>
                
                <p className="text-lg text-white/60 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  <a href={project.github} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white/60 transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white/60 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
