import React, { useState } from "react";

type CodeObject = {
  language: string;
  code: string;
};

const CodeSnippetInput: React.FC = () => {
  const [language, setLanguage] = useState<string>("javascript"); // Выбранный язык
  const [code, setCode] = useState<string>(""); // Введённый код

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Генерация объекта
    const result: CodeObject = {
      language,
      code,
    };

    console.log(result); // Вывод объекта в консоль
    alert(`Generated: ${JSON.stringify(result, null, 2)}`); // Отображение результата
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Code Input Component</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Выбор языка */}
        <div>
          <label htmlFor="language" className="block mb-2 font-medium">
            Choose Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="java">Java</option>
          </select>
        </div>

        {/* Ввод кода */}
        <div>
          <label htmlFor="code" className="block mb-2 font-medium">
            Enter Code
          </label>
          <textarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 resize-none"
            placeholder="Write your code here..."
          ></textarea>
        </div>

        {/* Кнопка сабмита */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Object
        </button>
      </form>
    </div>
  );
};

export default CodeSnippetInput;
