"use client";

import React, { Suspense, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
