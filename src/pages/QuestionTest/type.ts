export interface QuestionType {
  number: number;
  questionContent: string;
  explanation: string;
  listAnswer: {
    isCorrect: boolean;
    id: number;
    content: string;
  }[];
}
export interface AnswerType {
  order: number;
  option: number[] | undefined;
  correct: boolean;
}
