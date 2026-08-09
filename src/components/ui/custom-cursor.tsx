"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { hasFinePointer } from "@/lib/animations/gsap-config";

/**
 * The dot/ring both track a target position that's normally just the raw
 * pointer coordinates. When hovering a `[data-cursor]` element, the target
 * is pulled toward that element's center instead — the same "gravity" idea
 * as the magnetic buttons (see lib/animations/use-magnetic.ts), so the
 * cursor visibly cooperates with a magnetic button rather than just
 * floating on top of one while the button does its own separate pull.
 */
const PULL_STRENGTH = 0.35;

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  // Was viewport-width based (`innerWidth < 1024`), which meant a
  // touchscreen laptop under that width wrongly got no cursor and a large
  // touch-only tablet above it wrongly got one that doesn't track anything.
  // hasFinePointer() checks for an actual mouse-like pointer instead.
  const [lacksFinePointer, setLacksFinePointer] = useState(true); // default true until measured client-side

  const rawPointer = useRef({ x: 0, y: 0 });
  const hoveredRect = useRef<DOMRect | null>(null);

  useEffect(() => {
    setMounted(true);
    const checkPointer = () => {
      setLacksFinePointer(!hasFinePointer());
    };
    checkPointer();
    window.addEventListener("resize", checkPointer);

    const applyTarget = () => {
      const { x, y } = rawPointer.current;
      if (hoveredRect.current) {
        const cx = hoveredRect.current.left + hoveredRect.current.width / 2;
        const cy = hoveredRect.current.top + hoveredRect.current.height / 2;
        mouseX.set(x + (cx - x) * PULL_STRENGTH);
        mouseY.set(y + (cy - y) * PULL_STRENGTH);
      } else {
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      rawPointer.current = { x: e.clientX, y: e.clientY };
      applyTarget();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Components can opt in to a contextual label via data-cursor="VIEW"
      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      const interactive = target.closest("a, button");

      if (cursorTarget) {
        setIsHovered(true);
        setLabel(cursorTarget.dataset.cursor ?? null);
        hoveredRect.current = cursorTarget.getBoundingClientRect();
      } else if (interactive) {
        setIsHovered(true);
        setLabel(null);
        hoveredRect.current = null;
      } else {
        setIsHovered(false);
        setLabel(null);
        hoveredRect.current = null;
      }
      applyTarget();
    };

    if (!lacksFinePointer) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("resize", checkPointer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, lacksFinePointer]);

  if (lacksFinePointer || !mounted) return null;

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
