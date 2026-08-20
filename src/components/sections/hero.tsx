"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { FaReddit, FaDiscord, FaWhatsapp } from "react-icons/fa6";

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
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const roleText = useScramble(ROLES);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`relative h-screen w-full overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* STATIC ARCHITECTURAL BACKGROUND
          Everything below is painted once and never animates. Depth comes
          from layered opacity + one-time CSS transforms, not from a render
          loop, so this costs nothing on low-end hardware. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* edge vignette — keeps the frame contained, darkens the corners */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 35%, transparent 0%, var(--bg-base) 85%)",
          }}
        />

        {/* perspective floor grid — desktop/tablet only, reads as an
            architectural plane receding toward a horizon behind the name.
            Two static passes (minor + major) give it real blueprint depth
            without adding any extra elements to animate. */}
        <div
          className="absolute inset-x-0 bottom-0 hidden md:block"
          style={{
            height: "65%",
            backgroundImage:
              "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.14,
            transform: "perspective(900px) rotateX(58deg) scale(2.2)",
            transformOrigin: "50% 100%",
            maskImage:
              "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 hidden md:block"
          style={{
            height: "65%",
            backgroundImage:
              "linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)",
            backgroundSize: "224px 224px",
            opacity: 0.22,
            transform: "perspective(900px) rotateX(58deg) scale(2.2)",
            transformOrigin: "50% 100%",
            maskImage:
              "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
          }}
        />

        {/* oversized frame, bled off the top-right corner — desktop/tablet */}
        <div
          className="absolute hidden sm:block"
          style={{
            width: "85vmin",
            height: "85vmin",
            top: "-25%",
            right: "-20%",
            border: "1px solid var(--border-strong)",
            opacity: 0.22,
            transform: "rotate(-14deg) skewY(-2deg)",
          }}
        />

        {/* corner ticks on the main frame — echoes the monolith's
            annotation marks so the two big elements read as one system */}
        <div className="absolute hidden sm:block" style={{ width: "16px", height: "1px", background: "var(--border-strong)", opacity: 0.4, top: "9%", right: "22%" }} />
        <div className="absolute hidden sm:block" style={{ width: "1px", height: "16px", background: "var(--border-strong)", opacity: 0.4, top: "9%", right: "22%" }} />

        {/* arc — a single static partial ring, the one curved shape in
            an otherwise all-rectilinear composition; reads like a
            compass or measurement sweep. Desktop/tablet only. */}
        <div
          className="absolute hidden sm:block"
          style={{
            width: "46vmin",
            height: "46vmin",
            top: "-14vmin",
            right: "8vmin",
            borderRadius: "9999px",
            borderTop: "1px solid var(--border-strong)",
            borderRight: "1px solid var(--border-strong)",
            borderBottom: "1px solid transparent",
            borderLeft: "1px solid transparent",
            opacity: 0.28,
            transform: "rotate(18deg)",
          }}
        />

        {/* diamond accent — a small rotated square for shape variety
            against the squares, cube and arc; sits beside the dot
            texture. Desktop/tablet only. */}
        <div
          className="absolute hidden sm:block"
          style={{
            width: "5vmin",
            height: "5vmin",
            top: "18%",
            left: "9%",
            border: "1px solid var(--border-strong)",
            opacity: 0.34,
            transform: "rotate(45deg)",
          }}
        />

        {/* small plane — visible at every breakpoint, including mobile,
            so phones still get one quiet perspective element even
            though the bigger frame and monolith are desktop/tablet only */}
        <div
          className="absolute"
          style={{
            width: "34vmin",
            height: "34vmin",
            bottom: "-10%",
            right: "-10%",
            border: "1px solid var(--border-default)",
            opacity: 0.24,
            transform: "rotate(7deg)",
          }}
        />

        {/* wireframe monolith — the one deliberately bold "signature"
            element in the composition: a static isometric cube built
            from three bordered, transparent-fill faces (a well-known
            pure-CSS trick: rotate + skewX + scaleY per face, no 3D
            engine involved). Bleeds off the bottom-left corner so it
            frames the content without ever crossing it. Desktop/tablet
            only. */}
        <div
          className="absolute hidden sm:block"
          style={{ width: "26vmin", height: "26vmin", bottom: "-8vmin", left: "-6vmin", opacity: 0.32 }}
        >
          <div className="absolute inset-0" style={{ border: "1px solid var(--border-strong)", transform: "rotate(210deg) skewX(-30deg) scaleY(0.864)" }} />
          <div className="absolute inset-0" style={{ border: "1px solid var(--border-strong)", transform: "rotate(-30deg) skewX(-30deg) scaleY(0.864)" }} />
          <div className="absolute inset-0" style={{ border: "1px solid var(--border-strong)", transform: "rotate(90deg) skewX(-30deg) scaleY(0.864)" }} />
        </div>

        {/* dimension ticks — two short marks near the monolith, a
            small blueprint-annotation detail */}
        <div
          className="absolute hidden sm:block"
          style={{ width: "14px", height: "1px", background: "var(--border-strong)", opacity: 0.4, bottom: "17vmin", left: "8vmin", transform: "rotate(90deg)" }}
        />
        <div
          className="absolute hidden sm:block"
          style={{ width: "14px", height: "1px", background: "var(--border-strong)", opacity: 0.4, bottom: "9vmin", left: "1vmin" }}
        />

        {/* dot texture — a small patch of fine dots tucked into a
            corner the content never reaches, for material variety
            against the linear grid */}
        <div
          className="absolute hidden md:block"
          style={{
            width: "160px",
            height: "160px",
            top: "8%",
            left: "4%",
            backgroundImage: "radial-gradient(var(--border-default) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            opacity: 0.4,
          }}
        />

        {/* crosshair — a small reticle mark near the arc, the last
            technical HUD detail; two short overlapping lines, nothing
            more. Desktop/tablet only. */}
        <div className="absolute hidden md:block" style={{ width: "18px", height: "1px", background: "var(--accent)", opacity: 0.5, top: "12%", right: "10%" }} />
        <div className="absolute hidden md:block" style={{ width: "1px", height: "18px", background: "var(--accent)", opacity: 0.5, top: "12%", right: "10%" }} />

        {/* accent line — thin, off-center, never crosses the typography */}
        <div
          className="absolute"
          style={{
            top: "18%",
            left: "-5%",
            width: "45%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
            opacity: 0.42,
            transform: "rotate(-6deg)",
          }}
        />

        {/* secondary line — desktop/tablet only */}
        <div
          className="absolute hidden sm:block"
          style={{
            bottom: "24%",
            right: "-5%",
            width: "40%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)",
            opacity: 0.3,
            transform: "rotate(5deg)",
          }}
        />

        {/* meridian — a vertical technical axis through the center,
            faded out through the middle band so it never touches the
            name; only visible as a hairline above the badge and below
            the CTAs, reinforcing the blueprint concept */}
        <div
          className="absolute left-1/2 inset-y-0 hidden sm:block"
          style={{
            width: "1px",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, var(--border-strong) 0%, transparent 22%, transparent 78%, var(--border-strong) 100%)",
            opacity: 0.26,
          }}
        />

        {/* sheen — a single, static diagonal light wash for a premium,
            glass-like quality; painted once, never moves */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, var(--text-primary) 50%, transparent 65%)",
            opacity: 0.04,
          }}
        />

        {/* focus glow — layered radial wash directly behind the name
            (tight inner glow + broad outer halo), keeps the center clean
            and pulls the eye there first */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 50%, var(--accent) 0%, transparent 75%)",
            opacity: 0.07,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 38% 32% at 50% 47%, var(--accent) 0%, transparent 65%)",
            opacity: 0.11,
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm md:backdrop-blur-md mb-8"
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
          className="text-[clamp(2.75rem,13vw,7rem)] font-black leading-[0.8] uppercase tracking-tighter"
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
