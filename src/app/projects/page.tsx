import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Image from "next/image";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects Portfolio | Rouabah Zine Eddine",
  description: "Explore a curated collection of software engineering projects — booking platforms, e-commerce systems with custom CMS backends, healthcare software, and business websites.",
};

const projects = [
  {
    title: "Bookingo",
    category: "Booking Platform • Full-Stack",
    image: "/projects/bookingo.png",
    link: "https://www.bookingo.app/",
    github: "#",
    desc: "A booking.com-style reservation platform built end-to-end in Laravel — multi-tenant reservations, availability, and payment flows.",
    tech: ["Laravel", "PHP", "MySQL"],
    year: "2026"
  },
  {
    title: "DentalDZ",
    category: "E-Commerce • Full Backend CMS",
    image: "/projects/dentaldz.png",
    link: "https://www.dentaldz.com/",
    github: "#",
    desc: "Full e-commerce storefront for dental equipment, with a custom backend CMS for catalog and order management.",
    tech: ["React", "Supabase"],
    year: "2025"
  },
  {
    title: "BZ Boutique",
    category: "E-Commerce • Full Backend CMS",
    image: "/projects/bzboutique.png",
    link: "https://bz-boutique.lovable.app/",
    github: "#",
    desc: "Full boutique e-commerce site with a custom backend CMS for product and order management.",
    tech: ["React", "Supabase"],
    year: "2025"
  },
  {
    title: "Groupe Gadi",
    category: "Static Website • Custom CMS Editor",
    image: "/projects/gadi.png",
    link: "https://www.groupegadi.com/",
    github: "#",
    desc: "Corporate website with a custom-built inline content editor, letting the client update pages directly.",
    tech: ["Next.js", "Custom CMS"],
    year: "2025"
  },
  {
    title: "Clinic Management System",
    category: "Healthcare Software",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "https://ramdani.vercel.app/",
    github: "https://github.com/xCyberpunkx/dental-backend",
    desc: "A comprehensive dental clinic management system designed for efficiency.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM"],
    year: "2024"
  },
  {
    title: "Photographer Marketplace",
    category: "Marketplace Platform",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    link: "https://sawerni.vercel.app/",
    github: "https://github.com/xCyberpunkx/sawerni-kv",
    desc: "Algeria's first marketplace connecting verified photographers with clients.",
    tech: ["Next.js", "Supabase", "TypeScript", "Framer Motion"],
    year: "2025"
  },
  {
    title: "Safouane Mokhtefi",
    category: "Portfolio • Graphic Design",
    image: "/projects/safouane-portfolio.png",
    link: "https://mokhtefi-safwan.vercel.app/",
    github: "#",
    desc: "Personal portfolio for a Graphic Designer from Algeria, specialized in visual communication and branding.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "STEREO MIND",
    category: "Productivity • Open Source",
    image: "/projects/stereo-mind.png",
    link: "https://stero-mind.vercel.app/",
    github: "#",
    desc: "A simple, free tool to help track learning, manage tasks, and reach goals without complicated setup.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "SnovaTech Solar Simulation",
    category: "Energy Technology • Web Application",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop",
    link: "https://snovatech.netlify.app/",
    github: "https://github.com/xCyberpunkx/Snovatech-Saas",
    desc: "Solar energy simulation platform for Algerian consumers with financial projections and ROI analysis.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Financial Algorithms"],
    year: "2024"
  },
  {
    title: "Electromalik",
    category: "Static Website • Inline Editor",
    image: "/projects/electromalik.png",
    link: "https://electromalik.vercel.app/",
    github: "#",
    desc: "Static storefront site with a fully integrated inline content editor for easy updates.",
    tech: ["Next.js", "Custom CMS"],
    year: "2025"
  },
  {
    title: "Sahara Flow Dynamics",
    category: "Static Website",
    image: "/projects/ssh.png",
    link: "https://sahara-flow-dynamics.vercel.app/",
    github: "#",
    desc: "Static business website focused on clean presentation and fast load times.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "AGS Algeria",
    category: "Static Website",
    image: "/projects/ags.png",
    link: "https://ags-algeria.vercel.app/",
    github: "#",
    desc: "Static corporate website for AGS Algeria.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "Neo Summer Sparks",
    category: "Appointment Booking • One-Page",
    image: "/projects/neo.png",
    link: "https://neosummersparks.vercel.app/",
    github: "#",
    desc: "One-page appointment booking site built for quick scheduling.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "Cerine",
    category: "Portfolio • Developer",
    image: "/projects/cerine.png",
    link: "https://cerine.vercel.app/",
    github: "#",
    desc: "Developer portfolio site showcasing projects and technical skills.",
    tech: ["Next.js", "TypeScript"],
    year: "2025"
  },
  {
    title: "Didamed",
    category: "Static Website",
    image: "/projects/didiamed.png",
    link: "https://didamed.vercel.app/",
    github: "#",
    desc: "Static business website for Didamed.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "ProAgroSud",
    category: "Static Website",
    image: "/projects/pas.png",
    link: "https://www.proagrosud.com/",
    github: "#",
    desc: "Static corporate website for ProAgroSud.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "Event SB Connect",
    category: "Event Platform",
    image: "/projects/batiwest.png",
    link: "https://event-sb-connect.vercel.app/",
    github: "#",
    desc: "Event platform site for managing and showcasing event information.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "Exact DZ",
    category: "Web Application",
    image: "/projects/exact.png",
    link: "https://exact-dz.vercel.app/",
    github: "#",
    desc: "React-based business website for Exact DZ.",
    tech: ["React"],
    year: "2025"
  },
  {
    title: "DAMAC PLUS",
    category: "Real Estate • Architecture",
    image: "/projects/damac-plus.png",
    link: "https://damac-plus.vercel.app/",
    github: "#",
    desc: "Luxury real estate platform showcasing architectural distinction and urban living standards.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "MF BETON",
    category: "Industrial • Manufacturing",
    image: "/projects/mf-beton.png",
    link: "https://mfbeton-dz.vercel.app/",
    github: "#",
    desc: "Industrial excellence in concrete and prefabrication. A showcase of manufacturing capability and scale with a robust catalog system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "KTM - Kadri Transformation Metallique",
    category: "Industrial • Metalworking",
    image: "/projects/ktm-metal.png",
    link: "https://www.k-tm.com/",
    github: "#",
    desc: "Excellence in action. Metallic transformation and industrial hangar construction. Highlighting expertise in large-scale metal structures.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "Comptoir Oasis Hydraulique",
    category: "Plumbing • Electricity",
    image: "/projects/coh-plomberie.png",
    link: "https://coh-six.vercel.app/",
    github: "#",
    desc: "Your partner in plumbing, electricity, and hardware. Professional quality guaranteed with an extensive product catalog.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025"
  },
  {
    title: "GENELTECH Industries",
    category: "Industrial Solutions • Innovation",
    image: "/projects/geneltech.png",
    link: "https://geneltech-murex.vercel.app/",
    github: "#",
    desc: "Industrial excellence driven by innovation. Leader in industrial solutions, providing top-tier technical services.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025"
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />

        <header className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            Project <span style={{ color: "var(--text-muted)" }}>Archive</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A selection of technical missions and digital builds. Focused on performance, architecture, and user-centric design.
          </p>
        </header>

        <div className="space-y-24 md:space-y-32 mb-24 md:mb-32">
          {projects.map((project, index) => (
            <section key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-24 items-center`}>
              <div className="w-full lg:w-1/2 group relative aspect-[16/10] overflow-hidden border rounded-2xl" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div
                  className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-700"
                  style={{ backgroundColor: "color-mix(in srgb, var(--bg-base) 40%, transparent)" }}
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>{project.category} — {project.year}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>{project.title}</h2>
                </div>

                <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold uppercase tracking-widest border px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", color: "var(--text-secondary)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)" }}>
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
