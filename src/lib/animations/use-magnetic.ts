"use client";

import { useEffect, useRef } from "react";
import { gsap, hasFinePointer, prefersReducedMotion } from "./gsap-config";

type MagneticOptions = {
  /** How far outside the element's own box the pull field extends, in px. */
  radius?: number;
  /** 0–1, how much of the pointer offset gets applied. Higher = stronger pull. */
  strength?: number;
  /** Optional second ref (e.g. an inner label span) that moves further than the shell for a two-layer parallax feel. */
  childStrength?: number;
};

/**
 * Attach to any interactive element (buttons, nav links, social icons) to get
 * an Awwwards-style magnetic pull. Returns two refs: put `ref` on the
 * outer/clickable element and, optionally, `childRef` on an inner element
 * (a label, an icon) that should drift a bit further than the shell —
 * that two-speed offset is what makes magnetic buttons feel "physical"
 * instead of the whole thing just sliding as one rigid block.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement, C extends HTMLElement = HTMLElement>(
  options: MagneticOptions = {}
) {
  const { radius = 80, strength = 0.4, childStrength = 0.65 } = options;
  const ref = useRef<T>(null);
  const childRef = useRef<C>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !hasFinePointer()) return;

    const child = childRef.current;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    const childXTo = child ? gsap.quickTo(child, "x", { duration: 0.5, ease: "power3.out" }) : null;
    const childYTo = child ? gsap.quickTo(child, "y", { duration: 0.5, ease: "power3.out" }) : null;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const field = Math.max(rect.width, rect.height) / 2 + radius;

      if (dist < field) {
        xTo(dx * strength);
        yTo(dy * strength);
        childXTo?.(dx * childStrength);
        childYTo?.(dy * childStrength);
      } else {
        xTo(0);
        yTo(0);
        childXTo?.(0);
        childYTo?.(0);
      }
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
      childXTo?.(0);
      childYTo?.(0);
    };

    // Field extends beyond the element itself, so we track on the window
    // rather than the element's own mouseenter/leave.
    window.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [radius, strength, childStrength]);

  return { ref, childRef };
}
