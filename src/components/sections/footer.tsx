"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-[5vw]">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
                <span className="text-[10px] font-technical text-white/20 tracking-[0.5em] uppercase block">INITIATE SYNAPSE</span>
              <h2 className="text-[10vw] font-black text-white uppercase tracking-tighter leading-none">
                INITIATE<br />
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>SYNAPSE</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              <a href="mailto:rouabah.zineedinee@gmail.com" className="group flex items-center gap-6 p-8 border border-white/5 hover:border-white transition-all">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all">
                  <Mail className="text-white group-hover:text-black transition-colors" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-technical text-white/20 uppercase tracking-widest">Direct Line</span>
                  <span className="text-xl font-black text-white uppercase tracking-tight">rouabah.zineedinee@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="p-8 md:p-12 border border-white/5 bg-white/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:bg-white/10 transition-all" />
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-4 text-white/20">
                  <MessageSquare size={20} />
                  <span className="text-[10px] font-technical uppercase tracking-widest">Transmission Module</span>
                </div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="ENTER YOUR EMAIL" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white uppercase tracking-tighter placeholder:text-white/5 outline-none focus:border-white transition-all"
                    />
                  </div>
                  <div className="relative">
                    <textarea 
                      placeholder="DESCRIBE THE MISSION" 
                      rows={1}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-lg font-technical text-white uppercase tracking-widest placeholder:text-white/5 outline-none focus:border-white transition-all resize-none"
                    />
                  </div>
                </div>

                  <button className="flex items-center gap-6 group">
                    <span className="text-[10px] font-black text-white uppercase tracking-[1em]">Send</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                      <Send size={18} className="text-white group-hover:text-black transition-colors" />
                    </div>
                  </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5 text-[9px] font-technical text-white/20 uppercase tracking-[0.4em]">
          <div className="flex gap-12">
             <a href="https://github.com/xCyberpunkx" className="hover:text-white transition-all">Github</a>
             <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" className="hover:text-white transition-all">Linkedin</a>
          </div>
          <p>© 2025 ROUABAH ZINE EDDINE // ALL RIGHTS RESERVED</p>
          <p>BUILT FOR PERFORMANCE // NODE_DZ</p>
        </div>
      </div>
    </footer>
  );
}
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-[5vw]">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
                <span className="text-[10px] font-technical text-white/20 tracking-[0.5em] uppercase block">INITIATE SYNAPSE</span>
              <h2 className="text-[10vw] font-black text-white uppercase tracking-tighter leading-none">
                INITIATE<br />
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>SYNAPSE</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              <a href="mailto:rouabah.zineedinee@gmail.com" className="group flex items-center gap-6 p-8 border border-white/5 hover:border-white transition-all">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all">
                  <Mail className="text-white group-hover:text-black transition-colors" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-technical text-white/20 uppercase tracking-widest">Direct Line</span>
                  <span className="text-xl font-black text-white uppercase tracking-tight">rouabah.zineedinee@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="p-8 md:p-12 border border-white/5 bg-white/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:bg-white/10 transition-all" />
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-4 text-white/20">
                  <MessageSquare size={20} />
                  <span className="text-[10px] font-technical uppercase tracking-widest">Transmission Module</span>
                </div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="ENTER YOUR EMAIL" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white uppercase tracking-tighter placeholder:text-white/5 outline-none focus:border-white transition-all"
                    />
                  </div>
                  <div className="relative">
                    <textarea 
                      placeholder="DESCRIBE THE MISSION" 
                      rows={1}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-lg font-technical text-white uppercase tracking-widest placeholder:text-white/5 outline-none focus:border-white transition-all resize-none"
                    />
                  </div>
                </div>

                    <button className="flex items-center gap-6 group">
                      <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Send</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                      <Send size={18} className="text-white group-hover:text-black transition-colors" />
                    </div>
                  </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5 text-[9px] font-technical text-white/20 uppercase tracking-[0.4em]">
          <div className="flex gap-12">
             <a href="https://github.com/xCyberpunkx" className="hover:text-white transition-all">Github</a>
             <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" className="hover:text-white transition-all">Linkedin</a>
          </div>
          <p>© 2025 ROUABAH ZINE EDDINE // ALL RIGHTS RESERVED</p>
          <p>BUILT FOR PERFORMANCE // NODE_DZ</p>
        </div>
      </div>
    </footer>
  );
}
