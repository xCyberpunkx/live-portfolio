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

  // Ambient depth + scroll-scrubbed flythrough
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
      className={`relative h-screen w-full bg-black overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Grain for material texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay pointer-events-none z-[5]">
        <filter id="heroGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroGrain)" />
      </svg>

      {/* Depth tunnel */}
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
                borderColor: i === RING_COUNT - 1 ? "rgba(59,130,246,0.9)" : "rgba(255,255,255,0.22)",
                boxShadow: i === RING_COUNT - 1 ? "0 0 40px rgba(59,130,246,0.5)" : "0 0 20px rgba(255,255,255,0.05)",
                transform: `translateZ(${-200 - i * 220}px)`,
              }}
            />
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_92%)] z-[1]" />
      </div>

      {/* Content */}
      <div ref={headlineRef} className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-technical text-[9px] text-white/80 uppercase tracking-[0.3em]">NODE_DZ // ONLINE</span>
        </motion.div>

        <motion.h1
          initial={isMobile ? { opacity: 1, filter: "none" } : { opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-[0.8] text-white uppercase tracking-tighter"
        >
          ROUABAH<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>ZINE_EDDINE</span>
        </motion.h1>

        <div className="mt-10 h-6 flex items-center justify-center">
          <span className="font-technical text-[11px] md:text-xs text-blue-400 uppercase tracking-[0.5em] tabular-nums">
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
              className="flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all shadow-[0_0_60px_rgba(59,130,246,0.35)] border-2 border-white/20 hover:border-white hover:scale-105 active:scale-95"
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
              className="flex items-center gap-2 text-white/60 hover:text-white transition-all font-bold uppercase tracking-widest text-xs"
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
                whileHover={isMobile ? {} : { y: -5, color: "#3b82f6" }}
                className="text-white/40 hover:text-white transition-all p-2"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute left-10 bottom-10 z-10 hidden md:block">
        <div className="flex flex-col gap-1 font-technical text-[8px] text-white/20 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/10" />
            <span>LOC: 36.4701° N, 2.8288° E</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/10" />
            <span>REL: STABLE_BUILD_2026</span>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 z-10 flex flex-col items-center gap-3 opacity-30">
        <ArrowDown size={14} className="text-white animate-bounce" />
        <span className="font-technical text-[8px] uppercase tracking-[0.4em] [writing-mode:vertical-lr]">SCROLL</span>
      </div>

      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/20" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
    </section>
  );
};

export default HeroSection;
