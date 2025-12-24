"use client";

import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, PerspectiveCamera, ContactShadows, Sparkles, Float as FloatDrei } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

function ParticleField() {
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function TechGrid() {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <gridHelper args={[40, 40, 0x222222, 0x111111]} />
    </group>
  );
}

function FloatingCore() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <FloatDrei speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#ffffff"
          distort={0.3}
          speed={3}
          roughness={0}
          metalness={1}
          wireframe
        />
      </mesh>
    </FloatDrei>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
            <Suspense fallback={null}>
              <ParticleField />
              <TechGrid />
              <FloatingCore />
              <Sparkles count={50} scale={10} size={1} speed={0.4} opacity={0.2} />
              <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
            </Suspense>
          </Canvas>
        )}
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="container relative z-10 h-full flex flex-col justify-center items-center pointer-events-none"
      >
        <div className="w-full flex flex-col items-center text-center">
          <div className="overflow-hidden mb-4">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] font-technical text-white/40 tracking-[0.8em] uppercase block"
            >
              System Architect & Network Engineer
            </motion.span>
          </div>

          <h1 className="text-[14vw] md:text-[10vw] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12">
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
                className="block text-transparent stroke-white stroke-1"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                ZINE EDDINE
              </motion.span>
            </div>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-center pointer-events-auto">
            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="group flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-500">
                <div className="w-2 h-2 bg-white group-hover:bg-black rounded-full" />
              </div>
              <span className="text-[10px] font-technical text-white uppercase tracking-[0.4em]">Explore Archive</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="group border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              <span className="text-[10px] font-technical text-white uppercase tracking-[0.4em]">Download CV (PDF)</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-[5vw] bottom-12 hidden md:block overflow-hidden">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col gap-2"
        >
          <span className="text-[8px] font-technical text-white/20 uppercase tracking-widest">Core Stack</span>
          <span className="text-[10px] font-technical text-white uppercase tracking-widest">NEXTJS / CISCO / C++</span>
        </motion.div>
      </div>

      <div className="absolute right-[5vw] bottom-12 hidden md:block overflow-hidden">
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-end gap-2"
        >
          <span className="text-[8px] font-technical text-white/20 uppercase tracking-widest">Project Version</span>
          <span className="text-[10px] font-technical text-white uppercase tracking-widest">2025 // EDITION 1.0</span>
        </motion.div>
      </div>
    </section>
  );
}
