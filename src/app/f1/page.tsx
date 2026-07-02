"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Trophy } from 'lucide-react';
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CustomCursor from "@/components/ui/custom-cursor";
import SmoothScroll from "@/components/ui/smooth-scroll";

const cars = [
  {
    name: "Ferrari",
    team: "Scuderia Ferrari",
    engine: "Ferrari Power Unit",
    tech: ["New 2026 hybrid power unit regs", "Active aerodynamics", "Leclerc / Hamilton lineup"],
    image: "https://images.unsplash.com/photo-1644331422789-98289450849f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Red Bull Racing",
    team: "Oracle Red Bull Racing",
    engine: "Red Bull Ford Powertrains",
    tech: ["First season on Ford power units", "Active aerodynamics", "Verstappen / Hadjar lineup"],
    image: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?q=80&w=2070&auto=format&fit=crop",
  },
];

const circuits = [
  { name: "MONACO", location: "Monte Carlo", length: "3.337 km", turns: 19, type: "Street Circuit" },
  { name: "SPA-FRANCORCHAMPS", location: "Belgium", length: "7.004 km", turns: 20, type: "Race Circuit" },
  { name: "SILVERSTONE", location: "United Kingdom", length: "5.891 km", turns: 18, type: "Race Circuit" },
];

const drivers = [
  { name: "Lando Norris", team: "McLaren", titles: 1, status: "Reigning Champion", number: 4 },
  { name: "Max Verstappen", team: "Red Bull Racing", titles: 4, status: "Multiple Champion", number: 1 },
  { name: "Charles Leclerc", team: "Ferrari", titles: 0, status: "Active", number: 16 },
];

export default function FormulaOnePage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-red-600 selection:text-white">
      <CustomCursor />
      <Navigation />

      <SmoothScroll>
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.35 }}
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
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
          </motion.div>

          <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-red-600/40" />
          <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-red-600/40" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-red-600/40" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-red-600/40" />

          <div className="container mx-auto px-6 relative z-10">
            <Link href="/" className="inline-flex items-center gap-4 mb-12 text-[10px] font-technical text-white/40 hover:text-white transition-colors group uppercase tracking-[0.4em]">
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform text-red-600" />
              BACK_TO_ARCHIVE
            </Link>

            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <span className="font-technical text-[10px] text-red-600 tracking-[1em] uppercase block mb-6">PERSONAL_INTEREST // OFF_DUTY</span>
              <h1 className="text-[13vw] font-black leading-[0.8] uppercase tracking-tighter mb-8">
                MAXIMUM<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>VELOCITY</span>
              </h1>
            </motion.div>

            <div className="flex flex-wrap gap-12 items-center">
              <div className="space-y-1">
                <span className="text-[8px] font-technical text-red-600 tracking-[0.6em] uppercase block">2026_REGULATIONS</span>
                <span className="text-2xl font-black">ACTIVE_AERO</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="space-y-1">
                <span className="text-[8px] font-technical text-red-600 tracking-[0.6em] uppercase block">SEASON</span>
                <span className="text-2xl font-black">77TH_CHAMPIONSHIP</span>
              </div>
            </div>
          </div>
        </section>

        {/* MACHINES */}
        <section className="py-32 md:py-48 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-24 text-center">
              <span className="text-red-600 font-technical text-[10px] tracking-[1em] uppercase mb-6">THE_ENGINEERING_PINNACLE</span>
              <h2 className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-none">THE_MACHINES</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {cars.map((car) => (
                <div key={car.name} className="bg-black p-10 md:p-12 group hover:bg-red-600/5 transition-colors relative overflow-hidden">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <span className="text-white/40 font-technical text-[10px] tracking-[0.4em] uppercase block mb-2">{car.team}</span>
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{car.name}</h3>
                    </div>
                    <Zap size={28} className="text-red-600" />
                  </div>

                  <div className="space-y-6 pt-8 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-technical text-white/40 uppercase tracking-widest">POWER_UNIT</span>
                      <span className="text-sm font-black">{car.engine}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {car.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 text-[8px] font-technical uppercase tracking-widest border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CIRCUITS MARQUEE */}
        <section className="py-32 md:py-48 overflow-hidden border-b border-white/5">
          <div className="container mx-auto px-6 mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4">WORLD_TOUR_2026</h2>
            <p className="text-red-600 font-technical text-xs tracking-[0.5em] uppercase">The Global Racing Calendar</p>
          </div>

          <div className="flex gap-24 px-6 animate-scroll whitespace-nowrap">
            {[...circuits, ...circuits].map((track, i) => (
              <div key={i} className="flex-shrink-0 group">
                <div className="flex flex-col">
                  <span className="text-red-600 font-technical text-[10px] tracking-[0.4em] uppercase block mb-2">{track.type}</span>
                  <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">{track.name}</h3>
                  <div className="mt-4 flex gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-technical text-white/40 uppercase">{track.location}</span>
                    <span className="text-[10px] font-technical text-white/40 uppercase">{track.turns} TURNS</span>
                    <span className="text-[10px] font-technical text-white/40 uppercase">{track.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DRIVERS */}
        <section className="py-32 md:py-48">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-24 text-center">
              <span className="text-red-600 font-technical text-[10px] tracking-[1em] uppercase mb-6">2026_GRID</span>
              <h2 className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-none">THE_DRIVERS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {drivers.map((driver) => (
                <div key={driver.name} className="bg-black p-10 md:p-12 group hover:bg-red-600/5 transition-colors relative overflow-hidden">
                  <div className="flex justify-between items-start mb-14">
                    <span className="text-7xl font-black text-white/5 group-hover:text-red-600/20 transition-colors leading-none">{driver.number}</span>
                    <Trophy size={22} className={driver.titles > 0 ? 'text-red-600' : 'text-white/10'} />
                  </div>

                  <span className="text-white/40 font-technical text-[10px] tracking-[0.4em] uppercase block mb-2">{driver.team}</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none">{driver.name}</h3>

                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="px-4 py-1.5 border border-white/10 text-[8px] font-technical uppercase tracking-widest">{driver.status}</div>
                    {driver.titles > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 text-lg font-black">{driver.titles}X</span>
                        <span className="text-[8px] font-technical text-white/40 uppercase tracking-widest">WORLD_TITLE{driver.titles > 1 ? "S" : ""}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center font-technical text-[9px] text-white/20 uppercase tracking-[0.3em]">
              Grid data reflects the 2026 season at time of writing — standings shift race to race.
            </p>
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
