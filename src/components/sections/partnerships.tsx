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
          <span className="font-technical text-[10px] tracking-[1em] text-white/20 uppercase mb-8 block">TECHNICAL GENOME</span>
          <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-black uppercase text-white mb-12 tracking-tighter">
            TECHNICAL<br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>ARSENAL</span>
          </h2>
          <p className="text-white/40 font-technical text-sm uppercase tracking-[0.3em] max-w-xl">
            A battle-tested foundation for high-availability systems and mission-critical network architectures.
          </p>
        </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-white/5 border border-white/5">
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex flex-col items-center justify-center p-8 md:p-16 bg-black hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
              >
                {/* Technical Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/40 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-white/40 transition-colors" />

                {/* Scanline Effect */}
                <div className="absolute inset-0 w-full h-[1px] bg-white/5 -translate-y-full group-hover:animate-scan z-0" />

                {/* Metadata Top */}
                <div className="absolute top-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  <span className="text-[7px] font-technical tracking-[0.2em] text-white/40">{tech.status}</span>
                </div>

                {/* Metadata Bottom */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[7px] font-technical tracking-[0.2em] text-white/40">{tech.category}</span>
                </div>

                <div className="relative w-10 h-10 md:w-14 md:h-14 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 z-10">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                  {/* Glitch Overlay (Pseudo) */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:animate-pulse pointer-events-none" />
                </div>
                
                <span className="text-[10px] font-technical text-white/20 group-hover:text-white transition-colors uppercase tracking-[0.4em] relative z-10">
                  {tech.name}
                </span>

                {/* Background ID Tag */}
                <span className="absolute bottom-2 left-4 text-[6px] font-technical text-white/[0.02] uppercase select-none">
                  TECH_ID: 0x{index.toString(16).toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
