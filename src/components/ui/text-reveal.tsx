"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface TextRevealProps {
  /** Plain text only — this splits a string, not arbitrary JSX. */
  children: string;
  as?: Tag;
  splitBy?: "words" | "chars";
  className?: string;
  style?: React.CSSProperties;
  /** Overrides the default per-unit stagger (0.06s for words, 0.018s for chars). */
  stagger?: number;
  duration?: number;
  delay?: number;
  /** ScrollTrigger `start` value. Ignored when trigger="mount". */
  start?: string;
  /** "scroll" fires when the element enters the viewport (default). "mount" fires immediately — use for hero-critical text that should be part of the opening sequence, not wait on a scroll trigger. */
  trigger?: "scroll" | "mount";
}

/**
 * <TextReveal as="h1" splitBy="chars">ROUABAH</TextReveal>
 *
 * Renders the text normally (readable without JS/CSS, good for SEO and
 * no-JS fallback) but wraps each word in an overflow-hidden mask. On
 * reveal, the word (or, in "chars" mode, each character inside it) slides
 * up out of that mask instead of just fading in place.
 */
export default function TextReveal({
  children,
  as = "div",
  splitBy = "words",
  className,
  style,
  stagger,
  duration = 0.9,
  delay = 0,
  start = "top 85%",
  trigger = "scroll",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const targetsRef = useRef<HTMLSpanElement[]>([]);

  // Rebuilt on every render, before the ref callbacks below re-run during
  // commit. Safe here because we never read this ref during render to
  // compute output — it's purely a post-commit animation target list.
  targetsRef.current = [];
  const registerTarget = (el: HTMLSpanElement | null) => {
    if (el && !targetsRef.current.includes(el)) targetsRef.current.push(el);
  };

  const words = useMemo(() => children.split(" "), [children]);
  const resolvedStagger = stagger ?? (splitBy === "chars" ? 0.018 : 0.06);

  useEffect(() => {
    const targets = targetsRef.current;
    if (targets.length === 0) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, opacity: 1 });
      return;
    }

    gsap.set(targets, { yPercent: 110, opacity: 0 });

    const play = () =>
      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration,
        delay,
        stagger: resolvedStagger,
        ease: "expo.out",
      });

    if (trigger === "mount") {
      const tween = play();
      return () => {
        tween.kill();
      };
    }

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start,
      once: true,
      onEnter: play,
    });

    return () => st.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, splitBy, resolvedStagger, duration, delay, start, trigger]);

  const Tag = as as React.ElementType;

  return (
    <Tag ref={containerRef} className={className} style={style}>
      {words.map((word, wi) => (
        <React.Fragment key={wi}>
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              paddingBottom: "0.14em",
              marginBottom: "-0.14em",
            }}
          >
            {splitBy === "chars" ? (
              [...word].map((ch, ci) => (
                <span key={ci} ref={registerTarget} style={{ display: "inline-block", willChange: "transform" }}>
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))
            ) : (
              <span ref={registerTarget} style={{ display: "inline-block", willChange: "transform" }}>
                {word}
              </span>
            )}
          </span>
          {wi < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </Tag>
  );
}
