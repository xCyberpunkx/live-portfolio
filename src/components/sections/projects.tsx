"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Database, Code, Shield, Cpu, Layout, Globe } from "lucide-react";
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
    title: "SnovaTech Solar Simulation Platform",
    year: "2024",
    category: "Energy Technology • Web Application",
    description: "Solar energy simulation platform for Algerian consumers with financial projections and ROI analysis.",
    longDescription: "A comprehensive solar energy simulation platform tailored for Algerian consumers. It provides precise financial projections, ROI analysis, and technical specifications based on local solar data.",
    impact: "Helped 500+ users calculate solar ROI, with average projected savings of 60% on electricity bills.",
    role: "Full-Stack Developer & Data Modeler",
    techStack: ["Next.js 14", "TypeScript", "React 18", "Leaflet Maps", "Recharts", "Algerian Solar Data"],
    featured: true,
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "#",
  },
  {
    id: "photographer",
    title: "Photographer & Client Reservation Platform",
    year: "2025",
    category: "Marketplace Platform",
    description: "Algeria's first marketplace connecting verified photographers with clients through automated trust scoring.",
    longDescription: "An end-to-end marketplace for photography services. Features include real-time bookings, automated trust scoring for verified pros, and secure payment integrations.",
    impact: "100+ photographers onboarded, 500+ bookings in first 3 months.",
    role: "Full-Stack Developer & System Architect",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSockets", "Stripe"],
    featured: true,
    image: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=2072&auto=format&fit=crop",
    liveUrl: "#",
  },
  {
    id: "clinic",
    title: "Clinic Management System",
    year: "2024",
    category: "Healthcare Software",
    description: "Dental clinic management system with appointment scheduling, patient records, and billing.",
    longDescription: "A robust management system for medical clinics, specifically dental practices. Streamlines patient intake, medical history tracking, scheduling, and invoicing.",
    impact: "Digitized clinic operations, reducing admin time by 60%.",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Chart.js"],
    featured: true,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "#",
  },
  {
    id: "healthcare-mgmt",
    title: "Healthcare Management System",
    year: "2024",
    category: "Full-Stack Application",
    description: "Comprehensive system for managing patient records, appointments, and administrative tasks.",
    longDescription: "A scaled management solution for healthcare providers focusing on administrative efficiency and record security.",
    impact: "Improved patient data accessibility and clinic workflow efficiency.",
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "kadri",
    title: "Kadri Transformation Métallique",
    year: "2024",
    category: "Business Website",
    description: "Lightweight business website for a metal transformation company.",
    longDescription: "A professional online presence for a major industrial player in metal transformation, focusing on portfolio display and B2B inquiries.",
    impact: "Increased online visibility and simplified lead generation for the business.",
    role: "Front-End Developer",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: false,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "visa-bot",
    title: "Automated Visa Scheduling Bot",
    year: "2023",
    category: "Automation Tool",
    description: "Script to automate appointment scheduling for visa applications.",
    longDescription: "A highly efficient automation script designed to monitor and book visa appointments automatically, bypassing slow manual processes.",
    impact: "Successfully secured hundreds of appointments during peak demand periods.",
    role: "Automation Engineer",
    techStack: ["Python", "Selenium", "Automation", "Chromium"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bbbda50a13af?q=80&w=2070&auto=format&fit=crop",
  }
];

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-neon-cyan/30 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-midnight via-transparent to-transparent opacity-80" />
        
        {project.featured && (
          <div className="absolute top-6 left-6 bg-neon-cyan text-deep-midnight text-[10px] font-technical px-3 py-1 rounded-full font-bold">
            FEATURED
          </div>
        )}
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[10px] font-technical text-neon-cyan mb-2 uppercase tracking-widest">{project.category}</div>
          <h3 className="text-2xl font-black text-white leading-tight uppercase">{project.title}</h3>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] font-technical bg-white/5 text-off-white/60 px-2 py-1 rounded border border-white/5">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[10px] font-technical bg-white/5 text-neon-cyan px-2 py-1 rounded border border-white/5">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-xs font-technical text-off-white/40">{project.year}</span>
          <button 
            onClick={() => setShowDetails(true)}
            className="flex items-center gap-2 text-xs font-technical text-neon-cyan hover:gap-4 transition-all"
          >
            VIEW DETAILS <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-deep-midnight/95 backdrop-blur-xl"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <button 
                  onClick={() => setShowDetails(false)}
                  className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 md:p-12 space-y-12">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <div className="text-neon-cyan font-technical text-xs tracking-widest mb-4">{project.category}</div>
                      <h2 className="text-4xl md:text-6xl font-black text-white uppercase">{project.title}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-sm font-technical text-white/40 tracking-widest uppercase">Overview</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.longDescription}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-technical text-white/40 tracking-widest uppercase">Impact & Results</h4>
                      <div className="p-6 bg-neon-cyan/5 border border-neon-cyan/20 rounded-2xl">
                        <p className="text-xl font-bold text-off-white">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-12">
                    <div className="space-y-4">
                      <h4 className="text-sm font-technical text-white/40 tracking-widest uppercase">My Role</h4>
                      <p className="text-xl font-black text-white uppercase">{project.role}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-technical text-white/40 tracking-widest uppercase">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-xs font-technical bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-off-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 flex flex-col gap-4">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="flex items-center justify-center gap-3 bg-neon-cyan text-deep-midnight font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">
                          LIVE DEMO <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/10 transition-colors">
                          VIEW GITHUB <Github size={18} />
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
  const [filter, setFilter] = useState<"ALL" | "FEATURED">("ALL");

  const filteredProjects = projects.filter(p => filter === "ALL" || p.featured);

  return (
    <section id="projects" className="bg-deep-midnight py-24 md:py-48 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-black text-white uppercase mb-8"
            >
              My<br /><span className="text-neon-cyan">Projects</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              A collection of production systems, innovative solutions, and technical experiments that showcase my expertise in full-stack development, system architecture, and problem-solving.
            </p>
          </div>

          <div className="flex gap-4">
            {["ALL", "FEATURED"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`text-[11px] font-technical px-8 py-3 rounded-full transition-all border ${
                  filter === f 
                  ? "bg-neon-cyan border-neon-cyan text-deep-midnight font-bold" 
                  : "border-white/10 text-off-white/40 hover:border-white/30"
                }`}
              >
                {f} ({f === "ALL" ? projects.length : projects.filter(p => p.featured).length})
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Live Demo Status */}
        <div className="mt-24 p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center">
                 < Globe className="text-neon-cyan" size={32} />
              </div>
              <div>
                 <h4 className="text-xl font-bold text-white uppercase">Ready for Deployment</h4>
                 <p className="text-muted-foreground">Most projects feature active live demos and detailed case studies.</p>
              </div>
           </div>
           <a href="https://github.com/xCyberpunkx" target="_blank" className="bg-white text-deep-midnight px-8 py-4 rounded-xl font-black uppercase text-sm hover:scale-105 transition-transform">
              EXPLORE REPOSITORIES
           </a>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-lime/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
