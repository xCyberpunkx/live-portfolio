"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "MOUNTING /home/rouabah...",
  "LOADING PORTFOLIO.SYS...",
  "LINKING NODE_DZ...",
  "SYSTEM_ONLINE",
];

const LINE_INTERVAL = 320; // ms between each boot line printing
const HOLD_AFTER_LAST = 420; // ms to hold on the final line before exiting

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = LINE_INTERVAL * BOOT_LINES.length + HOLD_AFTER_LAST;

    const lineTimers = BOOT_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), LINE_INTERVAL * (i + 1))
    );

    const start = performance.now();
    let raf: number;
    const tickProgress = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / totalDuration) * 100));
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tickProgress);
    };
    raf = requestAnimationFrame(tickProgress);

    const exitTimer = setTimeout(() => setLoading(false), totalDuration);

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(exitTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black overflow-hidden pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff03_0%,transparent_80%)] opacity-30" />

          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center gap-2 mb-16">
              <h1 className="text-3xl md:text-5xl font-extralight text-white/95 tracking-[0.6em] uppercase">
                ROUABAH
              </h1>
              <span className="text-[10px] text-white/30 tracking-[0.4em] uppercase">ZINE_EDDINE</span>
            </div>

            {/* Terminal boot log */}
            <div className="w-72 md:w-80 font-technical text-[10px] uppercase tracking-[0.15em] space-y-2 min-h-[96px]">
              {BOOT_LINES.map((line, i) => {
                const isVisible = i < visibleLines;
                const isLast = i === BOOT_LINES.length - 1;
                return (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-3 ${isLast ? "text-blue-400" : "text-white/40"}`}
                  >
                    <span className="text-white/20">{`>`}</span>
                    <span>{line}</span>
                    {isVisible && i === visibleLines - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                        className="w-1.5 h-3 bg-white/60 inline-block"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Progress bar driven by real elapsed time, not decoration */}
            <div className="mt-10 flex items-center gap-4 w-72 md:w-80">
              <div className="relative flex-1 h-[2px] bg-white/5 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white/40"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
              <span className="font-technical text-[9px] text-white/30 tabular-nums w-8 text-right">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
