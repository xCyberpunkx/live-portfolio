"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', width: 60, height: 60 },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', width: 60, height: 60 },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', width: 60, height: 60 },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', width: 60, height: 60 },
  { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', width: 60, height: 60 },
  { name: 'Cisco CCNA', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', width: 60, height: 60 },
];

export default function Partnerships() {
  return (
    <section className="bg-[#282C20] py-[100px] md:py-[150px] overflow-hidden">
      <div className="container mx-auto px-[4vw]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col mb-16 space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#4A4D43]"></div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A4D43]">
              Competencies
            </span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.85] font-black uppercase m-0 p-0 text-[#F4F4F1]">
              Core
            </h2>
            <h2 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.85] font-black uppercase m-0 p-0 text-[#F4F4F1] ml-[5vw] md:ml-[10vw]">
              &Technologies
            </h2>
          </div>
          <p className="max-w-[480px] mt-8 text-[#A1A1AA] font-sans text-lg leading-relaxed">
            Specializing in building reliable, scalable applications with clean architecture, efficient algorithms, and secure network infrastructure.
          </p>
        </motion.div>

        {/* Scrolling Logo Cloud */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-20 flex overflow-hidden group"
        >
          <div className="flex animate-marquee whitespace-nowrap py-10 items-center">
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center justify-center mx-12 md:mx-20 transition-opacity duration-300 hover:opacity-100 opacity-60 grayscale hover:grayscale-0"
              >
                <div 
                  className="relative flex items-center justify-center bg-off-white/10 p-4 rounded-xl border border-white/5 group-hover:border-neon-lime/20 transition-colors"
                  style={{ width: 100, height: 100 }}
                >
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain p-4 brightness-0 invert"
                    priority={index < 8}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#282C20] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#282C20] to-transparent z-10" />
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}