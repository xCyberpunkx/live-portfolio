"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "onboarding-tour-v1";
const START_DELAY_MS = 1400;

type TourContextValue = {
  activeStep: number | null;
  totalSteps: number;
  next: () => void;
  skip: () => void;
};

const TourContext = createContext<TourContextValue>({
  activeStep: null,
  totalSteps: 0,
  next: () => {},
  skip: () => {},
});

export function useOnboardingTour() {
  return useContext(TourContext);
}

/**
 * Wrap the nav (or whatever contains your tour targets) in this.
 * `totalSteps` should match however many <TourHighlight> steps you render.
 * Pass a different `totalSteps` for mobile vs desktop if some targets
 * aren't visible on a given layout (e.g. Download CV is hidden on mobile).
 */
export function OnboardingTourProvider({
  totalSteps,
  children,
}: {
  totalSteps: number;
  children: ReactNode;
}) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    if (totalSteps <= 0) return;
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // ignore
    }
    if (seen) return;

    const timer = setTimeout(() => setActiveStep(0), START_DELAY_MS);
    return () => clearTimeout(timer);
  }, [totalSteps]);

  const finish = useCallback(() => {
    setActiveStep(null);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const next = useCallback(() => {
    setActiveStep((current) => {
      if (current === null) return null;
      const nextStep = current + 1;
      if (nextStep >= totalSteps) {
        try {
          window.localStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // ignore
        }
        return null;
      }
      return nextStep;
    });
  }, [totalSteps]);

  return (
    <TourContext.Provider value={{ activeStep, totalSteps, next, skip: finish }}>
      {children}
    </TourContext.Provider>
  );
}

/**
 * Wrap a single tour target in this. It renders a `relative` box around
 * whatever you pass as children, draws a pulsing spotlight ring around it
 * when it's the active step, and pops a callout with Next/Got it/Skip.
 *
 * Usage:
 *   <TourHighlight step={0} title="Try it out" description="..." align="right">
 *     <ThemeToggle />
 *   </TourHighlight>
 */
export function TourHighlight({
  step,
  title,
  description,
  align = "right",
  side = "bottom",
  children,
}: {
  step: number;
  title: string;
  description: string;
  align?: "left" | "right" | "center";
  side?: "top" | "bottom";
  children: ReactNode;
}) {
  const { activeStep, totalSteps, next, skip } = useOnboardingTour();
  const isActive = activeStep === step;
  const isLast = step === totalSteps - 1;

  const alignClass =
    align === "left" ? "left-0" : align === "center" ? "left-1/2 -translate-x-1/2" : "right-0";
  const arrowAlignClass =
    align === "left" ? "left-6" : align === "center" ? "left-1/2 -translate-x-1/2" : "right-6";

  return (
    <div className="relative">
      {/* Pulsing spotlight ring around the target while it's the active step */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -inset-2 rounded-full pointer-events-none z-[125]"
            style={{
              boxShadow: "0 0 0 2px var(--accent), 0 0 24px 4px var(--accent-soft)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 0 2px var(--accent)" }}
              animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.35, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {children}

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: side === "bottom" ? -8 : 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === "bottom" ? -6 : 6, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={`absolute z-[130] w-[260px] ${alignClass} ${
              side === "bottom" ? "top-full mt-4" : "bottom-full mb-4"
            }`}
          >
            {/* Arrow */}
            <div
              className={`absolute w-3 h-3 rotate-45 ${arrowAlignClass} ${
                side === "bottom" ? "-top-[6px]" : "-bottom-[6px]"
              }`}
              style={{
                backgroundColor: "var(--bg-surface)",
                borderLeft: side === "bottom" ? "1px solid var(--border-default)" : "none",
                borderTop: side === "bottom" ? "1px solid var(--border-default)" : "none",
                borderRight: side === "top" ? "1px solid var(--border-default)" : "none",
                borderBottom: side === "top" ? "1px solid var(--border-default)" : "none",
              }}
            />

            <div
              className="relative rounded-xl border p-4 backdrop-blur-xl"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-default)",
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
              }}
            >
              <button
                onClick={skip}
                aria-label="Skip tour"
                className="absolute top-2 right-2 p-1 rounded-full opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: "var(--text-primary)" }}
              >
                <X size={12} />
              </button>

              <p
                className="font-technical text-[9px] uppercase tracking-[0.15em] mb-1.5"
                style={{ color: "var(--accent)" }}
              >
                {title}
              </p>
              <p className="text-[12.5px] leading-snug mb-4 pr-3" style={{ color: "var(--text-secondary)" }}>
                {description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === step ? "14px" : "5px",
                        backgroundColor: i === step ? "var(--accent)" : "var(--border-strong)",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-colors hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                >
                  {isLast ? "Got it" : "Next"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
