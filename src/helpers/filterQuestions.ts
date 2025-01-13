import { Question, Questions } from "../types/types";

export const getQuestionsByTopics = (
  data: Questions | [],
  topics: string[]
): string[] => {
  const questions: string[] = [];

  topics.forEach((topic) => {
    if (Array.isArray(data)) {
      console.warn("Data is an empty array.");
      return;
    }

    if (data[topic]) {
      questions.push(...data[topic].questions.map((q: Question) => q.question));
    } else {
      console.warn(`Topic "${topic}" not found.`);
    }
  });
  return questions;
};
