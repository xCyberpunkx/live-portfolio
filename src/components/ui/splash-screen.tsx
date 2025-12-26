"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <AnimatePresence mode="wait">
        {loading && (
              <motion.div
                key="splash"
                initial={{ opacity: 1 }}
                exit={{ 
                  opacity: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }}
                className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black overflow-hidden pointer-events-none"
              >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff03_0%,transparent_80%)] opacity-30" />
            
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="flex flex-col items-center gap-10"
              >
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-3xl md:text-5xl font-extralight text-white/95 tracking-[0.6em] uppercase">
                    ROUABAH
                  </h1>
                  <span className="text-[10px] text-white/30 tracking-[0.4em] uppercase">ZINE EDDINE</span>
                </div>
                
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <p className="text-[10px] text-white/20 tracking-[0.8em] uppercase font-light">
                  BREATHE IN. BREATHE OUT.
                </p>
              </motion.div>

              <div className="mt-24 relative w-64 h-[1px] bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            </div>
            
            <div className="absolute bottom-16 overflow-hidden flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="flex items-center gap-8"
              >
                <span className="w-12 h-px bg-white/10" />
                <span className="text-[7px] font-technical text-white uppercase tracking-[1em]">
                  CALMING_SYSTEMS
                </span>
                <span className="w-12 h-px bg-white/10" />
              </motion.div>
            </div>
          </motion.div>

      )}
    </AnimatePresence>
  );
}
