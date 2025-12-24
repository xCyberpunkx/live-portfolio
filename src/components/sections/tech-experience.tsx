"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    date: "2024 - 25",
    title: "Full Stack Engineer",
    company: "Freelance Architecture",
    desc: "Developing production-ready applications with Next.js and TypeScript. Focusing on high-performance simulation tools."
  },
  {
    date: "2023 - 24",
    title: "Systems Researcher",
    company: "Open Source Ecosystem",
    desc: "Contributing to low-level systems and security research. Implementing efficient algorithms in C++."
  },
  {
    date: "2022 - 23",
    title: "Network Associate",
    company: "Infrastructure Design",
    desc: "Designing resilient network architectures and mastering secure data transmission patterns."
  }
];

export default function TechExperience() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="experience" ref={containerRef} className="bg-black py-24 md:py-64 relative overflow-hidden border-t border-white/5">
      <div className="container relative z-10">
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-48"
            >
              <span className="text-[10px] font-technical text-white/20 tracking-[0.8em] uppercase block mb-8">Professional Timeline</span>
              <h2 className="text-[10vw] lg:text-[7vw] font-black text-white uppercase leading-[0.85] mb-12 tracking-tighter">
                The<br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>Progress</span>
              </h2>
              <p className="text-white/40 text-xl font-technical uppercase tracking-widest leading-relaxed max-w-sm">
                A non-linear journey through high-level application design and low-level systems.
              </p>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 relative">
            <svg className="absolute left-0 top-0 h-full w-1 overflow-visible">
               <motion.line
                 x1="0" y1="0" x2="0" y2="100%"
                 stroke="rgba(255,255,255,0.05)"
                 strokeWidth="2"
               />
               <motion.line
                 x1="0" y1="0" x2="0" y2="100%"
                 stroke="white"
                 strokeWidth="2"
                 style={{ pathLength }}
               />
            </svg>

            <div className="space-y-48 pl-16">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative"
                >
                  <div className="absolute left-[-64px] top-4 w-4 h-4 rounded-full border border-white bg-black z-10 group-hover:bg-white transition-colors duration-500" />
                  
                  <div className="space-y-8">
                    <div className="flex flex-col gap-4">
                      <span className="font-technical text-[10px] text-white/20 tracking-[0.4em] uppercase">
                        [{exp.date}]
                      </span>
                      <h4 className="text-5xl font-black text-white uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                        {exp.title}
                      </h4>
                      <span className="text-white/40 font-technical text-[10px] uppercase tracking-widest italic">
                        @ {exp.company}
                      </span>
                    </div>
                    <p className="text-white/40 leading-relaxed text-xl font-technical uppercase tracking-wider max-w-xl group-hover:text-white/80 transition-colors duration-500">
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
