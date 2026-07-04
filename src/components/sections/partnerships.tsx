"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Ramdani', logo: '/clients/ramdani.png' },
  { name: 'Faouzi', logo: '/clients/faouzi.jpg' },
  { name: 'TekkoLab', logo: '/clients/tekkolab.png' },
  { name: 'Todays', logo: '/clients/todays.png' },
  { name: 'Maxconfort', logo: '/clients/maxconfort.webp' },
  { name: 'Damac', logo: '/clients/damac.webp' },
  { name: 'Ideal', logo: '/clients/ideal.png' },
  { name: 'KTM', logo: '/clients/ktm.webp' },
  { name: 'MyTech', logo: '/clients/mytech.png' },
  { name: 'Conforeal', logo: '/clients/conforeal-logo.png' },
  { name: 'Woodplay', logo: '/clients/woodplay.png' },
  { name: 'Didamed', logo: '/clients/didiamed.png' },
  { name: 'ProAgroSud', logo: '/clients/pas.jpg' },
  { name: 'BZ Boutique', logo: '/clients/bzboutique.png' },
  { name: 'Electromalik', logo: '/clients/electromalik.png' },
  { name: 'SnovaTech', logo: '/clients/snovatech.png' },
  { name: 'Bookingo', logo: '/clients/bookingo.png' },
  { name: 'SwissLink', logo: '/clients/swisslink.png' },
  { name: 'Groupe Gadi', logo: '/clients/groupegadi.png' },
  { name: 'Exact DZ', logo: '/clients/exact.png' },
  { name: 'Event SB Connect', logo: '/clients/sb-sevent.png' },
];

// Duplicate the list so the marquee loop is seamless
const marqueeLogos = [...partners, ...partners];

export default function Partnerships() {
  return (
    <section className="bg-zinc-950 py-32 md:py-64 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 px-6"
        >
          <span className="font-technical text-[10px] tracking-[1em] text-white/30 uppercase block mb-4">SELECTED_CLIENTS</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">TRUSTED_BY_BUSINESSES</h2>
        </motion.div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
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

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
