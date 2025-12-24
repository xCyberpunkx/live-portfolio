"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ChampionCollection = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-64 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-24 md:gap-x-24 relative items-center">
          <div className="col-span-12 md:col-span-6 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-technical text-white/20 tracking-[1em] uppercase block">CORE PHILOSOPHY</span>
                <h2 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.85] uppercase tracking-tighter">
                  SYSTEMIC<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>INTELLIGENCE</span>
                </h2>
              </div>
              
              <div className="space-y-12">
                <p className="text-white/40 font-technical text-xl leading-relaxed uppercase tracking-[0.2em] max-w-xl">
                  Building the backbone of modern digital experiences through architectural rigor and surgical code precision.
                </p>
                
                <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em]">Efficiency</span>
                    <p className="text-white font-black uppercase text-sm tracking-widest">Low Latency</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em]">Reliability</span>
                    <p className="text-white font-black uppercase text-sm tracking-widest">Fault Tolerant</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-6 relative aspect-square">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-full p-4 md:p-12 flex items-center justify-center"
            >
              {/* Technical Blueprint Visual */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full relative">
                  {/* Decorative Circles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-blue-500/20 rounded-full" />
                  
                  {/* Rotating Crosshair */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45" />
                </div>
              </div>

              <div className="w-full h-full border border-white/10 p-1 bg-black/40 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 z-20" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 z-20" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 z-20" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 z-20" />

                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Engineering Detail"
                  fill
                  className="object-cover grayscale opacity-40 mix-blend-screen group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                
                {/* Scanning Bar Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 animate-[scan_4s_linear_infinite]" />
              </div>
              
              {/* Data Overlay */}
              <div className="absolute -bottom-4 -right-4 p-6 bg-black border border-white/10 font-technical text-[8px] text-white/40 uppercase tracking-[0.2em] space-y-1 z-30">
                <p>LAT: 36.7538° N</p>
                <p>LNG: 3.0588° E</p>
                <p className="text-white/60">NODE: DZ_ALGIERS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ChampionCollection;