"use client";

import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, ContactShadows, Sparkles, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

function HeroBackground() {
  const { viewport } = useThree();
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      group.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Sparkles count={100} scale={15} size={2} speed={0.4} opacity={0.2} color="#ffffff" />
      <mesh scale={4}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#111111"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      <gridHelper args={[30, 30, 0x222222, 0x111111]} position={[0, -5, 0]} />
    </group>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <HeroBackground />
              <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
            </Suspense>
          </Canvas>
        )}
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/0 via-black/20 to-black pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 flex flex-col items-center text-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-[10px] font-technical text-white/40 tracking-[1em] uppercase block">CCNA // DOCKER // NEXTJS</span>
        </motion.div>

        <h1 className="text-[15vw] md:text-[12vw] font-black text-white leading-[0.75] tracking-tighter uppercase mb-12">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              ROUABAH
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white/20 italic"
            >
              ZINE EDDINE
            </motion.span>
          </div>
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-center pointer-events-auto">
          <a href="#projects" className="group flex items-center gap-6 bg-white px-10 py-5 rounded-full hover:scale-105 transition-all duration-500">
            <span className="text-black font-black uppercase text-[10px] tracking-widest">Selected Works</span>
            <div className="w-2 h-2 bg-black rounded-full group-hover:animate-ping" />
          </a>
          
          <a href="/ROUABAH-ZIN-EDDINE.pdf" target="_blank" className="group flex items-center gap-4 border border-white/10 px-10 py-5 rounded-full hover:bg-white/5 transition-all">
            <span className="text-white font-black uppercase text-[10px] tracking-widest">Download CV</span>
            <div className="w-px h-4 bg-white/20 group-hover:h-8 transition-all" />
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-[5vw] flex items-center gap-4">
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-white"
          />
        </div>
        <span className="text-[8px] font-technical text-white/20 uppercase tracking-widest rotate-90 origin-left">Scroll</span>
      </div>
    </section>
  );
}
