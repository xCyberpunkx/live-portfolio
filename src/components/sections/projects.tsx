"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
  {
    title: "Bookingo",
    category: "Booking Platform • Full-Stack",
    image: "/projects/bookingo.png",
    link: "https://www.bookingo.app/",
    github: "#",
    details:
      "A booking.com-style reservation platform handling multi-tenant reservations, availability, and payment flows — architected as a real production-grade Laravel application rather than a template site.",
    tech: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Healthcare System",
    category: "Healthcare Software",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "https://ramdani.vercel.app/",
    github: "https://github.com/xCyberpunkx/dental-backend",
    details:
      "A comprehensive dental clinic management system handling appointment scheduling, patient electronic health records, and automated billing.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM"],
  },
  {
    title: "DentalDZ",
    category: "E-Commerce • Full Backend CMS",
    image: "/projects/dentaldz.png",
    link: "https://www.dentaldz.com/",
    github: "#",
    details:
      "A complete online store for dental equipment, including product catalog management, ordering, and a custom admin CMS behind the scenes.",
    tech: ["React", "Supabase"],
  },
  {
    title: "Groupe Gadi",
    category: "Static Website • Custom CMS Editor",
    image: "/projects/gadi.png",
    link: "https://www.groupegadi.com/",
    github: "#",
    details:
      "A static-first corporate site paired with a custom backend inline editor, letting the client update page content directly.",
    tech: ["Next.js", "Custom CMS"],
  },
  {
    title: "STEREO MIND",
    category: "Productivity • Open Source",
    image: "/projects/stereo-mind.png",
    link: "https://stero-mind.vercel.app/",
    github: "#",
    details:
      "A productivity tool focused on simplicity — tracking learning, tasks, and goals without the friction of complex features.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Safouane Mokhtefi",
    category: "Portfolio • Graphic Design",
    image: "/projects/safouane-portfolio.png",
    link: "https://mokhtefi-safwan.vercel.app/",
    github: "#",
    details:
      "A visually striking portfolio for a graphic designer, built as a digital canvas that lets the work speak through minimalist design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

type Project = (typeof projects)[number];

function ProjectRow({
  project,
  index,
  active,
  onActivate,
}: {
  project: Project;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className="w-full text-left px-5 md:px-6 py-5 border-b last:border-b-0 transition-colors group"
      style={{
        borderColor: "var(--border-subtle)",
        backgroundColor: active ? "var(--bg-surface-hover)" : "transparent",
      }}
    >
      <div className="flex items-center gap-4">
        <span
          className="font-technical text-[10px] tabular-nums flex-shrink-0"
          style={{ color: active ? "var(--accent)" : "var(--text-quaternary)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3
              className="text-lg md:text-xl font-black uppercase tracking-tight truncate"
              style={{ color: active ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              {project.title}
            </h3>
          </div>
          <span
            className="font-technical text-[9px] uppercase tracking-widest block mt-1 truncate"
            style={{ color: "var(--text-quaternary)" }}
          >
            {project.category}
          </span>
        </div>

        <ArrowUpRight
          size={16}
          className={`flex-shrink-0 transition-all duration-300 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}
          style={{ color: "var(--accent)" }}
        />
      </div>
    </button>
  );
}

export default function MyProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section
      id="projects"
      className="py-24 md:py-64 border-t overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 md:mb-24">
          <span
            className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] md:tracking-[1em] uppercase block mb-6 md:mb-8"
            style={{ color: "var(--text-quaternary)" }}
          >
            PROJECT ARCHIVE
          </span>
          <h2
            className="text-[16vw] md:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            SELECTED
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>
              MISSIONS
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20">
          {/* Directory listing */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className="border rounded-xl overflow-hidden"
              style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="terminal-chrome flex items-center gap-2 px-4 md:px-6 py-3 border-b"
                style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-chrome)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span
                  className="ml-3 flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  <Terminal size={10} /> ls -la /projects
                </span>
              </div>

              <div>
                {projects.map((project, i) => (
                  <ProjectRow
                    key={project.title}
                    project={project}
                    index={i}
                    active={i === activeIndex}
                    onActivate={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sticky preview pane — single fixed frame, so every image crops consistently */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="lg:sticky lg:top-32">
              <div
                className="border rounded-xl overflow-hidden"
                style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-elevated)" }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ backgroundColor: "var(--bg-chrome)" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.title}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to top, var(--bg-base) 0%, color-mix(in srgb, var(--bg-base) 10%, transparent) 35%, transparent 65%)",
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    <span className="font-technical text-[9px] text-blue-400 uppercase tracking-[0.3em] block mb-2">
                      {active.category}
                    </span>
                    <h3
                      className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {active.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active.title + "-desc"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {active.details}
                    </motion.p>
                  </AnimatePresence>

                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-1 rounded border"
                        style={{ color: "var(--text-secondary)", backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-subtle)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all duration-300"
                      style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    {active.github !== "#" && (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3.5 px-6 border rounded-full font-bold uppercase tracking-widest text-xs hover:border-blue-400/50 transition-all duration-300"
                        style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/projects"
            data-cursor="ALL"
            className="group relative inline-flex items-center gap-4 px-8 py-4 border rounded-full hover:border-blue-500/40 transition-colors"
            style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
          >
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>
              View Full Archive
            </span>
            <ArrowUpRight
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={16}
              style={{ color: "var(--text-primary)" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
