"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ImpactMarquee() {
  return (
    <section className="bg-white py-10 md:py-20 overflow-hidden z-20 relative border-y border-black">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-[8vw] md:text-[5vw] font-black text-black uppercase tracking-tighter">
                ROUABAH ZINE EDDINE
              </span>
              <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 md:w-5 md:h-5 bg-white rounded-full" />
              </div>
              <span
                className="text-[8vw] md:text-[5vw] font-black text-transparent uppercase tracking-tighter"
                style={{ WebkitTextStroke: "2px #000" }}
              >
                SOFTWARE ENGINEER
              </span>
              <div className="w-10 h-10 md:w-14 md:h-14 border-4 border-black rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
