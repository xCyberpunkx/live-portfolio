thought
import React from 'react';
import Image from 'next/image';

const partnerships = [
  {
    name: 'Ralph Lauren',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/67d4349e00e6b7904f3746a3_ln4-ln4-collab-logo-ralph-5.svg',
    width: 140,
    height: 40,
  },
  {
    name: 'PlayStation',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/67efc88cf1d78e3e7624d5e3_ln4-ln4-collab-logo-ps4-7.svg',
    width: 50,
    height: 40,
  },
  {
    name: 'Quadrant',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/67efc88c532235956e5d267a_ln4-ln4-collab-logo-quadr-8.svg',
    width: 120,
    height: 30,
  },
  {
    name: 'Tumi',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/67efc88cb3373daa7ba240d6_ln4-ln4-collab-logo-tumi-9.svg',
    width: 100,
    height: 30,
  },
  {
    name: 'Hilton',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/67efc88c1939bc87931c2599_ln4-ln4-collab-logo-hilto-10.svg',
    width: 90,
    height: 35,
  },
  {
    name: 'Uber',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/68d294a99b218abd71dc0764_ln4-ln4-collab-logo-uber-11.svg',
    width: 80,
    height: 30,
  },
  {
    name: 'Bell Helmets',
    // Fallback if not in section assets - typically white/grey logos on dark
    logo: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88c4b18bd58dce66b72_ln4-ln4-collab-logo-bell.svg',
    width: 100,
    height: 40,
  },
  {
    name: 'Google',
    logo: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88cf7d903930b2e8d9e_ln4-ln4-collab-logo-google.svg',
    width: 110,
    height: 35,
  }
];

export default function Partnerships() {
  return (
    <section className="bg-[#282C20] py-[100px] md:py-[150px] overflow-hidden">
      <div className="container mx-auto px-[4vw]">
        <div className="flex flex-col mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#4A4D43]"></div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A4D43]">
              Collaboration
            </span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.85] font-black uppercase m-0 p-0 text-[#F4F4F1]">
              partners
            </h2>
            <h2 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.85] font-black uppercase m-0 p-0 text-[#F4F4F1] ml-[5vw] md:ml-[10vw]">
              &campaigns
            </h2>
          </div>
          <p className="max-w-[480px] mt-8 text-[#A1A1AA] font-sans text-lg leading-relaxed">
            Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.
          </p>
        </div>

        {/* Scrolling Logo Cloud */}
        <div className="relative mt-20 flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-10 items-center">
            {[...partnerships, ...partnerships].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center mx-12 md:mx-20 transition-opacity duration-300 hover:opacity-100 opacity-60 grayscale hover:grayscale-0"
              >
                <div 
                  className="relative flex items-center justify-center"
                  style={{ width: partner.width, height: partner.height }}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Marquee Gradient Shadows for smoothness */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#282C20] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#282C20] to-transparent z-10" />
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
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}