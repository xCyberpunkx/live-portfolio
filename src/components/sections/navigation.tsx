"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

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
    { name: "Home", href: "/", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
    { name: "About", href: "#about", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
    { name: "Projects", href: "#projects", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
    { name: "Experience", href: "#experience", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop" },
    { name: "Contact", href: "#contact", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neon-lime z-[100] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-[4vw] py-6 flex items-center justify-between ${
          scrolled ? "glass-nav py-4" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="relative z-[60]">
          <div className="flex flex-col leading-none">
            <span className="text-[22px] font-black tracking-[-0.04em] uppercase text-off-white">ZINE EDDINE</span>
            <span className="text-[22px] font-black tracking-[-0.04em] uppercase text-off-white">ROUABAH</span>
          </div>
        </Link>

        {/* Center Root@Arch Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block opacity-80">
          <div className="font-mono text-[10px] tracking-[0.2em] text-off-white uppercase">root@arch</div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 relative z-[60]">
          <a
            href="https://github.com/xCyberpunkx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neon-lime text-rich-black px-5 py-2.5 rounded-full font-bold text-sm tracking-tight btn-primary-hover"
          >
            <Github size={18} strokeWidth={2.5} />
            <span className="uppercase pt-0.5">GitHub</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 border border-muted-gray rounded-xl flex flex-col items-center justify-center gap-1.5 bg-deep-olive/30 backdrop-blur-md group hover:border-neon-lime transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} className="text-off-white" />
            ) : (
              <>
                <span className="w-6 h-[2px] bg-off-white group-hover:bg-neon-lime transition-colors"></span>
                <span className="w-4 h-[2px] bg-off-white group-hover:bg-neon-lime transition-colors self-end mr-2.5"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[55] bg-deep-olive transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } overflow-hidden`}
      >
        <div className="container h-full flex items-center justify-between pt-24 pb-12">
          {/* Dynamic Images */}
          <div className="hidden lg:grid grid-cols-2 gap-4 w-[45%] h-[70%]">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-rich-black/20 grayscale hover:grayscale-0 transition-all duration-700 border border-muted-gray/20">
                 <Image 
                    src={hoveredLink !== null ? menuLinks[hoveredLink].img : menuLinks[0].img}
                    alt="Zine Dynamic"
                    fill
                    className="object-cover transition-transform duration-1000 scale-105 hover:scale-110"
                 />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-rich-black/20 border border-muted-gray/20">
                 <Image 
                    src={menuLinks[2].img}
                    alt="Zine Static"
                    fill
                    className="object-cover opacity-40"
                 />
              </div>
            </div>
            <div className="pt-20 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-rich-black/20 border border-muted-gray/20">
                <Image 
                    src={menuLinks[1].img}
                    alt="Zine Dynamic"
                    fill
                    className="object-cover opacity-60"
                 />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-rich-black/20 border border-muted-gray/20">
                <Image 
                    src={menuLinks[4].img}
                    alt="Zine Dynamic"
                    fill
                    className="object-cover grayscale"
                 />
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col justify-between h-full lg:w-[45%] w-full">
            <div className="flex flex-col gap-2 mt-auto">
              {menuLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center"
                >
                  <span className="text-[clamp(40px,8vw,100px)] font-black uppercase leading-[0.85] tracking-tighter text-muted-gray group-hover:text-neon-lime transition-colors duration-300">
                    {link.name}
                  </span>
                  {hoveredLink === idx && (
                    <div className="ml-4 w-4 h-4 bg-neon-lime rotate-45 animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            {/* Footer Items in Menu */}
            <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex flex-col gap-6">
                 {/* Helmet Section Icon Concept */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative bg-rich-black rounded-full flex items-center justify-center border border-muted-gray/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-lime/20 to-transparent"></div>
                    <Github size={30} className="text-neon-lime z-10" />
                  </div>
                  <div className="text-[10px] font-technical text-muted-gray uppercase tracking-widest leading-relaxed">
                    Software Engineer &<br />Network Associate
                  </div>
                </div>

                <div className="flex gap-6">
                  <a href="https://github.com/xCyberpunkx" target="_blank" rel="noopener noreferrer" className="text-[11px] font-technical uppercase tracking-widest text-muted-gray hover:text-off-white transition-colors">GitHub</a>
                  <a href="https://linkedin.com/in/zine-eddine-rouabah-992b16265" target="_blank" rel="noopener noreferrer" className="text-[11px] font-technical uppercase tracking-widest text-muted-gray hover:text-off-white transition-colors">LinkedIn</a>
                  <a href="mailto:rouabah.zineedinee@gmail.com" className="text-[11px] font-technical uppercase tracking-widest text-muted-gray hover:text-off-white transition-colors">Email</a>
                </div>
              </div>

              <div className="text-[11px] font-technical uppercase tracking-widest text-muted-gray text-right">
                <a href="mailto:rouabah.zineedinee@gmail.com" className="hover:text-neon-lime transition-colors">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;