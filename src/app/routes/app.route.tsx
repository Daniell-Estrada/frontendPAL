import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminPage from "app/pages/admin/admin";
import HomePage from "app/pages/home.page";
import CourseRoutes from "./course.route";
import ContentRoutes from "./content.route";
import CategoryRoutes from "./category.route";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin" element={<AdminPage />}>
          <Route path="course/*" element={<CourseRoutes />} />
          <Route path="content/*" element={<ContentRoutes />} />
          <Route path="category/*" element={<CategoryRoutes />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;