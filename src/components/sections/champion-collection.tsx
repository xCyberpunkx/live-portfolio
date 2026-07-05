"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ChampionCollection = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-64 overflow-hidden border-t" style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}>
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
                <span className="text-[10px] font-technical tracking-[1em] uppercase block" style={{ color: "var(--text-quaternary)" }}>CORE PHILOSOPHY</span>
                <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
                  SYSTEMIC<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>INTELLIGENCE</span>
                </h2>
              </div>
              
              <div className="space-y-12">
                <p className="font-technical text-xl leading-relaxed uppercase tracking-[0.2em] max-w-xl" style={{ color: "var(--text-tertiary)" }}>
                  Building the backbone of modern digital experiences through architectural rigor and surgical code precision.
                </p>
                
                <div className="grid grid-cols-2 gap-12 border-t pt-12" style={{ borderColor: "var(--border-default)" }}>
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical uppercase tracking-[0.4em]" style={{ color: "var(--text-quaternary)" }}>Efficiency</span>
                    <p className="font-black uppercase text-sm tracking-widest" style={{ color: "var(--text-primary)" }}>Low Latency</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical uppercase tracking-[0.4em]" style={{ color: "var(--text-quaternary)" }}>Reliability</span>
                    <p className="font-black uppercase text-sm tracking-widest" style={{ color: "var(--text-primary)" }}>Fault Tolerant</p>
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border rounded-full" style={{ borderColor: "var(--border-subtle)" }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border rounded-full border-dashed animate-[spin_60s_linear_infinite]" style={{ borderColor: "var(--border-default)" }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-blue-500/20 rounded-full" />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px rotate-45"
                    style={{ backgroundImage: "linear-gradient(to right, transparent, var(--border-strong), transparent)" }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px -rotate-45"
                    style={{ backgroundImage: "linear-gradient(to right, transparent, var(--border-strong), transparent)" }}
                  />
                </div>
              </div>

              <div className="w-full h-full border p-1 relative overflow-hidden group" style={{ borderColor: "var(--border-default)", backgroundColor: "color-mix(in srgb, var(--bg-surface) 60%, transparent)" }}>
                <div className="absolute inset-0 z-10" style={{ backgroundImage: "radial-gradient(circle_at_center, transparent 0%, var(--bg-base) 100%)" }} />
                
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: "var(--border-strong)" }} />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: "var(--border-strong)" }} />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: "var(--border-strong)" }} />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: "var(--border-strong)" }} />

                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Engineering Detail"
                  fill
                  className="object-cover grayscale opacity-40 mix-blend-luminosity group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                
                <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] z-20 animate-[scan_4s_linear_infinite]" />
              </div>
              
              <div
                className="absolute -bottom-4 -right-4 p-6 border font-technical text-[8px] uppercase tracking-[0.2em] space-y-1 z-30"
                style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-default)", color: "var(--text-tertiary)" }}
              >
                <p>LAT: 36.4701° N</p>
                <p>LNG: 2.8288° E</p>
                <p style={{ color: "var(--text-secondary)" }}>NODE: DZ_BLIDA</p>
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
