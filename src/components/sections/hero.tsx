"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const FloatingLogos = () => {
    const logos = [
      { name: "Pirelli", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pirelli_logo.svg/1200px-Pirelli_logo.svg.png", x: "15%", y: "20%", size: 30, mdSize: 50 },
      { name: "Red Bull", src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Red_Bull_Racing_Logo.svg/1200px-Red_Bull_Racing_Logo.svg.png", x: "80%", y: "15%", size: 40, mdSize: 80 },
      { name: "Mercedes", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_Benz_logo.svg/1200px-Mercedes_Benz_logo.svg.png", x: "10%", y: "70%", size: 25, mdSize: 40 },
      { name: "Vercel", src: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", x: "85%", y: "65%", size: 15, mdSize: 25, invert: true },
      { name: "F1", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1200px-F1.svg.png", x: "50%", y: "10%", size: 20, mdSize: 40 },
      { name: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1200px-Oracle_logo.svg.png", x: "75%", y: "80%", size: 20, mdSize: 40 },
    ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {logos.map((logo, i) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
          className="absolute z-0"
          style={{ left: logo.x, top: logo.y }}
        >
          <div className="drop-shadow-2xl relative w-[var(--logo-size)] md:w-[var(--md-logo-size)]" style={{ 
            '--logo-size': `${logo.size}px`,
            '--md-logo-size': `${logo.mdSize}px`
          } as any}>
            <img 
              src={logo.src} 
              alt={logo.name} 
              className={`w-full h-auto object-contain ${logo.invert ? 'invert' : ''}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
          <Image 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
            alt="Engineering Background"
            fill
            className="object-cover grayscale brightness-50"
            priority
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </motion.div>

      {/* Floating Logos */}
      <FloatingLogos />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-red-600/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <Link href="/f1" className="inline-flex items-center gap-4 mb-12 text-[10px] font-technical text-white/40 hover:text-white transition-colors group uppercase tracking-[0.4em] pointer-events-auto">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform text-red-600" />
            BACK_TO_ARCHIVE
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 md:mb-8"
          >
            <span className="font-technical text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] text-red-600 uppercase">
              NODE_DZ // PROTOCOL_01
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] md:text-[12vw] font-black leading-[0.75] text-white uppercase italic tracking-tighter"
          >
            MAXIMUM<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>VELOCITY</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 md:mt-12 flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="px-4 md:px-6 py-1.5 md:py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="font-technical text-[8px] md:text-[10px] text-white/60 uppercase tracking-[0.3em] md:tracking-[0.5em]">
                Rouabah Zine Eddine — Software Engineer
              </span>
            </div>
            
            <div className="h-12 md:h-20 w-[1px] bg-gradient-to-b from-white/0 via-red-600/40 to-white/0 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 hidden sm:block">
        <div className="flex flex-col gap-1 md:gap-2 font-technical text-[7px] md:text-[8px] text-white/20 uppercase tracking-widest">
          <span>LATENCY: 12MS</span>
          <span>UPTIME: 99.9%</span>
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10 hidden sm:block">
        <div className="flex flex-col items-end gap-1 md:gap-2 font-technical text-[7px] md:text-[8px] text-white/20 uppercase tracking-widest text-right">
          <span>CORE_V4.0</span>
          <span>STABLE_BUILD</span>
          <span>AUTH: VERIFIED</span>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-20" />
    </section>
  );
};

export default HeroSection;