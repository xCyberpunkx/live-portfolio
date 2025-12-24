"use client";

import React, { Suspense, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, PerspectiveCamera, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const techStack = [
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'C#', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg' },
  { name: '.NET', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg' },
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_logo.svg' },
  { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
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
            ARCHITECTURAL<br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>MASTERY</span>
          </h2>
          <p className="text-white/40 font-technical text-sm uppercase tracking-[0.3em] max-w-xl">
            A battle-tested foundation for high-availability systems and mission-critical network architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-16 bg-black hover:bg-white transition-all duration-700"
            >
              <div className="relative w-12 h-12 mb-8 brightness-0 invert group-hover:invert-0 transition-all duration-700 group-hover:scale-110">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[9px] font-technical text-white/20 group-hover:text-black transition-colors uppercase tracking-[0.3em]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
