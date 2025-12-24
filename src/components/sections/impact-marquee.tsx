"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ImpactMarquee() {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden z-20 relative border-y border-black">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-[8vw] md:text-[5vw] font-black text-black uppercase tracking-tighter">
                ROUABAH ZINE EDDINE
              </span>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full" />
              </div>
                <span className="text-[8vw] md:text-[5vw] font-black text-transparent stroke-black" style={{ WebkitTextStroke: "2px #000" }}>
                  SOFTWARE ENGINEER
                </span>
              <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-black rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
