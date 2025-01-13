import { useState } from "react";
import { QuestionsCategory } from "../../types/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import {AccordionQuestionItem} from "../atoms";
import cx from "classnames";

interface IAccordionItemProps {
    section: QuestionsCategory;
    }

const AccordionItem = ({section}: IAccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div>
      <button
        className="w-full flex justify-between items-center p-4  focus:outline-none"
        onClick={toggleOpen}
      >
        <span className={
            cx(
                "text-lg font-semibold",
                isOpen ? "text-coral" : "text-orchid"
            )
        }>{section.title}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-coral" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-orchid" />
        )}
      </button>
      {isOpen && (
        <div className="p-4">
          {section.questions.map((q, index) => (
            <AccordionQuestionItem key={index} question={q} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AccordionItem