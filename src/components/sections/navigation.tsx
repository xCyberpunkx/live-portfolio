"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { SiLinux } from "react-icons/si";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    useEffect(() => {
      setMounted(true);
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      const handleResize = () => setIsMobile(window.innerWidth < 1024);
      
      handleScroll();
      handleResize();
      
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Download CV", href: "/resume.pdf", download: true, highlight: true },
    { name: "F1", href: "/f1" },
  ];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
if (href.startsWith("/#")) {
  const id = href.replace("/#", "");
  const element = document.getElementById(id);
  
  if (pathname === "/") {
    e.preventDefault();
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  }
}
};

return (
<div className={`transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
  <motion.div 
    className="fixed top-0 left-0 right-0 h-1 bg-white z-[110] origin-left"
    style={{ scaleX: isMobile ? 0 : scaleX }}
  />
  <nav
    className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:py-8 flex items-center justify-between ${
      isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-6" : "bg-transparent"
    }`}
  >
        <Link href="/" className="relative z-[120] group flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700 shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            <SiLinux className="text-black text-xl" />
          </div>
          <span className="text-white font-black tracking-tighter text-xl group-hover:tracking-[0.2em] transition-all duration-500">
            LINUX_OS
          </span>
        </Link>

        {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                link.download ? (
                  <a
                    key={link.name}
                    href={link.href}
                    download
                    className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group ${
                      link.highlight 
                        ? "bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200" 
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {!link.highlight && (
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                    )}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group ${
                      link.highlight 
                        ? "bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200" 
                        : "text-white/60 hover:text-white"
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
                )
              ))}
            </div>

        <div className="flex items-center gap-4 relative z-[120]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={isMobile ? { opacity: 0 } : { opacity: 0, x: "100%" }}
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

              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={isMobile ? { opacity: 1, y: 0 } : { y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: isMobile ? 0 : 0.1 * idx }}
                  >
                      {link.download ? (
                          <a
                            href={link.href}
                            download
                            className={`text-3xl md:text-6xl font-black uppercase tracking-tighter hover:italic transition-all ${
                              link.highlight ? "text-black bg-white px-6 py-2 rounded-full" : "text-white/20 hover:text-white"
                            }`}
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-3xl md:text-6xl font-black uppercase tracking-tighter hover:italic transition-all ${
                              link.highlight ? "text-black bg-white px-6 py-2 rounded-full" : "text-white/20 hover:text-white"
                            }`}
                          >
                          {link.name}
                        </Link>
                      )}
                  </motion.div>
                ))}
                </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};

export default Navigation;
