"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ChampionCollection = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-48 overflow-hidden border-t border-white/10">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-24 relative">
          
          <div className="col-span-12 md:col-span-6 z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              <h2 className="text-[10vw] font-black text-white leading-none uppercase tracking-tighter">
                Engineering<br />
                <span className="text-white/20 italic">Philosophy</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-white/60 font-technical text-lg leading-relaxed uppercase">
                  Building efficient, maintainable applications with Next.js, TypeScript, and C++. Currently expanding expertise in resilient network infrastructure.
                </p>
                <p className="text-white/60 font-technical text-lg leading-relaxed uppercase">
                  Based in Algeria. Pursuing excellence in both software development and network associate certifications.
                </p>
              </div>

              <div className="pt-12">
                <motion.button
                  whileHover={{ gap: "2rem" }}
                  className="flex items-center gap-6 text-[10px] font-technical text-white uppercase tracking-[0.4em]"
                >
                  Download CV 
                  <span className="w-12 h-[1px] bg-white"></span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-6 relative aspect-square grayscale">
             <Image 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering"
                fill
                className="object-cover border border-white/10 p-4"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChampionCollection;