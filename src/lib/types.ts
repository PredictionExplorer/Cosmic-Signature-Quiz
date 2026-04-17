export type AnswerLabel = "A" | "B" | "C" | "D";

export type Difficulty = "basic" | "medium" | "hard";

export type QuizOption = {
  label: AnswerLabel;
  text: string;
  /** One-line rationale shown in the "Why the others are wrong" reveal.
   *  For the correct option this begins with "Correct — "; for distractors
   *  it begins with "Wrong — " and explains the specific misconception. */
  rationale: string;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
  correctAnswer: AnswerLabel;
  difficulty: Difficulty;
  /** 1-3 sentence explanation of the correct answer, grounded in the contract. */
  explanation: string;
};

export type ShuffledQuestion = {
  id: number;
  question: string;
  /** Options in display order; labels still identify the correct semantic answer. */
  options: QuizOption[];
  correctAnswer: AnswerLabel;
  explanation: string;
};
