"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2024 - PRESENT",
    title: "Full Stack Engineer",
    company: "Freelance / Independent",
    desc: "Developing production-ready applications with Next.js, React, and TypeScript. Focusing on high-performance solar simulation tools and marketplace platforms."
  },
  {
    date: "2023 - 2024",
    title: "Systems Researcher",
    company: "Open Source Contributions",
    desc: "Contributing to low-level systems and security research. Implementing efficient algorithms in C++ and exploring kernel-level optimizations."
  },
  {
    date: "2022 - 2023",
    title: "Network Associate (CCNA Focus)",
    company: "Academic / Self-Study",
    desc: "Designing resilient network architectures, configuring Cisco systems, and mastering the fundamentals of secure data transmission."
  }
];

export default function TechExperience() {
  return (
    <section id="experience" className="bg-deep-midnight py-24 md:py-48 relative overflow-hidden">
      {/* Matrix-like Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] text-neon-cyan flex flex-wrap gap-4 p-8">
        {Array.from({ length: 100 }).map((_, i) => (
          <span key={i}>0x{Math.random().toString(16).slice(2, 6)}</span>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          {/* Sidebar Info */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-neon-cyan font-technical text-sm tracking-[0.3em] uppercase mb-4">
                Experience Log
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-8">
                The<br />Journey
              </h3>
              <p className="text-muted-foreground text-lg max-w-sm">
                A chronicle of technical evolution, from high-level application design to low-level system architecture and network security.
              </p>
            </motion.div>
          </div>

          {/* Timeline / Terminal Content */}
          <div className="md:w-2/3">
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group relative pl-8 md:pl-12 border-l border-white/10 hover:border-neon-cyan/50 transition-colors"
                >
                  {/* Dot */}
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-white group-hover:bg-neon-cyan transition-colors" />
                  
                  <div className="flex flex-col gap-2">
                    <span className="font-technical text-[10px] text-neon-cyan tracking-widest uppercase">
                      [{exp.date}]
                    </span>
                    <h4 className="text-2xl md:text-3xl font-black text-white uppercase">
                      {exp.title}
                    </h4>
                    <span className="text-white/40 font-mono text-sm">
                      @ {exp.company}
                    </span>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-lg max-w-xl">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Mockup Area */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="ml-4 font-mono text-[10px] text-white/20 uppercase tracking-widest">root@zine-eddine:~</span>
              </div>
              <div className="p-8 font-mono text-sm leading-relaxed text-white/60">
                <div className="flex gap-4">
                  <span className="text-neon-cyan">$</span>
                  <span>whoami</span>
                </div>
                <div className="mt-2 text-white">
                  &gt; Zine Eddine Rouabah. Engineer. Researcher. Problem Solver.
                </div>
                <div className="mt-4 flex gap-4">
                  <span className="text-neon-cyan">$</span>
                  <span>cat stack.json</span>
                </div>
                <div className="mt-2 text-white/80">
                  <pre className="whitespace-pre-wrap">
                    {`{
  "frontend": ["Next.js", "React", "TS", "Framer Motion"],
  "backend": ["Node.js", "PHP", "MySQL", "PostgreSQL"],
  "low-level": ["C++", "Kernel Arch", "Exploit Dev"],
  "network": ["CCNA", "TCP/IP", "Security Protcols"]
}`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
