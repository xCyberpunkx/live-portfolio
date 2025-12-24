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
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-white z-[100] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-[5vw] py-8 flex items-center justify-between ${
          scrolled ? "glass-nav py-6" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-[60]">
          <span className="text-xl font-black tracking-tighter uppercase text-white">Rouabah Zine Eddine</span>
        </Link>

        <div className="flex items-center gap-8 relative z-[60]">
          <div className="hidden md:flex items-center gap-10">
            {["Projects", "About"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-technical text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-4 border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all"
          >
            <span className="text-[10px] font-technical uppercase tracking-[0.2em]">Menu</span>
            <div className="w-5 h-5 flex flex-col items-center justify-center gap-1">
              <span className="w-full h-[1px] bg-current"></span>
              <span className="w-full h-[1px] bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black overflow-hidden flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-[5vw] z-[70] w-16 h-16 border border-white/10 flex items-center justify-center group hover:bg-white transition-all"
            >
              <X size={32} className="text-white group-hover:text-black transition-colors" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {menuLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[8vw] md:text-[5vw] font-black uppercase text-white/20 hover:text-white transition-all tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-12 text-[10px] font-technical text-white/20 uppercase tracking-[0.3em]">
              <a href="https://github.com/xCyberpunkx" target="_blank" className="hover:text-white transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" target="_blank" className="hover:text-white transition-colors">Linkedin</a>
              <a href="mailto:rouabah.zineedinee@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;