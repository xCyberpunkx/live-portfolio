"use client";

import React, { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Sparkles, X } from "lucide-react";
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

/** Bento sizing — width only. Flagship is the one wide tile; everything
 *  else is a uniform square, so a 4-col grid always fills evenly with no
 *  trailing gaps (2 + six 1s = exactly two full rows of 4). */
function tileSpan(project: Project): string {
  return project.flagship ? "sm:col-span-2" : "sm:col-span-1";
}

/** Pointer-tracked 3D tilt — reacts to the cursor, resets on leave, does
 *  nothing on its own. Skipped under reduced motion. */
const TiltTile = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string; style?: React.CSSProperties; onClick: () => void }
>(function TiltTile({ children, className, style, onClick }, forwardedRef) {
  const innerRef = useRef<HTMLButtonElement>(null);
  const reduced = useRef(prefersReducedMotion());
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reduced.current || !innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.button
      ref={(el) => {
        innerRef.current = el;
        if (typeof forwardedRef === "function") forwardedRef(el);
        else if (forwardedRef) forwardedRef.current = el;
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformPerspective: 1000, ...style }}
      className={`text-left ${className ?? ""}`}
    >
      {children}
    </motion.button>
  );
});

function ProjectTile({
  project,
  onOpen,
  tileRef,
}: {
  project: Project;
  onOpen: () => void;
  tileRef: React.Ref<HTMLButtonElement>;
}) {
  const isLarge = project.flagship;

  return (
    <TiltTile
      ref={tileRef}
      onClick={onOpen}
      className={`group relative rounded-2xl border overflow-hidden ${tileSpan(project)}`}
      style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative w-full h-full" style={{ aspectRatio: "2/1" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        {project.flagship && (
          <span
            className="absolute top-4 left-4 z-10 flex items-center gap-1 text-[9px] font-technical uppercase tracking-widest px-2 py-1 rounded-full border backdrop-blur-sm"
            style={{ color: "var(--accent)", borderColor: "var(--accent)", backgroundColor: "var(--bg-base)" }}
          >
            <Sparkles size={9} /> Flagship
          </span>
        )}

        {/* solid banner — always-legible plate behind the title, not just
            a gradient fading into the image, so light screenshots (white
            dashboards, e-commerce pages) never wash the text out */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3 md:px-5 md:py-4 border-t"
          style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
        >
          <span className="font-technical text-[8px] uppercase tracking-[0.25em] block mb-1" style={{ color: "var(--accent)" }}>
            {project.category}
          </span>
          <h3
            className={`font-black uppercase tracking-tighter leading-none truncate ${isLarge ? "text-2xl md:text-4xl" : "text-lg md:text-xl"}`}
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
        </div>
      </div>
    </TiltTile>
  );
}

function ProjectModal({ project, open, onClose }: { project: Project; open: boolean; onClose: () => void }) {
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
      {open && (
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
              <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-cover" priority />
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Grid entrance: tiles rise in with a stagger once the section scrolls
  // into range. One ScrollTrigger, fires once.
  useEffect(() => {
    if (prefersReducedMotion() || !gridRef.current) return;
    const tiles = tileRefs.current.filter(Boolean) as HTMLButtonElement[];
    if (tiles.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(tiles, { opacity: 0, y: 24, scale: 0.97 });
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(tiles, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }),
      });
    });

    return () => ctx.revert();
  }, []);

  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section
      ref={sectionRef}
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

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-20"
        >
          {projects.map((project, i) => (
            <ProjectTile
              key={project.title}
              project={project}
              onOpen={() => setActiveIndex(i)}
              tileRef={(el) => {
                tileRefs.current[i] = el;
              }}
            />
          ))}
        </div>

        <div className="flex justify-center">
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

      {active && <ProjectModal project={active} open={activeIndex !== null} onClose={() => setActiveIndex(null)} />}
    </section>
  );
}
