"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
    {
      title: "SnovaTech Simulation Platform",
      category: "Energy Technology • Simulation",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop",
      link: "https://snovatech.netlify.app/",
      github: "https://github.com/xCyberpunkx/Snovatech-Saas",
      desc: "Web-based simulation platform for energy distribution and ROI analysis for industrial consumers. 2025",
      tech: "React, TypeScript, +4"
    },
  {
    title: "Photography Marketplace",
    category: "Marketplace Platform",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    link: "https://sawerni.vercel.app/",
    github: "https://github.com/xCyberpunkx/sawerni-kv",
    desc: "Algeria's first marketplace connecting verified photographers with clients. Developed system architecture and full-stack features. 2025",
    tech: "Next.js, TypeScript, +4"
  },
  {
    title: "Healthcare Management System",
    category: "Healthcare Software",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "https://ramdani.vercel.app/",
    github: "https://github.com/xCyberpunkx/dental-backend",
    desc: "Comprehensive system for managing patient records, appointments, and administrative tasks for medical professionals. 2024",
    tech: "Next.js, TypeScript, +4"
  }
];

export default function MyProjects() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <section id="projects" className="bg-black py-20 md:py-64 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 md:mb-32">
          <span className="text-[8px] md:text-[10px] font-technical text-white/20 tracking-[0.6em] md:tracking-[1em] uppercase block mb-6 md:mb-8">PROJECT ARCHIVE</span>
          <h2 className="text-[16vw] md:text-[10vw] font-black text-white leading-[0.8] uppercase tracking-tighter">
            SELECTED<br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>MISSIONS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: isMobile ? 0 : index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5 bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover ${isMobile ? 'grayscale-0 opacity-100' : 'grayscale opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0'} transition-all duration-700 ease-expo`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[8px] md:text-[10px] font-technical text-white/60 uppercase tracking-widest">{project.category}</span>
                      <div className="flex gap-4">
                        <a href={project.github} className="text-white/60 hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                        <a href={project.link} className="text-white/60 hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-black text-white uppercase tracking-tighter ${isMobile ? '' : 'group-hover:translate-x-2'} transition-transform duration-500`}>
                      {project.title}
                    </h3>
                      <p className={`text-[10px] md:text-sm font-technical text-white/60 uppercase tracking-wider line-clamp-2 ${isMobile ? 'opacity-100' : 'md:opacity-0 group-hover:opacity-100'} transition-opacity duration-500`}>
                        {project.desc}
                      </p>
                      <div className={`pt-2 ${isMobile ? 'opacity-100' : 'md:opacity-0 group-hover:opacity-100'} transition-opacity duration-700 delay-100`}>
                        <span className="text-[8px] md:text-[9px] font-technical text-white/80 bg-white/20 px-2 py-1 uppercase tracking-widest border border-white/10">
                          {project.tech}
                        </span>
                      </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
