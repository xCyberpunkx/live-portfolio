import React from 'react';
import Image from 'next/image';

/**
 * Hero component for Lando Norris website.
 * Features a minimalist light background with topographic line patterns,
 * a "Next Race" widget, rotating helmet (placeholder for Rive),
 * and large background portrait silhouettes.
 */
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F4F4F1] overflow-hidden flex flex-col justify-center items-center topographic-bg">
      {/* Background Portrait Silhouettes */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-10">
        <div className="relative w-full h-full max-w-[1440px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/67d18655b032045a4dc78e56_ln4-hp-lando-head-18.webp"
            alt="Lando Norris Silhouette"
            fill
            className="object-contain object-center scale-150"
            priority
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between h-full min-h-screen py-24 md:py-0">
        
        {/* Left Side: Next Race Widget */}
        <div className="w-full md:w-auto self-start md:self-center mt-20 md:mt-0">
          <div className="flex flex-col items-start space-y-4">
            <div className="border border-[#4A4D43] rounded-lg p-6 bg-white/40 backdrop-blur-sm max-w-[240px]">
              <div className="mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A4D43] block mb-1">
                  Next Race
                </span>
                <div className="h-[1px] w-full bg-[#4A4D43]/20 mb-4" />
              </div>
              
              <div className="flex flex-col space-y-6">
                {/* Circuit Map Interface (Simulated Rive) */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 relative opacity-80">
                    <svg viewBox="0 0 100 80" className="w-full h-full fill-none stroke-[#282C20] stroke-[1.5]">
                      <path d="M10,40 C10,20 30,10 50,10 C70,10 90,20 90,40 C90,60 70,70 50,70 C30,70 10,60 10,40 Z" />
                      <path d="M30,30 L70,50 M30,50 L70,30" strokeOpacity="0.3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-xl leading-none text-[#282C20] uppercase">Melbourne</h3>
                    <p className="font-mono text-[10px] tracking-widest text-[#4A4D43] uppercase">GP</p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#4A4D43]/20" />

                {/* Technical Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 relative flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full border border-[#D9FF00] bg-[#D9FF00]/10 flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#282C20] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] leading-tight tracking-wider text-[#4A4D43] uppercase">
                      mclaren f1<br />since 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center/Right: Helmet Animation Area */}
        <div className="flex-1 flex items-center justify-center relative h-[400px] md:h-screen w-full">
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
             {/* Rotating Helmet Image */}
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-4/5 h-4/5 animate-hover items-center justify-center flex">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-17.webp"
                    alt="Lando Norris Helmet"
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
               </div>
             </div>
          </div>
        </div>

        {/* Mobile Large Text Overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-20">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mob-1.svg"
            alt="Lando Norris"
            width={400}
            height={100}
            className="w-full h-auto opacity-20"
          />
        </div>
      </div>

      {/* Hero Desktop Title Hidden but SEO friendly */}
      <div className="sr-only">
        <h1>Lando Norris</h1>
        <h2>2025 McLaren Formula 1 Driver</h2>
      </div>

      {/* Decorative Signature (bottom right on desktop) */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-20 opacity-40">
        <svg width="240" height="80" viewBox="0 0 240 80" className="fill-[#282C20]">
          <path d="M20,60 Q40,20 80,40 T140,30 T220,50" stroke="currentColor" fill="none" strokeWidth="2" opacity="0.4" />
        </svg>
      </div>

      <style jsx global>{`
        .topographic-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 C 150 150 350 50 500 100 S 750 250 800 200' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3Cpath d='M0 200 C 150 250 350 150 500 200 S 750 350 800 300' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3Cpath d='M0 300 C 150 350 350 250 500 300 S 750 450 800 400' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3Cpath d='M0 400 C 150 450 350 350 500 400 S 750 550 800 500' stroke='%23D1D1CB' fill='transparent' stroke-width='0.5'/%3E%3C/svg%3E");
          background-size: cover;
        }

        @keyframes hover {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .animate-hover {
          animation: hover 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}