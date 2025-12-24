"use client";

import React from 'react';
import Image from 'next/image';

/**
 * ImpactMarquee Component
 */
const ImpactMarquee: React.FC = () => {
  const marqueeImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section className="bg-[#282C20] pt-[120px] pb-0 overflow-hidden select-none">
      {/* Top Content: Logo and Eyebrow */}
      <div className="container mx-auto px-[4vw]">
        <div className="flex flex-col items-start gap-4 mb-20">
          <div className="text-4xl font-black text-off-white tracking-tighter">
            ZR
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F4F4F1] opacity-60 font-medium">
              Message from Zine Eddine
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9FF00] font-bold">
                Software Engineer & Network Associate
              </span>
              <div className="h-[1px] w-8 bg-[#D9FF00] align-middle" />
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="max-w-[1200px] mb-24">
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] text-[#F4F4F1] uppercase font-black tracking-tighter">
            <span className="inline-block relative">
              Building
              <span className="absolute -bottom-1 left-0 w-full h-[0.05em] bg-[#D9FF00] transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
            </span> scalable systems and <span className="text-[#D9FF00]">resilient</span> networks that power the digital world. Defining a <span className="italic">legacy</span> through engineering precision.
          </h2>
        </div>
      </div>

      {/* Horizontal Image Marquee */}
      <div className="relative w-full overflow-hidden py-10">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {/* First set of images */}
          {marqueeImages.map((src, idx) => (
            <div 
              key={`marquee-1-${idx}`} 
              className="relative flex-none w-[45vw] md:w-[30vw] aspect-[16/10] overflow-hidden rounded-[12px]"
            >
              <Image 
                src={src} 
                alt={`Portfolio visual ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {marqueeImages.map((src, idx) => (
            <div 
              key={`marquee-2-${idx}`} 
              className="relative flex-none w-[45vw] md:w-[30vw] aspect-[16/10] overflow-hidden rounded-[12px]"
            >
              <Image 
                src={src} 
                alt={`Portfolio visual ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ImpactMarquee;