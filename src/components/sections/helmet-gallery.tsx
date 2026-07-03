"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectData {
  id: string;
  name: string;
  year: string;
  category: string;
  baseImg: string;
  hoverImg: string;
}

const projectGallery: ProjectData[] = [
    {
      id: "snovatech",
      name: "SnovaTech",
      year: "2024",
      category: "Solar Simulation",
      baseImg: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop",
      hoverImg: "https://images.unsplash.com/photo-1466611653911-954ff21caafc?q=80&w=2070&auto=format&fit=crop",
    },
  {
    id: "photographer",
    name: "Photographer",
    year: "2025",
    category: "Marketplace",
    baseImg: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=2072&auto=format&fit=crop",
    hoverImg: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop",
  },
  {
    id: "clinic",
    name: "Clinic",
    year: "2024",
    category: "Management Sys",
    baseImg: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    hoverImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "kernel",
    name: "Open Source",
    year: "Active",
    category: "Contributions",
    baseImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    hoverImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  }
];

const ProjectCard = ({ project, index }: { project: ProjectData; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAlignmentClass = () => {
    if (index % 4 === 0) return "mt-0";
    if (index % 4 === 1) return "mt-24";
    if (index % 4 === 2) return "mt-12";
    return "mt-32";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative group ${getAlignmentClass()} transition-transform duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square w-full max-w-[340px] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#4A4D43]/20 flex items-center justify-center p-8 transition-all duration-500 hover:border-[#D9FF00]/50 shadow-2xl shadow-black">
        <div className="absolute inset-0 pointer-events-none border-[1px] border-[#4A4D43]/10 m-2 rounded-xl" />
        
        <div className="relative w-full h-full">
          <Image
            src={project.baseImg}
            alt={`${project.name} base`}
            fill
            className={`object-cover transition-all duration-700 ${isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
            priority={index < 4}
          />
          <Image
            src={project.hoverImg}
            alt={`${project.name} detail`}
            fill
            className={`object-cover transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          />
        </div>

        <div className="absolute bottom-4 right-6 text-right z-10">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-technical text-[#F4F4F1] opacity-60 uppercase tracking-widest">
              {project.category}
            </span>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[10px] sm:text-[12px] font-technical text-[#F4F4F1] uppercase tracking-wider font-bold">
                {project.name}
              </span>
              <span className="text-[10px] sm:text-[12px] font-technical text-[#D9FF00] font-bold">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function HelmetGallery() {
  return (
    <section id="projects" className="bg-[#0A0A0A] pt-24 pb-32 overflow-hidden relative">
      <div className="absolute inset-0 topographic-bg opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square border border-muted-gray/20 shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
              alt="Project visualization"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="mb-8">
              <h2 className="text-[12px] font-technical tracking-[0.2em] text-[#D9FF00] mb-4 uppercase">
                02 — Selected Works
              </h2>
              <h3 className="text-6xl md:text-8xl font-black text-[#F4F4F1] leading-[0.85] mb-8 uppercase">
                Featured <br />Projects
              </h3>
              <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-md font-sans">
                Production systems and innovative solutions demonstrating technical excellence in Energy, Marketplace, and Healthcare sectors.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-0">
          {projectGallery.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 flex justify-center"
        >
          <a
            href="https://github.com/xCyberpunkx"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between bg-[#D9FF00] text-[#0A0A0A] font-technical font-bold text-sm px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
          >
            <span className="mr-6 uppercase tracking-widest">View All Projects</span>
            <div className="bg-[#0A0A0A] text-[#D9FF00] rounded-full p-2 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-[-10%] left-0 w-full select-none pointer-events-none overflow-hidden whitespace-nowrap opacity-[0.03]">
        <span className="text-[25vw] font-black italic text-white uppercase leading-none">
          ENGINEERING PRECISION
        </span>
      </div>
    </section>
  );
}
