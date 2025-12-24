"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectData {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  longDescription: string;
  impact: string;
  role: string;
  techStack: string[];
  featured: boolean;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectData[] = [
  {
    id: "snovatech",
    title: "SnovaTech Solar Simulation",
    year: "2024",
    category: "Energy • Web App",
    description: "Solar energy simulation platform for Algerian consumers with financial projections and ROI analysis.",
    longDescription: "A comprehensive solar energy simulation platform tailored for Algerian consumers. It provides precise financial projections, ROI analysis, and technical specifications based on local solar data.",
    impact: "Helped 500+ users calculate solar ROI, with average projected savings of 60% on electricity bills.",
    role: "Full-Stack Developer",
    techStack: ["Next.js 14", "TypeScript", "Leaflet", "Recharts"],
    featured: true,
    image: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "photographer",
    title: "Photographer Reservation Platform",
    year: "2025",
    category: "Marketplace",
    description: "Connecting photographers with clients through automated trust scoring.",
    longDescription: "An end-to-end marketplace for photography services. Features include real-time bookings, automated trust scoring for verified pros, and secure payment integrations.",
    impact: "100+ photographers onboarded, 500+ bookings in first 3 months.",
    role: "System Architect",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "WebSockets"],
    featured: true,
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop",
  },
  {
    id: "clinic",
    title: "Clinic Management System",
    year: "2024",
    category: "Healthcare",
    description: "Dental clinic management with appointment scheduling and records.",
    longDescription: "A robust management system for medical clinics, specifically dental practices. Streamlines patient intake, medical history tracking, scheduling, and invoicing.",
    impact: "Digitized clinic operations, reducing admin time by 60%.",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "PostgreSQL", "Docker", "Chart.js"],
    featured: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  }
];

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group relative border-b border-white/10 pb-12 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 aspect-[16/10] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-technical text-white/40 uppercase tracking-[0.3em]">{project.category}</span>
            <span className="text-[10px] font-technical text-white/40 uppercase tracking-[0.3em]">{project.year}</span>
          </div>
          <h3 className="text-4xl font-black text-white uppercase leading-none">{project.title}</h3>
          <p className="text-white/60 text-lg leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center gap-8 pt-4">
            <button 
              onClick={() => setShowDetails(true)}
              className="flex items-center gap-2 text-[10px] font-technical text-white hover:gap-4 transition-all uppercase tracking-[0.3em]"
            >
              Details <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-[#050505] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-16 space-y-12">
                <div className="flex justify-between items-start">
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase">{project.title}</h2>
                  <button onClick={() => setShowDetails(false)} className="hover:rotate-90 transition-transform">
                    <X size={32} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-technical text-white/40 uppercase tracking-[0.3em]">Overview</h4>
                      <p className="text-white/60 leading-relaxed">{project.longDescription}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-technical text-white/40 uppercase tracking-[0.3em]">Impact</h4>
                      <p className="text-white text-xl font-bold">{project.impact}</p>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-technical text-white/40 uppercase tracking-[0.3em]">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(t => (
                          <span key={t} className="text-[10px] font-technical border border-white/10 px-3 py-1 text-white/60">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-8">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="flex items-center justify-center gap-3 bg-white text-black font-black py-5 rounded-none hover:bg-white/90 transition-all uppercase tracking-[0.2em] text-xs">
                          Live Site <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function MyProjects() {
  return (
    <section id="projects" className="bg-black py-24 md:py-48 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] font-black text-white uppercase tracking-tighter"
          >
            Selected<br />Works
          </motion.h2>
        </div>

        <div className="space-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-48 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-12 gap-8">
           <div className="flex items-center gap-6">
              <Globe className="text-white/40" size={32} />
              <p className="text-white/40 font-technical text-[10px] uppercase tracking-[0.3em]">Deploying scalable solutions worldwide</p>
           </div>
           <a href="https://github.com/xCyberpunkx" target="_blank" className="text-white font-technical text-[10px] uppercase tracking-[0.3em] hover:text-white/60 transition-all">
              Explore Repositories —&gt;
           </a>
        </div>
      </div>
    </section>
  );
}
