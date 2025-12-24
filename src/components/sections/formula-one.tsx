"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { label: 'TOP SPEED', value: '372.6', unit: 'KM/H' },
  { label: 'G-FORCE', value: '5.2', unit: 'LATERAL' },
  { label: 'BRAKING', value: '1.9', unit: 'SECONDS' },
];

const FormulaOne = () => {
  return (
    <section id="f1" className="relative w-full bg-black py-24 md:py-64 overflow-hidden border-t border-red-900/20">
      {/* Race Track Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #ff0000 1px, transparent 1px), linear-gradient(0deg, #ff0000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-red-600" />
            <span className="font-technical text-[10px] tracking-[1em] text-red-600 uppercase block">PERFORMANCE_DIVISION</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15vw] md:text-[12vw] leading-[0.75] font-black uppercase text-white tracking-tighter"
          >
            SPEED<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>IS_ARCHITECTURE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-y-24 md:gap-x-24 items-end">
          <div className="col-span-12 md:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[21/9] w-full border border-white/5 bg-neutral-900/50 overflow-hidden group"
            >
              {/* Racing Line Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 Q50,20 100,80" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>

              <Image 
                src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
                alt="F1 Engineering"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 flex flex-col gap-2 z-30">
                <span className="text-[8px] font-technical text-red-500 uppercase tracking-[0.4em]">AERO_DYNAMICS</span>
                <p className="text-white text-xs font-black tracking-[0.2em] uppercase">VORTEX_GENERATION_V02</p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-5 space-y-16">
            <div className="grid grid-cols-1 gap-12 border-l border-white/10 pl-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.4em]">{stat.label}</span>
                  <div className="flex items-baseline gap-4">
                    <span className="text-6xl font-black text-white italic">{stat.value}</span>
                    <span className="text-[10px] font-technical text-red-600 uppercase tracking-widest">{stat.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-white/40 font-technical text-sm leading-relaxed uppercase tracking-[0.1em] max-w-sm pl-12">
              The pinnacle of engineering meets mathematical perfection. Every millisecond is a structural decision.
            </p>
          </div>
        </div>

        {/* Technical HUD element */}
        <div className="mt-32 border-t border-white/5 pt-12 flex flex-wrap gap-12 justify-between items-center">
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em] mb-4">DRS_SYSTEM</span>
              <div className="flex gap-1">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className={`w-4 h-1 ${i < 5 ? 'bg-red-600' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em] mb-4">ERS_DEPLOY</span>
              <div className="flex gap-1">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className={`w-4 h-1 ${i < 4 ? 'bg-white' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-[10px] font-technical text-white/40 uppercase tracking-[0.4em]">
            SYSTEM_STATUS: <span className="text-green-500">NOMINAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormulaOne;