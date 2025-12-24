"use client";

import React, { Suspense, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AbstractModel() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} scale={2}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#ffffff"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

const ChampionCollection = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-64 overflow-hidden border-t border-white/5">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-12 gap-y-24 md:gap-x-24 relative items-center">
          
          <div className="col-span-12 md:col-span-6 z-10 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-technical text-white/20 tracking-[0.8em] uppercase block">Identity — Core</span>
                <h2 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.85] uppercase tracking-tighter">
                  Precision<br />
                  <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>Engineering</span>
                </h2>
              </div>
              
              <div className="space-y-12">
                <p className="text-white/40 font-technical text-xl leading-relaxed uppercase tracking-widest max-w-xl">
                  Merging architectural aesthetics with low-level system performance. My work is defined by the rigid pursuit of efficiency and the elegant manifestation of data.
                </p>
                
                <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em]">Focus Area</span>
                    <p className="text-white font-black uppercase text-sm tracking-widest">Distributed Systems</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em]">Current Status</span>
                    <p className="text-white font-black uppercase text-sm tracking-widest">Architecting v3.0</p>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ x: 20 }}
                  className="flex items-center gap-8 group cursor-pointer"
                >
                  <span className="text-[10px] font-technical text-white uppercase tracking-[0.4em]">Download Credentials</span>
                  <div className="w-24 h-[1px] bg-white transition-all group-hover:w-48" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-6 relative aspect-square order-1 md:order-2">
            <div className="absolute inset-0 z-0">
               <Canvas>
                 <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                 <ambientLight intensity={0.5} />
                 <pointLight position={[10, 10, 10]} />
                 <Suspense fallback={null}>
                    <AbstractModel />
                 </Suspense>
               </Canvas>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-full p-12 pointer-events-none"
            >
              <div className="w-full h-full border border-white/5 p-4 bg-black/40 backdrop-blur-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Engineering Detail"
                  fill
                  className="object-cover grayscale opacity-40 mix-blend-screen"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChampionCollection;