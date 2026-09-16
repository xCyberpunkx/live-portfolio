"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Check } from "lucide-react";

/**
 * Tech stack, rendered as a resolved `npm ls --workspaces` dependency
 * tree — a monorepo manifest instead of an icon grid. Renders fully
 * resolved immediately (no typewriter, no cascading lines) — the section
 * still fades in once on scroll, same as every other section, but nothing
 * inside the terminal animates on its own.
 *
 * Data below is the single source of truth — edit WORKSPACES to update
 * your stack.
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

export default function TechStack() {
  return (
    <section
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
              <span style={{ color: "var(--text-primary)" }}>{COMMAND}</span>
            </div>

            <div className="mt-5 whitespace-pre leading-relaxed">
              {LINES.map((line) => (
                <div key={line.key}>
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
                </div>
              ))}
            </div>

            <div
              className="mt-6 pt-6 border-t flex items-center gap-2"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <Check size={12} color="#3b82f6" />
              <span style={{ color: "var(--text-secondary)" }}>
                found {TOTAL_PACKAGE_COUNT} packages across {WORKSPACES.length} workspaces
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2" style={{ color: "var(--text-quaternary)" }}>
              <span>guest@node_dz ~ % _</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
