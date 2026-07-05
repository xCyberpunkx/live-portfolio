"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { SiLinux } from "react-icons/si";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useLenis } from "@/components/ui/smooth-scroll";
import ThemeToggle from "@/components/ui/theme-toggle";
import { OnboardingTourProvider, TourHighlight } from "@/components/ui/onboarding-tour";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "F1", href: "/f1" },
];

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const pathname = usePathname();
  const lenis = useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (pathname === "/" && element) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(element, { offset: -20 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
      }
    }
  };

  // Desktop gets the full 2-step tour (toggle -> CV). Mobile's top bar only
  // shows the toggle, so it only ever needs step 0.
  const tourSteps = isMobile ? 1 : 2;

  return (
    <OnboardingTourProvider totalSteps={tourSteps}>
      <div className={`transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-[110] origin-left"
          style={{ scaleX: isMobile ? 0 : scaleX, backgroundColor: "var(--accent)" }}
        />
        <nav
          className="glass-nav fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:py-6 flex items-center justify-between backdrop-blur-xl"
          style={{
            backgroundColor: isScrolled ? "var(--bg-surface)" : "transparent",
            borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          }}
        >
          <Link href="/" data-cursor="HOME" className="relative z-[120] group flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 group-hover:opacity-90"
              style={{ backgroundColor: "var(--text-primary)" }}
            >
              <SiLinux className="text-lg" style={{ color: "var(--bg-base)" }} />
            </div>
            <span
              className="font-black tracking-tighter text-lg group-hover:tracking-[0.15em] transition-all duration-500"
              style={{ color: "var(--text-primary)" }}
            >
              LINUX_OS
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  </Link>
                );
              })}
            </div>

            <TourHighlight
              step={0}
              align="center"
              title="Try it out"
              description="Switch to light mode — the whole site restyles itself, not just the colors."
            >
              <ThemeToggle />
            </TourHighlight>

            <TourHighlight
              step={1}
              align="right"
              title="Grab a copy"
              description="Download the CV as a PDF — always up to date with the latest role."
            >
              <a
                href="/resume.pdf"
                download
                data-cursor="GET"
                className="text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
              >
                Download CV
              </a>
            </TourHighlight>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <TourHighlight
              step={0}
              align="center"
              title="Try it out"
              description="Switch to light mode — the whole site restyles itself, not just the colors."
            >
              <ThemeToggle />
            </TourHighlight>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full border transition-all z-[120] relative"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-default)",
                color: "var(--text-primary)",
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[105] flex flex-col items-center justify-center p-6"
              style={{ backgroundColor: "var(--bg-base)" }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 flex items-center gap-2 transition-all group"
                style={{ color: "var(--text-tertiary)" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">EXIT_MENU</span>
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.08 * idx }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all hover:italic"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * navLinks.length }}
                  href="/resume.pdf"
                  download
                  className="mt-4 px-8 py-3 rounded-full text-lg font-black uppercase tracking-tighter"
                  style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </OnboardingTourProvider>
  );
};

export default Navigation;
