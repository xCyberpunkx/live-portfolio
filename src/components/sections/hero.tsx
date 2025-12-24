"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pointer-events-none">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="font-technical text-[10px] tracking-[1em] text-white/30 uppercase">
              NODE_DZ // PROTOCOL_01
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[11vw] font-black leading-[0.85] text-white uppercase tracking-tighter"
          >
            ROUABAH<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>ZINE EDDINE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <div className="px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="font-technical text-[10px] text-white/60 uppercase tracking-[0.5em]">
                Software Engineer
              </span>
            </div>
            
            <div className="h-20 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute bottom-12 left-12 z-10 hidden md:block">
        <div className="flex flex-col gap-2 font-technical text-[8px] text-white/20 uppercase tracking-widest">
          <span>LATENCY: 12MS</span>
          <span>UPTIME: 99.9%</span>
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 hidden md:block">
        <div className="flex flex-col items-end gap-2 font-technical text-[8px] text-white/20 uppercase tracking-widest text-right">
          <span>CORE_V4.0</span>
          <span>STABLE_BUILD</span>
          <span>AUTH: VERIFIED</span>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-20" />
    </section>
  );
};

export default HeroSection;