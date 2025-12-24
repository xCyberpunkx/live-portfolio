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
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter"
            >
              ROUABAH ZINE EDDINE
            </motion.div>

            {/* Counter */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="text-[120px] md:text-[200px] font-black text-white leading-none tabular-nums"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {Math.min(counter, 100)}
              </motion.div>
              <div className="h-[1px] w-64 bg-white/10 mt-4 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(counter, 100)}%` }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-white font-technical text-sm tracking-[0.3em] uppercase"
            >
              Initializing Portfolio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
