"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rich-black overflow-hidden"
        >
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <span className="text-[20vw] font-black italic uppercase leading-none text-white whitespace-nowrap">
              ZINE EDDINE ROUABAH
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black text-neon-lime mb-8 tracking-tighter"
            >
              ZR<span className="text-white">.0x</span>
            </motion.div>

            {/* Counter */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="text-[120px] md:text-[200px] font-black text-off-white leading-none tabular-nums"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {Math.min(counter, 100)}%
              </motion.div>
              <div className="h-[2px] w-64 bg-white/10 mt-4 relative overflow-hidden rounded-full">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-neon-lime"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(counter, 100)}%` }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-muted-gray font-technical text-sm tracking-[0.3em] uppercase"
            >
              Initializing Systems
            </motion.div>
          </div>

          {/* Glitch Effects */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[10%] left-[5%] w-[30%] h-[1px] bg-neon-lime/20 animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[1px] bg-neon-lime/20 animate-pulse" />
            <div className="absolute top-[40%] right-[20%] w-[1px] h-[30%] bg-neon-lime/20 animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
