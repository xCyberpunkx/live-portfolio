import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const partnerLogos = [
    { name: 'wearegrip', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/68dbd5d7361eb2ca03ba0929_ln4-footer-logo-google-24.svg' },
    { name: 'Uber', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/68dbd5d74d2804b912ed1fcc_ln4-footer-logo-hilton-29.svg' },
    { name: 'LN', logo: true },
    { name: 'QUADRANT', logo: true },
    { name: 'BELL', logo: true },
    { name: 'RALPH LAUREN', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/68dbd5d722f5ba2f4074cbe7_ln4-footer-logo-ralph-lau-25.svg' },
    { name: 'Android', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/68dbd5d70a9e147b77952c0d_ln4-footer-logo-android-26.svg' },
    { name: 'PAP', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/68dbd5d7564fc5a9fccf822f_ln4-footer-logo-pap-27.svg' },
    { name: 'Monster', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/svgs/68dbd5d761eeca9060e00622_ln4-footer-logo-monster-28.svg' }
  ];

  return (
    <footer className="relative bg-[#282C20] pt-20 overflow-hidden">
      {/* Topographic Background Overlay */}
      <div className="absolute inset-0 topographic-bg opacity-40 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="container relative z-10 flex flex-col items-center">
        
        {/* Top Controls Row */}
        <div className="w-full flex justify-between items-start mb-12">
          <div className="flex gap-4">
            <button className="bg-[#D9FF00] p-3 rounded-xl hover:scale-105 transition-transform">
              <ArrowUpRight className="w-6 h-6 text-black rotate-270" />
            </button>
            <button className="bg-[#D9FF00] p-3 rounded-xl hover:scale-105 transition-transform">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Central Visual Area */}
        <div className="relative w-full max-w-4xl flex flex-col items-center justify-center">
          {/* Navigation/Follow Labels */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.3em] font-technical text-[#4A4D43]">Pages</span>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.3em] font-technical text-[#4A4D43]">Follow On</span>
          </div>

          {/* Large Helmet Visual */}
          <div className="relative w-full aspect-[4/3] max-h-[500px]">
             {/* Using a placeholder visual that matches the frame and vibe since specific composite asset isn't available as a single file */}
             <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-full h-full relative overflow-hidden flex items-end justify-center">
                   {/* Helmet centerpiece mockup using brand colors/patterns */}
                   <div className="w-[380px] h-[380px] bg-neutral-900 rounded-full blur-[100px] opacity-30 absolute -bottom-20" />
                   <img 
                    src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cc0ebf793910c2c1995a94_ln4-helmet-full.webp" 
                    alt="Lando Norris Helmet centerpiece" 
                    className="relative z-10 w-auto h-full object-contain"
                   />
                </div>
             </div>
          </div>

          {/* Business Enquiry Button */}
          <div className="mt-8 mb-24 z-20">
            <a 
              href="mailto:business@landonorris.com"
              className="bg-[#D9FF00] hover:bg-[#c6e900] text-black font-technical font-bold text-[13px] py-3.5 px-8 rounded-full flex items-center gap-3 transition-all transform hover:-translate-y-1"
            >
              BUSINESS ENQUIRIES 
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Partner Logos Grid */}
        <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 md:gap-4 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
          {partnerLogos.map((brand, idx) => (
            <div key={idx} className="h-6 w-full relative flex items-center justify-center">
              {brand.url ? (
                <img 
                  src={brand.url} 
                  alt={brand.name} 
                  className="max-h-full max-w-[100px] object-contain brightness-0 invert" 
                />
              ) : (
                <span className="text-white font-technical text-[10px] tracking-widest">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="relative z-20 w-full">
        {/* Accent Border Wrapper */}
        <div className="mx-4 mb-4">
          <div className="bg-[#D9FF00] h-[60px] rounded-2xl flex items-center justify-between px-6 md:px-10 overflow-hidden">
            <div className="text-black text-[11px] font-technical tracking-wider">
              © 2025 Lando Norris. All rights reserved
            </div>
            <div className="flex gap-6 md:gap-10">
              <a href="/privacy-policy" className="text-black text-[11px] font-technical font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">Privacy Policy</a>
              <a href="/terms" className="text-black text-[11px] font-technical font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">Terms</a>
            </div>
          </div>
        </div>

        {/* Notched Frame Visuals (Side accents) */}
        <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#D9FF00] -z-10 origin-bottom scale-y-[0.3]" 
             style={{ clipPath: 'polygon(0% 100%, 0% 0%, 15% 0%, 18% 40%, 82% 40%, 85% 0%, 100% 0%, 100% 100%)' }} />
      </div>

      <style jsx>{`
        .rotate-270 {
          transform: rotate(-90deg);
        }
      `}</style>
    </footer>
  );
};

export default Footer;