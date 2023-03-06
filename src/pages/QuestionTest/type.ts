export interface QuestionType {
  __typename: string;
  accountId: null;
  answer: Answer[];
  category: null;
  categoryId: string;
  chapterId: string;
  id: string;
  identityNumber: string;
  level: number;
  public: string;
  schoolId: null;
  status: string;
  subjectId: string;
  title: string;
}

export interface Answer {
  __typename: string;
  explainImageOrVideo: null;
  explainText: string;
  id: string;
  isCorrect: boolean;
  questionId: string;
  text: string;
}
