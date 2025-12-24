"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SnovaTech Solar Simulation Platform",
    category: "Energy Technology • Web Application",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#",
    desc: "Solar energy simulation platform for Algerian consumers with financial projections and ROI analysis. 2024",
    tech: "Next.js 14, TypeScript, +4"
  },
  {
    title: "Photographer & Client Reservation Platform",
    category: "Marketplace Platform",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#",
    desc: "Algeria's first marketplace connecting verified photographers with clients through automated trust scoring. 2025",
    tech: "Next.js, TypeScript, +4"
  },
  {
    title: "Clinic Management System",
    category: "Healthcare Software",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#",
    desc: "Dental clinic management system with appointment scheduling, patient records, and billing. 2024",
    tech: "Next.js, TypeScript, +4"
  }
];

export default function MyProjects() {
  return (
    <section id="projects" className="bg-black py-24 md:py-64 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mb-32">
          <span className="text-[10px] font-technical text-white/20 tracking-[1em] uppercase block mb-8">PROJECT ARCHIVE</span>
          <h2 className="text-[12vw] md:text-[10vw] font-black text-white leading-[0.8] uppercase tracking-tighter">
            SELECTED<br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>MISSIONS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5 bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-expo"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-technical text-white/40 uppercase tracking-widest">{project.category}</span>
                    <div className="flex gap-4">
                      <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                      <a href={project.link} className="text-white/40 hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm font-technical text-white/40 uppercase tracking-wider line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
