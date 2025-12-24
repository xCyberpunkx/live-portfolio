"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Work", href: "#projects" },
    { name: "Formula 1", href: "/f1", highlight: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
              <span className="text-black font-black text-xs">O</span>
            </div>
            <span className="text-white font-bold tracking-tighter text-xl group-hover:tracking-[0.2em] transition-all duration-500">
              ORCHIDS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs font-bold uppercase tracking-widest transition-colors ${
                  link.highlight 
                    ? "px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200" 
                    : "text-zinc-400 hover:text-white"
                } ${pathname === link.href && !link.highlight ? "text-white" : ""}`}
              >
                {link.name}
                {pathname === link.href && !link.highlight && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Trigger (Simple for now) */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const menuLinks = [
      { name: "Home", href: "/" },
      { name: "Works", href: "/#projects" },
      { name: "Journey", href: "/#experience" },
      { name: "Identity", href: "/#about" },
      { name: "Formula 1", href: "/f1", highlight: true },
      { name: "Inquire", href: "/#contact" },
    ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[110] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out px-[5vw] py-4 md:py-8 flex items-center justify-between ${
          scrolled ? "glass-nav py-3 md:py-6" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-[120] group">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white leading-none">ZR</span>
            <span className="text-[7px] md:text-[8px] font-technical text-white/40 tracking-[0.4em] group-hover:text-white transition-colors">ARCHIVE // 2025</span>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-16 relative z-[120]">
          <div className="hidden xl:flex items-center gap-10">
            {menuLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`text-[9px] font-technical transition-all uppercase tracking-[0.4em] relative group ${
                  item.highlight ? "text-red-500 font-bold" : "text-white/40 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-500 ${
                  item.highlight ? "bg-red-500 w-full" : "bg-white w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-8">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="hidden sm:flex items-center gap-4 border border-white/10 px-4 md:px-6 py-2 md:py-3 hover:bg-white hover:text-black transition-all group"
            >
              <Download size={14} className="group-hover:animate-bounce" />
              <span className="text-[9px] font-technical uppercase tracking-[0.3em]">CV (PDF)</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-4 md:gap-6 border border-white/10 px-6 md:px-8 py-3 md:py-4 hover:bg-white transition-all overflow-hidden relative"
            >
              <span className="text-[9px] md:text-[10px] font-technical uppercase tracking-[0.3em] group-hover:text-black transition-colors relative z-10">
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="w-4 md:w-5 h-[1px] bg-white group-hover:bg-black transition-colors relative z-10" />
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
              {/* EXIT BUTTON */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 md:top-12 right-[5vw] group flex items-center gap-6 border border-white/10 px-8 py-4 hover:bg-white transition-all overflow-hidden z-[120]"
              >
                <span className="text-[10px] font-technical uppercase tracking-[0.3em] group-hover:text-black transition-colors relative z-10">EXIT</span>
                <X size={16} className="text-white group-hover:text-black transition-colors relative z-10" />
              </button>

              <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
            
            <div className="flex flex-col items-center gap-6 md:gap-12 text-center mt-12 md:mt-0">
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
                    <span className={`text-[10vw] md:text-[7vw] font-black uppercase transition-all tracking-tighter block leading-none hover:italic hover:translate-x-4 ${
                      link.highlight ? "text-red-500 hover:text-red-400" : "text-white/5 hover:text-white"
                    }`}>
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