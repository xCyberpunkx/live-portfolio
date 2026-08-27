"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Check } from "lucide-react";
import { prefersReducedMotion } from "@/lib/animations/gsap-config";

/**
 * Tech stack, rendered as a resolved `npm ls --workspaces` dependency
 * tree — a monorepo manifest instead of an icon grid. The command types
 * itself out, then each line of the tree cascades in like a real install
 * resolving, ending on a summary line + blinking prompt.
 *
 * Data below is the single source of truth for both the visible tree and
 * its accessible text alternative — edit WORKSPACES to update your stack.
 */

type Pkg = { name: string; version?: string; note?: string };
type Workspace = { path: string; accent: string; packages: Pkg[] };

const WORKSPACES: Workspace[] = [
  {
    path: "apps/frontend",
    accent: "#60a5fa",
    packages: [
      { name: "react", version: "18.3.1" },
      { name: "next", version: "14.2.0", note: "app router" },
      { name: "tailwindcss", version: "3.4.0" },
    ],
  },
  {
    path: "apps/backend",
    accent: "#3b82f6",
    packages: [
      { name: "laravel", version: "11.x" },
      { name: "nestjs", version: "10.x" },
      { name: "prisma", version: "5.x" },
    ],
  },
  {
    path: "packages/database",
    accent: "#2563eb",
    packages: [
      { name: "postgresql", version: "16" },
      { name: "mongodb", version: "7" },
    ],
  },
  {
    path: "packages/devops",
    accent: "#1d4ed8",
    packages: [
      { name: "docker", version: "25" },
      { name: "github-actions" },
      { name: "nginx", version: "1.25" },
    ],
  },
  {
    path: "packages/security",
    accent: "#1e40af",
    packages: [{ name: "wireshark" }, { name: "burp-suite" }, { name: "nmap" }],
  },
];

const DEV_DEPENDENCIES: Pkg[] = [
  { name: "typescript", version: "5.5" },
  { name: "git" },
  { name: "linux", note: "arch, zsh" },
];

const ROOT_LABEL = "zinou-portfolio@2.0.0";
const COMMAND = "npm ls --workspaces --depth=2";

type Line = {
  key: string;
  depth: number;
  connector: string;
  kind: "root" | "workspace" | "package" | "section";
  text: string;
  version?: string;
  note?: string;
  accent?: string;
};

function buildLines(): Line[] {
  const lines: Line[] = [];
  lines.push({ key: "root", depth: 0, connector: "", kind: "root", text: ROOT_LABEL });

  WORKSPACES.forEach((ws, wi) => {
    const isLastWs = wi === WORKSPACES.length - 1;
    lines.push({
      key: `ws-${ws.path}`,
      depth: 0,
      connector: isLastWs ? "└── " : "├── ",
      kind: "workspace",
      text: ws.path,
      accent: ws.accent,
    });
    ws.packages.forEach((pkg, pi) => {
      const isLastPkg = pi === ws.packages.length - 1;
      const branch = isLastWs ? "    " : "│   ";
      lines.push({
        key: `${ws.path}-${pkg.name}`,
        depth: 1,
        connector: branch + (isLastPkg ? "└── " : "├── "),
        kind: "package",
        text: pkg.name,
        version: pkg.version,
        note: pkg.note,
      });
    });
  });

  lines.push({ key: "devdeps-header", depth: 0, connector: "", kind: "section", text: "devDependencies" });
  DEV_DEPENDENCIES.forEach((pkg, i) => {
    const isLast = i === DEV_DEPENDENCIES.length - 1;
    lines.push({
      key: `dev-${pkg.name}`,
      depth: 0,
      connector: isLast ? "└── " : "├── ",
      kind: "package",
      text: pkg.name,
      version: pkg.version,
      note: pkg.note,
    });
  });

  return lines;
}

const LINES = buildLines();
const TOTAL_PACKAGE_COUNT =
  WORKSPACES.reduce((sum, ws) => sum + ws.packages.length, 0) + DEV_DEPENDENCIES.length;

function useTypewriter(text: string, start: boolean, reducedMotion: boolean, speed = 22) {
  const [out, setOut] = useState(reducedMotion && start ? text : "");
  useEffect(() => {
    if (!start) return;
    if (reducedMotion) {
      setOut(text);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed, reducedMotion]);
  return out;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.4 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [commandDone, setCommandDone] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  const typedCommand = useTypewriter(COMMAND, inView, reducedMotion, 24);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCommandDone(true);
      return;
    }
    if (typedCommand.length === COMMAND.length) {
      const t = setTimeout(() => setCommandDone(true), 150);
      return () => clearTimeout(t);
    }
  }, [typedCommand, inView, reducedMotion]);

  const treeActive = reducedMotion ? inView : commandDone;

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-48 border-t"
      style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span
            className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] md:tracking-[1em] uppercase block mb-6"
            style={{ color: "var(--text-quaternary)" }}
          >
            TECH_STACK
          </span>
          <h2
            className="text-[12vw] md:text-[7vw] font-black leading-[0.85] uppercase tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            $ NPM LS
          </h2>
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border rounded-xl overflow-hidden max-w-3xl mx-auto"
          style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}
        >
          <div
            className="terminal-chrome flex items-center gap-2 px-4 md:px-6 py-3 border-b"
            style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-chrome)" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span
              className="ml-3 flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest"
              style={{ color: "var(--text-tertiary)" }}
            >
              <Terminal size={10} /> workspace.log
            </span>
          </div>

          <div className="p-6 md:p-10 font-technical text-[11px] md:text-[13px] overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-pre" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "#3b82f6" }}>guest@node_dz</span>
              <span style={{ color: "var(--text-quaternary)" }}>~</span>
              <span>%</span>
              <span style={{ color: "var(--text-primary)" }}>{typedCommand}</span>
              {!commandDone && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="w-1.5 h-3.5 inline-block"
                  style={{ backgroundColor: "var(--text-muted)" }}
                />
              )}
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={treeActive ? "show" : "hidden"}
              className="mt-5 whitespace-pre leading-relaxed"
            >
              {LINES.map((line) => (
                <motion.div key={line.key} variants={lineVariant}>
                  {line.kind === "root" && (
                    <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>{line.text}</span>
                  )}

                  {line.kind === "section" && (
                    <>
                      <span> </span>
                      <br />
                      <span style={{ color: "var(--text-tertiary)" }}>{line.text}</span>
                    </>
                  )}

                  {line.kind === "workspace" && (
                    <>
                      <span style={{ color: "var(--text-quaternary)" }}>{line.connector}</span>
                      <span style={{ color: line.accent, fontWeight: 700 }}>{line.text}</span>
                    </>
                  )}

                  {line.kind === "package" && (
                    <>
                      <span style={{ color: "var(--text-quaternary)" }}>{line.connector}</span>
                      <span style={{ color: "var(--text-secondary)" }}>{line.text}</span>
                      {line.version && <span style={{ color: "var(--text-tertiary)" }}>@{line.version}</span>}
                      {line.note && <span style={{ color: "var(--text-quaternary)" }}> ({line.note})</span>}
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={treeActive ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: LINES.length * 0.045 + 0.3 }}
              className="mt-6 pt-6 border-t flex items-center gap-2"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <Check size={12} color="#3b82f6" />
              <span style={{ color: "var(--text-secondary)" }}>
                found {TOTAL_PACKAGE_COUNT} packages across {WORKSPACES.length} workspaces
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={treeActive ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: LINES.length * 0.045 + 0.45 }}
              className="mt-4 flex items-center gap-2"
              style={{ color: "var(--text-quaternary)" }}
            >
              <span>guest@node_dz ~ %</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                className="w-1.5 h-3.5 inline-block"
                style={{ backgroundColor: "var(--text-muted)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
