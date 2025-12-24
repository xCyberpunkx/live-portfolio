"use client";

import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black pt-24 md:pt-48 overflow-hidden">
      <div className="container relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
           <div className="max-w-2xl">
              <span className="font-technical text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4 block">04 — Contact</span>
              <h2 className="text-[10vw] font-black text-white uppercase mb-8 leading-[0.85] tracking-tighter">
                Start a<br /><span className="text-white/20 italic">Conversation</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl font-technical uppercase tracking-widest leading-relaxed">
                Available for worldwide remote collaboration and selective technical partnerships.
              </p>
           </div>

           <div className="flex flex-col gap-16 w-full md:w-auto">
              <div className="space-y-4">
                 <span className="font-technical text-[10px] tracking-[0.4em] text-white/20 uppercase">Email</span>
                 <a href="mailto:rouabah.zineedinee@gmail.com" className="text-3xl font-black text-white hover:text-white/40 transition-all block leading-none tracking-tighter">
                    ROUABAH.ZINEEDINEE@GMAIL.COM
                 </a>
              </div>
              <div className="space-y-4">
                 <span className="font-technical text-[10px] tracking-[0.4em] text-white/20 uppercase">Direct</span>
                 <a href="tel:+213540166358" className="text-3xl font-black text-white hover:text-white/40 transition-all block leading-none tracking-tighter">
                    +213 540 166 358
                 </a>
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-32 mb-32 border-t border-white/10 pt-32">
           <div className="space-y-16">
              <div className="grid sm:grid-cols-2 gap-16">
                 <div className="space-y-4">
                    <span className="text-[10px] font-technical tracking-[0.4em] text-white/20 uppercase">Base</span>
                    <div className="text-xl font-black text-white uppercase tracking-tighter">ALGERIA / DZ</div>
                    <p className="text-white/40 text-xs font-technical uppercase tracking-widest">GMT +1 TIMEZONE</p>
                 </div>
                 <div className="space-y-4">
                    <span className="text-[10px] font-technical tracking-[0.4em] text-white/20 uppercase">Presence</span>
                    <div className="flex gap-8">
                       <a href="https://github.com/xCyberpunkx" target="_blank" className="text-white hover:text-white/40 transition-all flex items-center gap-2">
                          <span className="text-[10px] font-technical uppercase tracking-widest">GitHub</span>
                       </a>
                       <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" target="_blank" className="text-white hover:text-white/40 transition-all flex items-center gap-2">
                          <span className="text-[10px] font-technical uppercase tracking-widest">LinkedIn</span>
                       </a>
                    </div>
                 </div>
              </div>

              <div className="pt-16 hidden lg:block">
                 <h3 className="text-[12vw] font-black text-white/5 leading-none tracking-tighter select-none">ZR-25</h3>
              </div>
           </div>

           <div className="relative">
              <form className="space-y-16">
                 <div className="grid md:grid-cols-2 gap-16">
                    <div className="relative group">
                       <label className="text-[9px] font-technical text-white/20 uppercase tracking-[0.4em] block mb-4 group-focus-within:text-white transition-colors">Name</label>
                       <input 
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/5 uppercase font-technical text-xs tracking-widest"
                       />
                    </div>
                    <div className="relative group">
                       <label className="text-[9px] font-technical text-white/20 uppercase tracking-[0.4em] block mb-4 group-focus-within:text-white transition-colors">Email</label>
                       <input 
                          type="email" 
                          placeholder="Your Email"
                          className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/5 uppercase font-technical text-xs tracking-widest"
                       />
                    </div>
                 </div>
                 <div className="relative group">
                    <label className="text-[9px] font-technical text-white/20 uppercase tracking-[0.4em] block mb-4 group-focus-within:text-white transition-colors">Message</label>
                    <textarea 
                       rows={4}
                       placeholder="Brief overview of your project"
                       className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/5 uppercase font-technical text-xs tracking-widest resize-none"
                    />
                 </div>
                 <button className="flex items-center gap-8 group">
                    <span className="text-[10px] font-technical text-white uppercase tracking-[0.5em] group-hover:tracking-[0.8em] transition-all">Send Inquiry</span>
                    <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all" />
                    <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
              </form>
           </div>
        </div>

        <div className="py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start">
              <span className="text-[9px] font-technical text-white/20 uppercase tracking-[0.4em]">Designed & Developed by Rouabah Zine Eddine</span>
              <span className="text-[8px] font-technical text-white/10 uppercase tracking-[0.3em] mt-2">© 2025 ALL RIGHTS RESERVED / PORTFOLIO V2.0</span>
           </div>
           <div className="flex gap-12 text-[8px] font-technical text-white/20 uppercase tracking-[0.4em]">
              <span>ALGERIA</span>
              <span>EST. 2024</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;