"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { FaReddit, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SOCIALS = [
  { icon: Github, href: "https://github.com/xCyberpunkx" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/zine-eddine-rouabah/" },
  { icon: FaReddit, href: "https://www.reddit.com/user/No_Investigator4261/" },
  { icon: FaDiscord, href: "https://discord.com/users/557172887799463937" },
  { icon: FaWhatsapp, href: "https://wa.me/213540166358" },
  { icon: Mail, href: "mailto:rouabah.zineedinee@gmail.com" },
];

const ROLES = ["SOFTWARE ENGINEER", "SYSTEM ARCHITECT", "FULL-STACK BUILDER"];
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_-/#01";
const RING_COUNT = 7;

function useScramble(words: string[], intervalMs = 2600) {
  const [display, setDisplay] = useState(words[0]);
  const indexRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const runScramble = (target: string) => {
      const steps = 14;
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const revealCount = Math.floor((frame / steps) * target.length);
        let out = "";
        for (let i = 0; i < target.length; i++) {
          if (i < revealCount || target[i] === " ") out += target[i];
          else out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        setDisplay(out);
        if (frame >= steps) clearInterval(timer);
      }, 28);
      return timer;
    };

    let scrambleTimer: ReturnType<typeof setInterval>;
    const cycle = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      scrambleTimer = runScramble(words[indexRef.current]);
    }, intervalMs);

    return () => {
      clearInterval(cycle);
      clearInterval(scrambleTimer);
    };
  }, [words, intervalMs]);

  return display;
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tunnelRef = useRef<HTMLDivElement>(null);
  const ringRefs = useRef<Array<HTMLDivElement | null>>([]);
  const headlineRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const roleText = useScramble(ROLES);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { damping: 30, stiffness: 80 });
  const rotateY = useSpring(mouseX, { damping: 30, stiffness: 80 });

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (isMobile) return;
      const { innerWidth, innerHeight } = window;
      const px = (e.clientX / innerWidth - 0.5) * 2;
      const py = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(px * -8);
      mouseY.set(py * 8);
    },
    [isMobile, mouseX, mouseY]
  );

  useEffect(() => {
    if (!mounted) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rings = ringRefs.current.filter(Boolean) as HTMLDivElement[];
    if (reduceMotion || rings.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(rings, {
        z: (i: number) => -200 - i * 220,
        opacity: (i: number) => 1 - i * 0.06,
      });

      if (!isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        rings.forEach((ring, i) => {
          tl.to(ring, { z: 1400 - i * 60, opacity: 0, ease: "none" }, 0);
        });
        tl.to(headlineRef.current, { opacity: 0, scale: 0.85, y: -40, ease: "none" }, 0.05);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted, isMobile]);

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className={`relative h-screen w-full overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay pointer-events-none z-[5]">
        <filter id="heroGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroGrain)" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center z-0" style={{ perspective: "800px" }}>
        <motion.div
          ref={tunnelRef}
          style={{
            transformStyle: "preserve-3d",
            rotateX: isMobile ? 0 : rotateX,
            rotateY: isMobile ? 0 : rotateY,
          }}
          className="relative w-[70vmin] h-[70vmin]"
        >
          {Array.from({ length: RING_COUNT }).map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                ringRefs.current[i] = el;
              }}
              className="absolute inset-0 border-2 rounded-2xl"
              style={{
                borderColor: i === RING_COUNT - 1 ? "var(--accent)" : "var(--border-strong)",
                boxShadow: i === RING_COUNT - 1 ? "var(--shadow-elevated)" : "none",
                transform: `translateZ(${-200 - i * 220}px)`,
              }}
            />
          ))}
        </motion.div>
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "radial-gradient(circle at center, transparent 0%, var(--bg-base) 92%)" }}
        />
      </div>

      <div ref={headlineRef} className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md mb-8"
          style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--bg-surface)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
          <span
            className="font-technical text-[9px] uppercase tracking-[0.3em]"
            style={{ color: "var(--text-secondary)" }}
          >
            NODE_DZ // ONLINE
          </span>
        </motion.div>

        <motion.h1
          initial={isMobile ? { opacity: 1, filter: "none" } : { opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-[0.8] uppercase tracking-tighter"
          style={{ color: "var(--text-primary)" }}
        >
          ROUABAH<br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-tertiary)" }}
          >
            ZINE_EDDINE
          </span>
        </motion.h1>

        <div className="mt-10 h-6 flex items-center justify-center">
          <span
            className="font-technical text-[11px] md:text-xs uppercase tracking-[0.5em] tabular-nums"
            style={{ color: "var(--accent)" }}
          >
            {roleText}
          </span>
        </div>

        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="/projects"
              data-cursor="VIEW"
              className="flex items-center gap-3 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all border-2 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-base)",
                borderColor: "var(--border-strong)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              data-cursor="SEND"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 transition-all font-bold uppercase tracking-widest text-xs hover:opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0 : 1.2 + i * 0.1 }}
                whileHover={isMobile ? {} : { y: -5 }}
                className="transition-all p-2 hover:opacity-100"
                style={{ color: "var(--text-tertiary)" }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute left-10 bottom-10 z-10 hidden md:block">
        <div
          className="flex flex-col gap-1 font-technical text-[8px] uppercase tracking-widest"
          style={{ color: "var(--text-quaternary)" }}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--border-default)" }} />
            <span>LOC: 36.4701° N, 2.8288° E</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--border-default)" }} />
            <span>REL: STABLE_BUILD_2026</span>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 z-10 flex flex-col items-center gap-3 opacity-30">
        <ArrowDown size={14} style={{ color: "var(--text-primary)" }} className="animate-bounce" />
        <span
          className="font-technical text-[8px] uppercase tracking-[0.4em] [writing-mode:vertical-lr]"
          style={{ color: "var(--text-primary)" }}
        >
          SCROLL
        </span>
      </div>

      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l" style={{ borderColor: "var(--border-strong)" }} />
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r" style={{ borderColor: "var(--border-strong)" }} />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l" style={{ borderColor: "var(--border-strong)" }} />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r" style={{ borderColor: "var(--border-strong)" }} />
    </section>
  );
};

export default HeroSection;
