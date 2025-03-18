import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseRoutes from "./course.route";
import App from "@/App";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="course/*" element={<CourseRoutes />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
