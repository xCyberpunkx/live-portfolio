import React from 'react';
import Image from 'next/image';

/**
 * ChampionCollection Section component for Lando Norris website.
 * Features a collage-style layout with fan merchandise, gold texture signatures,
 * and a "Visit The Store" call-to-action in neon lime.
 */
const ChampionCollection = () => {
  return (
    <section className="relative w-full bg-[#282C20] py-24 md:py-48 overflow-hidden">
      <div className="container mx-auto px-[4vw]">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 relative">
          
          {/* Header & Description Area */}
          <div className="col-span-12 md:col-span-5 z-10">
            <div className="flex flex-col gap-6 md:max-w-md">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#F4F4F1] leading-[0.9] uppercase">
                World Drivers&apos; Champion
                <br />
                <span className="text-4xl md:text-6xl lg:text-7xl block transition-all duration-300">
                  Collection
                </span>
              </h2>
              
              <p className="text-[#A1A1AA] font-mono text-sm md:text-base leading-relaxed tracking-tight max-w-sm">
                Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it, treasure it forever.
              </p>

              {/* Visit Store Button Primary */}
              <div className="mt-8">
                <a
                  href="https://store.landonorris.com/"
                  className="inline-flex items-center gap-2 bg-[#D9FF00] hover:bg-[#c4e600] text-[#0A0A0A] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-transform active:scale-95 btn-primary-hover"
                >
                  Visit The Store
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="rotate-[-45deg]"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Collage Images Area */}
          <div className="col-span-12 md:col-span-7 relative min-h-[400px] md:min-h-[600px] mt-12 md:mt-0">
            
            {/* Main Lifestyle Image - Center leaning right */}
            <div className="absolute top-0 right-0 w-[85%] md:w-[70%] z-0 rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/68da85d632bfefc552a0faac_Britain-25_20_1_-10.webp"
                alt="Lando Norris Champion Hoodie Collection"
                width={800}
                height={1000}
                className="w-full h-full object-cover grayscale-[0.2]"
                priority
              />
            </div>

            {/* Floating Product Image 1 - Large White Tee Center */}
            <div className="absolute top-[40%] left-[10%] md:left-[5%] w-[45%] md:w-[35%] z-20 shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#f0f0f0] p-4 rounded-lg transform shadow-xl">
                <img 
                  src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5824cc4245e1e6cf501_ln4-menu-img-5.webp" 
                  alt="Special Edition White Tee"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Gold Texture Asset - Background Element */}
            <div className="absolute bottom-[5%] right-0 w-[60%] md:w-[45%] z-10 mix-blend-screen opacity-90 pointer-events-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-600 animate-pulse opacity-20" />
                <div className="flex items-center justify-center h-full bg-[#1a1c14]/80 text-[#D9FF00] font-black text-6xl md:text-8xl tracking-tighter italic">
                  LN1
                </div>
              </div>
            </div>

            {/* Floating Product Image 2 - Small Black Tee Left */}
            <div className="absolute top-[20%] -left-[5%] md:-left-[15%] w-[35%] md:w-[25%] z-30 hidden md:block group">
              <div className="bg-[#0A0A0A] p-2 border border-[#4A4D43] transition-all duration-500 group-hover:rotate-3 shadow-2xl">
                <img 
                  src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5835c0649927438ae19_ln4-menu-img-1.webp" 
                  alt="Black World Champion Tee"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Mobile Floaties - Ensuring they show up nicely on smaller screens */}
            <div className="absolute bottom-[-10%] left-0 w-[120px] h-[120px] md:hidden z-30">
               <div className="bg-[#0A0A0A] p-1 border border-[#4A4D43] rotate-[-5deg]">
                 <img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5835c0649927438ae19_ln4-menu-img-1.webp" alt="merch" className="w-full h-auto" />
               </div>
            </div>

          </div>
        </div>

        {/* Bottom Technical Label for Section Context */}
        <div className="mt-24 md:mt-32 border-t border-[#4A4D43] pt-6 flex flex-wrap justify-between items-center gap-4">
           <div className="flex gap-4 items-center">
             <span className="font-technical text-xs text-[#A1A1AA] tracking-[0.2em]">SEASON 2025</span>
             <span className="w-8 h-[1px] bg-[#4A4D43]"></span>
             <span className="font-technical text-xs text-[#D9FF00] tracking-[0.2em]">SPECIAL RELEASE</span>
           </div>
           
           <div className="flex gap-8 overflow-hidden h-8 items-center pointer-events-none opacity-40">
              <span className="font-black italic text-xl tracking-widest text-[#F4F4F1]">CHAMPION</span>
              <span className="font-black italic text-xl tracking-widest text-[#F4F4F1]">CHAMPION</span>
              <span className="font-black italic text-xl tracking-widest text-[#F4F4F1]">CHAMPION</span>
           </div>
        </div>

      </div>

      {/* Background Subtle Lines */}
      <div className="absolute inset-0 topographic-bg opacity-[0.05] pointer-events-none" />
    </section>
  );
};

export default ChampionCollection;