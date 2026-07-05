"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      data-cursor="TOGGLE"
      className="relative w-16 h-8 flex-shrink-0 rounded-full border flex items-center px-1 transition-colors duration-500"
      style={{
        perspective: "300px",
        backgroundColor: "var(--bg-toggle-track)",
        borderColor: "var(--border-default)",
      }}
    >
      <motion.div
        animate={{ x: isLight ? 32 : 0, rotateY: isLight ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-6 h-6 rounded-full relative"
      >
        {/* Dark face */}
        <div
          className="absolute inset-0 rounded-full flex items-center justify-center bg-zinc-900 border border-white/10 shadow-md"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Moon size={12} className="text-blue-400" />
        </div>
        {/* Light face */}
        <div
          className="absolute inset-0 rounded-full flex items-center justify-center bg-white border border-black/10 shadow-md"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Sun size={12} className="text-blue-600" />
        </div>
      </motion.div>
    </button>
  );
}
