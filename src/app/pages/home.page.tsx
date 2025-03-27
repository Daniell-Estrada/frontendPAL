import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Bienvenido a la Plataforma de Cursos</h1>
      <p className="text-gray-600 mt-4">Explora y aprende con nuestros cursos.</p>
      <div className="mt-6 flex gap-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Iniciar Sesión</button>
        </Link>
        <Link to="/admin">
          <button className="px-4 py-2 bg-purple-500 text-white rounded">Ir a Administración</button>
        </Link>
      </div>
    </div>
  );
}