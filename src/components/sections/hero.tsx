"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { FaReddit, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";

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

/** True 3D wireframe cube — six bordered, transparent faces positioned with
 *  real translateZ/rotateX/rotateY on a preserve-3d parent (not the flat
 *  rotate+skew trick). Tumbles slowly and continuously via GSAP; the two
 *  axes finish at different times so it never repeats the same beat twice. */
function WireCube({
  size,
  className,
  style,
  speed = 70,
}: {
  size: number;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const half = size / 2;

  useEffect(() => {
    if (prefersReducedMotion() || !cubeRef.current) return;
    const tween = gsap.to(cubeRef.current, {
      rotateX: "+=360",
      rotateY: "+=520",
      duration: speed,
      repeat: -1,
      ease: "none",
    });
    return () => {
      tween.kill();
    };
  }, [speed]);

  const faceStyle: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    border: "1px solid var(--border-strong)",
    backgroundColor: "color-mix(in srgb, var(--accent) 4%, transparent)",
  };

  return (
    <div className={className} style={{ perspective: 1200, width: size, height: size, ...style }}>
      <div
        ref={cubeRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: "rotateX(-24deg) rotateY(35deg)",
        }}
      >
        <div style={{ ...faceStyle, transform: `translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </div>
    </div>
  );
}

/** A second, smaller 3D form for shape variety against the cube — a
 *  wireframe triangular pyramid (four faces via clip-path, angled with
 *  real 3D transforms), independent slow spin. */
function WirePyramid({ size, className, style, speed = 46 }: { size: number; className?: string; style?: React.CSSProperties; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    const tween = gsap.to(ref.current, {
      rotateY: "+=360",
      rotateX: "+=180",
      duration: speed,
      repeat: -1,
      ease: "none",
    });
    return () => {
      tween.kill();
    };
  }, [speed]);

  const half = size / 2;
  const faceStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    borderLeft: `${half}px solid transparent`,
    borderRight: `${half}px solid transparent`,
    borderBottom: `${size}px solid transparent`,
    borderBottomColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
    outline: "1px solid var(--border-strong)",
  };

  return (
    <div className={className} style={{ perspective: 900, width: size, height: size, ...style }}>
      <div ref={ref} style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transform: "rotateX(8deg)" }}>
        <div style={{ ...faceStyle, transform: `rotateY(0deg) rotateX(18deg) translateZ(${half * 0.5}px)`, transformOrigin: "bottom center" }} />
        <div style={{ ...faceStyle, transform: `rotateY(90deg) rotateX(18deg) translateZ(${half * 0.5}px)`, transformOrigin: "bottom center" }} />
        <div style={{ ...faceStyle, transform: `rotateY(180deg) rotateX(18deg) translateZ(${half * 0.5}px)`, transformOrigin: "bottom center" }} />
        <div style={{ ...faceStyle, transform: `rotateY(270deg) rotateX(18deg) translateZ(${half * 0.5}px)`, transformOrigin: "bottom center" }} />
      </div>
    </div>
  );
}

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const roleText = useScramble(ROLES);

  const layerRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const nearRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const farRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP entrance: every ".hero-shape" materializes with a stagger instead
  // of appearing painted-in — plus a continuous slow radar-sweep rotation
  // on the arc, and cursor-driven parallax across three depth layers.
  useEffect(() => {
    if (prefersReducedMotion() || !layerRef.current) return;

    const ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray<HTMLElement>(".hero-shape");
      gsap.set(shapes, { opacity: 0, scale: 0.85 });
      gsap.to(shapes, {
        opacity: (i, target) => Number(target.dataset.opacity ?? 0.3),
        scale: 1,
        duration: 1,
        stagger: 0.06,
        delay: 0.15,
        ease: "power3.out",
      });

      if (arcRef.current) {
        gsap.to(arcRef.current, { rotate: "+=360", duration: 90, repeat: -1, ease: "none" });
      }

      if (!isMobile) {
        const moveNear = gsap.quickTo(nearRef.current, "x", { duration: 0.8, ease: "power3.out" });
        const moveNearY = gsap.quickTo(nearRef.current, "y", { duration: 0.8, ease: "power3.out" });
        const moveMid = gsap.quickTo(midRef.current, "x", { duration: 1, ease: "power3.out" });
        const moveMidY = gsap.quickTo(midRef.current, "y", { duration: 1, ease: "power3.out" });
        const moveFar = gsap.quickTo(farRef.current, "x", { duration: 1.3, ease: "power3.out" });
        const moveFarY = gsap.quickTo(farRef.current, "y", { duration: 1.3, ease: "power3.out" });
        const moveSpot = gsap.quickTo(spotlightRef.current, "x", { duration: 0.5, ease: "power3.out" });
        const moveSpotY = gsap.quickTo(spotlightRef.current, "y", { duration: 0.5, ease: "power3.out" });
        const moveFloor = gsap.quickTo(floorRef.current, "x", { duration: 1.1, ease: "power3.out" });

        const onMouseMove = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          moveNear(nx * 34);
          moveNearY(ny * 34);
          moveMid(nx * 18);
          moveMidY(ny * 18);
          moveFar(nx * -10);
          moveFarY(ny * -10);
          // spotlight tracks the cursor directly, at full range, so it
          // genuinely feels like it's following the pointer
          moveSpot(nx * window.innerWidth * 0.5);
          moveSpotY(ny * window.innerHeight * 0.5);
          // floor grid only shifts sideways — it's masked to a fixed
          // vertical band, so vertical drift would tear the mask
          moveFloor(nx * 14);
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
      }
    }, layerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      className={`relative h-screen w-full overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div ref={layerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* edge vignette — static base layer, never animates */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 70% at 50% 35%, transparent 0%, var(--bg-base) 85%)",
          }}
        />

        {/* perspective floor grid — three layered passes (fine/mid/coarse)
            for real depth instead of one flat pattern, brighter than
            before, and wrapped in its own parallax layer so it drifts
            slightly with the cursor like everything else */}
        <div ref={floorRef} className="absolute inset-x-0 bottom-0 hidden md:block" style={{ height: "65%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              opacity: 0.24,
              transform: "perspective(900px) rotateX(58deg) scale(2.2)",
              transformOrigin: "50% 100%",
              maskImage: "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
              WebkitMaskImage: "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)",
              backgroundSize: "224px 224px",
              opacity: 0.38,
              transform: "perspective(900px) rotateX(58deg) scale(2.2)",
              transformOrigin: "50% 100%",
              maskImage: "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
              WebkitMaskImage: "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
              backgroundSize: "672px 672px",
              opacity: 0.2,
              transform: "perspective(900px) rotateX(58deg) scale(2.2)",
              transformOrigin: "50% 100%",
              maskImage: "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
              WebkitMaskImage: "radial-gradient(ellipse 50% 55% at 50% 100%, transparent 25%, black 72%)",
            }}
          />
          {/* horizon line — a bright hairline at the vanishing point where
              the grid recedes, the classic blueprint cue that sells the
              floor as a real receding plane rather than a flat pattern */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
              opacity: 0.5,
            }}
          />
        </div>

        {/* NEAR layer — biggest parallax swing */}
        <div ref={nearRef} className="absolute inset-0">
          <WireCube
            size={200}
            speed={70}
            className="hero-shape absolute hidden sm:block"
            style={{ bottom: "-6vmin", left: "-4vmin" }}
          />
          <div
            className="hero-shape absolute hidden sm:block"
            data-opacity="0.52"
            style={{ width: "5vmin", height: "5vmin", top: "18%", left: "9%", border: "1px solid var(--border-strong)", transform: "rotate(45deg)" }}
          />
        </div>

        {/* MID layer */}
        <div ref={midRef} className="absolute inset-0">
          <div
            className="hero-shape absolute hidden sm:block"
            data-opacity="0.38"
            style={{ width: "85vmin", height: "85vmin", top: "-25%", right: "-20%", border: "1.5px solid var(--border-strong)", transform: "rotate(-14deg) skewY(-2deg)" }}
          />
          <div className="hero-shape absolute hidden sm:block" data-opacity="0.62" style={{ width: "16px", height: "1px", background: "var(--border-strong)", top: "9%", right: "22%" }} />
          <div className="hero-shape absolute hidden sm:block" data-opacity="0.62" style={{ width: "1px", height: "16px", background: "var(--border-strong)", top: "9%", right: "22%" }} />

          <div
            ref={arcRef}
            className="hero-shape absolute hidden sm:block"
            data-opacity="0.45"
            style={{
              width: "46vmin",
              height: "46vmin",
              top: "-14vmin",
              right: "8vmin",
              borderRadius: "9999px",
              borderTop: "1.5px solid var(--border-strong)",
              borderRight: "1.5px solid var(--border-strong)",
              borderBottom: "1px solid transparent",
              borderLeft: "1px solid transparent",
              transform: "rotate(18deg)",
            }}
          />

          <WirePyramid
            size={110}
            speed={46}
            className="hero-shape absolute hidden md:block"
            style={{ top: "6%", right: "16%" }}
          />

          <div
            className="hero-shape absolute"
            data-opacity="0.4"
            style={{ width: "34vmin", height: "34vmin", bottom: "-10%", right: "-10%", border: "1px solid var(--border-default)", transform: "rotate(7deg)" }}
          />

          <div className="hero-shape absolute hidden sm:block" data-opacity="0.62" style={{ width: "14px", height: "1px", background: "var(--border-strong)", bottom: "17vmin", left: "8vmin", transform: "rotate(90deg)" }} />
          <div className="hero-shape absolute hidden sm:block" data-opacity="0.62" style={{ width: "14px", height: "1px", background: "var(--border-strong)", bottom: "9vmin", left: "1vmin" }} />

          <div
            className="hero-shape absolute hidden md:block"
            data-opacity="0.62"
            style={{
              width: "160px",
              height: "160px",
              top: "8%",
              left: "4%",
              backgroundImage: "radial-gradient(var(--border-default) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="hero-shape absolute hidden md:block" data-opacity="0.75" style={{ width: "18px", height: "1px", background: "var(--accent)", top: "12%", right: "10%" }} />
          <div className="hero-shape absolute hidden md:block" data-opacity="0.75" style={{ width: "1px", height: "18px", background: "var(--accent)", top: "12%", right: "10%" }} />

          <div
            className="hero-shape absolute"
            data-opacity="0.7"
            style={{ top: "18%", left: "-5%", width: "45%", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent), transparent)", transform: "rotate(-6deg)", boxShadow: "0 0 12px var(--accent)" }}
          />
          <div
            className="hero-shape absolute hidden sm:block"
            data-opacity="0.55"
            style={{ bottom: "24%", right: "-5%", width: "40%", height: "1.5px", background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)", transform: "rotate(5deg)" }}
          />
        </div>

        {/* FAR layer — smallest, opposite-direction parallax swing for depth */}
        <div ref={farRef} className="absolute inset-0">
          <div
            className="hero-shape absolute left-1/2 inset-y-0 hidden sm:block"
            data-opacity="0.42"
            style={{
              width: "1px",
              transform: "translateX(-50%)",
              background: "linear-gradient(to bottom, var(--border-strong) 0%, transparent 22%, transparent 78%, var(--border-strong) 100%)",
            }}
          />

          {/* extra density pass — more lines and marks scattered through
              the far layer, quiet parallax swing so they read as
              background texture rather than competing with the type */}
          <div
            className="hero-shape absolute hidden md:block"
            data-opacity="0.32"
            style={{ top: "62%", left: "6%", width: "22%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)", transform: "rotate(-9deg)" }}
          />
          <div
            className="hero-shape absolute hidden md:block"
            data-opacity="0.3"
            style={{ top: "30%", right: "6%", width: "1px", height: "18vmin", background: "linear-gradient(to bottom, transparent, var(--border-strong), transparent)" }}
          />
          <div
            className="hero-shape absolute hidden sm:block"
            data-opacity="0.36"
            style={{ width: "3.5vmin", height: "3.5vmin", bottom: "14%", left: "22%", border: "1px solid var(--border-strong)", transform: "rotate(20deg)" }}
          />
          <div
            className="hero-shape absolute hidden md:block"
            data-opacity="0.5"
            style={{ width: "10px", height: "1px", background: "var(--accent)", bottom: "30%", left: "16%" }}
          />
          <div
            className="hero-shape absolute hidden md:block"
            data-opacity="0.5"
            style={{ width: "1px", height: "10px", background: "var(--accent)", bottom: "30%", left: "16%" }}
          />
          <div
            className="hero-shape absolute hidden lg:block"
            data-opacity="0.24"
            style={{
              width: "120px",
              height: "120px",
              bottom: "6%",
              left: "34%",
              backgroundImage: "radial-gradient(var(--border-default) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        {/* interactive spotlight — a soft glow that follows the cursor,
            moved purely with transform (compositor-only, no layout or
            paint cost) via the same GSAP quickTo trackers as the
            parallax layers. Skipped on touch/reduced-motion. */}
        <div
          ref={spotlightRef}
          className="absolute pointer-events-none hidden lg:block"
          style={{
            width: "38vmin",
            height: "38vmin",
            top: "50%",
            left: "50%",
            marginTop: "-19vmin",
            marginLeft: "-19vmin",
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            opacity: 0.16,
            filter: "blur(4px)",
            willChange: "transform",
          }}
        />

        {/* sheen — static, never moves */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, transparent 35%, var(--text-primary) 50%, transparent 65%)", opacity: 0.04 }}
        />

        {/* focus glow — static base layer directly behind the name */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, var(--accent) 0%, transparent 75%)", opacity: 0.07 }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 38% 32% at 50% 47%, var(--accent) 0%, transparent 65%)", opacity: 0.11 }} />
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
          <span className="font-technical text-[9px] uppercase tracking-[0.3em]" style={{ color: "var(--text-secondary)" }}>
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
          <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--text-tertiary)" }}>
            ZINE_EDDINE
          </span>
        </motion.h1>

        <div className="mt-10 h-6 flex items-center justify-center">
          <span className="font-technical text-[11px] md:text-xs uppercase tracking-[0.5em] tabular-nums" style={{ color: "var(--accent)" }}>
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
        <div className="flex flex-col gap-1 font-technical text-[8px] uppercase tracking-widest" style={{ color: "var(--text-quaternary)" }}>
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
        <span className="font-technical text-[8px] uppercase tracking-[0.4em] [writing-mode:vertical-lr]" style={{ color: "var(--text-primary)" }}>
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
