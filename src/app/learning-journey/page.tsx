"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiDotnet,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { Database, Terminal, GraduationCap, Code } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

// Sourced from the "Programming Foundations" roadmap by Dr. Mohammed Abu-Hadhoud (ProgrammingAdvices.com)
const stages = [
  {
    id: "01",
    label: "Foundation Stage",
    status: "COMPLETE",
    range: "Modules 01 — 13",
    desc: "Algorithms & problem-solving (6 levels), C++ fundamentals, OOP concepts and applications, and core data structures — the base every later stage builds on.",
    tags: ["Algorithms", "C++", "OOP", "Data Structures"],
  },
  {
    id: "02",
    label: "Backend Stage",
    status: "IN_PROGRESS",
    range: "Modules 14 — 23",
    desc: "C# from first principles through a full real project (DVLD), raw SQL and T-SQL, then ADO.NET before touching an ORM — learning what Entity Framework abstracts away before relying on it.",
    tags: ["C#", "SQL / T-SQL", "ADO.NET", "Data Structures II"],
  },
  {
    id: "03",
    label: "Bridge — RESTful API",
    status: "QUEUED",
    range: ".NET Core",
    desc: "The connective layer between backend logic and everything downstream — web, mobile, third-party integrations. Treated as its own checkpoint, not an afterthought.",
    tags: ["ASP.NET Core", "JWT & Roles", "Entity Framework Core"],
  },
];

const parallelTrack = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiGit, name: "Git & GitHub" },
];

const coreIcons = [
  { icon: Code, name: "C#" },
  { icon: SiCplusplus, name: "C++" },
  { icon: Database, name: "SQL / T-SQL" },
  { icon: SiDotnet, name: ".NET / ASP.NET Core" },
];

export default function LearningJourneyPage() {
  return (
    <main className="bg-zinc-950 min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Learning", href: "/learning-journey" }]} />

        <header className="mb-20 max-w-3xl">
          <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase block mb-6">
            SELF_DIRECTED // BEYOND_THE_JOB
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white leading-[0.9]">
            Learning <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Log</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Alongside client and freelance work, I follow a structured 24-module programming
            foundations roadmap — algorithms and data structures first, frameworks second — plus
            standalone tracks in web fundamentals and professional workflow skills.
          </p>
        </header>

        {/* Terminal-style status card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-2 px-4 md:px-6 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-3 flex items-center gap-2 font-technical text-[9px] text-white/30 uppercase tracking-widest">
              <Terminal size={10} /> learning.log
            </span>
          </div>
          <div className="p-6 md:p-8 font-technical text-[11px] md:text-xs space-y-2">
            <p className="text-blue-400">guest@node_dz ~ % progress --roadmap=foundations</p>
            <div className="flex gap-3"><span className="text-white/30 w-32 flex-shrink-0">MODULES_DONE</span><span className="text-white/80">20 / 24</span></div>
            <div className="flex gap-3"><span className="text-white/30 w-32 flex-shrink-0">CURRENT</span><span className="text-white/80">Data Structures II · Algorithms L6 · Database L2</span></div>
            <div className="flex gap-3"><span className="text-white/30 w-32 flex-shrink-0">PARALLEL</span><span className="text-white/80">HTML / CSS / JavaScript foundations</span></div>
            <div className="flex gap-3"><span className="text-white/30 w-32 flex-shrink-0">SOURCE</span><span className="text-white/80">Programming Advices — Dr. Mohammed Abu-Hadhoud</span></div>
          </div>
        </motion.div>

        {/* Roadmap stages */}
        <section className="mb-24">
          <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase block mb-8">
            Roadmap
          </span>
          <div className="space-y-4">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="font-technical text-[10px] text-blue-400/70">[{stage.id}]</span>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">{stage.label}</h3>
                  <span
                    className={`text-[9px] font-technical uppercase tracking-widest px-2 py-1 rounded-full border ${
                      stage.status === "COMPLETE"
                        ? "text-green-400 border-green-500/30 bg-green-500/5"
                        : stage.status === "IN_PROGRESS"
                        ? "text-blue-400 border-blue-500/30 bg-blue-500/5"
                        : "text-white/40 border-white/10"
                    }`}
                  >
                    {stage.status.replace("_", " ")}
                  </span>
                  <span className="ml-auto font-technical text-[10px] text-white/20 uppercase tracking-widest">{stage.range}</span>
                </div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-4 pl-6 border-l border-white/10">
                  {stage.desc}
                </p>
                <div className="flex flex-wrap gap-2 pl-6">
                  {stage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-white/60 bg-white/5 px-2 py-1 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core tech icons */}
        <section className="mb-24">
          <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase block mb-8">
            Core Languages
          </span>
          <div className="flex flex-wrap gap-6">
            {coreIcons.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 px-6 py-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
              >
                <item.icon size={22} className="text-blue-400" />
                <span className="text-sm font-bold uppercase tracking-wider text-white/80">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Parallel web-fundamentals track */}
        <section className="pt-16 border-t border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={16} className="text-blue-400" />
            <span className="text-[10px] font-technical text-white/20 tracking-[0.6em] uppercase">
              Parallel Track — Web Fundamentals & Workflow
            </span>
          </div>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
            Alongside the core roadmap, I'm building depth in web fundamentals from first principles
            rather than framework shortcuts, plus Git-based collaboration workflow and professional
            skills courses (time management, structured workflow discipline).
          </p>
          <div className="flex flex-wrap gap-4">
            {parallelTrack.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-full text-white/70 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300"
              >
                <item.icon size={14} className="text-blue-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
