"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import rawQuestions from "@/data/questions.json";
import { buildShuffledQuiz, filterByDifficulty } from "@/lib/build-quiz";
import type { AnswerLabel, Difficulty, QuizQuestion, ShuffledQuestion } from "@/lib/types";
import { ProgressBar } from "./ProgressBar";
import { QuizQuestion as QuestionCard } from "./QuizQuestion";
import { ScoreScreen } from "./ScoreScreen";

const SOURCE = rawQuestions as QuizQuestion[];
const CORRECT_ADVANCE_MS = 1800;

type Phase = "quiz" | "done";

type Props = {
  difficulty: Difficulty;
};

export function QuizSession({ difficulty }: Props) {
  // Deferred shuffle: initialize empty so server and client agree on the
  // first paint; shuffle in a client-only effect to avoid hydration mismatch.
  const [deck, setDeck] = useState<ShuffledQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [selected, setSelected] = useState<AnswerLabel | null>(null);
  const [showOthers, setShowOthers] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDeck(buildShuffledQuiz(filterByDifficulty(SOURCE, difficulty)));
  }, [difficulty]);

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
    setShowOthers(false);
  }, [difficulty]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const goToNextQuestion = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    const isLast = index + 1 >= total;
    if (isLast) {
      setPhase("done");
      setSelected(null);
      setShowOthers(false);
    } else {
      setSelected(null);
      setShowOthers(false);
      setIndex((i) => i + 1);
    }
  }, [index, total]);

  const handleSelect = useCallback(
    (label: AnswerLabel) => {
      if (selected !== null || !current || phase !== "quiz") return;
      setSelected(label);
      const correct = label === current.correctAnswer;
      if (correct) setScore((s) => s + 1);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (correct) {
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
          goToNextQuestion();
        }, CORRECT_ADVANCE_MS);
      }
    },
    [current, goToNextQuestion, phase, selected],
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

  useEffect(() => {
    if (phase !== "quiz" || !current || selected === null) return;
    if (selected === current.correctAnswer) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      if (e.key === "Enter") {
        e.preventDefault();
        goToNextQuestion();
        return;
      }
      if (e.key.toLowerCase() === "e") {
        e.preventDefault();
        setShowOthers((v) => !v);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goToNextQuestion, phase, selected]);

  const feedback = useMemo(() => {
    if (!current || selected === null) return null;
    return {
      ok: selected === current.correctAnswer,
      correctLabel: current.correctAnswer,
      explanation: current.explanation,
    };
  }, [current, selected]);

  const otherOptions = useMemo(() => {
    if (!current) return [];
    return current.options.filter((o) => o.label !== current.correctAnswer);
  }, [current]);

  const correctOption = useMemo(() => {
    if (!current) return null;
    return current.options.find((o) => o.label === current.correctAnswer) ?? null;
  }, [current]);

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
    // Either no questions for this level, or the client-side shuffle hasn't
    // populated the deck yet. Render a lightweight placeholder instead of
    // running the shuffle during SSR (which would hydrate-mismatch).
    return (
      <div className="mx-auto w-full max-w-3xl">
        <div className="h-56 animate-pulse rounded-2xl border border-white/10 bg-space-900/60" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
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
        className="space-y-4"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {feedback && feedback.ok && (
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-center">
            <p className="font-display text-xl font-semibold text-emerald-300">
              Correct!
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {feedback.explanation}
            </p>
          </div>
        )}

        {feedback && !feedback.ok && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-ember/40 bg-red-500/10 p-5">
              <p className="font-display text-xl font-semibold text-ember">
                Wrong — the answer was {feedback.correctLabel}.
              </p>
              {correctOption && (
                <p className="mt-3 text-sm font-medium text-emerald-300">
                  {correctOption.label}) {correctOption.text}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-mist">
                <span className="font-semibold text-white">
                  Why {feedback.correctLabel} is right:
                </span>{" "}
                {feedback.explanation}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-space-900/70 p-4">
              <button
                type="button"
                onClick={() => setShowOthers((v) => !v)}
                aria-expanded={showOthers}
                className="flex w-full items-center justify-between gap-3 text-left font-display text-sm font-semibold text-mist transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula focus-visible:ring-offset-2 focus-visible:ring-offset-space-950"
              >
                <span>
                  Why the others are wrong{" "}
                  <span className="text-xs font-normal text-mist-dim">
                    (press{" "}
                    <kbd className="rounded bg-white/10 px-1">E</kbd> to
                    toggle)
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`text-mist-dim transition-transform ${
                    showOthers ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {showOthers && (
                <ul className="mt-4 space-y-3 text-sm">
                  {otherOptions.map((o) => {
                    const youPicked = o.label === selected;
                    return (
                      <li
                        key={o.label}
                        className={`rounded-lg border p-3 ${
                          youPicked
                            ? "border-ember/50 bg-red-500/10"
                            : "border-white/10 bg-space-800/40"
                        }`}
                      >
                        <p className="font-medium text-starlight-soft">
                          {o.label}){" "}
                          <span className="font-normal text-mist">
                            {o.text}
                          </span>
                          {youPicked && (
                            <span className="ml-2 rounded bg-red-500/20 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-ember">
                              You picked
                            </span>
                          )}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-mist-dim">
                          {o.rationale}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={goToNextQuestion}
                className="rounded-xl bg-linear-to-r from-nebula to-nebula-dim px-6 py-3.5 font-medium text-space-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula focus-visible:ring-offset-2 focus-visible:ring-offset-space-950"
              >
                {index + 1 < total ? "Next question" : "See results"}{" "}
                <span className="ml-2 text-xs opacity-70">↵</span>
              </button>
            </div>
          </div>
        )}

        {selected === null && (
          <p className="text-center text-xs text-mist-dim/80">
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
