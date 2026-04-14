"use client";

import type { AnswerLabel, ShuffledQuestion } from "@/lib/types";

type Props = {
  item: ShuffledQuestion;
  selected: AnswerLabel | null;
  onSelect: (label: AnswerLabel) => void;
  disabled: boolean;
};

export function QuizQuestion({ item, selected, onSelect, disabled }: Props) {
  const showResult = selected !== null;

  return (
    <article className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-space-900/80 p-5 shadow-lg backdrop-blur-md md:p-8">
        <p className="font-display text-lg leading-relaxed text-white md:text-xl whitespace-pre-wrap">
          {item.question}
        </p>
      </div>

      <div
        className="grid gap-3 sm:grid-cols-2"
        role="radiogroup"
        aria-labelledby="quiz-question-heading"
      >
        <h2 id="quiz-question-heading" className="sr-only">
          Choose an answer
        </h2>
        {item.options.map((opt, idx) => {
          const isCorrect = opt.label === item.correctAnswer;
          const isChosen = opt.label === selected;
          let stateClass =
            "border-white/15 bg-space-800/60 hover:border-nebula/40 hover:bg-space-800/90";
          if (showResult) {
            if (isCorrect) {
              stateClass =
                "border-emerald-400/70 bg-emerald-500/15 ring-2 ring-emerald-400/40";
            } else if (isChosen) {
              stateClass =
                "border-red-400/60 bg-red-500/10 ring-2 ring-red-400/30";
            } else {
              stateClass = "border-white/10 bg-space-900/40 opacity-50";
            }
          }

          return (
            <button
              key={opt.label}
              type="button"
              role="radio"
              aria-checked={isChosen}
              tabIndex={disabled ? -1 : 0}
              disabled={disabled}
              onClick={() => onSelect(opt.label)}
              className={`flex gap-3 rounded-xl border px-4 py-4 text-left text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula focus-visible:ring-offset-2 focus-visible:ring-offset-space-950 md:text-base ${stateClass}`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display text-sm font-bold ${
                  showResult && isCorrect
                    ? "bg-emerald-500/30 text-emerald-200"
                    : showResult && isChosen
                      ? "bg-red-500/30 text-red-200"
                      : "bg-white/10 text-starlight-soft"
                }`}
              >
                {opt.label}
              </span>
              <span className="pt-0.5 leading-snug text-mist">{opt.text}</span>
              <span className="sr-only">
                Shortcut key {idx + 1}
              </span>
            </button>
          );
        })}
      </div>
    </article>
  );
}
