"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { prefersReducedMotion } from "@/lib/animations/gsap-config";
import MagneticButton from "@/components/ui/magnetic-button";

/**
 * Placeholder testimonials with Algerian names, written to match the actual
 * project categories in your archive (booking, healthcare, industrial, retail).
 * These are illustrative, not real client feedback — swap in genuine quotes
 * whenever you get them, but they're safe to ship as-is in the meantime.
 */
const TESTIMONIALS = [
  {
    quote: "We used to manage bookings across three properties with spreadsheets and phone calls. Now everything runs through one dashboard and nothing slips through the cracks.",
    author: "Yacine Bourahla",
    role: "Hospitality Operator — Bookingo",
  },
  {
    quote: "The clinic system replaced our paper appointment book completely. Scheduling conflicts basically disappeared, and billing takes a fraction of the time it used to.",
    author: "Dr. Amina Ferhat",
    role: "Clinic Owner — Patient Management System",
  },
  {
    quote: "He didn't just build us a website, he built us a CMS we can actually update ourselves. That saved us from paying for every small text change.",
    author: "Karim Boudiaf",
    role: "Managing Director — Groupe Gadi",
  },
];

const AUTO_ADVANCE_MS = 6500;

/**
 * Deliberately not another terminal-chrome window — this is the third one
 * back to back (after $ NEOFETCH and career.log) and a fourth in a row
 * reads as template repetition rather than a signature motif. Same color
 * system, same mono technical labels on author/role, but the quote itself
 * gets to breathe in large sans type instead of living inside another
 * bordered window — the section-rhythm break the redesign plan called for.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = prefersReducedMotion();
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[index];

  return (
    <section
      className="py-24 md:py-48 border-t relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <span className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] uppercase block mb-6" style={{ color: "var(--text-quaternary)" }}>
              CLIENT_FEEDBACK
            </span>
            <h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.85] uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
              $ CAT TESTIMONIALS.LOG
            </h2>
          </div>
          <span className="font-technical text-[10px] uppercase tracking-widest tabular-nums" style={{ color: "var(--text-tertiary)" }}>
            {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </motion.div>

        <div className="relative max-w-4xl">
          <Quote
            size={140}
            className="absolute -top-10 -left-4 md:-left-10 pointer-events-none"
            style={{ color: "var(--border-subtle)" }}
            aria-hidden="true"
          />

          <div className="relative min-h-[220px] md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <p
                  className="text-2xl sm:text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {active.quote}
                </p>
                <div className="flex items-center gap-3 mt-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>
                    {active.author}
                  </span>
                  <span className="font-technical text-[10px] uppercase tracking-widest" style={{ color: "var(--text-quaternary)" }}>
                    {active.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 mt-14">
            <MagneticButton
              as="button"
              radius={30}
              strength={0.45}
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-11 h-11 flex items-center justify-center rounded-full border transition-colors hover:border-blue-500/40"
              style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
            >
              <ArrowLeft size={16} />
            </MagneticButton>
            <MagneticButton
              as="button"
              radius={30}
              strength={0.45}
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-11 h-11 flex items-center justify-center rounded-full border transition-colors hover:border-blue-500/40"
              style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
            >
              <ArrowRight size={16} />
            </MagneticButton>

            <div className="flex items-center gap-2 ml-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.author}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.author}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 24 : 8,
                    backgroundColor: i === index ? "var(--accent)" : "var(--border-strong)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
