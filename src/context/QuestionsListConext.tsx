import { createContext, useContext, useState } from "react";
import { Question, Questions } from "../types/types";

type AuthContextType = {
  questions: Questions | [];
  setQuestions: (questions: Questions | []) => void;
  activeQuestion: Question | null;
  setActiveQuestion: (question: Question) => void;
};

const QuestionsListContext = createContext<AuthContextType>({
  questions: [],
  setQuestions: () => {},
  activeQuestion: null,
  setActiveQuestion: () => {},
});

export function QuestionsListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [questions, setQuestions] = useState<Questions | []>([]);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);

  const setQuestionsHandler = (questions: Questions | []) => {
    setQuestions(questions);
  };

  const setActiveQuestionHandler = (question: Question) => {
    setActiveQuestion(question);
  };

  return (
    <QuestionsListContext.Provider
      value={{
        questions,
        setQuestions: setQuestionsHandler,
        activeQuestion,
        setActiveQuestion: setActiveQuestionHandler,
      }}
    >
      {children}
    </QuestionsListContext.Provider>
  );
}

export const useQuestionsList = () => useContext(QuestionsListContext);