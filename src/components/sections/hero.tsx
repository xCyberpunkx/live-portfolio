"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F4F4F1] overflow-hidden flex flex-col justify-center items-center topographic-bg"
    >
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full max-w-[1600px] opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Zine Eddine Digital Art"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#282C20 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Main Container */}
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between h-full min-h-screen py-24 md:py-0">
        
        {/* Left Side: Technical Status */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-auto self-start md:self-center mt-20 md:mt-0"
        >
          <div className="flex flex-col items-start space-y-4">
            <div className="border border-[#4A4D43] rounded-lg p-6 bg-white/60 backdrop-blur-xl max-w-[280px] shadow-2xl shadow-black/5">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                   <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A4D43]">
                    System Status
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-lime/40 animate-pulse delay-75" />
                  </div>
                </div>
                <div className="h-[1px] w-full bg-[#4A4D43]/20 mb-4" />
              </div>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 relative flex items-center justify-center">
                    <svg viewBox="0 0 100 80" className="w-full h-full fill-none stroke-[#282C20] stroke-[1.5]">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                        d="M10,40 C10,20 30,10 50,10 C70,10 90,20 90,40 C90,60 70,70 50,70 C30,70 10,60 10,40 Z" 
                      />
                      <circle cx="50" cy="40" r="5" fill="#D9FF00" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-xl leading-none text-[#282C20] uppercase">Algeria</h3>
                    <p className="font-mono text-[10px] tracking-widest text-[#4A4D43] uppercase">Node Location</p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#4A4D43]/20" />

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 relative flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full border border-[#D9FF00] bg-[#D9FF00]/10 flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#282C20] rounded-full animate-ping opacity-20" />
                      <div className="absolute w-4 h-4 bg-[#282C20] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] leading-tight tracking-wider text-[#4A4D43] uppercase">
                      Software Engineer<br />& Net Architect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center/Right: Visual Area with staggered reveals */}
        <div className="flex-1 flex items-center justify-center relative h-[400px] md:h-screen w-full">
          <div className="relative w-full h-full flex items-center justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="text-center relative"
             >
                <motion.h1 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-[12vw] md:text-[15rem] font-black text-[#282C20] leading-none tracking-tighter uppercase relative z-10"
                >
                  ZINE<br />EDDINE
                </motion.h1>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute top-1/2 left-0 h-[1px] bg-neon-lime/30 -z-1" 
                />
             </motion.div>

             {/* Floating Elements */}
             <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[10%] w-32 h-32 border border-neon-lime/20 rounded-full hidden md:block"
             />
             <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[10%] w-48 h-48 border border-[#282C20]/10 rounded-full hidden md:block"
             />
          </div>
        </div>

        {/* Mobile Text Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full md:hidden z-20 text-center"
        >
          <h2 className="text-2xl font-black text-[#282C20] uppercase tracking-widest">Rouabah</h2>
          <div className="w-12 h-[2px] bg-neon-lime mx-auto mt-2" />
        </motion.div>
      </div>

      <div className="sr-only">
        <h1>Zine Eddine Rouabah</h1>
        <h2>Software Engineer & Network Associate</h2>
      </div>

      {/* Technical Labels (Bottom) */}
      <div className="absolute bottom-12 left-12 z-20 hidden lg:flex items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="font-technical text-[10px] tracking-[0.3em] text-[#282C20] uppercase font-bold">Protocol</span>
          <div className="w-8 h-[1px] bg-[#282C20]/20" />
          <span className="font-technical text-[10px] tracking-[0.3em] text-[#D9FF00] bg-[#282C20] px-3 py-1 rounded uppercase font-bold">HTTPS/TLS</span>
        </div>
      </div>

      <style jsx global>{`
        .topographic-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 C 150 150 350 50 500 100 S 750 250 800 200' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3Cpath d='M0 200 C 150 250 350 150 500 200 S 750 350 800 300' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3Cpath d='M0 300 C 150 350 350 250 500 300 S 750 450 800 400' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3Cpath d='M0 400 C 150 450 350 350 500 400 S 750 550 800 500' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3C/svg%3E");
          background-size: cover;
        }
      `}</style>
    </section>
  );
}
