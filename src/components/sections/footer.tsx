"use client";

import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Disc, MapPin, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-deep-midnight pt-24 md:pt-48 overflow-hidden">
      <div className="absolute inset-0 topographic-bg opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Contact Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
           <div className="max-w-2xl">
              <span className="font-technical text-[10px] tracking-[0.3em] text-neon-cyan uppercase mb-4 block">04 — Let's Connect</span>
              <h2 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-black text-white uppercase mb-8">
                Ready to<br /><span className="text-neon-cyan">Create</span> Together?
              </h2>
              <p className="text-muted-foreground text-xl">
                Let's turn your ideas into exceptional digital experiences. I'm currently available for freelance work and exciting new projects.
              </p>
           </div>

           <div className="flex flex-col gap-8 w-full md:w-auto">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                 <div className="flex items-center gap-4 text-neon-cyan">
                    <Mail size={20} />
                    <span className="font-technical text-xs tracking-widest uppercase">Email</span>
                 </div>
                 <a href="mailto:rouabah.zineedinee@gmail.com" className="text-2xl font-black text-white hover:text-neon-cyan transition-colors">
                    rouabah.zineedinee@gmail.com
                 </a>
                 <div className="text-[10px] font-technical text-white/40 uppercase tracking-widest">Typically replies within 2 hours</div>
              </div>

              <div className="p-8 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                 <div className="flex items-center gap-4 text-neon-lime">
                    <Phone size={20} />
                    <span className="font-technical text-xs tracking-widest uppercase">Phone</span>
                 </div>
                 <a href="tel:+213540166358" className="text-2xl font-black text-white hover:text-neon-lime transition-colors">
                    +213 540 166 358
                 </a>
                 <div className="text-[10px] font-technical text-white/40 uppercase tracking-widest">Mon-Fri, 9AM-6PM Algeria Time</div>
              </div>
           </div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
           {/* Info Cards */}
           <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/40">
                       <MapPin size={16} />
                       <span className="text-[10px] font-technical tracking-widest uppercase">Based In</span>
                    </div>
                    <div className="text-xl font-black text-white uppercase">Algeria</div>
                    <p className="text-muted-foreground text-sm">Working remotely worldwide</p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/40">
                       <MessageSquare size={16} />
                       <span className="text-[10px] font-technical tracking-widest uppercase">Socials</span>
                    </div>
                    <div className="flex gap-4">
                       <a href="https://github.com/xCyberpunkx" target="_blank" className="p-3 bg-white/5 hover:bg-neon-cyan border border-white/5 hover:border-neon-cyan rounded-xl transition-all group">
                          <Github size={20} className="text-white group-hover:text-deep-midnight" />
                       </a>
                       <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" target="_blank" className="p-3 bg-white/5 hover:bg-neon-cyan border border-white/5 hover:border-neon-cyan rounded-xl transition-all group">
                          <Linkedin size={20} className="text-white group-hover:text-deep-midnight" />
                       </a>
                       <a href="#" className="p-3 bg-white/5 hover:bg-neon-cyan border border-white/5 hover:border-neon-cyan rounded-xl transition-all group">
                          <Twitter size={20} className="text-white group-hover:text-deep-midnight" />
                       </a>
                       <a href="#" className="p-3 bg-white/5 hover:bg-neon-cyan border border-white/5 hover:border-neon-cyan rounded-xl transition-all group">
                          <Disc size={20} className="text-white group-hover:text-deep-midnight" />
                       </a>
                    </div>
                 </div>
              </div>

              {/* Big Text Background Effect */}
              <div className="relative py-24">
                 <h3 className="text-[15vw] font-black text-white/5 leading-none tracking-tighter select-none">GET IN TOUCH</h3>
                 <div className="absolute inset-0 flex items-center">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                 </div>
              </div>
           </div>

           {/* Contact Form */}
           <div className="bg-card p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-neon-cyan rounded-2xl flex items-center justify-center -rotate-12 shadow-xl shadow-neon-cyan/20">
                 <MessageSquare size={24} className="text-deep-midnight" />
              </div>
              
              <form className="space-y-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-technical text-white/40 tracking-widest uppercase ml-4">Full Name</label>
                    <input 
                       type="text" 
                       placeholder="What's your name?"
                       className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-technical text-white/40 tracking-widest uppercase ml-4">Email Address</label>
                    <input 
                       type="email" 
                       placeholder="Where can I reach you?"
                       className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-technical text-white/40 tracking-widest uppercase ml-4">Your Message</label>
                    <textarea 
                       rows={4}
                       placeholder="Tell me about your project..."
                       className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                    />
                 </div>
                 <button className="w-full bg-neon-cyan text-deep-midnight font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-neon-cyan/20">
                    SEND MESSAGE <ArrowUpRight size={20} />
                 </button>
              </form>
              <div className="mt-8 text-center">
                 <p className="text-white/40 text-xs uppercase font-technical tracking-widest">Or email me directly at <a href="mailto:rouabah.zineedinee@gmail.com" className="text-white hover:text-neon-cyan transition-colors">rouabah.zineedinee@gmail.com</a></p>
              </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start leading-none">
              <span className="text-[18px] font-black text-white uppercase tracking-tighter">ZINE EDDINE ROUABAH</span>
              <span className="text-[10px] font-technical text-white/40 uppercase tracking-widest mt-1">Software Engineer & Network Associate</span>
           </div>
           
           <div className="flex gap-12">
              <div className="flex flex-col gap-1 items-end">
                 <span className="text-[10px] font-technical text-white/20 uppercase tracking-widest">Designed In</span>
                 <span className="text-xs font-bold text-white uppercase">2025 EDITION</span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                 <span className="text-[10px] font-technical text-white/20 uppercase tracking-widest">Localized</span>
                 <span className="text-xs font-bold text-white uppercase">ALGERIA / 213</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;