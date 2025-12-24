"use client";

import React, { Suspense, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

function TechCore() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh} scale={2.5}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#ffffff"
          distort={0.5}
          speed={4}
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
          <div className="col-span-12 md:col-span-6 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-technical text-white/20 tracking-[1em] uppercase block">CORE PHILOSOPHY</span>
                <h2 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.85] uppercase tracking-tighter">
                  SYSTEMIC<br />
                  <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>INTELLIGENCE</span>
                </h2>
              </div>
              
              <div className="space-y-12">
                <p className="text-white/40 font-technical text-xl leading-relaxed uppercase tracking-[0.2em] max-w-xl">
                  Building the backbone of modern digital experiences through architectural rigor and surgical code precision.
                </p>
                
                <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em]">Efficiency</span>
                    <p className="text-white font-black uppercase text-sm tracking-widest">Low Latency</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.4em]">Reliability</span>
                    <p className="text-white font-black uppercase text-sm tracking-widest">Fault Tolerant</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-6 relative aspect-square">
            <div className="absolute inset-0 z-0">
               <Canvas>
                 <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                 <ambientLight intensity={0.5} />
                 <pointLight position={[10, 10, 10]} />
                 <Suspense fallback={null}>
                    <TechCore />
                    <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
                 </Suspense>
               </Canvas>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-full p-12 pointer-events-none flex items-center justify-center"
            >
              <div className="w-full h-full border border-white/10 p-1 bg-black/40 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10" />
                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Engineering Detail"
                  fill
                  className="object-cover grayscale opacity-20 mix-blend-screen"
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