"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import rawQuestions from "@/data/questions.json";
import { buildShuffledQuiz, filterByDifficulty } from "@/lib/build-quiz";
import type { AnswerLabel, Difficulty, QuizQuestion, ShuffledQuestion } from "@/lib/types";
import { ProgressBar } from "./ProgressBar";
import { QuizQuestion as QuestionCard } from "./QuizQuestion";
import { ScoreScreen } from "./ScoreScreen";

const SOURCE = rawQuestions as QuizQuestion[];
const ADVANCE_MS = 1500;

type Phase = "quiz" | "done";

type Props = {
  difficulty: Difficulty;
};

export function QuizSession({ difficulty }: Props) {
  const [deck, setDeck] = useState<ShuffledQuestion[]>(() =>
    buildShuffledQuiz(filterByDifficulty(SOURCE, difficulty)),
  );
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [selected, setSelected] = useState<AnswerLabel | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = deck.length;
  const current = deck[index] ?? null;

  const restart = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setDeck(buildShuffledQuiz(filterByDifficulty(SOURCE, difficulty)));
    setIndex(0);
    setScore(0);
    setPhase("quiz");
    setSelected(null);
  }, [difficulty]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSelect = useCallback(
    (label: AnswerLabel) => {
      if (selected !== null || !current || phase !== "quiz") return;
      setSelected(label);
      const correct = label === current.correctAnswer;
      if (correct) setScore((s) => s + 1);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        const isLast = index + 1 >= total;
        if (isLast) {
          setPhase("done");
          setSelected(null);
        } else {
          setSelected(null);
          setIndex((i) => i + 1);
        }
      }, ADVANCE_MS);
    },
    [current, index, phase, selected, total],
  );

  useEffect(() => {
    if (phase !== "quiz" || !current || selected !== null) return;

    const labels = current.options.map((o) => o.label);

    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      const k = e.key.toLowerCase();
      let label: AnswerLabel | null = null;
      if (k >= "1" && k <= "4") {
        const i = parseInt(k, 10) - 1;
        label = labels[i] ?? null;
      } else if (k >= "a" && k <= "d") {
        const L = k.toUpperCase() as AnswerLabel;
        if (labels.includes(L)) label = L;
      }
      if (label) {
        e.preventDefault();
        handleSelect(label);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, handleSelect, phase, selected]);

  const feedback = useMemo(() => {
    if (!current || selected === null) return null;
    const ok = selected === current.correctAnswer;
    return {
      ok,
      text: ok
        ? "Correct!"
        : `Wrong — the answer was ${current.correctAnswer}.`,
    };
  }, [current, selected]);

  if (phase === "done") {
    return (
      <ScoreScreen
        difficulty={difficulty}
        correct={score}
        total={total}
        onTryAgain={restart}
      />
    );
  }

  if (!current) {
    return (
      <p className="text-center text-mist-dim">No questions for this level.</p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8">
      <ProgressBar current={index + 1} total={total} />

      <div key={current.id} className="animate-question-in">
        <QuestionCard
          item={current}
          selected={selected}
          onSelect={handleSelect}
          disabled={selected !== null}
        />
      </div>

      <div
        className="min-h-[3rem] text-center"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {feedback && (
          <p
            className={`font-display text-xl font-semibold ${
              feedback.ok ? "text-emerald-400" : "text-ember"
            }`}
          >
            {feedback.text}
          </p>
        )}
        {selected === null && (
          <p className="text-xs text-mist-dim/80">
            Tip: use keys <kbd className="rounded bg-white/10 px-1">1</kbd>–
            <kbd className="rounded bg-white/10 px-1">4</kbd> or{" "}
            <kbd className="rounded bg-white/10 px-1">A</kbd>–
            <kbd className="rounded bg-white/10 px-1">D</kbd>
          </p>
        )}
      </div>
    </div>
  );
}
