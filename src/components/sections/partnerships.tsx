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
    <section className="bg-black py-24 md:py-48 overflow-hidden border-t border-white/10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col mb-24"
        >
          <span className="font-technical text-[10px] tracking-[0.4em] text-white/20 uppercase mb-4 block">Stack</span>
          <h2 className="text-[8vw] leading-[0.85] font-black uppercase text-white mb-8 tracking-tighter">
            Technical<br /><span className="text-white/20">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-12 bg-black hover:bg-white transition-all duration-500 cursor-default"
            >
              <div className="relative w-10 h-10 mb-6 brightness-0 invert group-hover:invert-0 transition-all duration-500">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[8px] font-technical text-white/20 group-hover:text-black transition-colors uppercase tracking-widest">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
