"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <div className="relative">
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase"
              >
                ROUABAH ZINE EDDINE
              </motion.h1>
            </div>
            
            <div className="w-full h-px bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-0 bg-white"
              />
            </div>
          </div>
          
          <div className="absolute bottom-12 overflow-hidden flex flex-col items-center gap-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] font-technical text-white uppercase tracking-[0.5em]"
            >
              Establishing Secure Connection
            </motion.span>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 h-1 bg-white"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
