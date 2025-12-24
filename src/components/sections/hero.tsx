"use client";

import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#ffffff"
            speed={3}
            distort={0.4}
            radius={1}
            wireframe
            opacity={0.1}
            transparent
          />
        </mesh>
      </Float>

      <Particles count={500} />
    </>
  );
}

function Particles({ count }: { count: number }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
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
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

const HeroSection = () => {
  return (
    <section id="top" className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 z-10 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="font-technical text-[10px] tracking-[1.2em] text-white/40 uppercase">
            ENGINEERING_THE_FUTURE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] font-black leading-[0.85] text-white uppercase tracking-tighter"
        >
          ZINE_EDDINE<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>ROUABAH</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
          className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-12"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <span className="font-technical text-[8px] text-white/20 uppercase tracking-[0.8em]">
            SYSTEM_ARCHITECT // CREATIVE_DEVELOPER
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 z-10 hidden md:block opacity-20">
        <div className="font-technical text-[8px] text-white space-y-2">
          <p>OBJECT: TORUS_KNOT_01</p>
          <p>MATERIAL: DISTORT_GLASS_V2</p>
          <p>RENDER: WEBGL_2.0</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
