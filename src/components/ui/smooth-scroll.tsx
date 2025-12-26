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

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to avoid fixed positioning issues on initial mount

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (mounted && !isMobile && contentRef.current) {
      const observer = new ResizeObserver((entries) => {
        // Use requestAnimationFrame to avoid "ResizeObserver loop limit exceeded" error
        requestAnimationFrame(() => {
          if (!entries.length) return;
          const height = entries[0].contentRect.height;
          setContentHeight(height);
        });
      });
      observer.observe(contentRef.current);
      return () => observer.disconnect();
    }
  }, [mounted, isMobile]);

  const transformY = useTransform(smoothY, (value) => -value);

  // Return a stable structure to prevent crashes during resize
  return (
    <>
      {mounted && !isMobile && (
        <div 
          aria-hidden="true"
          style={{ height: contentHeight }} 
          className="pointer-events-none"
        />
      )}
      <motion.div
        ref={contentRef}
        style={mounted && !isMobile ? { y: transformY } : {}}
        className={mounted && !isMobile ? "fixed top-0 left-0 w-full overflow-hidden" : "relative w-full"}
      >
        {children}
      </motion.div>
    </>
  );
}
