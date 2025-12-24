"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    id: "01",
    date: "2025 — PRES",
    title: "Software Engineer",
    company: "Snovatech",
    desc: "Architecting high-performance solar simulation platforms. Optimizing UI for massive dataset rendering and real-time ROI calculations using C++ and .NET for core computation engines."
  },
  {
    id: "02",
    date: "2024 — 25",
    title: "Software Engineer Intern",
    company: "P.I Design",
    desc: "Led the digital transformation of patient management systems. Translated complex medical workflows into resilient software solutions using C# and .NET frameworks."
  },
  {
    id: "03",
    date: "2024",
    title: "Full-Stack Developer",
    company: "Ultra Light",
    desc: "Directed development of corporate digital platforms. Engineered backend architectures aligned with enterprise business objectives."
  }
];

export default function TechExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="bg-black py-24 md:py-64 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-24 right-[5vw] opacity-5 pointer-events-none">
        <span className="text-[20vw] font-black text-white leading-none uppercase tracking-tighter">
          PATH
        </span>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4 mb-24 lg:mb-0">
            <div className="sticky top-32">
              <span className="text-[10px] font-technical text-white/20 tracking-[1em] uppercase block mb-8">Professional Record</span>
              <h2 className="text-[12vw] lg:text-[6vw] font-black text-white uppercase leading-[0.85] tracking-tighter mb-12">
                THE<br />
                <span className="text-white/20 italic">JOURNEY</span>
              </h2>
              <p className="text-white/40 font-technical text-sm uppercase tracking-[0.3em] max-w-xs leading-relaxed">
                A chronological sequence of technical challenges delivered by a Software Engineer.
              </p>
            </div>
          </div>

          <div ref={containerRef} className="col-span-12 lg:col-span-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-0 top-0 bottom-0 w-[1px] bg-white hidden md:block z-10"
            />

            <div className="space-y-32 md:pl-24">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="absolute -left-[101px] top-4 w-2 h-2 rounded-full bg-black border border-white group-hover:scale-150 transition-transform duration-500 hidden md:block z-20" />
                  
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-technical text-white/20 group-hover:text-white transition-colors duration-500">
                        [{exp.id}]
                      </span>
                      <span className="h-px w-12 bg-white/10" />
                      <span className="text-[10px] font-technical text-white/40 uppercase tracking-widest">
                        {exp.date}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter group-hover:pl-4 transition-all duration-700 ease-expo">
                        {exp.title}
                      </h4>
                      <p className="text-xl font-black text-white/20 uppercase tracking-tight group-hover:text-white transition-colors duration-700">
                        @ {exp.company}
                      </p>
                    </div>

                    <p className="text-white/40 font-technical text-lg uppercase tracking-wider leading-relaxed max-w-2xl group-hover:text-white/60 transition-colors duration-700">
                      {exp.desc}
                    </p>
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
