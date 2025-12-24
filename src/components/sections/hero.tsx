"use client";

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { motion as motion2d, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, 5), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

function FloatingText() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        font="https://fonts.gstatic.com/s/plusjakartasans/v8/LDS9onS6vVyc-qYW3P3_p1809_S_kL5p.woff"
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={10}
        textAlign="center"
        fontWeight={900}
      >
        ROUABAH{"\n"}ZINE EDDINE
      </Text>
    </Float>
  );
}

function Sphere() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={mesh} scale={2.5} position={[0, 0, -2]}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#111111"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              <FloatingText />
              <Sphere />
              <Rig />
              <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        )}
      </div>

      {/* Hero Visual Overlay (Charles Leclerc / Lando style) */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion2d.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1493397212122-2b85def8d0b0?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract Architecture" 
            className="w-full h-full object-cover grayscale"
          />
        </motion2d.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content Layer */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-center pointer-events-none">
        <div className="w-full flex flex-col items-center text-center">
          <motion2d.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="text-[10px] font-technical text-white/40 tracking-[0.8em] uppercase block mb-4">Software Engineer — Network Associate</span>
            <h1 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
              <span className="block overflow-hidden">
                <motion2d.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  ROUABAH
                </motion2d.span>
              </span>
              <span className="block overflow-hidden">
                <motion2d.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white/20 italic"
                >
                  ZINE EDDINE
                </motion2d.span>
              </span>
            </h1>
          </motion2d.div>

          <motion2d.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-xl text-white/40 text-sm md:text-lg font-technical uppercase tracking-widest leading-relaxed mb-12"
          >
            Defining the intersection of performance engineering and resilient digital infrastructure. Available for selective partnerships.
          </motion2d.p>

          <motion2d.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-8 pointer-events-auto"
          >
            <a href="#projects" className="group relative flex items-center gap-4 text-white hover:text-white/60 transition-colors">
              <span className="text-[10px] font-technical uppercase tracking-[0.4em]">View Selected Works</span>
              <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
            </a>
            <a href="#contact" className="group relative flex items-center gap-4 text-white hover:text-white/60 transition-colors">
              <span className="text-[10px] font-technical uppercase tracking-[0.4em]">Inquire</span>
              <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
            </a>
          </motion2d.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion2d.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-[5vw] flex items-center gap-4"
      >
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion2d.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-white"
          />
        </div>
        <span className="text-[8px] font-technical text-white/20 uppercase tracking-[0.3em] rotate-90 origin-left">Scroll</span>
      </motion2d.div>

      {/* Location Badge */}
      <motion2d.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-[5vw] flex flex-col items-end"
      >
        <span className="text-[8px] font-technical text-white/40 uppercase tracking-[0.3em]">Localized in</span>
        <span className="text-xs font-bold text-white uppercase tracking-tighter">Algeria / 213</span>
      </motion2d.div>
    </section>
  );
}
