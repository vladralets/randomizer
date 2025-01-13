import { useQuestionsList } from "../../context/QuestionsListConext";
import { AccordionItem } from "../molecules";

const AccordionList = () => {
  const { questions } = useQuestionsList();
  return (
    <>
      {Object.entries(questions).map(([key, section]) => (
        <AccordionItem key={key} section={section} />
      ))}
    </>
  );
};

export default AccordionList;
