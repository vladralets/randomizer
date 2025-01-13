import { useQuestionsList } from "../../context/QuestionsListConext";
import { Question } from "../../types/types";

interface IAccordionQuestionItemProps {
  question: Question;
}

const AccordionQuestionItem = ({ question }: IAccordionQuestionItemProps) => {
  const { setActiveQuestion } = useQuestionsList();

  const showAnswerHandler = () => {
    setActiveQuestion(question);
  };

  return (
    <div className="mb-4 border-b border-gray-200 pb-4 flex justify-between items-center">
      <p className="font-semibold w-5/6">{question.question}</p>
      <button className="text-coral font-semibold" onClick={showAnswerHandler}>
        Show answer
      </button>
    </div>
  );
};

export default AccordionQuestionItem;
