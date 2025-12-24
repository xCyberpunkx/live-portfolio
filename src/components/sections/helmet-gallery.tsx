"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectData {
  id: string;
  name: string;
  year: string;
  baseImg: string;
  hoverImg: string;
}

const projectGallery: ProjectData[] = [
  {
    id: "kernel-research",
    name: "Kernel",
    year: "2025",
    baseImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    hoverImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "compiler-tech",
    name: "Compiler",
    year: "2025",
    baseImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2070&auto=format&fit=crop",
    hoverImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "security-audit",
    name: "Audit",
    year: "2024",
    baseImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    hoverImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "distributed-systems",
    name: "DistSys",
    year: "2024",
    baseImg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
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
    <div 
      className={`relative group ${getAlignmentClass()} transition-transform duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square w-full max-w-[340px] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#4A4D43]/20 flex items-center justify-center p-8 transition-all duration-500 hover:border-[#D9FF00]/50">
        <div className="absolute inset-0 pointer-events-none border-[1px] border-[#4A4D43]/10 m-2 rounded-xl" />
        
        <div className="relative w-full h-full">
          <Image
            src={project.baseImg}
            alt={`${project.name} base`}
            fill
            className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            priority={index < 4}
          />
          <Image
            src={project.hoverImg}
            alt={`${project.name} detail`}
            fill
            className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <div className="absolute bottom-4 right-6 text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="text-[10px] sm:text-[12px] font-technical text-[#F4F4F1] uppercase tracking-wider">
              {project.name}
            </span>
            <span className="text-[10px] sm:text-[12px] font-technical text-[#D9FF00] font-bold">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HelmetGallery() {
  return (
    <section className="bg-[#0A0A0A] pt-24 pb-32 overflow-hidden relative">
      <div className="absolute inset-0 topographic-bg opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              alt="Systems visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="max-w-xl">
            <div className="mb-8">
              <h2 className="text-[12px] font-technical tracking-[0.2em] text-[#D9FF00] mb-4">
                Research
              </h2>
              <h3 className="text-6xl md:text-8xl font-black text-[#F4F4F1] leading-[0.85] mb-8">
                Systems <br />Archive
              </h3>
              <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-md font-sans">
                A selection of high-performance systems and security research projects developed across various hardware architectures.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-0">
          {projectGallery.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="mt-40 flex justify-center">
          <a
            href="https://github.com/zineddine"
            className="group relative flex items-center justify-between bg-[#D9FF00] text-[#0A0A0A] font-technical font-bold text-sm px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
          >
            <span className="mr-6 uppercase tracking-widest">View GitHub</span>
            <div className="bg-[#0A0A0A] text-[#D9FF00] rounded-full p-2 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-[-10%] left-0 w-full select-none pointer-events-none overflow-hidden whitespace-nowrap opacity-[0.03]">
        <span className="text-[25vw] font-black italic text-white uppercase leading-none">
          SECURE SYSTEMS
        </span>
      </div>
    </section>
  );
}
