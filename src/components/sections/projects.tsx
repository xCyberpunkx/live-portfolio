"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github, Sparkles, X } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";

const projects = [
  {
    title: "Nexora",
    category: "Flagship • Multi-Tenant ERP for Gyms, Spas & Beauty Institutes",
    image: "/projects/nexora.png",
    link: "https://nexora-jet-rho.vercel.app/",
    github: "#",
    details:
      "A multi-tenant SaaS ERP built for gyms, spas, and beauty institutes in Algeria — members, subscriptions, appointments, point-of-sale, stock, and accounting in one platform, priced in dinars with CIB, Edahabia, BaridiMob, and CCP built in as native payment methods. Strict per-organization data isolation and role-based permissions (owner, admin, manager, staff, reader) let a single studio or a multi-site group run front-desk to back-office from one tool.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    flagship: true,
  },
  {
    title: "Ledger",
    category: "Client & Project Operations Platform",
    image: "/projects/ledger.png",
    link: "https://ledger-frontend-woad.vercel.app",
    github: "#",
    details:
      "A multi-tenant client and project operations platform built for freelancers and small agencies — replacing scattered WhatsApp threads, email chains, and spreadsheets with one source of truth. Org-scoped role-based access, a dedicated client portal, and an append-only activity log that auto-generates timelines and notifications instead of relying on manual status updates.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    flagship: false,
  },
  {
    title: "Forge Kit",
    category: "Developer Tools • Open Source",
    image: "/projects/white.png",
    link: "https://v1-forge-staging.vercel.app/",
    github: "https://github.com/xCyberpunkx/forge",
    details:
      "A free, open-source workspace for builders — generators, converters, formatters, and dev utilities under one fast, keyboard-friendly interface. Runs entirely in the browser, no sign-up, no tracking, no paywall.",
    tech: ["React 19", "TypeScript"],
    flagship: false,
  },
  {
    title: "DentalDZ",
    category: "E-Commerce • Full Backend CMS",
    image: "/projects/dentaldz.png",
    link: "https://www.dentaldz.com/",
    github: "#",
    details:
      "A complete online store for dental equipment, including product catalog management, ordering, and a custom admin CMS behind the scenes.",
    tech: ["React", "Supabase"],
    flagship: false,
  },
  {
    title: "STEREO MIND",
    category: "Productivity • Open Source",
    image: "/projects/stereo-mind.png",
    link: "https://stero-mind.vercel.app/",
    github: "#",
    details:
      "A productivity tool focused on simplicity — tracking learning, tasks, and goals without the friction of complex features.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    flagship: false,
  },
  {
    title: "Groupe Gadi",
    category: "Static Website • Custom CMS Editor",
    image: "/projects/gadi.png",
    link: "https://www.groupegadi.com/",
    github: "#",
    details:
      "A static-first corporate site paired with a custom backend inline editor, letting the client update page content directly.",
    tech: ["Next.js", "Custom CMS"],
    flagship: false,
  },
  {
    title: "Safouane Mokhtefi",
    category: "Portfolio • Graphic Design",
    image: "/projects/safouane-portfolio.png",
    link: "https://mokhtefi-safwan.vercel.app/",
    github: "#",
    details:
      "A visually striking portfolio for a graphic designer, built as a digital canvas that lets the work speak through minimalist design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    flagship: false,
  },
];

type Project = (typeof projects)[number];

/** Gentle pointer tilt — reacts to the cursor, resets on leave, does
 *  nothing on its own. Skipped under reduced motion. */
const TiltCard = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string; style?: React.CSSProperties; onClick: () => void }
>(function TiltCard({ children, className, style, onClick }, forwardedRef) {
  const innerRef = useRef<HTMLButtonElement>(null);
  const reduced = useRef(prefersReducedMotion());
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 220, damping: 22 });
  const springY = useSpring(y, { stiffness: 220, damping: 22 });
  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);

  return (
    <motion.button
      ref={(el) => {
        innerRef.current = el;
        if (typeof forwardedRef === "function") forwardedRef(el);
        else if (forwardedRef) forwardedRef.current = el;
      }}
      onMouseMove={(e) => {
        if (reduced.current || !innerRef.current) return;
        const rect = innerRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      onClick={onClick}
      style={{ rotateX, rotateY, transformPerspective: 1000, ...style }}
      className={`text-left ${className ?? ""}`}
    >
      {children}
    </motion.button>
  );
});

function NodeCard({
  project,
  label,
  onOpen,
  nodeRef,
  large,
}: {
  project: Project;
  label: string;
  onOpen: () => void;
  nodeRef?: React.Ref<HTMLDivElement>;
  large?: boolean;
}) {
  return (
    <div ref={nodeRef}>
      <TiltCard
        onClick={onOpen}
        className="group w-full rounded-2xl border overflow-hidden block"
        style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}
      >
        <div className="relative w-full" style={{ aspectRatio: "2/1" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
          {project.flagship && (
            <span
              className="absolute top-4 left-4 flex items-center gap-1 text-[9px] font-technical uppercase tracking-widest px-2 py-1 rounded-full border backdrop-blur-sm"
              style={{ color: "var(--accent)", borderColor: "var(--accent)", backgroundColor: "var(--bg-base)" }}
            >
              <Sparkles size={9} /> Flagship
            </span>
          )}
        </div>

        <div className={large ? "p-6 md:p-8" : "p-5"}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-technical text-[9px] tabular-nums" style={{ color: "var(--accent)" }}>
              {label}
            </span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--border-strong)" }} />
            <span
              className="font-technical text-[9px] uppercase tracking-widest truncate"
              style={{ color: "var(--text-quaternary)" }}
            >
              {project.category}
            </span>
          </div>
          <h3
            className={`font-black uppercase tracking-tight ${large ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          {large && (
            <p className="mt-3 text-sm md:text-base leading-relaxed max-w-xl hidden md:block" style={{ color: "var(--text-secondary)" }}>
              {project.details}
            </p>
          )}
        </div>
      </TiltCard>
    </div>
  );
}

function ProjectModal({ project, open, onClose }: { project: Project | null; open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg-base) 80%, transparent)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} preview`}
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border-t sm:border"
            style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-elevated)" }}
          >
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full border"
              style={{ backgroundColor: "var(--bg-chrome)", borderColor: "var(--border-default)", color: "var(--text-primary)" }}
            >
              <X size={16} />
            </button>

            <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ backgroundColor: "var(--bg-chrome)" }}>
              <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-cover object-top" priority />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, var(--bg-base) 0%, color-mix(in srgb, var(--bg-base) 10%, transparent) 35%, transparent 65%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <span className="font-technical text-[9px] text-blue-400 uppercase tracking-[0.3em] block mb-2">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.details}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-1 rounded border"
                    style={{ color: "var(--text-secondary)", backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-subtle)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all duration-300"
                  style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-6 border rounded-full font-bold uppercase tracking-widest text-xs hover:border-blue-400/50 transition-all duration-300"
                    style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                  >
                    <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function MyProjects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dotRefs = useRef<Array<HTMLDivElement | null>>([]);
  const stubRefs = useRef<Array<HTMLDivElement | null>>([]);

  const flagship = projects[0];
  const rest = projects.slice(1);

  // A single point of light travels the length of the spine continuously —
  // pure transform on one small element, cheap regardless of node count.
  useEffect(() => {
    if (prefersReducedMotion() || !pulseRef.current) return;
    const tween = gsap.fromTo(
      pulseRef.current,
      { top: "0%" },
      { top: "100%", duration: 5.5, repeat: -1, ease: "power1.inOut" }
    );
    return () => {
      tween.kill();
    };
  }, []);

  // Each node "powers on" once as it scrolls into range: the stub line
  // draws in from the spine, the dot snaps to full size, the card rises —
  // one ScrollTrigger per node, fires once. Dots also breathe gently at
  // rest so the map reads as live rather than static.
  useEffect(() => {
    if (prefersReducedMotion() || !mapRef.current) return;

    const ctx = gsap.context(() => {
      rest.forEach((_, i) => {
        const node = nodeRefs.current[i];
        const dot = dotRefs.current[i];
        const stub = stubRefs.current[i];
        if (!node) return;

        gsap.set(node, { opacity: 0, y: 24 });
        if (dot) gsap.set(dot, { scale: 0 });
        if (stub) gsap.set(stub, { scaleX: 0 });

        ScrollTrigger.create({
          trigger: node,
          start: "top 82%",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline();
            if (dot) tl.to(dot, { scale: 1, duration: 0.3, ease: "back.out(2.5)" });
            if (stub) tl.to(stub, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "<");
            tl.to(node, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "<0.1");
          },
        });
      });

      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        gsap.to(dot, { opacity: 0.45, duration: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: Math.random() * 1.5 });
      });
    }, mapRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section
      id="projects"
      className="py-24 md:py-64 border-t overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 md:mb-24">
          <span
            className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] md:tracking-[1em] uppercase block mb-6 md:mb-8"
            style={{ color: "var(--text-quaternary)" }}
          >
            PROJECT ARCHIVE
          </span>
          <h2
            className="text-[16vw] md:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            SELECTED
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>
              MISSIONS
            </span>
          </h2>
        </div>

        {/* root node — flagship, full width, where the circuit originates */}
        <div className="max-w-4xl mx-auto mb-2">
          <NodeCard project={flagship} label="N.01 // MAIN_SYSTEM" onOpen={() => setActiveIndex(0)} large />
        </div>

        <div className="flex justify-center py-2">
          <span className="font-technical text-[8px] uppercase tracking-[0.4em]" style={{ color: "var(--text-quaternary)" }}>
            branching network
          </span>
        </div>

        {/* the circuit map itself */}
        <div ref={mapRef} className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, var(--accent), var(--border-strong) 12%, var(--border-strong) 88%, transparent)", opacity: 0.35 }}
          >
            <div
              ref={pulseRef}
              className="absolute left-1/2 -translate-x-1/2 w-1 rounded-full"
              style={{ height: "10%", background: "linear-gradient(to bottom, transparent, var(--accent), transparent)", filter: "blur(1.5px)" }}
            />
          </div>

          {rest.map((project, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={project.title} className="relative py-8 lg:py-12">
                <div
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  className="absolute left-4 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10"
                  style={{ backgroundColor: "var(--accent)", boxShadow: "0 0 14px var(--accent)" }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 pl-12 lg:pl-0">
                  {isLeft ? (
                    <>
                      <div className="relative lg:pr-16">
                        <div
                          ref={(el) => {
                            stubRefs.current[i] = el;
                          }}
                          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-px origin-right"
                          style={{ width: "4rem", backgroundColor: "var(--border-strong)" }}
                        />
                        <NodeCard
                          project={project}
                          label={`N.0${i + 2}`}
                          onOpen={() => setActiveIndex(i + 1)}
                          nodeRef={(el) => {
                            nodeRefs.current[i] = el;
                          }}
                        />
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="relative lg:pl-16">
                        <div
                          ref={(el) => {
                            stubRefs.current[i] = el;
                          }}
                          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-px origin-left"
                          style={{ width: "4rem", backgroundColor: "var(--border-strong)" }}
                        />
                        <NodeCard
                          project={project}
                          label={`N.0${i + 2}`}
                          onOpen={() => setActiveIndex(i + 1)}
                          nodeRef={(el) => {
                            nodeRefs.current[i] = el;
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <a
            href="/projects"
            data-cursor="ALL"
            className="group relative inline-flex items-center gap-4 px-8 py-4 border rounded-full hover:border-blue-500/40 transition-colors"
            style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
          >
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>
              View Full Archive
            </span>
            <ArrowUpRight
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={16}
              style={{ color: "var(--text-primary)" }}
            />
          </a>
        </div>
      </div>

      <ProjectModal project={active} open={activeIndex !== null} onClose={() => setActiveIndex(null)} />
    </section>
  );
}
