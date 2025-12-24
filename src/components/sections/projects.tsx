"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Quantum Solar Engine",
    category: "C++ / .NET / React",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#",
    desc: "Real-time solar irradiance simulation engine built with C++ for high-performance raytracing calculations."
  },
  {
    title: "Patient Nexus",
    category: "C# / .NET / SQL",
    image: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#",
    desc: "Enterprise-grade healthcare management system utilizing .NET core for secure, low-latency data processing."
  },
  {
    title: "Neuro Dynamic UI",
    category: "TypeScript / Next.js",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#",
    desc: "Experimental UI framework focusing on motion-first interactions and complex technical visualizations."
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
