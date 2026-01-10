import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/teachers" element={<h1>O‘qituvchilar</h1>} />
          <Route path="/contact" element={<h1>Aloqa</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
