"use client";

import React, { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  PerspectiveCamera, 
  MeshTransmissionMaterial,
  Environment,
  ContactShadows,
  Stars,
  Sparkles
} from "@react-three/drei";
import * as THREE from "three";

function TechCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.x = time * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <tetrahedronGeometry args={[4, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={1}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.5}
          distortionScale={0.3}
          temporalDistortion={0.5}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#ffffff"
          transparent
          opacity={0.6}
        />
      </mesh>

      <Sparkles count={50} scale={10} size={1} speed={0.5} opacity={0.3} color="white" />
    </group>
  );
}

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <Suspense fallback={null}>
            <TechCore />
            <Environment preset="night" />
            <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />
          </Suspense>
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pointer-events-none">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="font-technical text-[10px] tracking-[1em] text-white/30 uppercase">
              NODE_DZ // PROTOCOL_01
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[11vw] font-black leading-[0.85] text-white uppercase tracking-tighter"
          >
            ROUABAH<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>ZINE EDDINE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <div className="px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="font-technical text-[10px] text-white/60 uppercase tracking-[0.5em]">
                Software Engineer
              </span>
            </div>
            
            <div className="h-20 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute bottom-12 left-12 z-10 hidden md:block">
        <div className="flex flex-col gap-2 font-technical text-[8px] text-white/20 uppercase tracking-widest">
          <span>LATENCY: 12MS</span>
          <span>UPTIME: 99.9%</span>
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 hidden md:block">
        <div className="flex flex-col items-end gap-2 font-technical text-[8px] text-white/20 uppercase tracking-widest text-right">
          <span>CORE_V4.0</span>
          <span>STABLE_BUILD</span>
          <span>AUTH: VERIFIED</span>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-20" />
    </section>
  );
};

export default HeroSection;