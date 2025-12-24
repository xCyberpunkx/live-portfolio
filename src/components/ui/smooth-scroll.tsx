"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleResize = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
    restDelta: 0.001
  });

  const y = useTransform(smoothY, (value) => -value);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden"
      >
        {children}
      </motion.div>
    </>
  );
}
