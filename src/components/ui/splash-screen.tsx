"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl font-black text-white tracking-[0.5em] uppercase"
            >
              Rouabah Zine Eddine
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-32 h-[1px] bg-white mt-8 origin-left"
          />
          
          <div className="absolute bottom-12 overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[10px] font-technical text-white/20 uppercase tracking-[0.4em]"
            >
              Initializing Digital Archive 2025
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
