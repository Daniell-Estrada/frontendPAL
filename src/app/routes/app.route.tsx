import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseRoutes from "./course.route";
// import App from "@/App";
import AdminPage from "../pages/admin/admin";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route index element={<AdminPage />} />
        <Route path="admin" element={<AdminPage />}>
          <Route path="course/*" element={<CourseRoutes />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
