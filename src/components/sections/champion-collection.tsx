"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ChampionCollection = () => {
  return (
    <section id="about" className="relative w-full bg-[#282C20] py-24 md:py-48 overflow-hidden">
      <div className="container mx-auto px-[4vw]">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 relative">
          
          {/* Header & Description Area */}
          <div className="col-span-12 md:col-span-5 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 md:max-w-md"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#F4F4F1] leading-[0.9] uppercase">
                Systems &<br />
                <span className="text-4xl md:text-6xl lg:text-7xl block transition-all duration-300 text-neon-lime">
                  Engineering
                </span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-[#A1A1AA] font-mono text-sm md:text-base leading-relaxed tracking-tight max-w-sm">
                  Started in web development and progressed to building efficient, maintainable, and full-stack applications using Next.js, React, TypeScript, and PHP.
                </p>
                <p className="text-[#A1A1AA] font-mono text-sm md:text-base leading-relaxed tracking-tight max-w-sm">
                  Currently pursuing CCNA certification to expand knowledge in networking and infrastructure. Based in Algeria.
                </p>
              </div>

              {/* Download CV Button */}
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#D9FF00] hover:bg-[#c4e600] text-[#0A0A0A] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-transform active:scale-95 btn-primary-hover shadow-xl shadow-black/20"
                >
                  Download CV
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="rotate-[-45deg]"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Collage Images Area */}
          <div className="col-span-12 md:col-span-7 relative min-h-[400px] md:min-h-[600px] mt-12 md:mt-0">
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-[85%] md:w-[70%] z-0 rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] border border-muted-gray/20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                alt="Zine Eddine Engineering"
                width={800}
                height={1000}
                className="w-full h-full object-cover grayscale-[0.2]"
                priority
              />
            </motion.div>

            {/* Stats Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-[40%] left-[10%] md:left-[5%] w-[45%] md:w-[35%] z-20 shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-[#f0f0f0] p-6 rounded-lg transform shadow-xl border border-muted-gray/10">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-rich-black">12+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-technical">Projects Completed</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Item 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-[5%] right-0 w-[60%] md:w-[45%] z-10 mix-blend-screen opacity-90 pointer-events-none"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10">
                <div className="absolute inset-0 bg-[#D9FF00]/10" />
                <div className="flex flex-col items-center justify-center h-full bg-[#1a1c14]/80 text-[#D9FF00] font-black text-6xl md:text-8xl tracking-tighter italic leading-none">
                  <span>3+</span>
                  <span className="text-xs uppercase tracking-[0.3em] font-technical not-italic">Years Exp</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Technical Label */}
        <div className="mt-24 md:mt-32 border-t border-[#4A4D43] pt-6 flex flex-wrap justify-between items-center gap-4">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex gap-4 items-center"
           >
             <span className="font-technical text-xs text-[#A1A1AA] tracking-[0.2em]">01 — ABOUT</span>
             <span className="w-8 h-[1px] bg-[#4A4D43]"></span>
             <span className="font-technical text-xs text-[#D9FF00] tracking-[0.2em]">ZINE EDDINE ROUABAH</span>
           </motion.div>
        </div>

      </div>

      <div className="absolute inset-0 topographic-bg opacity-[0.05] pointer-events-none" />
    </section>
  );
};

export default ChampionCollection;