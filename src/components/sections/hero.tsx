"use client";

import React, { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  MeshDistortMaterial, 
  Float, 
  PerspectiveCamera, 
  Text, 
  MeshTransmissionMaterial,
  Environment,
  ContactShadows
} from "@react-three/drei";
import * as THREE from "three";

function CentralShape() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2.5, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.5}
          distortionScale={0.3}
          temporalDistortion={0.5}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <Suspense fallback={null}>
            <CentralShape />
            <Environment preset="city" />
            <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />
          </Suspense>
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
              ESTABLISHED 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[15vw] md:text-[12vw] font-black leading-none text-white uppercase tracking-tighter"
          >
            ROUABAH<br />
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>ZINE EDDINE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <span className="font-technical text-sm text-white/40 uppercase tracking-[0.5em]">
              Software Engineer
            </span>
            <div className="h-24 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-20" />
    </section>
  );
};

export default HeroSection;