"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, Maximize2 } from "lucide-react";

// Curated list of 6 projects
const projects = [
  {
    title: "SnovaTech Simulation",
    category: "Energy Technology • Simulation",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop",
    link: "https://snovatech.netlify.app/",
    github: "https://github.com/xCyberpunkx/Snovatech-Saas",
    desc: "Web-based simulation platform for energy distribution and ROI analysis.",
    details: "SnovaTech enables industrial consumers to simulate energy scenarios and analyze ROI. The platform handles complex calculations and presents data in an intuitive dashboard format.",
    tech: "Nextjs, TypeScript, +4"
  },
  {
    title: "Safouane Mokhtefi",
    category: "Portfolio • Graphic Design",
    image: "/projects/safouane-portfolio.png",
    link: "https://mokhtefi-safwan.vercel.app/",
    github: "#",
    desc: "Personal portfolio for a Graphic Designer from Algeria, specialized in visual communication.",
    details: "A visually striking portfolio that highlights the designer's creative skills. The site serves as a digital canvas, allowing the work to speak for itself through a minimalist yet impactful design.",
    tech: "Next.js, TypeScript, +4"
  },
  {
    title: "DAMAC PLUS",
    category: "Real Estate • Architecture",
    image: "/projects/damac-plus.png",
    link: "https://damac-plus.vercel.app/",
    github: "#",
    desc: "Luxury real estate platform showcasing architectural distinction and urban living standards.",
    details: "A premium real estate platform designed to immerse users in luxury. High-quality imagery, smooth transitions, and a sophisticated layout reflect the high standards of the properties listed.",
    tech: "Next.js, TypeScript, +4"
  },
  {
    title: "Healthcare System",
    category: "Healthcare Software",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "https://ramdani.vercel.app/",
    github: "https://github.com/xCyberpunkx/dental-backend",
    desc: "Comprehensive system for managing patient records, appointments, and administrative tasks.",
    details: "A comprehensive dental clinic management system designed for efficiency. Handles appointment scheduling, patient electronic health records (EHR), and automated billing, ensuring smooth clinic operations.",
    tech: "Next.js, TypeScript, +4"
  },
  {
    title: "STEREO MIND",
    category: "Productivity • Open Source",
    image: "/projects/stereo-mind.png",
    link: "https://stero-mind.vercel.app/",
    github: "#",
    desc: "A simple, free tool to help track learning, manage tasks, and reach goals.",
    details: "Stereo Mind is a productivity tool focused on simplicity and effectiveness. It helps users manage their time and tasks without the friction of complex features, promoting better focus and habit building.",
    tech: "Next.js, TypeScript, +4"
  },
  {
    title: "Photography Market",
    category: "Marketplace Platform",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    link: "https://sawerni.vercel.app/",
    github: "https://github.com/xCyberpunkx/sawerni-kv",
    desc: "Algeria's first marketplace connecting verified photographers with clients.",
    details: "A comprehensive marketplace connecting photographers with clients. Features include portfolio showcases, booking management, and a secure payment flow, all wrapped in a visually appealing interface.",
    tech: "Next.js, TypeScript, +4"
  }
];

export default function MyProjects() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const handleOpenProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="bg-black py-20 md:py-64 border-t border-white/5 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-16 md:mb-32">
            <span className="text-[8px] md:text-[10px] font-technical text-white/20 tracking-[0.6em] md:tracking-[1em] uppercase block mb-6 md:mb-8">PROJECT ARCHIVE</span>
            <h2 className="text-[16vw] md:text-[10vw] font-black text-white leading-[0.8] uppercase tracking-tighter">
              SELECTED<br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>MISSIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20 divide-y md:divide-y-0 divide-white/5">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : index * 0.1 }}
                className={`group relative transition-all duration-500 ease-out cursor-pointer ${hoveredIndex !== null && hoveredIndex !== index ? "blur-sm scale-95 opacity-50" : ""
                  } ${hoveredIndex === index ? "z-10 scale-105" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleOpenProject(project)}
              >
                <div
                  className={`relative aspect-video overflow-hidden border border-white/5 bg-white/5 transition-all duration-500 ${hoveredIndex === index ? "shadow-2xl shadow-blue-500/20 ring-1 ring-white/20" : ""
                    }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: hoveredIndex === index ? "perspective(1000px) rotateX(2deg) rotateY(2deg)" : "perspective(1000px) rotateX(0deg) rotateY(0deg)"
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ease-expo ${isMobile ? 'grayscale-0 opacity-100' :
                      hoveredIndex === index ? 'grayscale-0 opacity-100 scale-110' :
                        'grayscale opacity-50'
                      }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-4">
                    <div className={`transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[8px] md:text-[10px] font-technical text-white/60 uppercase tracking-widest">{project.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">
                        {project.title}
                      </h3>
                      <div className="flex gap-4 relative">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleOpenProject(project); }}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-colors"
                        >
                          View Details <Maximize2 size={14} />
                        </button>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-colors"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/projects"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-white">View Full Archive</span>
              <ArrowUpRight className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Modal Portal - Rendered at Document Root for consistency */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
            >
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={handleCloseProject}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-[#0a0a0a] border border-white/10 w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] bg-black/40 flex items-center justify-center">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain p-4 transition-opacity duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                  <button
                    onClick={handleCloseProject}
                    className="absolute top-6 right-6 p-3 bg-black/40 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors z-20"
                  >
                    <X size={20} />
                  </button>

                  <div className="mb-8">
                    <span className="text-[10px] font-technical text-teal-400 tracking-[0.3em] uppercase mb-3 block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                      {selectedProject.title}
                    </h3>
                    <div className="h-1 w-24 bg-teal-500/50 rounded-full" />
                  </div>

                  <div className="space-y-8 flex-grow">
                    <div>
                      <h4 className="text-[10px] font-technical text-white/40 uppercase tracking-widest mb-3">Mission Details</h4>
                      <p className="text-sm md:text-lg text-white/70 leading-relaxed font-light">
                        {selectedProject.details}
                      </p>
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
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-full font-bold uppercase tracking-wider text-xs hover:bg-teal-400 hover:scale-[1.03] transition-all duration-500 shadow-xl shadow-white/5"
                    >
                      Visit Mission Website <ExternalLink size={18} />
                    </a>
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
