export interface Question {
  question: string;
  answer: (string | {
    code: string;
    language: string;
  })[];
}

export interface Topic {
  title: string;
  questions: Question[];
}

export interface QuestionsCategory {
  title: string;
  topics: Topic[];
}

export interface Questions {
  [key: string]: QuestionsCategory;
}
