"use client";

import Link from "next/link";
import type { Difficulty } from "@/lib/types";

const difficultyLabel: Record<Difficulty, string> = {
  basic: "Basic",
  medium: "Medium",
  hard: "Hard",
};

function tierMessage(pct: number): { title: string; subtitle: string } {
  if (pct >= 90) {
    return {
      title: "Cosmic master",
      subtitle: "Your grasp of Cosmic Signature is extraordinary.",
    };
  }
  if (pct >= 70) {
    return {
      title: "Stellar navigator",
      subtitle: "Strong command of mechanics, prizes, and strategy.",
    };
  }
  if (pct >= 50) {
    return {
      title: "Orbiting knowledge",
      subtitle: "Solid foundation — a few more rounds and you will shine.",
    };
  }
  return {
    title: "Still exploring",
    subtitle: "Every round teaches something new. Try again anytime.",
  };
}

type Props = {
  difficulty: Difficulty;
  correct: number;
  total: number;
  onTryAgain: () => void;
};

export function ScoreScreen({ difficulty, correct, total, onTryAgain }: Props) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const { title, subtitle } = tierMessage(pct);

  return (
    <div className="mx-auto max-w-lg space-y-8 text-center">
      <div className="rounded-3xl border border-white/10 bg-linear-to-b from-space-800/90 to-space-900/90 p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)] backdrop-blur-md md:p-10">
        <p className="text-sm font-medium uppercase tracking-widest text-nebula">
          {difficultyLabel[difficulty]} complete
        </p>
        <p className="mt-4 font-display text-5xl font-bold tabular-nums text-white md:text-6xl">
          {correct}
          <span className="text-mist-dim">/{total}</span>
        </p>
        <p className="mt-2 text-lg text-mist-dim">correct</p>
        <p className="mt-6 font-display text-2xl text-starlight-soft">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-mist-dim">{subtitle}</p>
        <p className="mt-4 text-sm tabular-nums text-nebula-dim">{pct}% accuracy</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onTryAgain}
          className="rounded-xl bg-linear-to-r from-nebula to-nebula-dim px-6 py-3.5 font-medium text-space-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula focus-visible:ring-offset-2 focus-visible:ring-offset-space-950"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-white/20 px-6 py-3.5 text-center font-medium text-mist transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-starlight focus-visible:ring-offset-2 focus-visible:ring-offset-space-950"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
