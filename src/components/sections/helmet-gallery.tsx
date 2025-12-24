"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HelmetData {
  id: string;
  name: string;
  year: string;
  baseImg: string;
  hoverImg: string;
}

const helmetGallery: HelmetData[] = [
  {
    id: "season-2025",
    name: "Season",
    year: "2025",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-20.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b411c575b2f777125f6_In-helm-2025-Season-hover-21.webp",
  },
  {
    id: "discoball-2025",
    name: "Discoball",
    year: "2025",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b2259159e5170d2b923_In-helm-2025-Discoball-ba-22.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b24037a1e7681195c20_In-helm-2025-Discoball-ho-23.webp",
  },
  {
    id: "dark-glitter-2025",
    name: "Dark Glitter",
    year: "2025",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-20.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b411c575b2f777125f6_In-helm-2025-Season-hover-21.webp",
  },
  {
    id: "porcelain-2024",
    name: "Porcelain",
    year: "2024",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b2259159e5170d2b923_In-helm-2025-Discoball-ba-22.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b24037a1e7681195c20_In-helm-2025-Discoball-ho-23.webp",
  },
  {
    id: "gif-2024",
    name: "GIF",
    year: "2024",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-20.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b411c575b2f777125f6_In-helm-2025-Season-hover-21.webp",
  },
  {
    id: "japan-2024",
    name: "Japan",
    year: "2024",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b2259159e5170d2b923_In-helm-2025-Discoball-ba-22.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b24037a1e7681195c20_In-helm-2025-Discoball-ho-23.webp",
  },
  {
    id: "chrome-2023",
    name: "Chrome",
    year: "2023",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-20.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b411c575b2f777125f6_In-helm-2025-Season-hover-21.webp",
  },
  {
    id: "darkmode-2024",
    name: "Dark Mode",
    year: "2024",
    baseImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b2259159e5170d2b923_In-helm-2025-Discoball-ba-22.webp",
    hoverImg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68305b24037a1e7681195c20_In-helm-2025-Discoball-ho-23.webp",
  }
];

const HelmetCard = ({ helmet, index }: { helmet: HelmetData; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Replicate the staggered/offset layout pattern from screenshot
  const getAlignmentClass = () => {
    if (index % 4 === 0) return "mt-0";
    if (index % 4 === 1) return "mt-24";
    if (index % 4 === 2) return "mt-12";
    return "mt-32";
  };

  return (
    <div 
      className={`relative group ${getAlignmentClass()} transition-transform duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square w-full max-w-[340px] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#4A4D43]/20 flex items-center justify-center p-8 transition-all duration-500 hover:border-[#D9FF00]/50">
        {/* Subtle Inner Frame - Bottom Left Mask Effect mentioned in CSS */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-[#4A4D43]/10 m-2 rounded-xl" />
        
        <div className="relative w-full h-full">
          <Image
            src={helmet.baseImg}
            alt={`${helmet.name} base`}
            fill
            className={`object-contain transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            priority={index < 4}
          />
          <Image
            src={helmet.hoverImg}
            alt={`${helmet.name} detail`}
            fill
            className={`object-contain transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Label Overlay */}
        <div className="absolute bottom-4 right-6 text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="text-[10px] sm:text-[12px] font- technical text-[#F4F4F1] uppercase tracking-wider">
              {helmet.name}
            </span>
            <span className="text-[10px] sm:text-[12px] font-technical text-[#D9FF00] font-bold">
              {helmet.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HelmetGallery() {
  return (
    <section className="bg-[#0A0A0A] pt-24 pb-32 overflow-hidden relative">
      {/* Topographic Background Overlay */}
      <div className="absolute inset-0 topographic-bg opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68302ff5ff89a9a4afb8c19e_ln-home-helm-large-19.webp"
              alt="Lando Norris holding helmet"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="max-w-xl">
            <div className="mb-8">
              <h2 className="text-[12px] font-technical tracking-[0.2em] text-[#D9FF00] mb-4">
                Helmets
              </h2>
              <h3 className="text-6xl md:text-8xl font-black text-[#F4F4F1] leading-[0.85] mb-8">
                Hall of <br />Fame
              </h3>
              <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-md font-sans">
                From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.
              </p>
            </div>
          </div>
        </div>

        {/* Helmet Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-0">
          {helmetGallery.map((helmet, idx) => (
            <HelmetCard key={helmet.id} helmet={helmet} index={idx} />
          ))}
        </div>

        {/* View on Track CTA */}
        <div className="mt-40 flex justify-center">
          <a
            href="/on-track"
            className="group relative flex items-center justify-between bg-[#D9FF00] text-[#0A0A0A] font-technical font-bold text-sm px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
          >
            <span className="mr-6 uppercase tracking-widest">View On Track</span>
            <div className="bg-[#0A0A0A] text-[#D9FF00] rounded-full p-2 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </a>
        </div>
      </div>

      {/* Background Decorative Text Section Separator */}
      <div className="absolute bottom-[-10%] left-0 w-full select-none pointer-events-none overflow-hidden whitespace-nowrap opacity-[0.03]">
        <span className="text-[25vw] font-black italic text-white uppercase leading-none">
          LN4 REBEL
        </span>
      </div>
    </section>
  );
}