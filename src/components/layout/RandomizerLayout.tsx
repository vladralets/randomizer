import { useEffect, useState } from "react";
import { useQuestionsList } from "../../context/QuestionsListConext";
import { getQuestionsByTopics } from "../../helpers/filterQuestions";
import { shuffleArray } from "../../helpers/shuffleArray";

const RandomizerLayout = () => {
  const [selectedTopics, setSelectedTopics] = useState<Record<string, string[]>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { questions } = useQuestionsList();

  const topicsByLanguage = !Array.isArray(questions)
    ? Object.keys(questions).reduce<Record<string, string[]>>((acc, lang) => {
        acc[lang] = questions[lang]?.topics.map((topic) => topic.title) || [];
        return acc;
      }, {})
    : {};

  useEffect(() => {
    if (!Array.isArray(questions)) {
      const languages = Object.keys(questions); // Переместили внутрь useEffect
      const filteredQuestions = getQuestionsByTopics(
        questions,
        languages
      ).filter((question) => {
        return languages.some((lang) =>
          (selectedTopics[lang] || []).some((topic) =>
            questions[lang].topics.some(
              (t) =>
                t.title === topic && t.questions.some((q) => q.question === question)
            )
          )
        );
      });

      setShuffledQuestions(shuffleArray(filteredQuestions));
      setCurrentQuestionIndex(0);
    }
  }, [selectedTopics, questions]);

  const toggleTopic = (language: string, topic: string) => {
    setSelectedTopics((prev) => ({
      ...prev,
      [language]: prev[language]?.includes(topic)
        ? prev[language].filter((t) => t !== topic)
        : [...(prev[language] || []), topic],
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % shuffledQuestions.length);
  };

  return (
    <div className="container mx-auto p-6 flex md:flex-col flex-row justify-evenly overflow-hidden">
      <div className="md:w-full w-2/6 bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filter by Topics:</h2>
        <div className="space-y-4">
          {!Array.isArray(questions) &&
            Object.keys(questions).map((lang) => (
              <div key={lang} className="border-b pb-4">
                <h3 className="text-lg font-medium text-coral">{questions[lang]?.title}</h3>
                <div className="mt-4 pl-4 space-y-2">
                  {topicsByLanguage[lang]?.map((topic) => (
                    <label key={topic} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTopics[lang]?.includes(topic) || false}
                        onChange={() => toggleTopic(lang, topic)}
                        className="mr-3 w-4 h-4 accent-coral rounded"
                      />
                      <span>{topic}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="md:w-full w-3/6 bg-gray-900 text-white rounded-lg shadow-md flex items-center justify-center">
        {shuffledQuestions.length > 0 ? (
          <div className="flex flex-col p-6 gap-6 items-center justify-center h-full">
            <p className="text-2xl mb-6">{shuffledQuestions[currentQuestionIndex]}</p>
            <button
              className="px-6 py-2 bg-coral text-white rounded hover:bg-orchid transition"
              onClick={nextQuestion}
            >
              Next Question
            </button>
          </div>
        ) : (
          <p className="text-2xl">No questions found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default RandomizerLayout;
