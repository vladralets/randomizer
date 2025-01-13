import { useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";

interface ICodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet = ({ code, language = "javascript" }: ICodeSnippetProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto border border-gray-700">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeSnippet;
