"use client";

import React, { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext<Lenis | null>(null);

// Lets any component (nav links, the hero's "Contact Me" button, footer anchors)
// trigger a real Lenis-smoothed scroll instead of racing it with native scrollTo.
export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = React.useState<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenisRef.current = instance;
    setLenis(instance);

    // Keep every ScrollTrigger (pins, scrubs) in sync with Lenis's virtual scroll position.
    instance.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker so both run on the same rAF loop — avoids
    // the double-rAF stutter you get running them independently.
    const update = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <div className="relative w-full">{children}</div>
    </LenisContext.Provider>
  );
}
