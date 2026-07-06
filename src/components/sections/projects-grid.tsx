"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, ChevronDown, Target, Wrench, TrendingUp } from "lucide-react";

export type CaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
};

export type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
  github: string;
  desc: string;
  tech: string[];
  year: string;
  caseStudy?: CaseStudy;
};

function CaseStudyBlock({ caseStudy }: { caseStudy: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t pt-6" style={{ borderColor: "var(--border-subtle)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors"
        style={{ color: "var(--text-primary)" }}
      >
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        Read the case study
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: Target, label: "Problem", text: caseStudy.problem },
                { icon: Wrench, label: "Approach", text: caseStudy.approach },
                { icon: TrendingUp, label: "Outcome", text: caseStudy.outcome },
              ].map((block) => (
                <div key={block.label} className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <block.icon size={12} className="text-blue-400" />
                    <span className="font-technical text-[9px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>
                      {block.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{block.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [query, setQuery] = useState("");

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t.trim())));
    return ["all", ...Array.from(set).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTag = activeTag === "all" || p.tech.some((t) => t.trim() === activeTag);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [projects, activeTag, query]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-12 md:mb-16 space-y-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects by name, category, or description..."
          className="w-full bg-transparent border-b py-3 text-lg focus:outline-none focus:border-blue-400 transition-colors"
          style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
        />

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all"
              style={{
                borderColor: activeTag === tag ? "var(--accent)" : "var(--border-default)",
                backgroundColor: activeTag === tag ? "var(--accent-soft)" : "var(--bg-surface)",
                color: activeTag === tag ? "var(--accent)" : "var(--text-secondary)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="font-technical text-[10px] uppercase tracking-widest" style={{ color: "var(--text-quaternary)" }}>
          {filtered.length} of {projects.length} missions matched
        </p>
      </div>

      <LayoutGroup>
        <div className="space-y-24 md:space-y-32 mb-24 md:mb-32">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.section
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-24 items-center`}
              >
                <div
                  className="w-full lg:w-1/2 group relative aspect-[16/10] overflow-hidden border rounded-2xl"
                  style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div
                    className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-700"
                    style={{ backgroundColor: "color-mix(in srgb, var(--bg-base) 40%, transparent)" }}
                  />
                </div>

                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {project.category} — {project.year}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTag(t.trim())}
                        className="text-[10px] font-bold uppercase tracking-widest border px-3 py-1.5 rounded-full hover:border-blue-400/50 transition-colors"
                        style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", color: "var(--text-secondary)" }}
                      >
                        {t.trim()}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>

                  {project.caseStudy && <CaseStudyBlock caseStudy={project.caseStudy} />}
                </div>
              </motion.section>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center py-24 font-technical uppercase tracking-widest" style={{ color: "var(--text-quaternary)" }}>
              no missions match that query
            </p>
          )}
        </div>
      </LayoutGroup>
    </div>
  );
}
