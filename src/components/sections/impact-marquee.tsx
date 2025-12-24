import React from 'react';
import Image from 'next/image';

/**
 * ImpactMarquee Component
 * 
 * Clones the horizontal scrolling impact section of Lando Norris's website.
 * Features:
 * - Dark green background (Deep Olive: rgb(40, 44, 32))
 * - Signature SVG and "Message from Lando" eyebrow
 * - High-impact statement with bold highlights
 * - Infinite horizontal marquee of racing and lifestyle images
 */
const ImpactMarquee: React.FC = () => {
  const marqueeImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68302baa04b14a1ca33c0b25_ln-home-horiz-1-6.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68302baab12220595c8223b3_ln-home-horiz-2-7.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68302babcf12f0111d96322e_ln-home-horiz-3-8.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68302baa798e2cc6e02ac38a_ln-home-horiz-4-9.webp"
  ];

  return (
    <section className="bg-[#282C20] pt-[120px] pb-0 overflow-hidden select-none">
      {/* Top Content: Signature and Eyebrow */}
      <div className="container mx-auto px-[4vw]">
        <div className="flex flex-col items-start gap-4 mb-20">
          <div className="w-[180px] md:w-[240px]">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/67cecea4e9d311047dcb51e5_ln4-hw-signature2-2.svg" 
              alt="Lando's signature" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F4F4F1] opacity-60 font-medium">
              Message from lando
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9FF00] font-bold">
                Mclaren f1 since 2019
              </span>
              <div className="h-[1px] w-8 bg-[#D9FF00] align-middle" />
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="max-w-[1200px] mb-24">
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] text-[#F4F4F1] uppercase font-black tracking-tighter">
            <span className="inline-block relative">
              Redefining
              <span className="absolute -bottom-1 left-0 w-full h-[0.05em] bg-[#D9FF00] transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
            </span> limits, fighting for <span className="text-[#D9FF00]">wins</span>, bringing it all in all ways. Defining a <span className="italic">legacy</span> in Formula 1 on and off the track.
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
                alt={`Lando Norris lifestyle ${idx + 1}`}
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
                alt={`Lando Norris lifestyle ${idx + 1}`}
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