import Link from "next/link";
import type { Difficulty } from "@/lib/types";

const styles: Record<
  Difficulty,
  { href: string; title: string; count: string; accent: string; ring: string; glow: string }
> = {
  basic: {
    href: "/quiz/basic",
    title: "Basic",
    count: "25 questions",
    accent: "from-nebula/25 to-nebula-dim/10",
    ring: "ring-cyan-400/40",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]",
  },
  medium: {
    href: "/quiz/medium",
    title: "Medium",
    count: "25 questions",
    accent: "from-supernova/25 to-ember/10",
    ring: "ring-orange-400/35",
    glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.22)]",
  },
  hard: {
    href: "/quiz/hard",
    title: "Hard",
    count: "50 questions",
    accent: "from-starlight/30 to-supernova/15",
    ring: "ring-amber-400/35",
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]",
  },
};

export function DifficultyCard({ difficulty }: { difficulty: Difficulty }) {
  const s = styles[difficulty];
  return (
    <Link
      href={s.href}
      className={`group relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-linear-to-br ${s.accent} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${s.glow} focus-visible:outline-none focus-visible:ring-2 ${s.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-space-950`}
    >
      <span className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {s.title}
      </span>
      <span className="text-sm text-mist-dim">{s.count}</span>
      <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-nebula transition-colors group-hover:text-starlight-soft">
        Start quiz
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
