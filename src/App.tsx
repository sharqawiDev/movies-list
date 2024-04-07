import { useEffect } from "react";
import "./app.scss";
import { AppHeader } from "./components/app-header";
import { MoviesGrid } from "./components/movies-grid";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { MovieDetails } from "./components/movie-details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="movies" element={<MoviesGrid />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="*" element={<h3>Not found page - 404</h3>} />
    </Route>
  )
);

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") navigate("/movies");
  }, [location.pathname, navigate]);
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
function App() {
  return <RouterProvider router={router} />;
}

export default App;
