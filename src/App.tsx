import { Route, Routes } from "react-router-dom";
import { Header } from "./components/layout";
import {
  HomePage,
  NotFoundPage,
  QuestionsPage
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
