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
        className="relative w-full h-full overflow-hidden border border-white/5 bg-white/5"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${hovered ? "grayscale-0 scale-110" : "grayscale opacity-60"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="text-[9px] font-technical text-blue-400 uppercase tracking-widest block mb-2">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
            {project.title}
          </h3>
        </div>

        <div
          className={`absolute top-5 right-5 w-9 h-9 rounded-full border border-white/20 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
            hovered ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
          }`}
        >
          <ArrowUpRight size={16} className="text-white" />
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
      <section id="projects" className="bg-zinc-950 py-24 md:py-64 border-t border-white/5 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-16 md:mb-32">
            <span className="text-[8px] md:text-[10px] font-technical text-white/20 tracking-[0.6em] md:tracking-[1em] uppercase block mb-6 md:mb-8">
              PROJECT ARCHIVE
            </span>
            <h2 className="text-[16vw] md:text-[10vw] font-black text-white leading-[0.8] uppercase tracking-tighter">
              SELECTED<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>MISSIONS</span>
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
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-blue-500/40 transition-colors"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-white">View Full Archive</span>
              <ArrowUpRight className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
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
                  className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
                  onClick={() => setSelectedProject(null)}
                />

                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 32, stiffness: 260 }}
                  className="relative z-10 w-full sm:w-[90%] md:w-[70%] lg:w-[55%] h-full bg-[#0a0a0a] border-l border-white/10 overflow-y-auto"
                >
                  <div className="relative w-full aspect-[16/9] bg-zinc-950/40">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-zinc-950/40" />

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 p-3 bg-zinc-950/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-20 backdrop-blur-sm"
                    >
                      <X size={20} />
                    </button>

                    <div className="absolute bottom-6 left-6 md:left-10">
                      <span className="text-[10px] font-technical text-blue-400 tracking-[0.3em] uppercase mb-3 block">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-10 space-y-10">
                    <div>
                      <h4 className="text-[10px] font-technical text-white/40 uppercase tracking-widest mb-3">Mission Details</h4>
                      <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">{selectedProject.details}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-technical text-white/40 uppercase tracking-widest mb-3">Project Specs</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.split(",").map((t, i) => (
                          <span key={i} className="text-[10px] md:text-xs text-white/60 font-mono bg-white/5 px-2 py-1 rounded border border-white/5">
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 py-5 bg-white text-black rounded-full font-bold uppercase tracking-wider text-xs hover:bg-blue-500 hover:text-white hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-white/5"
                      >
                        Visit Mission Website <ExternalLink size={16} />
                      </a>
                      {selectedProject.github !== "#" && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 py-5 px-6 border border-white/15 text-white/70 rounded-full font-bold uppercase tracking-wider text-xs hover:border-white/40 hover:text-white transition-all duration-500"
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
