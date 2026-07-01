"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function SubHeroSection() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const backgroundTransform = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59,130,246,0.1), transparent 80%)`
  );

  return (
    <section id="about" ref={container} className="bg-black py-32 md:py-64 overflow-hidden relative">
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-40 transition duration-300 z-0"
          style={{ background: backgroundTransform }}
        />
      )}

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-12 mb-48">
          <motion.div style={{ x: isMobile ? 0 : x1, willChange: "transform" }} className="flex whitespace-nowrap">
            <span className="text-[18vw] font-black text-white uppercase tracking-tighter leading-none">SYSTEM_ARCHITECT // </span>
            <span className="text-[18vw] font-black text-white/5 uppercase tracking-tighter leading-none italic"> SOLUTION_ENGINEER // </span>
          </motion.div>
          <motion.div style={{ x: isMobile ? 0 : x2, willChange: "transform" }} className="flex whitespace-nowrap ml-[-30%]">
            <span className="text-[18vw] font-black text-white/5 uppercase tracking-tighter leading-none italic">PRECISION_CODE // </span>
            <span className="text-[18vw] font-black text-white uppercase tracking-tighter leading-none">SCALABLE_SYSTEMS // </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3 hidden md:block">
            <div className="space-y-4">
              <span className="font-technical text-[8px] text-white/40 uppercase tracking-[0.5em] block">Metadata</span>
              <div className="space-y-1 font-technical text-[7px] text-white/60 uppercase">
                <p>NAME: ROUABAH ZINE EDDINE</p>
                <p>ROLE: SOFTWARE ENGINEER</p>
                <p>LOC: 36.4701° N, 2.8288° E</p>
                <p>CLASS: TECHNICAL_ARCHITECT</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 text-center lg:text-left space-y-12">
            <motion.p
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-technical text-white/70 tracking-tight leading-[1.1]"
            >
              Rouabah Zine Eddine is a <span className="text-white font-black uppercase">software engineering professional</span> focused on building <span className="text-white font-black uppercase">reliable, well-structured web applications</span> and continuously deepening his understanding of computer systems and networks.
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] font-technical text-white/40 uppercase tracking-[0.5em] mb-3">Core_Focus</span>
                <span className="text-white font-black uppercase text-xl">FULL_STACK // CLOUD</span>
              </div>
              <div className="w-[1px] h-12 bg-white/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[10px] font-technical text-white/40 uppercase tracking-[0.5em] mb-3">Efficiency</span>
                <span className="text-white font-black uppercase text-xl">OPTIMIZED_LOGIC</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="font-technical text-[8px] text-white/40 uppercase tracking-[0.5em] block mb-4">Brief_01</span>
              <p className="text-white/60 font-technical text-[10px] uppercase tracking-widest leading-relaxed">
                4+ years of delivering enterprise-grade solutions across healthcare, renewable energy, and fintech sectors. Focused on performance at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
