"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Home,
  User,
  Wrench,
  FolderGit2,
  Newspaper,
  Gauge,
  Mail,
  Download,
  Github,
  Linkedin,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider"; // adjust to your actual theme hook/context

/**
 * Fake "terminal command bar" — press ⌘K / Ctrl+K anywhere to open.
 * Type a path-ish command (`cd /projects`, `open resume`, `theme light`)
 * or just a name, and hit enter. Arrow keys move the selection.
 *
 * Drop <CommandPalette /> once, near the root — e.g. in layout.tsx next to
 * <CustomCursor /> — so it's globally available.
 */

type CommandItem = {
  id: string;
  label: string;
  hint: string; // shown right-aligned, e.g. the "command" form
  keywords: string[];
  icon: React.ElementType;
  run: (ctx: { router: ReturnType<typeof useRouter>; toggleTheme: () => void }) => void;
};

function buildCommands(): CommandItem[] {
  return [
    {
      id: "home",
      label: "Home",
      hint: "cd /",
      keywords: ["home", "cd", "root", "index"],
      icon: Home,
      run: ({ router }) => router.push("/"),
    },
    {
      id: "about",
      label: "About",
      hint: "cd /about",
      keywords: ["about", "cd", "bio", "identity"],
      icon: User,
      run: ({ router }) => router.push("/about"),
    },
    {
      id: "services",
      label: "Services",
      hint: "cd /services",
      keywords: ["services", "cd", "offer"],
      icon: Wrench,
      run: ({ router }) => router.push("/services"),
    },
    {
      id: "projects",
      label: "Projects",
      hint: "cd /projects",
      keywords: ["projects", "cd", "work", "archive", "portfolio"],
      icon: FolderGit2,
      run: ({ router }) => router.push("/projects"),
    },
    {
      id: "blog",
      label: "Blog",
      hint: "cd /blog",
      keywords: ["blog", "cd", "posts", "writing"],
      icon: Newspaper,
      run: ({ router }) => router.push("/blog"),
    },
    {
      id: "f1",
      label: "Formula 1 Stats",
      hint: "cd /f1",
      keywords: ["f1", "cd", "formula", "racing"],
      icon: Gauge,
      run: ({ router }) => router.push("/f1"),
    },
    {
      id: "contact",
      label: "Contact",
      hint: "open /contact",
      keywords: ["contact", "open", "email", "message", "hire"],
      icon: Mail,
      run: ({ router }) => {
        router.push("/#contact");
        setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
      },
    },
    {
      id: "resume",
      label: "Download CV",
      hint: "open resume.pdf",
      keywords: ["resume", "cv", "download", "open", "pdf"],
      icon: Download,
      run: () => {
        const a = document.createElement("a");
        a.href = "/resume.pdf";
        a.download = "";
        a.click();
      },
    },
    {
      id: "theme",
      label: "Toggle theme",
      hint: "theme --toggle",
      keywords: ["theme", "dark", "light", "mode", "toggle"],
      icon: Sun,
      run: ({ toggleTheme }) => toggleTheme(),
    },
    {
      id: "github",
      label: "Open GitHub",
      hint: "open github.com/xCyberpunkx",
      keywords: ["github", "code", "source", "repos"],
      icon: Github,
      run: () => window.open("https://github.com/xCyberpunkx", "_blank"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      hint: "open linkedin.com/in/zine-eddine-rouabah",
      keywords: ["linkedin", "profile", "network"],
      icon: Linkedin,
      run: () => window.open("https://www.linkedin.com/in/zine-eddine-rouabah/", "_blank"),
    },
  ];
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Optional — if you don't have a theme context, swap this for your own
  // toggle logic (e.g. flipping data-theme on <html>).
  let toggleTheme = () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
  };
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const themeCtx = useTheme?.();
    if (themeCtx?.toggleTheme) toggleTheme = themeCtx.toggleTheme;
  } catch {
    // no ThemeProvider context available — fall back to the DOM toggle above
  }

  const commands = useMemo(() => buildCommands(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^(cd|open)\s+/, "").replace(/^\//, "");
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.includes(q))
    );
  }, [query, commands]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => setActiveIndex(0), [query]);

  const runCommand = useCallback(
    (cmd: CommandItem) => {
      cmd.run({ router, toggleTheme });
      setOpen(false);
    },
    [router, toggleTheme]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) runCommand(filtered[activeIndex]);
    }
  };

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9998] flex items-start justify-center pt-[12vh] px-4"
          style={{ backgroundColor: "color-mix(in srgb, var(--bg-base) 70%, transparent)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl border rounded-xl overflow-hidden backdrop-blur-xl"
            style={{ backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-elevated)" }}
          >
            {/* Terminal chrome header, matching sub-hero / system-stack cards */}
            <div
              className="terminal-chrome flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-chrome)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-3 flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>
                <Terminal size={10} /> guest@node_dz: {pathname}
              </span>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <span className="font-technical text-sm text-blue-400">$</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="cd /projects, open resume, theme..."
                className="flex-1 bg-transparent outline-none font-technical text-sm tracking-wide"
                style={{ color: "var(--text-primary)" }}
                autoComplete="off"
                spellCheck={false}
              />
              <span className="font-technical text-[9px] uppercase tracking-widest hidden sm:block" style={{ color: "var(--text-quaternary)" }}>
                esc to close
              </span>
            </div>

            <div className="max-h-[50vh] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-5 py-6 font-technical text-xs uppercase tracking-widest" style={{ color: "var(--text-quaternary)" }}>
                  command not found: {query}
                </p>
              )}
              {filtered.map((cmd, i) => {
                const Icon = cmd.icon;
                const active = i === activeIndex;
                return (
                  <button
                    key={cmd.id}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => runCommand(cmd)}
                    className="w-full flex items-center gap-3 px-5 py-3 text-left transition-colors"
                    style={{ backgroundColor: active ? "var(--bg-surface-hover)" : "transparent" }}
                  >
                    <Icon size={15} style={{ color: active ? "var(--accent)" : "var(--text-tertiary)" }} />
                    <span className="flex-1 text-sm font-bold uppercase tracking-wide" style={{ color: "var(--text-primary)" }}>
                      {cmd.label}
                    </span>
                    <span className="font-technical text-[10px]" style={{ color: "var(--text-quaternary)" }}>
                      {cmd.hint}
                    </span>
                    {active && <CornerDownLeft size={12} style={{ color: "var(--accent)" }} />}
                  </button>
                );
              })}
            </div>

            <div
              className="flex items-center justify-between px-5 py-3 border-t font-technical text-[9px] uppercase tracking-widest"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-quaternary)" }}
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><ArrowUp size={10} /><ArrowDown size={10} /> navigate</span>
                <span className="flex items-center gap-1"><CornerDownLeft size={10} /> select</span>
              </div>
              <span>⌘K / CTRL+K</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
