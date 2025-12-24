"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Vercel-inspired Triangle Grid & Geometry */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Central Glowing Triangle (Vercel Motif) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
            <defs>
              <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 10 L 90 80 L 10 80 Z"
              fill="none"
              stroke="url(#triangleGradient)"
              strokeWidth="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <path
              d="M 50 15 L 85 75 L 15 75 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.05"
              strokeOpacity="0.1"
            />
          </svg>
        </motion.div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 z-10 text-center relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-technical text-[9px] text-white/60 uppercase tracking-[0.3em]">
            SYSTEM_PROTOCOL_READY
          </span>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[14vw] md:text-[10vw] font-black leading-[0.8] text-white uppercase tracking-tighter"
          >
            ROUABAH<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>ZINE_EDDINE</span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="font-technical text-[10px] text-white/40 uppercase tracking-[0.8em] mb-4">
            ARCHITECTING_DIGITAL_RESILIENCE
          </p>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1 h-1 bg-white/20 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Sidebar Technical Data */}
      <div className="absolute left-10 bottom-10 z-10 hidden lg:block">
        <div className="flex flex-col gap-1 font-technical text-[8px] text-white/20 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/10" />
            <span>LOC: 36.7538° N, 3.0588° E</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/10" />
            <span>REL: STABLE_BUILD_2024</span>
          </div>
        </div>
      </div>

      {/* Right Sidebar Decoration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-6 opacity-20">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="rotate-90 font-technical text-[8px] uppercase tracking-[1em] whitespace-nowrap">SCROLL_FOR_INTEL</span>
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/20" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
    </section>
  );
};

export default HeroSection;
