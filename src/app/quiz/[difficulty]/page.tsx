import Link from "next/link";
import { notFound } from "next/navigation";
import { QuizSession } from "@/components/QuizSession";
import { StarField } from "@/components/StarField";
import type { Difficulty } from "@/lib/types";

const LEVELS: Difficulty[] = ["basic", "medium", "hard"];

function isDifficulty(s: string): s is Difficulty {
  return LEVELS.includes(s as Difficulty);
}

const titles: Record<Difficulty, string> = {
  basic: "Basic",
  medium: "Medium",
  hard: "Hard",
};

type PageProps = {
  params: Promise<{ difficulty: string }>;
};

export default async function QuizPage({ params }: PageProps) {
  const { difficulty: raw } = await params;
  if (!isDifficulty(raw)) notFound();

  return (
    <div className="relative z-10 flex min-h-full flex-1 flex-col">
      <StarField />
      <div className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-4 py-8 md:px-6 md:py-12">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm text-nebula transition hover:text-starlight-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula focus-visible:ring-offset-2 focus-visible:ring-offset-space-950 rounded-sm"
            >
              ← Home
            </Link>
            <h1 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              {titles[raw]} quiz
            </h1>
          </div>
        </header>

        <QuizSession difficulty={raw} />
      </div>
    </div>
  );
}
