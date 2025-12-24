"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Home", href: "/", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/67dae5835c0649927438ae19_ln4-menu-img-1-1.webp" },
    { name: "On Track", href: "/on-track", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/67dae5829bee1b4a7b936935_ln4-menu-img-2-3.webp" },
    { name: "Off Track", href: "/off-track", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/67dae5827466101f6aca77eb_ln4-menu-img-3-2.webp" },
    { name: "Partnerships", href: "/partnerships", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/67dae582f6abf54adb515c73_ln4-menu-img-4-5.webp" },
    { name: "Calendar", href: "/calendar", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c99fa3a9-7f61-4053-a892-9a79b5387a9e-landonorris-com/assets/images/67dae5824cc4245e1e6cf501_ln4-menu-img-5-4.webp" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-[4vw] py-6 flex items-center justify-between ${
          scrolled ? "glass-nav py-4" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="relative z-[60]">
          <div className="flex flex-col leading-none">
            <span className="text-[22px] font-black tracking-[-0.04em] uppercase text-off-white">ZINEDINE</span>
            <span className="text-[22px] font-black tracking-[-0.04em] uppercase text-off-white">ROUABAH</span>
          </div>
        </Link>

        {/* Center ZR Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block opacity-80">
          <div className="text-off-white font-black text-xl tracking-tighter">ZR</div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 relative z-[60]">
          <a
            href="https://github.com/zineddine"
            className="flex items-center gap-2 bg-neon-lime text-rich-black px-5 py-2.5 rounded-full font-bold text-sm tracking-tight btn-primary-hover"
          >
            <span className="uppercase pt-0.5">GITHUB</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 border border-muted-gray rounded-xl flex flex-col items-center justify-center gap-1.5 bg-deep-olive/30 backdrop-blur-md group hover:border-neon-lime transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} className="text-off-white" />
            ) : (
              <>
                <span className="w-6 h-[2px] bg-off-white group-hover:bg-neon-lime transition-colors"></span>
                <span className="w-4 h-[2px] bg-off-white group-hover:bg-neon-lime transition-colors self-end mr-2.5"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[55] bg-deep-olive transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } overflow-hidden`}
      >
        <div className="container h-full flex items-center justify-between pt-24 pb-12">
          {/* Dynamic Images */}
          <div className="hidden lg:grid grid-cols-2 gap-4 w-[45%] h-[70%]">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-rich-black/20 grayscale hover:grayscale-0 transition-all duration-700 border border-muted-gray/20">
                 <Image 
                    src={hoveredLink !== null ? menuLinks[hoveredLink].img : menuLinks[0].img}
                    alt="Lando Dynamic"
                    fill
                    className="object-cover transition-transform duration-1000 scale-105 hover:scale-110"
                 />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-rich-black/20 border border-muted-gray/20">
                 <Image 
                    src={menuLinks[2].img}
                    alt="Lando Static"
                    fill
                    className="object-cover opacity-40"
                 />
              </div>
            </div>
            <div className="pt-20 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-rich-black/20 border border-muted-gray/20">
                <Image 
                    src={menuLinks[1].img}
                    alt="Lando Dynamic"
                    fill
                    className="object-cover opacity-60"
                 />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-rich-black/20 border border-muted-gray/20">
                <Image 
                    src={menuLinks[4].img}
                    alt="Lando Dynamic"
                    fill
                    className="object-cover grayscale"
                 />
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col justify-between h-full lg:w-[45%] w-full">
            <div className="flex flex-col gap-2 mt-auto">
              {menuLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center"
                >
                  <span className="text-[clamp(40px,8vw,100px)] font-black uppercase leading-[0.85] tracking-tighter text-muted-gray group-hover:text-neon-lime transition-colors duration-300">
                    {link.name}
                  </span>
                  {hoveredLink === idx && (
                    <div className="ml-4 w-4 h-4 bg-neon-lime rotate-45 animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            {/* Footer Items in Menu */}
            <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex flex-col gap-6">
                 {/* Helmet Section Icon Concept */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative bg-rich-black rounded-full flex items-center justify-center border border-muted-gray/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-lime/20 to-transparent"></div>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neon-lime z-10 animate-bounce">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.76 4 17.13 5.48 18.42 7.71C17.5 8.5 16.3 9 15 9C12.24 9 10 6.76 10 4.18C10.65 4.06 11.32 4 12 4Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-technical text-muted-gray uppercase tracking-widest leading-relaxed">
                    Systems & Security<br />Researcher
                  </div>
                </div>

                <div className="flex gap-6">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Vercel'].map(social => (
                    <a key={social} href="#" className="text-[11px] font-technical uppercase tracking-widest text-muted-gray hover:text-off-white transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-technical uppercase tracking-widest text-muted-gray text-right">
                <a href="mailto:zineddine@example.com" className="hover:text-neon-lime transition-colors">Contact Enquiries</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;