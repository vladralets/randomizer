import { useEffect } from "react";
import { useQuestionsList } from "../../context/QuestionsListConext";
import { AccordionList } from "../organisms";
import { CodeSnippet } from "../atoms";

const QuestionsListLayout = () => {
  const { setQuestions, activeQuestion } = useQuestionsList();

  useEffect(() => {
    fetch("./questions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => console.error("Error:", error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container flex justify-between gap-16 min-h-screen mt-4">
      <div className="w-1/2">
        <AccordionList />
      </div>
      <div className="w-1/2">
        {activeQuestion && (
          <div className="p-4 border border-coral rounded-md">
            <p className="text-xl mb-10 text-orchid">
              {activeQuestion.question}
            </p>
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
