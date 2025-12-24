"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-12 right-12 z-[100] group"
          aria-label="Back to top"
        >
          <div className="relative p-5 border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden transition-all duration-700 hover:border-white hover:bg-white/5">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-white transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-white transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white transition-colors" />
            
            <ArrowUp size={24} className="text-white relative z-10 group-hover:-translate-y-1 transition-transform duration-700 ease-expo" />
            
            <div className="absolute inset-0 bg-white/5 -translate-y-full group-hover:animate-scan opacity-30" />
            
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[7px] font-technical text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 whitespace-nowrap tracking-widest">
                INITIATE
              </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
