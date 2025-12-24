"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SubHeroSection() {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="about" ref={container} className="bg-black py-24 md:py-48 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="flex flex-col gap-8 mb-32">
          <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
            <span className="text-[15vw] font-black text-white uppercase tracking-tighter leading-none">SOFTWARE ENGINEER // </span>
            <span className="text-[15vw] font-black text-white/10 uppercase tracking-tighter leading-none italic"> SOFTWARE ENGINEER // </span>
          </motion.div>
          <motion.div style={{ x: x2 }} className="flex whitespace-nowrap ml-[-50%]">
            <span className="text-[15vw] font-black text-white/10 uppercase tracking-tighter leading-none italic">ENGINEERING EXCELLENCE // </span>
            <span className="text-[15vw] font-black text-white uppercase tracking-tighter leading-none">ENGINEERING EXCELLENCE // </span>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12">
          <p className="text-2xl md:text-4xl font-technical uppercase text-white/60 tracking-widest leading-tight">
            ROUABAH ZINE EDDINE IS A <span className="text-white font-black">SOLUTION-ORIENTED</span> ENGINEER WITH 4 YEARS OF EXPERIENCE BUILDING SCALABLE DIGITAL INFRASTRUCTURE.
          </p>
          <div className="flex justify-center gap-12">
             <div className="flex flex-col items-center">
                <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em] mb-2">Location</span>
                <span className="text-white font-black uppercase">ALGERIA // NODE_DZ</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10" />
             <div className="flex flex-col items-center">
                <span className="text-[10px] font-technical text-white/20 uppercase tracking-[0.5em] mb-2">Experience</span>
                <span className="text-white font-black uppercase">4+ YEARS PRODUCTION</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
