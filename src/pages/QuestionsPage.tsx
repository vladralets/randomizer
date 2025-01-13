import cx from "classnames";
import { useState } from "react";
import { QuestionsListLayout } from "../components/layout";
import { QuestionsListProvider } from "../context/QuestionsListConext";
import { RandomizerLayout } from "../components/layout";

type TTabs = "list" | "randomazer";

const QuestionsPage = () => {
  const [tab, setTab] = useState<TTabs>("list");

  return (
    <QuestionsListProvider>
      <div className="flex justify-center gap-4 py-5">
        <button
          onClick={() => setTab("list")}
          className={cx("bg-coral py-2 w-28 rounded-md", {
            "bg-orchid": tab === "list",
            "bg-coral": tab !== "list",
          })}
        >
          List
        </button>
        <button
          onClick={() => setTab("randomazer")}
          className={cx("bg-coral py-2 w-28 rounded-md", {
            "bg-orchid": tab === "randomazer",
            "bg-coral": tab !== "randomazer",
          })}
        >
          Randomazer
        </button>
      </div>
      {tab === "list" && <QuestionsListLayout />}
      {tab === "randomazer" && <RandomizerLayout />}
    </QuestionsListProvider>
  );
};

export default QuestionsPage;
