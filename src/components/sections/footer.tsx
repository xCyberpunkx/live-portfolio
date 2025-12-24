"use client";

import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Disc, MapPin, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black pt-24 md:pt-48 overflow-hidden">
      <div className="container relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
           <div className="max-w-2xl">
              <span className="font-technical text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4 block">04 — Contact</span>
              <h2 className="text-[12vw] font-black text-white uppercase mb-8 leading-none tracking-tighter">
                Let's<br />Collaborate
              </h2>
              <p className="text-white/40 text-xl font-technical uppercase">
                Available for freelance work and selective engineering projects.
              </p>
           </div>

           <div className="flex flex-col gap-12 w-full md:w-auto">
              <div className="space-y-4">
                 <span className="font-technical text-[10px] tracking-[0.4em] text-white/20 uppercase">Email</span>
                 <a href="mailto:rouabah.zineedinee@gmail.com" className="text-2xl font-bold text-white hover:text-white/60 transition-colors block">
                    rouabah.zineedinee@gmail.com
                 </a>
              </div>
              <div className="space-y-4">
                 <span className="font-technical text-[10px] tracking-[0.4em] text-white/20 uppercase">Phone</span>
                 <a href="tel:+213540166358" className="text-2xl font-bold text-white hover:text-white/60 transition-colors block">
                    +213 540 166 358
                 </a>
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 mb-32 border-t border-white/10 pt-32">
           <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-12">
                 <div className="space-y-4">
                    <span className="text-[10px] font-technical tracking-[0.4em] text-white/20 uppercase">Location</span>
                    <div className="text-xl font-bold text-white uppercase">Algeria</div>
                    <p className="text-white/40 text-sm">Remote Worldwide</p>
                 </div>
                 <div className="space-y-4">
                    <span className="text-[10px] font-technical tracking-[0.4em] text-white/20 uppercase">Socials</span>
                    <div className="flex gap-6">
                       <a href="https://github.com/xCyberpunkx" target="_blank" className="text-white hover:text-white/40 transition-all">
                          <Github size={20} />
                       </a>
                       <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" target="_blank" className="text-white hover:text-white/40 transition-all">
                          <Linkedin size={20} />
                       </a>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <form className="space-y-12">
                 <div className="relative">
                    <input 
                       type="text" 
                       placeholder="Name"
                       className="w-full bg-transparent border-b border-white/10 py-6 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase font-technical text-sm"
                    />
                 </div>
                 <div className="relative">
                    <input 
                       type="email" 
                       placeholder="Email"
                       className="w-full bg-transparent border-b border-white/10 py-6 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase font-technical text-sm"
                    />
                 </div>
                 <div className="relative">
                    <textarea 
                       rows={4}
                       placeholder="Message"
                       className="w-full bg-transparent border-b border-white/10 py-6 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase font-technical text-sm resize-none"
                    />
                 </div>
                 <button className="flex items-center gap-4 text-[10px] font-technical text-white uppercase tracking-[0.4em] hover:gap-8 transition-all">
                    Send Message <ArrowUpRight size={20} />
                 </button>
              </form>
           </div>
        </div>

        <div className="py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.4em]">© 2025 Rouabah Zine Eddine</span>
           <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.4em]">Algeria / Digital Arch</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;