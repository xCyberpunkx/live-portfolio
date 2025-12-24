"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { X, Globe, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "snovatech",
    title: "SnovaTech Solar",
    year: "2025",
    category: "Energy Tech",
    description: "Lead Engineer for Algeria's premier solar simulation engine.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop",
    tech: ["Next.js", "D3.js", "API Integration"],
  },
  {
    id: "healthcare",
    title: "DentalCore System",
    year: "2024",
    category: "HealthTech",
    description: "Full-scale patient management system digitizing clinical workflows.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    tech: ["PHP", "Laravel", "PostgreSQL"],
  },
  {
    id: "lensmarket",
    title: "LensMarket",
    year: "2024",
    category: "Marketplace",
    description: "Algeria's first verified photographer & client reservation platform.",
    image: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=2072&auto=format&fit=crop",
    tech: ["React", "Express.js", "System Architecture"],
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={container} className="h-screen sticky top-0 bg-black flex items-center justify-center overflow-hidden border-t border-white/5">
      <motion.div 
        style={{ scale }}
        className="container grid lg:grid-cols-2 gap-24 items-center"
      >
        <div className="relative aspect-video group overflow-hidden bg-white/5 rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-technical text-white/40 uppercase tracking-[0.5em]">{project.year} // {project.category}</span>
            <h3 className="text-[8vw] lg:text-[5vw] font-black text-white uppercase tracking-tighter leading-none">{project.title}</h3>
          </div>
          
          <p className="text-white/40 text-xl font-technical uppercase tracking-widest leading-relaxed">
            {project.description}
          </p>

          <div className="flex gap-4">
            {project.tech.map((t: string) => (
              <span key={t} className="text-[8px] font-technical border border-white/10 px-4 py-2 rounded-full text-white/60">
                {t}
              </span>
            ))}
          </div>

          <button className="group flex items-center gap-6 text-white hover:text-white/60 transition-colors">
            <span className="text-[10px] font-technical uppercase tracking-[0.5em]">View Project</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function MyProjects() {
  return (
    <section id="projects" className="bg-black relative">
      <div className="h-[40vh] flex flex-col items-center justify-center bg-black">
        <span className="text-[10px] font-technical text-white/20 uppercase tracking-[1em] mb-4 block">Case Studies</span>
        <h2 className="text-[10vw] font-black text-white uppercase tracking-tighter">Archive</h2>
      </div>
      
      <div className="relative">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
