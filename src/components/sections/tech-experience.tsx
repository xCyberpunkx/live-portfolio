"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Synced from LinkedIn work history (last updated: session — July 2026)
const experiences = [
  {
    id: "01",
    date: "APR 2026 — PRES",
    title: "Software Engineer",
    company: "Script Shock",
    status: "ACTIVE",
    desc: "Working across front-end development and database administration, building and maintaining features on-site as part of the engineering team.",
  },
  {
    id: "02",
    date: "APR 2024 — PRES",
    title: "Software Engineer",
    company: "Freelance",
    status: "ACTIVE",
    desc: "Building and maintaining websites for independent clients — from PostgreSQL-backed data layers and Prisma ORM integration to full deployment.",
  },
  {
    id: "03",
    date: "FEB 2025 — FEB 2026",
    title: "Frontend Web Developer",
    company: "SnovaTech",
    status: "COMPLETED",
    desc: "Delivered front-end features for a solar simulation platform using Next.js, remote, improving UI consistency and performance across the app.",
  },
  {
    id: "04",
    date: "FEB 2024 — JAN 2025",
    title: "Web Developer",
    company: "Kara Automobile",
    status: "COMPLETED",
    desc: "On-site web development role supporting the company's digital presence and internal documentation workflows.",
  },
  {
    id: "05",
    date: "JUL 2023 — SEP 2024",
    title: "Full-Stack Developer",
    company: "Ultra Light",
    status: "COMPLETED",
    desc: "Led development of Ultra Light's corporate website using Laravel — architecting a custom web application focused on performance, scalability, and security, with a responsive, user-friendly design.",
  },
];

const STATUS_STYLES: Record<string, { dot: string; text: string }> = {
  ACTIVE: { dot: "bg-green-500", text: "text-green-500" },
  COMPLETED: { dot: "bg-blue-500", text: "text-blue-400" },
  STABLE: { dot: "bg-white/60", text: "text-white/60" },
};

function useTypewriter(text: string, start: boolean, speed = 26) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!start) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed]);
  return out;
}

function LogLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

function ExperienceEntry({ exp }: { exp: (typeof experiences)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const typedTitle = useTypewriter(exp.title, inView, 26);
  const style = STATUS_STYLES[exp.status] ?? STATUS_STYLES.STABLE;
  const stillTyping = inView && typedTitle.length < exp.title.length;

  return (
    <div ref={ref} className="border-b last:border-b-0 py-8 first:pt-0" style={{ borderColor: "var(--border-subtle)" }}>
      <LogLine>
        <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs font-technical" style={{ color: "var(--text-tertiary)" }}>
          <span className="text-blue-400/70">[{exp.id}]</span>
          <span>boot: unit {exp.company.toLowerCase().replace(/\s+/g, "-")}.service</span>
          <span style={{ color: "var(--text-quaternary)" }}>//</span>
          <span>{exp.date}</span>
        </div>
      </LogLine>

      <div className="mt-4 flex items-baseline gap-1">
        <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight min-h-[1.2em]" style={{ color: "var(--text-primary)" }}>
          {typedTitle}
        </h4>
        <motion.span
          animate={{ opacity: stillTyping ? [1, 0] : 0 }}
          transition={{ duration: 0.5, repeat: stillTyping ? Infinity : 0, repeatType: "reverse" }}
          className="inline-block w-2 h-6 md:h-8 bg-blue-400 translate-y-1"
        />
      </div>

      <LogLine delay={0.15}>
        <div className="mt-2 flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot} ${exp.status === "ACTIVE" ? "animate-pulse" : ""}`} />
          <span className={`text-[10px] font-technical uppercase tracking-widest ${style.text}`}>{exp.status}</span>
          <span className="text-[10px] font-technical" style={{ color: "var(--text-quaternary)" }}>@ {exp.company}</span>
        </div>
      </LogLine>

      <LogLine delay={0.25}>
        <p className="mt-4 text-sm md:text-base font-technical leading-relaxed max-w-2xl pl-4 border-l" style={{ color: "var(--text-secondary)", borderColor: "var(--border-default)" }}>
          {exp.desc}
        </p>
      </LogLine>
    </div>
  );
}

export default function TechExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || !fillRef.current || !sectionRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="tech" ref={sectionRef} className="py-24 md:py-48 relative overflow-hidden border-t" style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8">
              <span className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] uppercase block" style={{ color: "var(--text-quaternary)" }}>
                Professional Record
              </span>
              <p className="font-technical text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-xs" style={{ color: "var(--text-tertiary)" }}>
                A running log of technical roles — read the way a system reads its own startup, sequentially, one service at a time.
              </p>
              <div className="hidden lg:flex items-center gap-3 pt-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-technical text-[8px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>reading career.log</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}>
              <div className="terminal-chrome flex items-center justify-between gap-4 px-4 md:px-6 py-3 border-b" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-chrome)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-3 flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>
                    <Terminal size={10} /> career.log
                  </span>
                </div>
                <span className="font-technical text-[9px] uppercase tracking-widest hidden sm:block" style={{ color: "var(--text-quaternary)" }}>
                  {experiences.length} units loaded
                </span>
              </div>

              <div className="h-[2px] relative overflow-hidden" style={{ backgroundColor: "var(--border-subtle)" }}>
                <div
                  ref={fillRef}
                  className="absolute inset-y-0 left-0 w-full bg-blue-500/60 origin-left"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>

              <div className="p-6 md:p-10">
                {experiences.map((exp) => (
                  <ExperienceEntry key={exp.id} exp={exp} />
                ))}

                <div className="pt-8 flex items-center gap-2 font-technical text-xs" style={{ color: "var(--text-muted)" }}>
                  <span>guest@node_dz ~ %</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                    className="w-1.5 h-3.5 inline-block"
                    style={{ backgroundColor: "var(--text-muted)" }}
                  />
                  <span className="ml-2" style={{ color: "var(--text-quaternary)" }}>system ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
