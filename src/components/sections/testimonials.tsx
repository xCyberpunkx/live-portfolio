"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Quote } from "lucide-react";

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

export default function Testimonials() {
  return (
    <section className="py-24 md:py-48 border-t relative overflow-hidden" style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] uppercase block mb-6" style={{ color: "var(--text-quaternary)" }}>
            CLIENT_FEEDBACK
          </span>
          <h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.85] uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
            $ CAT TESTIMONIALS.LOG
          </h2>
        </motion.div>

        <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}>
          <div
            className="terminal-chrome flex items-center gap-2 px-4 md:px-6 py-3 border-b"
            style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-chrome)" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-3 flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>
              <Terminal size={10} /> guest@node_dz ~ % cat testimonials.log
            </span>
          </div>

          <div className="divide-y" style={{ borderColor: "var(--border-subtle)" }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 md:p-10 flex gap-5 md:gap-6"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <Quote size={20} className="flex-shrink-0 text-blue-400/50 mt-1" />
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>{t.author}</span>
                    <span className="font-technical text-[10px]" style={{ color: "var(--text-quaternary)" }}>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
