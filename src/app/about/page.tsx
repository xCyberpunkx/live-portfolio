import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rouabah Zine Eddine | Software Engineer",
  description: "Learn more about Rouabah Zine Eddine's professional journey, real work experience, education, and technical expertise in web development.",
};

// Synced from LinkedIn work history (last updated: session — July 2026)
const journey = [
  {
    year: "APR 2026 — PRES",
    role: "Software Engineer",
    company: "Script Shock",
    status: "ACTIVE",
    description: "Working across front-end development and database administration, building and maintaining features on-site as part of the engineering team.",
  },
  {
    year: "APR 2024 — PRES",
    role: "Software Engineer",
    company: "Freelance",
    status: "ACTIVE",
    description: "Building and maintaining websites for independent clients — from PostgreSQL-backed data layers and Prisma ORM integration to full deployment.",
  },
  {
    year: "FEB 2025 — FEB 2026",
    role: "Frontend Web Developer",
    company: "SnovaTech",
    status: "COMPLETED",
    description: "Delivered front-end features for a solar simulation platform using Next.js, remote, improving UI consistency and performance across the app.",
  },
  {
    year: "FEB 2024 — JAN 2025",
    role: "Web Developer",
    company: "Kara Automobile",
    status: "COMPLETED",
    description: "On-site web development role supporting the company's digital presence and internal documentation workflows.",
  },
  {
    year: "JUL 2023 — SEP 2024",
    role: "Full-Stack Developer",
    company: "Ultra Light",
    status: "COMPLETED",
    description: "Led development of Ultra Light's corporate website using Laravel — architecting a custom web application focused on performance, scalability, and security.",
  },
];

const education = {
  school: "INSFP AIG Khalil Zyat",
  degree: "Advanced Technician Degree, Web Development",
  date: "SEP 2023 — MAR 2025",
  skills: "Web Development, Software Architecture, +2",
};

const certifications = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "MAR 2026" },
  { name: "Docker Foundations Professional Certificate", issuer: "Docker, Inc.", date: "JUN 2025" },
];

const expertise = [
  { label: "Frontend", stack: "Next.js, React, Tailwind CSS, Framer Motion" },
  { label: "Backend", stack: "Laravel, PostgreSQL, Prisma, Database Administration" },
  { label: "Systems", stack: "Linux (Arch), Docker, Networking" },
  { label: "Strategy", stack: "SEO Optimization, Performance Tuning, UI/UX" },
];

const STATUS_STYLES: Record<string, string> = {
  ACTIVE: "bg-green-500",
  COMPLETED: "bg-blue-500",
};

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

        <header className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-[10px] font-technical text-white/30 tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-6">
            PROFILE_RECORD
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white leading-[0.95] md:leading-[0.9]">
            About <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}>The Engineer</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
            A software engineering professional focused on building reliable, well-structured web applications and continuously deepening his understanding of computer systems and networks.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24">
          <section className="p-6 sm:p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl space-y-6">
            <span className="text-[10px] font-technical text-blue-400/80 uppercase tracking-[0.4em] block">Core Philosophy</span>
            <p className="text-white/70 leading-relaxed">
              In an era of rapidly evolving technology, my approach remains grounded in the fundamentals of computer science and system architecture. I believe that true innovation stems from a deep understanding of how systems interact at every level — from the application layer down to the network infrastructure.
            </p>
            <p className="text-white/70 leading-relaxed">
              My work is characterized by a commitment to precision, scalability, and resilience. Whether I&apos;m architecting a client-facing web application or optimizing a data pipeline, my goal is always to deliver solutions that are not just functional, but enduring.
            </p>
          </section>

          <section className="p-6 sm:p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl space-y-6">
            <span className="text-[10px] font-technical text-blue-400/80 uppercase tracking-[0.4em] block">Technical Expertise</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-white/[0.03] border border-white/10 rounded-lg hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <h3 className="font-technical text-[9px] uppercase tracking-[0.3em] mb-2 text-white/50">{item.label}</h3>
                  <p className="text-sm font-medium text-white/90">{item.stack}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="pt-16 border-t border-white/10">
          <span className="text-[10px] font-technical text-white/30 tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4">
            Session Log
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10 md:mb-12 text-white">
            Professional Journey
          </h2>
          <div className="space-y-4">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 md:p-8 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors"
              >
                <div className="md:w-40 flex-shrink-0 flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${STATUS_STYLES[item.status]} ${item.status === "ACTIVE" ? "animate-pulse" : ""}`} />
                  <span className="text-xs sm:text-sm font-black text-white/60 uppercase">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    {item.role} <span className="text-white/50 font-technical text-xs">@ {item.company}</span>
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-16 mt-16 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <span className="text-[10px] font-technical text-white/30 tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4">
              Education
            </span>
            <div className="p-6 md:p-8 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">{education.degree}</h3>
              <p className="text-white/50 font-technical text-xs mb-3">{education.school}</p>
              <p className="text-white/60 text-sm mb-3">{education.date}</p>
              <p className="text-white/70 text-sm leading-relaxed">{education.skills}</p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-technical text-white/30 tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4">
              Certifications
            </span>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                >
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-white/50 font-technical text-xs">{cert.issuer} · Issued {cert.date}</p>
                </div>
              ))}
            </div>
            <a
              href="/learning-journey"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors"
            >
              See ongoing self-study →
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
