import { useEffect, useState } from "react";
import { useQuestionsList } from "../../context/QuestionsListConext";
import { TopicsSwitcher } from "../atoms";
import { getQuestionsByTopics } from "../../helpers/filterQuestions";
import { shuffleArray } from "../../helpers/shuffleArray";

const RandomizerLayout = () => {
  const [questionsArray, setQuestionsArray] = useState<string[] | []>([]);

  const { questions } = useQuestionsList();

  useEffect(() => {
    const questionsList = getQuestionsByTopics(questions, ["js", "react", "html"]);
    setQuestionsArray(shuffleArray(questionsList));
  }, []);

  return (
    <div className="container mt-16">
      <TopicsSwitcher 
        topics={["js", "react", "html"]} 
        setTopics={() => {}}
      />
      {questionsArray.length > 0 ? (
        <div>
          <ul>
            {questionsArray.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No questions found</p>
      )}
    </div>
  );
};

export default RandomizerLayout;
