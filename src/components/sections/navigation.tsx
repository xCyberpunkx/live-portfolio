"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Github, Linkedin, Mail, Menu } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

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
    { name: "Home", href: "/", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
    { name: "About", href: "#about", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
    { name: "Projects", href: "#projects", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop" },
    { name: "Experience", href: "#experience", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
    { name: "Contact", href: "#contact", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan z-[100] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-[5vw] py-6 flex items-center justify-between ${
          scrolled ? "glass-nav py-4" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="relative z-[60] group">
          <div className="flex flex-col leading-none">
            <span className="text-[24px] font-black tracking-[-0.04em] uppercase text-off-white group-hover:text-neon-cyan transition-colors">ZINE EDDINE</span>
            <span className="text-[24px] font-black tracking-[-0.04em] uppercase text-off-white/60 group-hover:text-neon-cyan transition-colors">ROUABAH</span>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-6 relative z-[60]">
          <div className="hidden md:flex items-center gap-8 mr-8">
            {["Projects", "Experience", "About"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-technical text-off-white/60 hover:text-neon-cyan transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-3 bg-white/5 hover:bg-neon-cyan/10 border border-white/10 hover:border-neon-cyan/50 px-4 py-2 rounded-full transition-all"
          >
            <span className="text-[11px] font-technical text-off-white hidden sm:block uppercase">Menu</span>
            <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
              <span className="w-full h-[2px] bg-off-white group-hover:bg-neon-cyan transition-colors"></span>
              <span className="w-full h-[2px] bg-off-white group-hover:bg-neon-cyan transition-colors"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] bg-deep-midnight overflow-hidden flex items-center"
          >
            {/* Exit Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 z-[70] w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center group hover:scale-110 transition-transform"
            >
              <X size={32} className="text-deep-midnight group-hover:rotate-90 transition-transform duration-500" />
            </motion.button>

            <div className="container h-full flex items-center justify-between py-24">
              {/* Preview Image */}
              <div className="hidden lg:block w-[45%] h-[70%] relative rounded-3xl overflow-hidden border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredLink ?? "default"}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={hoveredLink !== null ? menuLinks[hoveredLink].img : menuLinks[0].img}
                      alt="Preview"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-deep-midnight/40" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Links Column */}
              <div className="flex flex-col justify-center h-full lg:w-[45%] w-full">
                <div className="flex flex-col gap-4">
                  {menuLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(idx)}
                        onMouseLeave={() => setHoveredLink(null)}
                        onClick={() => setIsOpen(false)}
                        className="group relative flex items-center"
                      >
                        <span className="text-[clamp(40px,8vw,100px)] font-black uppercase leading-[0.85] tracking-tighter text-white/20 group-hover:text-neon-cyan transition-all duration-300 group-hover:pl-8">
                          {link.name}
                        </span>
                        <div className="absolute left-0 w-4 h-4 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-x-full group-hover:translate-x-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-8 justify-between"
                >
                  <div className="flex gap-8">
                    <a href="https://github.com/xCyberpunkx" target="_blank" className="text-xs font-technical text-off-white/40 hover:text-neon-cyan transition-colors">GITHUB</a>
                    <a href="https://www.linkedin.com/in/zine-eddine-rouabah/" target="_blank" className="text-xs font-technical text-off-white/40 hover:text-neon-cyan transition-colors">LINKEDIN</a>
                    <a href="mailto:rouabah.zineedinee@gmail.com" className="text-xs font-technical text-off-white/40 hover:text-neon-cyan transition-colors">EMAIL</a>
                  </div>
                  <span className="text-xs font-technical text-off-white/20">© 2025 ZINE EDDINE ROUABAH</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;