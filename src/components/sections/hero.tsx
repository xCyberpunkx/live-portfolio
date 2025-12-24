"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      {/* Dynamic Background (CSS/SVG based) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <motion.div 
          style={{ rotate }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full"
        />
        <motion.div 
          style={{ rotate: rotate, scale: 1.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]" />
      </div>

      {/* Content Layer */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="container relative z-10 h-full flex flex-col justify-center items-center pointer-events-none"
      >
        <div className="w-full flex flex-col items-center text-center">
          <div className="overflow-hidden mb-8">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] font-technical text-white/40 tracking-[1em] uppercase block"
            >
              System Architect & Network Engineer
            </motion.span>
          </div>

          <h1 className="text-[14vw] md:text-[11vw] font-black text-white leading-[0.8] tracking-tighter uppercase mb-16">
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                ROUABAH
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-transparent stroke-white stroke-1"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                ZINE EDDINE
              </motion.span>
            </div>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-center pointer-events-auto">
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="group flex items-center gap-8 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] hover:scale-105 transition-all duration-500"
            >
              Explore Archive
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="group border border-white/10 px-12 py-6 text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white/5 transition-all duration-500"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Floating HUD Elements */}
      <div className="absolute left-[5vw] bottom-12 hidden md:block overflow-hidden">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col gap-2 border-l border-white/20 pl-4"
        >
          <span className="text-[8px] font-technical text-white/20 uppercase tracking-widest">Stack Verification</span>
          <span className="text-[10px] font-technical text-white uppercase tracking-widest animate-pulse">SYSTEM_STABLE // 2025</span>
        </motion.div>
      </div>

      <div className="absolute right-[5vw] bottom-12 hidden md:block overflow-hidden">
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-end gap-2 border-r border-white/20 pr-4"
        >
          <span className="text-[8px] font-technical text-white/20 uppercase tracking-widest">Global Location</span>
          <span className="text-[10px] font-technical text-white uppercase tracking-widest">ALGERIA // NODE_DZ</span>
        </motion.div>
      </div>
    </section>
  );
}
