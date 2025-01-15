import { Questions, QuestionsCategory, Topic, Question } from "../types/types";

export const getQuestionsByTopics = (data: Questions, topics: string[]): string[] => {
  const questions: string[] = [];

  topics.forEach((topicName) => {
    const category: QuestionsCategory | undefined = data[topicName];
    if (category) {
      category.topics.forEach((topic: Topic) => {
        questions.push(...topic.questions.map((q: Question) => q.question));
      });
    } else {
      console.warn(`Topic "${topicName}" not found.`);
    }
  });

  return questions;
};