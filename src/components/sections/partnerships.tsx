"use client";

import React, { Suspense, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, PerspectiveCamera, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const techStack = [
  { name: 'C++', category: 'SYSTEMS', status: 'STABLE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#', category: 'ENTERPRISE', status: 'ACTIVE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: '.NET Core', category: 'FRAMEWORK', status: 'CORE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'TypeScript', category: 'LANGUAGE', status: 'OPTIMIZED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', category: 'FRONTEND', status: 'STABLE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', category: 'BACKEND', status: 'SCALABLE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', category: 'DATABASE', status: 'CORE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', category: 'DEVOPS', status: 'DEPLOYED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Python', category: 'SCRIPTS', status: 'ACTIVE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Tailwind', category: 'STYLING', status: 'STABLE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
];

function TechCard({ tech, index }: { tech: typeof techStack[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col items-center justify-center p-8 md:p-16 bg-black hover:bg-white/[0.02] transition-all duration-500 overflow-hidden border border-white/5"
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/40 transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/40 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-white/40 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-white/40 transition-colors" />

      <div className="absolute inset-0 w-full h-[1px] bg-white/5 -translate-y-full group-hover:animate-scan z-0" />

      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute top-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
        <span className="text-[7px] font-technical tracking-[0.2em] text-white/40">{tech.status}</span>
      </div>

      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <span className="text-[7px] font-technical tracking-[0.2em] text-white/40">{tech.category}</span>
      </div>

      <div 
        style={{ transform: "translateZ(75px)" }}
        className="relative w-10 h-10 md:w-14 md:h-14 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 z-10"
      >
        <Image
          src={tech.logo}
          alt={tech.name}
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:animate-pulse pointer-events-none" />
      </div>
      
      <span 
        style={{ transform: "translateZ(50px)" }}
        className="text-[10px] font-technical text-white/20 group-hover:text-white transition-colors uppercase tracking-[0.4em] relative z-10"
      >
        {tech.name}
      </span>

      <span className="absolute bottom-2 left-4 text-[6px] font-technical text-white/[0.02] uppercase select-none">
        TECH_ID: 0x{index.toString(16).toUpperCase()}
      </span>
    </motion.div>
  );
}

function FloatingDna() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[3, 0.4, 128, 32]} />
        <MeshWobbleMaterial color="#ffffff" factor={0.6} speed={2} wireframe opacity={0.1} transparent />
      </mesh>
    </Float>
  );
}

export default function Partnerships() {
  return (
    <section className="bg-black py-24 md:py-64 overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <FloatingDna />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col mb-32 items-center text-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="font-technical text-[10px] tracking-[1em] text-white/40 uppercase block">SYSTEM_ARCHITECTURE</span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
          
          <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-black uppercase text-white mb-12 tracking-tighter">
            TECHNICAL<br /><span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>ARSENAL</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-b border-white/5 py-8">
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-2xl mb-1">01</span>
              <span className="text-[8px] font-technical text-white/40 tracking-widest">INFRASTRUCTURE</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/5">
              <span className="text-white font-black text-2xl mb-1">02</span>
              <span className="text-[8px] font-technical text-white/40 tracking-widest">CORE_ENGINEERING</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-2xl mb-1">03</span>
              <span className="text-[8px] font-technical text-white/40 tracking-widest">SYSTEM_OPTIMIZATION</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-white/5 border border-white/5 perspective-1000">
          {techStack.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
