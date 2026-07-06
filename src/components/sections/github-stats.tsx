"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommitHorizontal, GitFork, Star, BookMarked } from "lucide-react";

/**
 * Replaces the hardcoded "244 public // 443 stars" neofetch line with real
 * data from the GitHub REST API (no auth needed — public endpoints only).
 *
 * Usage inside system-stack.tsx:
 *   import GithubStats from "@/components/sections/github-stats";
 *   ...
 *   <GithubStats username="xCyberpunkx" />
 *
 * Drop it either in place of the NEOFETCH_INFO "repos" row, or as its own
 * card beneath the terminal identity block.
 */

type Stats = {
  publicRepos: number;
  followers: number;
  stars: number;
};

type Event = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
};

const EVENT_LABEL: Record<string, string> = {
  PushEvent: "pushed to",
  CreateEvent: "created",
  PullRequestEvent: "opened PR on",
  IssuesEvent: "filed issue on",
  WatchEvent: "starred",
  ForkEvent: "forked",
};

function timeAgo(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

export default function GithubStats({ username }: { username: string }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
          fetch(`https://api.github.com/users/${username}/events/public?per_page=6`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const user = await userRes.json();
        const repos = await reposRes.json();
        const evts = eventsRes.ok ? await eventsRes.json() : [];

        const stars = Array.isArray(repos)
          ? repos.reduce((sum: number, r: { stargazers_count?: number }) => sum + (r.stargazers_count ?? 0), 0)
          : 0;

        if (!cancelled) {
          setStats({ publicRepos: user.public_repos ?? 0, followers: user.followers ?? 0, stars });
          setEvents(Array.isArray(evts) ? evts.filter((e: Event) => EVENT_LABEL[e.type]).slice(0, 5) : []);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: BookMarked, label: "repos", value: stats?.publicRepos },
          { icon: Star, label: "stars", value: stats?.stars },
          { icon: GitFork, label: "followers", value: stats?.followers },
        ].map((s) => (
          <div key={s.label} className="flex flex-col gap-1 px-3 py-2.5 border rounded-lg" style={{ borderColor: "var(--border-default)" }}>
            <div className="flex items-center gap-1.5">
              <s.icon size={11} className="text-blue-400" />
              <span className="font-technical text-[8px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>{s.label}</span>
            </div>
            <span className="font-black text-lg tabular-nums" style={{ color: "var(--text-primary)" }}>
              {status === "loading" ? "—" : status === "error" ? "n/a" : s.value}
            </span>
          </div>
        ))}
      </div>

      <div>
        <p className="font-technical text-[9px] uppercase tracking-widest mb-2" style={{ color: "var(--text-quaternary)" }}>
          recent activity
        </p>
        <div className="space-y-1.5 font-technical text-[10px]">
          {status === "loading" &&
            [0, 1, 2].map((i) => (
              <div key={i} className="h-4 rounded animate-pulse" style={{ backgroundColor: "var(--bg-surface-hover)", width: `${70 - i * 10}%` }} />
            ))}
          {status === "error" && (
            <p style={{ color: "var(--text-quaternary)" }}>could not reach api.github.com</p>
          )}
          {status === "ready" && events.length === 0 && (
            <p style={{ color: "var(--text-quaternary)" }}>no recent public activity</p>
          )}
          {status === "ready" &&
            events.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2"
                style={{ color: "var(--text-secondary)" }}
              >
                <GitCommitHorizontal size={11} className="text-blue-400/70 flex-shrink-0" />
                <span className="truncate">
                  {EVENT_LABEL[e.type]} <span style={{ color: "var(--text-primary)" }}>{e.repo.name.split("/")[1]}</span>
                </span>
                <span className="ml-auto flex-shrink-0" style={{ color: "var(--text-quaternary)" }}>{timeAgo(e.created_at)}</span>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
