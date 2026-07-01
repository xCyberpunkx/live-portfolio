"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(true); // Default to true

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Components can opt in to a contextual label via data-cursor="VIEW"
      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      const interactive = target.closest("a, button");

      if (cursorTarget) {
        setIsHovered(true);
        setLabel(cursorTarget.dataset.cursor ?? null);
      } else if (interactive) {
        setIsHovered(true);
        setLabel(null);
      } else {
        setIsHovered(false);
        setLabel(null);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isMobile]);

  if (isMobile || !mounted) return null;

  const hasLabel = isHovered && Boolean(label);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hasLabel ? 64 : 16,
          height: hasLabel ? 64 : 16,
          backgroundColor: hasLabel ? "#3b82f6" : "#ffffff",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className={hasLabel ? "" : "mix-blend-difference w-full h-full rounded-full bg-white"} />
        <AnimatePresence>
          {hasLabel && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="absolute font-technical text-[8px] font-bold uppercase tracking-widest text-black"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 rounded-full z-[9998] pointer-events-none border"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hasLabel ? "rgba(59,130,246,0)" : "rgba(255,255,255,0.2)",
        }}
        animate={{
          width: isHovered ? (hasLabel ? 64 : 32) : 32,
          height: isHovered ? (hasLabel ? 64 : 32) : 32,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
