"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    date: "2025 — PRES",
    title: "Frontend Developer",
    company: "Snovatech",
    desc: "Architecting high-performance solar simulation platforms. Optimizing UI for massive dataset rendering and real-time ROI calculations."
  },
  {
    date: "2024 — 25",
    title: "Software Engineer Intern",
    company: "P.I Design",
    desc: "Led the digital transformation of patient management systems. Translated complex medical workflows into resilient software solutions."
  },
  {
    date: "2024",
    title: "Full-Stack Developer",
    company: "Ultra Light",
    desc: "Directed development of corporate digital platforms. Engineered backend architectures aligned with enterprise business objectives."
  }
];

export default function TechExperience() {
  return (
    <section id="experience" className="bg-black py-24 md:py-48 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-32">
          <span className="text-[10px] font-technical text-white/20 tracking-[1em] uppercase block mb-4">Professional Record</span>
          <h2 className="text-[12vw] md:text-[8vw] font-black text-white uppercase leading-none tracking-tighter">
            THE<br /><span className="text-white/20 italic">JOURNEY</span>
          </h2>
        </div>

        <div className="grid gap-px bg-white/5 border border-white/5">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative grid md:grid-cols-[1fr_2fr_1.5fr] gap-12 p-12 md:p-24 bg-black hover:bg-white/5 transition-all duration-700"
            >
              <span className="text-2xl font-black text-white/20 group-hover:text-white transition-colors">
                {exp.date}
              </span>
              
              <div className="space-y-4">
                <h4 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:italic transition-all">
                  {exp.title}
                </h4>
                <span className="text-[10px] font-technical text-white/40 uppercase tracking-widest block">
                  @ {exp.company}
                </span>
              </div>

              <p className="text-white/40 font-technical text-lg uppercase tracking-wider leading-relaxed group-hover:text-white transition-colors">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
