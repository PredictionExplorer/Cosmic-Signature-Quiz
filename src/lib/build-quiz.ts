import type { Difficulty, QuizQuestion, ShuffledQuestion } from "./types";
import { shuffle } from "./shuffle";

export function filterByDifficulty(
  all: readonly QuizQuestion[],
  difficulty: Difficulty,
): QuizQuestion[] {
  return all.filter((q) => q.difficulty === difficulty);
}

/** One quiz attempt: shuffled question order and shuffled option order per question */
export function buildShuffledQuiz(questions: readonly QuizQuestion[]): ShuffledQuestion[] {
  const copies = questions.map((q) => ({
    id: q.id,
    question: q.question,
    options: shuffle(q.options.map((o) => ({ ...o }))),
    correctAnswer: q.correctAnswer,
  }));
  return shuffle(copies);
}
