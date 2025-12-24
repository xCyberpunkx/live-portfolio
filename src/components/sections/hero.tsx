"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={container}
      id="top" 
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Perspective Grid Floor */}
      <div className="absolute inset-0 z-0 overflow-hidden perspective-[1000px]">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] [transform:rotateX(60deg)_translateZ(-200px)]"
        />
      </div>

      {/* Floating Glass Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -40, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className="absolute border border-white/10 backdrop-blur-[2px] bg-white/[0.02]"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              borderRadius: '24px',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="font-technical text-[10px] tracking-[1.2em] text-white/40 uppercase">
            ENGINEERING_THE_FUTURE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] font-black leading-[0.85] text-white uppercase tracking-tighter"
        >
          ZINE_EDDINE<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>ROUABAH</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
          className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-12"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex flex-col items-center"
        >
          <span className="font-technical text-[8px] text-white/20 uppercase tracking-[0.8em]">
            SYSTEM_ARCHITECT // CREATIVE_DEVELOPER
          </span>
        </motion.div>
      </motion.div>

      {/* Floating UI Metadata */}
      <div className="absolute bottom-12 left-12 z-10 hidden md:block">
        <div className="flex flex-col gap-2 font-technical text-[8px] text-white/10 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/10" />
            <span>LATENCY: 4MS</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/10" />
            <span>CON_TYPE: FIBER</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 hidden md:block">
        <div className="flex flex-col items-end gap-2 font-technical text-[8px] text-white/10 uppercase tracking-widest text-right">
          <div className="flex items-center gap-4">
            <span>STABLE_O1</span>
            <span className="w-8 h-[1px] bg-white/10" />
          </div>
          <div className="flex items-center gap-4">
            <span>BUILD_2024</span>
            <span className="w-8 h-[1px] bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

