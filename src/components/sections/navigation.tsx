"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Github, Linkedin, Mail } from "lucide-react";
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
    { name: "Archive", href: "#projects" },
    { name: "Journey", href: "#experience" },
    { name: "Identity", href: "#about" },
    { name: "Inquiry", href: "#contact" },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-white z-[100] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-[5vw] py-8 flex items-center justify-between ${
          scrolled ? "glass-nav py-6" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-[60] group">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase text-white leading-none">ROUABAH</span>
            <span className="text-xs font-technical text-white/40 tracking-[0.2em] group-hover:text-white transition-colors">ZINE EDDINE</span>
          </div>
        </Link>

        <div className="flex items-center gap-12 relative z-[60]">
          <div className="hidden md:flex items-center gap-10">
            {menuLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-[9px] font-technical text-white/40 hover:text-white transition-all uppercase tracking-[0.4em]"
              >
                {item.name}
              </Link>
            ))}
          </div>

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
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] bg-black overflow-hidden flex flex-col items-center justify-center p-[5vw]"
          >
            <div className="flex flex-col items-center gap-12">
              {menuLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative"
                  >
                    <span className="text-[10vw] md:text-[6vw] font-black uppercase text-white/10 hover:text-white transition-all tracking-tighter block leading-none">
                      {link.name}
                    </span>
                    <div className="absolute top-1/2 left-[-2rem] w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-1/2" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-[5vw] right-[5vw] flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10"
            >
              <div className="flex gap-12 text-[10px] font-technical text-white/20 uppercase tracking-[0.3em]">
                <a href="https://github.com/xCyberpunkx" target="_blank" className="hover:text-white transition-colors">Github</a>
                <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" target="_blank" className="hover:text-white transition-colors">Linkedin</a>
                <a href="mailto:rouabah.zineedinee@gmail.com" className="hover:text-white transition-colors">Email</a>
              </div>
              <span className="text-[10px] font-technical text-white/10 uppercase tracking-[0.3em]">© 2025 ALL RIGHTS RESERVED</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;