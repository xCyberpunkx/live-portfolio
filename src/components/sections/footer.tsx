"use client";

import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#282C20] pt-20 overflow-hidden">
      <div className="absolute inset-0 topographic-bg opacity-40 pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center">
        
        <div className="w-full flex justify-between items-start mb-12">
          <div className="flex gap-4">
            <a 
              href="https://github.com/xCyberpunkx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#D9FF00] p-3 rounded-xl hover:scale-105 transition-transform"
            >
              <Github className="w-6 h-6 text-black" />
            </a>
            <a 
              href="https://linkedin.com/in/zine-eddine-rouabah-992b16265" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#D9FF00] p-3 rounded-xl hover:scale-105 transition-transform"
            >
              <Linkedin className="w-6 h-6 text-black" />
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-4xl flex flex-col items-center justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.3em] font-technical text-[#4A4D43]">Contact</span>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.3em] font-technical text-[#4A4D43]">Connect</span>
          </div>

          <div className="relative w-full aspect-[4/3] max-h-[500px] flex items-center justify-center">
             <div className="text-center">
                <h2 className="text-[15vw] font-black text-[#D9FF00] leading-none tracking-tighter opacity-10 uppercase">ZR</h2>
                <div className="text-off-white font-technical text-sm tracking-widest mt-4">SOFTWARE ENGINEER & NETWORK ASSOCIATE</div>
             </div>
          </div>

          <div className="mt-8 mb-24 z-20">
            <a 
              href="mailto:rouabah.zineedinee@gmail.com"
              className="bg-[#D9FF00] hover:bg-[#c6e900] text-black font-technical font-bold text-[13px] py-3.5 px-8 rounded-full flex items-center gap-3 transition-all transform hover:-translate-y-1"
            >
              GET IN TOUCH
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 mb-12">
          {['Next.js', 'TypeScript', 'PHP', 'CCNA', 'Linux', 'React'].map((brand, idx) => (
            <div key={idx} className="h-6 w-full relative flex items-center justify-center">
              <span className="text-white font-technical text-[10px] tracking-widest uppercase">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 w-full">
        <div className="mx-4 mb-4">
          <div className="bg-[#D9FF00] h-[60px] rounded-2xl flex items-center justify-between px-6 md:px-10 overflow-hidden">
            <div className="text-black text-[11px] font-technical tracking-wider">
              © 2025 Zine Eddine Rouabah. All rights reserved
            </div>
            <div className="flex gap-6 md:gap-10">
              <span className="text-black text-[11px] font-technical font-bold uppercase tracking-wider">Meticulously crafted with Next.js</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#D9FF00] -z-10 origin-bottom scale-y-[0.3]" 
             style={{ clipPath: 'polygon(0% 100%, 0% 0%, 15% 0%, 18% 40%, 82% 40%, 85% 0%, 100% 0%, 100% 100%)' }} />
      </div>

      <style jsx>{`
        .rotate-270 {
          transform: rotate(-90deg);
        }
      `}</style>
    </footer>
  );
};

export default Footer;