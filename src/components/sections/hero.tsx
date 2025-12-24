"use client";

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { motion as motion2d } from 'framer-motion';
import * as THREE from 'three';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          font="https://fonts.gstatic.com/s/plusjakartasans/v8/LDS9onS6vVyc-qYW3P3_p1809_S_kL5p.woff"
          fontSize={1.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
          textAlign="center"
        >
          ROUABAH{"\n"}ZINE EDDINE
        </Text>
      </Float>

      <mesh scale={10} position={[0, 0, -5]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#111111"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] grid-pattern opacity-10 pointer-events-none" />

      {/* 2D Content Overlay */}
      <div className="container relative z-10 h-full flex flex-col justify-end pb-24 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion2d.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-md"
          >
            <span className="text-[10px] font-technical text-white/40 tracking-[0.4em] uppercase mb-4 block">Based in Algeria / 2025</span>
            <p className="text-white/60 text-lg leading-relaxed font-technical uppercase">
              Software Engineer & Network Associate specializing in high-performance systems and resilient digital architecture.
            </p>
          </motion2d.div>

          <motion2d.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4 pointer-events-auto"
          >
            <a href="#projects" className="bg-white text-black font-black px-10 py-5 text-sm uppercase hover:bg-white/90 transition-all">
              View Works
            </a>
            <a href="#contact" className="border border-white/20 text-white font-black px-10 py-5 text-sm uppercase hover:bg-white/10 transition-all">
              Contact
            </a>
          </motion2d.div>
        </div>
      </div>

      <div className="sr-only">
        <h1>Rouabah Zine Eddine</h1>
        <h2>Software Engineer & Network Associate</h2>
      </div>
    </section>
  );
}
