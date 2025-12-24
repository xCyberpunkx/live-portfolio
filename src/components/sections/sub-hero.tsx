"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function SubHeroSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="about" ref={container} className="bg-black py-32 md:py-64 overflow-hidden relative">
      {/* Background Interactive Spotlight */}
      <motion.div 
        className="pointer-events-none absolute -inset-px opacity-20 transition duration-300 z-0"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`
          ),
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-12 mb-48">
          <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
            <span className="text-[18vw] font-black text-white uppercase tracking-tighter leading-none">SYSTEM_ARCHITECT // </span>
            <span className="text-[18vw] font-black text-white/5 uppercase tracking-tighter leading-none italic"> SOLUTION_ENGINEER // </span>
          </motion.div>
          <motion.div style={{ x: x2 }} className="flex whitespace-nowrap ml-[-30%]">
            <span className="text-[18vw] font-black text-white/5 uppercase tracking-tighter leading-none italic">PRECISION_CODE // </span>
            <span className="text-[18vw] font-black text-white uppercase tracking-tighter leading-none">SCALABLE_SYSTEMS // </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3 hidden lg:block">
            <div className="space-y-4">
              <span className="font-technical text-[8px] text-white/20 uppercase tracking-[0.5em] block">Metadata</span>
              <div className="space-y-1 font-technical text-[7px] text-white/40 uppercase">
                <p>NAME: ROUABAH ZINE EDDINE</p>
                <p>ROLE: SR. SOFTWARE ENGINEER</p>
                <p>LOC: 36.4761° N, 2.8360° E</p>
                <p>CLASS: TECHNICAL_ARCHITECT</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 text-center lg:text-left space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-technical uppercase text-white/60 tracking-tight leading-[1.1]"
            >
              ROUABAH ZINE EDDINE IS A <span className="text-white font-black">HIGH-PRECISION</span> ENGINEER SPECIALIZING IN THE ARCHITECTURE OF <span className="text-white font-black">RESILIENT DIGITAL INFRASTRUCTURE</span>.
            </motion.p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-12">
               <div className="flex flex-col">
                  <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em] mb-3">Core_Focus</span>
                  <span className="text-white font-black uppercase text-xl">FULL_STACK // CLOUD</span>
               </div>
               <div className="w-[1px] h-12 bg-white/10 hidden sm:block" />
               <div className="flex flex-col">
                  <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em] mb-3">Efficiency</span>
                  <span className="text-white font-black uppercase text-xl">OPTIMIZED_LOGIC</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
               <span className="font-technical text-[8px] text-white/20 uppercase tracking-[0.5em] block mb-4">Brief_01</span>
               <p className="text-white/40 font-technical text-[10px] uppercase tracking-widest leading-relaxed">
                 4+ years of delivering enterprise-grade solutions across healthcare, renewable energy, and fintech sectors. Focused on performance at scale.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
