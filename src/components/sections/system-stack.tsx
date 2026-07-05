"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiTypescript,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithubactions,
  SiNginx,
  SiNeovim,
  SiWireshark,
} from "react-icons/si";
import { Database, Shield, Terminal } from "lucide-react";

const NEOFETCH_INFO = [
  { label: "os", value: "Arch Linux x86_64" },
  { label: "host", value: "NODE_DZ" },
  { label: "kernel", value: "software-engineer-5.0" },
  { label: "uptime", value: "4+ years coding" },
  { label: "shell", value: "zsh" },
  { label: "wm", value: "Hyprland" },
  { label: "terminal", value: "Neovim" },
  { label: "repos", value: "244 public // 443 stars" },
];

const SWATCHES = [
  "#000000", "#ef4444", "#22c55e", "#eab308",
  "#3b82f6", "#a855f7", "#22d3ee", "#ffffff",
];

const STACK_CATEGORIES = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Bash", icon: SiGnubash },
      { name: "SQL", icon: Database },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    label: "Backend & Databases",
    items: [
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Nginx", icon: SiNginx },
      { name: "Neovim", icon: SiNeovim },
    ],
  },
  {
    label: "Security & Network",
    items: [
      { name: "Wireshark", icon: SiWireshark },
      { name: "Metasploit", icon: Shield },
      { name: "Burp Suite", icon: Shield },
      { name: "Nmap", icon: Shield },
    ],
  },
];

function CategoryBlock({ category, index }: { category: (typeof STACK_CATEGORIES)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const pct = 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-technical uppercase tracking-[0.4em]" style={{ color: "var(--text-tertiary)" }}>
          {category.label}
        </span>
        <span className="text-[9px] font-technical text-blue-400/70 uppercase tracking-widest tabular-nums">
          {inView ? `${category.items.length}/${category.items.length} synced` : "syncing..."}
        </span>
      </div>

      <div className="h-[2px] rounded-full overflow-hidden mb-4" style={{ backgroundColor: "var(--border-subtle)" }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: index * 0.06 + 0.1, ease: "easeOut" }}
          className="h-full bg-blue-500/60 origin-left"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {category.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.06 + 0.2 + i * 0.05, duration: 0.3 }}
            className="flex items-center gap-2 px-4 py-2.5 border rounded-full hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300"
            style={{ borderColor: "var(--border-default)", color: "var(--text-secondary)" }}
          >
            <item.icon size={14} className="text-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SystemStack() {
  return (
    <section className="relative py-24 md:py-48 border-t overflow-hidden" style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] md:tracking-[1em] uppercase block mb-6" style={{ color: "var(--text-quaternary)" }}>
            SYSTEM_SPECS
          </span>
          <h2 className="text-[12vw] md:text-[7vw] font-black leading-[0.85] uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
            $ NEOFETCH
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Terminal identity card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}>
              <div className="terminal-chrome flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-chrome)" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>
                  <Terminal size={10} /> zed@node_dz
                </span>
              </div>

              <div className="p-6 md:p-8 font-technical text-[11px] md:text-xs">
                <p className="text-blue-400 mb-6">guest@node_dz {"~"} % neofetch</p>

                <div className="space-y-2">
                  {NEOFETCH_INFO.map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <span className="uppercase w-16 flex-shrink-0" style={{ color: "var(--text-tertiary)" }}>{row.label}</span>
                      <span style={{ color: "var(--text-secondary)" }}>{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-1.5 mt-6">
                  {SWATCHES.map((c, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-sm border"
                      style={{ backgroundColor: c, borderColor: "var(--border-default)" }}
                    />
                  ))}
                </div>

                <p className="mt-6 flex items-center gap-2" style={{ color: "var(--text-tertiary)" }}>
                  guest@node_dz {"~"} %
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                    className="w-1.5 h-3.5 inline-block"
                    style={{ backgroundColor: "var(--text-muted)" }}
                  />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Categorized stack, rendered as sequential package installs */}
          <div className="lg:col-span-7 space-y-10">
            {STACK_CATEGORIES.map((category, catIndex) => (
              <CategoryBlock key={category.label} category={category} index={catIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
