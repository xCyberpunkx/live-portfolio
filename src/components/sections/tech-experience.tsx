"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2024 - PRESENT",
    title: "Full Stack Engineer",
    company: "Freelance",
    desc: "Developing production-ready applications with Next.js and TypeScript. Focusing on high-performance simulation tools."
  },
  {
    date: "2023 - 2024",
    title: "Systems Researcher",
    company: "Open Source",
    desc: "Contributing to low-level systems and security research. Implementing efficient algorithms in C++."
  },
  {
    date: "2022 - 2023",
    title: "Network Associate",
    company: "Cisco Focus",
    desc: "Designing resilient network architectures and mastering secure data transmission."
  }
];

export default function TechExperience() {
  return (
    <section id="experience" className="bg-black py-24 md:py-48 relative overflow-hidden border-t border-white/10">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-6xl font-black text-white uppercase leading-none mb-8">
                The<br />Journey
              </h2>
              <p className="text-white/40 text-lg max-w-sm uppercase font-technical">
                Evolution from high-level application design to low-level systems.
              </p>
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-24">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative pl-12 border-l border-white/10 hover:border-white transition-colors"
                >
                  <div className="absolute left-[-2px] top-2 w-[5px] h-[5px] bg-white" />
                  <div className="flex flex-col gap-4">
                    <span className="font-technical text-[10px] text-white/20 tracking-widest uppercase">
                      [{exp.date}]
                    </span>
                    <h4 className="text-3xl font-black text-white uppercase">
                      {exp.title}
                    </h4>
                    <span className="text-white/40 font-technical text-[10px] uppercase">
                      @ {exp.company}
                    </span>
                    <p className="mt-4 text-white/60 leading-relaxed text-lg max-w-xl">
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
