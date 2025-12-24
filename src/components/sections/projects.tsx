"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ExternalLink, Globe } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

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
  image: string;
  liveUrl?: string;
}

const projects: ProjectData[] = [
  {
    id: "snovatech",
    title: "SnovaTech Solar",
    year: "2024",
    category: "Clean Energy",
    description: "Financial solar simulation for the Algerian ecosystem.",
    longDescription: "A high-performance simulation engine calculating solar ROI with precision accuracy based on Algerian meteorological data.",
    impact: "Processing 10k+ monthly simulations with 99.8% calculation accuracy.",
    role: "Lead Engineer",
    techStack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "photographer",
    title: "LensMarket",
    year: "2025",
    category: "Marketplace",
    description: "Automated trust-score marketplace for professional photography.",
    longDescription: "A sophisticated platform connecting creators with clients using a proprietary reputation algorithm.",
    impact: "Onboarded 200+ verified professionals in the first quarter.",
    role: "System Architect",
    techStack: ["React", "Prisma", "Redis", "Socket.io"],
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop",
  },
  {
    id: "clinic",
    title: "DentalCore",
    year: "2024",
    category: "Healthcare",
    description: "Digitizing medical records for modern dental practices.",
    longDescription: "Enterprise-grade clinic management system with real-time scheduling and secure medical history storage.",
    impact: "Reduced administrative overhead by 45% across partner clinics.",
    role: "Full Stack",
    techStack: ["Node.js", "React", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  }
];

const ProjectCard = ({ project, index }: { project: ProjectData, index: number }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 bg-black border-t border-white/5">
      <motion2d.div 
        style={{ scale }}
        className="container grid grid-cols-12 gap-12 items-center"
      >
        <div className="col-span-12 md:col-span-7 relative group cursor-pointer overflow-hidden aspect-video bg-white/5">
          <motion2d.div 
            style={{ y }}
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </motion2d.div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute bottom-8 left-8">
            <span className="text-[8px] font-technical text-white/40 tracking-[0.5em] uppercase">0{index + 1} // Archive</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.4em]">{project.category}</span>
            <h3 className="text-6xl font-black text-white uppercase tracking-tighter leading-none">{project.title}</h3>
          </div>
          
          <p className="text-white/40 text-lg uppercase font-technical leading-relaxed">
            {project.description}
          </p>

          <button 
            onClick={() => setShowDetails(true)}
            className="flex items-center gap-6 group"
          >
            <span className="text-[10px] font-technical text-white uppercase tracking-[0.4em] group-hover:mr-4 transition-all">Details</span>
            <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-white transition-all" />
          </button>
        </div>
      </motion2d.div>

      <AnimatePresence>
        {showDetails && (
          <motion2d.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-8 bg-black/98 backdrop-blur-2xl"
            onClick={() => setShowDetails(false)}
          >
            <motion2d.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="bg-[#050505] w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowDetails(false)} className="absolute top-12 right-12 z-10 hover:rotate-90 transition-all">
                <X size={32} className="text-white/40 hover:text-white" />
              </button>

              <div className="p-12 md:p-24 grid md:grid-cols-2 gap-24">
                <div className="space-y-12">
                   <div className="space-y-4">
                      <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em]">Overview</span>
                      <h2 className="text-7xl font-black text-white uppercase tracking-tighter">{project.title}</h2>
                   </div>
                   <p className="text-white/40 text-xl leading-relaxed font-technical uppercase italic">
                      {project.longDescription}
                   </p>
                   <div className="space-y-4">
                      <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em]">Key Impact</span>
                      <p className="text-white text-2xl font-black uppercase tracking-tight">{project.impact}</p>
                   </div>
                </div>

                <div className="space-y-16">
                   <div className="space-y-6">
                      <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em]">Stack / Engine</span>
                      <div className="flex flex-wrap gap-4">
                        {project.techStack.map(t => (
                          <span key={t} className="text-[10px] font-technical border border-white/10 px-6 py-3 text-white/60 hover:bg-white hover:text-black transition-all cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>
                   </div>
                   
                   <div className="aspect-video relative grayscale hover:grayscale-0 transition-all duration-700 border border-white/5 p-4">
                      <Image src={project.image} alt={project.title} fill className="object-cover p-2" />
                   </div>

                   <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.5em] text-xs hover:bg-white/90 transition-all">
                      Request Access
                   </button>
                </div>
              </div>
            </motion2d.div>
          </motion2d.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MyProjects() {
  return (
    <section id="projects" className="bg-black relative">
      <div className="h-[50vh] flex flex-col items-center justify-center">
        <motion2d.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[10px] font-technical text-white/20 uppercase tracking-[1em] mb-4 block">Archive 24/25</span>
          <h2 className="text-[12vw] font-black text-white uppercase tracking-tighter leading-none">Showcases</h2>
        </motion2d.div>
      </div>

      <div className="relative">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      <div className="h-[30vh] flex items-center justify-center bg-black border-t border-white/5">
         <div className="flex items-center gap-12">
            <Globe size={48} className="text-white/10 animate-pulse" />
            <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em]">End of Archive / Global Reach</span>
         </div>
      </div>
    </section>
  );
}
