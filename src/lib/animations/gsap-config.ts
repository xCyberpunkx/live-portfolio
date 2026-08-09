"use client";

/**
 * Single source of truth for GSAP setup.
 *
 * Before V2 this was registered redundantly in three files (hero.tsx,
 * tech-experience.tsx, smooth-scroll.tsx) with three different sets of
 * hand-picked ease strings. Importing from here instead means every new
 * ScrollTrigger in the codebase uses the same vocabulary and the plugin
 * only gets registered once.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** Shared eases — pick from here instead of inventing a new cubic-bezier per section. */
export const EASE = {
  /** Default "premium" ease for entrances. Matches the .ease-expo utility already in globals.css. */
  expo: "expo.out",
  /** Snappier entrance for small UI (chips, buttons, icons). */
  power3: "power3.out",
  /** For anything that should feel mechanical / terminal-like (typewriter cursors, scanlines). */
  linear: "none",
  /** For exits and page-transition wipes. */
  power4InOut: "power4.inOut",
} as const;

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 1.1,
  cinematic: 1.6,
} as const;

/**
 * Every animated component in the site should gate on this before wiring up
 * scroll/pointer-driven effects. Safe to call outside effects (reads
 * matchMedia synchronously) but only meaningful on the client.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Devices that can genuinely afford pointer-driven effects (magnetic buttons,
 * mouse-parallax, custom cursor). Using this instead of an innerWidth
 * breakpoint means a touchscreen laptop correctly gets the lighter mobile
 * treatment while a desktop-sized tablet with a mouse still gets the full
 * experience — the old `isMobile` (`innerWidth < 1024`) checks conflated
 * "small screen" with "no precise pointer," which aren't the same thing.
 */
export function hasFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
