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
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

        <header className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-6" style={{ color: "var(--text-tertiary)" }}>
            PROFILE_RECORD
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.95] md:leading-[0.9]" style={{ color: "var(--text-primary)" }}>
            About <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>The Engineer</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A software engineering professional focused on building reliable, well-structured web applications and continuously deepening his understanding of computer systems and networks.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24">
          <section className="p-6 sm:p-8 md:p-10 border rounded-2xl space-y-6" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}>
            <span className="text-[10px] font-technical text-blue-400/80 uppercase tracking-[0.4em] block">Core Philosophy</span>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              In an era of rapidly evolving technology, my approach remains grounded in the fundamentals of computer science and system architecture. I believe that true innovation stems from a deep understanding of how systems interact at every level — from the application layer down to the network infrastructure.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              My work is characterized by a commitment to precision, scalability, and resilience. Whether I&apos;m architecting a client-facing web application or optimizing a data pipeline, my goal is always to deliver solutions that are not just functional, but enduring.
            </p>
          </section>

          <section className="p-6 sm:p-8 md:p-10 border rounded-2xl space-y-6" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}>
            <span className="text-[10px] font-technical text-blue-400/80 uppercase tracking-[0.4em] block">Technical Expertise</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="p-4 border rounded-lg hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                  style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
                >
                  <h3 className="font-technical text-[9px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--text-muted)" }}>{item.label}</h3>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.stack}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="pt-16 border-t" style={{ borderColor: "var(--border-default)" }}>
          <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4" style={{ color: "var(--text-tertiary)" }}>
            Session Log
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10 md:mb-12" style={{ color: "var(--text-primary)" }}>
            Professional Journey
          </h2>
          <div className="space-y-4">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 md:p-8 border rounded-xl hover:border-blue-500/20 transition-colors"
                style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
              >
                <div className="md:w-40 flex-shrink-0 flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${STATUS_STYLES[item.status]} ${item.status === "ACTIVE" ? "animate-pulse" : ""}`} />
                  <span className="text-xs sm:text-sm font-black uppercase" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {item.role} <span className="font-technical text-xs" style={{ color: "var(--text-muted)" }}>@ {item.company}</span>
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-16 mt-16 border-t grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ borderColor: "var(--border-default)" }}>
          <div>
            <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4" style={{ color: "var(--text-tertiary)" }}>
              Education
            </span>
            <div className="p-6 md:p-8 border rounded-xl hover:border-blue-500/20 transition-colors" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}>
              <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{education.degree}</h3>
              <p className="font-technical text-xs mb-3" style={{ color: "var(--text-muted)" }}>{education.school}</p>
              <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>{education.date}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{education.skills}</p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4" style={{ color: "var(--text-tertiary)" }}>
              Certifications
            </span>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-6 border rounded-xl hover:border-blue-500/20 transition-colors"
                  style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
                >
                  <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
                  <p className="font-technical text-xs" style={{ color: "var(--text-muted)" }}>{cert.issuer} · Issued {cert.date}</p>
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
