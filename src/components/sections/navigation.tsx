"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Works", href: "#projects" },
    { name: "Journey", href: "#experience" },
    { name: "Identity", href: "#about" },
    { name: "Inquire", href: "#contact" },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[110] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out px-[5vw] py-8 flex items-center justify-between ${
          scrolled ? "glass-nav py-6" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-[120] group">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter uppercase text-white leading-none">ZR</span>
            <span className="text-[8px] font-technical text-white/40 tracking-[0.4em] group-hover:text-white transition-colors">ARCHIVE // 2025</span>
          </div>
        </Link>

        <div className="flex items-center gap-16 relative z-[120]">
          <div className="hidden lg:flex items-center gap-12">
            {menuLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-[9px] font-technical text-white/40 hover:text-white transition-all uppercase tracking-[0.4em] relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="hidden sm:flex items-center gap-4 border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all group"
            >
              <Download size={14} className="group-hover:animate-bounce" />
              <span className="text-[9px] font-technical uppercase tracking-[0.3em]">CV (PDF)</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-6 border border-white/10 px-8 py-4 hover:bg-white transition-all overflow-hidden relative"
            >
              <span className="text-[10px] font-technical uppercase tracking-[0.3em] group-hover:text-black transition-colors relative z-10">
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="w-5 h-[1px] bg-white group-hover:bg-black transition-colors relative z-10" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[105] bg-black overflow-hidden flex flex-col items-center justify-center p-[5vw]"
          >
            <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
            
            <div className="flex flex-col items-center gap-12">
              {menuLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative"
                  >
                    <span className="text-[12vw] md:text-[7vw] font-black uppercase text-white/5 hover:text-white transition-all tracking-tighter block leading-none hover:italic hover:translate-x-4">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 left-[5vw] right-[5vw] flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10"
            >
              <div className="flex gap-12 text-[9px] font-technical text-white/20 uppercase tracking-[0.4em]">
                <a href="https://github.com/xCyberpunkx" target="_blank" className="hover:text-white transition-all">Github</a>
                <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" target="_blank" className="hover:text-white transition-all">Linkedin</a>
                <a href="mailto:rouabah.zineedinee@gmail.com" className="hover:text-white transition-all">Email</a>
              </div>
              <div className="text-[9px] font-technical text-white/10 uppercase tracking-[0.4em] flex gap-4">
                <span>EST. 2024</span>
                <span className="w-12 h-[1px] bg-white/10 my-auto" />
                <span>ALGERIA</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;