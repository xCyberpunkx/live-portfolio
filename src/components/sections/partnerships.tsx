"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_logo.svg' },
  { name: 'Prisma', logo: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
];

export default function Partnerships() {
  return (
    <section className="bg-black py-24 md:py-64 overflow-hidden border-t border-white/5">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col mb-32 items-center text-center"
        >
          <span className="font-technical text-[10px] tracking-[0.8em] text-white/20 uppercase mb-8 block">Integrated Stack</span>
          <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-black uppercase text-white mb-12 tracking-tighter">
            Digital<br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>Arsenal</span>
          </h2>
          <p className="text-white/40 font-technical text-sm uppercase tracking-widest max-w-xl">
            A meticulously curated selection of technologies for building high-availability systems and resilient network architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-16 bg-black hover:bg-white transition-all duration-700 cursor-none"
            >
              <div className="relative w-12 h-12 mb-8 brightness-0 invert group-hover:invert-0 transition-all duration-700 group-hover:scale-110">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[9px] font-technical text-white/20 group-hover:text-black transition-colors uppercase tracking-[0.3em]">
                {tech.name}
              </span>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
