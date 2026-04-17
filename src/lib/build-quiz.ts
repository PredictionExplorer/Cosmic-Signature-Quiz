import type { Difficulty, QuizQuestion, ShuffledQuestion } from "./types";
import { shuffle } from "./shuffle";

export function filterByDifficulty(
  all: readonly QuizQuestion[],
  difficulty: Difficulty,
): QuizQuestion[] {
  return all.filter((q) => q.difficulty === difficulty);
}

/**
 * One quiz attempt: shuffled question order and shuffled option order per question.
 * By default only `ratio` of questions are included (random subset after shuffle).
 */
export function buildShuffledQuiz(
  questions: readonly QuizQuestion[],
  ratio = 0.5,
): ShuffledQuestion[] {
  const copies = questions.map((q) => ({
    id: q.id,
    question: q.question,
    options: shuffle(q.options.map((o) => ({ ...o }))),
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
  const shuffled = shuffle(copies);
  const count = Math.ceil(shuffled.length * ratio);
  return shuffled.slice(0, count);
}
