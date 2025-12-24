"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navLinks = [
      { name: "Home", href: "#top" },
      { name: "About", href: "#about" },
      { name: "Tech", href: "#tech" },
      { name: "Work", href: "#projects" },
      { name: "Formula 1", href: "/f1", highlight: true },
      { name: "Contact", href: "#contact" },
    ];

    return (
      <>
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-white z-[110] origin-left"
          style={{ scaleX }}
        />
        <nav
          className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:py-8 flex items-center justify-between ${
            isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-6" : "bg-transparent"
          }`}
        >
          <Link href="/" className="relative z-[120] group flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
              <span className="text-black font-black text-xs">T</span>
            </div>
            <span className="text-white font-bold tracking-tighter text-xl group-hover:tracking-[0.2em] transition-all duration-500">
              TUX
            </span>
          </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group ${
                  link.highlight 
                    ? "bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200" 
                    : "text-white/40 hover:text-white"
                }`}
              >
                {link.name}
                {!link.highlight && (pathname === link.href || (pathname === "/" && link.href === pathname)) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white" />
                )}
                {!link.highlight && !(pathname === link.href || (pathname === "/" && link.href === pathname)) && (
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                )}
              </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-[120]">
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="hidden sm:flex items-center gap-3 border border-white/10 px-5 py-2 hover:bg-white hover:text-black transition-all group rounded-full"
          >
            <Download size={14} className="group-hover:animate-bounce" />
            <span className="text-[10px] font-bold uppercase tracking-widest">CV</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[105] bg-black flex flex-col items-center justify-center p-6"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 flex items-center gap-2 text-white/40 hover:text-white transition-all group"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">EXIT_MENU</span>
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl md:text-6xl font-black uppercase tracking-tighter hover:italic transition-all ${
                      link.highlight ? "text-red-500" : "text-white/20 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 flex gap-8">
              <a href="#" className="text-white/20 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-white/20 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/20 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
