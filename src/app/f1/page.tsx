"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Zap, MapPin, Trophy } from 'lucide-react';
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CustomCursor from "@/components/ui/custom-cursor";
import SmoothScroll from "@/components/ui/smooth-scroll";

const cars = [
    {
      name: "SF-24",
      team: "Scuderia Ferrari",
      engine: "066/12 V6 Turbo",
      tech: ["Carbon-fiber composite chassis", "8-speed semi-automatic gearbox", "ERS energy recovery"],
      image: "https://images.unsplash.com/photo-1644331422789-98289450849f?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    },
    {
      name: "RB20",
      team: "Red Bull Racing",
      engine: "Honda RBPTH002",
      tech: ["Triple-element rear wing", "Pull-rod front suspension", "Ground effect floor V3"],
      image: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    }
];

const circuits = [
  { 
    name: "MONACO", 
    location: "Monte Carlo", 
    length: "3.337 km", 
    turns: 19, 
    image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=2034&auto=format&fit=crop",
    type: "Street Circuit"
  },
  { 
    name: "SPA-FRANCORCHAMPS", 
    location: "Belgium", 
    length: "7.004 km", 
    turns: 20, 
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    type: "Race Circuit"
  },
  { 
    name: "SILVERSTONE", 
    location: "United Kingdom", 
    length: "5.891 km", 
    turns: 18, 
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
    type: "Race Circuit"
  }
];

const drivers = [
    { name: "Charles Leclerc", team: "Ferrari", titles: 0, status: "Active", number: 16, logo: "" },
    { name: "Lewis Hamilton", team: "Mercedes", titles: 7, status: "Legend", number: 44, logo: "" },
    { name: "Max Verstappen", team: "Red Bull", titles: 3, status: "Champion", number: 1, logo: "" }
];

export default function FormulaOnePage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-red-600 selection:text-white">
      <CustomCursor />
      <Navigation />
      
      <SmoothScroll>
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop"
              alt="F1 Engineering"
              fill
              className="object-cover grayscale brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
          </motion.div>

              {/* Floating Branding Logos */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <motion.img 
                  animate={{ y: [0, -30, 0] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1547919307-1ecb10702e6f?q=80&w=100&auto=format&fit=crop" 
                  className="absolute top-[20%] left-[10%] w-24 drop-shadow-lg rounded-full" 
                />
                <motion.img 
                  animate={{ y: [0, 30, 0] }} 
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=100&auto=format&fit=crop" 
                  className="absolute top-[15%] right-[15%] w-12 drop-shadow-lg rounded-full" 
                />
                <motion.img 
                  animate={{ y: [0, -20, 0] }} 
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=100&auto=format&fit=crop" 
                  className="absolute bottom-[20%] left-[15%] w-16 drop-shadow-lg rounded-full" 
                />
              </div>

          <div className="container mx-auto px-6 relative z-10">
            <Link href="/" className="inline-flex items-center gap-4 mb-12 text-[10px] font-technical text-white/40 hover:text-white transition-colors group uppercase tracking-[0.4em]">
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform text-red-600" />
              BACK_TO_ARCHIVE
            </Link>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[14vw] font-black leading-[0.75] uppercase italic tracking-tighter mb-8">
                MAXIMUM<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}>VELOCITY</span>
              </h1>
            </motion.div>

            <div className="flex flex-wrap gap-12 items-center">
              <div className="space-y-1">
                <span className="text-[8px] font-technical text-red-600 tracking-[0.6em] uppercase block">AERODYNAMICS</span>
                <span className="text-3xl font-black italic">DRS_ENABLED</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="space-y-1">
                <span className="text-[8px] font-technical text-red-600 tracking-[0.6em] uppercase block">G_FORCE</span>
                <span className="text-3xl font-black italic">5.2G_LATERAL</span>
              </div>
            </div>
          </div>
        </section>

        {/* CIRCUITS MARQUEE */}
        <section className="py-48 overflow-hidden border-y border-white/5">
          <div className="container mx-auto px-6 mb-24">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase">WORLD_TOUR_2024</h2>
          </div>
          
          <div className="flex gap-8 px-6 animate-scroll whitespace-nowrap">
            {[...circuits, ...circuits].map((track, i) => (
              <div key={i} className="relative w-[400px] h-[300px] flex-shrink-0 group overflow-hidden border border-white/10 bg-neutral-900/50 p-8 flex flex-col justify-end">
                <div className="relative z-10">
                  <span className="text-red-600 font-technical text-[8px] tracking-[0.4em] uppercase block mb-2">{track.type}</span>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter">{track.name}</h3>
                  <div className="mt-4 pt-4 border-t border-white/10 flex gap-6">
                    <div className="flex flex-col">
                      <span className="text-[7px] font-technical text-white/40 uppercase">TURNS</span>
                      <span className="text-sm font-black italic">{track.turns}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[7px] font-technical text-white/40 uppercase">LENGTH</span>
                      <span className="text-sm font-black italic">{track.length}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[7px] font-technical text-white/40 uppercase">LOCATION</span>
                      <span className="text-sm font-black italic">{track.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DRIVERS SECTION */}
        <section className="py-48">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-32 text-center">
              <span className="text-red-600 font-technical text-[10px] tracking-[1em] uppercase mb-8">ELITE_PILOTS</span>
              <h2 className="text-8xl md:text-[10vw] font-black italic tracking-tighter uppercase leading-none">THE_GRIDS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {drivers.map((driver) => (
                <div key={driver.name} className="bg-black p-12 group hover:bg-red-600/5 transition-colors relative overflow-hidden">
                  <img src={driver.logo} className="absolute -right-8 -bottom-8 w-48 opacity-[0.03] grayscale invert group-hover:opacity-[0.08] transition-opacity" alt="" />
                  
                  <div className="flex justify-between items-start mb-16">
                    <span className="text-8xl font-black text-white/5 group-hover:text-red-600/20 transition-colors italic leading-none">{driver.number}</span>
                    <Trophy size={24} className={driver.titles > 0 ? 'text-red-600' : 'text-white/10'} />
                  </div>
                  
                  <span className="text-white/40 font-technical text-[10px] tracking-[0.4em] uppercase block mb-2">{driver.team}</span>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">{driver.name}</h3>
                  
                  <div className="flex items-center gap-6">
                    <div className="px-4 py-1.5 border border-white/10 text-[8px] font-technical uppercase tracking-widest">{driver.status}</div>
                    {driver.titles > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 text-lg font-black italic">{driver.titles}X</span>
                        <span className="text-[8px] font-technical text-white/40 uppercase tracking-widest">WORLD_TITLES</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </SmoothScroll>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-400px * 3 - 32px * 3)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
