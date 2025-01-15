import { useEffect } from "react";
import { useQuestionsList } from "../../context/QuestionsListConext";
import { AccordionList } from "../organisms";
import { CodeSnippet } from "../atoms";
import { data } from "../../data";

const QuestionsListLayout = () => {
  const { setQuestions, activeQuestion } = useQuestionsList();

  useEffect(() => {
        setQuestions(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container flex justify-between mt-4 gap-12 md:flex-col md:gap-4 md:px-4">
      <div className="w-full">
        <AccordionList />
      </div>
      <div className="w-full">
        {activeQuestion && (
          <div className="p-4 border border-coral rounded-md sticky top-4">
            <p className="text-xl mb-10 text-orchid">{activeQuestion.question}</p>
            <div className="space-y-6">
              {activeQuestion.answer.map((item, index) => {
                if (typeof item === "string") {
                  return <p key={index}>{item}</p>;
                } else {
                  return (
                    <CodeSnippet
                      key={index}
                      code={item.code}
                      language={item.language}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsListLayout;
