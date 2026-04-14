export type AnswerLabel = "A" | "B" | "C" | "D";

export type Difficulty = "basic" | "medium" | "hard";

export type QuizOption = {
  label: AnswerLabel;
  text: string;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
  correctAnswer: AnswerLabel;
  difficulty: Difficulty;
};

export type ShuffledQuestion = {
  id: number;
  question: string;
  /** Options in display order; labels still identify the correct semantic answer */
  options: QuizOption[];
  correctAnswer: AnswerLabel;
};
