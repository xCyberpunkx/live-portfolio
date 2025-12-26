"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    id: "01",
    date: "2025 — PRES",
    title: "Frontend Developer",
    company: "Snovatech",
    status: "ACTIVE",
    desc: "Developing and maintaining user-facing features for web and simulation platforms. Improving UI performance and optimizing rendering for large datasets. Integrating APIs to ensure consistent user experience."
  },
  {
    id: "02",
    date: "2024 — 25",
    title: "Software Engineer Intern",
    company: "P.I Design",
    status: "COMPLETED",
    desc: "Led the design and implementation of a comprehensive patient management system for healthcare facilities. Collaborated with medical professionals to translate operational needs into effective software solutions."
  },
  {
    id: "03",
    date: "2024",
    title: "Full-Stack Developer",
    company: "Ultra Light",
    status: "STABLE",
    desc: "Directed the development of corporate digital platforms and internal management systems. Designed application architecture aligned with business objectives and workflow requirements."
  }
];

export default function TechExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="tech" className="bg-black py-20 md:py-64 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-12 md:top-24 right-[5vw] opacity-5 pointer-events-none">
        <span className="text-[30vw] md:text-[20vw] font-black text-white leading-none uppercase tracking-tighter">
          PATH
        </span>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4 mb-16 lg:mb-0">
            <div className="lg:sticky lg:top-32">
              <span className="text-[8px] md:text-[10px] font-technical text-white/20 tracking-[1em] uppercase block mb-8">Professional Record</span>
                <h2 className="text-[16vw] md:text-[10vw] lg:text-[6vw] font-black text-white uppercase leading-[0.85] tracking-tighter mb-12">
                THE<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>JOURNEY</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="font-technical text-[8px] text-white/40 uppercase tracking-widest">System_Status: Online</span>
                </div>
                <p className="text-white/30 font-technical text-[10px] uppercase tracking-[0.2em] max-w-xs leading-relaxed">
                  A chronological sequence of technical challenges delivered by a Software Engineer.
                </p>
              </div>
            </div>
          </div>

          <div ref={containerRef} className="lg:col-span-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
            {!isMobile && (
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/20 hidden md:block z-10"
              />
            )}

            <div className="space-y-24 md:space-y-48 md:pl-24">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="absolute -left-[101px] top-4 w-2 h-2 rounded-full bg-black border border-white/20 group-hover:border-white group-hover:scale-150 transition-all duration-500 hidden md:block z-20" />
                  
                  <div className="flex flex-col gap-8">
                      <div className="flex flex-wrap items-center gap-6">
                        <span className="text-[10px] font-technical text-white/40 group-hover:text-white/80 transition-colors duration-500">
                          [{exp.id}]
                        </span>
                        <span className="h-px w-12 bg-white/20" />
                        <span className="text-[10px] font-technical text-white/60 uppercase tracking-widest">
                          {exp.date}
                        </span>
                        <span className="px-2 py-0.5 border border-white/20 text-[7px] font-technical text-white/40 rounded uppercase">
                          {exp.status}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-expo">
                          {exp.title}
                        </h4>
                        <p className="text-xl md:text-2xl font-black text-white/40 uppercase tracking-tight group-hover:text-white/70 transition-colors duration-700">
                          // {exp.company}
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-white/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                        <p className="text-white/60 font-technical text-sm md:text-lg uppercase tracking-wider leading-relaxed max-w-2xl group-hover:text-white transition-colors duration-700">
                          {exp.desc}
                        </p>
                      </div>

                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                       <span className="w-1 h-1 rounded-full bg-white/20" />
                       <span className="w-1 h-1 rounded-full bg-white/20" />
                       <span className="w-1 h-1 rounded-full bg-white/20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
