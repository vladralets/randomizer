import { useState } from "react";
import { QuestionsCategory, Topic } from "../../types/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { AccordionQuestionItem } from "../atoms";
import cx from "classnames";

interface IAccordionItemProps {
  section: QuestionsCategory | Topic;
}

const AccordionItem = ({ section }: IAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="w-full flex justify-between items-center py-2 focus:outline-none"
        onClick={toggleOpen}
      >
        <span
          className={cx(
            "text-lg font-semibold",
            isOpen ? "text-coral" : "text-orchid"
          )}
        >
          {section.title}
        </span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-coral" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-orchid" />
        )}
      </button>
      {isOpen && (
        <div className={cx("topics" in section ? "pl-2" : "pl-4 pt-2")}>
          {"topics" in section ? (
            section.topics.map((topic, index) => (
              <div key={index} className="mb-4">
                <AccordionItem section={topic} />
              </div>
            ))
          ) : (
            section.questions.map((question, index) => (
              <AccordionQuestionItem key={index} question={question} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
