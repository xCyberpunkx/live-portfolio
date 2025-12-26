"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { 
    name: 'Formula 1', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg',
    invert: false 
  },
  { 
    name: 'Vercel', 
    logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
    invert: true 
  },
  { 
    name: 'Oracle', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    invert: true 
  },
];

export default function Partnerships() {
  return (
    <section className="bg-black py-32 md:py-64 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="font-technical text-[10px] tracking-[1em] text-white/20 uppercase block mb-4">STRATEGIC_PARTNERS</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">TRUSTED_BY_LEADERS</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative w-32 md:w-48 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-crosshair"
              >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`w-full h-full object-contain ${partner.invert ? 'invert' : ''}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
