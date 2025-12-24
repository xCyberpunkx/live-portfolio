"use client";

import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Text } from "@react-three/drei";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.2, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.2, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
      
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1.2, 0.4, 256, 64]} />
          <MeshDistortMaterial
            color="#ffffff"
            speed={2}
            distort={0.4}
            radius={1}
            wireframe
            opacity={0.15}
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Float>

      <Particles count={1000} mouse={mouse} />
    </group>
  );
}

function Particles({ count, mouse }: { count: number; mouse: { x: number; y: number } }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02 + mouse.x * 0.05;
      pointsRef.current.rotation.x = mouse.y * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.015} 
        color="#ffffff" 
        transparent 
        opacity={0.4} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="top" className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-[2] blur-[1px] pointer-events-none"
      />

      {/* Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 z-10 text-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, tracking: "2em" }}
          animate={{ opacity: 1, tracking: "1.2em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="font-technical text-[10px] text-white/40 uppercase block">
            CORE_SYSTEM_ACTIVE // VER: 4.0.1
          </span>
        </motion.div>

        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-black leading-[0.8] text-white uppercase tracking-tighter"
          >
            ZINE_EDDINE<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>ROUABAH</span>
          </motion.h1>
          
          {/* Glitch Overlay Elements */}
          <motion.div 
            animate={{ opacity: [0, 1, 0, 1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
            className="absolute top-0 left-0 w-full h-full text-[12vw] font-black leading-[0.8] text-white/10 uppercase tracking-tighter translate-x-1 mix-blend-overlay"
          >
            ZINE_EDDINE<br />ROUABAH
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
          className="h-[1px] w-64 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-16"
        />

        <div className="mt-12 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="px-4 py-1 border border-white/10 rounded-full backdrop-blur-sm bg-white/5"
          >
            <span className="font-technical text-[8px] text-white/60 uppercase tracking-[0.5em]">
              SYSTEM_ARCHITECT // CREATIVE_DEVELOPER
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center gap-4 text-white/20"
          >
            <span className="w-12 h-[1px] bg-current" />
            <span className="font-technical text-[7px] uppercase tracking-widest">EST. 2020 // REL: 2024</span>
            <span className="w-12 h-[1px] bg-current" />
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative UI Corners */}
      <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-white/20 z-10" />
      <div className="absolute top-12 right-12 w-12 h-12 border-t border-r border-white/20 z-10" />
      <div className="absolute bottom-12 left-12 w-12 h-12 border-b border-l border-white/20 z-10" />
      <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-white/20 z-10" />

      {/* Live Data Feed Sidebars */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="w-1 h-8 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }}
                className="w-full bg-white/20"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-12 bottom-24 z-10 hidden xl:block">
        <div className="flex flex-col items-end gap-1 font-technical text-[7px] text-white/30 uppercase tracking-[0.3em]">
          <span>STATUS: OPTIMIZED</span>
          <span>LATENCY: 4.2ms</span>
          <span>LOAD: 12.4%</span>
          <div className="mt-2 w-32 h-[1px] bg-white/10 relative overflow-hidden">
             <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-1/3 bg-white/40"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
