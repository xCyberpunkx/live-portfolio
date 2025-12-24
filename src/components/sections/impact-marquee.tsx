"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ImpactMarquee: React.FC = () => {
  return (
    <section className="bg-black pt-32 pb-0 overflow-hidden select-none border-t border-white/10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mb-32"
        >
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] text-white uppercase font-black tracking-tighter">
            Architecting <span className="text-white/20 italic">scalable</span> systems and resilient networks. Defining digital <span className="underline decoration-white/20 underline-offset-8">excellence</span> through engineering precision.
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden border-y border-white/10 py-12">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, idx) => (
            <div 
              key={idx} 
              className="text-[15vw] font-black text-white uppercase tracking-tighter opacity-5 px-8"
            >
              Rouabah Zine Eddine
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ImpactMarquee;