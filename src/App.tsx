import {
  HomePage,
  AdminPage,
  LoginPage,
  NotFoundPage,
  QuestionsPage,
  TasksPage,
  TestsPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { Header } from "./components/layout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
