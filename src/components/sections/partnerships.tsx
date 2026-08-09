"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";

const partners = [
  { name: "Ramdani", logo: "/clients/ramdani.png" },
  { name: "Faouzi", logo: "/clients/faouzi.jpg" },
  { name: "TekkoLab", logo: "/clients/tekkolab.png" },
  { name: "Todays", logo: "/clients/todays.png" },
  { name: "Maxconfort", logo: "/clients/maxconfort.webp" },
  { name: "Damac", logo: "/clients/damac.webp" },
  { name: "Ideal", logo: "/clients/ideal.png" },
  { name: "KTM", logo: "/clients/ktm.webp" },
  { name: "MyTech", logo: "/clients/mytech.png" },
  { name: "Conforeal", logo: "/clients/conforeal-logo.png" },
  { name: "Woodplay", logo: "/clients/woodplay.png" },
  { name: "Didamed", logo: "/clients/didiamed.png" },
  { name: "ProAgroSud", logo: "/clients/pas.jpg" },
  { name: "BZ Boutique", logo: "/clients/bzboutique.png" },
  { name: "Electromalik", logo: "/clients/electromalik.png" },
  { name: "SnovaTech", logo: "/clients/snovatech.png" },
  { name: "Bookingo", logo: "/clients/bookingo.png" },
  { name: "SwissLink", logo: "/clients/swisslink.png" },
  { name: "Groupe Gadi", logo: "/clients/groupegadi.png" },
  { name: "Exact DZ", logo: "/clients/exact.png" },
  { name: "Event SB Connect", logo: "/clients/sb-sevent.png" },
];

// Duplicate the list so the marquee loop is seamless
const marqueeLogos = [...partners, ...partners];

const BASE_DURATION = 35; // seconds per loop at rest — matches the original CSS timing
const MAX_TIMESCALE = 6;

export default function Partnerships() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Constant drift at rest (same feel as the old CSS keyframe loop), but
  // scroll velocity temporarily speeds the marquee up — flick the page and
  // the strip visibly reacts before settling back to its resting pace.
  // Kept as GSAP driving a transform (not a state re-render) so the speed
  // change costs nothing beyond the tween's own timeScale.
  useEffect(() => {
    if (prefersReducedMotion() || !trackRef.current || !sectionRef.current) return;

    const track = trackRef.current;
    let targetScale = 1;
    let resetTimer: ReturnType<typeof setTimeout>;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: BASE_DURATION,
      ease: "none",
      repeat: -1,
    });

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        targetScale = gsap.utils.clamp(1, MAX_TIMESCALE, 1 + velocity / 900);
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          targetScale = 1;
        }, 250);
      },
    });

    const tick = () => {
      const current = tween.timeScale();
      tween.timeScale(current + (targetScale - current) * 0.08);
    };
    gsap.ticker.add(tick);

    const pause = () => tween.pause();
    const resume = () => tween.play();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      gsap.ticker.remove(tick);
      clearTimeout(resetTimer);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      st.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-64 border-t relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle_at_center, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 px-6"
        >
          <span className="font-technical text-[10px] tracking-[1em] uppercase block mb-4" style={{ color: "var(--text-quaternary)" }}>SELECTED_CLIENTS</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>TRUSTED_BY_BUSINESSES</h2>
        </motion.div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div ref={trackRef} className="flex w-max will-change-transform">
            {marqueeLogos.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="relative w-64 md:w-80 h-28 md:h-36 mx-8 md:mx-14 flex items-center justify-center shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
