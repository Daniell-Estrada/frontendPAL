import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import App from "@/App";
import AdminPage from "app/pages/admin/admin";
import CourseRoutes from "./course.route";
import ContentRoutes from "./content.route";
import CategoryRoutes from "./category.route";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route index element={<AdminPage />} />
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

/**
 * Archivo responsable de definir las rutas principales de la app
 * Router es el enrutador que maneja la navegación de la app
 * La página principal será Admin Page, se renderiza con /admin
 * Dentro de admin, si el usuario va a /admin/course, se usan las rutas de CourseRoutes.
 * Cualquier otra ruta que no esté definida, mostrará Page not found
 * */
