"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const PROBE_LINES = [
  { label: "IDENTITY", value: "ROUABAH_ZINE_EDDINE" },
  { label: "ROLE", value: "SOFTWARE_ENGINEER" },
  { label: "LOCATION", value: "36.4701°N, 2.8288°E // NODE_DZ" },
  { label: "CORE_MODULE", value: "FULL_STACK // CLOUD" },
  { label: "OPTIMIZATION", value: "OPTIMIZED_LOGIC" },
  { label: "STATUS", value: "ONLINE" },
];

function ProbeLine({ line, index, active }: { line: (typeof PROBE_LINES)[number]; index: number; active: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={active ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.12 }}
      className="flex flex-wrap items-center gap-x-4 gap-y-1 py-2 border-b border-white/5 last:border-b-0"
    >
      <span className="font-technical text-[9px] text-blue-400/60 w-6">{`0${index + 1}`}</span>
      <span className="font-technical text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] w-32 md:w-40 flex-shrink-0">
        {line.label}
      </span>
      <span className="font-technical text-[10px] md:text-xs text-white uppercase tracking-widest">{line.value}</span>
      <span className="ml-auto font-technical text-[8px] text-green-500/70 uppercase tracking-widest">OK</span>
    </motion.div>
  );
}

export default function SubHeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const scanInView = useInView(scanRef, { once: true, margin: "-20% 0px -20% 0px" });
  const [isMobile, setIsMobile] = useState(false);

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

  const backgroundTransform = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59,130,246,0.1), transparent 80%)`
  );

  return (
    <section id="about" ref={container} className="bg-zinc-950 py-24 md:py-48 overflow-hidden relative">
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-40 transition duration-300 z-0"
          style={{ background: backgroundTransform }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[2px] w-12 bg-blue-500" />
          <span className="font-technical text-[10px] tracking-[0.6em] text-white/30 uppercase">DIAGNOSTIC_SCAN</span>
        </div>

        {/* Probe / scan panel */}
        <motion.div
          ref={scanRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden mb-24 max-w-3xl"
        >
          <div className="flex items-center gap-2 px-4 md:px-6 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-3 font-technical text-[9px] text-white/30 uppercase tracking-widest">probe --target=subject</span>
          </div>

          <div className="relative p-6 md:p-8">
            {scanInView && (
              <motion.div
                initial={{ top: 0, opacity: 1 }}
                animate={{ top: "100%", opacity: [1, 1, 0] }}
                transition={{ duration: 1.1, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 pointer-events-none"
              />
            )}
            {PROBE_LINES.map((line, i) => (
              <ProbeLine key={line.label} line={line} index={i} active={scanInView} />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-12">
            <motion.p
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-technical text-white/70 tracking-tight leading-[1.25] max-w-3xl"
            >
              Rouabah Zine Eddine is a{" "}
              <span className="text-white font-black uppercase">software engineering professional</span> focused on
              building <span className="text-white font-black uppercase">reliable, well-structured web applications</span>{" "}
              and continuously deepening his understanding of computer systems and networks.
            </motion.p>

            <div className="flex flex-wrap gap-12">
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

          <div className="lg:col-span-4">
            <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="font-technical text-[8px] text-white/40 uppercase tracking-[0.5em] block mb-4">Brief_01</span>
              <p className="text-white/75 font-technical text-[10px] uppercase tracking-widest leading-relaxed">
                4+ years of delivering enterprise-grade solutions across healthcare, renewable energy, and fintech sectors. Focused on performance at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
