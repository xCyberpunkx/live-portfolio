"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";

/**
 * Lives once in the root layout (see app/layout.tsx). Watches the pathname
 * and, on every client-side route change, plays a brief full-screen wipe
 * themed as a route "mount" — same boot-log vocabulary as the splash
 * screen, so a nav click feels like the system loading a new module
 * rather than an unrelated transition style bolted on top.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const prevPath = useRef(pathname);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPath.current = pathname;
      return;
    }
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    if (prefersReducedMotion() || !overlayRef.current) return;

    const routeName = pathname === "/" ? "root" : pathname.replace(/^\//, "").replace(/\/$/, "");
    setLabel(`MOUNTING /${routeName}...`);

    const tl = gsap.timeline();
    tl.set(overlayRef.current, { display: "flex", clipPath: "inset(0 0 100% 0)" })
      .to(overlayRef.current, { clipPath: "inset(0 0 0% 0)", duration: 0.45, ease: "power4.inOut" })
      .to(overlayRef.current, { clipPath: "inset(100% 0 0 0)", duration: 0.45, ease: "power4.inOut", delay: 0.2 })
      .set(overlayRef.current, { display: "none" });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[250] hidden items-center justify-center pointer-events-none overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay">
        <filter id="pageTransitionGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#pageTransitionGrain)" />
      </svg>
      <div className="absolute left-0 right-0 h-[2px] bg-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-scan" />
      <span
        className="font-technical text-[10px] uppercase tracking-[0.5em]"
        style={{ color: "var(--text-tertiary)" }}
      >
        {label}
      </span>
    </div>
  );
}
