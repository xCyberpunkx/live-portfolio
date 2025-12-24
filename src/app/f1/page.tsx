"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Gauge, Wind, Zap, MapPin, Trophy } from 'lucide-react';
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
    image: "https://images.unsplash.com/photo-1594735293218-498263725482?q=80&w=1978&auto=format&fit=crop"
  },
  {
    name: "RB20",
    team: "Red Bull Racing",
    engine: "Honda RBPTH002",
    tech: ["Triple-element rear wing", "Pull-rod front suspension", "Ground effect floor V3"],
    image: "https://images.unsplash.com/photo-1547432420-96696d04944d?q=80&w=2072&auto=format&fit=crop"
  }
];

const circuits = [
  { name: "MONACO", location: "Monte Carlo", length: "3.337 km", turns: 19, image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=2034&auto=format&fit=crop" },
  { name: "SPA-FRANCORCHAMPS", location: "Belgium", length: "7.004 km", turns: 20, image: "https://images.unsplash.com/photo-1629813296155-703274976793?q=80&w=2070&auto=format&fit=crop" },
  { name: "SUZUKA", location: "Japan", length: "5.807 km", turns: 18, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" }
];

const drivers = [
  { name: "Charles Leclerc", team: "Ferrari", titles: 0, status: "Active", number: 16 },
  { name: "Lewis Hamilton", team: "Mercedes", titles: 7, status: "Legend", number: 44 },
  { name: "Max Verstappen", team: "Red Bull", titles: 3, status: "Champion", number: 1 }
];

export default function FormulaOnePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navigation />
      
      <SmoothScroll>
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
              alt="F1 Background"
              fill
              className="object-cover grayscale"
            />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <Link href="/" className="inline-flex items-center gap-4 mb-12 text-[10px] font-technical text-white/40 hover:text-white transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
              BACK_TO_ARCHIVE
            </Link>
            
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[12vw] font-black leading-[0.8] uppercase italic tracking-tighter mb-8"
            >
              FORMULA<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}>ONE</span>
            </motion.h1>

            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-technical text-red-600 tracking-[0.4em]">SPEED_INDEX:</span>
                <span className="text-2xl font-black">MACH_0.3</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-technical text-red-600 tracking-[0.4em]">LATENCY:</span>
                <span className="text-2xl font-black">1.2MS</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 flex flex-col items-end">
            <span className="text-[8px] font-technical text-white/20 tracking-[1em] mb-4">SCROLL_FOR_INTEL</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        {/* CARS SECTION */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">THE_MACHINES</h2>
              <p className="text-white/40 font-technical text-xs max-w-sm uppercase tracking-[0.2em] leading-relaxed">
                AERODYNAMIC MASTERPIECES CAPABLE OF SUSTAINING OVER 5G IN CORNERS. THE PINNACLE OF HUMAN ENGINEERING.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {cars.map((car, i) => (
                <motion.div 
                  key={car.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border border-white/5 bg-neutral-900">
                    <Image 
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="px-3 py-1 bg-red-600/90 text-[8px] font-technical tracking-widest uppercase">TECH_SPECS_V.01</div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-technical text-white/40 uppercase tracking-[0.4em] mb-2 block">{car.team}</span>
                      <h3 className="text-4xl font-black uppercase italic tracking-tighter">{car.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-technical text-red-600 uppercase tracking-[0.4em] mb-2 block">ENGINE</span>
                      <span className="text-lg font-black uppercase">{car.engine}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    {car.tech.map(t => (
                      <div key={t} className="flex items-center gap-2 px-4 py-2 border border-white/5 rounded-full">
                        <Zap size={10} className="text-red-600" />
                        <span className="text-[8px] font-technical text-white/40 uppercase tracking-[0.2em]">{t}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CIRCUITS SECTION */}
        <section className="py-32 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="mb-24">
              <span className="text-[10px] font-technical text-red-600 tracking-[1em] mb-4 block uppercase">BATTLEGROUNDS</span>
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">THE_TRACKS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {circuits.map((track, i) => (
                <motion.div 
                  key={track.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[3/4] overflow-hidden border border-white/5"
                >
                  <Image 
                    src={track.image}
                    alt={track.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1s]"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="p-2 border border-white/20">
                        <MapPin size={16} />
                      </div>
                      <span className="text-[8px] font-technical text-white/40 tracking-[0.4em]">0{i+1}</span>
                    </div>
                    
                    <div>
                      <span className="text-[10px] font-technical text-red-600 uppercase tracking-[0.4em] mb-2 block">{track.location}</span>
                      <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">{track.name}</h3>
                      <div className="flex gap-8 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex flex-col">
                          <span className="text-[7px] font-technical text-white/40 uppercase">LENGTH</span>
                          <span className="text-xs font-black">{track.length}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[7px] font-technical text-white/40 uppercase">TURNS</span>
                          <span className="text-xs font-black">{track.turns}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DRIVERS SECTION */}
        <section className="py-32 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-24 text-center">
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8">THE_GLADIATORS</h2>
              <div className="w-24 h-[1px] bg-red-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5">
              {drivers.map((driver, i) => (
                <div key={driver.name} className="p-12 border-white/5 border-b md:border-r last:border-r-0 group hover:bg-white/5 transition-colors">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-6xl font-black text-white/10 group-hover:text-red-600/20 transition-colors italic leading-none">{driver.number}</span>
                    <Trophy size={20} className={driver.titles > 0 ? 'text-yellow-500' : 'text-white/10'} />
                  </div>
                  
                  <span className="text-[10px] font-technical text-white/40 uppercase tracking-[0.4em] mb-2 block">{driver.team}</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{driver.name}</h3>
                  
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-1 bg-white/5 rounded-full text-[8px] font-technical uppercase tracking-widest">{driver.status}</div>
                    {driver.titles > 0 && (
                      <span className="text-[8px] font-technical text-yellow-500 uppercase tracking-widest">{driver.titles}X WORLD CHAMPION</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-48 flex flex-col items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter max-w-2xl">
              INTERESTED_IN_HIGH_SPEED_DEVELOPMENT?
            </h2>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-6 border border-white/10 px-12 py-6 hover:bg-white hover:text-black transition-all group"
            >
              <span className="text-xs font-technical uppercase tracking-[0.5em]">START_THE_ENGINE</span>
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
