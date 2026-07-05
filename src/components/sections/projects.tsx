"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";

const projects = [
  {
    title: "Bookingo",
    category: "Booking Platform • Full-Stack",
    image: "/projects/bookingo.png",
    link: "https://www.bookingo.app/",
    github: "#",
    desc: "A booking.com-style reservation platform built end-to-end in Laravel.",
    details: "Bookingo is a full-featured booking application handling multi-tenant reservations, availability, and payment flows — architected as a real production-grade Laravel application rather than a template site.",
    tech: "Laravel, PHP, MySQL",
  },
  {
    title: "Healthcare System",
    category: "Healthcare Software",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "https://ramdani.vercel.app/",
    github: "https://github.com/xCyberpunkx/dental-backend",
    desc: "Comprehensive system for managing patient records, appointments, and administrative tasks.",
    details: "A comprehensive dental clinic management system designed for efficiency. Handles appointment scheduling, patient electronic health records (EHR), and automated billing, ensuring smooth clinic operations.",
    tech: "Next.js, PostgreSQL, Tailwind CSS, Drizzle ORM",
  },
  {
    title: "DentalDZ",
    category: "E-Commerce • Full Backend CMS",
    image: "/projects/dentaldz.png",
    link: "https://www.dentaldz.com/",
    github: "#",
    desc: "Full e-commerce storefront for dental equipment with a custom backend CMS.",
    details: "DentalDZ is a complete online store for dental equipment, built with React and Supabase, including product catalog management, ordering, and a custom admin CMS behind the scenes.",
    tech: "React, Supabase",
  },
  {
    title: "Groupe Gadi",
    category: "Static Website • Custom CMS Editor",
    image: "/projects/gadi.png",
    link: "https://www.groupegadi.com/",
    github: "#",
    desc: "Corporate website with a custom-built inline content editor.",
    details: "A static-first corporate site paired with a custom backend inline editor, letting the client update page content directly — similar in spirit to a page builder, purpose-built for this site.",
    tech: "Next.js, Custom CMS",
  },
  {
    title: "STEREO MIND",
    category: "Productivity • Open Source",
    image: "/projects/stereo-mind.png",
    link: "https://stero-mind.vercel.app/",
    github: "#",
    desc: "A simple, free tool to help track learning, manage tasks, and reach goals.",
    details: "Stereo Mind is a productivity tool focused on simplicity and effectiveness. It helps users manage their time and tasks without the friction of complex features, promoting better focus and habit building.",
    tech: "Next.js, TypeScript, +4",
  },
  {
    title: "Safouane Mokhtefi",
    category: "Portfolio • Graphic Design",
    image: "/projects/safouane-portfolio.png",
    link: "https://mokhtefi-safwan.vercel.app/",
    github: "#",
    desc: "Personal portfolio for a Graphic Designer from Algeria, specialized in visual communication.",
    details: "A visually striking portfolio that highlights the designer's creative skills. The site serves as a digital canvas, allowing the work to speak for itself through a minimalist yet impactful design.",
    tech: "Next.js, TypeScript, +4",
  },
];

type Project = (typeof projects)[number];

const spanPattern = [
  "col-span-2 row-span-1 md:row-span-2", // featured — big (capped height on mobile)
  "col-span-2 row-span-1", // wide
  "col-span-1 row-span-1", // small
  "col-span-1 row-span-1", // small
  "col-span-2 row-span-1", // wide
  "col-span-2 row-span-1", // wide
];

const TiltCard = ({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const spanClass = spanPattern[index % spanPattern.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group relative cursor-pointer h-full ${spanClass}`}
      data-cursor="VIEW"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={() => onOpen(project)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-full h-full overflow-hidden border"
        style={{ transformStyle: "preserve-3d", borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-surface)" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${hovered ? "grayscale-0 scale-110" : "grayscale opacity-60"}`}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(to top, var(--bg-base), color-mix(in srgb, var(--bg-base) 10%, transparent), transparent)" }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="text-[9px] font-technical text-blue-400 uppercase tracking-widest block mb-2">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>
        </div>

        <div
          className={`absolute top-5 right-5 w-9 h-9 rounded-full border backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
            hovered ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
          }`}
          style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--bg-surface-strong)" }}
        >
          <ArrowUpRight size={16} style={{ color: "var(--text-primary)" }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section id="projects" className="py-24 md:py-64 border-t overflow-hidden relative" style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-16 md:mb-32">
            <span className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] md:tracking-[1em] uppercase block mb-6 md:mb-8" style={{ color: "var(--text-quaternary)" }}>
              PROJECT ARCHIVE
            </span>
            <h2 className="text-[16vw] md:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
              SELECTED<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>MISSIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-6 mb-20">
            {projects.map((project, index) => (
              <TiltCard key={project.title} project={project} index={index} onOpen={setSelectedProject} />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/projects"
              data-cursor="ALL"
              className="group relative inline-flex items-center gap-4 px-8 py-4 border rounded-full hover:border-blue-500/40 transition-colors"
              style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
            >
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>View Full Archive</span>
              <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} style={{ color: "var(--text-primary)" }} />
            </a>
          </div>
        </div>
      </section>

      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div className="fixed inset-0 z-[99999] flex justify-end">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 backdrop-blur-md"
                  style={{ backgroundColor: "color-mix(in srgb, var(--bg-base) 80%, transparent)" }}
                  onClick={() => setSelectedProject(null)}
                />

                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 32, stiffness: 260 }}
                  className="relative z-10 w-full sm:w-[90%] md:w-[70%] lg:w-[55%] h-full border-l overflow-y-auto"
                  style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-default)" }}
                >
                  <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: "var(--bg-surface)" }}>
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: "linear-gradient(to top, var(--bg-base), transparent, color-mix(in srgb, var(--bg-base) 40%, transparent))" }}
                    />

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 p-3 rounded-full transition-colors z-20 backdrop-blur-sm"
                      style={{ backgroundColor: "color-mix(in srgb, var(--bg-base) 50%, transparent)", color: "var(--text-secondary)" }}
                    >
                      <X size={20} />
                    </button>

                    <div className="absolute bottom-6 left-6 md:left-10">
                      <span className="text-[10px] font-technical text-blue-400 tracking-[0.3em] uppercase mb-3 block">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ color: "var(--text-primary)" }}>
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-10 space-y-10">
                    <div>
                      <h4 className="text-[10px] font-technical uppercase tracking-widest mb-3" style={{ color: "var(--text-tertiary)" }}>Mission Details</h4>
                      <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>{selectedProject.details}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-technical uppercase tracking-widest mb-3" style={{ color: "var(--text-tertiary)" }}>Project Specs</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.split(",").map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] md:text-xs font-mono px-2 py-1 rounded border"
                            style={{ color: "var(--text-secondary)", backgroundColor: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t flex flex-col sm:flex-row gap-4" style={{ borderColor: "var(--border-subtle)" }}>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 py-5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-blue-500 hover:text-white hover:scale-[1.02] transition-all duration-500"
                        style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)", boxShadow: "var(--shadow-card)" }}
                      >
                        Visit Mission Website <ExternalLink size={16} />
                      </a>
                      {selectedProject.github !== "#" && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 py-5 px-6 border rounded-full font-bold uppercase tracking-wider text-xs hover:border-blue-400/50 transition-all duration-500"
                          style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
