"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-deep-midnight overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Zine Eddine Digital Art"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>

      {/* Grid Pattern & Light Effects */}
      <div className="absolute inset-0 z-[1] grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-lime/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between h-full min-h-screen py-24">
        
        {/* Left Side: Identity */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-auto self-start md:self-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-[10px] font-technical text-off-white/80 uppercase tracking-widest">Available for selective projects</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-black text-white uppercase">
                Building<br />
                <span className="text-neon-cyan">Systems</span>
              </h2>
              <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
                Software Engineer & Network Associate specializing in high-performance full-stack applications and resilient infrastructure.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#projects" className="bg-neon-cyan text-deep-midnight font-black px-8 py-4 rounded-xl text-sm uppercase hover:scale-105 transition-transform">
                View Works
              </a>
              <a href="#contact" className="bg-white/5 border border-white/10 text-white font-black px-8 py-4 rounded-xl text-sm uppercase hover:bg-white/10 transition-colors">
                Let's Talk
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Center Visual */}
        <div className="flex-1 flex items-center justify-end relative h-[300px] md:h-screen w-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="relative w-full h-full max-w-2xl flex items-center justify-center"
           >
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[80%] aspect-square border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                 <div className="absolute w-[60%] aspect-square border border-neon-cyan/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>
              
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                 <h1 className="text-[15vw] md:text-[20rem] font-black text-white/5 leading-none tracking-tighter select-none">
                    ZR
                 </h1>
              </motion.div>

              {/* Status Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-1/4 right-0 md:right-10 bg-card/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-cyan/20 rounded-xl flex items-center justify-center">
                       <Cpu className="text-neon-cyan" size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-technical text-white/40">CORE ARCH</div>
                      <div className="text-sm font-black text-white">SYSTEMS ENG</div>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-white/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-lime/20 rounded-xl flex items-center justify-center">
                       <Shield className="text-neon-lime" size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-technical text-white/40">SECURITY</div>
                      <div className="text-sm font-black text-white">NET ARCH</div>
                    </div>
                  </div>
                </div>
              </motion.div>
           </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] font-technical tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>

      <div className="sr-only">
        <h1>Zine Eddine Rouabah</h1>
        <h2>Software Engineer & Network Associate</h2>
      </div>
    </section>
  );
}

import { Cpu, Shield } from 'lucide-react';
