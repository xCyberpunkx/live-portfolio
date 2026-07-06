"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * Thin progress bar tracking scroll position through the article body.
 * Mirrors the accent-colored scroll bar already used in navigation.tsx,
 * but scoped to the post content instead of the whole page.
 *
 * Usage in a blog post page (e.g. app/blog/[slug]/page.tsx):
 *   <ReadingProgress targetId="post-content" />
 *   ...
 *   <article id="post-content">...</article>
 */
export default function ReadingProgress({ targetId }: { targetId: string }) {
  const [raw, setRaw] = useState(0);
  const progress = useSpring(raw, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setRaw(total > 0 ? scrolled / total : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[110] origin-left"
      style={{ scaleX: progress, backgroundColor: "var(--accent)" }}
    />
  );
}
