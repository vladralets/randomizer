export interface Question {
  question: string;
  answer: (string | {
    code: string;
    language: string;
  })[];
}

export interface QuestionsCategory {
  title: string;
  questions: Question[];
}

export interface Questions {
  [key: string]: QuestionsCategory;
}