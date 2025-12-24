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
    <section className="bg-deep-midnight py-24 md:py-48 overflow-hidden border-t border-white/5">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neon-cyan/50"></div>
            <span className="font-technical text-[10px] tracking-[0.2em] uppercase text-neon-cyan">
              Technical Arsenal
            </span>
            <div className="w-12 h-[1px] bg-neon-cyan/50"></div>
          </div>
          <h2 className="text-[clamp(3rem,8vw,6rem)] leading-[0.85] font-black uppercase text-white mb-8">
            Core<br /><span className="text-neon-cyan">Technologies</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
            A diverse toolkit specialized in building scalable full-stack applications, automated systems, and high-performance network infrastructures.
          </p>
        </motion.div>

        {/* Logo Cloud */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-cyan/30 transition-all cursor-default"
            >
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 brightness-200 group-hover:brightness-100"
                />
              </div>
              <span className="text-[10px] font-technical text-white/40 group-hover:text-neon-cyan transition-colors">
                {tech.name}
              </span>
              
              {/* Corner Accent */}
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
